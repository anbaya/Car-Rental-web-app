import { useTranslations } from 'next-intl';

export default function LocationMap({ whatsappNumber, address, locationUrl }: { whatsappNumber: string; address?: string; locationUrl?: string }) {
  const t = useTranslations('HomePage.LocationMap');
  const displayPhone = whatsappNumber.startsWith('+') ? whatsappNumber : `+${whatsappNumber}`;
  return (
    <section className="location-section" id="location">
      <div className="wrap location-grid">
        <div>
          <div className="section-head" style={{ marginBottom: "26px" }}>
            <h2>{t('title')}</h2>
            <p>{t('sub')}</p>
          </div>
          <div className="loc-list">
            <div className="loc-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 5h16v11H9l-5 4V5z" />
              </svg>
              <p>{displayPhone} {t('phoneNote')}</p>
            </div>
            <div className="loc-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3c4 3 7 6 7 10a7 7 0 0 1-14 0c0-4 3-7 7-10z" />
              </svg>
              <p>
                {locationUrl ? (
                  <a href={locationUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>{address || t('defaultAddress')}</a>
                ) : (
                  address || t('defaultAddress')
                )}
                {t('distanceNote')}
              </p>
            </div>
            <div className="loc-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20z" />
              </svg>
              <p>{t('freePickup')}</p>
            </div>
          </div>
        </div>
        <div className="map-card">
          <img src="/images/location.jpg" alt="Map of Marrakech" className="map-image" />
        </div>
      </div>
    </section>
  );
}
