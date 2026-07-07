"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { registerGSAP, gsap, useGSAP } from "../../lib/gsap";
import { motionTokens } from "../../lib/motionTokens";

export function FadeIn({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      registerGSAP();
      if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        return;
      }

      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y: motionTokens.distance.reveal },
        {
          autoAlpha: 1,
          y: 0,
          delay,
          duration: motionTokens.duration.normal,
          ease: motionTokens.ease,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 86%",
            once: true,
          },
        },
      );
    },
    { scope: ref, dependencies: [delay] },
  );

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
}
