import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { labelDisabledClassName } from "@/lib/disabled-styles";

export const labelClassName = cva(
  [
    componentFontFamilyClassName, "flex items-center gap-[var(--space-inline-sm)]",
    "text-[length:var(--text-label-size)] leading-[var(--text-label-line-height)] tracking-[var(--text-label-letter-spacing)] font-medium",
    "select-none",
    labelDisabledClassName,
  ].join(" "),
  {
    variants: {
      invalid: {
        true: "text-[var(--color-error-text)]",
        false: "text-[var(--color-text-primary)]",
      },
    },
    defaultVariants: {
      invalid: false,
    },
  }
);
