"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/lib/business-config";
import { Phone, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect when scrolled down more than 40px
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial position on mount
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
      {/* Top Announcement Bar - High Contrast */}
      <div 
        className={`bg-white text-[var(--color-obsidian)] text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase px-6 text-center shadow-md relative z-20 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-top overflow-hidden flex items-center justify-center ${
          isScrolled ? "h-0 opacity-0" : "h-10 opacity-100"
        }`}
      >
        <span>PPF · CERAMIC COATINGS · PAINT CORRECTION · VINYL WRAPS — LAHORE</span>
      </div>

      {/* Main Navbar */}
      <div 
        className={`relative z-10 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled 
            ? "bg-[var(--color-obsidian)]/90 backdrop-blur-2xl border-b border-[var(--color-border-subtle)] shadow-2xl" 
            : "bg-gradient-to-b from-black/80 via-black/40 to-transparent border-b border-transparent"
        }`}
      >
        <div 
          className={`max-w-[1400px] mx-auto px-6 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isScrolled ? "h-16 md:h-20" : "h-20 md:h-24"
          }`}
        >
          {/* Brand Logo */}
          <Link href="/" className="flex flex-col justify-center transition-opacity hover:opacity-80">
            <Image 
              src="/logo.png" 
              alt="Protomotive Logo" 
              width={354} 
              height={169} 
              className={`w-auto object-contain brightness-0 invert transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] origin-left ${
                isScrolled ? "h-10 md:h-12" : "h-14 md:h-16"
              }`} 
              priority
            />
          </Link>

          {/* Navigation links */}
          <nav className="hidden lg:flex items-center gap-12 text-[12px] tracking-[0.15em] uppercase font-bold text-[var(--color-silver)]">
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

          {/* Action button */}
          <div className="flex items-center gap-8">
            <a
              href={businessConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 text-[13px] font-mono font-bold text-[var(--color-silver)] hover:text-[var(--color-amber-gold)] transition-colors"
            >
              <Phone className="w-4 h-4 text-[var(--color-amber-gold)]" />
              <span>{businessConfig.phone.display}</span>
            </a>

            <a
              href={businessConfig.phone.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3.5 bg-[var(--color-amber-gold)] text-[var(--color-obsidian)] text-[11px] font-extrabold uppercase tracking-widest hover:bg-white transition-all active:scale-95 shadow-lg"
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