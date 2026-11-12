import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { CityCoverage } from '../../shared/models/taxi.model';

@Component({
  selector: 'app-service-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './service-map.component.html',
  styleUrls: ['./service-map.component.scss']
})
export class ServiceMapComponent {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);

  selectedCityId = signal<string>('sankarankovil');

  // HQ Coordinates for animated dispatch radiating lines
  readonly hqCoords = { x: 225, y: 642 };

  get selectedCity(): CityCoverage {
    return this.taxiData.citiesCoverage.find(c => c.id === this.selectedCityId()) || this.taxiData.citiesCoverage[0];
  }

  selectCity(cityId: string): void {
    this.selectedCityId.set(cityId);
  }

  getCityName(city: CityCoverage): string {
    return (this.i18n.isTamil() && city.nameTa) ? city.nameTa : city.name;
  }

  getCityDistrict(city: CityCoverage): string {
    return (this.i18n.isTamil() && city.districtTa) ? city.districtTa : city.district;
  }

  getCityTagline(city: CityCoverage): string {
    return (this.i18n.isTamil() && city.taglineTa) ? city.taglineTa : city.tagline;
  }

  getCityRoutes(city: CityCoverage): string[] {
    return (this.i18n.isTamil() && city.topRoutesTa) ? city.topRoutesTa : city.topRoutes;
  }

  bookFromCity(city: CityCoverage): void {
    const isTa = this.i18n.isTamil();
    const cName = this.getCityName(city);
    const cDist = this.getCityDistrict(city);
    const msg = isTa
      ? `வணக்கம், சேவை வரைபடத்தில் பார்த்த ${cName} (${cDist}) பகுதியில் இருந்து டாக்ஸி முன்பதிவு செய்ய விரும்புகிறேன். அருகில் உள்ள வாகனத்தை ஒதுக்கவும்.`
      : `Enquiry from Service Map for ${city.name} (${city.district}). Please assign the nearest available cab.`;
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      pickup: city.name,
      message: msg
    });
    window.open(url, '_blank');
  }
}
