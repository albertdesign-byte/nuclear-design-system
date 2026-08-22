import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { pickerInputDisabledClassName, pickerTriggerDisabledClassName } from "@/lib/disabled-styles";

export const dateRangePickerClassName =
  "flex flex-wrap items-end gap-[var(--space-inline-md)]";

export const dateRangePickerFieldClassName = "flex min-w-[10rem] flex-col gap-[var(--space-stack-xs)]";

export const dateRangePickerLabelClassName =
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]";

export const dateRangePickerInputWrapperClassName = "relative w-full min-w-[10rem]";

export const dateRangePickerInputClassName = [
  componentFontFamilyClassName, "pr-[calc(var(--space-inline-sm)+1.5rem)]",
  pickerInputDisabledClassName,
].join(" ");

export const dateRangePickerTriggerClassName = [
  componentFontFamilyClassName, "absolute top-1/2 right-[var(--space-inline-sm)] inline-flex size-6 -translate-y-1/2 items-center justify-center",
  "rounded-[var(--radius-sm)] text-[var(--color-text-muted)]",
  "transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
  pickerTriggerDisabledClassName,
].join(" ");

export const dateRangePickerCalendarClassName = "w-[17.5rem] p-[var(--space-inline-sm)]";

export const dateRangePickerCalendarHeaderClassName =
  "mb-[var(--space-stack-sm)] flex items-center justify-between gap-[var(--space-inline-xs)]";

export const dateRangePickerCalendarTitleButtonClassName = [
  componentFontFamilyClassName, "inline-flex min-w-0 flex-1 items-center gap-[var(--space-inline-xs)] rounded-[var(--radius-sm)] px-[var(--space-inline-xs)] py-[var(--space-stack-xs)]",
  "text-[length:var(--text-body-small-size)] font-medium capitalize leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-text-primary)] transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)]",
].join(" ");

export const dateRangePickerCalendarNavButtonClassName = [
  componentFontFamilyClassName, "inline-flex size-7 items-center justify-center rounded-[var(--radius-sm)]",
  "text-[var(--color-text-muted)] transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]",
].join(" ");

export const dateRangePickerWeekdayRowClassName =
  "mb-[var(--space-stack-xs)] grid grid-cols-7 text-center text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]";

export const dateRangePickerDayGridClassName = "grid grid-cols-7 gap-[var(--spacing-2)]";

export const dateRangePickerDayButtonClassName = [
  componentFontFamilyClassName, "inline-flex size-8 items-center justify-center rounded-[var(--radius-sm)]",
  "text-[length:var(--text-body-small-size)] leading-none text-[var(--color-text-primary)]",
  "transition-[var(--motion-hover)] hover:bg-[var(--color-surface-hover)]",
].join(" ");

export const dateRangePickerDayOutsideClassName = "text-[var(--color-text-muted)]";

export const dateRangePickerDaySelectedClassName =
  "bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] hover:bg-[var(--color-action-primary-hover)]";

export const dateRangePickerDayInRangeClassName = "bg-[var(--color-info-background)]";

export const dateRangePickerDayTodayClassName =
  "border border-[var(--color-action-primary)]";

export const dateRangePickerYearGridClassName =
  "grid grid-cols-3 gap-[var(--space-inline-xs)]";

export const dateRangePickerFooterClassName =
  "mt-[var(--space-stack-sm)] flex items-center justify-between border-t border-[var(--color-border-subtle)] pt-[var(--space-stack-sm)]";

export const dateRangePickerFooterActionClassName = [
  componentFontFamilyClassName, "text-[length:var(--text-body-small-size)] font-medium text-[var(--color-text-link)]",
  "transition-[var(--motion-hover)] hover:text-[var(--color-text-link-hover)] hover:underline",
].join(" ");
