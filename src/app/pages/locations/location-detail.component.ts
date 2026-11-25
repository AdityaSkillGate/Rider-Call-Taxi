import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { LOCATIONS_DATA, LocationPageData, LocalRouteFare, LocalServiceHighlight } from './location-data';

@Component({
  selector: 'app-location-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './location-detail.component.html',
  styleUrls: ['./location-detail.component.scss']
})
export class LocationDetailComponent implements OnInit {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private analytics = inject(AnalyticsService);

  locationData = signal<LocationPageData | null>(null);

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const slug = data['locationSlug'];
      if (slug && LOCATIONS_DATA[slug]) {
        this.locationData.set(LOCATIONS_DATA[slug]);
      } else {
        // Fallback or redirect
        const urlSlug = this.router.url.replace(/^\/+|\/+$/g, '');
        if (LOCATIONS_DATA[urlSlug]) {
          this.locationData.set(LOCATIONS_DATA[urlSlug]);
        }
      }
    });
  }

  onCallClick(): void {
    this.analytics.trackPhoneCall('location_page', this.taxiData.company.rawPhone1);
  }

  bookRoute(route: LocalRouteFare): void {
    const loc = this.locationData();
    const origin = loc ? loc.name : 'Sankarankovil';
    this.analytics.trackWhatsAppEnquiry('location_page', 'book_route', {
      origin,
      destination: route.destination,
      distance: route.distanceKm
    });
    const message = `Hello Rider Call Taxi, I want to book a taxi from ${origin} to ${route.destination} (${route.distanceKm} km). Estimated fare: ${route.sedanDayFare} (Sedan) / ${route.suvDayFare} (SUV). Please confirm cab availability.`;
    const url = `https://wa.me/${this.taxiData.company.rawPhone1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  bookService(service: LocalServiceHighlight): void {
    const loc = this.locationData();
    const origin = loc ? loc.name : 'Sankarankovil';
    this.analytics.trackWhatsAppEnquiry('location_page', 'book_service', {
      origin,
      serviceTitle: service.title
    });
    const message = `Hello Rider Call Taxi, I am in ${origin} and would like to book: ${service.title}. Please provide cab arrival time.`;
    const url = `https://wa.me/${this.taxiData.company.rawPhone1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  quickBookNow(): void {
    const loc = this.locationData();
    const origin = loc ? loc.name : 'Sankarankovil';
    this.analytics.trackWhatsAppEnquiry('location_page', 'quick_book', { origin });
    const message = `Hello Rider Call Taxi, I need an immediate cab pickup in ${origin}. Please contact me.`;
    const url = `https://wa.me/${this.taxiData.company.rawPhone1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openGoogleMaps(): void {
    window.open(this.taxiData.company.googleMapsEmbedUrl, '_blank');
  }

  openDirections(): void {
    window.open(this.taxiData.company.googleMapsDirectionsUrl, '_blank');
  }
}
