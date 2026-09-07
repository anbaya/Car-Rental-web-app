'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <header className="nav">
        <div className="wrap">
          <a href="/" className="brand">
            <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.4">
              <path d="M6 30 L6 18 Q20 6 34 18 L34 30" />
              <path d="M6 30 L34 30" />
              <path d="M14 30 L14 22 Q20 17 26 22 L26 30" />
            </svg>
            Atlas Drive
          </a>
          <nav className="nav-links">
            <a href="/">Home</a>
            <a href="/cars">Cars</a>
            <a href="#about">About</a>
            <a href="#location">Contact</a>
          </nav>
          <div className="nav-right">
            <div className="lang-switch">
              <button aria-current="true">EN</button>
              <button>FR</button>
              <button>AR</button>
            </div>
            <a href="/" className="btn btn-outline">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 20l1.4-4.2A8 8 0 1 1 9 18.5L4 20z" />
              </svg>
              WhatsApp
            </a>
            <button className="nav-burger" id="burgerBtn" onClick={() => setIsOpen(!isOpen)} aria-expanded="false" aria-controls="mobilePanel"
              aria-label="Open menu">
              <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
        <div id="mobilePanel" className={`mobile-panel ${isOpen ? 'open' : ''}`}>
          <a href="/">Home</a>
          <a href="/cars">Cars</a>
          <a href="#about">About</a>
          <a href="#location">Contact</a>
        </div>
      </header>
    </>
  );
}
