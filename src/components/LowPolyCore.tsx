"use client";

import gsap from "gsap";
import type { CSSProperties } from "react";
import { useEffect, useRef } from "react";

const orbitNodes = [
  { label: "research", x: "14%", y: "24%", delay: "0s" },
  { label: "system", x: "79%", y: "18%", delay: "-2.4s" },
  { label: "motion", x: "12%", y: "72%", delay: "-4.8s" },
  { label: "handoff", x: "82%", y: "75%", delay: "-7.2s" },
];

export function LowPolyCore() {
  const rootRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const core = coreRef.current;
    if (!root || !core || window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches) {
      return;
    }

    const rotateX = gsap.quickTo(core, "rotationX", { duration: 0.7, ease: "power3.out" });
    const rotateY = gsap.quickTo(core, "rotationY", { duration: 0.7, ease: "power3.out" });
    const moveX = gsap.quickTo(core, "x", { duration: 0.8, ease: "power3.out" });
    const moveY = gsap.quickTo(core, "y", { duration: 0.8, ease: "power3.out" });
    const glowX = gsap.quickSetter(root, "--pointer-x") as (value: string) => void;
    const glowY = gsap.quickSetter(root, "--pointer-y") as (value: string) => void;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = root.getBoundingClientRect();
      const px = (event.clientX - bounds.left) / bounds.width - 0.5;
      const py = (event.clientY - bounds.top) / bounds.height - 0.5;
      rotateY(px * 10);
      rotateX(py * -8);
      moveX(px * 18);
      moveY(py * 14);
      glowX(`${(px + 0.5) * 100}%`);
      glowY(`${(py + 0.5) * 100}%`);
    };

    const handlePointerLeave = () => {
      rotateX(0);
      rotateY(0);
      moveX(0);
      moveY(0);
      glowX("50%");
      glowY("50%");
    };

    root.addEventListener("pointermove", handlePointerMove);
    root.addEventListener("pointerleave", handlePointerLeave);

    const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
    timeline
      .fromTo(root.querySelectorAll("[data-core-line]"), { autoAlpha: 0, scale: 0.86 }, { autoAlpha: 1, scale: 1, duration: 1.1, stagger: 0.03 })
      .fromTo(root.querySelectorAll("[data-core-node]"), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.7, stagger: 0.08 }, "-=0.55");

    return () => {
      root.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerleave", handlePointerLeave);
      timeline.kill();
    };
  }, []);

  return (
    <div
      className="low-poly-core relative mx-auto aspect-square w-full max-w-[760px]"
      ref={rootRef}
      style={{ "--pointer-x": "50%", "--pointer-y": "50%" } as CSSProperties}
    >
      <div className="absolute inset-[7%] rounded-full border border-white/[0.055]" />
      <div className="absolute inset-[16%] rounded-full border border-dashed border-white/[0.09]" />
      <div className="absolute inset-[25%] rounded-full border border-white/[0.04]" />

      <div className="absolute inset-0 animate-[slowSpin_34s_linear_infinite]">
        <svg aria-hidden="true" className="h-full w-full" viewBox="0 0 760 760">
          <g fill="none" stroke="rgba(255,255,255,0.16)" strokeWidth="1">
            <ellipse cx="380" cy="380" rx="332" ry="128" transform="rotate(-12 380 380)" />
            <ellipse cx="380" cy="380" rx="312" ry="110" transform="rotate(32 380 380)" />
            <ellipse cx="380" cy="380" rx="272" ry="88" transform="rotate(76 380 380)" />
          </g>
        </svg>
      </div>

      <div className="absolute inset-[12%] [perspective:1200px]">
        <div className="relative h-full w-full animate-[coreFloat_8s_ease-in-out_infinite]" ref={coreRef}>
          <svg aria-label="Low-poly AI design system core" className="h-full w-full overflow-visible" viewBox="0 0 620 620">
            <defs>
              <radialGradient id="coreGlow" cx="50%" cy="40%" r="62%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.88" />
                <stop offset="45%" stopColor="#98b9ad" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.02" />
              </radialGradient>
              <linearGradient id="facetA" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.42" />
                <stop offset="100%" stopColor="#2e3735" stopOpacity="0.12" />
              </linearGradient>
              <linearGradient id="facetB" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#b8ffe4" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0a0d0c" stopOpacity="0.2" />
              </linearGradient>
            </defs>

            <polygon data-core-line points="310,36 530,170 536,422 310,584 84,424 90,174" fill="rgba(255,255,255,0.025)" stroke="rgba(255,255,255,0.28)" strokeWidth="1.5" />
            <polygon data-core-line points="310,36 530,170 310,282 90,174" fill="url(#facetA)" stroke="rgba(255,255,255,0.2)" />
            <polygon data-core-line points="90,174 310,282 84,424" fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.14)" />
            <polygon data-core-line points="530,170 310,282 536,422" fill="rgba(255,255,255,0.095)" stroke="rgba(255,255,255,0.14)" />
            <polygon data-core-line points="84,424 310,282 310,584" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" />
            <polygon data-core-line points="536,422 310,282 310,584" fill="url(#facetB)" stroke="rgba(255,255,255,0.14)" />
            <polygon data-core-line points="90,174 310,36 84,424" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)" />
            <polygon data-core-line points="530,170 310,36 536,422" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" />

            <g data-core-line stroke="rgba(255,255,255,0.26)" strokeWidth="1.1">
              <line x1="310" y1="36" x2="310" y2="584" />
              <line x1="90" y1="174" x2="536" y2="422" />
              <line x1="530" y1="170" x2="84" y2="424" />
              <line x1="84" y1="424" x2="530" y2="170" />
              <line x1="90" y1="174" x2="310" y2="584" />
              <line x1="530" y1="170" x2="310" y2="584" />
            </g>

            <circle data-core-line cx="310" cy="282" r="82" fill="url(#coreGlow)" opacity="0.56" />
            <circle data-core-node cx="310" cy="282" r="8" fill="#e8fff6" />
            <circle data-core-node cx="310" cy="36" r="5" fill="#d7fff1" />
            <circle data-core-node cx="530" cy="170" r="5" fill="#d7fff1" />
            <circle data-core-node cx="536" cy="422" r="5" fill="#d7fff1" />
            <circle data-core-node cx="310" cy="584" r="5" fill="#d7fff1" />
            <circle data-core-node cx="84" cy="424" r="5" fill="#d7fff1" />
            <circle data-core-node cx="90" cy="174" r="5" fill="#d7fff1" />
          </svg>
        </div>
      </div>

      {orbitNodes.map((node, index) => (
        <div
          className="absolute hidden min-w-28 border-l border-white/16 pl-3 text-[10px] font-black uppercase leading-none text-white/58 sm:block"
          data-core-node
          key={node.label}
          style={{ left: node.x, top: node.y, animationDelay: node.delay }}
        >
          <span className="mb-2 block text-white/88">0{index + 1}</span>
          {node.label}
          <span className="mt-2 block h-1 w-14 bg-white/18">
            <span className="block h-full w-2/3 bg-[var(--accent)]" />
          </span>
        </div>
      ))}

      <div className="absolute left-[8%] top-[58%] hidden w-32 rounded border border-white/10 bg-black/40 p-3 backdrop-blur-md md:block" data-core-node>
        <p className="text-[9px] font-black uppercase text-white/36">design system</p>
        <div className="mt-3 grid grid-cols-3 gap-1.5">
          <span className="h-5 rounded-sm bg-white/12" />
          <span className="h-5 rounded-sm bg-[var(--accent)]/70" />
          <span className="h-5 rounded-sm bg-white/18" />
          <span className="h-5 rounded-sm bg-white/8" />
          <span className="h-5 rounded-sm bg-white/16" />
          <span className="h-5 rounded-sm bg-white/10" />
        </div>
      </div>

      <div className="absolute right-[5%] top-[38%] hidden w-36 rounded border border-white/10 bg-black/38 p-3 backdrop-blur-md md:block" data-core-node>
        <p className="text-[9px] font-black uppercase text-white/36">AI workflow</p>
        <div className="mt-3 flex h-12 items-end gap-1.5">
          <span className="h-5 flex-1 bg-white/16" />
          <span className="h-9 flex-1 bg-white/24" />
          <span className="h-7 flex-1 bg-[var(--accent)]/70" />
          <span className="h-11 flex-1 bg-white/20" />
          <span className="h-6 flex-1 bg-white/12" />
        </div>
      </div>
    </div>
  );
}
