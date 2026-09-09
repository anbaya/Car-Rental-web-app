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

export default function HomePage() {
  return (
    <main>
      <Hero />
      <QuickSearch />
      <BrandsMarquee />
      <FeaturedVehicles />
      <WhyChooseUs />
      <HowItWorks />
      <Reviews />
      <LocationMap />
      <FaqSection />
      <FinalCta />
      <ScrollReveal />
    </main>
  );
}
