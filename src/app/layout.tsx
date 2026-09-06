import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { defaultLocale } from '@/i18n/config';

const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={defaultLocale} className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
