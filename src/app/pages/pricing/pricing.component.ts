import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { ScrollAnimationService } from '../../shared/services/scroll-animation.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
})
export class PricingComponent implements AfterViewInit {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private scrollAnimation = inject(ScrollAnimationService);

  testKm = 100;
  testVehicle = 'sedan';
  testTrip: 'oneway' | 'round' = 'oneway';
  testIsAc = true;
  testExtraHours = 0;

  distanceChart = this.taxiData.getDistanceTimeChart();

  ngAfterViewInit(): void {
    this.scrollAnimation.initScrollAnimations();
  }

  get liveFare() {
    return this.taxiData.calculateFare(
      this.testKm, 
      this.testVehicle, 
      this.testTrip, 
      this.testIsAc, 
      this.testExtraHours
    );
  }

  bookVehicle(v: any): void {
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

    const msg = this.i18n.isTamil()
      ? `வணக்கம், ${v.name} (${this.testIsAc ? 'AC' : 'Non-AC'}) வாகனத்திற்கான கட்டண விபரங்களை அறிய விரும்புகிறேன்.`
      : `Enquiry for ${v.name} (${this.testIsAc ? 'AC' : 'Non-AC'}) tariff and booking details.`;
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      vehicle: `${v.name} (${this.testIsAc ? 'AC' : 'Non-AC'})`,
      message: msg
    });
    window.open(url, '_blank');
  }

  bookQuote(): void {
    const fare = this.liveFare;
    const climateStr = this.testIsAc ? (this.i18n.isTamil() ? 'AC' : 'AC') : (this.i18n.isTamil() ? 'நான்-AC' : 'Non-AC');
    const waitingStr = fare.extraHours && fare.extraHours > 0 
      ? (this.i18n.isTamil() ? `\n⏳ காத்திருப்பு: ${fare.extraHours} மணி (₹${fare.waitingFare})` : `\n⏳ Extra Waiting: ${fare.extraHours} hrs (₹${fare.waitingFare})`) 
      : '';

    const msg = this.i18n.isTamil()
      ? `வணக்கம், ${fare.tripType} (${climateStr}) டாக்ஸி முன்பதிவு:\n📏 தூரம்: ${fare.distanceKm} கி.மீ\n🚗 வாகனம்: ${fare.vehicleName}\n⏱️ இலவச நேரம்: ${fare.includedTimeFormatted}${waitingStr}\n💰 தோராய கட்டணம்: ₹${fare.estimatedTotal}. கார் உறுதிப்படுத்தவும்.`
      : `Quote enquiry for ${fare.tripType} (${climateStr}):\nDistance: ${fare.distanceKm} KM\nVehicle: ${fare.vehicleName}\nIncluded Time: ${fare.includedTimeFormatted}${waitingStr}\nEstimated Fare: ₹${fare.estimatedTotal}. Please confirm.`;
    
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      distance: fare.distanceKm,
      vehicle: `${fare.vehicleName} (${climateStr})`,
      tripType: fare.tripType,
      isAc: this.testIsAc,
      includedTime: fare.includedTimeFormatted,
      extraHours: fare.extraHours,
      estimatedFare: fare.estimatedTotal,
      message: msg
    });
    window.open(url, '_blank');
  }
}
