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

export {
  calendarClassName as dateRangePickerCalendarClassName,
  calendarHeaderClassName as dateRangePickerCalendarHeaderClassName,
  calendarTitleButtonClassName as dateRangePickerCalendarTitleButtonClassName,
  calendarNavButtonClassName as dateRangePickerCalendarNavButtonClassName,
  calendarWeekdayRowClassName as dateRangePickerWeekdayRowClassName,
  calendarDayGridClassName as dateRangePickerDayGridClassName,
  calendarDayButtonClassName as dateRangePickerDayButtonClassName,
  calendarDayOutsideClassName as dateRangePickerDayOutsideClassName,
  calendarDaySelectedClassName as dateRangePickerDaySelectedClassName,
  calendarDayInRangeClassName as dateRangePickerDayInRangeClassName,
  calendarDayTodayClassName as dateRangePickerDayTodayClassName,
  calendarYearGridClassName as dateRangePickerYearGridClassName,
  calendarFooterClassName as dateRangePickerFooterClassName,
  calendarFooterActionClassName as dateRangePickerFooterActionClassName,
} from "@/components/calendar/calendar.styles";
