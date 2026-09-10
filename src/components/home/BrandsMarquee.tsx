import { useTranslations } from 'next-intl';

export default function BrandsMarquee() {
  const t = useTranslations('HomePage.BrandsMarquee');
  return (
    <div className="marquee-section">
      <div className="wrap">
        <p className="marquee-label">{t('fleetIncludes')}</p>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          <span>DACIA</span><span>RENAULT</span><span>HYUNDAI</span><span>KIA</span><span>PEUGEOT</span><span>VOLKSWAGEN</span><span>FIAT</span><span>TOYOTA</span>
          <span>DACIA</span><span>RENAULT</span><span>HYUNDAI</span><span>KIA</span><span>PEUGEOT</span><span>VOLKSWAGEN</span><span>FIAT</span><span>TOYOTA</span>
        </div>
      </div>
    </div>
  );
}
