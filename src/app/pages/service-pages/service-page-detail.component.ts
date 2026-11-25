import { Component, inject, signal, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { AnalyticsService } from '../../core/services/analytics.service';
import { SERVICES_DATA, ServiceDetailData, ServiceRouteEstimate, ServiceVehicleOption } from './service-data';

@Component({
  selector: 'app-service-page-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './service-page-detail.component.html',
  styleUrls: ['./service-page-detail.component.scss']
})
export class ServicePageDetailComponent implements OnInit {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private analytics = inject(AnalyticsService);

  serviceData = signal<ServiceDetailData | null>(null);

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      const slug = data['serviceSlug'];
      if (slug && SERVICES_DATA[slug]) {
        const item = SERVICES_DATA[slug];
        this.serviceData.set(item);
        this.analytics.trackServiceView(item.name, slug);
      } else {
        const urlSlug = this.router.url.replace(/^\/+|\/+$/g, '');
        if (SERVICES_DATA[urlSlug]) {
          const item = SERVICES_DATA[urlSlug];
          this.serviceData.set(item);
          this.analytics.trackServiceView(item.name, urlSlug);
        }
      }
    });
  }

  onCallClick(): void {
    this.analytics.trackPhoneCall('service_page', this.taxiData.company.rawPhone1);
  }

  bookService(): void {
    const s = this.serviceData();
    const serviceName = s ? s.name : 'Taxi Service';
    this.analytics.trackWhatsAppEnquiry('service_page', 'book_service', { serviceName });
    const message = `Hello Rider Call Taxi, I would like to book your ${serviceName}. Please let me know cab availability and estimated arrival time.`;
    const url = `https://wa.me/${this.taxiData.company.rawPhone1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  bookVehicle(vehicle: ServiceVehicleOption): void {
    const s = this.serviceData();
    const serviceName = s ? s.name : 'Taxi Service';
    this.analytics.trackWhatsAppEnquiry('service_page', 'book_vehicle', { serviceName, vehicle: vehicle.name });
    const message = `Hello Rider Call Taxi, I want to book a ${vehicle.name} (${vehicle.category}) for ${serviceName}. Base Fare: ${vehicle.baseFareText}. Please confirm booking.`;
    const url = `https://wa.me/${this.taxiData.company.rawPhone1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  bookRoute(route: ServiceRouteEstimate): void {
    const s = this.serviceData();
    const serviceName = s ? s.name : 'Taxi Service';
    this.analytics.trackWhatsAppEnquiry('service_page', 'book_route', { serviceName, route: route.route, distance: route.distanceKm });
    const message = `Hello Rider Call Taxi, I want to book ${serviceName} for route: ${route.route} (${route.distanceKm} km, ~${route.duration}). Estimated fare: ${route.sedanFare} (Sedan) / ${route.suvFare} (SUV). Please confirm.`;
    const url = `https://wa.me/${this.taxiData.company.rawPhone1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openGoogleMaps(): void {
    window.open(this.taxiData.company.googleMapsEmbedUrl, '_blank');
  }
}
