import { Component, inject, OnInit, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { ScrollAnimationService } from '../../shared/services/scroll-animation.service';
import { AnalyticsService } from '../../core/services/analytics.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements OnInit, AfterViewInit {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private scrollAnimation = inject(ScrollAnimationService);
  private analytics = inject(AnalyticsService);

  testKm = 100;
  testVehicle = 'sedan';
  testTrip: 'oneway' | 'round' = 'oneway';
  testTiming: 'day' | 'night' = 'day';
  testIsAc = true; // Kept for backwards compatibility
  testExtraHours = 0;

  distanceChart = this.taxiData.getDistanceTimeChart();

  ngOnInit(): void {
    this.analytics.trackTariffView('pricing_page');
  }

  ngAfterViewInit(): void {
    this.scrollAnimation.initScrollAnimations();
  }

  get liveFare() {
    return this.taxiData.calculateFare(
      this.testKm, 
      this.testVehicle, 
      this.testTrip, 
      this.testTiming, 
      this.testExtraHours
    );
  }

  bookVehicle(v: any): void {
    this.analytics.trackWhatsAppEnquiry('pricing_page' as any, 'vehicle_tariff_enquiry', { vehicle: v.name });
    if (v.isComingSoon) {
      const msg = this.i18n.isTamil()
        ? `வணக்கம் ரைடர் கால் டாக்ஸி, டெம்போ டிராவலர் 14-சீட்டர் வாகனத்திற்கு முன்கூட்டியே பதிவு செய்ய விரும்புகிறேன். விபரங்களை பகிரவும்.`
        : `Hello Rider Call Taxi, I would like to pre-book / register interest for Tempo Traveller (14-Seater). Please share upcoming details.`;
      const url = this.taxiData.getWhatsAppEnquiryUrl({
        vehicle: 'Tempo Traveller (14-Seater - Coming Soon)',
        message: msg
      });
      window.open(url, '_blank');
      return;
    }

    const timingStr = this.testTiming === 'night'
      ? (this.i18n.isTamil() ? 'இரவு (Night 7PM-7AM)' : 'Night (7:00 PM – 7:00 AM)')
      : (this.i18n.isTamil() ? 'பகல் (Day 7AM-7PM)' : 'Day (7:00 AM – 7:00 PM)');

    const msg = this.i18n.isTamil()
      ? `வணக்கம், ${v.name} (${timingStr}) வாகனத்திற்கான கட்டண விபரங்களை அறிய விரும்புகிறேன்.`
      : `Enquiry for ${v.name} (${timingStr}) tariff and booking details.`;
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      vehicle: `${v.name} (${timingStr})`,
      timing: this.testTiming,
      message: msg
    });
    window.open(url, '_blank');
  }

  bookQuote(): void {
    const fare = this.liveFare;
    this.analytics.trackWhatsAppEnquiry('pricing_page' as any, 'calculated_quote', {
      vehicle: fare.vehicleName,
      distance: fare.distanceKm,
      estimatedFare: fare.estimatedTotal
    });
    const timingStr = this.testTiming === 'night' 
      ? (this.i18n.isTamil() ? 'இரவு (Night 7PM-7AM)' : 'Night (7:00 PM – 7:00 AM)') 
      : (this.i18n.isTamil() ? 'பகல் (Day 7AM-7PM)' : 'Day (7:00 AM – 7:00 PM)');
    const waitingStr = fare.extraHours && fare.extraHours > 0 
      ? (this.i18n.isTamil() ? `\n⏳ காத்திருப்பு: ${fare.extraHours} மணி (₹${fare.waitingFare})` : `\n⏳ Extra Waiting: ${fare.extraHours} hrs (₹${fare.waitingFare})`) 
      : '';

    const msg = this.i18n.isTamil()
      ? `வணக்கம், ${fare.tripType} (${timingStr}) டாக்ஸி முன்பதிவு:\n📏 தூரம்: ${fare.distanceKm} கி.மீ\n🚗 வாகனம்: ${fare.vehicleName}\n🕒 நேரம்: ${timingStr}\n⏱️ இலவச நேரம்: ${fare.includedTimeFormatted}${waitingStr}\n💰 தோராய கட்டணம்: ₹${fare.estimatedTotal}. கார் உறுதிப்படுத்தவும்.`
      : `Quote enquiry for ${fare.tripType} (${timingStr}):\nDistance: ${fare.distanceKm} KM\nVehicle: ${fare.vehicleName}\nTiming: ${timingStr}\nIncluded Time: ${fare.includedTimeFormatted}${waitingStr}\nEstimated Fare: ₹${fare.estimatedTotal}. Please confirm.`;
    
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      distance: fare.distanceKm,
      vehicle: `${fare.vehicleName} (${timingStr})`,
      tripType: fare.tripType,
      timing: this.testTiming,
      isAc: true,
      includedTime: fare.includedTimeFormatted,
      extraHours: fare.extraHours,
      estimatedFare: fare.estimatedTotal,
      message: msg
    });
    window.open(url, '_blank');
  }
}
