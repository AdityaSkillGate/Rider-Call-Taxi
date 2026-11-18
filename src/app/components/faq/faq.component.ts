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
      questionEn: 'What are the one-way drop taxi charges from Sankarankovil?',
      questionTa: 'சங்கரன்கோவிலில் இருந்து ஒரு வழி (One-Way) டாக்ஸி கட்டணங்கள் என்ன?',
      answerEn: 'For trips under 50 km, we charge a base package of ₹450 plus ₹14/km (Non-AC) or ₹15/km (AC) for Sedans, and ₹600 plus ₹18/km (Non-AC) or ₹19/km (AC) for SUVs. For outstation drops above 50 km, transparent 2x return rates apply (Sedan Non-AC ₹28/km, AC ₹30/km; SUV Non-AC ₹36/km, AC ₹38/km) with zero base fee.',
      answerTa: '50 கி.மீ-க்கு உட்பட்ட குறுகிய பயணங்களுக்கு, செடான் காருக்கு ₹450 அடிப்படை கட்டணம் + கி.மீ-க்கு ₹14 (Non-AC) அல்லது ₹15 (AC), மற்றும் SUV காருக்கு ₹600 + கி.மீ-க்கு ₹18 (Non-AC) அல்லது ₹19 (AC) வசூலிக்கப்படுகிறது. 50 கி.மீ-க்கு மேற்பட்ட வெளியூர் ஒரு வழி பயணங்களுக்கு அடிப்படை கட்டணம் இன்றி, நேரடி வெளிப்படையான 2x ரிட்டர்ன் கட்டணம் மட்டுமே (செடான் Non-AC ₹28, AC ₹30; SUV Non-AC ₹36, AC ₹38).'
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
