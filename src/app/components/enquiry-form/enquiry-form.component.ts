import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import confetti from 'canvas-confetti';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-enquiry-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './enquiry-form.component.html',
  styleUrls: ['./enquiry-form.component.scss']
})
export class EnquiryFormComponent {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private analytics = inject(AnalyticsService);

  // Form Model
  name = '';
  phone = '';
  pickup = 'Sankarankovil';
  destination = '';
  travelDate = '';
  vehicleType = 'Sedan';
  tripType = 'One Way';
  timing: 'day' | 'night' = 'day';
  message = '';

  isSubmitted = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);

  onPhoneClick(): void {
    this.analytics.trackPhoneCall('contact_page', this.taxiData.company.rawPhone1);
  }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.controls[field];
        control.markAsTouched({ onlySelf: true });
      });
      return;
    }

    this.isSubmitting.set(true);

    // Track high-value lead conversion
    this.analytics.trackBookingFormSubmission({
      name: this.name,
      phone: this.phone,
      pickup: this.pickup,
      destination: this.destination,
      travelDate: this.travelDate,
      vehicleType: this.vehicleType,
      tripType: this.tripType,
      timing: this.timing
    });

    // Celebrate with confetti
    if (typeof window !== 'undefined') {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    const timingStr = this.timing === 'night' 
      ? (this.i18n.isTamil() ? 'இரவு (Night 7PM-7AM)' : 'Night (7:00 PM – 7:00 AM)') 
      : (this.i18n.isTamil() ? 'பகல் (Day 7AM-7PM)' : 'Day (7:00 AM – 7:00 PM)');

    // Build prefilled WhatsApp message and redirect
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      name: this.name,
      pickup: this.pickup,
      destination: this.destination,
      date: this.travelDate,
      vehicle: `${this.vehicleType} (${timingStr})`,
      tripType: this.tripType,
      timing: this.timing,
      isAc: true,
      message: `Phone: ${this.phone}. Shift: ${timingStr}. Notes: ${this.message || 'None'}`
    });

    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      window.open(url, '_blank');
    }, 600);
  }

  resetForm(): void {
    this.isSubmitted.set(false);
    this.name = '';
    this.phone = '';
    this.destination = '';
    this.message = '';
  }
}
