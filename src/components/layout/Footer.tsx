export default function Footer() {
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
          <p>Car rental in Marrakech, built around a request-and-confirm booking model — no surprise charges, no fine
            print you find out about later.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><a href="/cars">Cars</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#location">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <ul>
            <li>+212 6XX XX XX XX</li>
            <li>hello@atlasdrive.ma</li>
            <li>Route de l'Aéroport, Marrakech</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <ul>
            <li><a href="/">Terms &amp; Conditions</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li>Instagram</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Atlas Drive. All rights reserved.</span>
        <span>Marrakech, Morocco</span>
      </div>
    </div>
  </footer>
    </>
  );
}
