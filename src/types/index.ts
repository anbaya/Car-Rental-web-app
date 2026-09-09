export interface Vehicle {
  id: string;
  name: string;
  type: string;
  pricePerDay: number;
  transmission: 'Automatic' | 'Manual';
  seats: number;
  doors: number;
  fuel: string;
  hasAc: boolean;
  /** Marks vehicle for display in the homepage featured section */
  featured?: boolean;
  images: string[];
  description: string;
  included: string[];
  conditions: string[];
}

export interface Review {
  id: string;
  quote: string;
  name: string;
  country: string;
  /** Single letter shown in the avatar circle */
  initial: string;
  rating: number;
}

export interface FaqEntry {
  id: string;
  category: string;
  question: string;
  answer: string;
  /** Display sort order */
  order: number;
}

export interface RentalRequest {
  vehicleId: string;
  pickupDate: string;
  pickupTime: string;
  returnDate: string;
  returnTime: string;
  pickupLocation: string;
  returnLocation: string;
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
  notes?: string;
}

export interface SiteConfig {
  name: string;
  email: string;
  whatsappNumber: string;
  phoneNumber: string;
  address: string;
  locationUrl: string;
  locations: string[];
  businessHours: string;
}
