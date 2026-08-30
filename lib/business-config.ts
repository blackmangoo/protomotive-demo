export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  highlights: string[];
  featured: boolean;
  category: string;
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortBio: string;
  category: string;
  phone: {
    display: string;
    raw: string;
    whatsapp: string;
    international: string;
  };
  email: string;
  location: {
    primary: {
      label: string;
      address: string;
      landmark: string;
      area: string;
      city: string;
      province: string;
      country: string;
      postalCode?: string;
      googleMapsUrl: string;
      note?: string;
    };
    secondary?: {
      label: string;
      address: string;
      area: string;
      city: string;
      country: string;
      googleMapsUrl?: string;
      note: string;
    };
  };
  rating: {
    score: number;
    maxScore: number;
    reviewCount: number;
    platform: string;
    displayRating: string;
  };
  hours: {
    weekdays: string;
    friday: string;
    saturday: string;
    sunday: string;
    notice: string;
  };
  socials: {
    facebook: string;
    instagram: string;
    handle: string;
  };
  services: ServiceItem[];
  reviewThemes: {
    title: string;
    description: string;
  }[];
  guarantees: {
    title: string;
    detail: string;
  }[];
}

export const businessConfig: BusinessConfig = {
  name: "Protomotive",
  legalName: "Protomotive Car Care Studio",
  tagline: "Precision Paint Protection & Automotive Detailing Studio",
  shortBio: "Lahore's dedicated automotive preservation studio specializing in high-grade TPU paint protection films, ceramic nanotechnology coatings, and precision multi-stage paint correction.",
  category: "Auto Detailing & Paint Protection Studio",
  phone: {
    display: "0300 5005666",
    raw: "+923005005666",
    whatsapp: "https://wa.me/923005005666?text=Hi%20Protomotive%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20package.",
    international: "+92 300 5005666",
  },
  email: "info@protomotive.pk",
  location: {
    primary: {
      label: "Barki Road Studio (Main)",
      address: "Main Barki Road, Block D, Park View CHS",
      landmark: "Opposite Attock Petrol Station",
      area: "Park View",
      city: "Lahore",
      province: "Punjab",
      country: "Pakistan",
      googleMapsUrl: "https://maps.google.com/?q=Protomotive+Barki+Road+Lahore",
      note: "Primary detailing facility featuring climate-controlled application bays.",
    },
  },
  rating: {
    score: 4.8,
    maxScore: 5.0,
    reviewCount: 31,
    platform: "Google Business",
    displayRating: "4.8 / 5.0",
  },
  hours: {
    weekdays: "10:00 AM - 8:00 PM",
    friday: "10:00 AM - 8:00 PM (Break 1:00 PM - 2:30 PM)",
    saturday: "10:00 AM - 8:00 PM",
    sunday: "By Appointment Only",
    notice: "Prior slot reservation recommended.",
  },
  socials: {
    facebook: "https://facebook.com/protomotive.pk",
    instagram: "https://instagram.com/protomotive.pk",
    handle: "@protomotive.pk",
  },
  services: [
    {
      id: "detailing",
      title: "Precision Detailing",
      shortDescription: "Drive away with a flawless, mirror-like finish that turns heads and commands respect on every road.",
      detailedDescription: "Multi-stage rotary compounding eliminating swirls.",
      highlights: [],
      featured: true,
      category: "restoration",
    },
    {
      id: "ppf",
      title: "Paint Protection Film (PPF)",
      shortDescription: "Drive with absolute peace of mind knowing your factory paint is shielded from stone chips, scratches, and local road debris.",
      detailedDescription: "Self-healing TPU film engineered to shield factory paint.",
      highlights: [],
      featured: true,
      category: "protection",
    },
    {
      id: "ceramic-coating",
      title: "Ceramic Coating",
      shortDescription: "Never worry about fading paint again with a permanent, glass-like barrier that actively repels dust, hard water, and extreme UV rays.",
      detailedDescription: "Permanent 9H/10H molecular clearcoat protection.",
      highlights: [],
      featured: true,
      category: "protection",
    },
    {
      id: "wraps",
      title: "Vehicle Wraps",
      shortDescription: "Completely transform your vehicle's character overnight while preserving the original paint underneath.",
      detailedDescription: "Bespoke color change vinyl transformations.",
      highlights: [],
      featured: false,
      category: "styling",
    },
    {
      id: "maintenance",
      title: "Studio Maintenance",
      shortDescription: "Keep your investment looking showroom-ready year-round with our safe, pH-neutral maintenance wash programs.",
      detailedDescription: "Safe wash programs.",
      highlights: [],
      featured: false,
      category: "maintenance",
    },
  ],
  reviewThemes: [],
  guarantees: []
};

export default businessConfig;