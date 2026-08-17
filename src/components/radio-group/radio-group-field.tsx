"use client";

import type { ReactNode } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { cn } from "@/lib/utils";
import { formFieldGroupClassName } from "@/lib/form-field";

import { RadioField, type RadioFieldProps } from "./radio-field";
import { RadioGroup } from "./radio-group";
import {
  radioGroupFieldClassName,
  radioGroupLegendClassName,
  radioGroupListClassName,
} from "./radio-group.styles";
import type { RadioGroupProps } from "./radio-group.types";

export type RadioGroupOption = Omit<
  RadioFieldProps,
  "label" | "description" | "invalid"
> & {
  value: string;
  label: ReactNode;
  description?: ReactNode;
};

export type RadioGroupFieldProps = Omit<RadioGroupProps, "children"> & {
  legend: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  options: RadioGroupOption[];
  className?: string;
  listClassName?: string;
  id?: string;
};

function RadioGroupField({
  legend,
  description,
  helperText,
  error,
  invalid = false,
  options,
  className,
  listClassName,
  id = "radio-group",
  ...groupProps
}: RadioGroupFieldProps) {
  const legendId = `${id}-legend`;
  const descriptionId = `${id}-description`;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const isInvalid = invalid || Boolean(error);

  return (
    <fieldset
      className={cn(radioGroupFieldClassName, formFieldGroupClassName, className)}
      data-slot="radio-group-field"
      aria-invalid={isInvalid || undefined}
      aria-describedby={
        [description && descriptionId, helperText && helperId, error && errorId]
          .filter(Boolean)
          .join(" ") || undefined
      }
    >
      <legend id={legendId} className={radioGroupLegendClassName}>
        {legend}
      </legend>
      {description ? (
        <FieldDescription id={descriptionId}>{description}</FieldDescription>
      ) : null}
      <RadioGroup
        aria-labelledby={legendId}
        className={cn(radioGroupListClassName, listClassName)}
        {...groupProps}
      >
        {options.map((option) => {
          const {
            value,
            label: optionLabel,
            description: optionDescription,
            ...itemProps
          } = option;

          return (
            <RadioField
              key={value}
              value={value}
              label={optionLabel}
              description={optionDescription}
              invalid={isInvalid}
              {...itemProps}
            />
          );
        })}
      </RadioGroup>
      {helperText ? <FieldDescription id={helperId}>{helperText}</FieldDescription> : null}
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </fieldset>
  );
}

export { RadioGroupField };
