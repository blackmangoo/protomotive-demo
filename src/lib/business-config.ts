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
  tagline: "Professional Auto Detailing & Protection Studio",
  shortBio: "Lahore's premier destination for high-end vehicle care. Specializing in TPU Paint Protection Film, Ceramic & Graphene coatings, and multi-stage paint correction.",
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
      label: "Main Barki Road Studio",
      address: "Main Barki Road, Opposite Paragon City Gate #1",
      landmark: "Near Paragon City",
      area: "Barki",
      city: "Lahore",
      province: "Punjab",
      country: "Pakistan",
      googleMapsUrl: "https://maps.google.com/?q=Protomotive+Barki+Road+Lahore",
      note: "Primary detailing facility featuring climate-controlled application bays.",
    },
    secondary: {
      label: "DHA Phase 5 Studio",
      address: "JAC Defence Motors, near State Life, DHA Phase 5, Ring Road",
      area: "DHA Phase 5",
      city: "Lahore",
      country: "Pakistan",
      note: "Convenient drop-off for DHA residents.",
    }
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
      title: "Paint Correction & Detailing",
      shortDescription: "Eliminate swirl marks and scratches. Our multi-stage compound polishing restores your vehicle's factory gloss, followed by deep interior steam cleaning and leather conditioning.",
      detailedDescription: "Multi-stage rotary compounding eliminating swirls.",
      highlights: [],
      featured: true,
      category: "restoration",
    },
    {
      id: "ppf",
      title: "Paint Protection Film (PPF)",
      shortDescription: "The ultimate defense. We apply high-grade, self-healing TPU film that acts as an invisible shield against stone chips, scratches, and UV degradation.",
      detailedDescription: "Self-healing TPU film engineered to shield factory paint.",
      highlights: [],
      featured: true,
      category: "protection",
    },
    {
      id: "ceramic-coating",
      title: "Ceramic & Graphene Coatings",
      shortDescription: "Unmatched gloss and hydrophobic performance. These advanced molecular coatings actively repel dust, chemicals, and hard water spots.",
      detailedDescription: "Permanent 9H/10H molecular clearcoat protection.",
      highlights: [],
      featured: true,
      category: "protection",
    },
    {
      id: "wraps",
      title: "Vehicle Wraps & Styling",
      shortDescription: "Completely transform your vehicle's look with premium color-change vinyl wraps, while preserving the original paint underneath.",
      detailedDescription: "Bespoke color change vinyl transformations.",
      highlights: [],
      featured: false,
      category: "styling",
    },
    {
      id: "maintenance",
      title: "Studio Maintenance",
      shortDescription: "Keep your investment looking flawless. We offer specialized maintenance washes, oil changes, and routine care designed specifically for coated and filmed vehicles.",
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