"use client";

import { CalendarIcon } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { DateRangePickerCalendar } from "@/components/date-range-picker/date-range-picker-calendar";
import {
  dateRangePickerInputClassName,
  dateRangePickerInputWrapperClassName,
  dateRangePickerTriggerClassName,
} from "@/components/date-range-picker/date-range-picker.styles";
import {
  DATE_INPUT_ERROR,
  DATE_INPUT_PLACEHOLDER,
  clampViewDate,
  startOfDay,
} from "@/components/date-range-picker/date-range-picker.utils";
import {
  shouldKeepCalendarOpenOnTriggerPress,
  useDateFieldText,
} from "@/components/date-range-picker/use-date-field-text";
import { FieldError } from "@/components/field-error";
import { Input } from "@/components/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/popover";
import { cn } from "@/lib/utils";

import type { DatePickerProps } from "./date-picker.types";

export function DatePicker({
  value = null,
  onChange,
  placeholder = DATE_INPUT_PLACEHOLDER,
  locale = "en-US",
  size = "md",
  disabled = false,
  error,
  className,
  id,
  "aria-label": ariaLabel,
}: DatePickerProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const [open, setOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => clampViewDate(value ?? new Date()));
  const field = useDateFieldText(value, (date) => {
    onChange?.(date);

    if (date) {
      setViewDate(clampViewDate(date));
    }
  });
  const displayedError = error ?? (field.invalid ? DATE_INPUT_ERROR : undefined);
  const isInvalid = Boolean(displayedError);

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

  function handleOpenChange(nextOpen: boolean, details?: { reason?: string; event?: Event }) {
    if (disabled) {
      return;
    }

    if (shouldKeepCalendarOpenOnTriggerPress(nextOpen, details)) {
      return;
    }

    setOpen(nextOpen);

    if (nextOpen) {
      setViewDate(clampViewDate(value ?? new Date()));
    }
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
    <div className="flex w-full flex-col gap-[var(--space-stack-xs)]">
      <Popover modal={false} open={open} onOpenChange={handleOpenChange}>
        <PopoverTrigger
          nativeButton={false}
          render={
            <div
              data-slot="date-picker"
              className={cn(dateRangePickerInputWrapperClassName, className)}
            >
              <Input
                id={inputId}
                size={size}
                disabled={disabled}
                value={field.text}
                placeholder={placeholder}
                aria-label={ariaLabel}
                aria-invalid={isInvalid || undefined}
                aria-describedby={displayedError ? errorId : undefined}
                autoComplete="off"
                inputMode="numeric"
                className={dateRangePickerInputClassName}
                onFocus={openCalendar}
                onChange={field.handleTextChange}
                onBlur={field.handleBlur}
              />
              <button
                type="button"
                aria-label="Open calendar"
                className={dateRangePickerTriggerClassName}
                disabled={disabled}
                onMouseDown={(event) => event.preventDefault()}
                onClick={openCalendar}
              >
                <CalendarIcon className="size-4" aria-hidden />
              </button>
            </div>
          }
        />

        <PopoverContent align="start" initialFocus={false} className="w-auto p-0">
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

      {displayedError ? (
        <FieldError id={errorId} showIcon>
          {displayedError}
        </FieldError>
      ) : null}
    </div>
  );
}
