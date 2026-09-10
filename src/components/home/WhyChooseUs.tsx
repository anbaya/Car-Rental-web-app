import { useTranslations } from 'next-intl';

export default function WhyChooseUs() {
  const t = useTranslations('HomePage.WhyChooseUs');
  return (
    <section className="on-bone" id="about">
      <div className="wrap">
        <div className="section-head reveal delay-1">
          <h2>{t('title')}</h2>
          <p>{t('sub')}</p>
        </div>

        <div className="trust-row reveal delay-2">
          <div className="trust-media">
            <img src="/images/trust/trust1.png" alt="Real prices" />
          </div>
          <div className="trust-text">
            <h3>{t('trust1Title')}</h3>
            <p>{t('trust1Desc')}</p>
          </div>
        </div>

        <div className="trust-row reverse reveal delay-3">
          <div className="trust-media">
            <img src="/images/trust/trust2.png" alt="Always on WhatsApp" />
          </div>
          <div className="trust-text">
            <h3>{t('trust2Title')}</h3>
            <p>{t('trust2Desc')}</p>
          </div>
        </div>

        <div className="trust-row reveal delay-4">
          <div className="trust-media">
            <img src="/images/trust/trust3.png" alt="Airport, city, or riad pickup" />
          </div>
          <div className="trust-text">
            <h3>{t('trust3Title')}</h3>
            <p>{t('trust3Desc')}</p>
          </div>
        </div>

        <div className="trust-row reverse reveal delay-5">
          <div className="trust-media">
            <img src="/images/trust/trust4.png" alt="Maintained fleet" />
          </div>
          <div className="trust-text">
            <h3>{t('trust4Title')}</h3>
            <p>{t('trust4Desc')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
