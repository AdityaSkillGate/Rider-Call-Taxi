export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  badge?: string;
  features: string[];
  popular?: boolean;
}

export interface RealFleetCar {
  id: string; // 'car-1', 'car-2', etc.
  name: string;
  nameTa: string;
  model: string;
  regNumber: string; // e.g. 'TN 79 M 7309'
  category: string;
  categoryTa: string;
  ratePerKm: number;
  capacity: string;
  capacityTa: string;
  luggage: string;
  luggageTa: string;
  fuel: string;
  fuelTa: string;
  comfort: string;
  comfortTa: string;
  badge: string;
  badgeTa: string;
  tagline: string;
  taglineTa: string;
  description: string;
  descriptionTa: string;
  features: string[];
  featuresTa: string[];
  framesFolder: string;
  frameCount: number;
  posterFrame: string;
  videoUrl?: string;
  interiorImage?: string;
  specs: {
    seating: number;
    bags: number;
    fuel: string;
    comfort: string;
  };
}

export interface VehicleCategory {
  id: string;
  name: string;
  tagline: string;
  ratePerKm: number;
  rateNonAcPerKm?: number;
  rateAcPerKm?: number;
  roundTripFirst20Km?: number;
  waitingHourlyRate?: number;
  isComingSoon?: boolean;
  capacity: string;
  luggage: string;
  ac: boolean;
  models: string;
  badge?: string;
  description: string;
  features: string[];
  colorHex: string;
  image?: string;
  interiorImage?: string;
  videoUrl?: string;
  specs: {
    seating: number;
    bags: number;
    fuel: string;
    comfort: string;
  };
}

export interface SmartRoute {
  id: string;
  from: string;
  to: string;
  distanceKm: number;
  estimatedDuration: string;
  highway: string;
  startingPrice: number;
  highlight: string;
  keyStops: string[];
  popular: boolean;
}

export interface CityCoverage {
  id: string;
  name: string;
  nameTa?: string;
  district: string;
  districtTa?: string;
  tagline: string;
  taglineTa?: string;
  responseMinutes: number;
  coordinates: { x: number; y: number }; // SVG map coordinates (0 0 600 750)
  availableCabs: number;
  topRoutes: string[];
  topRoutesTa?: string[];
  isHQ?: boolean;
  labelDx?: number;
  labelDy?: number;
  labelAnchor?: 'start' | 'middle' | 'end';
}

export interface Testimonial {
  id: string;
  name: string;
  nameTa?: string;
  location: string;
  locationTa?: string;
  rating: number;
  date: string;
  dateTa?: string;
  comment: string;
  commentTa?: string;
  tripType: string;
  tripTypeTa?: string;
  avatar: string;
}

export interface FareBreakup {
  distanceKm: number;
  ratePerKm: number;
  baseFare: number;
  driverAllowance: number;
  estimatedToll: number;
  estimatedTotal: number;
  vehicleName: string;
  tripType: string;
  isAc?: boolean;
  isComingSoon?: boolean;
  first20KmPackage?: number;
  includedMinutes?: number;
  includedTimeFormatted?: string;
  extraHours?: number;
  waitingFare?: number;
  waitingRatePerHour?: number;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
  actions?: {
    label: string;
    action: string;
    url?: string;
  }[];
}
