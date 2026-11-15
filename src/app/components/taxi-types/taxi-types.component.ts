import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { VehicleCategory } from '../../shared/models/taxi.model';

@Component({
  selector: 'app-taxi-types',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './taxi-types.component.html',
  styleUrls: ['./taxi-types.component.scss']
})
export class TaxiTypesComponent {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);

  bookCategory(vehicle: VehicleCategory): void {
    const isTa = this.i18n.isTamil();
    if (vehicle.isComingSoon) {
      const msg = isTa
        ? `வணக்கம், டெம்போ டிராவலர் (14-சீட்டர்) வாகனத்திற்கு முன்கூட்டியே பதிவு செய்ய விரும்புகிறேன். விபரங்களை பகிரவும்.`
        : `Hello, I am interested in pre-booking the upcoming Tempo Traveller 14-seater. Please share details.`;
      const url = this.taxiData.getWhatsAppEnquiryUrl({
        vehicle: 'Tempo Traveller (14-Seater - Coming Soon)',
        message: msg
      });
      window.open(url, '_blank');
      return;
    }
    const nonAcRate = vehicle.rateNonAcPerKm || vehicle.ratePerKm;
    const acRate = vehicle.rateAcPerKm || vehicle.ratePerKm;
    const msg = isTa
      ? `வணக்கம், நான் ${vehicle.name} (${vehicle.models}) வாகனத்தை Non-AC ₹${nonAcRate} / AC ₹${acRate}/கி.மீ கட்டணத்தில் புக் செய்ய விரும்புகிறேன்.`
      : `I am interested in booking a ${vehicle.name} (${vehicle.models}) [Non-AC ₹${nonAcRate} / AC ₹${acRate}/KM].`;
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      vehicle: vehicle.name,
      message: msg
    });
    window.open(url, '_blank');
  }
}
