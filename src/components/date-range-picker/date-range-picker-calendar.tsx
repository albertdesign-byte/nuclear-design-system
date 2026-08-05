"use client";

import {
  ChevronDownIcon,
  ChevronUpIcon,
} from "lucide-react";
import { useMemo, useState } from "react";

import { cn } from "@/lib/utils";

import {
  dateRangePickerCalendarClassName,
  dateRangePickerCalendarHeaderClassName,
  dateRangePickerCalendarNavButtonClassName,
  dateRangePickerCalendarTitleButtonClassName,
  dateRangePickerDayButtonClassName,
  dateRangePickerDayGridClassName,
  dateRangePickerDayInRangeClassName,
  dateRangePickerDayOutsideClassName,
  dateRangePickerDaySelectedClassName,
  dateRangePickerDayTodayClassName,
  dateRangePickerFooterActionClassName,
  dateRangePickerFooterClassName,
  dateRangePickerWeekdayRowClassName,
  dateRangePickerYearGridClassName,
} from "./date-range-picker.styles";
import type { DateRangePickerCalendarProps } from "./date-range-picker.types";
import {
  addMonths,
  formatMonthYear,
  getCalendarDays,
  getWeekdayLabels,
  getYearRange,
  isDateInRange,
  isSameDay,
  isToday,
} from "./date-range-picker.utils";

type CalendarPanel = "days" | "months" | "years";

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
  const [panel, setPanel] = useState<CalendarPanel>("days");
  const weekdays = useMemo(() => getWeekdayLabels(locale), [locale]);
  const days = useMemo(() => getCalendarDays(viewDate), [viewDate]);
  const years = useMemo(() => getYearRange(viewDate.getFullYear()), [viewDate.getFullYear()]);
  const months = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) =>
        new Intl.DateTimeFormat(locale, { month: "short" }).format(new Date(2024, index, 1))
      ),
    [locale]
  );

  const selectedDate = activeField === "from" ? from : to;

  function handlePrevious() {
    if (panel === "years") {
      onViewDateChange(new Date(viewDate.getFullYear() - 12, viewDate.getMonth(), 1));
      return;
    }

    if (panel === "months") {
      onViewDateChange(new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), 1));
      return;
    }

    onViewDateChange(addMonths(viewDate, -1));
  }

  function handleNext() {
    if (panel === "years") {
      onViewDateChange(new Date(viewDate.getFullYear() + 12, viewDate.getMonth(), 1));
      return;
    }

    if (panel === "months") {
      onViewDateChange(new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), 1));
      return;
    }

    onViewDateChange(addMonths(viewDate, 1));
  }

  function handleTitleClick() {
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

  function isDaySelected(day: Date) {
    return isSameDay(day, selectedDate) || isSameDay(day, from) || isSameDay(day, to);
  }

  return (
    <div data-slot="date-range-picker-calendar" className={dateRangePickerCalendarClassName}>
      <div className={dateRangePickerCalendarHeaderClassName}>
        <button
          type="button"
          className={dateRangePickerCalendarTitleButtonClassName}
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
            className={dateRangePickerCalendarNavButtonClassName}
            onClick={handlePrevious}
          >
            <ChevronUpIcon className="size-4" aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Next"
            className={dateRangePickerCalendarNavButtonClassName}
            onClick={handleNext}
          >
            <ChevronDownIcon className="size-4" aria-hidden />
          </button>
        </div>
      </div>

      {panel === "years" ? (
        <div className={dateRangePickerYearGridClassName}>
          {years.map((year) => (
            <button
              key={year}
              type="button"
              className={cn(
                dateRangePickerDayButtonClassName,
                "w-full",
                selectedDate?.getFullYear() === year && dateRangePickerDaySelectedClassName
              )}
              onClick={() => {
                onViewDateChange(new Date(year, viewDate.getMonth(), 1));
                setPanel("months");
              }}
            >
              {year}
            </button>
          ))}
        </div>
      ) : null}

      {panel === "months" ? (
        <div className={dateRangePickerYearGridClassName}>
          {months.map((month, index) => (
            <button
              key={month}
              type="button"
              className={cn(
                dateRangePickerDayButtonClassName,
                "w-full capitalize",
                viewDate.getMonth() === index && dateRangePickerDaySelectedClassName
              )}
              onClick={() => {
                onViewDateChange(new Date(viewDate.getFullYear(), index, 1));
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
          <div className={dateRangePickerWeekdayRowClassName}>
            {weekdays.map((weekday) => (
              <span key={weekday}>{weekday}</span>
            ))}
          </div>
          <div className={dateRangePickerDayGridClassName}>
            {days.map((day) => {
              const outsideMonth = day.getMonth() !== viewDate.getMonth();
              const selected = isDaySelected(day);
              const inRange = isDateInRange(day, from, to);

              return (
                <button
                  key={day.toISOString()}
                  type="button"
                  className={cn(
                    dateRangePickerDayButtonClassName,
                    outsideMonth && dateRangePickerDayOutsideClassName,
                    selected && dateRangePickerDaySelectedClassName,
                    inRange && !selected && dateRangePickerDayInRangeClassName,
                    isToday(day) && !selected && dateRangePickerDayTodayClassName
                  )}
                  onClick={() => onSelect(day)}
                >
                  {day.getDate()}
                </button>
              );
            })}
          </div>
        </>
      ) : null}

      <div className={dateRangePickerFooterClassName}>
        <button type="button" className={dateRangePickerFooterActionClassName} onClick={onClear}>
          Borrar
        </button>
        <button type="button" className={dateRangePickerFooterActionClassName} onClick={onToday}>
          Hoy
        </button>
      </div>
    </div>
  );
}
