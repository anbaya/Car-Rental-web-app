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
  images: string[];
  description: string;
  included: string[];
  conditions: string[];
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
  whatsappNumber: string;
  locations: string[];
  businessHours: string;
}
