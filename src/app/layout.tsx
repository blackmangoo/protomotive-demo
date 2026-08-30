import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/lib/smoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { businessConfig } from "@/lib/business-config";

const bodoni = Bodoni_Moda({ 
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"]
});

const jost = Jost({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600"]
});

export const metadata: Metadata = {
  title: `${businessConfig.name} | ${businessConfig.tagline}`,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${jost.variable} ${bodoni.variable} font-sans bg-[var(--color-obsidian)] text-[var(--color-silver)] antialiased`}>
        <SmoothScrollProvider>
          <Navbar />
          <main>
            {children}
          </main>
          {/* We are removing the old footer render as we have it in page.tsx, or we can just leave it if page.tsx doesn't have it.
          Wait, I put a footer in page.tsx. Let's just not render Footer here for the homepage. 
          Actually, let's keep <Footer /> here and remove the one I added in page.tsx. */}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}