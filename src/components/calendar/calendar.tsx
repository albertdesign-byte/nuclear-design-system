"use client";

import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import {
  calendarClassName,
  calendarDayButtonClassName,
  calendarDayGridClassName,
  calendarDayInRangeClassName,
  calendarDayOutsideClassName,
  calendarDaySelectedClassName,
  calendarDayTodayClassName,
  calendarFooterActionClassName,
  calendarFooterClassName,
  calendarHeaderClassName,
  calendarNavButtonClassName,
  calendarTitleButtonClassName,
  calendarWeekdayRowClassName,
  calendarYearGridClassName,
} from "./calendar.styles";
import type { CalendarProps } from "./calendar.types";
import {
  addMonths,
  clampViewDate,
  formatDayLabel,
  formatMonthYear,
  getCalendarDays,
  getWeekdayLabels,
  getYearRange,
  isDateInRange,
  isSameDay,
  isToday,
  startOfDay,
} from "./calendar.utils";

type CalendarPanel = "days" | "months" | "years";

export function Calendar({
  value = null,
  onSelect,
  locale = "en-US",
  viewDate: viewDateProp,
  defaultViewDate,
  onViewDateChange,
  disabled = false,
  from = null,
  to = null,
  showFooter = true,
  onClear,
  onToday,
  className,
}: CalendarProps) {
  const [panel, setPanel] = useState<CalendarPanel>("days");
  const [uncontrolledViewDate, setUncontrolledViewDate] = useState(() =>
    clampViewDate(viewDateProp ?? defaultViewDate ?? value ?? new Date())
  );
  const viewDate = viewDateProp ?? uncontrolledViewDate;
  const weekdays = useMemo(() => getWeekdayLabels(locale), [locale]);
  const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);
  const viewYear = viewDate.getFullYear();
  const years = useMemo(() => getYearRange(viewYear), [viewYear]);
  const months = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) =>
        new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(2024, index, 1))
      ),
    [locale]
  );

  function handleViewDateChange(next: Date) {
    if (viewDateProp === undefined) {
      setUncontrolledViewDate(next);
    }

    onViewDateChange?.(next);
  }

  function handlePrevious() {
    if (disabled) {
      return;
    }

    if (panel === "years") {
      handleViewDateChange(new Date(viewDate.getFullYear() - 12, viewDate.getMonth(), 1));
      return;
    }

    if (panel === "months") {
      handleViewDateChange(new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), 1));
      return;
    }

    handleViewDateChange(addMonths(viewDate, -1));
  }

  function handleNext() {
    if (disabled) {
      return;
    }

    if (panel === "years") {
      handleViewDateChange(new Date(viewDate.getFullYear() + 12, viewDate.getMonth(), 1));
      return;
    }

    if (panel === "months") {
      handleViewDateChange(new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), 1));
      return;
    }

    handleViewDateChange(addMonths(viewDate, 1));
  }

  function handleTitleClick() {
    if (disabled) {
      return;
    }

    setPanel((current) => {
      if (current === "days") {
        return "months";
      }

      if (current === "months") {
        return "years";
      }

      return "days";
    });
  }

  function handleSelect(date: Date) {
    if (disabled) {
      return;
    }

    handleViewDateChange(clampViewDate(date));
    onSelect?.(startOfDay(date));
  }

  function handleClear() {
    if (disabled) {
      return;
    }

    onClear?.();
  }

  function handleToday() {
    if (disabled) {
      return;
    }

    if (onToday) {
      onToday();
      return;
    }

    handleSelect(startOfDay(new Date()));
  }

  function isDaySelected(day: Date) {
    return isSameDay(day, value) || isSameDay(day, from) || isSameDay(day, to);
  }

  return (
    <div
      data-slot="calendar"
      role="group"
      aria-label={formatMonthYear(viewDate, locale)}
      aria-disabled={disabled || undefined}
      className={cn(calendarClassName, className)}
    >
      <div className={calendarHeaderClassName}>
        <button
          type="button"
          className={calendarTitleButtonClassName}
          disabled={disabled}
          onClick={handleTitleClick}
        >
          <span className="truncate">
            {panel === "years"
              ? `${years[0]} – ${years[years.length - 1]}`
              : panel === "months"
                ? viewDate.getFullYear()
                : formatMonthYear(viewDate, locale)}
          </span>
          <ChevronDownIcon className="size-3.5 shrink-0" aria-hidden />
        </button>
        <div className="flex flex-col">
          <button
            type="button"
            aria-label="Previous"
            className={calendarNavButtonClassName}
            disabled={disabled}
            onClick={handlePrevious}
          >
            <ChevronUpIcon className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next"
            className={calendarNavButtonClassName}
            disabled={disabled}
            onClick={handleNext}
          >
            <ChevronDownIcon className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      {panel === "years" ? (
        <div className={calendarYearGridClassName}>
          {years.map((year) => (
            <button
              key={year}
              type="button"
              disabled={disabled}
              className={cn(
                calendarDayButtonClassName,
                "w-full",
                (value?.getFullYear() === year || from?.getFullYear() === year || to?.getFullYear() === year) &&
                  calendarDaySelectedClassName
              )}
              onClick={() => {
                handleViewDateChange(new Date(year, viewDate.getMonth(), 1));
                setPanel("months");
              }}
            >
              {year}
            </button>
          ))}
        </div>
      ) : null}

      {panel === "months" ? (
        <div className={calendarYearGridClassName}>
          {months.map((month, index) => (
            <button
              key={month}
              type="button"
              disabled={disabled}
              className={cn(
                calendarDayButtonClassName,
                "w-full capitalize",
                viewDate.getMonth() === index && calendarDaySelectedClassName
              )}
              onClick={() => {
                handleViewDateChange(new Date(viewDate.getFullYear(), index, 1));
                setPanel("days");
              }}
            >
              {month}
            </button>
          ))}
        </div>
      ) : null}

      {panel === "days" ? (
        <>
          <div className={calendarWeekdayRowClassName}>
            {weekdays.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>
          <div className={calendarDayGridClassName}>
            {days.map((day) => {
              const outsideMonth = day.getMonth() !== viewDate.getMonth();
              const selected = isDaySelected(day);
              const inRange = isDateInRange(day, from, to);
              const today = isToday(day);
              const label = formatDayLabel(day, locale);

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  disabled={disabled}
                  aria-label={today ? `${label}, today` : label}
                  aria-pressed={selected}
                  aria-current={today ? "date" : undefined}
                  className={cn(
                    calendarDayButtonClassName,
                    outsideMonth && calendarDayOutsideClassName,
                    selected && calendarDaySelectedClassName,
                    inRange && !selected && calendarDayInRangeClassName,
                    today && !selected && calendarDayTodayClassName
                  )}
                  onClick={() => handleSelect(day)}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </>
      ) : null}

      {showFooter ? (
        <div className={calendarFooterClassName}>
          <button
            type="button"
            className={calendarFooterActionClassName}
            disabled={disabled}
            onClick={handleClear}
          >
            Clear
          </button>
          <button
            type="button"
            className={calendarFooterActionClassName}
            disabled={disabled}
            onClick={handleToday}
          >
            Today
          </button>
        </div>
      ) : null}
    </div>
  );
}
