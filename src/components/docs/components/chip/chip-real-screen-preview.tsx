import { Chip } from "@/components/chip";

export function ChipRealScreenPreview() {
  return (
    <div className="flex flex-wrap gap-[var(--space-inline-xs)]">
      <Chip>MRI Brain</Chip>
      <Chip variant="outline">Prior Auth</Chip>
      <Chip variant="muted">Stat</Chip>
    </div>
  );
}
