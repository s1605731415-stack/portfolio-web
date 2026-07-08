import Link from "next/link";
import type { ReactNode } from "react";
import { GsapReveal } from "./GsapReveal";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const base =
    "poster-micro inline-flex min-h-11 items-center justify-center px-5 transition focus:outline-none focus:ring-2 focus:ring-[var(--color-paper)] focus:ring-offset-2 focus:ring-offset-[var(--color-black)]";
  const variants = {
    primary: "bg-[var(--color-paper)] text-[var(--color-ink)] hover:-translate-y-0.5",
    secondary:
      "border border-white/18 bg-transparent text-white/72 hover:-translate-y-0.5 hover:border-white/44 hover:text-white",
    ghost: "text-white/58 hover:bg-white/8 hover:text-white",
  };

  return (
    <Link className={`${base} ${variants[variant]}`} href={href}>
      {children}
    </Link>
  );
}

export function SectionShell({
  id,
  eyebrow,
  title,
  description,
  children,
  className = "",
}: {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} data-section={id} className={`mx-auto w-full scroll-mt-28 max-w-[1280px] border-t border-white/10 px-6 py-20 text-white sm:px-8 lg:py-32 ${className}`}>
      <GsapReveal>
        <div className="mb-10 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            {eyebrow ? <p className="poster-micro mb-3 text-white/44">{eyebrow}</p> : null}
            <h2 className="poster-display text-[42px] uppercase leading-[0.95] text-white sm:text-[64px] lg:text-[82px]">
              {title}
            </h2>
          </div>
          {description ? <p className="max-w-[680px] text-[15px] font-normal leading-[1.7] text-white/62 sm:text-[16px]">{description}</p> : null}
        </div>
      </GsapReveal>
      <GsapReveal>{children}</GsapReveal>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="poster-micro inline-flex items-center border border-[var(--color-ink)]/16 bg-transparent px-3 py-1 text-[var(--color-muted)]">
      {children}
    </span>
  );
}

export function PlaceholderImage({ label, accent = "blue" }: { label: string; accent?: "blue" | "green" | "graphite" | "violet" }) {
  const accentClass = {
    blue: "from-[#dfe7ff] to-[#f8fbff]",
    green: "from-[#dff5ea] to-[#f9fcfa]",
    graphite: "from-[#e8ebef] to-[#ffffff]",
    violet: "from-[#eee5ff] to-[#fbf9ff]",
  }[accent];

  return (
    <div className={`relative min-h-56 overflow-hidden rounded-lg border-2 border-[var(--text)] bg-gradient-to-br ${accentClass} p-4 grayscale`}>
      <div className="absolute inset-0 mono-grid" />
      <div className="relative grid h-full min-h-48 grid-rows-[auto_1fr_auto] gap-4 rounded-lg border border-[var(--line)] bg-[var(--bg-strong)]/80 p-4 shadow-soft backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#06d6a0]" />
        </div>
        <div className="grid grid-cols-[0.8fr_1.2fr] gap-3">
          <div className="rounded-lg bg-slate-950/85" />
          <div className="space-y-2">
            <div className="h-3 w-2/3 rounded-full bg-slate-950/80" />
            <div className="h-3 w-5/6 rounded-full bg-slate-300" />
            <div className="h-3 w-1/2 rounded-full bg-slate-300" />
            <div className="mt-4 grid grid-cols-2 gap-2">
              <div className="h-14 rounded-md bg-slate-100" />
              <div className="h-14 rounded-md bg-slate-100" />
            </div>
          </div>
        </div>
        <p className="text-xs font-medium text-slate-500">{label}</p>
      </div>
    </div>
  );
}
