const fs = require('fs');
const path = require('path');

const en = require('./messages/en.json');
const fr = require('./messages/fr.json');
const ar = require('./messages/ar.json');

en.HomePage = {
  "QuickSearch": {
    "pickupLoc": "Pickup location",
    "locAirport": "Marrakech Menara Airport",
    "locCity": "Marrakech city centre",
    "locHotel": "Hotel / Riad delivery",
    "pickupDate": "Pickup date",
    "returnDate": "Return date",
    "checkAvail": "Check availability"
  },
  "BrandsMarquee": {
    "fleetIncludes": "The fleet includes"
  },
  "FeaturedVehicles": {
    "title": "Cars people actually ask for",
    "sub": "A working cross-section of the fleet — from city runabouts to airport-ready SUVs.",
    "catAll": "All",
    "catSUV": "SUV",
    "catEconomy": "Economy",
    "catCompact": "Compact",
    "seats": "{count} seats",
    "fromPrice": "From {price} DH/day",
    "viewDetails": "View details",
    "viewAll": "View all cars"
  },
  "WhyChooseUs": {
    "title": "Why people rebook with us",
    "sub": "Four things we can actually stand behind — not a wall of generic checkmarks.",
    "trust1Title": "Real prices, no surprises",
    "trust1Desc": "The price you're quoted on WhatsApp is the price you pay at pickup. Deposit and terms are explained before you confirm, not after.",
    "trust2Title": "Always on WhatsApp",
    "trust2Desc": "A person answers, in French, English, or Arabic — usually within minutes, not a chatbot reading from a script.",
    "trust3Title": "Airport, city, or riad pickup",
    "trust3Desc": "Land at Menara, walk out of your medina riad, or meet us in Gueliz — we come to wherever your trip actually starts.",
    "trust4Title": "A fleet that's actually maintained",
    "trust4Desc": "Every car is serviced and inspected between rentals — no rolling into your holiday with a check-engine light already on."
  },
  "HowItWorks": {
    "title": "How a request becomes a rental",
    "sub": "Three steps, and a human confirms the details before anything is final.",
    "step1Title": "Choose your car",
    "step1Desc": "Filter by size, transmission, or price, and open the one that fits your trip.",
    "step2Title": "Send a request",
    "step2Desc": "Fill out a quick form with your dates and pickup spot. No payment details required.",
    "step3Title": "Confirm on WhatsApp",
    "step3Desc": "We'll message you back to confirm availability and lock in the total price."
  },
  "Reviews": {
    "note": "Real testimonials from verified clients.",
    "seeMore": "See more on Google"
  },
  "LocationMap": {
    "title": "Based in Marrakech, ready at the airport",
    "sub": "City pickups, Menara Airport meet-and-greet, and hotel/riad delivery across the medina and Gueliz.",
    "phoneNote": "— WhatsApp answered daily, 7am–11pm",
    "defaultAddress": "Route de l'Aéroport, Marrakech",
    "distanceNote": "— 10 minutes from Menara",
    "freePickup": "Airport pickup is free after a two-day minimum rental"
  },
  "FaqSection": {
    "title": "Common questions",
    "sub1": "The short version — the full list lives on the ",
    "link": "FAQ page",
    "sub2": "."
  },
  "FinalCta": {
    "title": "Ready when you are.",
    "btn1": "Browse the fleet",
    "btn2": "Message us on WhatsApp"
  }
};

fr.HomePage = {
  "QuickSearch": {
    "pickupLoc": "Lieu de prise en charge",
    "locAirport": "Aéroport Marrakech Menara",
    "locCity": "Centre-ville de Marrakech",
    "locHotel": "Livraison Hôtel / Riad",
    "pickupDate": "Date de prise en charge",
    "returnDate": "Date de retour",
    "checkAvail": "Vérifier la disponibilité"
  },
  "BrandsMarquee": {
    "fleetIncludes": "Notre flotte inclut"
  },
  "FeaturedVehicles": {
    "title": "Les voitures les plus demandées",
    "sub": "Un aperçu de notre flotte — de la citadine pratique au SUV idéal pour l'aéroport.",
    "catAll": "Toutes",
    "catSUV": "SUV",
    "catEconomy": "Économique",
    "catCompact": "Compacte",
    "seats": "{count} sièges",
    "fromPrice": "Dès {price} DH/jour",
    "viewDetails": "Voir les détails",
    "viewAll": "Voir toutes les voitures"
  },
  "WhyChooseUs": {
    "title": "Pourquoi nos clients reviennent",
    "sub": "Quatre engagements concrets — pas juste de belles paroles.",
    "trust1Title": "Vrais prix, aucune surprise",
    "trust1Desc": "Le prix annoncé sur WhatsApp est celui que vous payez. La caution et les conditions sont expliquées avant confirmation, pas à la dernière minute.",
    "trust2Title": "Toujours sur WhatsApp",
    "trust2Desc": "Une vraie personne vous répond, en français, anglais ou arabe — souvent en quelques minutes, sans chatbot ni script préétabli.",
    "trust3Title": "Livraison à l'aéroport, en ville ou au riad",
    "trust3Desc": "Atterrissez à Menara, sortez de votre riad en médina, ou rejoignez-nous à Gueliz — nous venons là où votre voyage commence.",
    "trust4Title": "Une flotte réellement entretenue",
    "trust4Desc": "Chaque voiture est révisée et inspectée entre les locations — pas de voyant moteur allumé le premier jour de vos vacances."
  },
  "HowItWorks": {
    "title": "Comment réserver votre voiture",
    "sub": "Trois étapes simples, et un humain confirme les détails avec vous.",
    "step1Title": "Choisissez votre voiture",
    "step1Desc": "Filtrez par taille, transmission ou prix, et trouvez celle qui vous convient.",
    "step2Title": "Envoyez une demande",
    "step2Desc": "Remplissez un court formulaire avec vos dates et le lieu de livraison. Aucun paiement requis.",
    "step3Title": "Confirmez sur WhatsApp",
    "step3Desc": "Nous vous répondons pour confirmer la disponibilité et valider le prix total."
  },
  "Reviews": {
    "note": "De vrais témoignages de clients vérifiés.",
    "seeMore": "Voir plus sur Google"
  },
  "LocationMap": {
    "title": "Basé à Marrakech, prêt à l'aéroport",
    "sub": "Livraison en ville, accueil à l'Aéroport Menara, et livraison à votre hôtel/riad dans la médina ou à Gueliz.",
    "phoneNote": "— WhatsApp disponible tous les jours, 7h–23h",
    "defaultAddress": "Route de l'Aéroport, Marrakech",
    "distanceNote": "— à 10 minutes de Menara",
    "freePickup": "La livraison à l'aéroport est gratuite pour toute location de 2 jours ou plus"
  },
  "FaqSection": {
    "title": "Questions fréquentes",
    "sub1": "Un aperçu — la liste complète est sur la ",
    "link": "page FAQ",
    "sub2": "."
  },
  "FinalCta": {
    "title": "Prêt quand vous l'êtes.",
    "btn1": "Voir les voitures",
    "btn2": "Contactez-nous sur WhatsApp"
  }
};

ar.HomePage = {
  "QuickSearch": {
    "pickupLoc": "مكان الاستلام",
    "locAirport": "مطار مراكش المنارة",
    "locCity": "وسط مدينة مراكش",
    "locHotel": "توصيل للفندق / الرياض",
    "pickupDate": "تاريخ الاستلام",
    "returnDate": "تاريخ الإرجاع",
    "checkAvail": "تحقق من التوفر"
  },
  "BrandsMarquee": {
    "fleetIncludes": "أسطولنا يضم"
  },
  "FeaturedVehicles": {
    "title": "السيارات الأكثر طلباً",
    "sub": "مجموعة مختارة من أسطولنا — من سيارات المدينة العملية إلى السيارات العائلية المجهزة للمطار.",
    "catAll": "الكل",
    "catSUV": "عائلية (SUV)",
    "catEconomy": "اقتصادية",
    "catCompact": "مدمجة",
    "seats": "{count} مقاعد",
    "fromPrice": "ابتداءً من {price} درهم/يوم",
    "viewDetails": "عرض التفاصيل",
    "viewAll": "عرض جميع السيارات"
  },
  "WhyChooseUs": {
    "title": "لماذا يعود عملاؤنا إلينا",
    "sub": "أربعة أشياء نلتزم بها حقًا — وليست مجرد وعود فارغة.",
    "trust1Title": "أسعار حقيقية، بدون مفاجآت",
    "trust1Desc": "السعر الذي تحصل عليه عبر واتساب هو السعر النهائي الذي تدفعه. نوضح لك مبلغ التأمين والشروط قبل التأكيد، وليس في اللحظة الأخيرة.",
    "trust2Title": "دائمًا متواجدون على واتساب",
    "trust2Desc": "يرد عليك شخص حقيقي باللغة العربية، الفرنسية، أو الإنجليزية — في غضون دقائق، وليس روبوت محادثة آلي.",
    "trust3Title": "توصيل للمطار، المدينة، أو الرياض",
    "trust3Desc": "سواء كنت في مطار المنارة، أو تخرج من رياضك في المدينة القديمة، أو في جيليز — نأتيك حيث تبدأ رحلتك.",
    "trust4Title": "أسطول سيارات معتنى به حقًا",
    "trust4Desc": "يتم فحص وصيانة كل سيارة بين كل عملية إيجار — لن تبدأ عطلتك مع سيارة بها أعطال مسبقة."
  },
  "HowItWorks": {
    "title": "كيف تتم عملية الحجز",
    "sub": "ثلاث خطوات بسيطة، ويقوم شخص حقيقي بتأكيد التفاصيل معك قبل أي التزام.",
    "step1Title": "اختر سيارتك",
    "step1Desc": "قم بالتصفية حسب الحجم، ناقل الحركة، أو السعر، واختر السيارة التي تناسب رحلتك.",
    "step2Title": "أرسل طلبك",
    "step2Desc": "املأ نموذجًا سريعًا يوضح التواريخ ومكان الاستلام. لا يُطلب منك تقديم تفاصيل الدفع الآن.",
    "step3Title": "التأكيد عبر واتساب",
    "step3Desc": "سنراسلك لتأكيد توفر السيارة وتحديد السعر الإجمالي."
  },
  "Reviews": {
    "note": "تجارب حقيقية من عملاء موثوقين.",
    "seeMore": "شاهد المزيد على جوجل"
  },
  "LocationMap": {
    "title": "مقرنا في مراكش، وجاهزون في المطار",
    "sub": "نقدم خدمات التوصيل في المدينة، الاستقبال في مطار المنارة، والتوصيل للفنادق والرياض في المدينة القديمة وجيليز.",
    "phoneNote": "— نرد على واتساب يوميًا من 7 صباحًا حتى 11 مساءً",
    "defaultAddress": "طريق المطار، مراكش",
    "distanceNote": "— على بعد 10 دقائق من المنارة",
    "freePickup": "التوصيل للمطار مجاني عند الاستئجار لمدة يومين كحد أدنى"
  },
  "FaqSection": {
    "title": "الأسئلة الشائعة",
    "sub1": "نسخة مختصرة — يمكنك الاطلاع على القائمة الكاملة في ",
    "link": "صفحة الأسئلة الشائعة",
    "sub2": "."
  },
  "FinalCta": {
    "title": "نحن جاهزون عندما تكون مستعداً.",
    "btn1": "تصفح السيارات",
    "btn2": "راسلنا على واتساب"
  }
};

fs.writeFileSync('./messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('./messages/fr.json', JSON.stringify(fr, null, 2));
fs.writeFileSync('./messages/ar.json', JSON.stringify(ar, null, 2));
console.log('done');
