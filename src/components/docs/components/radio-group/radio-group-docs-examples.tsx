"use client";

import { RadioGroupField } from "@/components/radio-group";

const visitOptions = [
  { value: "in-person", label: "In-person" },
  { value: "telemedicine", label: "Telemedicine" },
  { value: "home", label: "Home visit" },
] as const;

export function RadioGroupVisitFieldDemo({
  disabled = false,
  invalid = false,
  defaultValue = "telemedicine",
  listClassName,
  id = "visit-type",
  legend = "Visit type",
  error,
}: {
  disabled?: boolean;
  invalid?: boolean;
  defaultValue?: string;
  listClassName?: string;
  id?: string;
  legend?: string;
  error?: string;
}) {
  return (
    <RadioGroupField
      id={id}
      legend={legend}
      defaultValue={defaultValue}
      disabled={disabled}
      invalid={invalid}
      listClassName={listClassName}
      options={[...visitOptions]}
      error={error ?? (invalid ? "Select a visit type to continue." : undefined)}
    />
  );
}

/** @deprecated Use RadioGroupVisitFieldDemo */
export function RadioGroupVisitDemo(props: React.ComponentProps<typeof RadioGroupVisitFieldDemo>) {
  return <RadioGroupVisitFieldDemo {...props} />;
}
