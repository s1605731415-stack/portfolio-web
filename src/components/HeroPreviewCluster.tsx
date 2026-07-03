"use client";

import gsap from "gsap";
import { useEffect, useRef } from "react";

export function HeroPreviewCluster() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const root = element;

    const cards = root.querySelectorAll("[data-hero-card]");
    gsap.fromTo(
      cards,
      { autoAlpha: 0, y: 24, scale: 0.98 },
      { autoAlpha: 1, y: 0, scale: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 },
    );

    const xTo = gsap.quickTo(cards, "x", { duration: 0.55, ease: "power3.out" });
    const yTo = gsap.quickTo(cards, "y", { duration: 0.55, ease: "power3.out" });

    function onMove(event: MouseEvent) {
      const rect = root.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
      xTo(x * 10);
      yTo(y * 10);
    }

    function onLeave() {
      xTo(0);
      yTo(0);
    }

    root.addEventListener("mousemove", onMove);
    root.addEventListener("mouseleave", onLeave);

    return () => {
      root.removeEventListener("mousemove", onMove);
      root.removeEventListener("mouseleave", onLeave);
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <div className="relative min-h-[520px] overflow-hidden rounded-lg border border-[var(--line)] bg-[var(--surface)] p-5 shadow-soft" ref={ref}>
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(66,103,255,0.12),transparent_34%,rgba(29,143,114,0.10))]" />
      <div className="relative grid h-full gap-4">
        <div className="ml-auto w-56 rounded-[1.8rem] border border-[var(--line)] bg-[var(--bg-strong)] p-3 shadow-card" data-hero-card>
          <div className="h-80 rounded-[1.35rem] bg-[var(--soft)] p-4">
            <div className="h-3 w-20 rounded-full bg-[var(--accent-2)]" />
            <div className="mt-5 h-8 w-28 rounded-lg bg-[var(--text)]" />
            <div className="mt-4 space-y-2">
              <div className="h-16 rounded-lg bg-white/80" />
              <div className="h-16 rounded-lg bg-white/80" />
              <div className="h-16 rounded-lg bg-white/80" />
            </div>
          </div>
        </div>
        <div className="-mt-28 w-[82%] rounded-lg border border-[var(--line)] bg-[var(--bg-strong)] p-4 shadow-card" data-hero-card>
          <div className="flex items-center justify-between">
            <div className="h-3 w-24 rounded-full bg-[var(--text)]" />
            <div className="h-8 w-24 rounded-lg bg-[var(--soft)]" />
          </div>
          <div className="mt-5 grid grid-cols-[0.8fr_1.2fr] gap-4">
            <div className="h-32 rounded-lg bg-[var(--soft)]" />
            <div className="space-y-3">
              <div className="h-4 w-4/5 rounded-full bg-[var(--text)]" />
              <div className="h-4 w-3/5 rounded-full bg-[var(--line)]" />
              <div className="grid grid-cols-2 gap-2 pt-3">
                <div className="h-16 rounded-lg border border-[var(--line)]" />
                <div className="h-16 rounded-lg border border-[var(--line)]" />
              </div>
            </div>
          </div>
        </div>
        <div className="ml-10 grid w-[78%] grid-cols-2 gap-3" data-hero-card>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--bg-strong)] p-4 shadow-soft">
            <p className="text-xs font-medium text-[var(--muted)]">Design Tokens</p>
            <div className="mt-4 space-y-2">
              <div className="h-3 rounded-full bg-[var(--accent)]" />
              <div className="h-3 w-3/4 rounded-full bg-[var(--accent-2)]" />
              <div className="h-3 w-1/2 rounded-full bg-[var(--line)]" />
            </div>
          </div>
          <div className="rounded-lg border border-[var(--line)] bg-[var(--text)] p-4 text-[var(--bg-strong)] shadow-soft">
            <p className="text-xs font-medium opacity-70">AI Workflow</p>
            <div className="mt-4 grid gap-2">
              {["Research", "Prompt", "Handoff"].map((label) => (
                <div className="rounded-md bg-white/12 px-3 py-2 text-xs" key={label}>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
