import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnquiryFormComponent } from '../../components/enquiry-form/enquiry-form.component';
import { GoogleMapComponent } from '../../components/google-map/google-map.component';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { ScrollAnimationService } from '../../shared/services/scroll-animation.service';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, EnquiryFormComponent, GoogleMapComponent],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements AfterViewInit {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private scrollAnimation = inject(ScrollAnimationService);
  private analytics = inject(AnalyticsService);

  trackCall(phone: string): void {
    this.analytics.trackPhoneCall('contact_page', phone);
  }

  trackWhatsApp(): void {
    this.analytics.trackWhatsAppEnquiry('contact_page', 'direct_chat');
  }

  ngAfterViewInit(): void {
    this.scrollAnimation.initScrollAnimations();
  }
}
