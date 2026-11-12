import { Component, inject, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FleetShowcaseComponent } from '../../components/fleet-showcase/fleet-showcase.component';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { ScrollAnimationService } from '../../shared/services/scroll-animation.service';

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [CommonModule, FleetShowcaseComponent],
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent implements AfterViewInit {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private scrollAnimation = inject(ScrollAnimationService);

  ngAfterViewInit(): void {
    this.scrollAnimation.initScrollAnimations();
  }

  bookCar(car: any): void {
    const text = `Hello Rider Call Taxi, I would like to book ${car.name} (${car.regNumber}) at ₹${car.ratePerKm}/KM. Please check availability.`;
    window.open(`https://wa.me/919363015586?text=${encodeURIComponent(text)}`, '_blank');
  }
}
