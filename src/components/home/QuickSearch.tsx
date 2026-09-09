export default function QuickSearch() {
  return (
    <div className="search-card">
      <div className="wrap">
        <form className="search-inner">
          <div className="field">
            <label htmlFor="pickup-loc">Pickup location</label>
            <select id="pickup-loc">
              <option>Marrakech Menara Airport</option>
              <option>Marrakech city centre</option>
              <option>Hotel / Riad delivery</option>
            </select>
          </div>
          <div className="field">
            <label htmlFor="pickup-date">Pickup date</label>
            <input id="pickup-date" type="date" />
          </div>
          <div className="field">
            <label htmlFor="return-date">Return date</label>
            <input id="return-date" type="date" />
          </div>
          <button type="submit" className="btn btn-brass">Check availability</button>
        </form>
      </div>
    </div>
  );
}
