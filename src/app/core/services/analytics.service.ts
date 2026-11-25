import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export type PhoneCallSource =
  | 'header'
  | 'hero'
  | 'footer'
  | 'sticky_mobile'
  | 'contact_page'
  | 'service_page'
  | 'location_page'
  | 'drawer'
  | 'fare_calculator';

export type WhatsAppSource =
  | 'header'
  | 'hero'
  | 'footer'
  | 'sticky_mobile'
  | 'contact_page'
  | 'service_page'
  | 'location_page'
  | 'fare_calculator'
  | 'booking_modal'
  | 'drawer';

export interface BookingFormDetails {
  name?: string;
  phone?: string;
  pickup?: string;
  destination?: string;
  travelDate?: string;
  vehicleType?: string;
  tripType?: string;
  timing?: string;
  estimatedFare?: number;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private platformId = inject(PLATFORM_ID);
  private router = inject(Router);
  private isBrowser = isPlatformBrowser(this.platformId);

  constructor() {
    if (this.isBrowser) {
      window.dataLayer = window.dataLayer || [];
    }
  }

  /**
   * Automatically track page views on route navigation completion
   */
  initRouteListener(): void {
    if (!this.isBrowser) return;

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        const url = event.urlAfterRedirects || event.url;
        this.trackPageView(document.title || 'Rider Call Taxi', url);
      });
  }

  /**
   * Safe dataLayer push & custom DOM event dispatch for auditing and live verification
   */
  pushEvent(eventName: string, params: Record<string, any> = {}): void {
    if (!this.isBrowser) return;

    const payload = {
      event: eventName,
      timestamp: new Date().toISOString(),
      ...params
    };

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);

    // Call gtag if initialized in index.html
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, params);
    }

    // Dispatch DOM event for testing, auditing, and observability
    try {
      window.dispatchEvent(new CustomEvent('rider_analytics_event', { detail: payload }));
    } catch {
      // Ignore if event dispatch fails in restricted context
    }

    if (typeof console !== 'undefined' && console.debug) {
      console.debug(`[RiderAnalytics] ${eventName}:`, payload);
    }
  }

  /**
   * Track phone call click conversions (header, hero, footer, mobile sticky bar, etc.)
   */
  trackPhoneCall(source: PhoneCallSource, phoneNumber: string): void {
    this.pushEvent('phone_call_click', {
      event_category: 'Conversion',
      event_label: `${source}_${phoneNumber}`,
      conversion_type: 'phone_call',
      source: source,
      phone_number: phoneNumber,
      value: 1
    });
  }

  /**
   * Track WhatsApp booking enquiries
   */
  trackWhatsAppEnquiry(source: WhatsAppSource, intent: string = 'booking', extraDetails?: Record<string, any>): void {
    this.pushEvent('whatsapp_enquiry_click', {
      event_category: 'Conversion',
      event_label: `${source}_${intent}`,
      conversion_type: 'whatsapp_enquiry',
      source: source,
      intent: intent,
      value: 1,
      ...(extraDetails || {})
    });
  }

  /**
   * Track booking form submissions (high-value conversion lead)
   */
  trackBookingFormSubmission(details: BookingFormDetails): void {
    this.pushEvent('booking_form_submission', {
      event_category: 'Conversion',
      event_label: `${details.tripType || 'trip'}_from_${details.pickup || 'origin'}_to_${details.destination || 'dest'}`,
      conversion_type: 'form_lead',
      source: 'booking_form',
      pickup_location: details.pickup,
      drop_location: details.destination,
      trip_type: details.tripType,
      vehicle_type: details.vehicleType,
      travel_date: details.travelDate,
      timing: details.timing,
      estimated_fare: details.estimatedFare,
      value: 5
    });
  }

  /**
   * Track generic CTA clicks (e.g., "View Services", "View Tariff", "Book a Taxi", "Contact Us")
   */
  trackCtaClick(ctaName: string, destinationUrl: string, locationContext: string = 'body'): void {
    this.pushEvent('cta_click', {
      event_category: 'Engagement',
      event_label: ctaName,
      cta_name: ctaName,
      destination_url: destinationUrl,
      location_context: locationContext
    });
  }

  /**
   * Track Page Views
   */
  trackPageView(pageTitle: string, pagePath: string): void {
    this.pushEvent('page_view', {
      page_title: pageTitle,
      page_location: typeof window !== 'undefined' ? window.location.href : pagePath,
      page_path: pagePath
    });
  }

  /**
   * Track dedicated service page views
   */
  trackServiceView(serviceName: string, serviceSlug: string): void {
    this.pushEvent('service_page_view', {
      event_category: 'Content',
      event_label: serviceName,
      service_name: serviceName,
      service_slug: serviceSlug
    });
  }

  /**
   * Track tariff and rate views
   */
  trackTariffView(context: string = 'pricing_page'): void {
    this.pushEvent('tariff_view', {
      event_category: 'Engagement',
      event_label: 'tariff_view',
      context: context
    });
  }
}
