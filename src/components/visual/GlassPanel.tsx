import type { ReactNode } from "react";

export function GlassPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`border border-white/12 bg-white/[0.045] backdrop-blur-xl ${className}`}>
      {children}
    </div>
  );
}
