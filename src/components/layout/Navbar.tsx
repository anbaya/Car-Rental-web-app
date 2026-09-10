'use client';
import { useState } from 'react';
import { usePathname, Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';

export default function Navbar({ whatsappNumber, locale = 'en' }: { whatsappNumber: string, locale?: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('Navbar');

  if (pathname?.startsWith('/admin')) {
    return null;
  }
  
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a href="/" className="brand">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 30 L6 18 Q20 6 34 18 L34 30" />
              <path d="M6 30 L34 30" />
              <path d="M14 30 L14 22 Q20 17 26 22 L26 30" />
            </svg>
            Atlas Drive
          </a>
          <nav className="nav-links">
            <Link href="/">{t('home')}</Link>
            <Link href="/cars">{t('cars')}</Link>
            <Link href="/about">{t('about')}</Link>
            <Link href="/faq">{t('faq')}</Link>
            <Link href="/contact">{t('contact')}</Link>
          </nav>
          <div className="nav-right">
            <div className="lang-switch">
              <Link href={pathname} locale="en" aria-current={locale === 'en' ? 'true' : undefined}>EN</Link>
              <Link href={pathname} locale="fr" aria-current={locale === 'fr' ? 'true' : undefined}>FR</Link>
              <Link href={pathname} locale="ar" aria-current={locale === 'ar' ? 'true' : undefined}>AR</Link>
            </div>
            <a href={getGeneralWhatsAppUrl(whatsappNumber)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20z" />
              </svg>
              {t('whatsapp')}
            </a>
            <button className="nav-burger" id="burgerBtn" onClick={() => setIsOpen(!isOpen)} aria-expanded={isOpen} aria-controls="mobilePanel"
              aria-label="Open menu">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <div id="mobilePanel" className={`mobile-panel ${isOpen ? 'open' : ''}`}>
          <Link href="/" onClick={() => setIsOpen(false)}>{t('home')}</Link>
          <Link href="/cars" onClick={() => setIsOpen(false)}>{t('cars')}</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>{t('about')}</Link>
          <Link href="/faq" onClick={() => setIsOpen(false)}>{t('faq')}</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>{t('contact')}</Link>
        </div>
      </header>
    </>
  );
}
