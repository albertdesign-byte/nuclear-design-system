import { Spinner } from "@/components/spinner";

export function SpinnerRealScreenPreview() {
  return (
    <div
      className="inline-flex items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]"
      aria-live="polite"
      aria-busy="true"
    >
      <Spinner size="sm" aria-hidden />
      <span className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
        Saving record…
      </span>
    </div>
  );
}
