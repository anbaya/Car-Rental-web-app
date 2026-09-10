import { useTranslations } from 'next-intl';

export default function QuickSearch() {
  const t = useTranslations('HomePage.QuickSearch');
  return (
    <div className="search-card">
      <div className="wrap">
        <form className="search-inner">
          <div className="field">
            <label htmlFor="pickup-loc">{t('pickupLoc')}</label>
            <select id="pickup-loc">
              <option>{t('locAirport')}</option>
              <option>{t('locCity')}</option>
              <option>{t('locHotel')}</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="pickup-date">{t('pickupDate')}</label>
            <input id="pickup-date" type="date" />
          </div>
          <div className="field">
            <label htmlFor="return-date">{t('returnDate')}</label>
            <input id="return-date" type="date" />
          </div>
          <button type="submit" className="btn btn-brass">{t('checkAvail')}</button>
        </form>
      </div>
    </div>
  );
}
