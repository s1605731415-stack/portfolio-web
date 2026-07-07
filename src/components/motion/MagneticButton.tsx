"use client";

import type { PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { registerGSAP, gsap } from "../../lib/gsap";

export function MagneticButton({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLSpanElement>) {
    const target = ref.current;
    if (!target || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    registerGSAP();
    const rect = target.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    gsap.to(target, { x: x * 0.18, y: y * 0.18, duration: 0.35, ease: "power3.out", overwrite: "auto" });
  }

  function handlePointerLeave() {
    if (!ref.current) {
      return;
    }

    registerGSAP();
    gsap.to(ref.current, { x: 0, y: 0, duration: 0.45, ease: "power3.out", overwrite: "auto" });
  }

  return (
    <span className={className} onPointerLeave={handlePointerLeave} onPointerMove={handlePointerMove} ref={ref}>
      {children}
    </span>
  );
}
