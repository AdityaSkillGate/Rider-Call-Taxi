import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslationService } from '../../shared/services/translation.service';
import { TaxiDataService } from '../../shared/services/taxi-data.service';

export interface ServiceOverviewItem {
  id: string;
  icon: string;
  titleEn: string;
  titleTa: string;
  subtitleEn: string;
  subtitleTa: string;
  descEn: string;
  descTa: string;
  badgeEn: string;
  badgeTa: string;
  highlightsEn: string[];
  highlightsTa: string[];
}

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services-overview.component.html',
  styleUrls: ['./services-overview.component.scss']
})
export class ServicesOverviewComponent {
  public i18n = inject(TranslationService);
  public taxiData = inject(TaxiDataService);

  readonly services: ServiceOverviewItem[] = [
    {
      id: 'local-city-rides',
      icon: '🚕',
      titleEn: 'Local City Rides in Sankarankovil',
      titleTa: 'சங்கரன்கோவில் உள்ளூர் டாக்ஸி பயணம்',
      subtitleEn: 'Point-to-Point 10-Min Doorstep Pickup',
      subtitleTa: '10 நிமிடங்களில் உங்கள் வாசலில் வாகனம்',
      descEn: 'Quick, dependable rides across Sankarankovil, Karivalam, Kalappakulam, and surrounding towns with polite verified drivers and honest per-km billing.',
      descTa: 'சங்கரன்கோவில் நகர், கரிவலம்வந்தநல்லூர், களப்பாகுளம் மற்றும் சுற்றுவட்டார பகுதிகளுக்கு உடனடி 10 நிமிட பிக்கப் சேவை.',
      badgeEn: '10-Min Pickup',
      badgeTa: '10 நிமிடம்',
      highlightsEn: ['Doorstep pickup across Sankarankovil', 'No peak-hour surge pricing', 'Hospital, railway & shopping drops'],
      highlightsTa: ['வீட்டு வாசலிலேயே பிக்கப்', 'பீக் ஹவர் கூடுதல் கட்டணம் இல்லை', 'மருத்துவமனை, ரயில் நிலைய பயணங்கள்']
    },
    {
      id: 'outstation-cabs',
      icon: '🛣️',
      titleEn: 'One-Way & Round-Trip Outstation Cabs',
      titleTa: 'ஒரு வழி & இரு வழி வெளியூர் டாக்ஸி',
      subtitleEn: 'Madurai, Tirunelveli, Tenkasi & Chennai',
      subtitleTa: 'மதுரை, திருநெல்வேலி, தென்காசி, சென்னை',
      descEn: 'Affordable one-way drop taxis and multi-day round trips to Madurai, Tirunelveli, Tenkasi, Rajapalayam, Sivakasi, and Chennai starting at just ₹14/KM.',
      descTa: 'மதுரை, திருநெல்வேலி, தென்காசி, ராஜபாளையம், சிவகாசி மற்றும் சென்னைக்கு ₹14/கி.மீ முதல் தொடங்கும் சிக்கனமான வெளியூர் டாக்ஸி.',
      badgeEn: 'From ₹14/KM',
      badgeTa: '₹14/கி.மீ முதல்',
      highlightsEn: ['One-way drop options with zero return fee', 'Fastag equipped on all toll highways', 'Round trips with minimal waiting charges'],
      highlightsTa: ['ஒரு வழி டிராப் வசதி', 'அனைத்து சுங்கச்சாவடிகளிலும் Fastag', 'குறைந்த காத்திருப்பு கட்டணங்கள்']
    },
    {
      id: 'airport-railway-transfers',
      icon: '✈️',
      titleEn: 'Airport & Railway Transfers',
      titleTa: 'விமான நிலையம் & ரயில் நிலைய டிராப்',
      subtitleEn: 'Madurai (IXM) & Tuticorin (TCR) Airports',
      subtitleTa: 'மதுரை & தூத்துக்குடி விமான நிலையங்கள்',
      descEn: 'Guaranteed punctual 24/7 transfers to Madurai International Airport (120 KM) and Tuticorin Airport (95 KM). Live flight tracking and early-morning 2 AM / 3 AM pickups.',
      descTa: 'மதுரை (120 கி.மீ), தூத்துக்குடி (95 கி.மீ) விமான நிலையங்களுக்கு 24/7 குறித்த நேரத்தில் பாதுகாப்பான விமான நிலைய பயணம்.',
      badgeEn: '24/7 Punctual',
      badgeTa: '24/7 தயார்',
      highlightsEn: ['Flight schedule monitoring buffer', 'Midnight & early dawn dispatch', 'Luggage assistance for family travelers'],
      highlightsTa: ['விமான நேர கண்காணிப்பு வசதி', 'அதிகாலை 2:00 / 3:00 மணி உடனடி சேவை', 'லக்கேஜ் உதவி மற்றும் பெரிய டிக்கி வசதி']
    },
    {
      id: 'temple-sightseeing-tours',
      icon: '🛕',
      titleEn: 'Temple & Sightseeing Tour Packages',
      titleTa: 'கோவில் சுற்றுலா & ஆன்மீக யாத்திரை',
      subtitleEn: 'Sankaranarayanar Temple & Courtallam',
      subtitleTa: 'சங்கரநாராயணர் கோவில் & குற்றாலம்',
      descEn: 'Dedicated spiritual circuits to Sri Sankaranarayanaswamy Temple, Courtallam Falls, Tiruchendur Murugan Temple, Madurai Meenakshi Amman & Papanasam.',
      descTa: 'அருள்மிகு சங்கரநாராயணர் கோவில், குற்றால அருவிகள், திருச்செந்தூர் முருகன் கோவில் மற்றும் மதுரை மீனாட்சி அம்மன் ஆன்மீக சுற்றுலா பேக்கேஜ்கள்.',
      badgeEn: 'Heritage Tour',
      badgeTa: 'ஆன்மீக சுற்றுலா',
      highlightsEn: ['Relaxed darshan waiting flexibility', 'Experienced pilgrimage route drivers', 'Senior citizen & family comfortable cabs'],
      highlightsTa: ['சுவாமி தரிசனத்திற்கு தாராள காத்திருப்பு', 'புனித தலங்களை அறிந்த ஓட்டுநர்கள்', 'முதியவர்கள் & குடும்பத்தினருக்கு ஏற்ற கார்கள்']
    }
  ];

  bookService(service: ServiceOverviewItem): void {
    const text = `Hello Rider Call Taxi, I would like to book "${service.titleEn}" from Sankarankovil. Please share availability and fare details.`;
    const url = `https://wa.me/919363015586?text=${encodeURIComponent(text)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  }
}
