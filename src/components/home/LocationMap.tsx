export default function LocationMap() {
  return (
    <section className="location-section" id="location">
      <div className="wrap location-grid">
        <div>
          <div className="section-head" style={{ marginBottom: "26px" }}>
            <h2>Based in Marrakech, ready at the airport</h2>
            <p>City pickups, Menara Airport meet-and-greet, and hotel/riad delivery across the medina and Gueliz.</p>
          </div>
          <div className="loc-list">
            <div className="loc-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 5h16v11H9l-5 4V5z" />
              </svg>
              <p>+212 6XX XX XX XX — WhatsApp answered daily, 7am–11pm</p>
            </div>
            <div className="loc-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3c4 3 7 6 7 10a7 7 0 0 1-14 0c0-4 3-7 7-10z" />
              </svg>
              <p>Route de l'Aéroport, Marrakech — 10 minutes from Menara</p>
            </div>
            <div className="loc-item">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20z" />
              </svg>
              <p>Airport pickup is free after a two-day minimum rental</p>
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
