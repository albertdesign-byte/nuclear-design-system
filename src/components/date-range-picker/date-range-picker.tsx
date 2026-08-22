"use client";

import { CalendarIcon } from "lucide-react";
import { useEffect, useId, useState } from "react";

import { FieldError } from "@/components/field-error";
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
  DATE_INPUT_ERROR,
  DATE_INPUT_PLACEHOLDER,
  clampViewDate,
  compareDates,
  startOfDay,
} from "./date-range-picker.utils";
import {
  shouldKeepCalendarOpenOnTriggerPress,
  useDateFieldText,
} from "./use-date-field-text";

export function DateRangePicker({
  from = null,
  to = null,
  onRangeChange,
  fromLabel = "From:",
  toLabel = "To:",
  locale = "en-US",
  size = "md",
  disabled = false,
  fromError,
  toError,
  className,
}: DateRangePickerProps) {
  const generatedId = useId();
  const fromErrorId = `${generatedId}-from-error`;
  const toErrorId = `${generatedId}-to-error`;
  const [open, setOpen] = useState(false);
  const [activeField, setActiveField] = useState<"from" | "to">("from");
  const [viewDate, setViewDate] = useState(() => clampViewDate(from ?? to ?? new Date()));

  function updateRange(nextFrom: Date | null, nextTo: Date | null) {
    onRangeChange?.({ from: nextFrom, to: nextTo });
  }

  const fromField = useDateFieldText(from, (date) => {
    const nextTo = to && date && compareDates(date, to) > 0 ? null : to;
    updateRange(date, nextTo);

    if (date) {
      setViewDate(clampViewDate(date));
    }
  });

  const toField = useDateFieldText(to, (date) => {
    const nextFrom = from && date && compareDates(from, date) > 0 ? date : from;
    updateRange(nextFrom ?? date, date);

    if (date) {
      setViewDate(clampViewDate(date));
    }
  });

  const displayedFromError = fromError ?? (fromField.invalid ? DATE_INPUT_ERROR : undefined);
  const displayedToError = toError ?? (toField.invalid ? DATE_INPUT_ERROR : undefined);

  useEffect(() => {
    if (from) {
      setViewDate(clampViewDate(from));
    }
  }, [from]);

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

  function handleOpenChange(nextOpen: boolean, details?: { reason?: string; event?: Event }) {
    if (disabled) {
      return;
    }

    if (shouldKeepCalendarOpenOnTriggerPress(nextOpen, details)) {
      return;
    }

    setOpen(nextOpen);
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
    <Popover modal={false} open={open} onOpenChange={handleOpenChange}>
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
                  size={size}
                  disabled={disabled}
                  value={fromField.text}
                  placeholder={DATE_INPUT_PLACEHOLDER}
                  aria-label={fromLabel}
                  aria-invalid={Boolean(displayedFromError) || undefined}
                  aria-describedby={displayedFromError ? fromErrorId : undefined}
                  autoComplete="off"
                  inputMode="numeric"
                  className={dateRangePickerInputClassName}
                  onFocus={() => openField("from")}
                  onChange={fromField.handleTextChange}
                  onBlur={fromField.handleBlur}
                />
                <button
                  type="button"
                  aria-label="Open calendar for start date"
                  className={dateRangePickerTriggerClassName}
                  disabled={disabled}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => openField("from")}
                >
                  <CalendarIcon className="size-4" aria-hidden />
                </button>
              </div>
              {displayedFromError ? (
                <FieldError id={fromErrorId} showIcon>
                  {displayedFromError}
                </FieldError>
              ) : null}
            </div>

            <div className={dateRangePickerFieldClassName}>
              <span className={dateRangePickerLabelClassName}>{toLabel}</span>
              <div className={dateRangePickerInputWrapperClassName}>
                <Input
                  size={size}
                  disabled={disabled}
                  value={toField.text}
                  placeholder={DATE_INPUT_PLACEHOLDER}
                  aria-label={toLabel}
                  aria-invalid={Boolean(displayedToError) || undefined}
                  aria-describedby={displayedToError ? toErrorId : undefined}
                  autoComplete="off"
                  inputMode="numeric"
                  className={dateRangePickerInputClassName}
                  onFocus={() => openField("to")}
                  onChange={toField.handleTextChange}
                  onBlur={toField.handleBlur}
                />
                <button
                  type="button"
                  aria-label="Open calendar for end date"
                  className={dateRangePickerTriggerClassName}
                  disabled={disabled}
                  onMouseDown={(event) => event.preventDefault()}
                  onClick={() => openField("to")}
                >
                  <CalendarIcon className="size-4" aria-hidden />
                </button>
              </div>
              {displayedToError ? (
                <FieldError id={toErrorId} showIcon>
                  {displayedToError}
                </FieldError>
              ) : null}
            </div>
          </div>
        }
      />

      <PopoverContent align="start" initialFocus={false} className="w-auto p-0">
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
