"use client";

import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { Input } from "@/components/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { cn } from "@/lib/utils";

import { DateRangePickerCalendar } from "./date-range-picker-calendar";
import {
  dateRangePickerClassName,
  dateRangePickerFieldClassName,
  dateRangePickerInputClassName,
  dateRangePickerInputWrapperClassName,
  dateRangePickerLabelClassName,
  dateRangePickerTriggerClassName,
} from "./date-range-picker.styles";
import type { DateRangePickerProps } from "./date-range-picker.types";
import {
  clampViewDate,
  compareDates,
  formatDate,
  startOfDay,
} from "./date-range-picker.utils";

export function DateRangePicker({
  from = null,
  to = null,
  onRangeChange,
  fromLabel = "From:",
  toLabel = "To:",
  locale = "en-US",
  size = "md",
  disabled = false,
  className,
}: DateRangePickerProps) {
  const [open, setOpen] = useState(false);
  const [activeField, setActiveField] = useState<"from" | "to">("from");
  const [viewDate, setViewDate] = useState(() => clampViewDate(from ?? to ?? new Date()));

  useEffect(() => {
    if (from) {
      setViewDate(clampViewDate(from));
    }
  }, [from]);

  function updateRange(nextFrom: Date | null, nextTo: Date | null) {
    onRangeChange?.({ from: nextFrom, to: nextTo });
  }

  function openField(field: "from" | "to") {
    if (disabled) {
      return;
    }

    setActiveField(field);
    setOpen(true);
    setViewDate(
      clampViewDate(field === "from" ? (from ?? to ?? new Date()) : (to ?? from ?? new Date()))
    );
  }

  function handleSelect(date: Date) {
    const selected = startOfDay(date);

    if (activeField === "from") {
      const nextTo = to && compareDates(selected, to) > 0 ? null : to;
      updateRange(selected, nextTo);
      setActiveField("to");
      setViewDate(clampViewDate(selected));
      return;
    }

    const nextFrom = from && compareDates(from, selected) > 0 ? selected : from;
    updateRange(nextFrom ?? selected, selected);
    setOpen(false);
  }

  function handleClear() {
    updateRange(null, null);
    setActiveField("from");
  }

  function handleToday() {
    handleSelect(startOfDay(new Date()));
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger
        nativeButton={false}
        render={
          <div
            data-slot="date-range-picker"
            className={cn(dateRangePickerClassName, className)}
          >
            <div className={dateRangePickerFieldClassName}>
              <span className={dateRangePickerLabelClassName}>{fromLabel}</span>
              <div className={dateRangePickerInputWrapperClassName}>
                <Input
                  readOnly
                  size={size}
                  disabled={disabled}
                  value={formatDate(from, locale)}
                  placeholder="dd/mm/aaaa"
                  aria-label={fromLabel}
                  className={dateRangePickerInputClassName}
                  onClick={() => openField("from")}
                />
                <button
                  type="button"
                  aria-label="Open calendar for start date"
                  className={dateRangePickerTriggerClassName}
                  disabled={disabled}
                  onClick={() => openField("from")}
                >
                  <CalendarIcon className="size-4" aria-hidden />
                </button>
              </div>
            </div>

            <div className={dateRangePickerFieldClassName}>
              <span className={dateRangePickerLabelClassName}>{toLabel}</span>
              <div className={dateRangePickerInputWrapperClassName}>
                <Input
                  readOnly
                  size={size}
                  disabled={disabled}
                  value={formatDate(to, locale)}
                  placeholder="dd/mm/aaaa"
                  aria-label={toLabel}
                  className={dateRangePickerInputClassName}
                  onClick={() => openField("to")}
                />
                <button
                  type="button"
                  aria-label="Open calendar for end date"
                  className={dateRangePickerTriggerClassName}
                  disabled={disabled}
                  onClick={() => openField("to")}
                >
                  <CalendarIcon className="size-4" aria-hidden />
                </button>
              </div>
            </div>
          </div>
        }
      />

      <PopoverContent align="start" className="w-auto p-0">
        <DateRangePickerCalendar
          activeField={activeField}
          from={from}
          to={to}
          viewDate={viewDate}
          locale={locale}
          onViewDateChange={setViewDate}
          onSelect={handleSelect}
          onClear={handleClear}
          onToday={handleToday}
        />
      </PopoverContent>
    </Popover>
  );
}
