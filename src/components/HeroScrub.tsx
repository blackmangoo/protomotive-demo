"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { gsap } from "@/lib/gsapConfig";

interface HeroScrubProps {
  frameCount: number;
  framePath: string;
  children?: ReactNode;
}

export default function HeroScrub({ frameCount, framePath, children }: HeroScrubProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Pad numbers with leading zeros
  const pad = (num: number, size = 3) => {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const imgs: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `${framePath}frame_${pad(i)}.webp`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= 5 && !loaded) {
          setLoaded(true);
        }
      };
      imgs.push(img);
    }
    
    setImages(imgs);
  }, [frameCount, framePath]);

  useEffect(() => {
    if (!loaded || images.length === 0 || !canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const img = images[0];
    if (img.width && img.height) {
      canvas.width = img.width;
      canvas.height = img.height;
    } else {
      canvas.width = 1920;
      canvas.height = 1080;
    }

    const render = (frameIndex: number) => {
      const safeIndex = Math.min(Math.max(0, frameIndex), images.length - 1);
      const targetImg = images[safeIndex];
      
      if (targetImg && targetImg.complete && targetImg.naturalWidth !== 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const hRatio = canvas.width / targetImg.width;
        const vRatio = canvas.height / targetImg.height;
        const ratio = Math.max(hRatio, vRatio);
        
        const centerShift_x = (canvas.width - targetImg.width * ratio) / 2;
        const centerShift_y = (canvas.height - targetImg.height * ratio) / 2;
        
        ctx.drawImage(
          targetImg,
          0,
          0,
          targetImg.width,
          targetImg.height,
          centerShift_x,
          centerShift_y,
          targetImg.width * ratio,
          targetImg.height * ratio
        );
      }
    };

    render(0);

    const scrollTracker = { frame: 0 };
    const mm = gsap.matchMedia();
    
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.to(scrollTracker, {
        frame: frameCount - 1,
        snap: "frame",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 0.5,
        },
        onUpdate: () => render(Math.round(scrollTracker.frame)),
      });
      return () => tl.kill();
    });
    
    mm.add("(prefers-reduced-motion: reduce)", () => {
      render(frameCount - 1);
    });

    return () => mm.revert();
  }, [loaded, images, frameCount]);

  return (
    <div ref={containerRef} className="relative w-full h-[250vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-black">
        {/* Increased opacity to 100 so animation is vibrant and completely visible */}
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-100"
        />
        
        {/* Deeply reduced scrim, only subtle edge darkening so it doesn't block the car */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none" />
        
        <div className="absolute inset-0 z-20 pointer-events-none">
          {children}
        </div>
      </div>
    </div>
  );
}