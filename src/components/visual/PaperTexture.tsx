export function PaperTexture({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`paper-texture pointer-events-none absolute inset-0 ${className}`} />;
}
