"use client";

import Link from "next/link";
import Image from "next/image";
import { businessConfig } from "@/lib/business-config";
import { Phone, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-obsidian)]/60 backdrop-blur-xl border-b border-[var(--color-border-subtle)]">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex flex-col justify-center">
          <Image 
            src="/logo.png" 
            alt="Protomotive Logo" 
            width={180} 
            height={40} 
            className="h-6 md:h-7 w-auto object-contain" 
            priority
          />
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.15em] uppercase font-medium text-[var(--color-slate-muted)]">
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
        <div className="flex items-center gap-5">
          <a
            href={businessConfig.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-[12px] font-mono text-[var(--color-slate-muted)] hover:text-[var(--color-amber-gold)] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--color-amber-gold)]" />
            <span>{businessConfig.phone.display}</span>
          </a>

          <a
            href={businessConfig.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 bg-transparent border border-[var(--color-amber-gold)] text-[var(--color-amber-gold)] text-[10px] font-semibold uppercase tracking-widest hover:bg-[var(--color-amber-gold)] hover:text-[var(--color-obsidian)] transition-all active:scale-95"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}