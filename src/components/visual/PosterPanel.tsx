import type { ReactNode } from "react";
import { PaperTexture } from "./PaperTexture";

export function PosterPanel({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <section className={`poster-panel relative overflow-hidden bg-[var(--color-paper)] text-[var(--color-ink)] ${className}`}>
      <PaperTexture />
      <span aria-hidden="true" className="ticket-notch ticket-notch-top" />
      <span aria-hidden="true" className="ticket-notch ticket-notch-bottom" />
      <span aria-hidden="true" className="ticket-notch ticket-notch-left" />
      <span aria-hidden="true" className="ticket-notch ticket-notch-right" />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
