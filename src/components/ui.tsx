import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
};

export function ButtonLink({ href, children, variant = "primary" }: ButtonLinkProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center rounded-lg px-5 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--bg)]";
  const variants = {
    primary: "bg-[var(--text)] text-[var(--bg-strong)] hover:-translate-y-0.5 hover:shadow-card",
    secondary:
      "border border-[var(--line)] bg-[var(--surface)] text-[var(--text)] hover:-translate-y-0.5 hover:border-[var(--text)]",
    ghost: "text-[var(--muted)] hover:bg-[var(--soft)] hover:text-[var(--text)]",
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
    <section id={id} data-section={id} className={`mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28 ${className}`}>
      <div className="mb-10 max-w-3xl">
        {eyebrow ? <p className="mb-3 text-sm font-medium text-[var(--accent)]">{eyebrow}</p> : null}
        <h2 className="text-3xl font-semibold tracking-normal text-[var(--text)] sm:text-4xl">{title}</h2>
        {description ? <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">{description}</p> : null}
      </div>
      {children}
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-medium text-[var(--muted)]">
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
    <div className={`relative min-h-56 overflow-hidden rounded-lg border border-[var(--line)] bg-gradient-to-br ${accentClass} p-4`}>
      <div className="absolute right-4 top-4 h-20 w-20 rounded-full border border-white/70 bg-white/50 blur-sm" />
      <div className="relative grid h-full min-h-48 grid-rows-[auto_1fr_auto] gap-4 rounded-lg border border-white/70 bg-white/72 p-4 shadow-soft backdrop-blur">
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
