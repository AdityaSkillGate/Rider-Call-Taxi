import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../shared/services/translation.service';
import { TaxiDataService } from '../../shared/services/taxi-data.service';

export interface FaqItem {
  id: string;
  questionEn: string;
  questionTa: string;
  answerEn: string;
  answerTa: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  public i18n = inject(TranslationService);
  public taxiData = inject(TaxiDataService);

  // Active accordion index, defaults to 0 (first question open)
  activeIdx = signal<number | null>(0);

  readonly faqs: FaqItem[] = [
    {
      id: 'faq-1',
      questionEn: 'How do I book a call taxi in Sankarankovil with Rider Call Taxi?',
      questionTa: 'சங்கரன்கோவிலில் ரைடர் கால் டாக்ஸியை எவ்வாறு முன்பதிவு செய்வது?',
      answerEn: 'Booking is easy and instant! You can call our 24/7 dispatch hotlines directly at +91 9363015586 or +91 9363715586, or use our 1-click WhatsApp booking feature with your pickup location, drop destination, and preferred vehicle.',
      answerTa: 'முன்பதிவு மிகவும் எளிதானது மற்றும் உடனடியானது! எங்கள் 24/7 அவசர உதவி எண்களான +91 9363015586 அல்லது +91 9363715586 என்ற எண்களை நேரடியாக அழைக்கலாம், அல்லது எங்கள் இணையதளத்தில் உள்ள 1-கிளிக் வாட்ஸ்அப் வசதி மூலம் உங்கள் புறப்படும் இடம், சேரும் இடம் மற்றும் காரின் வகையை தெரிவித்து உடனடியாக புக் செய்யலாம்.'
    },
    {
      id: 'faq-2',
      questionEn: 'What are the one-way drop and round-trip taxi tariffs from Sankarankovil?',
      questionTa: 'சங்கரன்கோவிலில் ஒரு வழி & இரு வழி டாக்ஸி கட்டணங்கள் என்ன?',
      answerEn: 'For Sedans, One-Way base fare is ₹120 for the first 3 km, then ₹28/km during Day (7:00 AM – 7:00 PM) and ₹30/km at Night (7:00 PM – 7:00 AM). For SUVs, One-Way base fare is ₹180 for the first 3 km, then ₹36/km (Day) and ₹38/km (Night). For Round Trips, Sedan Day Package is ₹450 for the first 20 km (then ₹15/km, waiting ₹80/hr) and Night Package is ₹530 for 20 km (then ₹17/km, waiting ₹100/hr); SUV Day Package is ₹600 for 20 km (then ₹19/km, waiting ₹100/hr) and Night Package is ₹680 for 20 km (then ₹21/km, waiting ₹120/hr).',
      answerTa: 'செடான் காருக்கு ஒரு வழி பயணத்திற்கு முதல் 3 கி.மீ-க்கு அடிப்படை கட்டணம் ₹120, பின்னர் பகல் கட்டணம் ₹28/கி.மீ (காலை 7:00 – இரவு 7:00) அல்லது இரவு கட்டணம் ₹30/கி.மீ (இரவு 7:00 – காலை 7:00). SUV காருக்கு ஒரு வழி பயணத்திற்கு முதல் 3 கி.மீ-க்கு அடிப்படை கட்டணம் ₹180, பின்னர் பகல் ₹36/கி.மீ அல்லது இரவு ₹38/கி.மீ. இரு வழி பயணத்திற்கு செடான் பகல் பேக்கேஜ் முதல் 20 கி.மீ-க்கு ₹450 (கூடுதல் கி.மீ ₹15, காத்திருப்பு ₹80/மணி) மற்றும் இரவு பேக்கேஜ் ₹530 (கூடுதல் கி.மீ ₹17, காத்திருப்பு ₹100/மணி); SUV பகல் பேக்கேஜ் ₹600 (கூடுதல் கி.மீ ₹19) மற்றும் இரவு பேக்கேஜ் ₹680 (கூடுதல் கி.மீ ₹21).'
    },
    {
      id: 'faq-3',
      questionEn: 'Are cabs available 24/7 for early morning Madurai airport drops?',
      questionTa: 'அதிகாலை மதுரை விமான நிலைய டிராப்பிற்கு 24/7 டாக்ஸி கிடைக்குமா?',
      answerEn: 'Yes, absolutely! Rider Call Taxi operates 24 hours a day, 7 days a week. We specialize in punctuality for early morning 2:00 AM / 3:00 AM airport transfers to Madurai, Tuticorin, and Trivandrum airports with live flight monitoring.',
      answerTa: 'ஆம், நிச்சயமாக! ரைடர் கால் டாக்ஸி 24 மணி நேரமும், வாரத்தின் 7 நாட்களும் இயங்குகிறது. அதிகாலை 2:00 மணி / 3:00 மணி போன்ற நேரங்களில் மதுரை, தூத்துக்குடி மற்றும் திருவனந்தபுரம் விமான நிலையங்களுக்கு குறித்த நேரத்தில் சென்று சேருவதில் நாங்கள் முழு அர்ப்பணிப்புடன் செயல்படுகிறோம்.'
    },
    {
      id: 'faq-4',
      questionEn: 'What types of cars and vehicles are available in your fleet?',
      questionTa: 'உங்கள் வாகனக் குழுவில் என்னென்ன வகையான கார்கள் உள்ளன?',
      answerEn: 'Our genuine commercial fleet includes Tata Altroz Premium (Hatchback), Maruti Suzuki Dzire Tour & Toyota Glanza (Sedans with overhead carriers), Maruti Suzuki Ertiga Smart Hybrid (7-Seater SUV), Chevrolet Tavera Neo 3 (9-Seater MUV for ghat roads), and 14-seater Tempo Travellers.',
      answerTa: 'எங்கள் வணிக வாகன வரிசையில் டாடா அல்ட்ராஸ் பிரீமியம் (ஹேட்ச்பேக்), மாருதி சுசுகி டிசையர் டூர் & டொயோட்டா கிளான்சா (கேரியர் கொண்ட செடான்கள்), மாருதி சுசுகி எர்டிகா ஸ்மார்ட் ஹைப்ரிட் (7-சீட்டர் SUV), செவர்லே தவேரா நியோ 3 (மலைப்பாதைக்கான 9-சீட்டர் MUV), மற்றும் 14-சீட்டர் டெம்போ டிராவலர்கள் உள்ளன.'
    },
    {
      id: 'faq-5',
      questionEn: 'Are there any hidden charges, surge fees, or night driving charges?',
      questionTa: 'கூடுதல் மறைமுக கட்டணங்கள், பீக் ஹவர் சார்ஜ் அல்லது இரவுக் கட்டணங்கள் உண்டா?',
      answerEn: 'No, we strictly guarantee zero surge pricing and zero hidden fees. Tolls and parking are paid at actual receipts by passengers with complete transparency, and all fares are billed accurately per kilometer.',
      answerTa: 'இல்லை, கூடுதல் கட்டணங்களோ, பீக் ஹவர் சர்சார்ஜோ அல்லது மறைமுக கட்டணங்களோ எதுவும் இல்லை. சுங்கச்சாவடி மற்றும் பார்க்கிங் கட்டணங்கள் உண்மையான ரசீது அடிப்படையில் மட்டுமே வாடிக்கையாளர்களால் செலுத்தப்படும், மேலும் அனைத்து பயணங்களும் துல்லியமான கி.மீ கணக்கீட்டில் மட்டுமே கட்டணம் வசூலிக்கப்படுகிறது.'
    }
  ];

  isOpen(index: number): boolean {
    return this.activeIdx() === index;
  }

  toggle(index: number): void {
    if (this.activeIdx() === index) {
      this.activeIdx.set(null);
    } else {
      this.activeIdx.set(index);
    }
  }
}
