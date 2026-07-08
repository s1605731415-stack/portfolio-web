export function BarcodeMark({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`barcode-mark inline-block h-6 w-24 ${className}`} />
  );
}
