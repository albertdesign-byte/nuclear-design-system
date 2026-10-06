import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { textLinkDisabledClassName } from "@/lib/disabled-styles";

export const breadcrumbClassName = componentFontFamilyClassName;

export const breadcrumbListClassName =
  "flex flex-wrap items-center gap-x-[var(--space-inline-xs)] gap-y-[var(--space-stack-xs)]";

export const breadcrumbItemClassName =
  "inline-flex min-w-0 items-center gap-[var(--space-inline-xs)]";

export const breadcrumbLinkClassName = [
  "inline-flex min-w-0 items-center gap-[var(--space-inline-xs)] rounded-[var(--radius-sm)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-text-muted)] transition-[var(--motion-hover)]",
  "hover:text-[var(--color-text-primary)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
  textLinkDisabledClassName,
].join(" ");

export const breadcrumbCurrentClassName = [
  "inline-flex min-w-0 items-center gap-[var(--space-inline-xs)]",
  "text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-text-primary)]",
].join(" ");

export const breadcrumbSeparatorClassName =
  "inline-flex shrink-0 text-[var(--color-text-muted)]";

export const breadcrumbLabelClassName = "truncate";
