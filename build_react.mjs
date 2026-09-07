import fs from 'fs';

let jsx = fs.readFileSync('./extracted-jsx.txt', 'utf8');

// Fix SVG attributes
jsx = jsx.replace(/stroke-width/g, 'strokeWidth');
jsx = jsx.replace(/stroke-linecap/g, 'strokeLinecap');
jsx = jsx.replace(/stroke-linejoin/g, 'strokeLinejoin');
jsx = jsx.replace(/stroke-opacity/g, 'strokeOpacity');
jsx = jsx.replace(/fill-opacity/g, 'fillOpacity');
jsx = jsx.replace(/stop-color/g, 'stopColor');
jsx = jsx.replace(/stop-opacity/g, 'stopOpacity');
jsx = jsx.replace(/font-family/g, 'fontFamily');
jsx = jsx.replace(/font-size/g, 'fontSize');
jsx = jsx.replace(/data-review/g, 'data-review="true"');

// Fix anchor tags - we leave <a> as <a> because most are hash links (#fleet).
// For href="#" we replace with href="/"
jsx = jsx.replace(/href="#"/g, 'href="/"');

// 1. Extract Navbar (lines 11-54 approx, between {/*  NAV  */} and {/*  HERO  */})
const navMatch = jsx.match(/\{\/\*  NAV  \*\/\}([\s\S]*?)\{\/\*  HERO  \*\/\}/);
if (navMatch) {
  const navContent = navMatch[1].trim();
  const navbarTSX = `'use client';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      ${navContent.replace('id="burgerBtn"', 'id="burgerBtn" onClick={() => setIsOpen(!isOpen)}')
                   .replace('id="mobilePanel"', 'id="mobilePanel" className={`mobile-panel ${isOpen ? \'open\' : \'\'}`}')}
    </>
  );
}
`;
  fs.writeFileSync('./src/components/layout/Navbar.tsx', navbarTSX);
}

// 2. Extract Footer (lines 527-575)
const footMatch = jsx.match(/\{\/\*  FOOTER  \*\/\}([\s\S]*?)$/);
if (footMatch) {
  const footContent = footMatch[1].trim();
  const footerTSX = `export default function Footer() {
  return (
    <>
      ${footContent}
    </>
  );
}
`;
  fs.writeFileSync('./src/components/layout/Footer.tsx', footerTSX);
}

// 3. Extract Floating WhatsApp
const waMatch = jsx.match(/<a href="\/" className="floating-cta"([\s\S]*?)<\/a>/);
if (waMatch) {
  const waContent = `<a href="/" className="floating-cta"${waMatch[1]}</a>`;
  const waTSX = `export default function FloatingWhatsApp() {
  return (
    <>
      ${waContent}
    </>
  );
}
`;
  fs.writeFileSync('./src/components/layout/FloatingWhatsApp.tsx', waTSX);
}

// 4. Extract Page Content (Hero to Final CTA)
const pageMatch = jsx.match(/\{\/\*  HERO  \*\/\}([\s\S]*?)\{\/\*  FOOTER  \*\/\}/);
if (pageMatch) {
  const pageContent = pageMatch[1].trim();
  const pageTSX = `'use client';
import { useRef } from 'react';

export default function HomePage() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollPrev = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -332, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 332, behavior: 'smooth' });
    }
  };

  return (
    <main>
      ${pageContent.replace('id="carTrack"', 'id="carTrack" ref={trackRef}')
                   .replace('id="carPrev"', 'id="carPrev" onClick={scrollPrev}')
                   .replace('id="carNext"', 'id="carNext" onClick={scrollNext}')}
    </main>
  );
}
`;
  fs.writeFileSync('./src/app/page.tsx', pageTSX);
}

console.log('React components built successfully (fixed <a> tags)!');
