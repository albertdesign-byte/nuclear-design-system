import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { controlDisabledClassName } from "@/lib/disabled-styles";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";


export const textareaVariants = cva(
  [
    componentFontFamilyClassName, "field-sizing-content min-w-0 resize-y border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] outline-none",
    "placeholder:text-[var(--color-text-muted)]",
    "transition-[var(--motion-hover)]",
    focusRing,
    controlDisabledClassName,
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
