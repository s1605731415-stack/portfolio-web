"use client";

import { useEffect, useRef } from "react";

export function HeroCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const context = canvas.getContext("2d");
    if (!context) {
      return;
    }

    let frame = 0;
    let raf = 0;

    function resize() {
      if (!canvas) {
        return;
      }
      canvas.width = canvas.clientWidth * window.devicePixelRatio;
      canvas.height = canvas.clientHeight * window.devicePixelRatio;
    }

    function draw() {
      if (!canvas || !context) {
        return;
      }
      const width = canvas.width;
      const height = canvas.height;
      context.clearRect(0, 0, width, height);
      context.strokeStyle = "rgba(142,217,190,0.12)";
      context.lineWidth = window.devicePixelRatio;
      const points = 9;
      for (let i = 0; i < points; i += 1) {
        const x = (width / (points - 1)) * i;
        const y = height * 0.42 + Math.sin(frame * 0.01 + i * 0.9) * 22 * window.devicePixelRatio;
        context.beginPath();
        context.arc(x, y, 2.4 * window.devicePixelRatio, 0, Math.PI * 2);
        context.stroke();
        if (i > 0) {
          const previousX = (width / (points - 1)) * (i - 1);
          const previousY = height * 0.42 + Math.sin(frame * 0.01 + (i - 1) * 0.9) * 22 * window.devicePixelRatio;
          context.beginPath();
          context.moveTo(previousX, previousY);
          context.lineTo(x, y);
          context.stroke();
        }
      }
      frame += 1;
      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full opacity-30" ref={ref} />;
}
