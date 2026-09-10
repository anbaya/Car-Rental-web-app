import { getGeneralWhatsAppUrl } from '@/lib/whatsapp';
import { useTranslations } from 'next-intl';

export default function FinalCta({ whatsappNumber }: { whatsappNumber: string }) {
  const t = useTranslations('HomePage.FinalCta');
  return (
    <section className="final-cta">
      <div className="wrap">
        <h2 className="reveal delay-1">{t('title')}</h2>
        <div className="hero-ctas reveal delay-2" style={{ marginTop: "0" }}>
          <a href="/cars" className="btn btn-brass">{t('btn1')}</a>
          <a href={getGeneralWhatsAppUrl(whatsappNumber)} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            {t('btn2')}
          </a>
        </div>
      </div>
    </section>
  );
}
