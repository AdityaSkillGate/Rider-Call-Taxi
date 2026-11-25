export interface LocalRouteFare {
  destination: string;
  destinationTa: string;
  distanceKm: number;
  duration: string;
  durationTa: string;
  sedanDayFare: string;
  suvDayFare: string;
  highlights: string;
  highlightsTa: string;
}

export interface LocalServiceHighlight {
  title: string;
  titleTa: string;
  description: string;
  descriptionTa: string;
  icon: string;
  tag: string;
  tagTa: string;
}

export interface LocalFaq {
  question: string;
  questionTa: string;
  answer: string;
  answerTa: string;
}

export interface LocationPageData {
  slug: string;
  name: string;
  nameTa: string;
  title: string;
  subtitle: string;
  subtitleTa: string;
  badge: string;
  badgeTa: string;
  heroH1: string;
  heroH1Highlight: string;
  heroH1Ta: string;
  heroH1HighlightTa: string;
  leadParagraph: string;
  leadParagraphTa: string;
  isPhysicalHQ: boolean;
  stationInfo: string;
  stationInfoTa: string;
  localLandmarks: { name: string; nameTa: string; desc: string; descTa: string }[];
  localServices: LocalServiceHighlight[];
  coverageAreas: { name: string; nameTa: string }[];
  popularRoutes: LocalRouteFare[];
  faqs: LocalFaq[];
  meta: {
    title: string;
    description: string;
    canonical: string;
    keywords: string;
  };
}

export const LOCATIONS_DATA: Record<string, LocationPageData> = {
  'call-taxi-sankarankovil': {
    slug: 'call-taxi-sankarankovil',
    name: 'Sankarankovil',
    nameTa: 'சங்கரன்கோவில்',
    title: 'Call Taxi in Sankarankovil',
    subtitle: 'Headquarters & Primary Dispatch Hub of Rider Call Taxi',
    subtitleTa: 'ரைடர் கால் டாக்ஸியின் தலைமை அலுவலகம் மற்றும் முதன்மை கட்டுப்பாட்டு மையம்',
    badge: '#1 CALL TAXI SERVICE IN SANKARANKOVIL',
    badgeTa: '#1 முதன்மை டாக்ஸி சேவை • சங்கரன்கோவில்',
    heroH1: 'Call Taxi in',
    heroH1Highlight: 'Sankarankovil',
    heroH1Ta: 'சங்கரன்கோவிலில் நம்பகமான',
    heroH1HighlightTa: 'கால் டாக்ஸி சேவை',
    leadParagraph: 'Welcome to the official headquarters of Rider Call Taxi in Sankarankovil. Located at 757A/7, MPM Complex, Rajapalayam Main Road (opposite Panchayat Union Office), we offer 10-minute doorstep pickup, local temple visits, outstation trips, and 24/7 Madurai airport drops with transparent slab billing.',
    leadParagraphTa: 'சங்கரன்கோவிலில் ரைடர் கால் டாக்ஸியின் தலைமை அலுவலகத்திற்கு அன்புடன் வரவேற்கிறோம். ராஜபாளையம் மெயின் ரோடு, MPM காம்ப்ளக்ஸில் அமைந்துள்ள எங்கள் மையம் 10 நிமிட உடனடி பிக்கப், உள்ளூர் கோவில் பயணம், வெளியூர் டிராப் மற்றும் மதுரை ஏர்போர்ட் டாக்ஸி சேவைகளை நியாயமான கட்டணத்தில் வழங்குகிறது.',
    isPhysicalHQ: true,
    stationInfo: 'Centrally stationed at MPM Complex on Rajapalayam Main Road with standby Sedans, SUVs, and commercial tourist cabs ready for immediate 24/7 dispatch across Sankarankovil.',
    stationInfoTa: 'ராஜபாளையம் மெயின் ரோடு MPM காம்ப்ளக்ஸில் செடான் மற்றும் எஸ்யூவி கார்கள் 24 மணி நேரமும் உடனடி பயணத்திற்கு தயார் நிலையில் உள்ளன.',
    localLandmarks: [
      {
        name: 'Sri Sankaranarayanar Temple & Gomathi Amman Sannadhi',
        nameTa: 'அருள்மிகு சங்கரநாராயண சுவாமி & கோமதி அம்மன் கோவில்',
        desc: 'Doorstep pickup for daily darshan, Aadi Thapasu festival, and pilgrimage tours with senior-citizen assistance.',
        descTa: 'தினசரி தரிசனம் மற்றும் ஆடித்தவசு திருவிழாவிற்கு முதியவர்கள் எளிதில் பயணிக்கும் வகையில் கோவில் வாசல் வரை டாக்ஸி சேவை.'
      },
      {
        name: 'Sankarankovil Railway Station & New Bus Stand',
        nameTa: 'சங்கரன்கோவில் ரயில் நிலையம் & புதிய பேருந்து நிலையம்',
        desc: 'Punctual train arrival and departure pickups with dedicated luggage assistance for Pothigai and Kollam Express passengers.',
        descTa: 'பொதிகை மற்றும் கொல்லம் எக்ஸ்பிரஸ் பயணிகளுக்கு ரயில் வரும் நேரத்தில் சரியான பிக்கப் மற்றும் லக்கேஜ் உதவி.'
      },
      {
        name: 'Kalappakulam & Karivalam Main Road Corridor',
        nameTa: 'களப்பாகுளம் & கரிவலம்வந்தநல்லூர் வழித்தடம்',
        desc: 'Seamless rural and suburban residential connectivity connecting surrounding agricultural and handloom hubs.',
        descTa: 'சுற்றுப்புற கிராமங்கள் மற்றும் நெசவு தொழில் நகரங்களை இணைக்கும் விரைவான குடியிருப்பு டாக்ஸி சேவை.'
      }
    ],
    localServices: [
      {
        title: '10-Minute Doorstep Local Pickup',
        titleTa: '10 நிமிட உடனடி உள்ளூர் பிக்கப்',
        description: 'Need to visit the hospital, bank, grocery market, or relative house in Sankarankovil? Our local cabs arrive at your door in under 10 minutes.',
        descriptionTa: 'சங்கரன்கோவில் நகரில் மருத்துவமனை, வங்கி, சந்தை அல்லது உறவினர் வீடு செல்ல வேண்டுமா? 10 நிமிடத்தில் உங்கள் வீட்டு வாசலில் கார் நிற்கும்.',
        icon: '⚡',
        tag: 'Fast Response',
        tagTa: 'அதிவிரைவு'
      },
      {
        title: 'Madurai Airport (IXM) Drops',
        titleTa: 'மதுரை விமான நிலைய டிராப்',
        description: 'Specialized 24/7 transfers for early morning 2:00 AM / 4:00 AM flights from Sankarankovil to Madurai Airport (120 km) with flight-time tracking.',
        descriptionTa: 'அதிகாலை 2 மணி, 4 மணி விமானங்களுக்கு சங்கரன்கோவிலில் இருந்து மதுரை விமான நிலையத்திற்கு (120 கி.மீ) சரியான நேர டாக்ஸி சேவை.',
        icon: '✈️',
        tag: '24/7 Flight Transfer',
        tagTa: 'விமான டிராப்'
      },
      {
        title: 'One-Way Outstation Taxi',
        titleTa: 'ஒரு வழி வெளியூர் டாக்ஸி',
        description: 'Travel one-way to Tirunelveli, Tenkasi, Rajapalayam, Chennai, or Bangalore paying only for the distance traveled from ₹120 base fare.',
        descriptionTa: 'திருநெல்வேலி, தென்காசி, ராஜபாளையம், சென்னைக்கு ஒரு வழி பயணத்திற்கு மட்டும் குறைந்த கட்டணத்தில் டாக்ஸி சேவை.',
        icon: '🛣️',
        tag: 'Transparent Fare',
        tagTa: 'ஒரு வழி கட்டணம்'
      },
      {
        title: 'Family & Pilgrimage Tour Packages',
        titleTa: 'ஆன்மீக கோவில் சுற்றுலா பேக்கேஜ்',
        description: 'Comfortable day packages for Sankaranarayanar Temple, Tiruchendur Murugan Temple, Courtallam Falls, and Madurai Meenakshi Amman Temple.',
        descriptionTa: 'சங்கரன்கோவில், திருச்செந்தூர் முருகன் கோவில், குற்றால அருவி மற்றும் மதுரை மீனாட்சி அம்மன் கோவில் ஆன்மீக சுற்றுலா பேக்கேஜ்கள்.',
        icon: '🛕',
        tag: 'Pilgrimage Circuit',
        tagTa: 'கோவில் சுற்றுலா'
      }
    ],
    coverageAreas: [
      { name: 'Sankarankovil Town', nameTa: 'சங்கரன்கோவில் நகரம்' },
      { name: 'NGO Colony & MPM Complex', nameTa: 'NGO காலனி & MPM காம்ப்ளக்ஸ்' },
      { name: 'Kalappakulam', nameTa: 'களப்பாகுளம்' },
      { name: 'Karivalamvandhanallur', nameTa: 'கரிவலம்வந்தநல்லூர்' },
      { name: 'Thiruvenkadam', nameTa: 'திருவேங்கடம்' },
      { name: 'Melaneelithanallur', nameTa: 'மேலநீலிதநல்லூர்' },
      { name: 'Perumpanthur', nameTa: 'பெரும்பத்தூர்' },
      { name: 'Vannikonendal', nameTa: 'வன்னிக்கோனேந்தல்' }
    ],
    popularRoutes: [
      {
        destination: 'Madurai Airport (IXM)',
        destinationTa: 'மதுரை விமான நிலையம்',
        distanceKm: 120,
        duration: '2 hr 30 min',
        durationTa: '2 மணி 30 நிமிடம்',
        sedanDayFare: '₹3,396',
        suvDayFare: '₹4,392',
        highlights: 'via NH-744 / Thirumangalam bypass with flight tracking',
        highlightsTa: 'NH-744 வழியாக விரைவான புறவழிச்சாலை பயணம்'
      },
      {
        destination: 'Tenkasi / Courtallam',
        destinationTa: 'தென்காசி / குற்றாலம்',
        distanceKm: 34,
        duration: '50 min',
        durationTa: '50 நிமிடம்',
        sedanDayFare: '₹988',
        suvDayFare: '₹1,296',
        highlights: 'Direct state highway connecting temples and waterfalls',
        highlightsTa: 'நேரடி நெடுஞ்சாலை வழித்தடம்'
      },
      {
        destination: 'Tirunelveli Junction',
        destinationTa: 'திருநெல்வேலி சந்திப்பு',
        distanceKm: 56,
        duration: '1 hr 15 min',
        durationTa: '1 மணி 15 நிமிடம்',
        sedanDayFare: '₹1,604',
        suvDayFare: '₹2,088',
        highlights: 'via SH-41 / Gangaikondan connecting trains and hospitals',
        highlightsTa: 'SH-41 வழியாக மருத்துவமனை மற்றும் ரயில் இணைப்பு'
      },
      {
        destination: 'Rajapalayam',
        destinationTa: 'ராஜபாளையம்',
        distanceKm: 35,
        duration: '50 min',
        durationTa: '50 நிமிடம்',
        sedanDayFare: '₹1,016',
        suvDayFare: '₹1,332',
        highlights: 'Direct Rajapalayam Main Road corridor with smooth highway travel',
        highlightsTa: 'ராஜபாளையம் மெயின் ரோடு நேரடி வழித்தடம்'
      }
    ],
    faqs: [
      {
        question: 'How quickly can a cab arrive at my house in Sankarankovil?',
        questionTa: 'சங்கரன்கோவிலில் என் வீட்டிற்கு கார் எவ்வளவு நேரத்தில் வந்து சேரும்?',
        answer: 'Our cabs are stationed directly at our Sankarankovil headquarters on Rajapalayam Main Road. Average arrival time is 10 to 15 minutes anywhere within Sankarankovil town limits.',
        answerTa: 'எங்கள் கார்கள் ராஜபாளையம் மெயின் ரோட்டில் தயாராக உள்ளதால், சங்கரன்கோவில் நகருக்குள் 10 முதல் 15 நிமிடங்களில் வந்துவிடும்.'
      },
      {
        question: 'Do you provide early morning pickups for Madurai airport from Sankarankovil?',
        questionTa: 'சங்கரன்கோவிலில் இருந்து அதிகாலை மதுரை விமான நிலையத்திற்கு கார் கிடைக்குமா?',
        answer: 'Yes, we specialize in 24/7 punctual airport transfers. You can schedule your ride in advance on WhatsApp, and our driver will arrive 15 minutes before your scheduled departure time.',
        answerTa: 'ஆம், 24 மணி நேரமும் செயல்படுகிறது. வாட்ஸ்அப்பில் முன்கூட்டியே பதிவு செய்தால், உங்கள் நேரத்திற்கு 15 நிமிடத்திற்கு முன்பே ஓட்டுநர் வந்துவிடுவார்.'
      },
      {
        question: 'What are the Sedan taxi rates for local rides in Sankarankovil?',
        questionTa: 'சங்கரன்கோவிலில் செடான் டாக்ஸிக்கான கட்டணம் என்ன?',
        answer: 'For Sedans, the one-way base fare is ₹120 for the first 3 km. Subsequent distance is billed at ₹28/km during Day (7:00 AM – 7:00 PM) and ₹30/km at Night (7:00 PM – 7:00 AM).',
        answerTa: 'செடான் கார்களுக்கு முதல் 3 கி.மீ அடிப்படை கட்டணம் ₹120. அதன்பின் பகலில் ₹28/கி.மீ மற்றும் இரவில் ₹30/கி.மீ என்ற வெளிப்படையான கணக்கீட்டில் கட்டணம் வசூலிக்கப்படும்.'
      }
    ],
    meta: {
      title: 'Call Taxi in Sankarankovil | Rider Call Taxi #1 24/7 Cab Service',
      description: 'Book Rider Call Taxi in Sankarankovil. Headquartered at MPM Complex on Rajapalayam Main Road. 10-minute doorstep pickup, local temple trips, outstation drops & Madurai airport cabs. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/call-taxi-sankarankovil',
      keywords: 'Call Taxi in Sankarankovil, Sankarankovil cab service, taxi service Sankarankovil, Sankarankovil travels, சங்கரன்கோவில் கால் டாக்ஸி, Madurai airport drop Sankarankovil'
    }
  },

  'taxi-service-tenkasi': {
    slug: 'taxi-service-tenkasi',
    name: 'Tenkasi',
    nameTa: 'தென்காசி',
    title: 'Taxi Service in Tenkasi & Courtallam',
    subtitle: 'District-Wide Taxi Network & Gateway to Western Ghats',
    subtitleTa: 'தென்காசி மாவட்ட டாக்ஸி நெட்வொர்க் & குற்றால சுற்றுலா சேவை',
    badge: 'TENKASI DISTRICT TRAVEL NETWORK',
    badgeTa: 'தென்காசி மாவட்ட டாக்ஸி சேவை',
    heroH1: 'Reliable Taxi Service in',
    heroH1Highlight: 'Tenkasi',
    heroH1Ta: 'தென்காசியில் நம்பகமான',
    heroH1HighlightTa: 'டாக்ஸி சேவை & குற்றால சுற்றுலா',
    leadParagraph: 'Rider Call Taxi provides reliable, comfortable, and surge-free taxi services across Tenkasi, Courtallam, and surrounding taluks. Centrally coordinated from our regional headquarters in Sankarankovil, our commercial fleet offers rapid pickups at Tenkasi Junction, New Bus Stand, and Courtallam resorts.',
    leadParagraphTa: 'தென்காசி, குற்றாலம் மற்றும் சுற்றுவட்டார பகுதிகளுக்கு ரைடர் கால் டாக்ஸி நம்பகமான டாக்ஸி சேவையை வழங்குகிறது. எங்கள் சங்கரன்கோவில் தலைமை மையத்திலிருந்து ஒருங்கிணைக்கப்படும் கார்கள், தென்காசி ரயில் நிலையம், புதிய பேருந்து நிலையம் மற்றும் குற்றால ரிசார்ட்களில் உடனடி பிக்கப் வழங்குகின்றன.',
    isPhysicalHQ: false,
    stationInfo: 'Network cabs operate continuously throughout Tenkasi, Courtallam, and Shenkottai, centrally dispatched from our registered headquarters at MPM Complex, Rajapalayam Main Road, Sankarankovil (34 km away).',
    stationInfoTa: 'எங்கள் பதிவிறக்கம் செய்யப்பட்ட தலைமை அலுவலகமான சங்கரன்கோவிலில் இருந்து ஒருங்கிணைக்கப்பட்டு, தென்காசி மற்றும் குற்றாலம் முழுவதும் கார்கள் இயக்கப்படுகின்றன.',
    localLandmarks: [
      {
        name: 'Historic Kasi Viswanathar Temple & Flagstaff Gopuram',
        nameTa: 'அருள்மிகு காசி விசுவநாதசுவாமி திருக்கோவில்',
        desc: 'Dedicated transport for devotees visiting the sacred Ulagamman and Kasi Viswanathar shrines in the heart of Tenkasi.',
        descTa: 'தென்காசி நகரின் மையத்தில் உள்ள காசி விசுவநாதர் மற்றும் உலகம்மன் கோவில் தரிசனத்திற்கான பிரத்யேக டாக்ஸி சேவை.'
      },
      {
        name: 'Courtallam Waterfalls Resort & Spa Circuit',
        nameTa: 'குற்றால அருவிகள் & ஸ்பா சுற்றுலா பகுதி',
        desc: 'Full-day and half-day excursion cabs for Main Falls, Five Falls (Aintharuvi), Old Courtallam, and Tiger Falls.',
        descTa: 'பேரருவி, ஐந்தருவி, பழைய குற்றாலம் மற்றும் புலியருவிக்கு குடும்பத்துடன் சென்று குளித்து மகிழ நாள் முழுவதுமான சுற்றுலா பேக்கேஜ்.'
      },
      {
        name: 'Tenkasi Railway Junction & Shenkottai Ghat Entry',
        nameTa: 'தென்காசி ரயில் சந்திப்பு & செங்கோட்டை மலைப்பாதை',
        desc: 'Comfortable pickup for express train arrivals from Chennai, Kollam, and Madurai with luggage carriers.',
        descTa: 'சென்னை, கொல்லம் மற்றும் மதுரை ரயில்களில் வரும் பயணிகளுக்கு சரியான நேர பிக்கப் மற்றும் லக்கேஜ் வசதி.'
      }
    ],
    localServices: [
      {
        title: 'Courtallam Waterfalls Holiday Tour Packages',
        titleTa: 'குற்றால அருவி சுற்றுலா பேக்கேஜ்கள்',
        description: 'Explore all nine waterfalls of Courtallam comfortably in an air-conditioned Sedan or 7-seater SUV without waiting in auto queues.',
        descriptionTa: 'ஏசி செடான் அல்லது 7-சீட்டர் எர்டிகா காரில் குற்றாலத்தின் அனைத்து அருவிகளையும் குடும்பத்துடன் வசதியாக சுற்றிப்பார்க்கலாம்.',
        icon: '🌊',
        tag: 'Sightseeing Special',
        tagTa: 'சுற்றுலா சிறப்பு'
      },
      {
        title: 'Tenkasi Railway Junction Transfers',
        titleTa: 'தென்காசி ரயில் சந்திப்பு பிக்கப் & டிராப்',
        description: '24/7 transfers to and from Tenkasi Junction connecting to remote village estates, farms, and hill station homestays.',
        descriptionTa: 'தென்காசி ரயில் நிலையத்திலிருந்து கிராமங்கள், பண்ணை வீடுகள் மற்றும் தங்குமிடங்களுக்கு 24 மணி நேர கார் சேவை.',
        icon: '🚆',
        tag: 'Train Connectivity',
        tagTa: 'ரயில் இணைப்பு'
      },
      {
        title: 'Trivandrum Airport (TRV) Drops via Ghats',
        titleTa: 'திருவனந்தபுரம் ஏர்போர்ட் டிராப் (மலைப்பாதை வழி)',
        description: 'Experienced mountain drivers navigating the Aryankavu-Thenmala scenic pass safely to Trivandrum International Airport (110 km).',
        descriptionTa: 'ஆர்யங்காவு, தென்மலை வழியாக திருவனந்தபுரம் சர்வதேச விமான நிலையத்திற்கு (110 கி.மீ) அனுபவமிக்க ஓட்டுநர்களுடன் பாதுகாப்பான பயணம்.',
        icon: '🏔️',
        tag: 'Ghat Route Expert',
        tagTa: 'மலைப்பாதை ஓட்டுநர்'
      },
      {
        title: 'Intercity One-Way Cabs to Madurai & Tirunelveli',
        titleTa: 'மதுரை & திருநெல்வேலி ஒரு வழி டாக்ஸி',
        description: 'Drop taxis from Tenkasi to Madurai, Tirunelveli, Tuticorin, and Chennai with no return fare charges.',
        descriptionTa: 'தென்காசியில் இருந்து மதுரை, நெல்லை, தூத்துக்குடி மற்றும் சென்னைக்கு ஒரு வழி பயணத்திற்கு மட்டும் குறைந்த கட்டணம்.',
        icon: '🚗',
        tag: 'Zero Return Fare',
        tagTa: 'திரும்பும் கட்டணம் இல்லை'
      }
    ],
    coverageAreas: [
      { name: 'Tenkasi Town & New Bus Stand', nameTa: 'தென்காசி நகரம் & புதிய பேருந்து நிலையம்' },
      { name: 'Courtallam (Main Falls / Five Falls)', nameTa: 'குற்றாலம் (பேரருவி / ஐந்தருவி)' },
      { name: 'Shenkottai & Aryankavu Border', nameTa: 'செங்கோட்டை & ஆர்யங்காவு எல்லை' },
      { name: 'Ilanji & Melagaram', nameTa: 'இலஞ்சி & மேலகரம்' },
      { name: 'Surandai', nameTa: 'சுரண்டை' },
      { name: 'Pavoorchatram', nameTa: 'பாவூர்சத்திரம்' },
      { name: 'Kadayanallur', nameTa: 'கடையநல்லூர்' },
      { name: 'Alangulam', nameTa: 'ஆலங்குளம்' }
    ],
    popularRoutes: [
      {
        destination: 'Courtallam Waterfalls Circuit',
        destinationTa: 'குற்றால அருவி சுற்றுலா',
        distanceKm: 12,
        duration: '25 min',
        durationTa: '25 நிமிடம்',
        sedanDayFare: '₹372',
        suvDayFare: '₹504',
        highlights: 'Covers Main Falls, Five Falls, Old Falls, and Gundar Dam',
        highlightsTa: 'பேரருவி, ஐந்தருவி, குண்டாறு அணை சுற்றுலா'
      },
      {
        destination: 'Sankarankovil (HQ)',
        destinationTa: 'சங்கரன்கோவில் (தலைமையகம்)',
        distanceKm: 34,
        duration: '50 min',
        durationTa: '50 நிமிடம்',
        sedanDayFare: '₹988',
        suvDayFare: '₹1,296',
        highlights: 'via Surandai / direct highway connecting district hubs',
        highlightsTa: 'சுரண்டை வழியாக நேரடி நெடுஞ்சாலை பயணம்'
      },
      {
        destination: 'Tirunelveli Junction',
        destinationTa: 'திருநெல்வேலி சந்திப்பு',
        distanceKm: 53,
        duration: '1 hr 15 min',
        durationTa: '1 மணி 15 நிமிடம்',
        sedanDayFare: '₹1,520',
        suvDayFare: '₹1,980',
        highlights: 'via Alangulam (SH-39) with smooth 2-lane highway driving',
        highlightsTa: 'ஆலங்குளம் வழியாக சீரான நெடுஞ்சாலை வழித்தடம்'
      },
      {
        destination: 'Trivandrum Airport (TRV)',
        destinationTa: 'திருவனந்தபுரம் விமான நிலையம்',
        distanceKm: 110,
        duration: '3 hr 30 min',
        durationTa: '3 மணி 30 நிமிடம்',
        sedanDayFare: '₹3,116',
        suvDayFare: '₹4,032',
        highlights: 'via Shenkottai, Aryankavu, Punalur scenic Western Ghats route',
        highlightsTa: 'செங்கோட்டை, தென்மலை வழியாக இயற்கை எழில் கொஞ்சும் மலைப்பாதை'
      }
    ],
    faqs: [
      {
        question: 'Do you provide cabs for a full-day Courtallam waterfalls tour?',
        questionTa: 'குற்றால அருவிகளை சுற்றிப்பார்க்க நாள் முழுவதுமான கார் வாடகை கிடைக்குமா?',
        answer: 'Yes, we provide customizable round-trip day packages. You get an air-conditioned Sedan or 7-seater SUV with a patient local driver who knows the least crowded bathing spots and timings.',
        answerTa: 'ஆம், நாள் முழுவதுமான டூர் பேக்கேஜ்கள் உள்ளன. ஏசி செடான் அல்லது 7-சீட்டர் காரில் கூட்டம் குறைவான நேரங்களில் அருவிகளை சுற்றிப்பார்க்கலாம்.'
      },
      {
        question: 'Where is your physical office located?',
        questionTa: 'உங்கள் அலுவலகம் எங்கு அமைந்துள்ளது?',
        answer: 'Our registered headquarters and central dispatch facility is at 757A/7, First Floor, MPM Complex, NGO Colony, Rajapalayam Main Road, Sankarankovil (34 km from Tenkasi). We dispatch verified network vehicles stationed strategically across Tenkasi and Courtallam.',
        answerTa: 'எங்கள் தலைமையகம் சங்கரன்கோவில் ராஜபாளையம் மெயின் ரோட்டில் உள்ளது. தென்காசி மற்றும் குற்றாலத்தில் நிறுத்தப்பட்டுள்ள கார்கள் மூலம் விரைவான சேவை வழங்குகிறோம்.'
      },
      {
        question: 'Can I book a cab for Sabarimala pilgrimage from Tenkasi or Shenkottai?',
        questionTa: 'தென்காசியில் இருந்து சபரிமலை யாத்திரைக்கு கார் புக் செய்யலாமா?',
        answer: 'Yes, we provide 7-seater Ertiga and 9-seater Tavera MUVs with overhead luggage carriers, driven by experienced hill-road drivers for safe Sabarimala pilgrimages.',
        answerTa: 'ஆம், லக்கேஜ் கேரியர் பொருத்தப்பட்ட எர்டிகா மற்றும் டவேரா கார்களில் மலைப்பாதை அனுபவம் கொண்ட ஓட்டுநர்களுடன் சபரிமலை பயணம் செல்லலாம்.'
      }
    ],
    meta: {
      title: 'Taxi Service in Tenkasi | Reliable Cabs & Courtallam Tour Taxi',
      description: 'Reliable taxi service in Tenkasi by Rider Call Taxi. Fast cab dispatch for Tenkasi Junction, Courtallam waterfalls, Kasi Viswanathar temple & outstation drops. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/taxi-service-tenkasi',
      keywords: 'Taxi Service in Tenkasi, Tenkasi call taxi, Courtallam cab service, Courtallam tour taxi, Tenkasi to Madurai cab, தென்காசி கார் வாடகை, தென்காசி டாக்ஸி'
    }
  },

  'taxi-service-tirunelveli': {
    slug: 'taxi-service-tirunelveli',
    name: 'Tirunelveli',
    nameTa: 'திருநெல்வேலி',
    title: 'Taxi Service in Tirunelveli & Nellai Corridor',
    subtitle: 'Intercity Outstation Cabs & Healthcare Highway Transit',
    subtitleTa: 'திருநெல்வேலி வெளியூர் டாக்ஸி & மருத்துவமனை விரைவு பயணம்',
    badge: 'TIRUNELVELI INTERCITY CORRIDOR',
    badgeTa: 'திருநெல்வேலி மாவட்ட விரைவு சேவை',
    heroH1: 'Taxi Service in',
    heroH1Highlight: 'Tirunelveli',
    heroH1Ta: 'திருநெல்வேலியில் நம்பகமான',
    heroH1HighlightTa: 'டாக்ஸி சேவை & வெளியூர் பயணம்',
    leadParagraph: 'Rider Call Taxi connects Tirunelveli to Sankarankovil, Tenkasi, Tuticorin, and Madurai with punctual commercial cabs and transparent per-km billing. Coordinated from our regional hub, we specialize in Tirunelveli Junction railway pickups, hospital patient transfers, and outstation drops.',
    leadParagraphTa: 'திருநெல்வேலியை சங்கரன்கோவில், தென்காசி, தூத்துக்குடி மற்றும் மதுரையுடன் இணைக்கும் நம்பகமான டாக்ஸி சேவை. திருநெல்வேலி சந்திப்பு ரயில் நிலையம், மருத்துவ கல்லூரி மருத்துவமனை மற்றும் வெளியூர் பயணங்களுக்கு நியாயமான கட்டணத்தில் கார்கள் இயக்கப்படுகின்றன.',
    isPhysicalHQ: false,
    stationInfo: 'Regular commercial cabs operate continuously on the Tirunelveli-Sankarankovil-Tenkasi highway corridor, centrally coordinated from our Sankarankovil headquarters on Rajapalayam Main Road (56 km away).',
    stationInfoTa: 'திருநெல்வேலி-சங்கரன்கோவில்-தென்காசி நெடுஞ்சாலையில் கார்கள் தொடர்ச்சியாக இயக்கப்படுகின்றன. சங்கரன்கோவில் தலைமையகத்தில் இருந்து 24 மணி நேரமும் கண்காணிக்கப்படுகிறது.',
    localLandmarks: [
      {
        name: 'Arulmigu Nellaiappar & Kanthimathi Amman Temple',
        nameTa: 'அருள்மிகு நெல்லையப்பர் காந்திமதி அம்மன் திருக்கோவில்',
        desc: 'Comfortable family pickups for darshan, car festival (Therottam), and Navatirupathi pilgrimage circuit tours.',
        descTa: 'வரலாற்று சிறப்புமிக்க நெல்லையப்பர் கோவில் மற்றும் நவதிருப்பதி ஆன்மீக யாத்திரைக்கான குடும்ப டாக்ஸி சேவை.'
      },
      {
        name: 'Tirunelveli Railway Junction & Vande Bharat Express',
        nameTa: 'திருநெல்வேலி ரயில் சந்திப்பு & வந்தே பாரத் ரயில் நிலையம்',
        desc: 'Immediate platform-exit transfers for passengers arriving on early morning or late-night express trains.',
        descTa: 'வந்தே பாரத் மற்றும் நெல்லை எக்ஸ்பிரஸ் ரயில்களில் வரும் பயணிகளுக்கு ரயில் நிலைய வாசலிலேயே காத்திருக்கும் கார் சேவை.'
      },
      {
        name: 'Tirunelveli Medical College Hospital (TVMCH) & High Ground',
        nameTa: 'திருநெல்வேலி மருத்துவக் கல்லூரி மருத்துவமனை',
        desc: 'Gentle, sanitized, and punctual transport for patients and seniors visiting medical specialists in High Ground and Palayamkottai.',
        descTa: 'பாளையங்கோட்டை மற்றும் ஹைகிரவுண்ட் மருத்துவமனைகளுக்கு சிகிச்சைக்காக செல்லும் முதியவர்கள் மற்றும் நோயாளிகளுக்கான கனிவான சேவை.'
      }
    ],
    localServices: [
      {
        title: 'Tirunelveli to Sankarankovil & Tenkasi Shuttle Cabs',
        titleTa: 'திருநெல்வேலி - சங்கரன்கோவில் நேரடி டாக்ஸி',
        description: 'Frequent one-way and round-trip transfers along SH-41 / Gangaikondan for court visits, government work, and family functions.',
        descriptionTa: 'SH-41 வழியாக நீதிமன்றம், அரசு அலுவலகம் மற்றும் சுப நிகழ்ச்சிகளுக்கு சங்கரன்கோவிலுக்கு விரைவு டாக்ஸி.',
        icon: '🚘',
        tag: 'Corridor Transit',
        tagTa: 'நேரடி வழித்தடம்'
      },
      {
        title: 'Tuticorin Airport (TCR) Transfers (40 KM)',
        titleTa: 'தூத்துக்குடி விமான நிலைய டிராப் (40 கி.மீ)',
        description: 'Quick 45-minute transfers via the 4-lane NH-138 highway connecting Tirunelveli to Tuticorin Airport flights to Chennai and Bangalore.',
        descriptionTa: 'நான்கு வழிச்சாலை வழியாக வெறும் 45 நிமிடங்களில் திருநெல்வேலியில் இருந்து தூத்துக்குடி விமான நிலையத்தை சென்றடையலாம்.',
        icon: '✈️',
        tag: '45-Min Airport Run',
        tagTa: 'விரைவு ஏர்போர்ட்'
      },
      {
        title: 'Navatirupathi & Nava Kailasam Temple Tours',
        titleTa: 'நவதிருப்பதி & நவகயிலாயம் கோவில் சுற்றுலா',
        description: 'Customized multi-stop itineraries covering all 9 Vishnu temples or 9 Shiva temples across the Thamirabarani river basin.',
        descriptionTa: 'தாமிரபரணி ஆற்றங்கரையில் அமைந்துள்ள 9 விஷ்ணு அல்லது 9 சிவன் கோவில்களை தரிசிக்க ஒரு நாள் ஆன்மீக டூர் பேக்கேஜ்.',
        icon: '🏛️',
        tag: 'Sacred Circuit',
        tagTa: 'நவதிருப்பதி டூர்'
      },
      {
        title: 'One-Way Outstation Taxi to Chennai & Bangalore',
        titleTa: 'சென்னை, பெங்களூரு ஒரு வழி டாக்ஸி',
        description: 'Long-distance highway travel in high-safety Tata Altroz, Swift Dzire, or Ertiga with experienced dual-driver support.',
        descriptionTa: 'சென்னை மற்றும் பெங்களூருக்கு நெடுஞ்சாலை அனுபவம் கொண்ட ஓட்டுநர்களுடன் பாதுகாப்பான நீண்ட தூர ஒரு வழி பயணம்.',
        icon: '🛣️',
        tag: 'Long Distance Cabs',
        tagTa: 'நீண்ட தூர பயணம்'
      }
    ],
    coverageAreas: [
      { name: 'Tirunelveli Junction & Town', nameTa: 'திருநெல்வேலி சந்திப்பு & நகரம்' },
      { name: 'Palayamkottai', nameTa: 'பாளையங்கோட்டை' },
      { name: 'Vannarpettai', nameTa: 'வண்ணாரப்பேட்டை' },
      { name: 'High Ground & Medical College', nameTa: 'ஹைகிரவுண்ட் & மருத்துவக் கல்லூரி' },
      { name: 'Thachanallur', nameTa: 'தச்சநல்லூர்' },
      { name: 'Gangaikondan SEZ', nameTa: 'கங்கைகொண்டான் சிப்காட்' },
      { name: 'Pettai & Melapalayam', nameTa: 'பேட்டை & மேலப்பாளையம்' },
      { name: 'Kayathar & Kalugumalai', nameTa: 'கயத்தாறு & கழுகுமலை' }
    ],
    popularRoutes: [
      {
        destination: 'Sankarankovil (HQ)',
        destinationTa: 'சங்கரன்கோவில் (தலைமையகம்)',
        distanceKm: 56,
        duration: '1 hr 15 min',
        durationTa: '1 மணி 15 நிமிடம்',
        sedanDayFare: '₹1,604',
        suvDayFare: '₹2,088',
        highlights: 'via Gangaikondan / SH-41 direct route connecting temple towns',
        highlightsTa: 'கங்கைகொண்டான் வழியாக நேரடி மாநில நெடுஞ்சாலை'
      },
      {
        destination: 'Tuticorin Airport (TCR)',
        destinationTa: 'தூத்துக்குடி விமான நிலையம்',
        distanceKm: 40,
        duration: '45 min',
        durationTa: '45 நிமிடம்',
        sedanDayFare: '₹1,156',
        suvDayFare: '₹1,512',
        highlights: 'via 4-lane NH-138 with minimal traffic delays',
        highlightsTa: 'NH-138 நான்கு வழிச்சாலை வழியாக விரைவான பயணம்'
      },
      {
        destination: 'Tenkasi / Courtallam',
        destinationTa: 'தென்காசி / குற்றாலம்',
        distanceKm: 53,
        duration: '1 hr 15 min',
        durationTa: '1 மணி 15 நிமிடம்',
        sedanDayFare: '₹1,520',
        suvDayFare: '₹1,980',
        highlights: 'via Alangulam (SH-39) passing paddy fields and groves',
        highlightsTa: 'ஆலங்குளம் வழியாக ரம்மியமான வழித்தடம்'
      },
      {
        destination: 'Tiruchendur Murugan Temple',
        destinationTa: 'திருச்செந்தூர் முருகன் கோவில்',
        distanceKm: 60,
        duration: '1 hr 20 min',
        durationTa: '1 மணி 20 நிமிடம்',
        sedanDayFare: '₹1,716',
        suvDayFare: '₹2,232',
        highlights: 'Direct coastal highway connection for seaside darshan',
        highlightsTa: 'கடற்கரை கோவில் தரிசனத்திற்கான நேரடி நெடுஞ்சாலை'
      }
    ],
    faqs: [
      {
        question: 'How do I book a cab from Tirunelveli Railway Junction to Sankarankovil?',
        questionTa: 'திருநெல்வேலி ரயில் நிலையத்தில் இருந்து சங்கரன்கோவிலுக்கு கார் எப்படி புக் செய்வது?',
        answer: 'You can call our 24/7 hotline (+91 9363015586) or send a WhatsApp message with your train name and arrival time. Our driver will be parked near the junction portico before your train arrives.',
        answerTa: 'எங்கள் 24/7 எண் (+91 9363015586) அல்லது வாட்ஸ்அப்பில் உங்கள் ரயில் விவரங்களை அனுப்பினால், ரயில் வரும் முன்பே ஓட்டுநர் ரயில் நிலைய வாசலில் தயாராக இருப்பார்.'
      },
      {
        question: 'Do you charge return fare for one-way drops between Tirunelveli and Sankarankovil?',
        questionTa: 'திருநெல்வேலி - சங்கரன்கோவில் ஒரு வழி பயணத்திற்கு இரு வழி கட்டணம் வசூலிக்கப்படுமா?',
        answer: 'No, absolutely not. For one-way drops you only pay the one-way slab tariff: ₹120 base fare for the first 3 km, then ₹28/km during Day and ₹30/km at Night. Tolls are paid at actuals.',
        answerTa: 'இல்லை, ஒரு வழி பயணத்திற்கு மட்டும் கட்டணம் செலுத்தினால் போதுமானது. முதல் 3 கி.மீ-க்கு ₹120, அதன்பின் பகலில் ₹28/கி.மீ மற்றும் இரவில் ₹30/கி.மீ மட்டுமே.'
      },
      {
        question: 'Where is your primary business location?',
        questionTa: 'உங்கள் முதன்மை அலுவலகம் எங்கு உள்ளது?',
        answer: 'Our main office is at 757A/7, MPM Complex, Rajapalayam Main Road, Sankarankovil – 627756. We coordinate intercity transit connecting Tirunelveli and Tenkasi districts from this centralized facility.',
        answerTa: 'எங்கள் முதன்மை அலுவலகம் சங்கரன்கோவில் ராஜபாளையம் மெயின் ரோட்டில் உள்ளது. அங்கிருந்து திருநெல்வேலி மற்றும் தென்காசி மாவட்டங்களுக்கான வாகனங்கள் ஒருங்கிணைக்கப்படுகின்றன.'
      }
    ],
    meta: {
      title: 'Taxi Service in Tirunelveli | Outstation Drop Taxi & Local Cabs',
      description: 'Prompt taxi service connecting Tirunelveli, Sankarankovil & South Tamil Nadu. Verified drivers for Tirunelveli Junction, Medical College, Nellaippar Temple & airport drops. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/taxi-service-tirunelveli',
      keywords: 'Taxi Service in Tirunelveli, Tirunelveli call taxi, Tirunelveli to Sankarankovil cab, Nellai taxi service, Tirunelveli outstation drop taxi, திருநெல்வேலி டாக்ஸி'
    }
  }
};
