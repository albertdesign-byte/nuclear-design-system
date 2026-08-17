import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { controlDisabledClassName } from "@/lib/disabled-styles";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";


const fileStyles = [
  "file:inline-flex file:border-0 file:bg-transparent file:font-medium file:text-[var(--color-text-primary)]",
  "file:transition-[var(--motion-hover)]",
].join(" ");

export const inputVariants = cva(
  [
    componentFontFamilyClassName, "min-w-0 border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] outline-none",
    "placeholder:text-[var(--color-text-muted)]",
    "transition-[var(--motion-hover)]",
    focusRing,
    controlDisabledClassName,
    "read-only:cursor-default read-only:border-[var(--color-border)] read-only:bg-[var(--color-surface-muted)] read-only:text-[var(--color-text-primary)] read-only:focus-visible:border-[var(--color-border)] read-only:focus-visible:ring-0",
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
    fileStyles,
  ].join(" "),
  {
    variants: {
      size: {
        sm: [
          "h-[var(--spacing-28)] px-[var(--space-inline-sm)]",
          "rounded-[var(--radius-md)]",
          "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
          "file:h-5 file:px-0 file:text-[length:var(--text-caption-size)]",
        ].join(" "),
        md: [
          "h-[var(--spacing-32)] px-[var(--space-inline-sm)]",
          "rounded-[var(--radius-input)]",
          "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
          "file:h-6 file:px-0 file:text-[length:var(--text-body-small-size)]",
        ].join(" "),
        lg: [
          "h-[var(--spacing-36)] px-[var(--space-inline-md)]",
          "rounded-[var(--radius-input)]",
          "text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)]",
          "file:h-7 file:px-0 file:text-[length:var(--text-body-small-size)]",
        ].join(" "),
        xl: [
          "h-[var(--spacing-48)] px-[var(--space-inline-md)]",
          "rounded-[var(--radius-input)]",
          "text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)]",
          "file:h-8 file:px-0 file:text-[length:var(--text-body-small-size)]",
        ].join(" "),
        xxl: [
          "h-[var(--spacing-56)] px-[var(--space-inline-lg)]",
          "rounded-[var(--radius-input)]",
          "text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)]",
          "file:h-9 file:px-0 file:text-[length:var(--text-body-size)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
