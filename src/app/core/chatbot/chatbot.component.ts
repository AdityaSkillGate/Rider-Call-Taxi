import { Component, OnInit, signal, computed, effect, untracked, ViewChild, ElementRef, AfterViewChecked, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { SpeechService } from '../../shared/services/speech.service';
import { TranslationService } from '../../shared/services/translation.service';
import { ChatMessage } from '../../shared/models/taxi.model';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
  @ViewChild('messagesContainer') private messagesContainer!: ElementRef;

  public taxiData = inject(TaxiDataService);
  public speech = inject(SpeechService);
  public i18n = inject(TranslationService);

  isOpen = signal<boolean>(false);
  userInput = signal<string>('');
  messages = signal<ChatMessage[]>([]);
  isTyping = signal<boolean>(false);

  quickQueries = computed(() => {
    if (this.i18n.isTamil()) {
      return [
        { label: '💰 கட்டண விவரம்', query: 'ஒரு கிலோமீட்டருக்கு கட்டணம் எவ்வளவு?' },
        { label: '✈️ மதுரை ஏர்போர்ட்', query: 'மதுரை விமான நிலையத்திற்கு டாக்ஸி கட்டணம் என்ன?' },
        { label: '🛕 கோவில் சுற்றுலா', query: 'கோவில் சுற்றுலா தொகுப்புகள் பற்றி கூறுங்கள்' },
        { label: '🚗 இனோவா / 7 சீட்டர்', query: '7 சீட்டர் இனோவா கார் கிடைக்குமா?' },
        { label: '📞 ஓட்டுநர் உதவி மையம்', query: 'கட்டுப்பாட்டு அறையை எப்படி தொடர்பு கொள்வது?' }
      ];
    }
    return [
      { label: '💰 Fare per KM', query: 'What is your taxi rate per KM?' },
      { label: '✈️ Madurai Airport', query: 'How much is taxi to Madurai Airport?' },
      { label: '🛕 Temple Packages', query: 'Tell me about Temple Tour packages' },
      { label: '🚗 Innova / SUV', query: 'Do you have 7 seater Innova cabs?' },
      { label: '📞 Talk to Driver Desk', query: 'How to contact driver desk?' }
    ];
  });

  constructor() {
    // React to language switch to update welcome message if user hasn't chatted yet
    effect(() => {
      const _ = this.i18n.currentLang();
      untracked(() => {
        if (this.messages().length <= 1) {
          this.messages.set([this.getWelcomeMessage()]);
        }
      });
    }, { allowSignalWrites: true });
  }

  ngOnInit(): void {
    this.messages.set([this.getWelcomeMessage()]);
  }

  getWelcomeMessage(): ChatMessage {
    if (this.i18n.isTamil()) {
      return {
        id: '1',
        sender: 'bot',
        text: 'வணக்கம்! நான் **ரைடர்பாட்**, சங்கரன்கோவில் ரைடர் கால் டாக்ஸியின் AI பயண உதவியாளர். 🚕\n\nஉங்கள் பயணத்திற்கு நான் எவ்வாறு உதவ முடியும்? தமிழில் அல்லது ஆங்கிலத்தில் தட்டச்சு செய்யலாம், அல்லது மைக் மூலம் பேசலாம்!',
        time: this.getCurrentTime(),
        actions: [
          { label: 'கட்டணம் கணக்கிடு', action: 'fare' },
          { label: 'வாட்ஸ்அப்பில் முன்பதிவு', action: 'whatsapp' }
        ]
      };
    }
    return {
      id: '1',
      sender: 'bot',
      text: 'வணக்கம் & Hello! I am **RiderBot**, your AI travel assistant at Rider Call Taxi Sankarankovil. 🚕\n\nHow can I help your journey today? You can type in English or Tanglish, or tap the mic icon to speak!',
      time: this.getCurrentTime(),
      actions: [
        { label: 'Calculate Fare', action: 'fare' },
        { label: 'Book on WhatsApp', action: 'whatsapp' }
      ]
    };
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  toggleChat(): void {
    this.isOpen.update(v => !v);
  }

  getCurrentTime(): string {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  scrollToBottom(): void {
    try {
      if (this.messagesContainer) {
        this.messagesContainer.nativeElement.scrollTop = this.messagesContainer.nativeElement.scrollHeight;
      }
    } catch (err) {}
  }

  sendMessage(text?: string): void {
    const query = (text || this.userInput()).trim();
    if (!query) return;

    // Add user message
    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: this.getCurrentTime()
    };

    this.messages.update(m => [...m, userMsg]);
    this.userInput.set('');
    this.isTyping.set(true);

    // Simulate AI response logic
    setTimeout(() => {
      const response = this.generateBotResponse(query);
      this.messages.update(m => [...m, response]);
      this.isTyping.set(false);
    }, 700);
  }

  formatMessage(text: string): string {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .split('\n')
      .join('<br/>');
  }

  generateBotResponse(query: string): ChatMessage {
    const q = query.toLowerCase();
    const time = this.getCurrentTime();
    const isTa = this.i18n.isTamil();

    // 1. Fare & Rate Queries
    if (q.includes('fare') || q.includes('rate') || q.includes('price') || q.includes('evalo') || q.includes('cost') || q.includes('km') || q.includes('கட்டணம்') || q.includes('விலை') || q.includes('ரூபாய்')) {
      if (isTa) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `🚕 **ரைடர் கால் டாக்ஸி நேரடி கட்டண அட்டவணை:**\n\n**1. ரவுண்ட் டிரிப் (Round Trip):**\n• **செடான் (Sedan):** **₹15/கி.மீ** (பகல் பேக்கேஜ் ₹450 / இரவு ₹530 முதல் 20 கி.மீ வரை)\n• **எஸ்யூவி (SUV 7-9 Seater):** **₹19/கி.மீ** (பகல் பேக்கேஜ் ₹600 / இரவு ₹680)\n• **காத்திருப்பு கட்டணம்:** செடான் ₹80/மணி, எஸ்யூவி ₹100/மணி\n\n**2. ஒரு வழி பயணம் (One Way Drop):**\n• **செடான்:** அடிப்படை ₹120 (முதல் 3 கி.மீ) • பகல் **₹28/கி.மீ** • இரவு **₹30/கி.மீ**\n• **எஸ்யூவி:** அடிப்படை ₹180 (முதல் 3 கி.மீ) • பகல் **₹36/கி.மீ** • இரவு **₹38/கி.மீ**\n\nசுங்கச்சாவடி (Fastag) & பார்க்கிங் உண்மையான ரசீது மட்டுமே வசூலிக்கப்படும். கூடுதல் மறைமுக கட்டணங்கள் ஏதுமில்லை!`,
          time,
          actions: [
            { label: 'வாட்ஸ்அப்பில் புக் செய்ய', action: 'whatsapp' },
            { label: 'அழைக்க +91 9363015586', action: 'call' }
          ]
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `🚕 **Official Transparent Fare Structure:**\n\n**1. Round Trip Tour:**\n• **Sedan:** **₹15/KM** (20 KM Day Pkg ₹450 / Night Pkg ₹530)\n• **SUV (7-9 Seater):** **₹19/KM** (20 KM Day Pkg ₹600 / Night Pkg ₹680)\n• **Waiting Charges:** Sedan ₹80/hr, SUV ₹100/hr\n\n**2. One Way Drop Taxi:**\n• **Sedan:** Base ₹120 (first 3 KM) • Day **₹28/KM** • Night **₹30/KM**\n• **SUV:** Base ₹180 (first 3 KM) • Day **₹36/KM** • Night **₹38/KM**\n\nZero surge charges, zero deadhead return billing on one-way trips, and transparent Fastag toll billing!`,
        time,
        actions: [
          { label: 'Book on WhatsApp', action: 'whatsapp' },
          { label: 'Call +91 9363015586', action: 'call' }
        ]
      };
    }

    // 2. Booking Queries
    if (q.includes('book') || q.includes('reserve') || q.includes('முன்பதிவு') || q.includes('புக்') || q.includes('order')) {
      if (isTa) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `🚖 **உடனடி டாக்ஸி முன்பதிவு (சங்கரன்கோவில் & சுற்றுவட்டாரம்):**\n\n1. எங்கள் 24/7 அவசர உதவி எண்ணை அழைக்கலாம்: **+91 9363015586**\n2. அல்லது வாட்ஸ்அப் மூலம் உங்கள் பிக்கப் முகவரியை அனுப்பி 60 வினாடிகளில் கார் உறுதி செய்யலாம்!\n\nசங்கரன்கோவில் டவுன் பகுதியில் **10 நிமிடங்களில்** வாசலில் கார் தயார்!`,
          time,
          actions: [
            { label: 'வாட்ஸ்அப்பில் உடனடியாக புக் செய்ய', action: 'whatsapp' },
            { label: 'அழைக்க +91 9363015586', action: 'call' }
          ]
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `🚖 **Instant 24/7 Cab Booking:**\n\n1. **Call our central dispatch:** +91 9363015586 / +91 9363715586\n2. **Or WhatsApp:** Send your pickup location and destination for instant cab dispatch in 60 seconds!\n\nGuaranteed **10-minute doorstep pickup** across Sankarankovil!`,
        time,
        actions: [
          { label: 'Instant WhatsApp Booking', action: 'whatsapp' },
          { label: 'Call +91 9363015586', action: 'call' }
        ]
      };
    }

    // 3. Courtallam / Waterfalls Queries
    if (q.includes('courtallam') || q.includes('waterfall') || q.includes('falls') || q.includes('குற்றாலம்') || q.includes('அருவி')) {
      if (isTa) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `🌊 **குற்றாலம் அருவிகள் சுற்றுலா டாக்ஸி:**\n\n• **தூரமும் நேரமும்:** சங்கரன்கோவிலில் இருந்து குற்றாலம் ~42 கி.மீ (சுமார் 55 நிமிடங்கள்)\n• **பார்வையிடும் இடங்கள்:** மெயின் அருவி, ஐந்தருவி, பழைய குற்றாலம், புலியருவி & காசி விஸ்வநாதர் கோவில்\n• **கட்டணம்:** செடான் ₹15/கி.மீ | எஸ்யூவி 7-சீட்டர் ₹19/கி.மீ (குடும்பத்துடன் நீராட கூரை கேரியர் வசதியுடன் கூடிய கார்கள்)`,
          time,
          actions: [
            { label: 'குற்றாலம் டூர் புக் செய்ய', action: 'whatsapp' }
          ]
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `🌊 **Courtallam Waterfalls Tour Cabs:**\n\n• **Distance & Time:** Sankarankovil to Courtallam is ~42 KM (approx. 55 mins)\n• **Circuit Covered:** Main Falls, Five Falls, Old Courtallam, Tiger Falls & Kasi Viswanathar Temple\n• **Tariffs:** Sedan ₹15/KM • SUV 7-Seater ₹19/KM with luggage roof carriers!`,
        time,
        actions: [
          { label: 'Book Courtallam Package', action: 'whatsapp' }
        ]
      };
    }

    // 4. Airport Queries
    if (q.includes('airport') || q.includes('madurai') || q.includes('trivandrum') || q.includes('tuticorin') || q.includes('flight') || q.includes('விமானம்') || q.includes('ஏர்போர்ட்')) {
      if (isTa) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `✈️ **சங்கரன்கோவில் & தென்காசியில் இருந்து 24/7 ஏர்போர்ட் டிராப்:**\n\n• **மதுரை விமான நிலையம் (IXM - 120 கி.மீ):** ~2 மணி 15 நிமிடம் (செடான் ரவுண்ட் டிரிப் ₹1,800+ / ஒரு வழி ₹3,360+)\n• **தூத்துக்குடி விமான நிலையம் (TCR - 85 கி.மீ):** ~1 மணி 45 நிமிடம்\n• **திருவனந்தபுரம் விமான நிலையம் (TRV - 140 கி.மீ):** ~3 மணி 30 நிமிடம்\n\nநேரலை விமான கண்காணிப்பு, அதிகாலை 2 AM / 3 AM பிக்கப் மற்றும் ரூப் கேரியர் லக்கேஜ் வசதி!`,
          time,
          actions: [
            { label: 'ஏர்போர்ட் டாக்ஸி புக் செய்ய', action: 'whatsapp' }
          ]
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `✈️ **24/7 Airport Transfers from Sankarankovil & Tenkasi:**\n\n• **Madurai Airport (IXM - 120 KM):** ~2 hrs 15 mins (Sedan Round Trip ₹1,800+ / One Way ₹3,360+)\n• **Tuticorin Airport (TCR - 85 KM):** ~1 hr 45 mins\n• **Trivandrum Airport (TRV - 140 KM):** ~3 hrs 30 mins\n\nFlight tracking, luggage carrier, and guaranteed on-time 2:00 AM / 3:00 AM early dawn pickups!`,
        time,
        actions: [
          { label: 'Book Airport Drop on WhatsApp', action: 'whatsapp' }
        ]
      };
    }

    // 5. Temple Packages
    if (q.includes('temple') || q.includes('sankarankovil') || q.includes('tiruchendur') || q.includes('rameswaram') || q.includes('kovil') || q.includes('கோவில்') || q.includes('சுற்றுலா')) {
      if (isTa) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `🛕 **தென் தமிழக ஆன்மீக சுற்றுலா தொகுப்புகள்:**\n\n1. **சங்கரநாராயண சுவாமி கோவில்** & நவத்திருப்பதி கோவில்கள்\n2. **திருச்செந்தூர் முருகன் கோவில்** ஒரே நாள் தரிசனம்\n3. **மதுரை மீனாட்சி அம்மன் & ராமேஸ்வரம்** 2-நாள் பயணம்\n4. **குற்றாலம் & தென்காசி காசி விஸ்வநாதர்** சுற்றுலா\n\nகோவில் நடை திறக்கும் நேரங்களை நன்கு அறிந்த அனுபவமிக்க ஓட்டுநர்கள்!`,
          time,
          actions: [
            { label: 'கோவில் டூர் முன்பதிவு', action: 'whatsapp' }
          ]
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `🛕 **South Tamil Nadu Spiritual Temple Packages:**\n\n1. **Sankaranarayanaswamy Temple** local & surrounding navathirupathi tours\n2. **Tiruchendur Murugan Sea Temple** same-day darshan package\n3. **Madurai Meenakshi Amman Temple & Rameswaram** 2-day circuit\n4. **Courtallam & Tenkasi Kasi Viswanathar** heritage trip\n\nOur chauffeurs are familiar with temple timings, darshan queues, and parking spots!`,
        time,
        actions: [
          { label: 'Enquire Temple Package', action: 'whatsapp' }
        ]
      };
    }

    // 6. Fleet & Vehicle Queries
    if (q.includes('innova') || q.includes('suv') || q.includes('tempo') || q.includes('fleet') || q.includes('car') || q.includes('family') || q.includes('கார்') || q.includes('வாகனம்') || q.includes('இனோவா')) {
      if (isTa) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `🚗 **எங்கள் சொந்த அசல் ஏசி வாகனங்கள் (சங்கரன்கோவில் டாக்ஸி ஸ்டாண்ட்):**\n\n1. **டாடா அல்ட்ராஸ் பிரீமியம் (TN 79 M 7309):** 5-நட்சத்திர பாதுகாப்பு • **₹15/கி.மீ**\n2. **டொயோட்டா கிளான்சா எக்ஸிகியூட்டிவ் (TN 79 M 5198):** அமைதியான சொகுசு கேபின் • **₹15/கி.மீ**\n3. **மாருதி சுஸுகி டிசையர் டூர் (TN 79 Q 9304):** உறுதியான கூரை லக்கேஜ் கேரியர் • **₹15/கி.மீ**\n4. **மாருதி சுஸுகி எர்டிகா 7-சீட்டர் (TN 79 Q 3460):** குடும்ப வாகனம் & கூரை கேரியர் • **₹19/கி.மீ**\n5. **செவர்லே டவேரா நியோ 3 (TN 18 AK 9659):** மலைப்பாதை & குற்றாலம் குழு வாகனம் (9 சீட்டர்) • **₹20/கி.மீ**\n\n• **டெம்போ டிராவலர் (14 சீட்டர்):** திருமண மற்றும் பெரிய குழு சுற்றுலா (வாட்ஸ்அப்பில் புக் செய்யலாம்)\n\nஅனைத்து கார்களிலும் அரசு மஞ்சள் நம்பர் பிளேட், 24/7 GPS மற்றும் பாஸ்டேக் வசதி உள்ளது.`,
          time,
          actions: [
            { label: 'வாகனம் புக் செய்ய', action: 'whatsapp' }
          ]
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `🚗 **Our Authentic Fleet Available at Sankarankovil Stand:**\n\n1. **Tata Altroz Premium (TN 79 M 7309):** 5-Star Safety Hatchback • **₹15/KM**\n2. **Toyota Glanza Executive (TN 79 M 5198):** Whisper-Quiet Luxury Cabin • **₹15/KM**\n3. **Maruti Suzuki Dzire Tour (TN 79 Q 9304):** Heavy Overhead Luggage Carrier • **₹15/KM**\n4. **Maruti Suzuki Ertiga 7-Seater (TN 79 Q 3460):** Smart Hybrid Family Car + Roof Rack • **₹19/KM**\n5. **Chevrolet Tavera Neo 3 (TN 18 AK 9659):** Heavy-Duty 9-Seater for Ghats & Hill Stations • **₹20/KM**\n\n• **Tempo Traveller (14-Seater Deluxe):** Wedding Convoys & Extended Tours • Pre-book on WhatsApp\n\nAll cabs are commercial yellow-plate certified with 24/7 GPS tracking and verified polite chauffeurs.`,
        time,
        actions: [
          { label: 'Check Availability on WhatsApp', action: 'whatsapp' }
        ]
      };
    }

    // 7. Contact Details Queries
    if (q.includes('contact') || q.includes('call') || q.includes('phone') || q.includes('number') || q.includes('address') || q.includes('office') || q.includes('தொடர்பு') || q.includes('எண்') || q.includes('அலுவலகம்')) {
      if (isTa) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `📞 **ரைடர் கால் டாக்ஸி 24/7 தொடர்பு விவரம்:**\n\n• **முக்கிய அவசர உதவி எண்கள்:** +91 9363015586 / +91 9363715586\n• **வாட்ஸ்அப் புக்:** https://wa.me/919363015586\n• **மின்னஞ்சல்:** ridercalltaxi@gmail.com\n• **அலுவலக முகவரி:** 757A/7, First Floor, MPM காம்ப்ளக்ஸ், ராஜபாளையம் மெயின் ரோடு, NGO காலனி, ஊராட்சி ஒன்றிய அலுவலகம் எதிரில், சங்கரன்கோவில் – 627756.`,
          time,
          actions: [
            { label: 'அழைக்க +91 9363015586', action: 'call' },
            { label: 'வாட்ஸ்அப் சாட்', action: 'whatsapp' }
          ]
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `📞 **Rider Call Taxi 24/7 Dispatch Desk:**\n\n• **Hotlines:** +91 9363015586 / +91 9363715586\n• **WhatsApp Booking:** https://wa.me/919363015586\n• **Email:** ridercalltaxi@gmail.com\n• **Office Address:** 757A/7, First Floor, MPM Complex, NGO Colony, Rajapalayam Main Road (Opp. Panchayat Union Office), Sankarankovil – 627756.`,
        time,
        actions: [
          { label: 'Call Driver Desk', action: 'call' },
          { label: 'Chat on WhatsApp', action: 'whatsapp' }
        ]
      };
    }

    // 8. Default friendly fallback
    if (isTa) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `நிச்சயமாக! உடனடியாக கார் முன்பதிவு செய்ய சங்கரன்கோவில் ஓட்டுநர் கட்டுப்பாட்டு மேலாளருடன் வாட்ஸ்அப் அல்லது தொலைபேசி மூலம் இணைக்கவா?`,
        time,
        actions: [
          { label: 'வாட்ஸ்அப்பில் இணைக்க', action: 'whatsapp' },
          { label: 'அழைக்க +91 9363015586', action: 'call' }
        ]
      };
    }
    return {
      id: Date.now().toString(),
      sender: 'bot',
      text: `Sure! I can instantly connect you with our 24/7 dispatch manager in Sankarankovil on WhatsApp or phone for immediate cab allocation. Would you like to connect right now?`,
      time,
      actions: [
        { label: 'Connect via WhatsApp', action: 'whatsapp' },
        { label: 'Call +91 9363015586', action: 'call' }
      ]
    };
  }

  handleAction(action: string): void {
    if (action === 'whatsapp') {
      const msg = this.i18n.isTamil() 
        ? 'வணக்கம் ரைடர் கால் டாக்ஸி, நான் ரைடர்பாட் மூலம் பேசுகிறேன். டாக்ஸி புக் செய்ய விரும்புகிறேன்.' 
        : 'Hello Rider Call Taxi, I was chatting with RiderBot and would like to confirm a booking.';
      window.open(this.taxiData.getWhatsAppEnquiryUrl({ message: msg }), '_blank');
    } else if (action === 'call') {
      window.location.href = `tel:${this.taxiData.company.phone1}`;
    } else if (action === 'fare') {
      this.sendMessage(this.i18n.isTamil() ? 'ஒரு கிலோமீட்டருக்கு கட்டணம் எவ்வளவு?' : 'What is your taxi rate per KM?');
    }
  }

  toggleVoice(): void {
    if (this.speech.isListening()) {
      this.speech.stopListening();
    } else {
      const speechLang = this.i18n.isTamil() ? 'ta-IN' : 'en-IN';
      this.speech.startListening(
        (transcript) => {
          this.userInput.set(transcript);
          this.sendMessage(transcript);
        },
        (err) => {
          console.error('Speech error:', err);
        },
        speechLang
      );
    }
  }
}
