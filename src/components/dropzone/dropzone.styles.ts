export const dropzoneRootClassName = "flex flex-col gap-[var(--space-stack-xs)]";

export const dropzoneTriggerClassName = [
  "flex w-full items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-input)] px-[var(--space-inline-sm)] py-[var(--space-stack-md)]",
  "text-left outline-none transition-[var(--motion-hover)]",
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-60",
].join(" ");

export const dropzoneTriggerEmptyClassName = [
  "justify-center border border-dashed border-[var(--color-border)] bg-[var(--color-background)]",
  "hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-muted)]",
].join(" ");

export const dropzoneTriggerFilledClassName = [
  "border border-[var(--color-border)] bg-[var(--color-background)]",
  "hover:bg-[var(--color-surface-muted)]",
].join(" ");

export const dropzoneTriggerInvalidClassName = [
  "border-[var(--color-error-border)] ring-[length:var(--focus-ring-width)] ring-[var(--color-error-border)]/30",
].join(" ");

export const dropzoneEmptyLabelClassName =
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]";

export const dropzoneFileNameClassName =
  "min-w-0 flex-1 truncate text-[length:var(--text-body-small-size)] leading-[var(--text-body-line-height)] text-[var(--color-text-primary)]";

export const dropzoneRemoveButtonClassName = [
  "inline-flex size-8 shrink-0 items-center justify-center rounded-[var(--radius-sm)]",
  "text-[var(--color-text-muted)] transition-[var(--motion-hover)]",
  "hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
].join(" ");

export const dropzoneHiddenInputClassName = "sr-only";
