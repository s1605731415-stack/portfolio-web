export function StarGlyph({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`star-glyph inline-grid place-items-center ${className}`}>
      ✦
    </span>
  );
}
