import type { Metadata } from 'next';
import { Fraunces, Manrope } from 'next/font/google';
import '../globals.css';
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
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  const siteConfig = await getSiteConfig();
  const whatsappNumber = siteConfig.whatsappNumber;
  const email = siteConfig.email;
  const phoneNumber = siteConfig.phoneNumber || siteConfig.whatsappNumber;
  const address = siteConfig.address;
  const locationUrl = siteConfig.locationUrl;

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale} dir={dir} className={`${manrope.variable} ${fraunces.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbar whatsappNumber={whatsappNumber} locale={locale} />
          <main className="main-content">
            {children}
          </main>
          <Footer whatsappNumber={whatsappNumber} phoneNumber={phoneNumber} email={email} address={address} locationUrl={locationUrl} />
          <FloatingWhatsApp whatsappNumber={whatsappNumber} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
