"use client";

import type { CSSProperties, PointerEvent, ReactNode } from "react";
import { useRef } from "react";
import { registerGSAP, gsap } from "../../lib/gsap";
import { motionTokens } from "../../lib/motionTokens";

export function TiltCard({
  children,
  className = "",
  maxTilt = motionTokens.tilt.card,
}: {
  children: ReactNode;
  className?: string;
  maxTilt?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const card = ref.current;
    if (!card || window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.matchMedia("(max-width: 767px)").matches) {
      return;
    }

    registerGSAP();
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(card, {
      rotationY: x * maxTilt,
      rotationX: y * -maxTilt,
      y: -motionTokens.distance.hover,
      duration: 0.35,
      ease: motionTokens.ease,
      overwrite: "auto",
    });
    card.style.setProperty("--tilt-x", `${(x + 0.5) * 100}%`);
    card.style.setProperty("--tilt-y", `${(y + 0.5) * 100}%`);
  }

  function handlePointerLeave() {
    const card = ref.current;
    if (!card) {
      return;
    }

    registerGSAP();
    gsap.to(card, { rotationX: 0, rotationY: 0, y: 0, duration: 0.5, ease: motionTokens.ease, overwrite: "auto" });
    card.style.setProperty("--tilt-x", "50%");
    card.style.setProperty("--tilt-y", "50%");
  }

  return (
    <div
      className={className}
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={ref}
      style={{ "--tilt-x": "50%", "--tilt-y": "50%" } as CSSProperties}
    >
      {children}
    </div>
  );
}
