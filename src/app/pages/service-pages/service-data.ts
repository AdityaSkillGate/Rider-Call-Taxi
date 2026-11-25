export interface ServiceVehicleOption {
  name: string;
  nameTa: string;
  category: string;
  capacity: string;
  capacityTa: string;
  luggage: string;
  baseFareText: string;
  baseFareTextTa: string;
  perKmRateText: string;
  perKmRateTextTa: string;
  idealFor: string;
  idealForTa: string;
}

export interface ServiceBenefit {
  icon: string;
  title: string;
  titleTa: string;
  description: string;
  descriptionTa: string;
}

export interface ServiceRouteEstimate {
  route: string;
  routeTa: string;
  distanceKm: number;
  duration: string;
  sedanFare: string;
  suvFare: string;
}

export interface ServiceDetailData {
  slug: string;
  name: string;
  nameTa: string;
  heroBadge: string;
  heroBadgeTa: string;
  heroH1: string;
  heroH1Highlight: string;
  heroH1Ta: string;
  heroH1HighlightTa: string;
  overviewLead: string;
  overviewLeadTa: string;
  serviceOverview: string;
  serviceOverviewTa: string;
  benefits: ServiceBenefit[];
  vehicles: ServiceVehicleOption[];
  popularRoutes: ServiceRouteEstimate[];
  bookingSteps: { step: number; title: string; titleTa: string; desc: string; descTa: string }[];
  faqs: { question: string; questionTa: string; answer: string; answerTa: string }[];
  meta: {
    title: string;
    description: string;
    canonical: string;
    keywords: string;
  };
}

export const SERVICES_DATA: Record<string, ServiceDetailData> = {
  'local-taxi-service': {
    slug: 'local-taxi-service',
    name: 'Local Taxi Service',
    nameTa: 'உள்ளூர் டாக்ஸி சேவை',
    heroBadge: '10-MINUTE DOORSTEP PICKUP • SANKARANKOVIL',
    heroBadgeTa: '10 நிமிட உடனடி பிக்கப் • சங்கரன்கோவில்',
    heroH1: 'Local Taxi Service in',
    heroH1Highlight: 'Sankarankovil & Nearby Towns',
    heroH1Ta: 'சங்கரன்கோவிலில் நம்பகமான',
    heroH1HighlightTa: 'உள்ளூர் டாக்ஸி சேவை',
    overviewLead: 'Fast, dependable local cab pickups across Sankarankovil town, NGO Colony, Kalappakulam, Karivalam, and railway stations starting from ₹120 base fare.',
    overviewLeadTa: 'சங்கரன்கோவில் நகரம், NGO காலனி, களப்பாகுளம், கரிவலம் மற்றும் ரயில் நிலையங்களுக்கு ₹120 ஆரம்ப கட்டணத்தில் 10 நிமிட உடனடி கார் சேவை.',
    serviceOverview: 'Need an urgent cab for hospital visits, temple darshan at Sankaranarayanar Temple, shopping errands, or catching an early morning train? Rider Call Taxi provides prompt, 24/7 doorstep taxi dispatch. Our verified drivers arrive within 10 to 15 minutes across all residential wards and rural streets surrounding Sankarankovil.',
    serviceOverviewTa: 'மருத்துவமனை செல்ல, சங்கரநாராயண சுவாமி கோவில் தரிசனம், கடைத்தெரு பொருட்கள் வாங்க அல்லது அதிகாலை ரயில் பிடிக்க காரில் செல்ல வேண்டுமா? ரைடர் கால் டாக்ஸி 24 மணி நேரமும் 10-15 நிமிடங்களில் உங்கள் இருப்பிடத்திற்கு வந்து சேரும்.',
    benefits: [
      {
        icon: '⚡',
        title: '10 to 15 Minute Rapid Arrival',
        titleTa: '10-15 நிமிட உடனடி பிக்கப்',
        description: 'Vehicles continuously stationed on Rajapalayam Main Road for zero waiting anxiety.',
        descriptionTa: 'ராஜபாளையம் மெயின் ரோட்டில் கார்கள் தயாராக இருப்பதால் காத்திருக்க தேவையில்லை.'
      },
      {
        icon: '💰',
        title: '₹120 Base Fare for First 3 KM',
        titleTa: 'முதல் 3 கி.மீ-க்கு ₹120 அடிப்படை',
        description: 'Transparent slab pricing with clear metre calculation and zero peak-hour surge.',
        descriptionTa: 'மறைமுக கட்டணங்கள் மற்றும் கூடுதல் சர்ஜ் கட்டணங்கள் இன்றி தெளிவான கணக்கீடு.'
      },
      {
        icon: '🛡️',
        title: 'Police-Verified Chauffeurs',
        titleTa: 'சரிபார்க்கப்பட்ட ஓட்டுநர்கள்',
        description: 'Polite local drivers trained in senior-citizen care and family travel safety.',
        descriptionTa: 'முதியவர்கள் மற்றும் குடும்பத்தினர் பாதுகாப்பாக பயணிக்க கனிவான ஓட்டுநர்கள்.'
      },
      {
        icon: '❄️',
        title: '100% Air-Conditioned Sanitized Cabs',
        titleTa: 'முழுமையான ஏசி & தூய்மை',
        description: 'Clean interiors sanitized thoroughly before every trip across town.',
        descriptionTa: 'ஒவ்வொரு பயணத்திற்கு முன்பும் கிருமி நீக்கம் செய்யப்பட்ட சுத்தமான ஏசி கார்கள்.'
      }
    ],
    vehicles: [
      {
        name: 'Tata Altroz Premium (Hatchback)',
        nameTa: 'டாடா அல்ட்ராஸ் (ஹேட்ச்பேக்)',
        category: 'Hatchback',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '2 Suitcases (345L)',
        baseFareText: '₹120 (First 3 KM)',
        baseFareTextTa: '₹120 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹28 / Night ₹30 per KM',
        perKmRateTextTa: 'பகல் ₹28 / இரவு ₹30 / கி.மீ',
        idealFor: 'Local errands, grocery trips & quick hospital visits',
        idealForTa: 'உள்ளூர் பணிகள் மற்றும் அவசர மருத்துவமனை பயணம்'
      },
      {
        name: 'Maruti Suzuki Dzire Tour (Sedan)',
        nameTa: 'மாருதி டிசையர் டூர் (செடான்)',
        category: 'Sedan',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '3 Large Bags + Overhead Rack',
        baseFareText: '₹120 (First 3 KM)',
        baseFareTextTa: '₹120 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹28 / Night ₹30 per KM',
        perKmRateTextTa: 'பகல் ₹28 / இரவு ₹30 / கி.மீ',
        idealFor: 'Family temple visits & railway station transfers',
        idealForTa: 'குடும்ப கோவில் தரிசனம் மற்றும் ரயில் நிலைய டிராப்'
      }
    ],
    popularRoutes: [
      { route: 'Sankarankovil Town to Sankaranarayanar Temple', routeTa: 'நகரத்திலிருந்து சங்கரநாராயணர் கோவில்', distanceKm: 3, duration: '8 min', sedanFare: '₹120', suvFare: '₹180' },
      { route: 'Sankarankovil to Railway Station / Bus Stand', routeTa: 'ரயில் நிலையம் / பேருந்து நிலையம்', distanceKm: 4, duration: '10 min', sedanFare: '₹148', suvFare: '₹216' },
      { route: 'Sankarankovil to Kalappakulam', routeTa: 'களப்பாகுளம்', distanceKm: 6, duration: '12 min', sedanFare: '₹204', suvFare: '₹288' },
      { route: 'Sankarankovil to Karivalamvandhanallur', routeTa: 'கரிவலம்வந்தநல்லூர்', distanceKm: 12, duration: '20 min', sedanFare: '₹372', suvFare: '₹504' }
    ],
    bookingSteps: [
      { step: 1, title: 'Call or WhatsApp', titleTa: 'அழைக்க அல்லது வாட்ஸ்அப்', desc: 'Call +91 9363015586 or send your doorstep pickup landmark on WhatsApp.', descTa: 'எங்கள் எண்ணை அழைக்கவும் அல்லது வாட்ஸ்அப்பில் முகவரியை அனுப்பவும்.' },
      { step: 2, title: 'Instant Driver Assignment', titleTa: 'உடனடி கார் உறுதி', desc: 'Our Sankarankovil desk confirms your driver phone and cab number in 60 seconds.', descTa: '60 வினாடிகளில் ஓட்டுநர் எண் மற்றும் கார் எண் உறுதி செய்யப்படும்.' },
      { step: 3, title: 'Doorstep Pickup & Ride', titleTa: 'வீட்டு வாசலில் பிக்கப்', desc: 'Step into a chilled AC car and pay upon trip completion with Cash or UPI.', descTa: 'குளிர்ந்த ஏசி காரில் ஏறி, பயணம் முடிந்த பின் ரொக்கம் அல்லது UPI மூலம் செலுத்தலாம்.' }
    ],
    faqs: [
      {
        question: 'What is the minimum fare for a local taxi in Sankarankovil?',
        questionTa: 'சங்கரன்கோவிலில் உள்ளூர் டாக்ஸிக்கான குறைந்தபட்ச கட்டணம் என்ன?',
        answer: 'The minimum base fare is ₹120 for Sedans covering up to the first 3 km. For SUVs, the base fare is ₹180 for the first 3 km.',
        answerTa: 'செடான் கார்களுக்கு முதல் 3 கி.மீ-க்கு குறைந்தபட்ச கட்டணம் ₹120. எஸ்யூவி கார்களுக்கு ₹180.'
      },
      {
        question: 'How fast can a cab reach my house in Sankarankovil?',
        questionTa: 'என் வீட்டிற்கு கார் எவ்வளவு நேரத்தில் வரும்?',
        answer: 'Cabs are stationed at MPM Complex on Rajapalayam Main Road and arrive at any address within Sankarankovil in 10 to 15 minutes.',
        answerTa: 'ராஜபாளையம் மெயின் ரோட்டில் கார்கள் இருப்பதால், 10 முதல் 15 நிமிடங்களில் வந்து சேரும்.'
      },
      {
        question: 'Do you charge extra for waiting during shopping or temple darshan?',
        questionTa: 'ஷாப்பிங் அல்லது கோவில் தரிசனத்தின் போது காத்திருப்பு கட்டணம் உண்டா?',
        answer: 'For round-trip local bookings, day waiting charge is only ₹80 per hour for Sedans and ₹100 per hour for SUVs.',
        answerTa: 'இரு வழி பயணங்களுக்கு பகல் காத்திருப்பு கட்டணம் செடானுக்கு மணிக்கு ₹80, எஸ்யூவிக்கு ₹100 மட்டுமே.'
      }
    ],
    meta: {
      title: 'Local Taxi Service in Sankarankovil | 10-Min Doorstep Cabs',
      description: 'Book local taxi in Sankarankovil from ₹120 base fare. 10-minute doorstep pickup for temple visits, hospitals, railway stations & local errands. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/local-taxi-service',
      keywords: 'Local Taxi Service Sankarankovil, Sankarankovil local cab, doorstep taxi Sankarankovil, call taxi Sankarankovil local, சங்கரன்கோவில் உள்ளூர் டாக்ஸி'
    }
  },

  'outstation-taxi': {
    slug: 'outstation-taxi',
    name: 'Outstation Taxi Service',
    nameTa: 'வெளியூர் டாக்ஸி சேவை',
    heroBadge: 'INTERCITY HIGHWAY TRAVEL • ALL TAMIL NADU',
    heroBadgeTa: 'அனைத்து தமிழ்நாடு நகரங்களுக்கும் வெளியூர் டாக்ஸி',
    heroH1: 'Outstation Taxi Service from',
    heroH1Highlight: 'Sankarankovil & Tenkasi District',
    heroH1Ta: 'சங்கரன்கோவிலில் இருந்து நம்பகமான',
    heroH1HighlightTa: 'வெளியூர் டாக்ஸி சேவை',
    overviewLead: 'Comfortable, safe, and punctual intercity cabs connecting Sankarankovil and Tenkasi to Madurai, Tirunelveli, Chennai, Coimbatore, and Kerala destinations.',
    overviewLeadTa: 'சங்கரன்கோவிலில் இருந்து மதுரை, நெல்லை, சென்னை, கோவை மற்றும் கேரளா நகரங்களுக்கு பாதுகாப்பான, சௌகரியமான நெடுஞ்சாலை கார் சேவை.',
    serviceOverview: 'Planning a long-distance road journey across Tamil Nadu, Kerala, or Karnataka? Rider Call Taxi provides top-rated outstation cabs with high-safety vehicles (5-star NCAP rated), polite highway chauffeurs, and transparent slab billing with zero surge. Travel stress-free on multi-day holidays, family events, or corporate intercity trips.',
    serviceOverviewTa: 'தமிழ்நாடு மற்றும் அண்டை மாநிலங்களுக்கு நீண்ட தூர பயணம் திட்டமிடுகிறீர்களா? ரைடர் கால் டாக்ஸி 5-ஸ்டார் பாதுகாப்பு கார்கள், அனுபவமிக்க நெடுஞ்சாலை ஓட்டுநர்கள் மற்றும் நேர்மையான கட்டணத்துடன் சிறந்த சேவையை வழங்குகிறது.',
    benefits: [
      {
        icon: '🛣️',
        title: 'Experienced Highway Chauffeurs',
        titleTa: 'நெடுஞ்சாலை அனுபவமிக்க ஓட்டுநர்கள்',
        description: 'Trained for night driving, ghat passes, toll navigation, and safe cruising speeds.',
        descriptionTa: 'இரவு நேர பயணம் மற்றும் மலைப்பாதைகளில் சீரான வேகத்தில் இயக்கும் திறமையான ஓட்டுநர்கள்.'
      },
      {
        icon: '🛡️',
        title: '5-Star Safety Rated Vehicles',
        titleTa: '5-நட்சத்திர பாதுகாப்பு கார்கள்',
        description: 'Modern Tata Altroz, Swift Dzire, and Ertiga MUVs with dual airbags and ABS.',
        descriptionTa: 'ஏர்பேக், ஏபிஎஸ் பிரேக்கிங் வசதி கொண்ட நவீன குடும்ப வாகனங்கள்.'
      },
      {
        icon: '⏱️',
        title: '24/7 Departure Flexibility',
        titleTa: '24/7 எந்த நேரத்திலும் புறப்பாடு',
        description: 'Start early at 2:00 AM or late midnight with advance WhatsApp confirmation.',
        descriptionTa: 'அதிகாலை 2 மணி அல்லது நள்ளிரவிலும் உங்கள் வசதிக்கேற்ப திட்டமிடலாம்.'
      },
      {
        icon: '🧾',
        title: 'Accurate Metre & Toll Transparency',
        titleTa: 'வெளிப்படையான ரசீது & சுங்கக்கட்டணம்',
        description: 'No hidden driver bhatta surprises; Fastag tolls billed strictly at actual receipts.',
        descriptionTa: 'மறைமுக ஓட்டுநர் படி கட்டணங்கள் இல்லை; பாஸ்டேக் ரசீது மட்டுமே வசூலிக்கப்படும்.'
      }
    ],
    vehicles: [
      {
        name: 'Maruti Suzuki Dzire Tour (Sedan)',
        nameTa: 'மாருதி டிசையர் டூர் (செடான்)',
        category: 'Sedan',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '3 Big Bags + Roof Carrier',
        baseFareText: '₹120 (First 3 KM)',
        baseFareTextTa: '₹120 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹28 / Night ₹30 per KM',
        perKmRateTextTa: 'பகல் ₹28 / இரவு ₹30 / கி.மீ',
        idealFor: 'Small families, hospital visits & intercity business',
        idealForTa: 'சிறிய குடும்பங்கள் மற்றும் வெளியூர் அலுவலக பயணம்'
      },
      {
        name: 'Maruti Suzuki Ertiga Smart Hybrid (SUV)',
        nameTa: 'மாருதி எர்டிகா ஹைபிரிட் (7-சீட்டர்)',
        category: 'SUV / MUV',
        capacity: '6 Passengers + 1 Driver',
        capacityTa: '6 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '4 Large Bags + Overhead Carrier',
        baseFareText: '₹180 (First 3 KM)',
        baseFareTextTa: '₹180 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹36 / Night ₹38 per KM',
        perKmRateTextTa: 'பகல் ₹36 / இரவு ₹38 / கி.மீ',
        idealFor: 'Large families, temple circuits & vacation luggage',
        idealForTa: 'பெரிய குடும்பங்கள் மற்றும் ஆன்மீக சுற்றுலா'
      }
    ],
    popularRoutes: [
      { route: 'Sankarankovil to Madurai (City / Airport)', routeTa: 'சங்கரன்கோவில் - மதுரை', distanceKm: 120, duration: '2 hr 30 min', sedanFare: '₹3,396', suvFare: '₹4,392' },
      { route: 'Sankarankovil to Tirunelveli Junction', routeTa: 'சங்கரன்கோவில் - நெல்லை', distanceKm: 56, duration: '1 hr 15 min', sedanFare: '₹1,604', suvFare: '₹2,088' },
      { route: 'Sankarankovil to Tenkasi & Courtallam', routeTa: 'சங்கரன்கோவில் - குற்றாலம்', distanceKm: 34, duration: '50 min', sedanFare: '₹988', suvFare: '₹1,296' },
      { route: 'Sankarankovil to Chennai (One-Way)', routeTa: 'சங்கரன்கோவில் - சென்னை', distanceKm: 590, duration: '9 hr 30 min', sedanFare: '₹16,556', suvFare: '₹21,312' }
    ],
    bookingSteps: [
      { step: 1, title: 'Share Your Itinerary', titleTa: 'பயண விவரங்களை பகிரவும்', desc: 'Tell us your pickup address, destination, travel date, and number of passengers on WhatsApp.', descTa: 'புறப்படும் இடம், சேரும் இடம் மற்றும் தேதியை வாட்ஸ்அப்பில் தெரிவிக்கவும்.' },
      { step: 2, title: 'Get Transparent Quote', titleTa: 'நேர்மையான கட்டண விவரம்', desc: 'Receive instant per-km pricing with slab rules and vehicle model selection.', descTa: 'சரியான கட்டணம் மற்றும் வாகன விவரங்களை உடனே பெறுங்கள்.' },
      { step: 3, title: 'Travel in Comfort', titleTa: 'மகிழ்ச்சியான பயணம்', desc: 'Your commercial yellow-plate taxi arrives on schedule with a refreshed AC cabin.', descTa: 'குறிப்பிட்ட நேரத்தில் உங்கள் வாசலில் கார் நிற்கும்; நிம்மதியாக பயணிக்கலாம்.' }
    ],
    faqs: [
      {
        question: 'Do you provide outstation cabs round the clock?',
        questionTa: '24 மணி நேரமும் வெளியூர் டாக்ஸி கிடைக்குமா?',
        answer: 'Yes, our 24/7 driver control desk operates continuously. We arrange early morning 3:00 AM pickups or late night departures seamlessly.',
        answerTa: 'ஆம், 24 மணி நேரமும் செயல்படுகிறது. அதிகாலை 3 மணி அல்லது நள்ளிரவிலும் வசதியாக பயணிக்கலாம்.'
      },
      {
        question: 'How are toll gate fees handled on outstation trips?',
        questionTa: 'சுங்கச்சாவடி கட்டணங்கள் எவ்வாறு வசூலிக்கப்படும்?',
        answer: 'All our vehicles have active Fastags. Toll fees are paid strictly according to actual government toll plaza receipts shown directly to the passenger.',
        answerTa: 'அனைத்து கார்களிலும் பாஸ்டேக் உள்ளது. ரசீது படி மட்டுமே சுங்கக்கட்டணம் வசூலிக்கப்படும்.'
      },
      {
        question: 'Can I stop for breakfast or coffee on outstation highway trips?',
        questionTa: 'வழியில் உணவு அல்லது டீ சாப்பிட நிறுத்தலாமா?',
        answer: 'Yes, of course! Our drivers gladly stop at family-friendly, hygienic highway motels upon your request.',
        answerTa: 'தாராளமாக நிறுத்தலாம்! நல்ல தரமான குடும்ப உணவகங்களில் ஓட்டுநர் வண்டியை நிறுத்துவார்.'
      }
    ],
    meta: {
      title: 'Outstation Taxi Service in Sankarankovil | Intercity Cabs',
      description: 'Book reliable outstation taxi from Sankarankovil to Madurai, Tirunelveli, Tenkasi & Chennai. 5-star safety cabs, verified chauffeurs & zero surge. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/outstation-taxi',
      keywords: 'Outstation Taxi Service Sankarankovil, Sankarankovil outstation cab, outstation travels Tenkasi, intercity taxi Sankarankovil, சங்கரன்கோவில் வெளியூர் டாக்ஸி'
    }
  },

  'one-way-taxi': {
    slug: 'one-way-taxi',
    name: 'One-Way Drop Taxi',
    nameTa: 'ஒரு வழி டிராப் டாக்ஸி',
    heroBadge: 'PAY ONLY FOR THE KM TRAVELED • NO RETURN FARE',
    heroBadgeTa: 'சென்ற தூரத்திற்கு மட்டும் கட்டணம் • திரும்பும் கட்டணம் இல்லை',
    heroH1: 'One-Way Drop Taxi from',
    heroH1Highlight: 'Sankarankovil, Tenkasi & Tirunelveli',
    heroH1Ta: 'தென் தமிழகத்தில் நம்பகமான',
    heroH1HighlightTa: 'ஒரு வழி டிராப் டாக்ஸி சேவை',
    overviewLead: 'Save money by paying only for one-way distance with zero round-trip return penalties. Transparent slab rates starting from ₹120 base fare.',
    overviewLeadTa: 'திரும்பும் கட்டணம் இன்றி சென்ற தூரத்திற்கு மட்டும் செலுத்தி பணத்தை மிச்சப்படுத்துங்கள். ₹120 அடிப்படை கட்டணத்தில் தொடங்கும் ஒரு வழி கார் சேவை.',
    serviceOverview: 'Why pay double for an outstation drop when you are not returning? Rider Call Taxi operates dedicated one-way drop cabs from Sankarankovil, Tenkasi, and Tirunelveli to Madurai, Tuticorin, Coimbatore, Bangalore, and Chennai. You are billed strictly for the forward journey distance without being forced to pay return driver allowances or return km charges.',
    serviceOverviewTa: 'நீங்கள் திரும்பி வராத போது எதற்கு இரு மடங்கு கட்டணம் செலுத்த வேண்டும்? ரைடர் கால் டாக்ஸி ஒரு வழி டிராப் சேவையில் திரும்பும் கட்டணம் எதுவும் இன்றி, நீங்கள் செல்லும் தூரத்திற்கு மட்டும் குறைந்த கட்டணத்தில் பயணிக்கலாம்.',
    benefits: [
      {
        icon: '💵',
        title: 'Up to 40% Cost Savings',
        titleTa: '40% வரை பண மிச்சம்',
        description: 'Pay solely for the km between pickup and drop points; no return km billing.',
        descriptionTa: 'புறப்படும் இடத்திலிருந்து சேரும் இடம் வரை சென்ற தூரத்திற்கு மட்டுமே கட்டணம்.'
      },
      {
        icon: '🚪',
        title: 'Direct Door-to-Door Service',
        titleTa: 'வீட்டு வாசல் வரை நேரடி சேவை',
        description: 'No lugging heavy baggage to bus stands; pickup from home and drop at destination gate.',
        descriptionTa: 'பேருந்து நிலையம் செல்ல தேவையின்றி உங்கள் வீட்டு வாசலிலிருந்து சேரும் இடம் வரை.'
      },
      {
        icon: '🛡️',
        title: 'Commercial Yellow-Plate Fleet',
        titleTa: 'அரசு வணிக மஞ்சள் பலகை',
        description: 'Legally permitted commercial vehicles with valid passenger permits across state borders.',
        descriptionTa: 'அரசு அனுமதி பெற்ற மஞ்சள் பலகை கார்களில் பாதுகாப்பான மாநில எல்லை பயணம்.'
      },
      {
        icon: '⚡',
        title: 'Instant WhatsApp Booking',
        titleTa: 'வாட்ஸ்அப் உடனடி முன்பதிவு',
        description: 'Get guaranteed cab confirmation in minutes with clear route distance breakdown.',
        descriptionTa: 'சில நிமிடங்களில் கட்டண விவரத்துடன் வாட்ஸ்அப்பில் கார் உறுதி செய்யப்படும்.'
      }
    ],
    vehicles: [
      {
        name: 'Tata Altroz / Toyota Glanza (Sedan/Hatch)',
        nameTa: 'டாடா அல்ட்ராஸ் / டொயோட்டா கிளான்சா',
        category: 'Sedan / Hatch',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '2-3 Suitcases',
        baseFareText: '₹120 (First 3 KM)',
        baseFareTextTa: '₹120 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹28 / Night ₹30 per KM',
        perKmRateTextTa: 'பகல் ₹28 / இரவு ₹30 / கி.மீ',
        idealFor: '1-4 passengers seeking economical one-way intercity drops',
        idealForTa: 'குறைந்த கட்டணத்தில் வெளியூர் செல்லும் 1-4 பயணிகள்'
      },
      {
        name: 'Chevrolet Tavera / Ertiga (7-9 Seater MUV)',
        nameTa: 'டவேரா / எர்டிகா (7-9 சீட்டர்)',
        category: 'SUV / MUV',
        capacity: '6-8 Passengers + 1 Driver',
        capacityTa: '6-8 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '4-6 Bags + Roof Carrier',
        baseFareText: '₹180 (First 3 KM)',
        baseFareTextTa: '₹180 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹36 / Night ₹38 per KM',
        perKmRateTextTa: 'பகல் ₹36 / இரவு ₹38 / கி.மீ',
        idealFor: 'Family relocation, wedding guests, and group drops',
        idealForTa: 'குடும்ப இடமாற்றம், திருமண உறவினர்கள் பயணம்'
      }
    ],
    popularRoutes: [
      { route: 'Sankarankovil to Madurai Drop', routeTa: 'சங்கரன்கோவில் - மதுரை டிராப்', distanceKm: 120, duration: '2 hr 30 min', sedanFare: '₹3,396', suvFare: '₹4,392' },
      { route: 'Sankarankovil to Tirunelveli Drop', routeTa: 'சங்கரன்கோவில் - நெல்லை டிராப்', distanceKm: 56, duration: '1 hr 15 min', sedanFare: '₹1,604', suvFare: '₹2,088' },
      { route: 'Sankarankovil to Tenkasi Drop', routeTa: 'சங்கரன்கோவில் - தென்காசி டிராப்', distanceKm: 34, duration: '50 min', sedanFare: '₹988', suvFare: '₹1,296' },
      { route: 'Sankarankovil to Coimbatore Drop', routeTa: 'சங்கரன்கோவில் - கோவை டிராப்', distanceKm: 310, duration: '6 hr 00 min', sedanFare: '₹8,716', suvFare: '₹11,232' }
    ],
    bookingSteps: [
      { step: 1, title: 'Send Pickup & Drop City', titleTa: 'புறப்படும் & சேரும் இடம்', desc: 'Message us on WhatsApp with pickup street in Sankarankovil and destination address.', descTa: 'புறப்படும் முகவரி மற்றும் சேரும் இடத்தை வாட்ஸ்அப்பில் அனுப்பவும்.' },
      { step: 2, title: 'Review Exact Km Estimate', titleTa: 'கட்டணத்தை சரிபார்க்கவும்', desc: 'We compute distance and share fixed fare according to official day/night per-km slabs.', descTa: 'சரியான தூரம் மற்றும் பகல்/இரவு கட்டண விவரம் அனுப்பப்படும்.' },
      { step: 3, title: 'Chauffeur Arrives at Doorstep', titleTa: 'வாசலில் கார் பிக்கப்', desc: 'Hop in, enjoy a comfortable drive, and settle payment at drop-off location.', descTa: 'செளகரியமாக பயணித்து, சேரும் இடத்தில் பணம் செலுத்தலாம்.' }
    ],
    faqs: [
      {
        question: 'Are one-way drop taxis cheaper than round-trip bookings?',
        questionTa: 'இரு வழி பயணத்தை விட ஒரு வழி டாக்ஸி விலை குறைவா?',
        answer: 'Yes! If you only need to travel in one direction, our one-way drop pricing saves you 30% to 40% because you do not pay for the car\'s return trip to Sankarankovil.',
        answerTa: 'ஆம்! நீங்கள் திரும்பி வர தேவையில்லை என்றால், 30% முதல் 40% வரை பணம் மிச்சமாகும்.'
      },
      {
        question: 'Are there any night driving penalties on one-way trips?',
        questionTa: 'இரவு நேர பயணத்திற்கு கூடுதல் கட்டணம் உண்டா?',
        answer: 'We follow our transparent tariff rules: Night rate (7:00 PM – 7:00 AM) is simply ₹30/km for Sedans and ₹38/km for SUVs, with zero artificial surge multipliers.',
        answerTa: 'இரவு நேரத்திற்கு (இரவு 7 - காலை 7) செடானுக்கு ₹30/கி.மீ, எஸ்யூவிக்கு ₹38/கி.மீ மட்டுமே.'
      },
      {
        question: 'Can I book a one-way drop from Sankarankovil to Chennai?',
        questionTa: 'சங்கரன்கோவிலில் இருந்து சென்னைக்கு ஒரு வழி டிராப் கிடைக்குமா?',
        answer: 'Yes, we regularly dispatch long-distance one-way cabs to Chennai, Bangalore, and Coimbatore with experienced dual-driver capability.',
        answerTa: 'ஆம், சென்னை, பெங்களூரு போன்ற நகரங்களுக்கு தொடர்ந்து ஒரு வழி கார்கள் இயக்கப்படுகின்றன.'
      }
    ],
    meta: {
      title: 'One-Way Drop Taxi Sankarankovil | Low Outstation Cab Fares',
      description: 'Book one-way drop taxi in Sankarankovil with zero return fare. Transparent slab rates from ₹120 base fare. Madurai, Tirunelveli, Chennai. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/one-way-taxi',
      keywords: 'One Way Drop Taxi Sankarankovil, Sankarankovil one way cab, drop taxi Tenkasi, one way taxi Tirunelveli, ஒரு வழி டிராப் டாக்ஸி'
    }
  },

  'round-trip-taxi': {
    slug: 'round-trip-taxi',
    name: 'Round-Trip Taxi Service',
    nameTa: 'இரு வழி டாக்ஸி சேவை',
    heroBadge: 'AFFORDABLE 20 KM PACKAGES • MULTI-DAY FLEXIBILITY',
    heroBadgeTa: '20 கி.மீ பேக்கேஜ் • குடும்ப சுற்றுலா & சுப நிகழ்ச்சி',
    heroH1: 'Round-Trip Taxi Service from',
    heroH1Highlight: 'Sankarankovil & Tenkasi District',
    heroH1Ta: 'சங்கரன்கோவிலில் இருந்து நம்பகமான',
    heroH1HighlightTa: 'இரு வழி ரவுண்ட் ட்ரிப் டாக்ஸி',
    overviewLead: 'Economical same-day and multi-day round-trip packages starting with 20 km base allowance from ₹450 (Day) / ₹530 (Night).',
    overviewLeadTa: 'முதல் 20 கி.மீ-க்கு ₹450 (பகல்) / ₹530 (இரவு) கட்டணத்தில் தொடங்கும் சிக்கனமான இரு வழி டூர் பேக்கேஜ் சேவை.',
    serviceOverview: 'Visiting relatives, attending weddings, or going on family weekend tours where you need the car to stay with you and bring you back? Our round-trip taxi service offers the lowest per-km rates (Sedan: ₹15/km Day / ₹17/km Night after 20 km) with patient chauffeurs and minimal hourly waiting charges.',
    serviceOverviewTa: 'சுப நிகழ்ச்சிகள், கோவில் திருவிழாக்கள் அல்லது குடும்ப சுற்றுலா சென்றுவிட்டு அன்றே திரும்ப வேண்டுமா? எங்கள் இரு வழி டாக்ஸி சேவையில் குறைந்த கி.மீ கட்டணத்தில் (செடான் பகல் ₹15/கி.மீ) கார் உங்களுடனே தங்கி மீண்டும் பாதுகாப்பாக அழைத்து வரும்.',
    benefits: [
      {
        icon: '🏷️',
        title: 'Lowest Per-KM Rate (₹15/KM for Sedan)',
        titleTa: 'குறைந்த கி.மீ கட்டணம் (செடான் ₹15/கி.மீ)',
        description: 'Once past the 20 km base package, enjoy our most economical distance billing.',
        descriptionTa: 'முதல் 20 கி.மீ-க்கு பின் மிக குறைந்த கி.மீ கட்டணத்தில் பயணிக்கலாம்.'
      },
      {
        icon: '⏳',
        title: 'Minimal Waiting Charge (₹80/Hour)',
        titleTa: 'குறைந்த காத்திருப்பு கட்டணம் (₹80/மணி)',
        description: 'Spend as much time as needed at temples, functions, or doctor consultations.',
        descriptionTa: 'கோவிலில் தரிசனம் அல்லது மருத்துவமனை பார்க்க காரை தாராளமாக காத்திருக்க வைக்கலாம்.'
      },
      {
        icon: '🧳',
        title: 'Keep Luggage Secure in Car',
        titleTa: 'பொருட்கள் காரிலேயே பாதுகாப்பாக இருக்கும்',
        description: 'Leave personal items, purchases, and bags safely in the locked trunk.',
        descriptionTa: 'உங்கள் உடைமைகள் காரிலேயே பாதுகாப்பாக பூட்டி வைக்கப்படும்.'
      },
      {
        icon: '👨‍✈️',
        title: 'Dedicated Chauffeur Throughout',
        titleTa: 'பயணம் முழுவதும் உங்களுடன் ஓட்டுநர்',
        description: 'The same polite driver stays on standby until you return back home.',
        descriptionTa: 'ஊர் திரும்பும் வரை அதே பண்பான ஓட்டுநர் உங்களுடனே இருப்பார்.'
      }
    ],
    vehicles: [
      {
        name: 'Toyota Glanza / Dzire Tour (Sedan)',
        nameTa: 'டொயோட்டா கிளான்சா / டிசையர் (செடான்)',
        category: 'Sedan',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '3 Suitcases',
        baseFareText: 'Day ₹450 / Night ₹530 (20 KM Package)',
        baseFareTextTa: 'பகல் ₹450 / இரவு ₹530 (20 கி.மீ)',
        perKmRateText: 'Day ₹15 / Night ₹17 per KM (after 20 km)',
        perKmRateTextTa: 'பகல் ₹15 / இரவு ₹17 / கி.மீ (20 கி.மீ மேல்)',
        idealFor: 'Same-day wedding visits, hospital checkups & temple darshan',
        idealForTa: 'சுப நிகழ்ச்சிகள், மருத்துவமனை மற்றும் கோவில் தரிசனம்'
      },
      {
        name: 'Maruti Suzuki Ertiga 7-Seater (SUV)',
        nameTa: 'மாருதி எர்டிகா 7-சீட்டர் (எஸ்யூவி)',
        category: 'SUV / MUV',
        capacity: '6 Passengers + 1 Driver',
        capacityTa: '6 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '4 Bags + Roof Rack',
        baseFareText: 'Day ₹600 / Night ₹680 (20 KM Package)',
        baseFareTextTa: 'பகல் ₹600 / இரவு ₹680 (20 கி.மீ)',
        perKmRateText: 'Day ₹19 / Night ₹21 per KM (after 20 km)',
        perKmRateTextTa: 'பகல் ₹19 / இரவு ₹21 / கி.மீ (20 கி.மீ மேல்)',
        idealFor: 'Full family pilgrimages, Courtallam tours & shopping trips',
        idealForTa: 'முழு குடும்ப சுற்றுலா மற்றும் குற்றால அருவி பயணம்'
      }
    ],
    popularRoutes: [
      { route: 'Sankarankovil to Tenkasi / Courtallam & Return', routeTa: 'சங்கரன்கோவில் - குற்றாலம் - சங்கரன்கோவில்', distanceKm: 70, duration: 'Round Trip Day', sedanFare: '₹1,200 + waiting', suvFare: '₹1,550 + waiting' },
      { route: 'Sankarankovil to Tirunelveli & Return', routeTa: 'சங்கரன்கோவில் - நெல்லை - சங்கரன்கோவில்', distanceKm: 112, duration: 'Round Trip Day', sedanFare: '₹1,830 + waiting', suvFare: '₹2,348 + waiting' },
      { route: 'Sankarankovil to Tiruchendur Murugan Temple & Return', routeTa: 'சங்கரன்கோவில் - திருச்செந்தூர் - சங்கரன்கோவில்', distanceKm: 230, duration: 'Full Day Circuit', sedanFare: '₹3,600 + waiting', suvFare: '₹4,590 + waiting' },
      { route: 'Sankarankovil to Madurai & Return', routeTa: 'சங்கரன்கோவில் - மதுரை - சங்கரன்கோவில்', distanceKm: 240, duration: 'Full Day Circuit', sedanFare: '₹3,750 + waiting', suvFare: '₹4,780 + waiting' }
    ],
    bookingSteps: [
      { step: 1, title: 'Book Return Trip on WhatsApp', titleTa: 'வாட்ஸ்அப்பில் முன்பதிவு', desc: 'Provide date, pickup location, stops required, and return timing.', descTa: 'தேதி, புறப்படும் இடம் மற்றும் திரும்பும் நேரத்தை தெரிவிக்கவும்.' },
      { step: 2, title: 'Vehicle Arrives on Schedule', titleTa: 'குறிப்பிட்ட நேரத்தில் கார் வருகை', desc: 'Clean sanitized cab picks you up with luggage space ready.', descTa: 'சுத்தமான ஏசி கார் உங்கள் வாசலில் வந்து நிற்கும்.' },
      { step: 3, title: 'Return Safely Back Home', titleTa: 'பாதுகாப்பாக வீடு திரும்புதல்', desc: 'Driver stays on standby throughout your trip and drops you back at your doorstep.', descTa: 'பயணம் முடிந்து உங்கள் வீட்டு வாசல் வரை ஓட்டுநர் பத்திரமாக கொண்டு விடுவார்.' }
    ],
    faqs: [
      {
        question: 'How does the 20 km round-trip package work?',
        questionTa: '20 கி.மீ இரு வழி பேக்கேஜ் எவ்வாறு கணக்கிடப்படுகிறது?',
        answer: 'For Sedans, the first 20 km is covered by the ₹450 base fare during Day. Any distance beyond 20 km is billed at only ₹15/km, making it very economical for long trips.',
        answerTa: 'செடானுக்கு முதல் 20 கி.மீ பேக்கேஜ் கட்டணம் ₹450 (பகல்). 20 கி.மீ-க்கு மேல் வெறும் ₹15/கி.மீ மட்டுமே வசூலிக்கப்படும்.'
      },
      {
        question: 'Can the driver stay overnight on a 2-day trip?',
        questionTa: '2 நாள் பயணத்தின் போது ஓட்டுநர் தங்குவாரா?',
        answer: 'Yes! For multi-day round-trips (e.g., Kanyakumari, Rameswaram, Ooty), we arrange night stay allowances transparently with no hidden fees.',
        answerTa: 'ஆம், கன்னியாகுமரி, ராமேஸ்வரம் போன்ற பல நாள் பயணங்களுக்கு வெளிப்படையான கட்டணத்தில் தங்கும் வசதி செய்யப்படுகிறது.'
      },
      {
        question: 'Can we take multiple stops along the way?',
        questionTa: 'வழியில் பல இடங்களில் நின்று செல்லலாமா?',
        answer: 'Yes, round-trip bookings give you complete freedom to visit intermediate temples, relatives, and restaurants.',
        answerTa: 'தாராளமாக செல்லலாம்! உங்கள் விருப்பப்படி கோவில்கள் மற்றும் உறவினர் வீடுகளில் நின்று செல்லலாம்.'
      }
    ],
    meta: {
      title: 'Round-Trip Taxi Service Sankarankovil | Outstation Return Cabs',
      description: 'Book round-trip taxi from Sankarankovil. Economical 20 KM package from ₹450 (Day) and ₹15/km per-km rate. Clean AC cabs & verified drivers. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/round-trip-taxi',
      keywords: 'Round Trip Taxi Sankarankovil, return cab Tenkasi, round trip outstation taxi Sankarankovil, 20 km taxi package, இரு வழி டாக்ஸி'
    }
  },

  'airport-transfer': {
    slug: 'airport-transfer',
    name: 'Airport Transfer Service',
    nameTa: 'விமான நிலைய டாக்ஸி சேவை',
    heroBadge: 'PUNCTUAL 24/7 AIRPORT DROPS & PICKUPS',
    heroBadgeTa: '24/7 நேர தவறாமை • மதுரை, தூத்துக்குடி, திருவனந்தபுரம் ஏர்போர்ட்',
    heroH1: '24/7 Airport Taxi Service from',
    heroH1Highlight: 'Sankarankovil, Tenkasi & Tirunelveli',
    heroH1Ta: 'தென் தமிழகத்தில் நம்பகமான',
    heroH1HighlightTa: 'விமான நிலைய டாக்ஸி சேவை',
    overviewLead: 'Punctual, stress-free transfers connecting Sankarankovil and Tenkasi District to Madurai Airport (IXM), Tuticorin Airport (TCR), and Trivandrum Airport (TRV).',
    overviewLeadTa: 'சங்கரன்கோவில் மற்றும் தென்காசி மாவட்டத்திலிருந்து மதுரை (IXM), தூத்துக்குடி (TCR), திருவனந்தபுரம் (TRV) விமான நிலையங்களுக்கு குறித்த நேர கார் சேவை.',
    serviceOverview: 'Catching an early morning domestic or international flight? Missing a flight is never an option. Rider Call Taxi specializes in 24/7 airport transfers with verified chauffeurs who arrive 15 minutes before your scheduled departure time, track live flight status, and navigate highway bypasses safely.',
    serviceOverviewTa: 'அதிகாலை விமானம் பிடிக்க வேண்டுமா? ஒரு நிமிடம் கூட தாமதிக்காமல் சரியான நேரத்தில் விமான நிலையத்தை சென்றடைய ரைடர் கால் டாக்ஸி 24 மணி நேரமும் தயார் நிலையில் உள்ளது. உங்கள் விமான நேரத்தை கண்காணித்து, முன்கூட்டியே வீட்டு வாசல் வந்து சேரும் அனுபவமிக்க ஓட்டுநர்கள்.',
    benefits: [
      {
        icon: '✈️',
        title: 'Guaranteed On-Time Departure',
        titleTa: 'நேர தவறாமை உத்தரவாதம்',
        description: 'Chauffeur arrives at your doorstep 15 minutes prior to scheduled departure.',
        descriptionTa: 'நீங்கள் குறிப்பிட்ட நேரத்திற்கு 15 நிமிடத்திற்கு முன்பே ஓட்டுநர் வீட்டு வாசலில் இருப்பார்.'
      },
      {
        icon: '🛄',
        title: 'Spacious Luggage Trunks & Carriers',
        titleTa: 'தாராளமான லக்கேஜ் வசதி',
        description: 'Overhead roof carriers and cavernous boot space for international luggage.',
        descriptionTa: 'வெளிநாட்டு பயணங்களுக்கான பெரிய சூட்கேஸ்களை வைக்க பெரிய டிக்கி மற்றும் கேரியர்.'
      },
      {
        icon: '🌙',
        title: 'Specialized 2:00 AM / 3:00 AM Night Runs',
        titleTa: 'அதிகாலை 2 மணி, 3 மணி நேரடி பயணம்',
        description: 'Dedicated night-shift chauffeurs accustomed to safe, alert dark highway travel.',
        descriptionTa: 'நள்ளிரவு மற்றும் அதிகாலை பயணங்களை விழிப்புடன் இயக்கும் சிறப்பு ஓட்டுநர்கள்.'
      },
      {
        icon: '📲',
        title: 'Live Flight Monitoring',
        titleTa: 'விமான நேர நேரடி கண்காணிப்பு',
        description: 'For airport pickups, we track your inbound flight number for zero waiting charges.',
        descriptionTa: 'விமானம் தாமதமானாலும் கூடுதல் கட்டணம் இன்றி வருகை நேரத்தில் காத்திருக்கும் சேவை.'
      }
    ],
    vehicles: [
      {
        name: 'Maruti Suzuki Dzire Tour (Overhead Carrier)',
        nameTa: 'மாருதி டிசையர் டூர் (கேரியர் வசதியுடன்)',
        category: 'Sedan',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '3 Large Trolleys + Overhead Carrier',
        baseFareText: '₹120 (First 3 KM)',
        baseFareTextTa: '₹120 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹28 / Night ₹30 per KM',
        perKmRateTextTa: 'பகல் ₹28 / இரவு ₹30 / கி.மீ',
        idealFor: 'Small families flying to Chennai, Delhi, or abroad',
        idealForTa: 'உள்நாட்டு மற்றும் வெளிநாட்டு விமான பயணம் செல்லும் குடும்பங்கள்'
      },
      {
        name: 'Maruti Suzuki Ertiga 7-Seater (Smart Hybrid)',
        nameTa: 'மாருதி எர்டிகா 7-சீட்டர் (எஸ்யூவி)',
        category: 'SUV / MUV',
        capacity: '6 Passengers + 1 Driver',
        capacityTa: '6 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '4-6 Large International Baggage',
        baseFareText: '₹180 (First 3 KM)',
        baseFareTextTa: '₹180 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹36 / Night ₹38 per KM',
        perKmRateTextTa: 'பகல் ₹36 / இரவு ₹38 / கி.மீ',
        idealFor: 'Large NRI families, heavy bags & multi-passenger transit',
        idealForTa: 'அதிக லக்கேஜ் கொண்ட வெளிநாட்டு வாழ் தமிழ் குடும்பங்கள்'
      }
    ],
    popularRoutes: [
      { route: 'Sankarankovil to Madurai Airport (IXM)', routeTa: 'சங்கரன்கோவில் - மதுரை விமான நிலையம்', distanceKm: 120, duration: '2 hr 30 min', sedanFare: '₹3,396', suvFare: '₹4,392' },
      { route: 'Tenkasi to Madurai Airport (IXM)', routeTa: 'தென்காசி - மதுரை விமான நிலையம்', distanceKm: 155, duration: '3 hr 15 min', sedanFare: '₹4,376', suvFare: '₹5,652' },
      { route: 'Tirunelveli to Tuticorin Airport (TCR)', routeTa: 'திருநெல்வேலி - தூத்துக்குடி விமான நிலையம்', distanceKm: 40, duration: '45 min', sedanFare: '₹1,156', suvFare: '₹1,512' },
      { route: 'Tenkasi to Trivandrum Airport (TRV)', routeTa: 'தென்காசி - திருவனந்தபுரம் விமான நிலையம்', distanceKm: 110, duration: '3 hr 30 min', sedanFare: '₹3,116', suvFare: '₹4,032' }
    ],
    bookingSteps: [
      { step: 1, title: 'Share Flight Details', titleTa: 'விமான விவரங்களை பகிரவும்', desc: 'Provide departure/arrival time, flight number, and pickup address on WhatsApp.', descTa: 'விமான எண், நேரம் மற்றும் பிக்கப் முகவரியை வாட்ஸ்அப்பில் பகிரவும்.' },
      { step: 2, title: 'Punctual Doorstep Arrival', titleTa: 'சரியான நேரத்தில் கார் வருகை', desc: 'Driver arrives 15 minutes before departure and assists with luggage loading.', descTa: '15 நிமிடத்திற்கு முன்பே ஓட்டுநர் வந்து லக்கேஜ்களை ஏற்றி தயார் செய்வார்.' },
      { step: 3, title: 'Smooth Drop at Terminal Portico', titleTa: 'டெர்மினல் வாசலில் டிராப்', desc: 'Reach the airport departure gate comfortably with plenty of check-in time.', descTa: 'விமான புறப்பாடு முனைய வாசலில் நிம்மதியாக இறங்கி செல்லலாம்.' }
    ],
    faqs: [
      {
        question: 'How early should I book an airport taxi from Sankarankovil?',
        questionTa: 'விமான நிலைய டாக்ஸியை எவ்வளவு நேரத்திற்கு முன் புக் செய்ய வேண்டும்?',
        answer: 'We recommend booking 6 to 12 hours in advance so our night operations team reserves and cleans your vehicle, though urgent bookings are accepted 24/7.',
        answerTa: 'பயண நேரத்திற்கு 6 முதல் 12 மணி நேரம் முன்பு புக் செய்வது சிறந்தது; எனினும் அவசர பிக்கப்பும் 24 மணி நேரமும் கிடைக்கும்.'
      },
      {
        question: 'Will the driver wait if my flight into Madurai is delayed?',
        questionTa: 'மதுரை வரும் விமானம் தாமதமானால் ஓட்டுநர் காத்திருப்பாரா?',
        answer: 'Yes! We monitor flight arrivals live. We adjust pickup times automatically without penalizing you for airline delays.',
        answerTa: 'ஆம்! விமான நேரத்தை நேரலையாக கண்காணிப்பதால், தாமதமானாலும் கார் உங்களுக்காக காத்திருக்கும்.'
      },
      {
        question: 'Which airports do you provide transfers for?',
        questionTa: 'எந்தெந்த விமான நிலையங்களுக்கு டாக்ஸி வசதி உள்ளது?',
        answer: 'We regularly serve Madurai Airport (IXM, 120 km), Tuticorin Airport (TCR, 85 km from Sankarankovil), and Trivandrum International Airport (TRV, 145 km via Tenkasi).',
        answerTa: 'மதுரை (120 கி.மீ), தூத்துக்குடி (85 கி.மீ) மற்றும் திருவனந்தபுரம் (145 கி.மீ) விமான நிலையங்களுக்கு தினசரி சேவைகள் உள்ளன.'
      }
    ],
    meta: {
      title: 'Airport Taxi from Sankarankovil | Madurai & Tuticorin Airport Cabs',
      description: 'Punctual 24/7 airport taxi from Sankarankovil & Tenkasi to Madurai Airport (120 km) & Tuticorin Airport. Chilled AC cabs & luggage carriers. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/airport-transfer',
      keywords: 'Airport Taxi Sankarankovil, Madurai airport drop Sankarankovil, Tenkasi to Madurai airport cab, Tuticorin airport taxi, விமான நிலைய டாக்ஸி'
    }
  },

  'car-rental': {
    slug: 'car-rental',
    name: 'Car Rental with Driver',
    nameTa: 'வாடகை கார் (ஓட்டுநருடன்)',
    heroBadge: 'COMMERCIAL YELLOW-PLATE CARS • DEDICATED CHAUFFEUR',
    heroBadgeTa: 'அனுபவமிக்க ஓட்டுநருடன் வணிக சொகுசு கார் வாடகை',
    heroH1: 'Car Rental with Driver in',
    heroH1Highlight: 'Sankarankovil & Tenkasi',
    heroH1Ta: 'சங்கரன்கோவிலில் நம்பகமான',
    heroH1HighlightTa: 'வாடகை கார் சேவை (ஓட்டுநருடன்)',
    overviewLead: 'Hire sanitized, government-licensed commercial cars with professional chauffeurs for flexible hourly, daily, and multi-day travel.',
    overviewLeadTa: 'மணிநேர, நாள் முழுவதுமான அல்லது பல நாள் பயணங்களுக்கு அனுபவமிக்க ஓட்டுநருடன் கூடிய சுத்தமான வணிக கார்கள்.',
    serviceOverview: 'Need an exclusive vehicle at your disposal for local temple circuits, business inspections, VIP visits, or family shopping? Rider Call Taxi offers chauffeur-driven car rentals across Sankarankovil, Tenkasi, and Tirunelveli. Enjoy the convenience of a private car without self-driving fatigue or navigation hassles.',
    serviceOverviewTa: 'சொந்தமாக வண்டி ஓட்டும் சிரமமின்றி, உங்களுக்கே பிரத்யேகமாக ஒரு கார் மற்றும் அனுபவமிக்க ஓட்டுநர் தேவையா? குடும்ப சுப நிகழ்ச்சிகள், தொழில்முறை ஆய்வுகள் மற்றும் கோவில் பயணங்களுக்கு ரைடர் கால் டாக்ஸி வாடகை கார்கள் மிகச்சிறந்த தேர்வு.',
    benefits: [
      {
        icon: '🚗',
        title: 'Zero Self-Driving Fatigue',
        titleTa: 'சுய ஓட்டுநர் சோர்வு இல்லை',
        description: 'Sit back and relax while our polite, route-expert driver handles traffic and parking.',
        descriptionTa: 'நெரிசல் மற்றும் பார்க்கிங் கவலையின்றி குடும்பத்துடன் அமைதியாக பயணிக்கலாம்.'
      },
      {
        icon: '🛡️',
        title: '100% Legal Commercial Yellow Plates',
        titleTa: 'அரசு அங்கீகாரம் பெற்ற மஞ்சள் பலகை',
        description: 'Comprehensive commercial insurance and RTO tourist passenger permits.',
        descriptionTa: 'முறையான சுற்றுலா அனுமதி மற்றும் காப்பீடு பெற்ற வணிக வாகனங்கள்.'
      },
      {
        icon: '🧼',
        title: 'Showroom Cleanliness & Hygiene',
        titleTa: 'உயர்தர தூய்மை & சுகாதாரம்',
        description: 'Deep-cleaned seat upholstery, functioning seatbelts, and fresh climate control.',
        descriptionTa: 'சுத்தமான இருக்கைகள் மற்றும் சிறந்த குளிர்சாதன வசதி கொண்ட கார்கள்.'
      },
      {
        icon: '⏱️',
        title: 'Flexible Hourly & Daily Rental Packages',
        titleTa: 'நெகிழ்வான வாடகை பேக்கேஜ்கள்',
        description: 'Choose 4-hour, 8-hour, or customized multi-day packages with clear km slabs.',
        descriptionTa: '4 மணி நேரம், 8 மணி நேரம் அல்லது பல நாள் பயணங்களுக்கான சிறப்பு பேக்கேஜ்.'
      }
    ],
    vehicles: [
      {
        name: 'Tata Altroz / Swift Dzire (Sedan/Hatch)',
        nameTa: 'டாடா அல்ட்ராஸ் / ஸ்விஃப்ட் டிசையர்',
        category: 'Sedan',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '3 Suitcases',
        baseFareText: '₹450 (First 20 KM Package)',
        baseFareTextTa: '₹450 (முதல் 20 கி.மீ பேக்கேஜ்)',
        perKmRateText: '₹15 / KM + ₹80/hr waiting',
        perKmRateTextTa: '₹15 / கி.மீ + ₹80/மணி காத்திருப்பு',
        idealFor: 'City business meetings, doctor consultations & family shopping',
        idealForTa: 'அலுவலக சந்திப்புகள் மற்றும் குடும்ப ஷாப்பிங்'
      },
      {
        name: 'Chevrolet Tavera Neo 3 (9-Seater MUV)',
        nameTa: 'செவர்லே டவேரா நியோ 3 (9-சீட்டர்)',
        category: 'MUV',
        capacity: '8-9 Passengers + 1 Driver',
        capacityTa: '8-9 பயணிகள் + 1 ஓட்டுநர்',
        luggage: 'Full Overhead Carrier + Rear Space',
        baseFareText: '₹600 (First 20 KM Package)',
        baseFareTextTa: '₹600 (முதல் 20 கி.மீ பேக்கேஜ்)',
        perKmRateText: '₹19 / KM + ₹100/hr waiting',
        perKmRateTextTa: '₹19 / கி.மீ + ₹100/மணி காத்திருப்பு',
        idealFor: 'Large joint families, ghat roads & village pilgrimages',
        idealForTa: 'கூட்டுக் குடும்பங்கள் மற்றும் கிராம கோவில் சுற்றுலா'
      }
    ],
    popularRoutes: [
      { route: 'Sankarankovil Local 4-Hour Package', routeTa: 'சங்கரன்கோவில் 4 மணி நேர பேக்கேஜ்', distanceKm: 40, duration: '4 Hours', sedanFare: '₹750 + tolls', suvFare: '₹980 + tolls' },
      { route: 'Sankarankovil to Tenkasi Full-Day Rental', routeTa: 'தென்காசி நாள் முழுவதுமான வாடகை', distanceKm: 80, duration: '8 Hours', sedanFare: '₹1,350 + waiting', suvFare: '₹1,740 + waiting' },
      { route: 'Tirunelveli District Medical & Court Day Rental', routeTa: 'நெல்லை மருத்துவமனை & நீதிமன்ற வாடகை', distanceKm: 120, duration: '10 Hours', sedanFare: '₹1,950 + waiting', suvFare: '₹2,500 + waiting' },
      { route: 'Courtallam Season 1-Day Sightseeing Rental', routeTa: 'குற்றால சீசன் 1 நாள் சுற்றுலா வாடகை', distanceKm: 90, duration: '8 Hours', sedanFare: '₹1,500 + waiting', suvFare: '₹1,930 + waiting' }
    ],
    bookingSteps: [
      { step: 1, title: 'Specify Rental Duration', titleTa: 'வாடகை நேரத்தை குறிப்பிடவும்', desc: 'Tell us how many hours or days you require the vehicle and your travel itinerary.', descTa: 'எத்தனை மணி நேரம் அல்லது எத்தனை நாட்கள் கார் தேவை என்பதை கூறவும்.' },
      { step: 2, title: 'Select Vehicle Category', titleTa: 'வாகனத்தை தேர்வு செய்யவும்', desc: 'Choose a compact Sedan, luxury Glanza, or 7-9 seater Ertiga/Tavera MUV.', descTa: 'செடான் அல்லது 7-9 சீட்டர் பெரிய காரை தேர்வு செய்யவும்.' },
      { step: 3, title: 'Dedicated Chauffeur at Your Service', titleTa: 'உங்கள் சேவையில் ஓட்டுநர்', desc: 'Driver reports at your doorstep punctually and remains with you until completion.', descTa: 'குறிப்பிட்ட நேரத்தில் ஓட்டுநர் வந்து நாள் முழுவதும் உங்களுடனே இருப்பார்.' }
    ],
    faqs: [
      {
        question: 'Do you provide self-drive cars without a driver?',
        questionTa: 'ஓட்டுநர் இன்றி சுயமாக ஓட்டும் கார் வாடகைக்கு உண்டா?',
        answer: 'No, we exclusively provide chauffeur-driven commercial yellow-plate cars. This guarantees passenger safety, zero vehicle liability, and stress-free travel.',
        answerTa: 'இல்லை, அனுபவமிக்க ஓட்டுநருடன் மட்டுமே கார்கள் வாடகைக்கு வழங்கப்படுகின்றன.'
      },
      {
        question: 'Are fuel and driver charges included in the fare?',
        questionTa: 'எரிபொருள் மற்றும் ஓட்டுநர் கட்டணம் இதில் அடங்குமா?',
        answer: 'Yes! All per-km and package fares include vehicle hire, fuel costs, and driver allowance. Only actual Fastag tolls and parking receipts are paid separately.',
        answerTa: 'ஆம்! கார் வாடகை, பெட்ரோல்/டீசல் மற்றும் ஓட்டுநர் கட்டணம் அனைத்தும் அடங்கும். சுங்கக்கட்டணம் மட்டுமே தனியாக செலுத்த வேண்டும்.'
      },
      {
        question: 'Can I rent a 7-seater or 9-seater for a joint family trip?',
        questionTa: 'கூட்டு குடும்ப பயணத்திற்கு 7 அல்லது 9 சீட்டர் கார் கிடைக்குமா?',
        answer: 'Yes, we have Maruti Ertiga (7-seater) and Chevrolet Tavera (9-seater) with overhead luggage carriers available for daily and multi-day hire.',
        answerTa: 'ஆம், லக்கேஜ் கேரியர் வசதியுடன் கூடிய 7-சீட்டர் எர்டிகா மற்றும் 9-சீட்டர் டவேரா கார்கள் உள்ளன.'
      }
    ],
    meta: {
      title: 'Car Rental with Driver in Sankarankovil | Chauffeur Cabs',
      description: 'Hire chauffeur-driven cars in Sankarankovil & Tenkasi. Hourly & daily rental packages for Sedans and 7-9 seater MUVs. Chilled AC & verified drivers. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/car-rental',
      keywords: 'Car Rental Sankarankovil, chauffeur driven cab Sankarankovil, car hire with driver Tenkasi, rent a car Sankarankovil, கார் வாடகை சங்கரன்கோவில்'
    }
  },

  'corporate-travel': {
    slug: 'corporate-travel',
    name: 'Corporate Travel Service',
    nameTa: 'கார்ப்பரேட் நிறுவன கார் சேவை',
    heroBadge: 'PUNCTUAL BUSINESS MOBILITY • GST INVOICING',
    heroBadgeTa: 'நிறுவன அதிகாரிகள் & விருந்தினர்களுக்கான பிரீமியம் சேவை',
    heroH1: 'Corporate Taxi & Employee Transit in',
    heroH1Highlight: 'Sankarankovil, Tenkasi & Tirunelveli',
    heroH1Ta: 'நிறுவனங்கள் & தொழிற்சாலைகளுக்கு',
    heroH1HighlightTa: 'கார்ப்பரேட் டாக்ஸி சேவை',
    overviewLead: 'Professional business travel, VIP client transfers, and factory inspection transit across Tenkasi, Gangaikondan SEZ, and Tuticorin with GST-compliant billing.',
    overviewLeadTa: 'தென்காசி, கங்கைகொண்டான் சிப்காட் மற்றும் தூத்துக்குடி தொழிற்சாலைகளுக்கு அதிகாரிகள் மற்றும் விருந்தினர் பயணத்திற்கான ஜிஎஸ்டி ரசீதுடன் கூடிய டாக்ஸி.',
    serviceOverview: 'Managing executive mobility across South Tamil Nadu textile mills, manufacturing plants in Gangaikondan SEZ, wind-energy farms, and agricultural exporters? Rider Call Taxi provides punctual corporate travel solutions. Our premium fleet of Glanza, Dzire, and Ertiga vehicles ensures your executives, auditing teams, and visiting clients travel with executive comfort and professionalism.',
    serviceOverviewTa: 'தென் தமிழக நூற்பாலைகள், கங்கைகொண்டான் சிப்காட் தொழிற்சாலைகள், காற்றாலை நிறுவனங்கள் மற்றும் ஏற்றுமதி அலுவலகங்களுக்கான பிரத்யேக கார் சேவை. சரியான நேரம், ஜிஎஸ்டி ரசீது மற்றும் பண்பான ஓட்டுநர்களுடன் உங்கள் நிறுவன மதிப்பை உயர்த்தும் சேவை.',
    benefits: [
      {
        icon: '📊',
        title: 'GST Invoicing & Corporate Billing',
        titleTa: 'ஜிஎஸ்டி ரசீது & முறையான பில்லிங்',
        description: 'Monthly statements and tax invoices sent electronically for easy corporate accounting.',
        descriptionTa: 'நிறுவன கணக்கு தணிக்கைக்காக முறையான ஜிஎஸ்டி ரசீதுகள் வழங்கப்படும்.'
      },
      {
        icon: '👔',
        title: 'Immaculate Vehicles & Formal Chauffeurs',
        titleTa: 'நேர்த்தியான கார்கள் & பண்பான ஓட்டுநர்கள்',
        description: 'Punctual, well-groomed drivers respectful of confidential executive conversations.',
        descriptionTa: 'நிறுவன ரகசியங்களை மதிக்கும் கண்ணியமான, நேர்த்தியான ஓட்டுநர்கள்.'
      },
      {
        icon: '🏭',
        title: 'Industrial & Wind-Farm Transit Expertise',
        titleTa: 'தொழிற்சாலை & காற்றாலை பகுதி நேரடி அனுபவம்',
        description: 'Familiar with Kayathar, Gangaikondan, Rajapalayam, and Tuticorin industrial belts.',
        descriptionTa: 'கயத்தாறு, கங்கைகொண்டான் மற்றும் தூத்துக்குடி தொழிற்பேட்டைகளை நன்கு அறிந்தவர்கள்.'
      },
      {
        icon: '⚡',
        title: 'Priority 24/7 Operations Line',
        titleTa: 'முன்னுரிமை 24/7 உதவி எண்',
        description: 'Dedicated account manager for last-minute executive flight changes and site visits.',
        descriptionTa: 'அவசர பயணங்களுக்கு உடனடி கார் ஒதுக்கீடு செய்யும் தனி மேலாளர் உதவி.'
      }
    ],
    vehicles: [
      {
        name: 'Toyota Glanza Executive / Dzire Tour',
        nameTa: 'டொயோட்டா கிளான்சா / டிசையர்',
        category: 'Executive Sedan',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '3 Suitcases',
        baseFareText: '₹120 (First 3 KM)',
        baseFareTextTa: '₹120 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹28 / Night ₹30 per KM',
        perKmRateTextTa: 'பகல் ₹28 / இரவு ₹30 / கி.மீ',
        idealFor: 'Executive transit, airport pickups & client escort',
        idealForTa: 'அதிகாரிகள் பயணம் மற்றும் ஏர்போர்ட் பிக்கப்'
      },
      {
        name: 'Maruti Suzuki Ertiga Smart Hybrid (SUV)',
        nameTa: 'மாருதி எர்டிகா ஹைபிரிட் (7-சீட்டர்)',
        category: 'Corporate MUV',
        capacity: '6 Passengers + 1 Driver',
        capacityTa: '6 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '4 Laptops / Equipment Bags',
        baseFareText: '₹180 (First 3 KM)',
        baseFareTextTa: '₹180 (முதல் 3 கி.மீ)',
        perKmRateText: 'Day ₹36 / Night ₹38 per KM',
        perKmRateTextTa: 'பகல் ₹36 / இரவு ₹38 / கி.மீ',
        idealFor: 'Audit teams, plant inspection visits & group shuttles',
        idealForTa: 'தணிக்கை குழுவினர் மற்றும் தொழிற்சாலை குழு ஆய்வு'
      }
    ],
    popularRoutes: [
      { route: 'Sankarankovil to Gangaikondan SIPCOT SEZ', routeTa: 'சங்கரன்கோவில் - கங்கைகொண்டான் சிப்காட்', distanceKm: 45, duration: '55 min', sedanFare: '₹1,296', suvFare: '₹1,692' },
      { route: 'Sankarankovil to Tuticorin Port / Industrial Area', routeTa: 'சங்கரன்கோவில் - தூத்துக்குடி துறைமுகம்', distanceKm: 90, duration: '1 hr 45 min', sedanFare: '₹2,556', suvFare: '₹3,312' },
      { route: 'Sankarankovil to Rajapalayam Textile Hub', routeTa: 'சங்கரன்கோவில் - ராஜபாளையம் மில்கள்', distanceKm: 35, duration: '50 min', sedanFare: '₹1,016', suvFare: '₹1,332' },
      { route: 'Sankarankovil to Madurai Corporate Hotels / Airport', routeTa: 'சங்கரன்கோவில் - மதுரை ஹோட்டல்கள் / ஏர்போர்ட்', distanceKm: 120, duration: '2 hr 30 min', sedanFare: '₹3,396', suvFare: '₹4,392' }
    ],
    bookingSteps: [
      { step: 1, title: 'Submit Company Requirements', titleTa: 'நிறுவன தேவைகளை தெரிவிக்கவும்', desc: 'Email or WhatsApp your travel requisition with passenger names and GST details.', descTa: 'பயணிகள் பெயர் மற்றும் ஜிஎஸ்டி விவரங்களை மின்னஞ்சல் அல்லது வாட்ஸ்அப்பில் அனுப்பவும்.' },
      { step: 2, title: 'Dedicated Fleet Dispatched', titleTa: 'பிரத்யேக வாகனம் ஒதுக்கீடு', desc: 'Chauffeur and car details confirmed in advance for seamless executive scheduling.', descTa: 'அதிகாரிகள் திட்டமிடலுக்காக முன்கூட்டியே கார் விவரங்கள் பகிரப்படும்.' },
      { step: 3, title: 'Consolidated Monthly Billing', titleTa: 'மாதாந்திர ஒருங்கிணைந்த ரசீது', desc: 'Receive detailed GST invoices matching your corporate travel records.', descTa: 'நிறுவன கணக்கிற்கு ஏற்ற ஜிஎஸ்டி ரசீதுகள் முறையாக வழங்கப்படும்.' }
    ],
    faqs: [
      {
        question: 'Do you provide GST invoices for corporate taxi claims?',
        questionTa: 'கார்ப்பரேட் கணக்குகளுக்கு ஜிஎஸ்டி ரசீது வழங்கப்படுமா?',
        answer: 'Yes! We provide complete, valid GST invoices detailing distance, date, route, and breakdown for full tax-input credit compliance.',
        answerTa: 'ஆம், நிறுவன வரி வரவுக்காக முறையான ஜிஎஸ்டி பில்கள் வழங்கப்படும்.'
      },
      {
        question: 'Can you arrange urgent transport for visiting delegates at Madurai Airport?',
        questionTa: 'மதுரை விமான நிலையத்திற்கு வரும் விருந்தினர்களுக்கு அவசர கார் கிடைக்குமா?',
        answer: 'Yes, we track flight schedules and ensure a pristine Sedan or MUV waits at the terminal with a name-board for your arriving executives.',
        answerTa: 'ஆம், பெயர் பலகையுடன் விமான நிலைய வாசலில் காத்திருந்து விருந்தினர்களை வரவேற்கும் சேவை உள்ளது.'
      },
      {
        question: 'Are monthly contract cab services available for local companies?',
        questionTa: 'உள்ளூர் நிறுவனங்களுக்கு மாதாந்திர ஒப்பந்த அடிப்படையில் கார்கள் கிடைக்குமா?',
        answer: 'Yes, we offer customized monthly corporate mobility packages for banks, hospitals, textile mills, and engineering companies.',
        answerTa: 'ஆம், வங்கிகள், மருத்துவமனைகள் மற்றும் மில்களுக்கு மாதாந்திர ஒப்பந்த கார்கள் இயக்கப்படுகின்றன.'
      }
    ],
    meta: {
      title: 'Corporate Taxi Service Sankarankovil | Business Car Rental',
      description: 'Reliable corporate taxi service in Sankarankovil, Tenkasi & Tirunelveli. Executive sedans, GST billing & VIP client airport escort. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/corporate-travel',
      keywords: 'Corporate Taxi Sankarankovil, Business car rental Tenkasi, Gangaikondan factory cab, corporate travel Tirunelveli, கார்ப்பரேட் டாக்ஸி'
    }
  },

  'tour-packages': {
    slug: 'tour-packages',
    name: 'Tour Packages & Pilgrimage Cabs',
    nameTa: 'சுற்றுலா & ஆன்மீக கோவில் பேக்கேஜ்கள்',
    heroBadge: 'SACRED TEMPLES & WATERFALLS • CUSTOMIZED CIRCUITS',
    heroBadgeTa: 'புகழ்பெற்ற திருத்தலங்கள் & குற்றால அருவி சுற்றுலா',
    heroH1: 'Tour Packages & Pilgrimage Cabs from',
    heroH1Highlight: 'Sankarankovil & Tenkasi District',
    heroH1Ta: 'தென் தமிழக ஆன்மீக & இயற்கை எழில்',
    heroH1HighlightTa: 'சுற்றுலா பேக்கேஜ்கள்',
    overviewLead: 'Immerse in divine temples, lush Western Ghats waterfalls, and scenic heritage routes with our customized, family-friendly tour cab packages.',
    overviewLeadTa: 'புகழ்பெற்ற திருத்தலங்கள், இயற்கை கொஞ்சும் குற்றால அருவிகள் மற்றும் வரலாற்று சிறப்புமிக்க இடங்களை குடும்பத்துடன் ரசிக்க அருமையான டூர் பேக்கேஜ்கள்.',
    serviceOverview: 'South Tamil Nadu is a treasure trove of ancient spirituality and natural wonders. Rider Call Taxi curates memorable family, pilgrimage, and holiday circuits starting from Sankarankovil. Whether you want to witness the 12-day Aadi Thapasu festival, bathe in the medicinal waters of Courtallam, visit the coastal shrine of Tiruchendur Murugan, or complete the sacred Navatirupathi circuit, our experienced local chauffeurs ensure a joyful, peaceful journey.',
    serviceOverviewTa: 'சங்கரன்கோவில் சங்கரநாராயணர் கோவில் ஆடித்தவசு, குற்றால அருவிகள், திருச்செந்தூர் சுப்பிரமணிய சுவாமி திருக்கோவில் மற்றும் தாமிரபரணி நவதிருப்பதி ஸ்தலங்கள் என அனைத்தையும் குடும்பத்துடன் மனநிறைவோடு தரிசிக்க எங்கள் ஆன்மீக டூர் பேக்கேஜ்கள் சிறந்தவை.',
    benefits: [
      {
        icon: '🛕',
        title: 'Deep Local Temple Knowledge',
        titleTa: 'கோவில் வழிபாட்டு நேர அறிவு',
        description: 'Drivers know exact Pooja timings, temple gate entries, and senior-friendly walkways.',
        descriptionTa: 'பூஜை நேரங்கள், நடை திறக்கும் நேரம் மற்றும் முதியவர்கள் எளிதில் செல்ல வழிகாட்டுதல்.'
      },
      {
        icon: '🌊',
        title: 'Courtallam Season Special Guidance',
        titleTa: 'குற்றால அருவி சீசன் வழிகாட்டல்',
        description: 'Knows water flow conditions and safe, uncrowded bathing timings at Main Falls & Five Falls.',
        descriptionTa: 'தண்ணீர் வரத்து மற்றும் குடும்பத்தினர் குளிக்க ஏற்ற பாதுகாப்பான நேரங்களை அறிவர்.'
      },
      {
        icon: '👨‍👩‍👧‍👦',
        title: 'Family & Senior Citizen Comfort',
        titleTa: 'குடும்பத்தினர் & முதியவர்கள் சௌகரியம்',
        description: 'Spacious seating with gentle highway driving, frequent rest breaks, and luggage care.',
        descriptionTa: 'அமைதியான ஓட்டுதல், போதிய இடைவேளைகள் மற்றும் குடும்பத்திற்கான முழு சௌகரியம்.'
      },
      {
        icon: '💰',
        title: 'All-Inclusive Transparent Day Packages',
        titleTa: 'மறைமுக கட்டணங்கள் இல்லாத பேக்கேஜ்',
        description: 'Fixed upfront package rates including vehicle, fuel, and driver allowance.',
        descriptionTa: 'எரிபொருள், கார் வாடகை மற்றும் ஓட்டுநர் கட்டணம் உட்பட வெளிப்படையான பேக்கேஜ்.'
      }
    ],
    vehicles: [
      {
        name: 'Maruti Suzuki Dzire Tour (Sedan)',
        nameTa: 'மாருதி டிசையர் டூர் (செடான்)',
        category: 'Sedan',
        capacity: '4 Passengers + 1 Driver',
        capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
        luggage: '3 Suitcases',
        baseFareText: 'Day ₹450 (First 20 KM Package)',
        baseFareTextTa: 'பகல் ₹450 (முதல் 20 கி.மீ பேக்கேஜ்)',
        perKmRateText: '₹15 / KM + ₹80/hr waiting',
        perKmRateTextTa: '₹15 / கி.மீ + ₹80/மணி காத்திருப்பு',
        idealFor: 'Couples and small families visiting temple circuits',
        idealForTa: 'தம்பதியர் மற்றும் சிறிய குடும்பங்களுக்கான ஆன்மீக சுற்றுலா'
      },
      {
        name: 'Chevrolet Tavera / Maruti Ertiga (7-9 Seater MUV)',
        nameTa: 'டவேரா / எர்டிகா (7-9 சீட்டர்)',
        category: 'SUV / MUV',
        capacity: '7-9 Passengers + 1 Driver',
        capacityTa: '7-9 பயணிகள் + 1 ஓட்டுநர்',
        luggage: 'Overhead Carrier + Rear Cargo Space',
        baseFareText: 'Day ₹600 (First 20 KM Package)',
        baseFareTextTa: 'பகல் ₹600 (முதல் 20 கி.மீ பேக்கேஜ்)',
        perKmRateText: '₹19 / KM + ₹100/hr waiting',
        perKmRateTextTa: '₹19 / கி.மீ + ₹100/மணி காத்திருப்பு',
        idealFor: 'Joint family holidays, Sabarimala pilgrimage & group excursions',
        idealForTa: 'கூட்டுக் குடும்ப சுற்றுலா மற்றும் சபரிமலை யாத்திரை'
      }
    ],
    popularRoutes: [
      { route: 'Courtallam 9-Waterfalls Full-Day Tour', routeTa: 'குற்றாலம் 9 அருவிகள் ஒரு நாள் சுற்றுலா', distanceKm: 85, duration: '8 Hours', sedanFare: '₹1,425 + waiting', suvFare: '₹1,835 + waiting' },
      { route: 'Sankarankovil to Tiruchendur Sea Temple Circuit', routeTa: 'சங்கரன்கோவில் - திருச்செந்தூர் முருகன் கோவில்', distanceKm: 230, duration: 'Full Day (10 Hrs)', sedanFare: '₹3,600 + waiting', suvFare: '₹4,590 + waiting' },
      { route: 'Navatirupathi 9-Vishnu Temples Sacred Circuit', routeTa: 'நவதிருப்பதி 9 விஷ்ணு ஸ்தலங்கள் யாத்திரை', distanceKm: 210, duration: 'Full Day Circuit', sedanFare: '₹3,300 + waiting', suvFare: '₹4,210 + waiting' },
      { route: 'Madurai Meenakshi Amman & Heritage Day Tour', routeTa: 'மதுரை மீனாட்சி அம்மன் & பாரம்பரிய சுற்றுலா', distanceKm: 240, duration: '12 Hours', sedanFare: '₹3,750 + waiting', suvFare: '₹4,780 + waiting' }
    ],
    bookingSteps: [
      { step: 1, title: 'Choose Your Destination Circuit', titleTa: 'சுற்றுலா இடத்தை தேர்வு செய்க', desc: 'Pick from Courtallam waterfalls, Tiruchendur, Navatirupathi, or custom temple stops.', descTa: 'குற்றாலம், திருச்செந்தூர், நவதிருப்பதி அல்லது உங்கள் விருப்ப கோவில்களை தேர்வு செய்யவும்.' },
      { step: 2, title: 'Customized Day Itinerary', titleTa: 'சிறப்பு பயண திட்டம்', desc: 'We help sequence temple darshan and dining breaks for maximum leisure and comfort.', descTa: 'தரிசனம் மற்றும் உணவு இடைவேளைகளுக்கு ஏற்ற சிறந்த பயண திட்டம் தரப்படும்.' },
      { step: 3, title: 'Embark on a Divine Journey', titleTa: 'மகிழ்ச்சியான சுற்றுலா', desc: 'Clean AC vehicle with an accommodating, friendly driver picks your family up from home.', descTa: 'நட்பான ஓட்டுநருடன் குடும்பத்துடன் அமைதியான, மறக்க முடியாத சுற்றுலா.' }
    ],
    faqs: [
      {
        question: 'Can you customize the tour itinerary according to our family preferences?',
        questionTa: 'எங்கள் குடும்ப விருப்பப்படி டூர் திட்டத்தை மாற்றலாமா?',
        answer: 'Absolutely! Our tour packages are 100% customizable. You choose the start time, the temples or waterfalls to visit, and how long to spend at each spot.',
        answerTa: 'தாராளமாக மாற்றலாம்! உங்கள் விருப்பப்படி புறப்படும் நேரம் மற்றும் பார்க்க வேண்டிய இடங்களை நீங்களே தீர்மானிக்கலாம்.'
      },
      {
        question: 'Do you arrange vehicles for Sabarimala pilgrimage season?',
        questionTa: 'சபரிமலை சீசனுக்கு கார்கள் கிடைக்குமா?',
        answer: 'Yes! We provide 7-seater Ertiga and 9-seater Tavera MUVs with overhead luggage carriers, driven by experienced hill-road drivers for safe Sabarimala pilgrimages.',
        answerTa: 'ஆம்! லக்கேஜ் கேரியர் பொருத்தப்பட்ட எர்டிகா மற்றும் டவேரா கார்களில் மலைப்பாதை அனுபவமிக்க ஓட்டுநர்களுடன் சபரிமலை செல்லலாம்.'
      },
      {
        question: 'Are there hidden driver bhatta fees on full-day tour packages?',
        questionTa: 'டூர் பேக்கேஜில் மறைமுக ஓட்டுநர் படி கட்டணங்கள் உண்டா?',
        answer: 'No, our package quotes are completely transparent. Fuel, car hire, and standard driver allowances are all included.',
        answerTa: 'இல்லை, மறைமுக கட்டணங்கள் எதுவும் இல்லை; கார், பெட்ரோல் மற்றும் ஓட்டுநர் கட்டணம் அனைத்தும் அடங்கும்.'
      }
    ],
    meta: {
      title: 'Tour Packages from Sankarankovil | Courtallam & Temple Cabs',
      description: 'Book customized tour cab packages from Sankarankovil. Courtallam waterfalls, Tiruchendur Murugan Temple & Navatirupathi circuits. Call +91 9363015586.',
      canonical: 'https://ridercalltaxi.com/tour-packages',
      keywords: 'Tour Packages Sankarankovil, Courtallam tour taxi, Tiruchendur pilgrimage cab Sankarankovil, Navatirupathi taxi package, சுற்றுலா பேக்கேஜ் சங்கரன்கோவில்'
    }
  }
};
