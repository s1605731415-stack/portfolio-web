"use client";

import type { PointerEvent } from "react";
import { useState } from "react";

export function BeforeAfterSlider({
  before,
  after,
  beforeAlt,
  afterAlt,
  beforeLabel = "Before",
  afterLabel = "After",
}: {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
  beforeLabel?: string;
  afterLabel?: string;
}) {
  const [position, setPosition] = useState(50);

  function updatePosition(event: PointerEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const next = ((event.clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(92, Math.max(8, next)));
  }

  return (
    <div
      className="group relative aspect-[16/9] overflow-hidden border border-white/14 bg-black"
      onPointerDown={updatePosition}
      onPointerMove={(event) => {
        if (event.buttons === 1) {
          updatePosition(event);
        }
      }}
    >
      <img className="h-full w-full object-cover" src={after} alt={afterAlt} />
      <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
        <img className="h-full w-[calc(100vw-2rem)] max-w-none object-cover md:w-[900px]" src={before} alt={beforeAlt} />
      </div>
      <div className="absolute inset-y-0 w-px bg-white" style={{ left: `${position}%` }}>
        <span className="absolute left-1/2 top-1/2 grid h-10 w-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/30 bg-black/70 text-xs text-white backdrop-blur">
          ↔
        </span>
      </div>
      <div className="absolute left-4 top-4 border border-white/16 bg-black/58 px-3 py-2 text-[11px] font-medium uppercase text-white/72 backdrop-blur">
        {beforeLabel}
      </div>
      <div className="absolute right-4 top-4 border border-white/16 bg-black/58 px-3 py-2 text-[11px] font-medium uppercase text-white/72 backdrop-blur">
        {afterLabel}
      </div>
    </div>
  );
}
