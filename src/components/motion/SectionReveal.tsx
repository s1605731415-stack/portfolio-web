"use client";

import type { ReactNode } from "react";
import { FadeIn } from "./FadeIn";

export function SectionReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <FadeIn className={className}>{children}</FadeIn>;
}
