const fs = require('fs');
const path = require('path');

const en = require('./messages/en.json');
const fr = require('./messages/fr.json');
const ar = require('./messages/ar.json');

en.Cars = {
  "headerTitle": "The Fleet",
  "headerSub": "Explore our curated collection of well-maintained vehicles.",
  "filterType": "Vehicle type",
  "filterAllTypes": "All types",
  "filterEconomy": "Economy",
  "filterSUV": "SUV",
  "filterTrans": "Transmission",
  "filterAllTrans": "All",
  "filterAuto": "Automatic",
  "filterManual": "Manual",
  "filterSeats": "Seats",
  "filterAnySeats": "Any",
  "filter4Seats": "4 seats",
  "filter5Seats": "5+ seats",
  "filterPrice": "Price range",
  "filterAnyPrice": "Any price",
  "filterLowPrice": "Under 250 DH",
  "filterHighPrice": "250 DH +",
  "clearFilters": "Clear filters",
  "available": "{count} car available",
  "availablePlural": "{count} cars available",
  "sort": "Sort:",
  "sortRec": "Recommended",
  "sortLow": "Price: low to high",
  "sortHigh": "Price: high to low",
  "seats": "{count} seats",
  "fromPrice": "From {price} DH/day",
  "viewDetails": "View details",
  "loadMore": "Load more cars \u2192",
  "ctaTitle": "Can't decide?",
  "ctaSub": "Send us your dates and we'll match you to a car.",
  "ctaBtn": "Message us on WhatsApp"
};

fr.Cars = {
  "headerTitle": "La Flotte",
  "headerSub": "Découvrez notre collection soignée de véhicules bien entretenus.",
  "filterType": "Type de véhicule",
  "filterAllTypes": "Tous les types",
  "filterEconomy": "Économique",
  "filterSUV": "SUV",
  "filterTrans": "Transmission",
  "filterAllTrans": "Toutes",
  "filterAuto": "Automatique",
  "filterManual": "Manuelle",
  "filterSeats": "Sièges",
  "filterAnySeats": "Tous",
  "filter4Seats": "4 sièges",
  "filter5Seats": "5+ sièges",
  "filterPrice": "Fourchette de prix",
  "filterAnyPrice": "Tous les prix",
  "filterLowPrice": "Moins de 250 DH",
  "filterHighPrice": "250 DH +",
  "clearFilters": "Effacer les filtres",
  "available": "{count} voiture disponible",
  "availablePlural": "{count} voitures disponibles",
  "sort": "Trier:",
  "sortRec": "Recommandé",
  "sortLow": "Prix : croissant",
  "sortHigh": "Prix : décroissant",
  "seats": "{count} sièges",
  "fromPrice": "Dès {price} DH/jour",
  "viewDetails": "Voir les détails",
  "loadMore": "Charger plus de voitures \u2192",
  "ctaTitle": "Vous n'arrivez pas à vous décider ?",
  "ctaSub": "Envoyez-nous vos dates et nous trouverons la voiture qu'il vous faut.",
  "ctaBtn": "Contactez-nous sur WhatsApp"
};

ar.Cars = {
  "headerTitle": "أسطول السيارات",
  "headerSub": "اكتشف مجموعتنا المختارة من السيارات المعتنى بها جيدًا.",
  "filterType": "نوع السيارة",
  "filterAllTypes": "جميع الأنواع",
  "filterEconomy": "اقتصادية",
  "filterSUV": "عائلية (SUV)",
  "filterTrans": "ناقل الحركة",
  "filterAllTrans": "الكل",
  "filterAuto": "أوتوماتيك",
  "filterManual": "عادي",
  "filterSeats": "المقاعد",
  "filterAnySeats": "الكل",
  "filter4Seats": "4 مقاعد",
  "filter5Seats": "+5 مقاعد",
  "filterPrice": "نطاق السعر",
  "filterAnyPrice": "أي سعر",
  "filterLowPrice": "أقل من 250 درهم",
  "filterHighPrice": "250 درهم +",
  "clearFilters": "مسح الفلاتر",
  "available": "{count} سيارة متاحة",
  "availablePlural": "{count} سيارات متاحة",
  "sort": "ترتيب:",
  "sortRec": "موصى به",
  "sortLow": "السعر: من الأقل للأعلى",
  "sortHigh": "السعر: من الأعلى للأقل",
  "seats": "{count} مقاعد",
  "fromPrice": "ابتداءً من {price} درهم/يوم",
  "viewDetails": "عرض التفاصيل",
  "loadMore": "تحميل المزيد من السيارات \u2190",
  "ctaTitle": "لا تستطيع أن تقرر؟",
  "ctaSub": "أرسل لنا تواريخك وسنختار لك السيارة المناسبة.",
  "ctaBtn": "راسلنا على واتساب"
};

fs.writeFileSync('./messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('./messages/ar.json', JSON.stringify(ar, null, 2));
console.log('done');
