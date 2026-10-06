import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { controlDisabledClassName } from "@/lib/disabled-styles";

const calendarFocusClassName = [
  "focus-visible:outline-none",
  "focus-visible:ring-[length:var(--focus-ring-width)]",
  "focus-visible:ring-[var(--color-focus-ring)]",
].join(" ");

export const calendarClassName = "w-[17.5rem] p-[var(--space-inline-sm)]";

export const calendarHeaderClassName =
  "mb-[var(--space-stack-sm)] flex items-center justify-between gap-[var(--space-inline-xs)]";

export const calendarTitleButtonClassName = [
  componentFontFamilyClassName,
  "inline-flex min-w-0 flex-1 items-center gap-[var(--space-inline-xs)] rounded-[var(--radius-sm)] px-[var(--space-inline-xs)] py-[var(--space-stack-xs)]",
  "text-[length:var(--text-body-small-size)] font-medium capitalize leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-text-primary)] transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)]",
  calendarFocusClassName,
  controlDisabledClassName,
].join(" ");

export const calendarNavButtonClassName = [
  componentFontFamilyClassName,
  "inline-flex size-7 items-center justify-center rounded-[var(--radius-sm)]",
  "text-[var(--color-text-muted)] transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]",
  calendarFocusClassName,
  controlDisabledClassName,
].join(" ");

export const calendarWeekdayRowClassName =
  "mb-[var(--space-stack-xs)] grid grid-cols-7 text-center text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]";

export const calendarDayGridClassName = "grid grid-cols-7 gap-[var(--spacing-2)]";

export const calendarDayButtonClassName = [
  componentFontFamilyClassName,
  "inline-flex size-8 items-center justify-center rounded-[var(--radius-sm)]",
  "text-[length:var(--text-body-small-size)] leading-none text-[var(--color-text-primary)]",
  "transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)]",
  calendarFocusClassName,
  controlDisabledClassName,
].join(" ");

export const calendarDayOutsideClassName = "text-[var(--color-text-muted)]";

export const calendarDaySelectedClassName =
  "bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] hover:bg-[var(--color-action-primary-hover)]";

export const calendarDayInRangeClassName = "bg-[var(--color-info-background)]";

export const calendarDayTodayClassName = "border border-[var(--color-action-primary)]";

export const calendarYearGridClassName = "grid grid-cols-3 gap-[var(--space-inline-xs)]";

export const calendarFooterClassName =
  "mt-[var(--space-stack-sm)] flex items-center justify-between border-t border-[var(--color-border-subtle)] pt-[var(--space-stack-sm)]";

export const calendarFooterActionClassName = [
  componentFontFamilyClassName,
  "text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-link)]",
  "transition-[var(--motion-hover)] hover:text-[var(--color-text-link-hover)] hover:underline",
  calendarFocusClassName,
  "rounded-[var(--radius-sm)]",
  controlDisabledClassName,
].join(" ");
