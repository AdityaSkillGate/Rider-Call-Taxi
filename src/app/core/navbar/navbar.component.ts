import { Component, HostListener, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService, Language } from '../../shared/services/translation.service';
import { ScrollAnimationService } from '../../shared/services/scroll-animation.service';
import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  private router = inject(Router);
  private scrollAnimation = inject(ScrollAnimationService);
  public analytics = inject(AnalyticsService);

  isScrolled = signal<boolean>(false);
  isMobileMenuOpen = signal<boolean>(false);

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled.set(scrollPosition > 40);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update(state => !state);
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen.set(false);
  }

  setLang(lang: Language): void {
    this.i18n.setLanguage(lang);
  }

  // When clicking any section link in the navbar, ensure it scrolls to the top of that section
  onNavClick(path: string): void {
    this.closeMobileMenu();
    this.analytics.trackCtaClick(`nav_${path}`, path, 'navbar');
    const currentUrl = this.router.url.split('#')[0];
    if (currentUrl === path || (path === '/' && (currentUrl === '' || currentUrl === '/'))) {
      this.scrollAnimation.scrollToTop('smooth');
    }
  }

  // Redirect to booking form on the contact page
  goToBookingForm(): void {
    this.closeMobileMenu();
    this.analytics.trackCtaClick('header_book_enquiry', '/contact#booking-enquiry-section', 'header');
    if (this.router.url.startsWith('/contact')) {
      this.scrollAnimation.scrollToSection('booking-enquiry-section');
    } else {
      this.router.navigate(['/contact'], { fragment: 'booking-enquiry-section' }).then(() => {
        setTimeout(() => {
          this.scrollAnimation.scrollToSection('booking-enquiry-section');
        }, 200);
      });
    }
  }

  onDrawerCallClick(): void {
    this.analytics.trackPhoneCall('drawer', this.taxiData.company.rawPhone1);
    this.closeMobileMenu();
  }

  openWhatsAppBooking(): void {
    const isTa = this.i18n.isTamil();
    const msg = isTa
      ? 'வணக்கம் Rider Call Taxi, நான் சங்கரன்கோவில் / தமிழ்நாட்டில் டாக்ஸி முன்பதிவு செய்ய விரும்புகிறேன்.'
      : 'Hello Rider Call Taxi, I want to book a taxi from Sankarankovil / Tamil Nadu.';
    this.analytics.trackWhatsAppEnquiry('drawer', 'general');
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      message: msg
    });
    window.open(url, '_blank');
  }
}
