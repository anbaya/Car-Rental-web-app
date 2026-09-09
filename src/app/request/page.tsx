import { getSiteConfig } from '@/lib/cms';
import RequestClient from './RequestClient';

export const metadata = {
  title: 'Request a Rental | Marrakech Car Rental',
  description: 'Send a request to rent a car in Marrakech.',
};

export default async function RequestPage() {
  const siteConfig = await getSiteConfig();
  return <RequestClient whatsappNumber={siteConfig.whatsappNumber} />;
}
