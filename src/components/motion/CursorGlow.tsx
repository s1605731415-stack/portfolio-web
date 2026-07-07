"use client";

import { useEffect, useRef } from "react";
import { registerGSAP, gsap } from "../../lib/gsap";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = ref.current;
    if (!glow || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    registerGSAP();
    const xTo = gsap.quickTo(glow, "x", { duration: 0.65, ease: "power3.out" });
    const yTo = gsap.quickTo(glow, "y", { duration: 0.65, ease: "power3.out" });

    const handleMove = (event: PointerEvent) => {
      xTo(event.clientX - 220);
      yTo(event.clientY - 220);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return <div aria-hidden="true" className="cursor-glow pointer-events-none fixed left-0 top-0 z-[1] hidden h-[440px] w-[440px] rounded-full md:block" ref={ref} />;
}
