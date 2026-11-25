import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { SeoService } from '../../core/services/seo.service';
import { BLOG_POSTS, BlogPost } from './blog-data';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private seo = inject(SeoService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  post = signal<BlogPost | null>(null);
  relatedPosts = signal<BlogPost[]>([]);

  ngOnInit(): void {
    // Check both route.data (for static SEO routes) and paramMap (for dynamic :slug routes)
    const resolvePost = (slug: string | null) => {
      if (slug) {
        const found = BLOG_POSTS.find(p => p.slug === slug);
        if (found) {
          this.post.set(found);
          const related = BLOG_POSTS.filter(p => found.relatedSlugs.includes(p.slug));
          this.relatedPosts.set(related);
          this.applyPostSeo(found);
          return true;
        }
      }
      return false;
    };

    this.route.data.subscribe(data => {
      if (data['postSlug'] && resolvePost(data['postSlug'])) {
        return;
      }
      this.route.paramMap.subscribe(params => {
        const slug = params.get('slug') || this.router.url.split('/').pop()?.split('?')[0] || null;
        if (!resolvePost(slug)) {
          this.router.navigate(['/blog']);
        }
      });
    });
  }

  private applyPostSeo(post: BlogPost): void {
    const canonicalUrl = `https://ridercalltaxi.com/blog/${post.slug}`;
    this.seo.updateSeo({
      title: post.meta.title,
      description: post.meta.description,
      canonical: canonicalUrl,
      keywords: post.meta.keywords,
      robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      ogTitle: post.meta.title,
      ogDescription: post.meta.description,
      ogImage: 'https://ridercalltaxi.com/images/logo.png',
      ogType: 'article',
      twitterCard: 'summary_large_image',
      structuredData: {
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'BreadcrumbList',
            '@id': `${canonicalUrl}#breadcrumb`,
            'itemListElement': [
              {
                '@type': 'ListItem',
                'position': 1,
                'name': 'Home',
                'item': 'https://ridercalltaxi.com/'
              },
              {
                '@type': 'ListItem',
                'position': 2,
                'name': 'Travel Guides',
                'item': 'https://ridercalltaxi.com/blog'
              },
              {
                '@type': 'ListItem',
                'position': 3,
                'name': post.title,
                'item': canonicalUrl
              }
            ]
          },
          {
            '@type': 'BlogPosting',
            '@id': `${canonicalUrl}#article`,
            'isPartOf': {
              '@id': 'https://ridercalltaxi.com/#website'
            },
            'headline': post.title,
            'description': post.meta.description,
            'url': canonicalUrl,
            'mainEntityOfPage': canonicalUrl,
            'datePublished': post.datePublished,
            'dateModified': post.dateModified,
            'inLanguage': 'en-IN',
            'author': {
              '@type': 'Organization',
              'name': 'Rider Call Taxi Operations Team',
              '@id': 'https://ridercalltaxi.com/#organization'
            },
            'publisher': {
              '@id': 'https://ridercalltaxi.com/#organization'
            },
            'image': 'https://ridercalltaxi.com/images/logo.png',
            'articleSection': post.category,
            'keywords': post.tags.join(', ')
          }
        ]
      }
    }, `/blog/${post.slug}`);
  }

  bookWhatsApp(): void {
    const p = this.post();
    const topic = p ? p.title : 'Taxi Trip';
    const message = `Hello Rider Call Taxi, I was reading your travel guide: "${topic}" and would like to book a taxi. Please confirm availability.`;
    const url = `https://wa.me/${this.taxiData.company.rawPhone1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  scrollToSection(id: string): void {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
