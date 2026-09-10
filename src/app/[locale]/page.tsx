import Hero from '@/components/home/Hero';
import QuickSearch from '@/components/home/QuickSearch';
import BrandsMarquee from '@/components/home/BrandsMarquee';
import FeaturedVehicles from '@/components/home/FeaturedVehicles';
import WhyChooseUs from '@/components/home/WhyChooseUs';
import HowItWorks from '@/components/home/HowItWorks';
import Reviews from '@/components/home/Reviews';
import LocationMap from '@/components/home/LocationMap';
import FaqSection from '@/components/home/FaqSection';
import FinalCta from '@/components/home/FinalCta';
import ScrollReveal from '@/components/home/ScrollReveal';
import { getVehicles, getReviews, getFaqs, getSiteConfig } from '@/lib/cms';

export default async function HomePage() {
  const [vehicles, reviews, faqs, siteConfig] = await Promise.all([
    getVehicles(),
    getReviews(),
    getFaqs(),
    getSiteConfig(),
  ]);

  return (
    <main>
      <Hero whatsappNumber={siteConfig.whatsappNumber} />
      <QuickSearch />
      <BrandsMarquee />
      <FeaturedVehicles vehicles={vehicles} />
      <WhyChooseUs />
      <HowItWorks />
      <Reviews reviews={reviews} />
      <LocationMap whatsappNumber={siteConfig.whatsappNumber} address={siteConfig.address} locationUrl={siteConfig.locationUrl} />
      <FaqSection faqs={faqs} />
      <FinalCta whatsappNumber={siteConfig.whatsappNumber} />
      <ScrollReveal />
    </main>
  );
}

