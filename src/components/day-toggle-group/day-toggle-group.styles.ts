import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { controlDisabledClassName } from "@/lib/disabled-styles";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";


export const dayToggleGroupClassName =
  "flex flex-wrap gap-[var(--space-inline-sm)]";

export const dayToggleButtonVariants = cva(
  [
    componentFontFamilyClassName, "inline-flex size-10 shrink-0 items-center justify-center rounded-[var(--radius-md)] border",
    "text-[length:var(--text-body-small-size)] font-medium leading-none",
    "transition-[var(--motion-hover)] outline-none",
    focusRing,
    controlDisabledClassName,
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
