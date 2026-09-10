'use client';
import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

export default function Footer({ whatsappNumber, phoneNumber, email, address, locationUrl }: { whatsappNumber: string; phoneNumber?: string; email: string; address?: string; locationUrl?: string }) {
  const pathname = usePathname();
  const t = useTranslations('Footer');
  if (pathname?.startsWith('/admin')) {
    return null;
  }

  // Format e.g. "212635390319" to "+212 633 390 319" or similar
  const displayWhatsapp = whatsappNumber.startsWith('+') ? whatsappNumber : `+${whatsappNumber}`;
  const displayPhoneNum = phoneNumber ? (phoneNumber.startsWith('+') ? phoneNumber : `+${phoneNumber}`) : displayWhatsapp;

  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="/" className="brand">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M6 30 L6 18 Q20 6 34 18 L34 30" />
                  <path d="M6 30 L34 30" />
                  <path d="M14 30 L14 22 Q20 17 26 22 L26 30" />
                </svg>
                Atlas Drive
              </a>
              <p>{t('brandDescription')}</p>
            </div>
            <div className="footer-col">
              <h4>{t('explore')}</h4>
              <ul>
                <li><a href="/cars">Cars</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/faq">FAQ</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t('contactTitle')}</h4>
              <ul>
                <li>WhatsApp: {displayWhatsapp}</li>
                <li>Phone: {displayPhoneNum}</li>
                <li><a href={`mailto:${email}`}>{email}</a></li>
                {address && locationUrl ? (
                  <li><a href={locationUrl} target="_blank" rel="noopener noreferrer">{address}</a></li>
                ) : address ? (
                  <li>{address}</li>
                ) : (
                  <li>{t('defaultAddress')}</li>
                )}
              </ul>
            </div>
            <div className="footer-col">
              <h4>{t('legalTitle')}</h4>
              <ul>
                <li><a href="/">{t('terms')}</a></li>
                <li><a href="/">{t('privacy')}</a></li>
                <li>Instagram</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>{t('copyright')}</span>
            <span>{t('location')}</span>
          </div>
        </div>
      </footer>
    </>
  );
}
