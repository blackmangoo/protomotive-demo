"use client";

import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/lib/business-config";
import { Phone, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col">
      {/* Top Announcement Bar - High Contrast */}
      <div className="bg-white text-[var(--color-obsidian)] text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase py-2.5 px-6 text-center shadow-md relative z-20">
        PRECISION PAINT PROTECTION & AUTOMOTIVE DETAILING STUDIO
      </div>

      {/* Main Navbar */}
      <div className="bg-[var(--color-obsidian)]/80 backdrop-blur-2xl border-b border-[var(--color-border-subtle)] relative z-10">
        <div className="max-w-[1400px] mx-auto px-6 h-24 flex items-center justify-between">
          {/* Brand Logo - Made much larger and styled pure white to fix the blue color clash */}
          <Link href="/" className="flex flex-col justify-center transition-opacity hover:opacity-80">
            <Image 
              src="/logo.png" 
              alt="Protomotive Logo" 
              width={260} 
              height={80} 
              className="h-12 md:h-16 w-auto object-contain brightness-0 invert" 
              priority
            />
          </Link>

          {/* Navigation links - Increased Spacing */}
          <nav className="hidden lg:flex items-center gap-12 text-[12px] tracking-[0.15em] uppercase font-medium text-[var(--color-silver)]">
            <Link href="#services" className="nav-link hover:text-white transition-colors">
              Services
            </Link>
            <Link href="#standards" className="nav-link hover:text-white transition-colors">
              Standards
            </Link>
            <Link href="#reviews" className="nav-link hover:text-white transition-colors">
              Reviews ({businessConfig.rating.score}★)
            </Link>
            <Link href="#location" className="nav-link hover:text-white transition-colors">
              Location
            </Link>
          </nav>

          {/* Action button - Increased Spacing */}
          <div className="flex items-center gap-8">
            <a
              href={businessConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 text-[13px] font-mono text-[var(--color-silver)] hover:text-[var(--color-amber-gold)] transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--color-amber-gold)]" />
              <span>{businessConfig.phone.display}</span>
            </a>

            <a
              href={businessConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-7 py-3 bg-[var(--color-amber-gold)] text-[var(--color-obsidian)] text-[11px] font-bold uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-md"
            >
              <span>Book Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}