import { Component, signal, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { ChatbotComponent } from './core/chatbot/chatbot.component';
import { MobileBarComponent } from './core/mobile-bar/mobile-bar.component';
import { PreloaderComponent } from './core/preloader/preloader.component';
import { SeoService } from './core/services/seo.service';
import { AnalyticsService } from './core/services/analytics.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    ChatbotComponent,
    MobileBarComponent,
    PreloaderComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  private seoService = inject(SeoService);
  private analyticsService = inject(AnalyticsService);
  title = signal('Rider Call Taxi – Sankarankovil');

  ngOnInit(): void {
    this.seoService.initRouteListener();
    this.analyticsService.initRouteListener();
  }
}
