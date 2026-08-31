export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  highlights: string[];
  featured: boolean;
  category: string;
  videoUrl?: string;
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
  tagline: "Premium Paint Protection & Detailing — Lahore",
  shortBio: "We protect and restore the cars you've worked hard to own. PPF, ceramic coatings, paint correction, and vinyl wraps — done right, under one roof in Lahore.",
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
      shortDescription: "Swirl marks, scratches, oxidation — we remove them all. Your paint is machine-polished back to a deep, mirror-like finish, and the interior gets a thorough steam clean and leather treatment.",
      detailedDescription: "Multi-stage machine polishing and full interior restoration.",
      highlights: [],
      featured: true,
      category: "restoration",
      videoUrl: "/assets/services/paint-correction.mp4",
    },
    {
      id: "ppf",
      title: "Paint Protection Film (PPF)",
      shortDescription: "A virtually invisible film that takes the hit so your paint doesn't. Protects against stone chips, road debris, minor scratches, and UV fading — with self-healing technology that keeps it looking fresh.",
      detailedDescription: "Transparent self-healing film for long-term paint defense.",
      highlights: [],
      featured: true,
      category: "protection",
      videoUrl: "/assets/services/ppf.mp4",
    },
    {
      id: "ceramic-coating",
      title: "Ceramic & Graphene Coatings",
      shortDescription: "A permanent protective layer that bonds to your paint at a molecular level. Water beads and rolls right off, dust barely sticks, and that showroom gloss lasts for years — not weeks.",
      detailedDescription: "Long-lasting hydrophobic coatings for gloss and easy maintenance.",
      highlights: [],
      featured: true,
      category: "protection",
      videoUrl: "/assets/services/ceramic-coating.mp4",
    },
    {
      id: "wraps",
      title: "Vehicle Wraps & Styling",
      shortDescription: "Want a completely different look without touching your original paint? We wrap your vehicle in premium vinyl — matte, satin, gloss, or custom colors — fully reversible whenever you choose.",
      detailedDescription: "Full and partial color-change vinyl wraps.",
      highlights: [],
      featured: false,
      category: "styling",
      videoUrl: "/assets/services/vinyl-wraps.mp4",
    },
    {
      id: "maintenance",
      title: "Aftercare & Maintenance",
      shortDescription: "Your coating or PPF needs the right care to stay effective. We offer safe, pH-neutral maintenance washes and periodic inspections specifically designed for protected vehicles.",
      detailedDescription: "Ongoing care programs for coated and wrapped vehicles.",
      highlights: [],
      featured: false,
      category: "maintenance",
      videoUrl: "/assets/services/maintenance.mp4",
    },
  ],
  reviewThemes: [],
  guarantees: []
};

export default businessConfig;