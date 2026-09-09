import type { RentalRequest } from '@/types';

// ── Configuration ──────────────────────────────────────────────
// Helper functions to generate WhatsApp URLs

// ── Message Builder ────────────────────────────────────────────
/**
 * Formats a RentalRequest into a clean, readable WhatsApp message string.
 */
export function buildRentalMessage(
  request: RentalRequest,
  vehicleName: string,
  pricePerDay?: number
): string {
  const lines: string[] = [
    '🚗 New Rental Request',
    '',
    `Vehicle: ${vehicleName}`,
  ];

  if (pricePerDay) {
    const pickupDate = new Date(request.pickupDate);
    const returnDate = new Date(request.returnDate);
    const days = Math.max(1, Math.ceil((returnDate.getTime() - pickupDate.getTime()) / (1000 * 60 * 60 * 24)));
    lines.push(`Estimated total: ${days} day${days > 1 ? 's' : ''} × ${pricePerDay} DH = ${days * pricePerDay} DH`);
  }

  lines.push('');
  lines.push(`Pickup: ${request.pickupLocation}`);
  lines.push(`Pickup date: ${formatDate(request.pickupDate)} at ${request.pickupTime}`);
  lines.push(`Return: ${request.returnLocation}`);
  lines.push(`Return date: ${formatDate(request.returnDate)} at ${request.returnTime}`);
  lines.push('');
  lines.push(`Customer: ${request.customerName}`);
  lines.push(`WhatsApp: ${request.customerPhone}`);

  if (request.customerEmail) {
    lines.push(`Email: ${request.customerEmail}`);
  }

  if (request.notes) {
    lines.push('');
    lines.push(`Notes: ${request.notes}`);
  }

  return lines.join('\n');
}

// ── URL Generators ─────────────────────────────────────────────
/**
 * Returns a wa.me URL with a pre-filled rental request message.
 */
export function getRentalWhatsAppUrl(
  whatsappNumber: string,
  request: RentalRequest,
  vehicleName: string,
  pricePerDay?: number
): string {
  const message = buildRentalMessage(request, vehicleName, pricePerDay);
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Returns a wa.me URL with a generic greeting for the "Message us" buttons.
 */
export function getGeneralWhatsAppUrl(whatsappNumber: string): string {
  const message = 'Hello, I\'m interested in renting a car in Marrakech. Could you help me?';
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// ── Helpers ────────────────────────────────────────────────────
function formatDate(dateStr: string): string {
  try {
    const date = new Date(dateStr + 'T00:00:00');
    return date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}
