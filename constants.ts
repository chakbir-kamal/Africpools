import { Translations, Language } from './types';
import { Pickaxe, RefreshCw, Droplets, Waves } from 'lucide-react';

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/212600574866",
  instagram: "https://www.instagram.com/africpools",
  facebook: "https://web.facebook.com/Travuax?mibextid",
  email: "mailto:africpools@gmail.com",
  phoneDisplay: "+212 600 57 48 66"
};

export const TRANSLATIONS: Record<Language, Translations> = {
  fr: {
    metaTitle: "Construction Piscine Maroc | Pisciniste de Luxe & Rénovation - AFRICPOOLS",
    metaDesc: "AFRICPOOLS : Votre expert en construction de piscines au Maroc (Casablanca, Marrakech). Piscines à débordement, lagon, rénovation, maintenance et spas.",
    hero: {
      title: "Construction de Piscines de Luxe au Maroc",
      subtitle: "L'excellence en conception architecturale, rénovation et entretien de piscines à travers le Royaume.",
      cta: "Devis Gratuit via WhatsApp"
    },
    stats: {
      pools: "Projets Réalisés",
      years: "Années d'Expertise",
      experts: "Techniciens Qualifiés",
      locations: "Villes Desservies"
    },
    about: {
      title: "AFRICPOOLS : Leader de la Piscine au Maroc",
      description: "AFRICPOOLS est une entreprise marocaine spécialisée dans l’architecture, la conception et la réalisation de piscines clé en main. Elle propose des services complets incluant la construction et la rénovation de piscines, les piscines type lagon, les spas et jacuzzis, ainsi que la maintenance et l’entretien professionnels, en garantissant qualité, durabilité et finitions haut de gamme sur l’ensemble du territoire marocain.",
      features: ["Architecture & Design Sur Mesure", "Matériaux Haut de Gamme", "Garantie Décennale", "Service Après-Vente 24/7"],
      cta: "Découvrir Notre Expertise"
    },
    videoShowcase: {
      title: "Nos Chantiers en Vidéo",
      subtitle: "Immersion dans la construction de nos piscines et aménagements extérieurs."
    },
    services: {
      title: "Nos Services de Pisciniste",
      subtitle: "Expertise complète pour la création et la gestion de vos espaces aquatiques",
      items: [
        { id: 'construction', title: "Construction de Piscines", description: "Création de piscines en béton armé, à débordement, miroir et couloirs de nage avec revêtements de luxe.", iconName: 'construction' },
        { id: 'renovation', title: "Rénovation de Piscines", description: "Modernisation complète : étanchéité, changement de revêtement, mise aux normes et éclairage LED.", iconName: 'renovation' },
        { id: 'maintenance', title: "Maintenance & Entretien", description: "Contrats d'entretien annuels, traitement de l'eau (sel/chlore) et nettoyage pour une eau saine.", iconName: 'maintenance' },
        { id: 'spa', title: "Spas, Hammams & Jacuzzis", description: "Conception de zones wellness privées : installation de spas, jacuzzis et locaux techniques optimisés.", iconName: 'spa' },
      ]
    },
    gallery: {
      title: "Galerie de Réalisations",
      subtitle: "Inspiration : Nos plus belles piscines à Casablanca, Marrakech et Tanger",
      seeMore: "Voir Plus de Réalisations",
      seeLess: "Voir Moins"
    },
    contact: {
      title: "Contactez Votre Pisciniste",
      subtitle: "Un projet de piscine au Maroc ? Discutons de votre vision.",
      address: "Casablanca, Maroc",
      phone: "Téléphone",
      email: "Email",
      cta: "Envoyer un message"
    },
    nav: {
      home: "Accueil",
      about: "À Propos",
      videos: "Vidéos",
      services: "Services",
      gallery: "Réalisations",
      contact: "Devis"
    }
  },
  en: {
    metaTitle: "Luxury Swimming Pool Construction Morocco | AFRICPOOLS",
    metaDesc: "AFRICPOOLS: Premier swimming pool builders in Morocco. Specialists in infinity pools, renovation, maintenance, and spa installation in Casablanca & Marrakech.",
    hero: {
      title: "Luxury Pool Construction in Morocco",
      subtitle: "Excellence in swimming pool design, renovation, and maintenance across Morocco.",
      cta: "Get a Free Quote"
    },
    stats: {
      pools: "Pools Delivered",
      years: "Years Experience",
      experts: "Expert Technicians",
      locations: "Cities Served"
    },
    about: {
      title: "About AFRICPOOLS Morocco",
      description: "AFRICPOOLS is a Moroccan company specializing in turnkey swimming pool architecture, design, and construction. We offer comprehensive services including pool building and renovation, lagoon-style pools, spas and jacuzzis, as well as professional maintenance and care, guaranteeing quality, durability, and high-end finishes throughout Morocco.",
      features: ["Custom Architectural Design", "Premium Materials", "10-Year Warranty", "24/7 Support"],
      cta: "Learn More About Us"
    },
    videoShowcase: {
      title: "Project Showcase",
      subtitle: "Watch our pool construction experts in action."
    },
    services: {
      title: "Our Pool Services",
      subtitle: "Comprehensive aquatic solutions for your home or business",
      items: [
        { id: 'construction', title: "Pool Construction", description: "Design and build of concrete, infinity, and mirror pools with premium finishes.", iconName: 'construction' },
        { id: 'renovation', title: "Pool Renovation", description: "Restore your pool. Equipment modernization, waterproofing, and resurfacing services.", iconName: 'renovation' },
        { id: 'maintenance', title: "Maintenance & Care", description: "Regular cleaning, water balancing, and technical inspections for crystal clear water.", iconName: 'maintenance' },
        { id: 'spa', title: "Spas & Wellness", description: "Installation of wellness areas, spas, jacuzzis, and high-performance pump rooms.", iconName: 'spa' },
      ]
    },
    gallery: {
      title: "Our Portfolio",
      subtitle: "View our recent pool projects in Morocco",
      seeMore: "See More Projects",
      seeLess: "See Less"
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to build your dream pool? Let's discuss your project.",
      address: "Casablanca, Morocco",
      phone: "Phone",
      email: "Email",
      cta: "Send Message"
    },
    nav: {
      home: "Home",
      about: "About",
      videos: "Videos",
      services: "Services",
      gallery: "Gallery",
      contact: "Contact"
    }
  },
  ar: {
    metaTitle: "بناء مسابح المغرب | AFRICPOOLS - تصميم وتنفيذ المسابح الفاخرة",
    metaDesc: "AFRICPOOLS، الشركة الرائدة في بناء، تجديد وصيانة المسابح في المغرب. مسابح لامتناهية، جاكوزي، وخدمات صيانة في الدار البيضاء ومراكش.",
    hero: {
      title: "بناء المسابح الفاخرة في المغرب",
      subtitle: "التميز في هندسة وبناء وتجديد وصيانة المسابح في جميع أنحاء المملكة.",
      cta: "احصل على عرض مجاني"
    },
    stats: {
      pools: "مسبح تم إنجازه",
      years: "سنوات الخبرة",
      experts: "تقنيون مؤهلون",
      locations: "مدن نخدمها"
    },
    about: {
      title: "عن AFRICPOOLS - خبراء المسابح",
      description: "AFRICPOOLS هي شركة مغربية متخصصة في هندسة وتصميم وتنفيذ المسابح الجاهزة. تقدم خدمات شاملة تشمل بناء وتجديد المسابح، والمسابح الشاطئية (لاغون)، والسبا والجاكوزي، بالإضافة إلى الصيانة والعناية المهنية، مع ضمان الجودة والمتانة والتشطيبات الفاخرة في جميع أنحاء المغرب.",
      features: ["تصميم معماري مخصص", "مواد عالية الجودة", "ضمان 10 سنوات", "دعم فني 24/7"],
      cta: "اكتشف خبرتنا"
    },
    videoShowcase: {
      title: "مشاريعنا بالفيديو",
      subtitle: "شاهد مراحل إنجاز وبناء المسابح من قبل خبرائنا."
    },
    services: {
      title: "خدماتنا المتميزة",
      subtitle: "حلول متكاملة لمساحتك المائية والترفيهية",
      items: [
        { id: 'construction', title: "بناء المسابح", description: "تصميم وبناء المسابح الخرسانية، والمسابح اللامتناهية، ومسابح المرايا بتشطيبات راقية.", iconName: 'construction' },
        { id: 'renovation', title: "تجديد وإصلاح المسابح", description: "تحديث شامل للمسبح: العزل المائي، تغيير الكسوة، وتحديث المعدات.", iconName: 'renovation' },
        { id: 'maintenance', title: "الصيانة والمعالجة", description: "عقود صيانة دورية، معالجة المياه، والفحص التقني لضمان مياه نقية.", iconName: 'maintenance' },
        { id: 'spa', title: "سبا وجاكوزي", description: "تركيب مناطق الاستجمام، والسبا، والجاكوزي، وتجهيز الغرف التقنية بأحدث المعدات.", iconName: 'spa' },
      ]
    },
    gallery: {
      title: "معرض الأعمال",
      subtitle: "اكتشف أحدث مشاريع المسابح في المغرب",
      seeMore: "شاهد المزيد",
      seeLess: "عرض أقل"
    },
    contact: {
      title: "اتصل بنا",
      subtitle: "هل تريد بناء مسبح أحلامك؟ نحن هنا لخدمتك.",
      address: "الدار البيضاء، المغرب",
      phone: "هاتف",
      email: "بريد إلكتروني",
      cta: "راسلنا عبر واتساب"
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      videos: "فيديوهات",
      services: "الخدمات",
      gallery: "المعرض",
      contact: "اتصل بنا"
    }
  },
  de: {
    metaTitle: "Poolbau Marokko | Luxus-Pools & Renovierung - AFRICPOOLS",
    metaDesc: "AFRICPOOLS: Ihr Spezialist für Poolbau, Renovierung und Wartung in Marokko. Infinity-Pools, Spas und professioneller Service in Casablanca & Marrakesch.",
    hero: {
      title: "Luxus-Poolbau in Marokko",
      subtitle: "Exzellenz in Design, Bau und Wartung von Schwimmbädern im gesamten Königreich.",
      cta: "Kostenloses Angebot"
    },
    stats: {
      pools: "Fertiggestellte Pools",
      years: "Jahre Erfahrung",
      experts: "Qualifizierte Techniker",
      locations: "Städte"
    },
    about: {
      title: "Über AFRICPOOLS Marokko",
      description: "AFRICPOOLS ist ein marokkanisches Unternehmen, das auf Architektur, Design und den schlüsselfertigen Bau von Schwimmbädern spezialisiert ist. Wir bieten umfassende Dienstleistungen an, darunter den Bau und die Renovierung von Pools, Lagunen-Pools, Spas und Whirlpools sowie professionelle Wartung und Pflege. Wir garantieren Qualität, Langlebigkeit und hochwertige Oberflächen in ganz Marokko.",
      features: ["Maßgeschneidertes Design", "Premium-Materialien", "10 Jahre Garantie", "24/7 Support"],
      cta: "Mehr über uns"
    },
    videoShowcase: {
      title: "Unsere Projekte im Video",
      subtitle: "Erleben Sie unsere Expertise im Schwimmbadbau in Aktion."
    },
    services: {
      title: "Unsere Pool-Dienstleistungen",
      subtitle: "Komplettlösungen für Ihre Wellness-Oase",
      items: [
        { id: 'construction', title: "Poolbau", description: "Planung und Bau von Beton-, Infinity- und Spiegelpools mit exklusiven Oberflächen.", iconName: 'construction' },
        { id: 'renovation', title: "Pool-Sanierung", description: "Geben Sie Ihrem Pool ein neues Leben: Abdichtung, neue Beschichtung und moderne Technik.", iconName: 'renovation' },
        { id: 'maintenance', title: "Wartung & Pflege", description: "Regelmäßige Reinigung, Wasseraufbereitung und Technik-Check für kristallklares Wasser.", iconName: 'maintenance' },
        { id: 'spa', title: "Spas & Whirlpools", description: "Installation von Wellnessbereichen, Spas, Whirlpools und leistungsstarken Technikräumen.", iconName: 'spa' },
      ]
    },
    gallery: {
      title: "Unsere Referenzen",
      subtitle: "Entdecken Sie unsere neuesten Pool-Projekte in Marokko",
      seeMore: "Mehr Projekte sehen",
      seeLess: "Weniger anzeigen"
    },
    contact: {
      title: "Kontakt",
      subtitle: "Bereit für Ihren Traumpool? Kontaktieren Sie uns.",
      address: "Casablanca, Marokko",
      phone: "Telefon",
      email: "E-Mail",
      cta: "Nachricht Senden"
    },
    nav: {
      home: "Startseite",
      about: "Über Uns",
      videos: "Videos",
      services: "Leistungen",
      gallery: "Galerie",
      contact: "Kontakt"
    }
  },
  es: {
    metaTitle: "Construcción de Piscinas Marruecos | Piscinas de Lujo - AFRICPOOLS",
    metaDesc: "AFRICPOOLS: Especialistas en construcción, renovación y mantenimiento de piscinas en Marruecos. Piscinas infinitas, spas y servicio profesional en Casablanca.",
    hero: {
      title: "Construcción de Piscinas de Lujo en Marruecos",
      subtitle: "Excelencia en diseño, renovación y mantenimiento de piscinas en todo el Reino.",
      cta: "Presupuesto Gratuito"
    },
    stats: {
      pools: "Piscinas Realizadas",
      years: "Años de Experiencia",
      experts: "Técnicos Expertos",
      locations: "Ciudades Cubiertas"
    },
    about: {
      title: "Líderes en Piscinas en Marruecos",
      description: "AFRICPOOLS es una empresa marroquí especializada en arquitectura, diseño y realización de piscinas llave en mano. Ofrece servicios completos que incluyen construcción y renovación de piscinas, piscinas tipo laguna, spas y jacuzzis, así como mantenimiento y cuidado profesional, garantizando calidad, durabilidad y acabados de alta gama en todo el territorio marroquí.",
      features: ["Diseño Arquitectónico", "Materiales Premium", "Garantía de 10 Años", "Soporte 24/7"],
      cta: "Conozca Nuestra Empresa"
    },
    videoShowcase: {
      title: "Nuestros Proyectos en Video",
      subtitle: "Vea a nuestros expertos en construcción de piscinas en acción."
    },
    services: {
      title: "Servicios de Piscina",
      subtitle: "Soluciones completas para su espacio acuático y wellness",
      items: [
        { id: 'construction', title: "Construcción de Piscinas", description: "Diseño y construcción de piscinas de hormigón, desbordantes y espejo con acabados de lujo.", iconName: 'construction' },
        { id: 'renovation', title: "Renovación de Piscinas", description: "Modernización integral: impermeabilización, cambio de revestimiento y nuevos equipos.", iconName: 'renovation' },
        { id: 'maintenance', title: "Mantenimiento Integral", description: "Limpieza regular, tratamiento del agua y revisiones técnicas para un agua cristalina.", iconName: 'maintenance' },
        { id: 'spa', title: "Spas y Jacuzzis", description: "Instalación de zonas de bienestar, spas, jacuzzis y locales técnicos de alto rendimiento.", iconName: 'spa' },
      ]
    },
    gallery: {
      title: "Nuestras Realizaciones",
      subtitle: "Descubra nuestros proyectos de piscinas en Marruecos",
      seeMore: "Ver Más Proyectos",
      seeLess: "Ver Menos"
    },
    contact: {
      title: "Contáctenos",
      subtitle: "¿Listo para construir su piscina? Hablemos de su proyecto.",
      address: "Casablanca, Marruecos",
      phone: "Teléfono",
      email: "Correo Electrónico",
      cta: "Enviar mensaje"
    },
    nav: {
      home: "Inicio",
      about: "Nosotros",
      videos: "Videos",
      services: "Servicios",
      gallery: "Galería",
      contact: "Contacto"
    }
  }
};