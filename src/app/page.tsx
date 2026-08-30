"use client";

import { businessConfig } from "@/lib/business-config";
import { Shield, Sparkles, CheckCircle2, Star, ArrowRight, ArrowUpRight, MapPin } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-32 pb-32">
      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-grid-pattern hero-glow px-6 pt-12">
        <div className="max-w-6xl mx-auto text-center space-y-8 relative z-10">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-3 px-4 py-1.5 studio-card border-[var(--color-border-subtle)] text-xs">
            <span className="w-2 h-2 rounded-full bg-[var(--color-amber-gold)] animate-pulse" />
            <span className="eyebrow">{businessConfig.tagline}</span>
          </div>

          {/* Headline */}
          <h1 className="headline text-4xl sm:text-6xl md:text-7xl font-normal text-white max-w-4xl mx-auto">
            Preserving automotive perfection through <span className="italic text-[var(--color-amber-gold)] font-serif">uncompromising precision</span>.
          </h1>

          {/* Subtext */}
          <p className="text-base sm:text-lg text-[var(--color-slate-muted)] max-w-2xl mx-auto font-light leading-relaxed">
            {businessConfig.shortBio}
          </p>

          {/* Metric Badges */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-8 text-xs sm:text-sm font-mono text-[var(--color-slate-muted)]">
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-[var(--color-amber-gold)] fill-[var(--color-amber-gold)]" />
              <span className="text-white font-semibold">{businessConfig.rating.displayRating}</span>
              <span>({businessConfig.rating.reviewCount} Verified Reviews)</span>
            </div>
            <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-bright)]" />
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[var(--color-amber-gold)]" />
              <span className="text-white">{businessConfig.location.primary.area}, {businessConfig.location.primary.city}</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={businessConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-amber-gold)] text-[var(--color-obsidian)] text-xs font-semibold uppercase tracking-widest hover:bg-[var(--color-amber-gold-light)] transition-all shadow-xl active:scale-95"
            >
              <span>Request Studio Allocation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-carbon)] border border-[var(--color-border-subtle)] text-white text-xs font-semibold uppercase tracking-widest hover:border-[var(--color-amber-gold)] transition-colors"
            >
              <span>Explore Treatments</span>
              <ArrowRight className="w-4 h-4 text-[var(--color-slate-muted)]" />
            </a>
          </div>
        </div>
      </section>

      {/* STUDIO STANDARDS / GUARANTEES */}
      <section id="standards" className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {businessConfig.guarantees.map((item, idx) => (
            <div key={idx} className="studio-card p-8 space-y-4">
              <div className="w-10 h-10 bg-[var(--color-graphite)] border border-[var(--color-border-subtle)] flex items-center justify-center text-[var(--color-amber-gold)]">
                {idx === 0 && <Sparkles className="w-5 h-5" />}
                {idx === 1 && <Shield className="w-5 h-5" />}
                {idx === 2 && <CheckCircle2 className="w-5 h-5" />}
              </div>
              <h3 className="text-lg font-semibold text-white tracking-wide">{item.title}</h3>
              <p className="text-sm text-[var(--color-slate-muted)] leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES GRID */}
      <section id="services" className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[var(--color-border-subtle)] pb-8">
          <div className="space-y-2">
            <span className="eyebrow">Studio Capabilities</span>
            <h2 className="headline text-3xl sm:text-4xl text-white">
              Precision Treatments & Preservation
            </h2>
          </div>
          <p className="text-sm text-[var(--color-slate-muted)] max-w-md">
            Every vehicle undergoes comprehensive clearcoat assessment, digital pattern cutting, and controlled thermal curing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessConfig.services.map((service) => (
            <div key={service.id} className="studio-card p-8 flex flex-col justify-between space-y-6 group hover:border-[var(--color-border-bright)] transition-colors">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="eyebrow-muted uppercase tracking-widest">{service.category}</span>
                  {service.featured && (
                    <span className="px-2 py-0.5 text-[10px] uppercase font-mono tracking-wider bg-[var(--color-amber-gold)]/10 text-[var(--color-amber-gold)] border border-[var(--color-amber-gold)]/30">
                      Signature
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-semibold text-white group-hover:text-[var(--color-amber-gold)] transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-[var(--color-slate-muted)] leading-relaxed">
                  {service.shortDescription}
                </p>

                <ul className="space-y-2 pt-2 border-t border-[var(--color-border-subtle)] text-xs text-[var(--color-silver)]">
                  {service.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-amber-gold)] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-[var(--color-border-subtle)]">
                <a
                  href={businessConfig.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--color-amber-gold)] uppercase group-hover:translate-x-1 transition-transform"
                >
                  <span>Inquire for Package</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VERIFIED CUSTOMER SENTIMENTS & REVIEW THEMES */}
      <section id="reviews" className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="studio-card p-10 md:p-14 space-y-10 relative overflow-hidden">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Star className="w-5 h-5 text-[var(--color-amber-gold)] fill-[var(--color-amber-gold)]" />
              <span className="eyebrow">{businessConfig.rating.displayRating} Client Distinction</span>
            </div>
            <h2 className="headline text-3xl sm:text-4xl text-white">
              What Discerning Owners Consistently Value
            </h2>
            <p className="text-sm text-[var(--color-slate-muted)] max-w-xl">
              Synthesized from {businessConfig.rating.reviewCount}+ verified customer experiences across high-value SUV and sports vehicle commissions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {businessConfig.reviewThemes.map((theme, i) => (
              <div key={i} className="p-6 bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] space-y-2">
                <h4 className="text-base font-semibold text-white flex items-center gap-2">
                  <span className="text-[var(--color-amber-gold)] font-mono text-xs">0{i+1}.</span>
                  {theme.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--color-slate-muted)] leading-relaxed">
                  {theme.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION & STUDIO VISITATION */}
      <section id="location" className="max-w-7xl mx-auto px-6 space-y-8">
        <div className="border-b border-[var(--color-border-subtle)] pb-6">
          <span className="eyebrow">Studio Facility Access</span>
          <h2 className="headline text-3xl text-white mt-2">
            Visit Our Dedicated Facilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="studio-card p-8 space-y-4">
            <span className="eyebrow-muted">Primary Detailing Studio</span>
            <h3 className="text-xl font-semibold text-white">{businessConfig.location.primary.label}</h3>
            <p className="text-sm text-[var(--color-silver)]">{businessConfig.location.primary.address}</p>
            <p className="text-xs text-[var(--color-amber-gold)] font-mono">Landmark: {businessConfig.location.primary.landmark}</p>
            <p className="text-xs text-[var(--color-slate-muted)] leading-relaxed">{businessConfig.location.primary.note}</p>
            <div className="pt-2">
              <a
                href={businessConfig.location.primary.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--color-amber-gold)] uppercase"
              >
                <span>Open Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {businessConfig.location.secondary && (
            <div className="studio-card p-8 space-y-4">
              <span className="eyebrow-muted">Secondary Intake Location</span>
              <h3 className="text-xl font-semibold text-white">{businessConfig.location.secondary.label}</h3>
              <p className="text-sm text-[var(--color-silver)]">{businessConfig.location.secondary.address}</p>
              <p className="text-xs text-[var(--color-amber-gold)] font-mono">Area: {businessConfig.location.secondary.area}</p>
              <p className="text-xs text-[var(--color-slate-muted)] leading-relaxed">{businessConfig.location.secondary.note}</p>
              <div className="pt-2">
                <a
                  href={businessConfig.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-[var(--color-amber-gold)] uppercase"
                >
                  <span>Confirm Intake Schedule</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FINAL INTAKE CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="studio-card p-12 md:p-20 text-center space-y-8 bg-gradient-to-b from-[var(--color-carbon)] to-[var(--color-obsidian)] border-[var(--color-border-bright)]">
          <span className="eyebrow">Direct Appointment Desk</span>
          <h2 className="headline text-4xl sm:text-5xl text-white max-w-3xl mx-auto">
            Elevate and safeguard your vehicle’s clearcoat with {businessConfig.name}.
          </h2>
          <p className="text-sm sm:text-base text-[var(--color-slate-muted)] max-w-xl mx-auto">
            Directly connect with our studio specialist to discuss bespoke PPF packages, ceramic tiers, and appointment availability.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={businessConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[var(--color-amber-gold)] text-[var(--color-obsidian)] text-xs font-semibold uppercase tracking-widest hover:bg-[var(--color-amber-gold-light)] transition-all shadow-xl active:scale-95"
            >
              <span>Reserve Appointment: {businessConfig.phone.display}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
