export function ArchiveMeta({
  label,
  value,
  align = "left",
}: {
  label: string;
  value: string;
  align?: "left" | "right" | "center";
}) {
  return (
    <div className={`poster-micro ${align === "right" ? "text-right" : align === "center" ? "text-center" : ""}`}>
      <span className="block text-[var(--color-faint)]">{label}</span>
      <span className="mt-1 block text-[var(--color-ink)]">{value}</span>
    </div>
  );
}
