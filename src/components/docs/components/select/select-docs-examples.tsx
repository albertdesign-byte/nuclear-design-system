"use client";

import { SelectField } from "@/components/select";
import type { SelectTriggerSize } from "@/components/select";

const statusOptions = [
  { value: "active", label: "Active" },
  { value: "observation", label: "Under observation" },
  { value: "discharged", label: "Discharged" },
] as const;

const insuranceOptions = [
  { value: "bluecross", label: "BlueCross PPO" },
  { value: "aetna", label: "Aetna HMO" },
  { value: "medicare", label: "Medicare" },
] as const;

export function SelectStatusFieldDemo({
  size = "md",
  fullWidth = true,
  disabled = false,
  invalid = false,
  helper = false,
  placeholder = "Select status",
  defaultValue = "active",
  className,
  fieldId = "patient-status",
  label = "Patient status",
}: {
  size?: SelectTriggerSize;
  fullWidth?: boolean;
  disabled?: boolean;
  invalid?: boolean;
  helper?: boolean;
  placeholder?: string;
  defaultValue?: string;
  className?: string;
  fieldId?: string;
  label?: string;
}) {
  return (
    <SelectField
      id={fieldId}
      label={label}
      options={[...statusOptions]}
      defaultValue={defaultValue || undefined}
      disabled={disabled}
      invalid={invalid}
      size={size}
      fullWidth={fullWidth}
      triggerClassName={className}
      placeholder={placeholder}
      helperText={
        helper ? "Status updates sync to the care team dashboard." : undefined
      }
      error={invalid ? "Select a patient status to continue." : undefined}
    />
  );
}

/** @deprecated Use SelectStatusFieldDemo */
export function SelectStatusDemo(props: React.ComponentProps<typeof SelectStatusFieldDemo>) {
  return <SelectStatusFieldDemo {...props} />;
}

export function SelectInsuranceFieldDemo({
  className,
  defaultValue = "bluecross",
  triggerId = "insurance",
}: {
  className?: string;
  defaultValue?: string;
  triggerId?: string;
}) {
  return (
    <SelectField
      id={triggerId}
      label="Medical insurance"
      options={[...insuranceOptions]}
      defaultValue={defaultValue}
      triggerClassName={className}
      placeholder="Select insurance"
    />
  );
}

/** @deprecated Use SelectInsuranceFieldDemo */
export function SelectInsuranceDemo(props: React.ComponentProps<typeof SelectInsuranceFieldDemo>) {
  return <SelectInsuranceFieldDemo {...props} />;
}
