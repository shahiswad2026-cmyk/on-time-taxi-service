export interface BusinessConfig {
  name: string;
  location: string;
  whatsappNumber: string;
  displayPhone: string;
  dayRate: string;
  rating: string;
  tagline: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  name: 'On Time Taxi Service',
  location: 'Meghalaya',
  whatsappNumber: '919383329627',
  displayPhone: '+91 93833 29627',
  dayRate: 'Rs 5,000',
  rating: '5.0',
  tagline: 'Reliable rides across Meghalaya',
};

export const getWhatsAppUrl = (customMessage?: string): string => {
  const defaultText = `Hello! I would like to inquire about booking On Time Taxi Service in Meghalaya.`;
  const text = customMessage || defaultText;
  return `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
};

export const getPhoneCallUrl = (): string => {
  return `tel:+${BUSINESS_CONFIG.whatsappNumber}`;
};

export const PLACES_MARQUEE = [
  'Shillong',
  'Sohra (Cherrapunji)',
  'Dawki',
  'Mawlynnong',
  'Shillong Peak',
  'Elephant Falls',
  'Nohkalikai Falls',
  'Umngot River',
];

// Local image paths in public/images
export const PHOTO_1_URL = '/images/car-1.jpg'; // Photo 1 (front view on a hill)
export const PHOTO_2_URL = '/images/car-2.jpg'; // Photo 2 (three-quarter view on a hill)
export const PHOTO_3_URL = '/images/car-3.jpg'; // Photo 3 (front view under a wooden canopy)
export const PHOTO_4_URL = '/images/car-4.jpg'; // Photo 4 (side view on a road at sunset)

export interface CarPhoto {
  id: number;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
}

// 4 Photos of the taxi in exact requested order:
// 1. Front view on a hill (car-1)
// 2. Three-quarter view on a hill (car-2)
// 3. Front view under a wooden canopy (car-3)
// 4. Side view on a road at sunset (car-4)
export const CAR_PHOTOS: CarPhoto[] = [
  {
    id: 1,
    src: PHOTO_1_URL,
    alt: 'White taxi front view on a hill in Meghalaya',
    title: 'Front view on hill',
    subtitle: 'White Maruti Suzuki Ertiga ready for mountain roads',
  },
  {
    id: 2,
    src: PHOTO_2_URL,
    alt: 'White taxi three-quarter view on a hill in Meghalaya',
    title: 'Three-quarter view on hill',
    subtitle: 'Luggage carrier equipped, clean and well-maintained',
  },
  {
    id: 3,
    src: PHOTO_3_URL,
    alt: 'White taxi front view under wooden architectural canopy',
    title: 'Under wooden canopy',
    subtitle: 'Punctual airport transit and city sightseeing',
  },
  {
    id: 4,
    src: PHOTO_4_URL,
    alt: 'White taxi side view on road at sunset in Meghalaya',
    title: 'Side view on road at sunset',
    subtitle: 'Smooth evening journeys across scenic Meghalaya routes',
  },
];

// Targeted photo assignments:
// - Hero card: photo 2 (car-2)
// - Vehicle tab card: photo 1 (car-1)
export const HERO_PHOTO = CAR_PHOTOS[1]; // Photo 2: Three-quarter view on a hill
export const VEHICLE_TAB_PHOTO = CAR_PHOTOS[0]; // Photo 1: Front view on a hill

export const formatDisplayDate = (dateStr: string): string => {
  if (!dateStr) return 'Flexible';
  const parts = dateStr.split('-');
  if (parts.length !== 3) return dateStr;
  const year = parseInt(parts[0], 10);
  const monthIdx = parseInt(parts[1], 10) - 1;
  const day = parseInt(parts[2], 10);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  if (monthIdx < 0 || monthIdx > 11 || isNaN(day) || isNaN(year)) {
    return dateStr;
  }
  return `${day} ${months[monthIdx]} ${year}`;
};

export interface PillarCard {
  id: string;
  smallCaps: string;
  title: string;
  description: string;
  icon: 'tag' | 'message-square' | 'map-pin' | 'shield-check';
}

export const PILLAR_CARDS: PillarCard[] = [
  {
    id: 'pricing',
    smallCaps: 'TRANSPARENT VALUE',
    title: 'Clear pricing',
    description: 'Flat day rate of Rs 5,000 with straightforward route terms.',
    icon: 'tag',
  },
  {
    id: 'booking',
    smallCaps: 'DIRECT CHAT',
    title: 'Easy WhatsApp booking',
    description: 'No complicated forms—confirm your dates directly on chat.',
    icon: 'message-square',
  },
  {
    id: 'routes',
    smallCaps: 'REGIONAL EXPERTISE',
    title: 'Local routes',
    description: 'Smooth navigation to Shillong, Sohra, Dawki, and Mawlynnong.',
    icon: 'map-pin',
  },
  {
    id: 'comfort',
    smallCaps: 'WELL-MAINTAINED',
    title: 'Comfortable ride',
    description: 'A spotless, clean white car ensuring a peaceful mountain journey.',
    icon: 'shield-check',
  },
];

export interface TripCard {
  id: string;
  title: string;
  tag: string;
  description: string;
  whatsappMessage: string;
}

export const TRIP_CARDS: TripCard[] = [
  {
    id: 'shillong',
    title: 'Shillong sightseeing',
    tag: 'City & Viewpoints',
    description: 'Explore local landmarks, scenic viewpoints, and peaceful pine trails across Shillong.',
    whatsappMessage: 'Hello! I am interested in the Shillong sightseeing trip with On Time Taxi Service. Could you please share availability?',
  },
  {
    id: 'sohra',
    title: 'Sohra (Cherrapunji) day trip',
    tag: 'Misty Valleys & Waterfalls',
    description: 'Witness dramatic gorges, iconic waterfalls, and the legendary rain clouds of Sohra.',
    whatsappMessage: 'Hello! I would like to book the Sohra (Cherrapunji) day trip with On Time Taxi Service. What dates are available?',
  },
  {
    id: 'dawki-mawlynnong',
    title: 'Dawki and Mawlynnong day trip',
    tag: 'Crystal River & Clean Village',
    description: 'Discover the transparent waters of Umngot River and the charming footpaths of Mawlynnong.',
    whatsappMessage: 'Hello! I am planning a Dawki and Mawlynnong day trip with On Time Taxi Service. Could you confirm availability?',
  },
];

export interface RateInfoCard {
  id: string;
  title: string;
  badge: string;
  value: string;
  subtext: string;
  ctaText: string;
  whatsappMessage: string;
}

export const RATE_INFO_CARDS: RateInfoCard[] = [
  {
    id: 'day-rate',
    title: 'Day rate',
    badge: 'STANDARD HIRE',
    value: 'Rs 5,000',
    subtext: 'Dedicated full-day vehicle hire for relaxed Meghalaya sightseeing.',
    ctaText: 'Book day rate on WhatsApp',
    whatsappMessage: 'Hello, I want to book On Time Taxi Service at the Rs 5,000 day rate. Please let me know available dates.',
  },
  {
    id: 'fuel-tolls',
    title: 'Fuel, tolls, parking',
    badge: 'EXPENSES',
    value: 'Ask on WhatsApp',
    subtext: 'Route-dependent fuel, toll, and state parking details clarified upfront.',
    ctaText: 'Ask on WhatsApp',
    whatsappMessage: 'Hello, could you please clarify the fuel, tolls, and parking details for our planned travel route?',
  },
  {
    id: 'booking-flow',
    title: 'Booking',
    badge: 'RESERVATION',
    value: 'Message us on WhatsApp',
    subtext: 'Direct communication with your driver for fast confirmation.',
    ctaText: 'Message us on WhatsApp',
    whatsappMessage: 'Hello! I would like to reserve On Time Taxi Service for my upcoming trip to Meghalaya.',
  },
];
