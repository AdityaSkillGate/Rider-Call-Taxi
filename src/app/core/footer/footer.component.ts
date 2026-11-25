import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private analytics = inject(AnalyticsService);

  onCallClick(phone: string): void {
    this.analytics.trackPhoneCall('footer', phone);
  }

  onWhatsAppClick(): void {
    this.analytics.trackWhatsAppEnquiry('footer', 'banner_enquiry');
  }
}
