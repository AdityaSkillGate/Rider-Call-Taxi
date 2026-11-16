import { Injectable, signal } from '@angular/core';
import { VehicleCategory, RealFleetCar, ServiceItem, SmartRoute, CityCoverage, Testimonial, FareBreakup } from '../models/taxi.model';

@Injectable({
  providedIn: 'root'
})
export class TaxiDataService {
  readonly company = {
    name: 'Rider Call Taxi',
    tagline: 'Ride Across Tamil Nadu With Comfort & Confidence',
    phone1: '+91 9363015586',
    phone2: '+91 9363715586',
    rawPhone1: '919363015586',
    rawPhone2: '919363715586',
    email: 'ridercalltaxi@gmail.com',
    addressLine: '757A/7, First Floor, MPM Complex, Rajapalayam Main Road, NGO Colony Opposite Panchayat Union Office',
    city: 'Sankarankovil',
    pincode: '627756',
    state: 'Tamil Nadu',
    googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1154065.9029508086!2d76.99766381125234!3d9.168637331904717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06970005fa718f%3A0xa8e66d45c2e505b8!2sRider%20Call%20Taxi!5e1!3m2!1sen!2sin!4v1793428417040!5m2!1sen!2sin',
    googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Rider+Call+Taxi,+Rajapalayam+Road,+Sankarankovil,+Tamil+Nadu+627756'
  };

  // Base rate as per master plan: 1 KM = ₹14
  readonly baseRatePerKm = 14;

  // Real Fleet Vehicles with authentic 100-frame 360 studio captures
  readonly realFleetCars: RealFleetCar[] = [
    {
      id: 'car-1',
      name: 'Tata Altroz Premium',
      nameTa: 'டாடா அல்ட்ராஸ் பிரீமியம்',
      model: 'Tata Altroz (Hatchback)',
      regNumber: 'TN 79 M 7309',
      category: 'Hatchback / Premium Compact',
      categoryTa: 'ஹேட்ச்பேக் / பிரீமியம் காம்பாக்ட்',
      ratePerKm: 14,
      capacity: '4 Passengers + 1 Driver',
      capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
      luggage: '2 Large Suitcases (345L Boot)',
      luggageTa: '2 பெரிய சூட்கேஸ்கள் (345L டிக்கி)',
      fuel: 'Petrol / Diesel • 5-Star NCAP Safety',
      fuelTa: 'பெட்ரோல் / டீசல் • 5-ஸ்டார் பாதுகாப்பு',
      comfort: 'Ergonomic Dual-Tone Seating',
      comfortTa: 'சொகுசு சாய்வு இருக்கைகள் & குளிர்ந்த ஏசி',
      badge: 'Official Fleet • TN 79 M 7309',
      badgeTa: 'அரசு வணிக அனுமதி • TN 79 M 7309',
      tagline: 'City Drops, Local Commutes & Quick Highway Trips',
      taglineTa: 'நகரப் பயணங்கள் & விரைவு நெடுஞ்சாலை பயணம்',
      description: 'Engineered with 5-star Global NCAP safety, 90-degree wide opening doors for easy elderly access, instant chilled AC, and smooth suspension across Tamil Nadu roads.',
      descriptionTa: '5-நட்சத்திர உலகளாவிய பாதுகாப்பு சான்றிதழ், முதியவர்கள் எளிதில் ஏறி இறங்க 90° அகலக் கதவுகள், சக்திவாய்ந்த ஏசி மற்றும் சௌகரியமான பயண அனுபவம்.',
      features: [
        '5-Star NCAP Crash Safety Rated Body',
        '90° Wide Door Openings for Seniors & Family',
        'Instant Dual AC Climate Cooling',
        '24/7 Live GPS & Fastag Enabled',
        'Commercial Yellow Plate TN 79 M 7309'
      ],
      featuresTa: [
        '5-நட்சத்திர பாதுகாப்பு சான்றிதழ் கொண்ட உடல் அமைப்பு',
        '90° அகல கதவுகள் - முதியவர்கள் எளிதில் ஏறலாம்',
        'குளிர்ந்த இரட்டை ஏசி தட்பவெப்ப வசதி',
        '24/7 நேரலை GPS கண்காணிப்பு & பாஸ்டேக்',
        'அங்கீகரிக்கப்பட்ட மஞ்சள் நம்பர் பிளேட் TN 79 M 7309'
      ],
      framesFolder: 'assets/car-360/Car-1/Camera_panning_around_vehicle_f8de6594_frames',
      frameCount: 100,
      posterFrame: 'assets/car-360/Car-1/Camera_panning_around_vehicle_f8de6594_frames/frame_001.png',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 4,
        bags: 2,
        fuel: 'Diesel / Petrol',
        comfort: '5-Star Executive'
      }
    },
    {
      id: 'car-2',
      name: 'Toyota Glanza Executive',
      nameTa: 'டொயோட்டா கிளான்சா எக்ஸிகியூட்டிவ்',
      model: 'Toyota Glanza (Sedan Class Comfort)',
      regNumber: 'TN 79 M 5198',
      category: 'Sedan / Executive Comfort',
      categoryTa: 'செடான் / எக்ஸிகியூட்டிவ் சொகுசு',
      ratePerKm: 15,
      capacity: '4 Passengers + 1 Driver',
      capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
      luggage: '3 Large Suitcases + Duffel Bags',
      luggageTa: '3 பெரிய சூட்கேஸ்கள் + பயண பைகள்',
      fuel: 'Dual-Jet Ultra-Refined Engine',
      fuelTa: 'டொயோட்டா டூயல்-ஜெட் என்ஜின்',
      comfort: 'Whisper-Quiet Executive Cabin',
      comfortTa: 'அமைதியான சொகுசு கேபின்',
      badge: 'Executive Fleet • TN 79 M 5198',
      badgeTa: 'பிரீமியம் எக்ஸிகியூட்டிவ் • TN 79 M 5198',
      tagline: 'Business Travel, Temple Tours & Luxury Outstation',
      taglineTa: 'தொழில்முறை பயணம், கோவில் சுற்றுலா & வெளியூர் சொகுசு',
      description: 'Plush interior cushioning, generous rear knee room, ultra-quiet sound insulation, and legendary Toyota reliability for long non-stop journeys across South India.',
      descriptionTa: 'அதிக லெக்ரூம், சொகுசு குஷன் இருக்கைகள், அதிர்வு இல்லாத அமைதியான பயணம் மற்றும் நம்பகமான டொயோட்டா தொழில்நுட்பம்.',
      features: [
        'Plush Cushioned Seats with Rear Armrest',
        'Whisper-Quiet Cabin for Stress-Free Travel',
        'Generous Boot Space for Heavy Luggage',
        'Speed Governor & Commercial Tourist Permit',
        'Commercial Yellow Plate TN 79 M 5198'
      ],
      featuresTa: [
        'சொகுசு குஷன் இருக்கைகள் & ஆர்ம்ரெஸ்ட் வசதி',
        'அதிர்வு இல்லாத அமைதியான நெடுஞ்சாலை பயணம்',
        'விசாலமான லக்கேஜ் பூட் வசதி',
        'அரசு வேகக் கட்டுப்பாடு & சுற்றுலா அனுமதி',
        'அங்கீகரிக்கப்பட்ட மஞ்சள் நம்பர் பிளேட் TN 79 M 5198'
      ],
      framesFolder: 'assets/car-360/Car-2/Vehicle_360-degree_orbital_camer__21353ace_frames',
      frameCount: 100,
      posterFrame: 'assets/car-360/Car-2/Vehicle_360-degree_orbital_camer__21353ace_frames/frame_001.png',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 4,
        bags: 3,
        fuel: 'Dual-Jet Petrol',
        comfort: 'Executive Quiet'
      }
    },
    {
      id: 'car-3',
      name: 'Maruti Suzuki Dzire Tour (Overhead Carrier)',
      nameTa: 'மாருதி சுஸுகி டிசையர் டூர் (கூரை கேரியர்)',
      model: 'Maruti Suzuki Dzire Tour S',
      regNumber: 'TN 79 Q 9304',
      category: 'Sedan / Express Tourer',
      categoryTa: 'செடான் / எக்ஸ்பிரஸ் டூரர்',
      ratePerKm: 14,
      capacity: '4 Passengers + 1 Driver',
      capacityTa: '4 பயணிகள் + 1 ஓட்டுநர்',
      luggage: 'Boot + Heavy Roof Carrier (4-5 Large Bags)',
      luggageTa: 'டிக்கி + கூரை கேரியர் (4-5 பெரிய பைகள்)',
      fuel: 'Dual VVT Petrol/CNG • High Mileage',
      fuelTa: 'அதிக மைலேஜ் பெட்ரோல் / சிஎன்ஜி',
      comfort: 'Highway Express Seating with Carrier',
      comfortTa: 'நெடுஞ்சாலை சாய்வு இருக்கைகள் & கேரியர்',
      badge: 'Outstation Pro • TN 79 Q 9304',
      badgeTa: 'வெளியூர் டூரர் • TN 79 Q 9304',
      tagline: 'Heavy Luggage Outstation, Airport & Railway Station Runs',
      taglineTa: 'அதிக லக்கேஜ் வெளியூர் பயணம் & விமான நிலைய பிக்கப்',
      description: 'Equipped with a sturdy aerodynamic overhead luggage carrier and spacious boot. Built specifically for outstation family tours carrying heavy luggage at our budget rate of ₹14/KM.',
      descriptionTa: 'கூடுதல் லக்கேஜ் எடுத்துச் செல்ல பிரத்யேக கூரை கேரியர் மற்றும் டிக்கி வசதி. வெளியூர் சுற்றுலா மற்றும் விமான நிலைய பயணங்களுக்கு மிகச் சிறந்த தேர்வு (₹14/கி.மீ).',
      features: [
        'Heavy-Duty Overhead Luggage Carrier Installed',
        'Generous 378L Boot Space for Suitcases',
        'High Highway Mileage - Pocket Friendly ₹14/KM',
        'Chilled AC & Mobile Fast Charging Ports',
        'Commercial Yellow Plate TN 79 Q 9304'
      ],
      featuresTa: [
        'உறுதியான ஏரோடைனமிக் கூரை லக்கேஜ் கேரியர்',
        'விசாலமான 378L டிக்கி இடம்',
        'மிகச் சிறந்த மைலேஜ் - பாக்கெட் பிரெண்ட்லி ₹14/கி.மீ',
        'குளிர்ந்த ஏசி & மொபைல் பாஸ்ட் சார்ஜிங்',
        'அங்கீகரிக்கப்பட்ட மஞ்சள் நம்பர் பிளேட் TN 79 Q 9304'
      ],
      framesFolder: 'assets/car-360/Car-3/Car_orbital_camera_pan_rotation_c16e780d_frames',
      frameCount: 100,
      posterFrame: 'assets/car-360/Car-3/Car_orbital_camera_pan_rotation_c16e780d_frames/frame_001.png',
      videoUrl: '/assets/videos/Sedan (Dzire  Etios).mp4',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 4,
        bags: 5,
        fuel: 'Dual VVT Petrol/CNG',
        comfort: 'Carrier Tourer'
      }
    },
    {
      id: 'car-4',
      name: 'Maruti Suzuki Ertiga 7-Seater',
      nameTa: 'மாருதி சுஸுகி எர்டிகா (7-சீட்டர் குடும்ப வாகனம்)',
      model: 'Maruti Suzuki Ertiga Smart Hybrid',
      regNumber: 'TN 79 Q 3460',
      category: 'SUV / MUV 7-Seater',
      categoryTa: 'எஸ்யூவி / 7-சீட்டர் குடும்ப வாகனம்',
      ratePerKm: 19,
      capacity: '6 Passengers + 1 Driver (7-Seater)',
      capacityTa: '6 பயணிகள் + 1 ஓட்டுநர் (7 சீட்டர்)',
      luggage: 'Flexible 3-Row Boot + Overhead Roof Rack (5-6 Bags)',
      luggageTa: '3-வது வரிசை இடம் + கூரை கேரியர் (5-6 பைகள்)',
      fuel: 'Smart Hybrid Diesel/Petrol',
      fuelTa: 'ஸ்மார்ட் ஹைப்ரிட் டீசல் / பெட்ரோல்',
      comfort: 'Roof-Mounted AC Blowers for Rows 2 & 3',
      comfortTa: 'அனைத்து வரிசைகளுக்கும் தனித்தனி ஏசி வென்ட்கள்',
      badge: 'Family Choice 7-Seater • TN 79 Q 3460',
      badgeTa: 'குடும்ப வாகனம் 7-சீட்டர் • TN 79 Q 3460',
      tagline: 'Family Pilgrimages (Sabarimala/Tirupati) & Wedding Trips',
      taglineTa: 'குடும்ப ஆன்மீக சுற்றுலா (சபரிமலை/திருப்பதி) & சுபகாரிய பயணம்',
      description: 'The quintessential Tamil Nadu family vehicle featuring 3 full rows of reclining seats, independent roof AC vents for each row, overhead luggage carrier, and plush suspension for smooth family travel.',
      descriptionTa: '7 நபர்கள் வசதியாக அமர்ந்து பயணிக்க 3 வரிசை சாய்வு இருக்கைகள், மேற்கூரை தனி ஏசி காற்று துவாரங்கள், கூரை கேரியர் மற்றும் குடும்பத்தினருக்கு இதமான நெடுஞ்சாலை பயணம்.',
      features: [
        '3 Rows of Reclining Pushback Seats (7-Seater)',
        'Dedicated Roof AC Blowers for Rows 2 & 3',
        'Heavy Overhead Luggage Carrier Installed',
        'Ideal for Sabarimala, Tirupati & Rameswaram',
        'Commercial Yellow Plate TN 79 Q 3460'
      ],
      featuresTa: [
        '3 வரிசை சாய்வு இருக்கைகள் (7 சீட்டர் குடும்ப வாகனம்)',
        '2 மற்றும் 3-ம் வரிசைக்கு தனித்தனி ஏசி வென்ட்கள்',
        'உறுதியான கூரை லக்கேஜ் கேரியர் பொருத்தப்பட்டுள்ளது',
        'ஆன்மீக சுற்றுலா மற்றும் திருமண பயணத்திற்கு உகந்தது',
        'அங்கீகரிக்கப்பட்ட மஞ்சள் நம்பர் பிளேட் TN 79 Q 3460'
      ],
      framesFolder: 'assets/car-360/Car-4/Vehicle_360-degree_orbital_camer__7d5bb7a4_frames',
      frameCount: 100,
      posterFrame: 'assets/car-360/Car-4/Vehicle_360-degree_orbital_camer__7d5bb7a4_frames/frame_001.png',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 7,
        bags: 6,
        fuel: 'Smart Hybrid',
        comfort: 'Family 7-Seater'
      }
    },
    {
      id: 'car-5',
      name: 'Chevrolet Tavera Neo 3 (Group & Ghats)',
      nameTa: 'செவர்லே டவேரா நியோ 3 (மலைப்பாதை & குழு வாகனம்)',
      model: 'Chevrolet Tavera Neo 3',
      regNumber: 'TN 18 AK 9659',
      category: 'Heavy-Duty MUV / SUV (8-9 Seater)',
      categoryTa: 'மலைப்பாதை & குழு வாகனம் (8-9 சீட்டர்)',
      ratePerKm: 20,
      capacity: '7 to 8 Passengers + 1 Driver (9-Seater)',
      capacityTa: '7-8 பயணிகள் + 1 ஓட்டுநர் (9 சீட்டர்)',
      luggage: 'Massive Overhead Commercial Carrier + Rear Trunk (7-8 Bags)',
      luggageTa: 'முழு நீள கூரை கேரியர் + பின்பக்க லக்கேஜ் (7-8 பைகள்)',
      fuel: 'Direct Injection Turbo Diesel',
      fuelTa: 'டைரக்ட் இன்ஜெக்ஷன் டர்போ டீசல்',
      comfort: 'High Ground Clearance & Dual Turbo AC',
      comfortTa: 'அதிக கிரவுண்ட் கிளியரன்ஸ் & டபுள் ஏசி',
      badge: 'Ghat Road Specialist • TN 18 AK 9659',
      badgeTa: 'மலைப்பாதை ஸ்பெஷலிஸ்ட் • TN 18 AK 9659',
      tagline: 'Hill Stations (Courtallam, Ooty, Kodaikanal) & Large Group Tours',
      taglineTa: 'குற்றாலம், கொடைக்கானல், ஊட்டி மலைப்பாதை & பெரிய குழு சுற்றுலா',
      description: 'Tough ladder-frame chassis with high ground clearance, powerful turbo AC, front auxiliary fog projectors, full-length commercial roof carrier, and massive space built to conquer hill hairpin bends with a full group.',
      descriptionTa: 'உறுதியான சேசிஸ், அதிக கிரவுண்ட் கிளியரன்ஸ், சக்திவாய்ந்த டபுள் ஏசி, மூடுபனி முகப்பு விளக்குகள் மற்றும் முழு நீள கூரை கேரியர். மலைப்பாதை பயணங்களுக்கும் பெரிய குழுக்களுக்கும் உகந்தது.',
      features: [
        'Heavy-Duty Chassis for Ghats & Hairpin Bends',
        'Auxiliary Projector Fog Lamps for Night & Mist',
        'Full-Length Overhead Commercial Luggage Carrier',
        'High Ground Clearance & Rear Safety Bull Guard',
        'Commercial Yellow Plate TN 18 AK 9659'
      ],
      featuresTa: [
        'கடினமான மலைப்பாதை கொண்டை ஊசி வளைவுகளுக்கான உறுதி',
        'இரவு மற்றும் பனி மூட்டத்திற்கான ப்ரொஜெக்டர் விளக்குகள்',
        'முழு நீள கூரை லக்கேஜ் கேரியர் பொருத்தப்பட்டுள்ளது',
        'உயரமான தரை இடைவெளி & பின்புற பாதுகாப்பு கம்பி',
        'அங்கீகரிக்கப்பட்ட மஞ்சள் நம்பர் பிளேட் TN 18 AK 9659'
      ],
      framesFolder: 'assets/car-360/Car-5/Camera_panning_around_vehicle_6fab739e_frames',
      frameCount: 100,
      posterFrame: 'assets/car-360/Car-5/Camera_panning_around_vehicle_6fab739e_frames/frame_001.png',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 9,
        bags: 8,
        fuel: 'Turbo Diesel',
        comfort: 'Heavy MUV Tourer'
      }
    }
  ];

  readonly vehicleCategories: VehicleCategory[] = [
    {
      id: 'hatchback',
      name: 'Hatchback',
      tagline: 'Budget Friendly City Travel',
      ratePerKm: 14,
      rateNonAcPerKm: 14,
      rateAcPerKm: 15,
      roundTripFirst20Km: 450,
      waitingHourlyRate: 80,
      capacity: '4 Passengers',
      luggage: '2 Large Bags (345L Boot)',
      ac: true,
      models: 'Tata Altroz Premium (TN 79 M 7309)',
      badge: 'Best Value • Non-AC ₹14 | AC ₹15',
      description: 'Compact, efficient and 5-star NCAP safety rated ride ideal for short city trips, station pickups, and everyday highway travel.',
      features: ['One Way: Non-AC ₹14/km • AC ₹15/km', 'Round Trip: First 20 km ₹450 (then ₹14/₹15/km)', 'Waiting: ₹80/hr above included time', 'Official Yellow Plate TN 79 M 7309'],
      colorHex: '#FFC107',
      image: '/assets/car-360/Car-1/Camera_panning_around_vehicle_f8de6594_frames/frame_001.png',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 4,
        bags: 2,
        fuel: 'Diesel / Petrol',
        comfort: '5-Star Safety'
      }
    },
    {
      id: 'sedan',
      name: 'Sedan',
      tagline: 'Comfort Travel & Smooth Cruising',
      ratePerKm: 14,
      rateNonAcPerKm: 14,
      rateAcPerKm: 15,
      roundTripFirst20Km: 450,
      waitingHourlyRate: 80,
      capacity: '4 Passengers',
      luggage: 'Boot + Heavy Roof Carrier (5 Bags)',
      ac: true,
      models: 'Maruti Suzuki Dzire Tour (TN 79 Q 9304) & Toyota Glanza (TN 79 M 5198)',
      badge: 'Most Popular • Non-AC ₹14 | AC ₹15',
      description: 'Equipped with heavy-duty overhead luggage carrier and plush boot space. Perfect for airport drops, family outstation tours, and long-distance commutes.',
      features: ['One Way: Non-AC ₹14/km • AC ₹15/km', 'Round Trip: First 20 km ₹450 (then ₹14/₹15/km)', 'Waiting: ₹80/hr above included time', 'Overhead Luggage Carrier Installed'],
      colorHex: '#2563EB',
      image: '/assets/car-360/Car-3/Car_orbital_camera_pan_rotation_c16e780d_frames/frame_001.png',
      interiorImage: '/images/fleet/interior.jpg',
      videoUrl: '/assets/videos/Sedan (Dzire  Etios).mp4',
      specs: {
        seating: 4,
        bags: 5,
        fuel: 'Dual VVT Petrol / CNG',
        comfort: 'Carrier Tourer'
      }
    },
    {
      id: 'suv',
      name: 'SUV / MUV 7-9 Seater',
      tagline: 'Family Trips & Pilgrim Tours',
      ratePerKm: 18,
      rateNonAcPerKm: 18,
      rateAcPerKm: 19,
      roundTripFirst20Km: 600,
      waitingHourlyRate: 100,
      capacity: '6 to 8 Passengers',
      luggage: 'Full Overhead Commercial Carrier + Boot (6-8 Bags)',
      ac: true,
      models: 'Maruti Ertiga 7-Seater (TN 79 Q 3460) & Chevrolet Tavera (TN 18 AK 9659)',
      badge: 'Family & Hills • Non-AC ₹18 | AC ₹19',
      description: 'Spacious 7 to 9 seaters equipped with heavy-duty roof carriers, dedicated roof AC vents, and tough suspension built for hill stations, Courtallam, and temple circuits.',
      features: ['One Way: Non-AC ₹18/km • AC ₹19/km', 'Round Trip: First 20 km ₹600 (then ₹18/₹19/km)', 'Waiting: ₹100/hr above included time', 'Commercial Roof Luggage Carrier'],
      colorHex: '#D32F2F',
      image: '/assets/car-360/Car-4/Vehicle_360-degree_orbital_camer__7d5bb7a4_frames/frame_001.png',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 8,
        bags: 7,
        fuel: 'Smart Hybrid / Turbo Diesel',
        comfort: 'Heavy MUV Tourer'
      }
    },
    {
      id: 'corporate',
      name: 'Executive Class',
      tagline: 'VIP & Business Outstation',
      ratePerKm: 15,
      rateNonAcPerKm: 14,
      rateAcPerKm: 15,
      roundTripFirst20Km: 450,
      waitingHourlyRate: 80,
      capacity: '4 Passengers',
      luggage: '3 Large Bags',
      ac: true,
      models: 'Toyota Glanza Executive (TN 79 M 5198)',
      badge: 'Executive Quiet • AC ₹15',
      description: 'Whisper-quiet sound-insulated cabin, dual-zone AC, plush rear armrest, and verified professional driver for business visitors and executive travel.',
      features: ['One Way: Non-AC ₹14/km • AC ₹15/km', 'Round Trip: First 20 km ₹450 (then ₹14/₹15/km)', 'Whisper-Quiet Insulated Cabin', 'Commercial Yellow Plate TN 79 M 5198'],
      colorHex: '#0F172A',
      image: '/assets/car-360/Car-2/Vehicle_360-degree_orbital_camer__21353ace_frames/frame_001.png',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 4,
        bags: 3,
        fuel: 'Dual-Jet Refined Petrol',
        comfort: 'Executive Quiet'
      }
    },
    {
      id: 'tempo',
      name: 'Tempo Traveller',
      tagline: 'Group Travel & Wedding Parties (Coming Soon)',
      ratePerKm: 0,
      rateNonAcPerKm: 0,
      rateAcPerKm: 0,
      isComingSoon: true,
      capacity: '12-14 Passengers',
      luggage: '10+ Bags',
      ac: true,
      models: 'Force Urbania & Tempo Traveller 14-Seater Deluxe',
      badge: 'Coming Soon • 14-Seater',
      description: 'Our upcoming 14-seater Force Urbania & Tempo Traveller deluxe coach is joining the Sankarankovil fleet shortly. Perfect for group yatras, Sabarimala tours, and wedding convoys. Advance pre-bookings open now.',
      features: ['14 Pushback Luxury Bucket Seats', 'Ample Overhead Luggage Storage', 'Surround Sound & Chilled AC', 'Pre-Booking Open on WhatsApp'],
      colorHex: '#10B981',
      image: '/images/fleet/tempo.jpg',
      interiorImage: '/images/fleet/interior.jpg',
      specs: {
        seating: 14,
        bags: 12,
        fuel: 'Commercial Diesel',
        comfort: 'Touring Luxury'
      }
    }
  ];

  readonly services: ServiceItem[] = [
    {
      id: 'local-ride',
      title: 'Local Ride',
      subtitle: 'Fast Sankarankovil Point-to-Point',
      description: 'Instant pickups within Sankarankovil, Rajapalayam, Tenkasi, and surrounding towns with transparent meter pricing and polite local drivers.',
      icon: 'map-pin',
      badge: 'Fast Pickup',
      features: ['Doorstep pickup in 10 mins', 'No surge pricing during rush hour', 'Local drivers familiar with every street']
    },
    {
      id: 'airport-transfer',
      title: 'Airport Transfer',
      subtitle: 'Madurai, Tuticorin & Trivandrum',
      description: 'Punctual 24/7 airport drops and arrivals with flight monitoring, luggage assistance, and zero delays for your important flights.',
      icon: 'plane',
      popular: true,
      badge: '24/7 On-Time',
      features: ['Madurai Airport (120 KM)', 'Trivandrum Airport (130 KM)', 'Tuticorin Airport (95 KM)', 'Flight delay buffer time']
    },
    {
      id: 'outstation-taxi',
      title: 'Outstation Taxi',
      subtitle: 'One-Way & Round Trips across TN',
      description: 'Affordable one-way drops and round-trip long distance rides to Chennai, Coimbatore, Bangalore, Trichy, and Madurai at fixed ₹14/KM rates.',
      icon: 'compass',
      popular: true,
      badge: 'Lowest Tariff',
      features: ['Pay only for one-way on select drops', 'Fastag equipped vehicles', 'Night driving verified experts']
    },
    {
      id: 'corporate-travel',
      title: 'Corporate Travel',
      subtitle: 'Executive Billing & Chauffeurs',
      description: 'Dedicated transport management for companies, executives, industrial visitors to Rajapalayam textile hubs, and VIP guests.',
      icon: 'briefcase',
      features: ['Monthly consolidated GST billing', 'Clean executive cars', 'Strict punctuality agreement']
    },
    {
      id: 'temple-tourism',
      title: 'Temple Tourism Packages',
      subtitle: 'South Tamil Nadu Heritage Circuits',
      description: 'Customized pilgrimage tours to Sankarankovil Sankaranarayanaswamy Temple, Tiruchendur, Madurai Meenakshi, Rameswaram, and Palani.',
      icon: 'landmark',
      popular: true,
      badge: 'Spiritual Special',
      features: ['Custom darshan waiting time', 'Temple town route experts', 'Senior citizen friendly cabs']
    },
    {
      id: 'wedding-transportation',
      title: 'Wedding Transportation',
      subtitle: 'Bridal Cars & Guest Convoys',
      description: 'Decorated luxury bridal cars and coordinated fleet of Sedans, SUVs, and Tempo Travellers for hassle-free wedding celebrations.',
      icon: 'heart',
      features: ['Decorated bridal car options', 'Multiple pickup coordination', 'Dedicated fleet manager on-call']
    },
    {
      id: 'event-transportation',
      title: 'Event Transportation',
      subtitle: 'Conferences, Festivals & Sports',
      description: 'Reliable mass transport logistics for college functions, political gatherings, sports events, and family reunions.',
      icon: 'users',
      features: ['Bulk fleet discounts', 'Real-time vehicle coordination', '24/7 dispatch supervisor']
    },
    {
      id: 'round-trip-services',
      title: 'Round Trip Services',
      subtitle: 'Relaxed Same-day or Multi-day Tours',
      description: 'Book a cab for the entire day or multi-day trip with transparent per-km billing, minimal waiting charges, and friendly driver.',
      icon: 'repeat',
      features: ['Flexible halts anywhere', 'Low driver beta charge', 'Transparent kilometre calculation']
    }
  ];

  readonly smartRoutes: SmartRoute[] = [
    {
      id: 'snk-madurai',
      from: 'Sankarankovil',
      to: 'Madurai (Airport / Meenakshi Amman)',
      distanceKm: 120,
      estimatedDuration: '2 hrs 15 mins',
      highway: 'NH 744 & NH 44',
      startingPrice: 1680,
      highlight: 'Direct AIIMS & Airport access. Popular daily commuter and pilgrim route.',
      keyStops: ['Rajapalayam', 'Srivilliputhur Andal Temple', 'Thirumangalam'],
      popular: true
    },
    {
      id: 'tirunelveli-chennai',
      from: 'Tirunelveli',
      to: 'Chennai (Koyambedu / Airport)',
      distanceKm: 620,
      estimatedDuration: '9 hrs 30 mins',
      highway: 'Grand Southern Trunk (GST) NH 44 / NH 38',
      startingPrice: 8680,
      highlight: 'Smooth 4-lane expressway journey with planned hygienic food stopovers.',
      keyStops: ['Madurai', 'Trichy', 'Villupuram', 'Chengalpattu'],
      popular: true
    },
    {
      id: 'tenkasi-airport',
      from: 'Tenkasi / Courtallam',
      to: 'Madurai / Trivandrum Airport',
      distanceKm: 115,
      estimatedDuration: '2 hrs 30 mins',
      highway: 'SH 40 / NH 744',
      startingPrice: 1610,
      highlight: 'Scenic route through Western Ghats foothills with reliable airport drop timing.',
      keyStops: ['Surandai', 'Kadayanallur', 'Rajapalayam'],
      popular: true
    },
    {
      id: 'madurai-rameswaram',
      from: 'Madurai',
      to: 'Rameswaram (Pamban Bridge)',
      distanceKm: 175,
      estimatedDuration: '3 hrs 15 mins',
      highway: 'NH 87 (Pamban Highway)',
      startingPrice: 2450,
      highlight: 'Iconic coastal highway driving past Pamban sea bridge and Ramanathaswamy Temple.',
      keyStops: ['Manamadurai', 'Paramakudi', 'Ramanathapuram', 'Mandapam'],
      popular: true
    },
    {
      id: 'snk-tiruchendur',
      from: 'Sankarankovil',
      to: 'Tiruchendur (Murugan Sea Temple)',
      distanceKm: 110,
      estimatedDuration: '2 hrs 20 mins',
      highway: 'SH 41 & SH 93',
      startingPrice: 1540,
      highlight: 'The holiest coastal pilgrim route. Same-day darshan return package available.',
      keyStops: ['Kayathar', 'Tirunelveli Outer', 'Spic Nagar', 'Arumuganeri'],
      popular: true
    },
    {
      id: 'snk-kanyakumari',
      from: 'Sankarankovil',
      to: 'Kanyakumari (Southern Tip)',
      distanceKm: 160,
      estimatedDuration: '3 hrs 10 mins',
      highway: 'NH 44 Expressway',
      startingPrice: 2240,
      highlight: 'Catch sunrise or sunset at Cape Comorin, Vivekananda Rock Memorial and Thiruvalluvar Statue.',
      keyStops: ['Tirunelveli Bypass', 'Nanguneri', 'Panagudi', 'Aralvaimozhi'],
      popular: false
    }
  ];

  readonly citiesCoverage: CityCoverage[] = [
    {
      id: 'sankarankovil',
      name: 'Sankarankovil',
      nameTa: 'சங்கரன்கோவில்',
      district: 'Tenkasi Dist',
      districtTa: 'தென்காசி மாவட்டம்',
      tagline: 'Headquarters & Primary Dispatch Hub',
      taglineTa: 'தலைமையகம் & முதன்மை டாக்ஸி மையம்',
      responseMinutes: 8,
      coordinates: { x: 225, y: 642 },
      availableCabs: 45,
      topRoutes: ['To Madurai', 'To Tiruchendur', 'To Tenkasi', 'To Chennai'],
      topRoutesTa: ['மதுரைக்கு', 'திருச்செந்தூருக்கு', 'தென்காசிக்கு', 'சென்னைக்கு'],
      isHQ: true,
      labelDx: -14,
      labelDy: 3,
      labelAnchor: 'end'
    },
    {
      id: 'karivalam',
      name: 'Karivalam',
      nameTa: 'கரிவலம்வந்தநல்லூர்',
      district: 'Tenkasi Dist',
      districtTa: 'தென்காசி மாவட்டம்',
      tagline: 'Palvannanathar Temple Town',
      taglineTa: 'பால்வண்ணநாதர் கோவில் நகரம்',
      responseMinutes: 8,
      coordinates: { x: 216, y: 628 },
      availableCabs: 18,
      topRoutes: ['To Sankarankovil', 'To Rajapalayam', 'To Tirunelveli'],
      topRoutesTa: ['சங்கரன்கோவிலுக்கு', 'ராஜபாளையத்திற்கு', 'திருநெல்வேலிக்கு'],
      labelDx: -12,
      labelDy: -8,
      labelAnchor: 'end'
    },
    {
      id: 'tenkasi',
      name: 'Tenkasi',
      nameTa: 'தென்காசி',
      district: 'Tenkasi Dist',
      districtTa: 'தென்காசி மாவட்டம்',
      tagline: 'Kasi Viswanathar Gateway',
      taglineTa: 'காசி விஸ்வநாதர் நுழைவாயில்',
      responseMinutes: 10,
      coordinates: { x: 206, y: 664 },
      availableCabs: 32,
      topRoutes: ['Courtallam Tours', 'To Sankarankovil', 'To Trivandrum'],
      topRoutesTa: ['குற்றாலம் சுற்றுலா', 'சங்கரன்கோவிலுக்கு', 'திருவனந்தபுரத்திற்கு'],
      labelDx: -12,
      labelDy: 4,
      labelAnchor: 'end'
    },
    {
      id: 'courtallam',
      name: 'Courtallam',
      nameTa: 'குற்றாலம்',
      district: 'Tenkasi Dist',
      districtTa: 'தென்காசி மாவட்டம்',
      tagline: 'Spa of South India & Waterfalls Hub',
      taglineTa: 'தென்னிந்தியாவின் ஸ்பா அருவி நகரம்',
      responseMinutes: 12,
      coordinates: { x: 196, y: 674 },
      availableCabs: 24,
      topRoutes: ['Five Falls / Main Falls', 'To Sankarankovil', 'To Tenkasi'],
      topRoutesTa: ['ஐந்தருவி / மெயின் அருவி', 'சங்கரன்கோவிலுக்கு', 'தென்காசிக்கு'],
      labelDx: -12,
      labelDy: 14,
      labelAnchor: 'end'
    },
    {
      id: 'rajapalayam',
      name: 'Rajapalayam',
      nameTa: 'ராஜபாளையம்',
      district: 'Virudhunagar Dist',
      districtTa: 'விருதுநகர் மாவட்டம்',
      tagline: 'Textile Capital & Ayyanar Falls Hub',
      taglineTa: 'ஜவுளி நகரம் & அய்யனார் கோவில்',
      responseMinutes: 10,
      coordinates: { x: 232, y: 614 },
      availableCabs: 28,
      topRoutes: ['To Madurai Airport', 'To Sankarankovil', 'To Coimbatore'],
      topRoutesTa: ['மதுரை விமான நிலையம்', 'சங்கரன்கோவிலுக்கு', 'கோயம்புத்தூருக்கு'],
      labelDx: 12,
      labelDy: -4,
      labelAnchor: 'start'
    },
    {
      id: 'srivilliputhur',
      name: 'Srivilliputhur',
      nameTa: 'ஸ்ரீவில்லிபுத்தூர்',
      district: 'Virudhunagar Dist',
      districtTa: 'விருதுநகர் மாவட்டம்',
      tagline: 'Andal Temple Tower & Palkova Capital',
      taglineTa: 'ஆண்டாள் கோபுரம் & பால்கோவா நகரம்',
      responseMinutes: 12,
      coordinates: { x: 240, y: 600 },
      availableCabs: 22,
      topRoutes: ['To Madurai', 'To Sankarankovil', 'To Tenkasi'],
      topRoutesTa: ['மதுரைக்கு', 'சங்கரன்கோவிலுக்கு', 'தென்காசிக்கு'],
      labelDx: 12,
      labelDy: -6,
      labelAnchor: 'start'
    },
    {
      id: 'kovilpatti',
      name: 'Kovilpatti',
      nameTa: 'கோவில்பட்டி',
      district: 'Thoothukudi Dist',
      districtTa: 'தூத்துக்குடி மாவட்டம்',
      tagline: 'Kadalaimittai City & NH44 Hub',
      taglineTa: 'கடலைமிட்டாய் நகரம் & NH44 சந்திப்பு',
      responseMinutes: 12,
      coordinates: { x: 270, y: 646 },
      availableCabs: 30,
      topRoutes: ['To Sankarankovil', 'To Tirunelveli', 'To Madurai'],
      topRoutesTa: ['சங்கரன்கோவிலுக்கு', 'திருநெல்வேலிக்கு', 'மதுரைக்கு'],
      labelDx: 12,
      labelDy: -4,
      labelAnchor: 'start'
    },
    {
      id: 'tirunelveli',
      name: 'Tirunelveli',
      nameTa: 'திருநெல்வேலி',
      district: 'Tirunelveli Dist',
      districtTa: 'திருநெல்வேலி மாவட்டம்',
      tagline: 'Halwa City & Railway Junction Hub',
      taglineTa: 'அல்வா நகரம் & ரயில்வே சந்திப்பு',
      responseMinutes: 10,
      coordinates: { x: 255, y: 690 },
      availableCabs: 60,
      topRoutes: ['To Chennai', 'To Bangalore', 'To Sankarankovil', 'To Nagercoil'],
      topRoutesTa: ['சென்னைக்கு', 'பெங்களூருக்கு', 'சங்கரன்கோவிலுக்கு', 'நாகர்கோவிலுக்கு'],
      labelDx: -14,
      labelDy: 14,
      labelAnchor: 'end'
    },
    {
      id: 'tuticorin',
      name: 'Tuticorin',
      nameTa: 'தூத்துக்குடி',
      district: 'Thoothukudi Dist',
      districtTa: 'தூத்துக்குடி மாவட்டம்',
      tagline: 'Pearl City & Port Airport Hub',
      taglineTa: 'முத்து நகரம் & துறைமுக மையம்',
      responseMinutes: 15,
      coordinates: { x: 330, y: 654 },
      availableCabs: 35,
      topRoutes: ['To Tiruchendur', 'Airport Drops', 'To Tirunelveli'],
      topRoutesTa: ['திருச்செந்தூருக்கு', 'விமான நிலையம்', 'திருநெல்வேலிக்கு'],
      labelDx: 12,
      labelDy: 4,
      labelAnchor: 'start'
    },
    {
      id: 'tiruchendur',
      name: 'Tiruchendur',
      nameTa: 'திருச்செந்தூர்',
      district: 'Thoothukudi Dist',
      districtTa: 'தூத்துக்குடி மாவட்டம்',
      tagline: 'Lord Murugan Shore Temple',
      taglineTa: 'முருகன் கடற்கரை திருக்கோவில்',
      responseMinutes: 15,
      coordinates: { x: 318, y: 672 },
      availableCabs: 26,
      topRoutes: ['To Sankarankovil', 'To Tirunelveli', 'To Madurai'],
      topRoutesTa: ['சங்கரன்கோவிலுக்கு', 'திருநெல்வேலிக்கு', 'மதுரைக்கு'],
      labelDx: 12,
      labelDy: 12,
      labelAnchor: 'start'
    },
    {
      id: 'kanyakumari',
      name: 'Kanyakumari',
      nameTa: 'கன்னியாகுமரி',
      district: 'Kanniyakumari Dist',
      districtTa: 'கன்னியாகுமரி மாவட்டம்',
      tagline: 'Cape Comorin & Triveni Sangam',
      taglineTa: 'முக்கடல் சங்கமம் & விவேகானந்தர் பாறை',
      responseMinutes: 20,
      coordinates: { x: 240, y: 734 },
      availableCabs: 35,
      topRoutes: ['To Tiruchendur', 'To Tirunelveli', 'To Sankarankovil'],
      topRoutesTa: ['திருச்செந்தூருக்கு', 'திருநெல்வேலிக்கு', 'சங்கரன்கோவிலுக்கு'],
      labelDx: 14,
      labelDy: 4,
      labelAnchor: 'start'
    },
    {
      id: 'madurai',
      name: 'Madurai',
      nameTa: 'மதுரை',
      district: 'Madurai Dist',
      districtTa: 'மதுரை மாவட்டம்',
      tagline: 'Temple City & Major Airport Hub',
      taglineTa: 'மீனாட்சி அம்மன் கோவில் & விமான நிலையம்',
      responseMinutes: 15,
      coordinates: { x: 280, y: 565 },
      availableCabs: 75,
      topRoutes: ['Airport Drops', 'To Rameswaram', 'To Sankarankovil', 'To Kodaikanal'],
      topRoutesTa: ['விமான நிலைய டிராப்', 'ராமேஸ்வரத்திற்கு', 'சங்கரன்கோவிலுக்கு', 'கொடைக்கானலுக்கு'],
      labelDx: 12,
      labelDy: 4,
      labelAnchor: 'start'
    },
    {
      id: 'dindigul',
      name: 'Dindigul',
      nameTa: 'திண்டுக்கல்',
      district: 'Dindigul Dist',
      districtTa: 'திண்டுக்கல் மாவட்டம்',
      tagline: 'Lock City & Kodaikanal Foothills',
      taglineTa: 'பூட்டு நகரம் & கொடைக்கானல் நுழைவு',
      responseMinutes: 18,
      coordinates: { x: 270, y: 480 },
      availableCabs: 30,
      topRoutes: ['To Kodaikanal', 'To Madurai', 'To Trichy'],
      topRoutesTa: ['கொடைக்கானலுக்கு', 'மதுரைக்கு', 'திருச்சிக்கு'],
      labelDx: 10,
      labelDy: 4,
      labelAnchor: 'start'
    },
    {
      id: 'kodaikanal',
      name: 'Kodaikanal',
      nameTa: 'கொடைக்கானல்',
      district: 'Dindigul Dist',
      districtTa: 'திண்டுக்கல் மாவட்டம்',
      tagline: 'Princess of Hill Stations',
      taglineTa: 'மலைகளின் இளவரசி சுற்றுலா மையம்',
      responseMinutes: 25,
      coordinates: { x: 205, y: 500 },
      availableCabs: 20,
      topRoutes: ['Sightseeing Tours', 'To Madurai Airport', 'To Coimbatore'],
      topRoutesTa: ['சுற்றுலா தலங்கள்', 'மதுரை ஏர்போர்ட்', 'கோயம்புத்தூருக்கு'],
      labelDx: -10,
      labelDy: 4,
      labelAnchor: 'end'
    },
    {
      id: 'rameswaram',
      name: 'Rameswaram',
      nameTa: 'ராமேஸ்வரம்',
      district: 'Ramanathapuram Dist',
      districtTa: 'ராமநாதபுரம் மாவட்டம்',
      tagline: 'Dhanushkodi & Holy Jyotirlinga Shrine',
      taglineTa: 'தனுஷ்கோடி & ராமநாதசுவாமி திருக்கோவில்',
      responseMinutes: 25,
      coordinates: { x: 550, y: 558 },
      availableCabs: 25,
      topRoutes: ['Pamban Bridge Tour', 'To Madurai Airport', 'To Tiruchendur'],
      topRoutesTa: ['பாம்பன் பாலம் டூர்', 'மதுரை விமான நிலையம்', 'திருச்செந்தூருக்கு'],
      labelDx: 0,
      labelDy: -12,
      labelAnchor: 'middle'
    },
    {
      id: 'trichy',
      name: 'Trichy',
      nameTa: 'திருச்சிராப்பள்ளி',
      district: 'Tiruchirappalli Dist',
      districtTa: 'திருச்சி மாவட்டம்',
      tagline: 'Rockfort & Central Tamil Nadu Hub',
      taglineTa: 'மலைக்கோட்டை & மத்திய தமிழக மையம்',
      responseMinutes: 20,
      coordinates: { x: 370, y: 395 },
      availableCabs: 45,
      topRoutes: ['To Sankarankovil', 'To Chennai', 'To Thanjavur'],
      topRoutesTa: ['சங்கரன்கோவிலுக்கு', 'சென்னைக்கு', 'தஞ்சாவூருக்கு'],
      labelDx: -12,
      labelDy: -6,
      labelAnchor: 'end'
    },
    {
      id: 'thanjavur',
      name: 'Thanjavur',
      nameTa: 'தஞ்சாவூர்',
      district: 'Thanjavur Dist',
      districtTa: 'தஞ்சாவூர் மாவட்டம்',
      tagline: 'Brihadeeswarar Big Temple & Cultural Capital',
      taglineTa: 'பெரிய கோவில் & சோழர் கலாச்சார மையம்',
      responseMinutes: 20,
      coordinates: { x: 430, y: 390 },
      availableCabs: 28,
      topRoutes: ['To Kumbakonam', 'To Trichy Airport', 'To Chennai'],
      topRoutesTa: ['கும்பகோணத்திற்கு', 'திருச்சி ஏர்போர்ட்', 'சென்னைக்கு'],
      labelDx: 10,
      labelDy: 4,
      labelAnchor: 'start'
    },
    {
      id: 'coimbatore',
      name: 'Coimbatore',
      nameTa: 'கோயம்புத்தூர்',
      district: 'Coimbatore Dist',
      districtTa: 'கோவை மாவட்டம்',
      tagline: 'Manchester of South India & Kongu Belt',
      taglineTa: 'தொழில் நகரம் & கொங்கு மண்டல மையம்',
      responseMinutes: 20,
      coordinates: { x: 120, y: 360 },
      availableCabs: 40,
      topRoutes: ['To Sankarankovil', 'To Ooty Hills', 'To Tiruppur'],
      topRoutesTa: ['சங்கரன்கோவிலுக்கு', 'ஊட்டி மலைப்பாதை', 'திருப்பூருக்கு'],
      labelDx: -10,
      labelDy: 4,
      labelAnchor: 'end'
    },
    {
      id: 'tiruppur',
      name: 'Tiruppur',
      nameTa: 'திருப்பூர்',
      district: 'Tiruppur Dist',
      districtTa: 'திருப்பூர் மாவட்டம்',
      tagline: 'Knitwear & Apparel Export Capital',
      taglineTa: 'பின்னலாடை ஏற்றுமதி தலைநகரம்',
      responseMinutes: 20,
      coordinates: { x: 165, y: 365 },
      availableCabs: 28,
      topRoutes: ['To Coimbatore Airport', 'To Erode', 'To Sankarankovil'],
      topRoutesTa: ['கோவை விமான நிலையம்', 'ஈரோட்டிற்கு', 'சங்கரன்கோவிலுக்கு'],
      labelDx: 10,
      labelDy: 4,
      labelAnchor: 'start'
    },
    {
      id: 'erode',
      name: 'Erode',
      nameTa: 'ஈரோடு',
      district: 'Erode Dist',
      districtTa: 'ஈரோடு மாவட்டம்',
      tagline: 'Turmeric City & Cauvery River Belt',
      taglineTa: 'மஞ்சள் மாநகரம் & காவேரி நதிக்கரை',
      responseMinutes: 20,
      coordinates: { x: 210, y: 315 },
      availableCabs: 28,
      topRoutes: ['To Salem', 'To Coimbatore', 'To Bhavani Sangam'],
      topRoutesTa: ['சேலத்திற்கு', 'கோவைக்கு', 'பவானி கூடுதுறைக்கு'],
      labelDx: -10,
      labelDy: -6,
      labelAnchor: 'end'
    },
    {
      id: 'salem',
      name: 'Salem',
      nameTa: 'சேலம்',
      district: 'Salem Dist',
      districtTa: 'சேலம் மாவட்டம்',
      tagline: 'Steel & Mango City • Yercaud Gateway',
      taglineTa: 'மாம்பழ நகரம் & ஏற்காடு நுழைவாயில்',
      responseMinutes: 20,
      coordinates: { x: 275, y: 285 },
      availableCabs: 32,
      topRoutes: ['To Yercaud', 'To Bangalore', 'To Sankarankovil'],
      topRoutesTa: ['ஏற்காட்டிற்கு', 'பெங்களூருக்கு', 'சங்கரன்கோவிலுக்கு'],
      labelDx: 10,
      labelDy: 4,
      labelAnchor: 'start'
    },
    {
      id: 'vellore',
      name: 'Vellore',
      nameTa: 'வேலூர்',
      district: 'Vellore Dist',
      districtTa: 'வேலூர் மாவட்டம்',
      tagline: 'CMC Hospital & Sripuram Golden Temple',
      taglineTa: 'சி.எம்.சி மருத்துவமனை & பொற்கோவில்',
      responseMinutes: 25,
      coordinates: { x: 400, y: 130 },
      availableCabs: 25,
      topRoutes: ['To Chennai Airport', 'To Tiruvannamalai', 'To Bangalore'],
      topRoutesTa: ['சென்னை விமான நிலையம்', 'திருவண்ணாமலைக்கு', 'பெங்களூருக்கு'],
      labelDx: -10,
      labelDy: -4,
      labelAnchor: 'end'
    },
    {
      id: 'chennai',
      name: 'Chennai',
      nameTa: 'சென்னை',
      district: 'Chennai Metro',
      districtTa: 'சென்னை பெருநகரம்',
      tagline: 'Capital Outstation Destination & IT Hub',
      taglineTa: 'தலைநகரம் & முக்கிய ஐ.டி பெருநகரம்',
      responseMinutes: 25,
      coordinates: { x: 545, y: 92 },
      availableCabs: 55,
      topRoutes: ['To Tirunelveli', 'To Sankarankovil Return', 'To Madurai'],
      topRoutesTa: ['திருநெல்வேலிக்கு', 'சங்கரன்கோவிலுக்கு', 'மதுரைக்கு'],
      labelDx: -12,
      labelDy: 4,
      labelAnchor: 'end'
    },
    {
      id: 'puducherry',
      name: 'Puducherry',
      nameTa: 'புதுச்சேரி',
      district: 'Puducherry UT',
      districtTa: 'புதுச்சேரி யூனியன் பிரதேசம்',
      tagline: 'Promenade Beach & Auroville Haven',
      taglineTa: 'கடற்கரை சாலை & ஆரோவில் ஆன்மீக பூமி',
      responseMinutes: 25,
      coordinates: { x: 508, y: 222 },
      availableCabs: 22,
      topRoutes: ['To Chennai ECR', 'To Cuddalore', 'To Chidambaram'],
      topRoutesTa: ['சென்னை ஈ.சி.ஆர்', 'கடலூருக்கு', 'சிதம்பரத்திற்கு'],
      labelDx: 10,
      labelDy: 4,
      labelAnchor: 'start'
    }
  ];

  readonly testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Murugesan Pandian',
      nameTa: 'முருகேசன் பாண்டியன்',
      location: 'Sankarankovil',
      locationTa: 'சங்கரன்கோவில்',
      rating: 5,
      date: 'Recent Trip',
      dateTa: 'சமீபத்திய பயணம்',
      tripType: 'Temple Darshan & Madurai Airport',
      tripTypeTa: 'கோவில் தரிசனம் & மதுரை ஏர்போர்ட்',
      avatar: '👨‍💼',
      comment: 'Best taxi service in Sankarankovil! We booked an Innova for our family temple visit and Madurai airport drop. Driver Selvam was punctual, drove very safely, and the vehicle was spotless. Honest ₹14/km rate with no hidden charges.',
      commentTa: 'சங்கரன்கோவிலில் மிகச் சிறந்த டாக்ஸி சேவை! குடும்பத்துடன் கோவில் தரிசனம் மற்றும் மதுரை ஏர்போர்ட் செல்ல இனோவா புக் செய்தோம். ஓட்டுநர் செல்வம் சரியான நேரத்திற்கு வந்தார், மிகவும் பாதுகாப்பாக ஓட்டினார். வண்டி மிகத் தூய்மையாக இருந்தது. ₹14/கிமீ நியாயமான கட்டணம், கூடுதல் மறைமுக கட்டணம் எதுவும் இல்லை.'
    },
    {
      id: '2',
      name: 'Anitha Venkatesh',
      nameTa: 'அனிதா வெங்கடேஷ்',
      location: 'Chennai (Travelled to Sankarankovil)',
      locationTa: 'சென்னை (சங்கரன்கோவிலுக்கு பயணம்)',
      rating: 5,
      date: '1 week ago',
      dateTa: '1 வாரத்திற்கு முன்',
      tripType: 'Outstation Round Trip',
      tripTypeTa: 'வெளியூர் இருவழி பயணம்',
      avatar: '👩‍🏫',
      comment: 'Travelled from Chennai to Sankarankovil Gomathi Amman Temple festival. Rider Call Taxi provided a brand-new Swift Dzire. The driver was extremely polite, stopped at clean restaurants, and helped my elderly parents comfortably.',
      commentTa: 'சென்னையிலிருந்து சங்கரன்கோவில் கோமதி அம்மன் கோவில் திருவிழாவிற்கு வந்தோம். புதிய ஸ்விப்ட் டிசையர் வண்டி கொடுத்தார்கள். ஓட்டுநர் மிக மரியாதையாக நடந்து கொண்டார், வழியில் நல்ல உணவகங்களில் நிறுத்தினார். முதிய பெற்றோர்களுக்கு மிகவும் உதவியாக இருந்தார்.'
    },
    {
      id: '3',
      name: 'Dr. K. Rajasekaran',
      nameTa: 'டாக்டர் கே. ராஜசேகரன்',
      location: 'Tenkasi',
      locationTa: 'தென்காசி',
      rating: 5,
      date: '2 weeks ago',
      dateTa: '2 வாரங்களுக்கு முன்',
      tripType: 'Trivandrum Airport Drop',
      tripTypeTa: 'திருவனந்தபுரம் ஏர்போர்ட் டிராப்',
      avatar: '👨‍⚕️',
      comment: 'Needed an urgent 3 AM pickup from Tenkasi to catch a morning flight from Trivandrum. Rider Call Taxi confirmed within 2 minutes on WhatsApp and the cab arrived 15 minutes before time. Truly dependable 24/7 service!',
      commentTa: 'தென்காசியிலிருந்து அதிகாலை 3 மணிக்கு திருவனந்தபுரம் விமானம் பிடிக்க அவசர வண்டி தேவைப்பட்டது. வாட்ஸ்அப்பில் 2 நிமிடத்தில் புக் ஆனது. குறிப்பிட்ட நேரத்திற்கு 15 நிமிடம் முன்பே டாக்ஸி வந்துவிட்டது. 24/7 உண்மையிலேயே நம்பகமான சேவை!'
    },
    {
      id: '4',
      name: 'Sundararajan M.',
      nameTa: 'சுந்தரராஜன் எம்.',
      location: 'Rajapalayam',
      locationTa: 'ராஜபாளையம்',
      rating: 5,
      date: 'Last month',
      dateTa: 'கடந்த மாதம்',
      tripType: 'Wedding Convoy (3 Vehicles)',
      tripTypeTa: 'திருமண வாகன வரிசை (3 கார்கள்)',
      avatar: '🧔',
      comment: 'Booked 2 Innovas and 1 Tempo Traveller for our sister wedding in Rajapalayam. Coordination was seamless, drivers were verified and well dressed, and all guests were full of praise. Highly recommended!',
      commentTa: 'ராஜபாளையத்தில் என் தங்கை திருமணத்திற்கு 2 இனோவா மற்றும் 1 டெம்போ டிராவலர் புக் செய்தோம். சரியான திட்டமிடல், நல்ல ஆடைகளுடன் பண்பான ஓட்டுநர்கள். உறவினர்கள் அனைவரும் பாராட்டினர். மிகச் சிறந்த சேவை!'
    }
  ];

  // Distance - Included Travel Time Formula (Image 3 Chart)
  // 20 km = 1:30 (90 min), 100 km = 3:30 (210 min), 120 km = 4:00 (240 min); +30 min for each additional 20 km
  getIncludedMinutes(distanceKm: number): number {
    const d = Math.max(20, Math.round(distanceKm));
    return Math.round(60 + d * 1.5);
  }

  formatIncludedTime(minutes: number, isTamil: boolean = false): string {
    const hrs = Math.floor(minutes / 60);
    const mins = minutes % 60;
    if (isTamil) {
      return mins > 0 ? `${hrs} மணி ${mins} நிமி` : `${hrs} மணி நேரம்`;
    }
    const padMins = mins < 10 ? `0${mins}` : `${mins}`;
    return `${hrs}:${padMins} hrs`;
  }

  getDistanceTimeChart(): { km: number; time: string; minutes: number }[] {
    const rows: { km: number; time: string; minutes: number }[] = [];
    for (let km = 20; km <= 1000; km += 20) {
      const minutes = this.getIncludedMinutes(km);
      const hrs = Math.floor(minutes / 60);
      const mins = minutes % 60;
      const padMins = mins < 10 ? `0${mins}` : `${mins}`;
      rows.push({
        km,
        time: `${hrs}:${padMins}`,
        minutes
      });
    }
    return rows;
  }

  // Live Fare Calculation with AC / Non-AC, Round Trip First 20 KM Package, and Extra Hours
  calculateFare(
    distanceKm: number, 
    vehicleId: string = 'sedan', 
    tripType: 'oneway' | 'round' = 'oneway',
    isAc: boolean = true,
    extraHours: number = 0
  ): FareBreakup {
    const vehicle = this.vehicleCategories.find(v => v.id === vehicleId) || this.vehicleCategories[1];
    const isSuv = vehicle.id === 'suv';
    const isComingSoon = !!vehicle.isComingSoon;

    // Rates based on AC / Non-AC selection
    // Sedan: Non-AC ₹14, AC ₹15 | SUV: Non-AC ₹18, AC ₹19
    const standardRate = isAc 
      ? (vehicle.rateAcPerKm ?? (isSuv ? 19 : 15)) 
      : (vehicle.rateNonAcPerKm ?? (isSuv ? 18 : 14));

    // Waiting rate per hour (Sedan ₹80/hr, SUV ₹100/hr)
    const waitingRatePerHour = vehicle.waitingHourlyRate ?? (isSuv ? 100 : 80);

    // Trip distance
    const d = Math.max(1, Math.round(distanceKm));
    
    // Included travel time based on distance chart (100 km -> 3:30, 120 km -> 4:00)
    const includedMinutes = this.getIncludedMinutes(d);
    const includedTimeFormatted = this.formatIncludedTime(includedMinutes);

    // Extra hours charge
    const safeExtraHours = Math.max(0, extraHours || 0);
    const waitingFare = safeExtraHours * waitingRatePerHour;

    if (isComingSoon) {
      return {
        distanceKm: d,
        ratePerKm: 0,
        baseFare: 0,
        driverAllowance: 0,
        estimatedToll: 0,
        estimatedTotal: 0,
        vehicleName: vehicle.name,
        tripType: tripType === 'round' ? 'Round Trip' : 'One Way',
        isAc,
        isComingSoon: true,
        includedMinutes,
        includedTimeFormatted,
        extraHours: safeExtraHours,
        waitingFare: 0,
        waitingRatePerHour
      };
    }

    const basePackage = vehicle.roundTripFirst20Km ?? (isSuv ? 600 : 450);
    let baseFare = 0;
    let effectiveRatePerKm = standardRate;
    let first20KmPackage = 0;
    let isOneWayUnder50 = false;
    let isOneWayAbove50 = false;
    let isRoundUnder20 = false;
    let isRoundAbove20 = false;
    let extraKm = 0;

    if (tripType === 'round') {
      first20KmPackage = basePackage;
      effectiveRatePerKm = standardRate;
      if (d <= 20) {
        // Round trip under 20 km: ₹450 flat (or ₹600 for SUV)
        isRoundUnder20 = true;
        baseFare = basePackage;
        extraKm = 0;
      } else {
        // Round trip 20 + extra km: ₹450 + extra per km charges
        isRoundAbove20 = true;
        extraKm = d - 20;
        baseFare = basePackage + Math.round(extraKm * standardRate);
      }
    } else {
      // One Way Trip
      if (d <= 50) {
        // One way under 50 km: ₹450 + per km charges
        isOneWayUnder50 = true;
        first20KmPackage = basePackage;
        effectiveRatePerKm = standardRate;
        baseFare = basePackage + Math.round(d * standardRate);
      } else {
        // Above 50 km: only per km * 2 charges (e.g. 14 -> 28, 15 -> 30, 18 -> 36, 19 -> 38)
        isOneWayAbove50 = true;
        first20KmPackage = 0;
        effectiveRatePerKm = standardRate * 2;
        baseFare = Math.round(d * effectiveRatePerKm);
      }
    }

    const estimatedTotal = baseFare + waitingFare;

    return {
      distanceKm: d,
      ratePerKm: effectiveRatePerKm,
      baseFare,
      driverAllowance: 0,
      estimatedToll: 0,
      estimatedTotal,
      vehicleName: vehicle.name,
      tripType: tripType === 'round' ? 'Round Trip' : 'One Way',
      isAc,
      isComingSoon: false,
      first20KmPackage,
      includedMinutes,
      includedTimeFormatted,
      extraHours: safeExtraHours,
      waitingFare,
      waitingRatePerHour,
      isOneWayUnder50,
      isOneWayAbove50,
      isRoundUnder20,
      isRoundAbove20,
      extraKm
    };
  }

  // Pre-filled WhatsApp Enquiry Link Generator
  getWhatsAppEnquiryUrl(details: {
    name?: string;
    pickup?: string;
    destination?: string;
    date?: string;
    vehicle?: string;
    tripType?: string;
    isAc?: boolean;
    includedTime?: string;
    extraHours?: number;
    estimatedFare?: number;
    distance?: number;
    message?: string;
  }): string {
    let text = `🚕 *NEW TAXI ENQUIRY - RIDER CALL TAXI*\n`;
    text += `📍 *Service Area:* Sankarankovil / Tamil Nadu\n`;
    text += `------------------------------------\n`;
    if (details.name) text += `👤 *Customer Name:* ${details.name}\n`;
    if (details.pickup) text += `🛫 *Pickup Location:* ${details.pickup}\n`;
    if (details.destination) text += `🛬 *Drop Destination:* ${details.destination}\n`;
    if (details.tripType) text += `🔄 *Trip Type:* ${details.tripType}\n`;
    if (details.vehicle) text += `🚗 *Selected Vehicle:* ${details.vehicle}\n`;
    if (details.isAc !== undefined) text += `❄️ *Climate:* ${details.isAc ? 'AC Comfort' : 'Non-AC'}\n`;
    if (details.date) text += `📅 *Travel Date:* ${details.date}\n`;
    if (details.distance) text += `📏 *Est. Distance:* ${details.distance} KM\n`;
    if (details.includedTime) text += `⏱️ *Included Time:* ${details.includedTime}\n`;
    if (details.extraHours && details.extraHours > 0) text += `⏳ *Extra Hours:* ${details.extraHours} hrs\n`;
    if (details.estimatedFare) text += `💰 *Est. Fare:* ₹${details.estimatedFare}\n`;
    if (details.message) text += `📝 *Notes:* ${details.message}\n`;
    text += `------------------------------------\n`;
    text += `Please confirm cab availability and exact quote. Thank you!`;

    const encoded = encodeURIComponent(text);
    return `https://wa.me/${this.company.rawPhone1}?text=${encoded}`;
  }
}
