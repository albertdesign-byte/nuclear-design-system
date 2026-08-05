import { Badge } from "@/components/badge";

export function BadgeRealScreenPreview() {
  return (
    <div className="flex w-full max-w-md items-center justify-between rounded-[var(--radius-card)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-card)] shadow-sm">
      <div>
        <p className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]">
          María González
        </p>
        <p className="text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]">
          ID #48291 · Cardiología
        </p>
      </div>
      <Badge variant="secondary">Estable</Badge>
    </div>
  );
}
