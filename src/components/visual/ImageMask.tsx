import type { ReactNode } from "react";

export function ImageMask({
  children,
  variant = "ticket",
  className = "",
}: {
  children: ReactNode;
  variant?: "ticket" | "arch" | "poster";
  className?: string;
}) {
  return (
    <div className={`image-mask image-mask-${variant} relative overflow-hidden bg-black ${className}`}>
      {children}
      <span aria-hidden="true" className="halftone-overlay pointer-events-none absolute inset-0" />
    </div>
  );
}
