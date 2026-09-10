import { useTranslations } from 'next-intl';

export default function HowItWorks() {
  const t = useTranslations('HomePage.HowItWorks');
  return (
    <section>
      <div className="wrap">
        <div className="section-head reveal delay-1">
          <h2>{t('title')}</h2>
          <p>{t('sub')}</p>
        </div>
        <div className="steps-wrapper">
          <svg className="steps-svg reveal" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden="true">
            <path d="M 30 50 C 150 10, 250 90, 370 50 C 480 10, 600 90, 720 50" />
          </svg>
          <div className="steps">
            <div className="step reveal delay-2">
              <div className="step-num">1</div>
              <h3>{t('step1Title')}</h3>
              <p>{t('step1Desc')}</p>
            </div>
            <div className="step reveal delay-3">
              <div className="step-num">2</div>
              <h3>{t('step2Title')}</h3>
              <p>{t('step2Desc')}</p>
            </div>
            <div className="step reveal delay-4">
              <div className="step-num">3</div>
              <h3>{t('step3Title')}</h3>
              <p>{t('step3Desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
