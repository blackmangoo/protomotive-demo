"use client";

import Link from "next/link";
import { businessConfig } from "@/lib/business-config";
import { Phone, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 studio-glass border-b border-[var(--color-border-subtle)]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-sm bg-gradient-to-br from-[var(--color-amber-gold)] to-[var(--color-obsidian)] border border-[var(--color-amber-gold-light)]/40 flex items-center justify-center text-[var(--color-obsidian)] font-bold shadow-lg shadow-[var(--color-amber-gold)]/10">
            <span className="text-white font-serif italic text-xl font-medium">P</span>
          </div>
          <div>
            <span className="text-lg font-semibold tracking-wider text-white uppercase group-hover:text-[var(--color-amber-gold)] transition-colors">
              {businessConfig.name}
            </span>
            <span className="hidden sm:block text-[10px] tracking-[0.2em] text-[var(--color-slate-muted)] uppercase">
              Studio · {businessConfig.location.primary.city}
            </span>
          </div>
        </Link>

        {/* Navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-widest uppercase font-medium text-[var(--color-slate-muted)]">
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
        <div className="flex items-center gap-4">
          <a
            href={businessConfig.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 text-xs font-mono text-[var(--color-slate-muted)] hover:text-[var(--color-amber-gold)] transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-[var(--color-amber-gold)]" />
            <span>{businessConfig.phone.display}</span>
          </a>

          <a
            href={businessConfig.phone.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--color-amber-gold)] text-[var(--color-obsidian)] text-xs font-semibold uppercase tracking-wider hover:bg-[var(--color-amber-gold-light)] transition-all shadow-md active:scale-95"
          >
            <span>Book Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </header>
  );
}
