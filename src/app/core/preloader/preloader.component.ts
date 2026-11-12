import { Component, OnInit, OnDestroy, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';

interface LoadingMilestone {
  minProgress: number;
  en: string;
  ta: string;
  badgeEn: string;
  badgeTa: string;
  icon: string;
}

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.scss']
})
export class PreloaderComponent implements OnInit, OnDestroy {
  public i18n = inject(TranslationService);

  isLoading = signal<boolean>(true);
  progress = signal<number>(0);
  isFadingOut = signal<boolean>(false);
  private intervalId: any = null;

  readonly milestones: LoadingMilestone[] = [
    {
      minProgress: 0,
      en: 'Connecting to Sankarankovil Main Dispatch Hub...',
      ta: 'சங்கரன்கோவில் முதன்மை கட்டுப்பாட்டு மையத்துடன் இணைகிறது...',
      badgeEn: 'DISPATCH HUB',
      badgeTa: 'கட்டுப்பாட்டு மையம்',
      icon: '🏢'
    },
    {
      minProgress: 24,
      en: 'Calibrating Tamil Nadu GPS Corridors (NH 44 / 744)...',
      ta: 'தமிழக நெடுஞ்சாலை GPS வழித்தடங்கள் சரிபார்க்கப்படுகிறது...',
      badgeEn: 'GPS NAVIGATION',
      badgeTa: 'நெடுஞ்சாலை வரைபடம்',
      icon: '🗺️'
    },
    {
      minProgress: 52,
      en: 'Checking Live Fleet Standby (45+ Cabs Ready)...',
      ta: 'தயார் நிலையில் உள்ள 45+ வாகனங்கள் சோதிக்கப்படுகிறது...',
      badgeEn: 'STANDBY FLEET',
      badgeTa: 'தயார் நிலை வாகனங்கள்',
      icon: '🚕'
    },
    {
      minProgress: 76,
      en: 'Syncing Official Transparent Rate: ₹14/KM...',
      ta: 'அதிகாரப்பூர்வ ₹14/கி.மீ கட்டணம் உறுதி செய்யப்படுகிறது...',
      badgeEn: '1 KM = ₹14 FIXED',
      badgeTa: '₹14/கி.மீ நிலையான கட்டணம்',
      icon: '⚡'
    },
    {
      minProgress: 94,
      en: 'Fleet Ready! Welcome to Rider Call Taxi.',
      ta: 'வாகனங்கள் தயார்! நல்வரவு.',
      badgeEn: 'READY TO RIDE',
      badgeTa: 'பயணத்திற்கு தயார்',
      icon: '✨'
    }
  ];

  activeMilestone = computed(() => {
    const p = this.progress();
    for (let i = this.milestones.length - 1; i >= 0; i--) {
      if (p >= this.milestones[i].minProgress) {
        return this.milestones[i];
      }
    }
    return this.milestones[0];
  });

  // Calculate taxi position so it stays gracefully on the road (from 6% to 88%)
  taxiPosition = computed(() => {
    return 6 + (this.progress() * 0.82);
  });

  ngOnInit(): void {
    // Smooth natural loading progression over ~1.8s
    this.intervalId = setInterval(() => {
      this.progress.update(p => {
        if (p >= 100) {
          this.finishLoading();
          return 100;
        }

        // Variable increments to feel like a real system calibrating
        let increment = 2;
        if (p < 30) increment = 3;
        else if (p >= 30 && p < 70) increment = 2;
        else if (p >= 70 && p < 92) increment = 3;
        else increment = 1;

        const nextVal = p + increment;
        if (nextVal >= 100) {
          this.finishLoading();
          return 100;
        }
        return nextVal;
      });
    }, 32);
  }

  finishLoading(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    setTimeout(() => {
      this.isFadingOut.set(true);
      setTimeout(() => {
        this.isLoading.set(false);
      }, 550);
    }, 280);
  }

  skip(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.progress.set(100);
    this.isFadingOut.set(true);
    setTimeout(() => {
      this.isLoading.set(false);
    }, 300);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
