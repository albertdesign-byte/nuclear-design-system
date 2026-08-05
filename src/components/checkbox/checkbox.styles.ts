import { cva } from "class-variance-authority";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";

const disabledStyles =
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-[var(--color-disabled-border)] disabled:bg-[var(--color-disabled-background)] disabled:text-[var(--color-disabled-text)] disabled:shadow-none";

export const checkboxVariants = cva(
  [
    "peer relative inline-flex shrink-0 items-center justify-center border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-action-primary-text)] outline-none",
    "transition-[var(--motion-hover)]",
    focusRing,
    disabledStyles,
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
    "after:absolute after:-inset-x-3 after:-inset-y-2",
    "data-checked:border-[var(--color-action-primary)] data-checked:bg-[var(--color-action-primary)] data-checked:text-[var(--color-action-primary-text)]",
    "data-indeterminate:border-[var(--color-action-primary)] data-indeterminate:bg-[var(--color-action-primary)] data-indeterminate:text-[var(--color-action-primary-text)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "size-[var(--icon-sm)] rounded-[var(--radius-checkbox)] [&_svg:not([class*='size-'])]:size-3",
        md: "size-[var(--icon-md)] rounded-[var(--radius-checkbox)] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "size-[var(--icon-lg)] rounded-[var(--radius-checkbox)] [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const checkboxIndicatorClassName =
  "grid place-content-center text-current [&>svg]:pointer-events-none";
