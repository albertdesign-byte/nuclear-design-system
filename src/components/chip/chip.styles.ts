import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const chipVariants = cva(
  [
    componentFontFamilyClassName, "inline-flex max-w-full items-center gap-[var(--space-inline-xs)] rounded-[var(--radius-full)] border px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]",
    "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] font-medium text-[var(--color-text-primary)]",
    "transition-[var(--motion-hover)]",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-[var(--color-border)] bg-[var(--color-surface-muted)]",
        ].join(" "),
        outline: [
          "border-[var(--color-border)] bg-[var(--color-surface)]",
        ].join(" "),
        muted: [
          "border-transparent bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const chipRemoveButtonClassName = [
  componentFontFamilyClassName, "inline-flex size-4 shrink-0 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-muted)]",
  "hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
].join(" ");
