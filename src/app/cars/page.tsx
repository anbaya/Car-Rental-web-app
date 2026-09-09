/**
 * Server component wrapper — fetches vehicle data from CMS
 * then passes it to the interactive client component.
 */
import { getVehicles, getSiteConfig } from '@/lib/cms';
import CarsPageClient from './CarsPageClient';

export default async function CarsPage() {
  const [cars, siteConfig] = await Promise.all([getVehicles(), getSiteConfig()]);
  return <CarsPageClient cars={cars} whatsappNumber={siteConfig.whatsappNumber} />;
}
