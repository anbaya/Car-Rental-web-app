import { getSiteConfig } from '@/lib/cms';
import ContactClient from './ContactClient';

export const metadata = {
  title: 'Contact Us | Marrakech Car Rental',
  description: 'Contact us via WhatsApp, phone, or email to rent a car in Marrakech.',
};

export default async function ContactPage() {
  const siteConfig = await getSiteConfig();
  return <ContactClient whatsappNumber={siteConfig.whatsappNumber} phoneNumber={siteConfig.phoneNumber} email={siteConfig.email} address={siteConfig.address} locationUrl={siteConfig.locationUrl} />;
}
