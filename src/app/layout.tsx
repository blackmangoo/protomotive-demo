import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/smoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessConfig } from "@/lib/business-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: `${businessConfig.name} — ${businessConfig.tagline}`,
  description: businessConfig.shortBio,
  keywords: [
    "PPF Lahore",
    "Paint Protection Film Pakistan",
    "Ceramic Coating Lahore",
    "Car Detailing Barki Road",
    "Protomotive Lahore",
    "Car wrapping Lahore",
    "Auto spa Lahore",
  ],
  openGraph: {
    title: `${businessConfig.name} — ${businessConfig.tagline}`,
    description: businessConfig.shortBio,
    siteName: businessConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${instrumentSerif.variable}`}>
      <body>
        <SmoothScrollProvider>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </SmoothScrollProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutoRepair",
              "name": businessConfig.name,
              "description": businessConfig.shortBio,
              "telephone": businessConfig.phone.international,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": businessConfig.location.primary.address,
                "addressLocality": businessConfig.location.primary.city,
                "addressRegion": businessConfig.location.primary.province,
                "addressCountry": "PK"
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": businessConfig.rating.score,
                "reviewCount": businessConfig.rating.reviewCount,
                "bestRating": "5",
                "worstRating": "1"
              },
              "openingHours": "Mo-Sa 10:00-20:00"
            })
          }}
        />
      </body>
    </html>
  );
}
