"use client";

import Link from "next/link";
import { businessConfig } from "@/lib/business-config";
import { MapPin, Clock, Star, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-obsidian)] border-t border-[var(--color-border-subtle)] text-[var(--color-slate-muted)] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-[var(--color-border-subtle)]">
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[var(--color-amber-gold)] flex items-center justify-center text-[var(--color-obsidian)] font-bold">
                <span className="font-serif italic text-lg text-black font-semibold">P</span>
              </div>
              <span className="text-lg font-semibold tracking-wider text-white uppercase">
                {businessConfig.name}
              </span>
            </div>
            <p className="text-sm leading-relaxed text-[var(--color-slate-muted)]">
              {businessConfig.shortBio}
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs text-[var(--color-amber-gold)] font-medium">
              <Star className="w-4 h-4 fill-[var(--color-amber-gold)]" />
              <span>Rated {businessConfig.rating.displayRating} across {businessConfig.rating.reviewCount}+ verified clients</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h4 className="eyebrow text-white mb-6">Master Treatments</h4>
            <ul className="space-y-3 text-sm">
              {businessConfig.services.map((service) => (
                <li key={service.id}>
                  <Link
                    href="#services"
                    className="hover:text-[var(--color-amber-gold)] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Studio Locations */}
          <div>
            <h4 className="eyebrow text-white mb-6">Facilities</h4>
            <div className="space-y-5 text-sm">
              <div className="space-y-1">
                <p className="text-white font-medium flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[var(--color-amber-gold)] shrink-0" />
                  {businessConfig.location.primary.label}
                </p>
                <p className="text-xs text-[var(--color-slate-muted)] pl-5">
                  {businessConfig.location.primary.address}
                </p>
                <p className="text-xs text-[var(--color-slate-muted)] pl-5 italic">
                  ({businessConfig.location.primary.landmark})
                </p>
              </div>

              {businessConfig.location.secondary && (
                <div className="space-y-1">
                  <p className="text-white font-medium flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[var(--color-amber-gold)] shrink-0" />
                    {businessConfig.location.secondary.label}
                  </p>
                  <p className="text-xs text-[var(--color-slate-muted)] pl-5">
                    {businessConfig.location.secondary.address}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Col 4: Direct Intake & Hours */}
          <div>
            <h4 className="eyebrow text-white mb-6">Operating Schedule</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock className="w-3.5 h-3.5 text-[var(--color-amber-gold)] shrink-0 mt-1" />
                <div className="text-xs space-y-1">
                  <p><span className="text-white">Mon – Thu & Sat:</span> {businessConfig.hours.weekdays}</p>
                  <p><span className="text-white">Friday:</span> {businessConfig.hours.friday}</p>
                  <p><span className="text-white">Sunday:</span> {businessConfig.hours.sunday}</p>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href={businessConfig.phone.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[var(--color-carbon)] border border-[var(--color-border-subtle)] hover:border-[var(--color-amber-gold)] text-white text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Direct Line: {businessConfig.phone.display}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[var(--color-amber-gold)]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-slate-dark)] gap-4">
          <p>© {new Date().getFullYear()} {businessConfig.name} ({businessConfig.legalName}). All rights reserved.</p>
          <div className="flex items-center gap-6 text-[var(--color-slate-muted)]">
            <a href={businessConfig.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Instagram {businessConfig.socials.handle}
            </a>
            <a href={businessConfig.socials.facebook} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
