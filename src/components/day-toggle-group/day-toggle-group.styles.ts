import { cva } from "class-variance-authority";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";

const disabledStyles =
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-[var(--color-disabled-border)] disabled:bg-[var(--color-disabled-background)] disabled:text-[var(--color-disabled-text)] disabled:shadow-none";

export const dayToggleGroupClassName =
  "flex flex-wrap gap-[var(--space-inline-sm)]";

export const dayToggleButtonVariants = cva(
  [
    "inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border",
    "text-[length:var(--text-body-small-size)] font-medium leading-none",
    "transition-[var(--motion-hover)] outline-none",
    focusRing,
    disabledStyles,
  ].join(" "),
  {
    variants: {
      selected: {
        true: [
          "border-[var(--color-action-primary)] bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)]",
          "hover:bg-[var(--color-action-primary-hover)] active:bg-[var(--color-action-primary-active)]",
        ].join(" "),
        false: [
          "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)]",
          "hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-muted)]",
          "active:bg-[var(--color-surface-active)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      selected: false,
    },
  }
);
