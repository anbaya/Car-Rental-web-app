import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import './globals.css';
import { defaultLocale } from '@/i18n/config';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/layout/FloatingWhatsApp';

const manrope = Manrope({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const fraunces = Fraunces({
  variable: '--font-serif',
  subsets: ['latin'],
  display: 'swap',
  axes: ['SOFT', 'WONK'],
});
export const metadata: Metadata = {
  metadataBase: new URL('https://atlasdrive-marrakech.com'),
  title: 'Marrakech Car Rental | Reliable Vehicles at Competitive Prices',
  description:
    'Rent a car in Marrakech at competitive prices. Airport pickup available. Browse our fleet of economy cars, SUVs, and vans. Send a request via WhatsApp in minutes.',
  keywords: ['car rental Marrakech', 'location voiture Marrakech', 'rent a car Morocco'],
  openGraph: {
    title: 'Marrakech Car Rental',
    description: 'Reliable vehicles at competitive prices. Airport pickup available.',
    locale: 'en_US',
    type: 'website',
  },
};

import { getSiteConfig } from '@/lib/cms';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteConfig = await getSiteConfig();
  const whatsappNumber = siteConfig.whatsappNumber;
  const email = siteConfig.email;
  const phoneNumber = siteConfig.phoneNumber || siteConfig.whatsappNumber;
  const address = siteConfig.address;
  const locationUrl = siteConfig.locationUrl;

  return (
    <html lang={defaultLocale} className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <Navbar whatsappNumber={whatsappNumber} />
        <main className="main-content">
          {children}
        </main>
        <Footer whatsappNumber={whatsappNumber} phoneNumber={phoneNumber} email={email} address={address} locationUrl={locationUrl} />
        <FloatingWhatsApp whatsappNumber={whatsappNumber} />
      </body>
    </html>
  );
}
