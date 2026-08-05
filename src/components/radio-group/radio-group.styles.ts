import { cva } from "class-variance-authority";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";

const disabledStyles =
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-[var(--color-disabled-border)] disabled:bg-[var(--color-disabled-background)] disabled:text-[var(--color-disabled-text)] disabled:shadow-none";

export const radioGroupClassName =
  "grid w-full gap-[var(--space-stack-sm)]";

export const radioGroupItemVariants = cva(
  [
    "peer relative inline-flex shrink-0 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-action-primary-text)] outline-none",
    "transition-[var(--motion-hover)]",
    focusRing,
    disabledStyles,
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
    "after:absolute after:-inset-x-3 after:-inset-y-2",
    "data-checked:border-[var(--color-action-primary)] data-checked:bg-[var(--color-action-primary)] data-checked:text-[var(--color-action-primary-text)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "size-[var(--icon-sm)]",
        md: "size-[var(--icon-md)]",
        lg: "size-[var(--icon-lg)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const radioGroupIndicatorClassName =
  "flex items-center justify-center text-current";

export const radioGroupIndicatorDotVariants = cva(
  "rounded-full bg-[var(--color-action-primary-text)]",
  {
    variants: {
      size: {
        sm: "size-1.5",
        md: "size-2",
        lg: "size-2.5",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
