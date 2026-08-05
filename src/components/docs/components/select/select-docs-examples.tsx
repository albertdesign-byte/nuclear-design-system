"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/select";
import type { SelectTriggerSize } from "@/components/select";

const statusOptions = [
  { value: "active", label: "Activo" },
  { value: "observation", label: "En observación" },
  { value: "discharged", label: "Alta" },
] as const;

const insuranceOptions = [
  { value: "bluecross", label: "BlueCross PPO" },
  { value: "aetna", label: "Aetna HMO" },
  { value: "medicare", label: "Medicare" },
] as const;

export function SelectStatusDemo({
  size = "md",
  fullWidth = true,
  disabled = false,
  invalid = false,
  placeholder = "Select status",
  defaultValue = "active",
  className,
}: {
  size?: SelectTriggerSize;
  fullWidth?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
}) {
  return (
    <Select
      defaultValue={defaultValue || undefined}
      disabled={disabled}
    >
      <SelectTrigger
        size={size}
        fullWidth={fullWidth}
        aria-invalid={invalid || undefined}
        className={className}
      >
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {statusOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export function SelectInsuranceDemo({
  className,
  defaultValue = "bluecross",
  triggerId,
}: {
  className?: string;
  defaultValue?: string;
  triggerId?: string;
}) {
  return (
    <Select defaultValue={defaultValue}>
      <SelectTrigger id={triggerId} className={className}>
        <SelectValue placeholder="Select insurance" />
      </SelectTrigger>
      <SelectContent>
        {insuranceOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
