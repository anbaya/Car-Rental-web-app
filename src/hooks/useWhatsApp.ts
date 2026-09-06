import { RentalRequest } from '../types';
import { siteConfig } from '../config/site';

export const useWhatsApp = () => {
  const generateUrl = (request: RentalRequest) => {
    const text = `Hello, I would like to request a rental:%0A%0AVehicle: ${request.vehicleId}%0APickup location: ${request.pickupLocation}%0APickup: ${request.pickupDate} at ${request.pickupTime}%0AReturn: ${request.returnDate} at ${request.returnTime}%0A%0AName: ${request.customerName}%0AWhatsApp: ${request.customerPhone}%0ANotes: ${request.notes || ''}`;
    return `https://wa.me/${siteConfig.whatsappNumber}?text=${text}`;
  };

  const openWhatsApp = (request: RentalRequest) => {
    window.open(generateUrl(request), '_blank');
  };

  return { generateUrl, openWhatsApp };
};
