import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const stageFlowBadgeVariants = cva(
  [
    componentFontFamilyClassName, "inline-flex max-w-full items-center gap-[var(--space-inline-xs)] rounded-[var(--radius-md)] border px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]",
    "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] font-medium whitespace-nowrap",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "border-[var(--color-border)] bg-[var(--color-surface-muted)] text-[var(--color-text-primary)]",
        ].join(" "),
        success: [
          "border-[var(--color-success-border)] bg-[var(--color-success-background)] text-[var(--color-success-text)]",
        ].join(" "),
        warning: [
          "border-[var(--color-warning-border)] bg-[var(--color-warning-background)] text-[var(--color-warning-text)]",
        ].join(" "),
        neutral: [
          "border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)]",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "success",
    },
  }
);

export const stageFlowBadgeLabelClassName = "min-w-0 truncate";
