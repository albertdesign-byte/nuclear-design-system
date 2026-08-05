import { cva } from "class-variance-authority";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";

const disabledStyles =
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-[var(--color-disabled-border)] disabled:bg-[var(--color-disabled-background)] disabled:text-[var(--color-disabled-text)] disabled:shadow-none";

export const textareaVariants = cva(
  [
    "field-sizing-content min-w-0 resize-y border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] outline-none",
    "placeholder:text-[var(--color-text-muted)]",
    "transition-[var(--motion-hover)]",
    focusRing,
    disabledStyles,
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
  ].join(" "),
  {
    variants: {
      size: {
        sm: [
          "min-h-[var(--spacing-64)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]",
          "rounded-[var(--radius-md)]",
          "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
        ].join(" "),
        md: [
          "min-h-[var(--spacing-80)] px-[var(--space-inline-sm)] py-[var(--space-stack-sm)]",
          "rounded-[var(--radius-input)]",
          "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
        ].join(" "),
        lg: [
          "min-h-[var(--spacing-96)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)]",
          "rounded-[var(--radius-input)]",
          "text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
