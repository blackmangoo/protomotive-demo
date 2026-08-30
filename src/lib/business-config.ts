export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedDescription: string;
  highlights: string[];
  featured: boolean;
  category: "protection" | "restoration" | "styling" | "maintenance";
}

export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  shortBio: string;
  category: string;
  established?: string;
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
    whatsapp: "https://wa.me/923005005666?text=Hi%20Protomotive%20Team,%20I%20would%20like%20to%20inquire%20about%20a%20detailing%20or%20PPF%20package.",
    international: "+92 300 5005666",
  },
  email: "info@protomotive.pk",
  location: {
    primary: {
      label: "Barki Road Studio (Main)",
      address: "Main Barki Road, Block D, Park View CHS",
      landmark: "Opposite Attock Petrol Station / Paragon City Gate #1",
      area: "Park View / Barki Road",
      city: "Lahore",
      province: "Punjab",
      country: "Pakistan",
      googleMapsUrl: "https://maps.google.com/?q=Protomotive+Barki+Road+Lahore",
      note: "Primary detailing facility featuring climate-controlled application bays and hexagonal high-CRI inspection lighting.",
    },
    secondary: {
      label: "DHA Express Facility",
      address: "JAC Defence Motors, Near State Life & Main Ring Road",
      area: "DHA Phase 5",
      city: "Lahore",
      country: "Pakistan",
      note: "Alternative convenient intake and service branch during ongoing Barki Road roadwork.",
    },
  },
  rating: {
    score: 4.8,
    maxScore: 5.0,
    reviewCount: 31,
    platform: "Google Business & Verified Directories",
    displayRating: "4.8 / 5.0",
  },
  hours: {
    weekdays: "10:00 AM – 8:00 PM",
    friday: "10:00 AM – 8:00 PM (Break 1:00 PM – 2:30 PM for Jumu'ah)",
    saturday: "10:00 AM – 8:00 PM",
    sunday: "By Prior Appointment Only",
    notice: "Prior slot reservation is recommended for multi-stage compounding and full-body PPF installations.",
  },
  socials: {
    facebook: "https://facebook.com/protomotive.pk",
    instagram: "https://instagram.com/protomotive.pk",
    handle: "@protomotive.pk",
  },
  services: [
    {
      id: "ppf",
      title: "Paint Protection Film (PPF)",
      shortDescription: "Self-healing optical-grade TPU film engineered to shield factory paint from stone chips, scratches, and UV damage.",
      detailedDescription: "Full-body and high-impact custom edge-wrapped TPU film installations. Features instant heat-activated self-healing, hydrophobic stain barrier, and zero orange peel optical clarity.",
      highlights: [
        "Self-Healing TPU Technology",
        "Seamless Edge-Tucking (No Visible Lines)",
        "High-Impact Stone Chip & Scrape Defense",
        "Multi-Year Manufacturer Warranty",
      ],
      featured: true,
      category: "protection",
    },
    {
      id: "ceramic-coating",
      title: "Ceramic & Graphene Nanocoatings",
      shortDescription: "Permanent 9H/10H molecular clearcoat protection with ultra-hydrophobic contact angle and deep wet-look reflection.",
      detailedDescription: "Multi-layer nanotechnology crystal coatings that bond directly with the vehicle's paintwork, shielding against environmental fallout, bird lime etching, harsh UV oxidation, and road grime.",
      highlights: [
        "9H/10H Hardness Rating",
        "Intense Hydrophobic Water Beading",
        "UV & Oxidation Resistance",
        "Permanent Mirror-Depth Gloss",
      ],
      featured: true,
      category: "protection",
    },
    {
      id: "paint-correction",
      title: "Precision Paint Correction",
      shortDescription: "Multi-stage rotary and random orbital compounding eliminating up to 95% of swirls, buffer trails, and blemishes.",
      detailedDescription: "Microscopic leveling of the clearcoat under high-CRI detailing inspection arrays. Restores depth, eliminates paint hazing, and prepares surfaces for flaw-free film or ceramic bonding.",
      highlights: [
        "Digital Paint Depth Gauge Verification",
        "Swirl, Scratch & Hologram Removal",
        "High-CRI Multi-Angle Light Inspection",
        "True Mirror Clarity Without Fillers",
      ],
      featured: true,
      category: "restoration",
    },
    {
      id: "interior-detailing",
      title: "Cabin Sanctuary Detailing",
      shortDescription: "Meticulous steam sanitization, leather conditioning, and deep fabric extraction for a factory-fresh cabin.",
      detailedDescription: "Complete interior rejuvenation including anti-bacterial steam cleaning of air vents, hot-water carpet extraction, and pH-balanced leather cleansing with matte UV sealants.",
      highlights: [
        "Anti-Bacterial Steam Cleansing",
        "Aniline & Nappa Leather Nourishment",
        "Deep Carpet & Headliner Extraction",
        "OEM Matte Non-Greasy Finish",
      ],
      featured: false,
      category: "restoration",
    },
    {
      id: "vehicle-wraps",
      title: "Bespoke Vinyl Wraps & Styling",
      shortDescription: "Color change vinyl transformations, roof blackouts, and satin de-chroming for refined aesthetic character.",
      detailedDescription: "Premium cast vinyl wrapping executed with complete component disassembly for factory-level edge wrapping.",
      highlights: [
        "Full & Partial Color Change Wraps",
        "Satin & Gloss Chrome Deletes",
        "Paint-Safe Reversible Installation",
        "Tucked & Disassembled Seamless Edges",
      ],
      featured: false,
      category: "styling",
    },
  ],
  reviewThemes: [
    {
      title: "Flawless PPF Edge Wrapping",
      description: "Clients consistently praise the invisible seam lines and razor-sharp edge tucks around emblems and body gaps.",
    },
    {
      title: "Mirror Paint Correction",
      description: "Recognized for converting weathered, swirl-damaged clearcoats into crystal-clear optical reflections.",
    },
    {
      title: "Transparent Technical Advice",
      description: "Valued for clear, honest guidance on TPU film grades, thickness options, and realistic maintenance routines.",
    },
    {
      title: "White-Glove Care for Luxury Vehicles",
      description: "Trusted handling for high-value SUVs and sports sedans (Land Cruisers, Defenders, Audis, and Porsches).",
    },
  ],
  guarantees: [
    {
      title: "Cleanroom Environment",
      detail: "Dedicated dust-controlled bays and precision high-CRI inspection grids ensure zero contamination.",
    },
    {
      title: "Certified Application",
      detail: "Trained technicians utilizing precision digital template cuts and hand-finished edge tucks.",
    },
    {
      title: "Documented Warranty",
      detail: "Official backing against yellowing, cracking, bubbling, or clearcoat delamination.",
    },
  ],
};

export default businessConfig;
