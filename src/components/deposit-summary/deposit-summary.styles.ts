import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const depositSummaryClassName = [
  componentFontFamilyClassName, "flex flex-col gap-[var(--space-stack-md)]",
  "rounded-[var(--radius-card)] bg-[var(--color-surface)] p-[var(--space-page)]",
  "ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const depositSummaryItemClassName = "flex flex-col gap-[var(--space-stack-sm)]";

export const depositSummaryItemTitleClassName =
  "text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

export const depositSummaryRowsClassName = "flex flex-col gap-[var(--space-stack-xs)]";

export const depositSummaryRowClassName =
  "flex items-baseline justify-between gap-[var(--space-inline-md)]";

export const depositSummaryRowLabelClassName =
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]";

export const depositSummaryRowAmountClassName =
  "shrink-0 text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

export const depositSummaryRowAmountEmphasisClassName = "font-semibold";

export const depositSummaryTotalClassName = [
  componentFontFamilyClassName, "flex items-baseline justify-between gap-[var(--space-inline-md)]",
  "border-t border-[var(--color-border-subtle)] pt-[var(--space-stack-sm)]",
].join(" ");

export const depositSummaryTotalLabelClassName =
  "text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

export const depositSummaryTotalAmountClassName =
  "shrink-0 text-[length:var(--text-body-small-size)] font-semibold leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";
