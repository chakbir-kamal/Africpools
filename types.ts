export type Language = 'fr' | 'ar' | 'en' | 'de' | 'es';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Translations {
  metaTitle: string;
  metaDesc: string;
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  stats: {
    pools: string;
    years: string;
    experts: string;
    locations: string;
  };
  about: {
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  videoShowcase: {
    title: string;
    subtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: ServiceItem[];
  };
  gallery: {
    title: string;
    subtitle: string;
    seeMore: string;
    seeLess: string;
  };
  contact: {
    title: string;
    subtitle: string;
    address: string;
    phone: string;
    email: string;
    cta: string;
  };
  nav: {
    home: string;
    about: string;
    videos: string;
    services: string;
    gallery: string;
    contact: string;
  };
}