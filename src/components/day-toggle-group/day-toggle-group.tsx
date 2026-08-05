"use client";

import { cn } from "@/lib/utils";

import { dayToggleGroupDefaultDays } from "./day-toggle-group.constants";
import {
  dayToggleButtonVariants,
  dayToggleGroupClassName,
} from "./day-toggle-group.styles";
import type { DayToggleGroupProps, DayToggleValue } from "./day-toggle-group.types";

function toggleDayValue(current: DayToggleValue[], day: DayToggleValue) {
  if (current.includes(day)) {
    return current.filter((value) => value !== day);
  }

  return [...current, day];
}

export function DayToggleGroup({
  value,
  onValueChange,
  days = dayToggleGroupDefaultDays,
  disabled = false,
  className,
  "aria-label": ariaLabel = "Choose days",
  ...props
}: DayToggleGroupProps) {
  function handleToggle(day: DayToggleValue) {
    if (disabled) {
      return;
    }

    onValueChange(toggleDayValue(value, day));
  }

  return (
    <div
      role="group"
      aria-label={ariaLabel}
      data-slot="day-toggle-group"
      className={cn(dayToggleGroupClassName, className)}
      {...props}
    >
      {days.map((day) => {
        const selected = value.includes(day.value);

        return (
          <button
            key={day.value}
            type="button"
            disabled={disabled}
            aria-pressed={selected}
            aria-label={day.label}
            className={dayToggleButtonVariants({ selected })}
            onClick={() => handleToggle(day.value)}
          >
            {day.label}
          </button>
        );
      })}
    </div>
  );
}
