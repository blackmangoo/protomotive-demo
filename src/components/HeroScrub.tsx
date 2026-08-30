"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "@/lib/gsapConfig";

interface HeroScrubProps {
  frameCount: number;
  framePath: string;
}

export default function HeroScrub({ frameCount, framePath }: HeroScrubProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loaded, setLoaded] = useState(false);

  // Pad numbers with leading zeros (e.g. 1 -> 001)
  const pad = (num: number, size = 3) => {
    let s = num + "";
    while (s.length < size) s = "0" + s;
    return s;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Load all frames
    const imgs: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    // We start from 1 since ffmpeg usually outputs frame_001.webp
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = `${framePath}frame_${pad(i)}.webp`;
      img.onload = () => {
        loadedCount++;
        // Allow rendering as soon as the first few frames load to prevent a blank screen
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

    // Set canvas dimensions based on the first image
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
        
        // Calculate crop/cover dimensions to fill the canvas like object-fit: cover
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

    // Render the initial frame
    render(0);

    // Create the GSAP ScrollTrigger
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
          end: "+=250%",
          scrub: 0.5, // Slight smoothing
        },
        onUpdate: () => render(Math.round(scrollTracker.frame)),
      });
      return () => tl.kill();
    });
    
    // For users with reduced motion, just show the final glorious state
    mm.add("(prefers-reduced-motion: reduce)", () => {
      render(frameCount - 1);
    });

    return () => mm.revert();
  }, [loaded, images, frameCount]);

  return (
    <div ref={containerRef} className="relative w-full h-[250vh]">
      <div className="sticky top-0 w-full h-screen overflow-hidden bg-[var(--color-obsidian)]">
        <canvas
          ref={canvasRef}
          className="w-full h-full object-cover opacity-80"
        />
        {/* The overlay gradient to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-obsidian)]/60 via-transparent to-[var(--color-obsidian)]" />
      </div>
    </div>
  );
}
