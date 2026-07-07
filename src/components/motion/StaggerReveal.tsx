"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { registerGSAP, gsap, useGSAP } from "../../lib/gsap";
import { motionTokens } from "../../lib/motionTokens";

export function StaggerReveal({
  children,
  className = "",
  selector = "[data-stagger-item]",
}: {
  children: ReactNode;
  className?: string;
  selector?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGSAP();
      const root = ref.current;
      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        root.querySelectorAll(selector),
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: motionTokens.duration.normal, ease: motionTokens.ease, stagger: 0.08 },
      );
    },
    { scope: ref },
  );

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
