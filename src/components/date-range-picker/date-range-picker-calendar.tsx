"use client";

import { Calendar } from "@/components/calendar";

import type { DateRangePickerCalendarProps } from "./date-range-picker.types";

export function DateRangePickerCalendar({
  activeField,
  from,
  to,
  viewDate,
  locale,
  onViewDateChange,
  onSelect,
  onClear,
  onToday,
}: DateRangePickerCalendarProps) {
  return (
    <Calendar
      value={activeField === "from" ? from : to}
      from={from}
      to={to}
      viewDate={viewDate}
      locale={locale}
      onViewDateChange={onViewDateChange}
      onSelect={onSelect}
      onClear={onClear}
      onToday={onToday}
    />
  );
}
