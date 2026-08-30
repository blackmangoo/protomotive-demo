"use client";

import { useEffect, useRef } from "react";
import { businessConfig } from "@/lib/business-config";
import { MapPin, ArrowRight, ArrowUpRight } from "lucide-react";
import HeroScrub from "@/components/HeroScrub";
import MagneticButton from "@/components/MagneticButton";
import UnderlineLink from "@/components/UnderlineLink";
import { motion, useInView } from "framer-motion";
import { gsap } from "@/lib/gsapConfig";

function FadeUpRow({ children, reverse }: { children: React.ReactNode; reverse?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center ${
        reverse ? "" : ""
      }`}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const headlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headlineRef.current) {
      gsap.fromTo(
        headlineRef.current.children,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          delay: 0.2, // Small delay for loading
        }
      );
    }
  }, []);

  return (
    <div className="bg-[var(--color-obsidian)] text-[var(--color-silver)] font-sans antialiased selection:bg-[var(--color-amber-gold)] selection:text-[var(--color-obsidian)]">
      
      {/* HERO SECTION WITH SCRUB */}
      <section className="relative">
        <HeroScrub frameCount={240} framePath="/assets/hero-frames/" />
        
        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center pointer-events-none px-6 z-10 pt-20">
          <div ref={headlineRef} className="max-w-6xl mx-auto text-center space-y-8 pointer-events-auto flex flex-col items-center">
            
            <div className="inline-flex items-center gap-3 px-4 py-1.5 border border-[var(--color-border-subtle)] text-xs backdrop-blur-md bg-[var(--color-obsidian)]/50 tracking-widest uppercase opacity-0">
              <span className="w-2 h-2 rounded-full bg-[var(--color-amber-gold)] animate-pulse" />
              <span className="text-[var(--color-silver)]">{businessConfig.tagline}</span>
            </div>

            <h1 className="text-5xl sm:text-7xl md:text-8xl font-normal text-white max-w-5xl mx-auto drop-shadow-2xl opacity-0">
              Shield your asset from <span className="italic text-[var(--color-amber-gold)] font-serif block mt-2">Lahore's elements</span>.
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-slate-muted)] max-w-2xl mx-auto font-light leading-relaxed opacity-0">
              {businessConfig.shortBio}
            </p>

            <div className="pt-8 opacity-0">
              <MagneticButton 
                as="a" 
                href={businessConfig.phone.whatsapp}
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-[var(--color-amber-gold)] text-[var(--color-obsidian)] text-xs font-semibold uppercase tracking-widest hover:bg-[var(--color-amber-gold-light)] transition-colors"
              >
                <span>Reserve Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </MagneticButton>
            </div>
            
          </div>
        </div>
      </section>

      {/* ASYMMETRIC SERVICES SECTION */}
      <section className="py-32 md:py-48 max-w-[1400px] mx-auto px-6 space-y-32 md:space-y-48">
        <div className="space-y-4 border-b border-[var(--color-border-subtle)] pb-12 mb-24">
          <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-amber-gold)]">Studio Capabilities</span>
          <h2 className="text-4xl sm:text-6xl text-white font-serif italic">
            Precision Treatments
          </h2>
        </div>

        {businessConfig.services.map((service, idx) => {
          const isReverse = idx % 2 !== 0;
          
          return (
            <FadeUpRow key={service.id} reverse={isReverse}>
              {/* Text Side (spans 5 cols) */}
              <div className={`lg:col-span-5 space-y-8 ${isReverse ? 'lg:order-2 lg:pl-12' : 'lg:pr-12'}`}>
                <div className="space-y-4">
                  <span className="text-xs font-mono tracking-wider text-[var(--color-slate-muted)]">
                    0{idx + 1} — {service.category.toUpperCase()}
                  </span>
                  <h3 className="text-3xl sm:text-4xl font-normal text-white">
                    {service.title}
                  </h3>
                  <p className="text-lg text-[var(--color-silver)] leading-relaxed font-light">
                    {service.shortDescription}
                  </p>
                </div>
                
                <div className="pt-8">
                  <UnderlineLink href={businessConfig.phone.whatsapp} className="text-[var(--color-amber-gold)] text-xs uppercase tracking-widest gap-2">
                    Inquire via WhatsApp <ArrowUpRight className="w-3 h-3" />
                  </UnderlineLink>
                </div>
              </div>

              {/* Visual Side (spans 7 cols) */}
              <div className={`lg:col-span-7 h-[400px] sm:h-[600px] bg-[var(--color-carbon)] relative overflow-hidden group ${isReverse ? 'lg:order-1' : ''}`}>
                {/* Abstract placeholder visual for asymmetric layout */}
                <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-[var(--color-obsidian)] to-[var(--color-amber-gold)]/20 mix-blend-overlay group-hover:scale-105 transition-transform duration-1000 ease-out" />
                <div className="absolute inset-0 border border-[var(--color-border-subtle)] m-4" />
                <div className="absolute bottom-8 left-8 text-[10px] uppercase tracking-widest font-mono text-[var(--color-slate-muted)]">
                  {service.title} / Data Sheet
                </div>
              </div>
            </FadeUpRow>
          );
        })}
      </section>

      {/* GALLERY SECTION (Placeholder) */}
      <section className="py-32 md:py-48 bg-[var(--color-carbon)] border-y border-[var(--color-border-subtle)]">
        <div className="max-w-[1400px] mx-auto px-6 space-y-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-amber-gold)]">Visual Proof</span>
              <h2 className="text-4xl sm:text-6xl text-white font-serif italic">
                Illustrative Imagery
              </h2>
            </div>
            <p className="text-sm text-[var(--color-slate-muted)] max-w-sm">
              Note: The following images serve as illustrative sample work demonstrating the level of gloss and precision expected.
            </p>
          </div>

          {/* Masonry Layout Placeholder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="h-[400px] bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)]" />
            <div className="h-[600px] bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] hidden md:block" />
            <div className="h-[500px] bg-[var(--color-obsidian)] border border-[var(--color-border-subtle)] hidden lg:block" />
          </div>
        </div>
      </section>

      {/* CONTACT & LOCATION */}
      <section className="py-32 md:py-48 max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <div className="space-y-12">
            <div className="space-y-4">
              <span className="text-xs tracking-[0.2em] uppercase text-[var(--color-amber-gold)]">Intake & Consultation</span>
              <h2 className="text-4xl sm:text-6xl text-white font-serif italic">
                Connect with the Studio
              </h2>
              <p className="text-lg text-[var(--color-silver)] font-light max-w-md">
                Directly connect with our studio specialist to discuss bespoke PPF packages, ceramic tiers, and appointment availability.
              </p>
            </div>

            <div className="space-y-8 pt-8">
              <div className="space-y-2">
                <p className="text-xs font-mono text-[var(--color-slate-muted)] uppercase tracking-wider">Direct WhatsApp</p>
                <UnderlineLink href={businessConfig.phone.whatsapp} className="text-2xl text-white">
                  {businessConfig.phone.display}
                </UnderlineLink>
              </div>
              
              <div className="space-y-2">
                <p className="text-xs font-mono text-[var(--color-slate-muted)] uppercase tracking-wider">Studio Address</p>
                <address className="not-italic text-lg text-[var(--color-silver)] leading-relaxed">
                  {businessConfig.location.primary.label}<br />
                  {businessConfig.location.primary.address}<br />
                  {businessConfig.location.primary.city}, {businessConfig.location.primary.country}
                </address>
                <div className="pt-2">
                  <UnderlineLink href={businessConfig.location.primary.googleMapsUrl} className="text-sm text-[var(--color-amber-gold)]">
                    Get Directions
                  </UnderlineLink>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-[500px] lg:h-auto bg-[var(--color-carbon)] relative group overflow-hidden border border-[var(--color-border-subtle)]">
            <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13606.332150346332!2d74.45520845!3d31.508081699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f84447f5cf5%3A0x63391216d7a5b3f2!2sPark%20View%20City%20Lahore!5e0!3m2!1sen!2s!4v1717000000000!5m2!1sen!2s" 
              className="absolute inset-0 w-full h-full grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-[var(--color-border-subtle)] py-12 px-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-[var(--color-slate-muted)] uppercase tracking-wider">
            &copy; {new Date().getFullYear()} {businessConfig.legalName}
          </div>
          <div className="flex gap-6 text-xs text-[var(--color-slate-muted)] uppercase tracking-wider">
            <UnderlineLink href={businessConfig.socials.instagram}>Instagram</UnderlineLink>
            <UnderlineLink href={businessConfig.socials.facebook}>Facebook</UnderlineLink>
          </div>
        </div>
      </footer>

      {/* Sticky Mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 w-full p-4 pb-safe bg-[var(--color-obsidian)]/90 backdrop-blur-md border-t border-[var(--color-border-subtle)] z-50">
        <a
          href={businessConfig.phone.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center min-h-[48px] gap-2 bg-[var(--color-amber-gold)] text-[var(--color-obsidian)] text-xs font-semibold uppercase tracking-widest shadow-lg"
        >
          <span>WhatsApp Consultation</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
