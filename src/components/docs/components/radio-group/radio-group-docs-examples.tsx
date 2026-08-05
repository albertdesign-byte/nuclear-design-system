"use client";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/radio-group";
import type { RadioGroupItemSize } from "@/components/radio-group";

const visitOptions = [
  { value: "in-person", label: "Presencial" },
  { value: "telemedicine", label: "Telemedicina" },
  { value: "home", label: "Domiciliaria" },
] as const;

export function RadioGroupVisitDemo({
  size = "md",
  disabled = false,
  invalid = false,
  defaultValue = "telemedicine",
  className,
}: {
  size?: RadioGroupItemSize;
  disabled?: boolean;
  invalid?: boolean;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <RadioGroup
      defaultValue={defaultValue}
      disabled={disabled}
      aria-invalid={invalid || undefined}
      className={className}
    >
      {visitOptions.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]"
        >
          <RadioGroupItem value={option.value} size={size} />
          <span>{option.label}</span>
        </label>
      ))}
    </RadioGroup>
  );
}
