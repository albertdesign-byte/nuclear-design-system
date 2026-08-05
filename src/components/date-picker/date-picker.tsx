"use client";

import { CalendarIcon } from "lucide-react";
import { useEffect, useState } from "react";

import { DateRangePickerCalendar } from "@/components/date-range-picker/date-range-picker-calendar";
import {
  dateRangePickerInputClassName,
  dateRangePickerInputWrapperClassName,
  dateRangePickerTriggerClassName,
} from "@/components/date-range-picker/date-range-picker.styles";
import {
  clampViewDate,
  formatDate,
  startOfDay,
} from "@/components/date-range-picker/date-range-picker.utils";
import { Input } from "@/components/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { cn } from "@/lib/utils";

import type { DatePickerProps } from "./date-picker.types";

export function DatePicker({
  value = null,
  onChange,
  placeholder = "MM/DD/YYYY",
  locale = "en-US",
  size = "md",
  disabled = false,
  className,
  id,
  "aria-label": ariaLabel,
}: DatePickerProps) {
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => clampViewDate(value ?? new Date()));

  useEffect(() => {
    if (value) {
      setViewDate(clampViewDate(value));
    }
  }, [value]);

  function openCalendar() {
    if (disabled) {
      return;
    }

    setOpen(true);
    setViewDate(clampViewDate(value ?? new Date()));
  }

  function handleSelect(date: Date) {
    onChange?.(startOfDay(date));
    setOpen(false);
  }

  function handleClear() {
    onChange?.(null);
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
            data-slot="date-picker"
            className={cn(dateRangePickerInputWrapperClassName, className)}
          >
            <Input
              id={id}
              readOnly
              size={size}
              disabled={disabled}
              value={formatDate(value, locale)}
              placeholder={placeholder}
              aria-label={ariaLabel}
              className={dateRangePickerInputClassName}
              onClick={openCalendar}
            />
            <button
              type="button"
              aria-label="Open calendar"
              className={dateRangePickerTriggerClassName}
              disabled={disabled}
              onClick={openCalendar}
            >
              <CalendarIcon className="size-4" aria-hidden />
            </button>
          </div>
        }
      />

      <PopoverContent align="start" className="w-auto p-0">
        <DateRangePickerCalendar
          activeField="from"
          from={value}
          to={null}
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
