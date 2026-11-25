import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface RouteSeoConfig {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  robots?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: Record<string, any> | Array<Record<string, any>>;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private router = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  private document = inject(DOCUMENT);
  private platformId = inject(PLATFORM_ID);

  readonly baseDomain = 'https://ridercalltaxi.com';
  readonly defaultOgImage = 'https://ridercalltaxi.com/images/logo.png';
  readonly siteName = 'Rider Call Taxi';
  readonly defaultRobots = 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  private isBrowser = isPlatformBrowser(this.platformId);
  private routeSchemaElementId = 'route-dynamic-jsonld';

  /**
   * Initializes automatic SEO synchronization on router navigation.
   * Listens to NavigationEnd events, extracts route data, and applies metadata.
   */
  initRouteListener(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const seoData = this.getDeepestRouteSeo(this.activatedRoute);
        if (seoData) {
          const currentPath = this.router.url.split('?')[0].split('#')[0];
          this.updateSeo(seoData, currentPath);
        }
      });
  }

  /**
   * Updates all SEO meta tags, title, canonical URL, and optional structured data.
   */
  updateSeo(config: RouteSeoConfig, urlPath: string = ''): void {
    // 1. Dynamic Page Title
    if (config.title) {
      this.titleService.setTitle(config.title);
    }

    // 2. Dynamic Meta Description
    if (config.description) {
      this.metaService.updateTag({ name: 'description', content: config.description });
    }

    // 3. Keywords
    if (config.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: config.keywords });
    }

    // 4. Robots Directives
    const robots = config.robots || this.defaultRobots;
    this.metaService.updateTag({ name: 'robots', content: robots });

    // 5. Canonical URL Management (Consistent HTTPS, single preferred domain, normalized slash)
    const canonicalUrl = this.buildCanonicalUrl(config.canonical, urlPath);
    this.setCanonicalUrl(canonicalUrl);

    // 6. Open Graph Tags
    const ogTitle = config.ogTitle || config.title;
    const ogDesc = config.ogDescription || config.description;
    const ogImg = config.ogImage || this.defaultOgImage;
    const ogType = config.ogType || 'website';

    this.metaService.updateTag({ property: 'og:site_name', content: this.siteName });
    this.metaService.updateTag({ property: 'og:locale', content: 'en_IN' });
    this.metaService.updateTag({ property: 'og:type', content: ogType });
    this.metaService.updateTag({ property: 'og:title', content: ogTitle });
    this.metaService.updateTag({ property: 'og:description', content: ogDesc });
    this.metaService.updateTag({ property: 'og:url', content: canonicalUrl });
    this.metaService.updateTag({ property: 'og:image', content: ogImg });

    // 7. Twitter Card Tags
    const twCard = config.twitterCard || 'summary_large_image';
    const twTitle = config.twitterTitle || ogTitle;
    const twDesc = config.twitterDescription || ogDesc;
    const twImg = config.twitterImage || ogImg;

    this.metaService.updateTag({ name: 'twitter:card', content: twCard });
    this.metaService.updateTag({ name: 'twitter:title', content: twTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: twDesc });
    this.metaService.updateTag({ name: 'twitter:image', content: twImg });

    // 8. Route-Specific JSON-LD Structured Data
    if (config.structuredData) {
      this.setRouteStructuredData(config.structuredData);
    } else {
      this.removeRouteStructuredData();
    }
  }

  /**
   * Normalizes and constructs the full canonical URL.
   * Root is 'https://ridercalltaxi.com', subpages are 'https://ridercalltaxi.com/path' without trailing slash.
   */
  private buildCanonicalUrl(customCanonical?: string, path: string = ''): string {
    if (customCanonical) {
      return customCanonical;
    }
    const cleanPath = path.replace(/^\/+|\/+$/g, '');
    if (!cleanPath) {
      return `${this.baseDomain}/`;
    }
    return `${this.baseDomain}/${cleanPath}`;
  }

  /**
   * Manages single <link rel="canonical"> element in <head> to prevent duplicates.
   */
  private setCanonicalUrl(url: string): void {
    if (!this.document) return;

    try {
      let link: HTMLLinkElement | null = this.document.querySelector("link[rel='canonical']");
      if (!link) {
        link = this.document.createElement('link');
        link.setAttribute('rel', 'canonical');
        this.document.head.appendChild(link);
      }
      link.setAttribute('href', url);
    } catch {
      // Gracefully handle non-DOM environments
    }
  }

  /**
   * Injects or updates route-specific JSON-LD structured data script.
   */
  private setRouteStructuredData(data: Record<string, any> | Array<Record<string, any>>): void {
    if (!this.document) return;

    try {
      let script: HTMLScriptElement | null = this.document.getElementById(this.routeSchemaElementId) as HTMLScriptElement;
      if (!script) {
        script = this.document.createElement('script');
        script.id = this.routeSchemaElementId;
        script.type = 'application/ld+json';
        this.document.head.appendChild(script);
      }
      script.text = JSON.stringify(data);
    } catch {
      // Gracefully handle non-DOM environments
    }
  }

  /**
   * Removes route-specific JSON-LD script when navigating to a route without custom schema.
   */
  private removeRouteStructuredData(): void {
    if (!this.document) return;

    try {
      const script = this.document.getElementById(this.routeSchemaElementId);
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    } catch {
      // Gracefully handle non-DOM environments
    }
  }

  /**
   * Recursively traverses activated routes to extract the deepest route's SEO data.
   */
  private getDeepestRouteSeo(route: ActivatedRoute): RouteSeoConfig | null {
    let current = route;
    while (current.firstChild) {
      current = current.firstChild;
    }
    return current.snapshot.data['seo'] || null;
  }
}
