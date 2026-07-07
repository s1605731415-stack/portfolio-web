export function NoiseOverlay({ className = "" }: { className?: string }) {
  return <div aria-hidden="true" className={`pointer-events-none absolute inset-0 noise-overlay ${className}`} />;
}
