import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);

  openDirections(): void {
    window.open(this.taxiData.company.googleMapsDirectionsUrl, '_blank');
  }

  openGoogleMaps(): void {
    const url = 'https://www.google.com/maps/search/?api=1&query=Rider+Call+Taxi+MPM+Complex+Rajapalayam+Road+Sankarankovil';
    window.open(url, '_blank');
  }

  openWhatsAppDesk(): void {
    const isTa = this.i18n.isTamil();
    const msg = isTa
      ? 'வணக்கம், சங்கரன்கோவில் ரைடர் கால் டாக்ஸி அலுவலகம் மற்றும் முன்பதிவு குறித்து அறிய விரும்புகிறேன்.'
      : 'Hello Rider Call Taxi, I would like to enquire about your Sankarankovil office location and booking.';
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      pickup: 'Sankarankovil Office',
      message: msg
    });
    window.open(url, '_blank');
  }
}
