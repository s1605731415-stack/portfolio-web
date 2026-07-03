"use client";

import { useEffect, useState } from "react";

export function CaseStudyProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable <= 0 ? 0 : (window.scrollY / scrollable) * 100;
      setProgress(Math.min(100, Math.max(0, nextProgress)));
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-[60] h-1 bg-transparent">
      <div className="h-full bg-[var(--accent)] transition-[width]" style={{ width: `${progress}%` }} />
    </div>
  );
}
