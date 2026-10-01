const translations = {
  en: {
    "nav.services": "Services",
    "nav.products": "Products",
    "nav.about": "About",
    "nav.contact": "Contact",

    "services.title": "AI-Native Software &amp; Integration Services",
    "services.sub": "We're not just a system integrator — we're an AI-native software company with in-house custom development.",
    "services.card1.title": "In-House Custom Development",
    "services.card1.desc": "Full product teams building bespoke software for your business, end to end.",
    "services.card2.title": "AI-Native Engineering",
    "services.card2.desc": "AI-assisted development and AI-powered features built into every system we ship.",
    "services.card3.title": "System Integration",
    "services.card3.desc": "Connecting your existing tools, devices and third-party platforms together.",
    "services.card4.title": "Cloud Deployment",
    "services.card4.desc": "Hosting, scaling and maintaining your applications in the cloud.",

    "hero.badge": "📍 Sarawak, Malaysia · AI-Native Software Company",
    "hero.title": "Smarter Warehouse &amp; Delivery Management for Distribution Businesses",
    "hero.sub": "We build cloud-based systems that help distributors — from seafood to general goods — manage inventory, orders and deliveries in real time, powered by AI-native engineering.",
    "hero.cta.wms": "Explore WMS",
    "hero.cta.lms": "Explore LMS",

    "products.title": "Our Products",
    "products.sub": "Two core systems, built to work together.",
    "products.wms.title": "Warehouse Management System",
    "products.wms.f1": "Real-time stock across warehouses &amp; bins",
    "products.wms.f2": "Batch &amp; expiry tracking",
    "products.wms.f3": "Receiving, put-away, picking &amp; packing",
    "products.wms.f4": "Low-stock &amp; near-expiry alerts",
    "products.wms.link": "Visit WMS →",
    "products.lms.title": "Logistics Management System",
    "products.lms.f1": "Delivery scheduling &amp; route planning",
    "products.lms.f2": "Driver &amp; vehicle assignment",
    "products.lms.f3": "Electronic proof of delivery (ePOD)",
    "products.lms.f4": "Live, Shopee-style delivery tracking",
    "products.lms.link": "Visit LMS →",

    "about.title": "About Us",
    "about.text": "Order4U Cloud is an AI-native software company based in Sarawak, Malaysia. We design and build warehouse and logistics management systems with our in-house development team, and also work as a system integrator — helping businesses digitise their operations end to end.",

    "contact.title": "Let's Talk",
    "contact.sub": "Interested in our products or need a system built for your business?",

    "footer.copy": "© 2026 Order4U Cloud · Sarawak, Malaysia"
  },
  ms: {
    "nav.services": "Perkhidmatan",
    "nav.products": "Produk",
    "nav.about": "Tentang Kami",
    "nav.contact": "Hubungi",

    "services.title": "Perkhidmatan Perisian &amp; Integrasi Asli AI",
    "services.sub": "Kami bukan sekadar integrator sistem — kami syarikat perisian asli AI dengan pembangunan tersuai dalaman.",
    "services.card1.title": "Pembangunan Tersuai Dalaman",
    "services.card1.desc": "Pasukan produk sepenuh masa membina perisian tersuai untuk perniagaan anda, dari awal hingga akhir.",
    "services.card2.title": "Kejuruteraan Asli AI",
    "services.card2.desc": "Pembangunan dibantu AI dan ciri berkuasa AI dibina dalam setiap sistem yang kami hasilkan.",
    "services.card3.title": "Integrasi Sistem",
    "services.card3.desc": "Menghubungkan alat, peranti dan platform pihak ketiga sedia ada anda.",
    "services.card4.title": "Penggunaan Awan",
    "services.card4.desc": "Pengehosan, penskalaan dan penyelenggaraan aplikasi anda di awan.",

    "hero.badge": "📍 Sarawak, Malaysia · Syarikat Perisian Asli AI",
    "hero.title": "Pengurusan Gudang &amp; Penghantaran Lebih Pintar untuk Perniagaan Pengedaran",
    "hero.sub": "Kami membina sistem berasaskan awan yang membantu pengedar — dari makanan laut hingga barangan am — menguruskan inventori, pesanan dan penghantaran secara masa nyata, dikuasakan oleh kejuruteraan asli AI.",
    "hero.cta.wms": "Terokai WMS",
    "hero.cta.lms": "Terokai LMS",

    "products.title": "Produk Kami",
    "products.sub": "Dua sistem teras, dibina untuk berfungsi bersama.",
    "products.wms.title": "Sistem Pengurusan Gudang",
    "products.wms.f1": "Stok masa nyata merentasi gudang &amp; bin",
    "products.wms.f2": "Penjejakan kelompok &amp; tarikh luput",
    "products.wms.f3": "Penerimaan, penyimpanan, pemetikan &amp; pembungkusan",
    "products.wms.f4": "Amaran stok rendah &amp; hampir luput",
    "products.wms.link": "Lawati WMS →",
    "products.lms.title": "Sistem Pengurusan Logistik",
    "products.lms.f1": "Penjadualan penghantaran &amp; perancangan laluan",
    "products.lms.f2": "Pemberian tugas pemandu &amp; kenderaan",
    "products.lms.f3": "Bukti penghantaran elektronik (ePOD)",
    "products.lms.f4": "Penjejakan penghantaran langsung, gaya Shopee",
    "products.lms.link": "Lawati LMS →",

    "about.title": "Tentang Kami",
    "about.text": "Order4U Cloud ialah syarikat perisian asli AI yang berpangkalan di Sarawak, Malaysia. Kami mereka bentuk dan membina sistem pengurusan gudang dan logistik dengan pasukan pembangunan dalaman kami, dan juga berfungsi sebagai integrator sistem — membantu perniagaan mendigitalkan operasi mereka dari hujung ke hujung.",

    "contact.title": "Mari Berbincang",
    "contact.sub": "Berminat dengan produk kami atau memerlukan sistem dibina untuk perniagaan anda?",

    "footer.copy": "© 2026 Order4U Cloud · Sarawak, Malaysia"
  }
};

function applyLanguage(lang) {
  const dict = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dict[key]) el.innerHTML = dict[key];
  });
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  localStorage.setItem("order4u-lang", lang);
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
});

applyLanguage(localStorage.getItem("order4u-lang") || "en");
