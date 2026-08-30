"use client";

import { ReactNode } from "react";
import Link from "next/link";

interface UnderlineLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: string;
}

export default function UnderlineLink({ href, children, className = "", target }: UnderlineLinkProps) {
  const isExternal = href.startsWith("http") || target === "_blank";

  const Component = isExternal ? "a" : Link;
  const props = isExternal ? { href, target: "_blank", rel: "noopener noreferrer" } : { href };

  return (
    <Component
      {...props}
      className={`group relative inline-flex items-center font-medium overflow-hidden ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-left scale-x-100 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-0 group-hover:origin-right" />
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-current origin-right scale-x-0 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:scale-x-100 group-hover:origin-left" />
    </Component>
  );
}