"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  children,
  className = "",
  as = "button",
  href,
  onClick,
  ...props
}: {
  children: ReactNode;
  className?: string;
  as?: "button" | "a";
  href?: string;
  onClick?: () => void;
  [key: string]: any;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={`relative inline-flex items-center justify-center ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );

  if (as === "a" && href) {
    return (
      <a href={href} onClick={onClick} className="inline-block cursor-pointer" target={href.startsWith("http") ? "_blank" : "_self"} rel={href.startsWith("http") ? "noopener noreferrer" : ""}>
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block cursor-pointer border-none bg-transparent p-0 m-0">
      {inner}
    </button>
  );
}