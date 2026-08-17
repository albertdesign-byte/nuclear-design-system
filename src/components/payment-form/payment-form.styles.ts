import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const paymentFormClassName = [
  componentFontFamilyClassName, "flex flex-col gap-[var(--space-stack-md)]",
  "rounded-[var(--radius-card)] bg-[var(--color-surface)] p-[var(--space-page)]",
  "ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const paymentFormFieldGroupClassName =
  "flex flex-col gap-[var(--space-stack-xs)]";

export const paymentFormRowClassName =
  "grid grid-cols-2 gap-[var(--space-inline-md)]";

export const stripeBadgeClassName = [
  componentFontFamilyClassName, "inline-flex items-center gap-[var(--space-inline-xs)]",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)]",
  "text-[var(--color-text-muted)]",
].join(" ");

export const stripeBadgeBrandClassName =
  "font-semibold tracking-[-0.02em] text-[var(--color-text-secondary)]";
