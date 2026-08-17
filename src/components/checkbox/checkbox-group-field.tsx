"use client";

import type { ReactNode } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { cn } from "@/lib/utils";
import { formFieldGroupClassName } from "@/lib/form-field";

import { CheckboxField, type CheckboxFieldProps } from "./checkbox-field";
import {
  checkboxGroupClassName,
  checkboxGroupLegendClassName,
  checkboxGroupListClassName,
} from "./checkbox.styles";

export type CheckboxGroupOption = Omit<
  CheckboxFieldProps,
  "label" | "description" | "helperText" | "error" | "invalid"
> & {
  value: string;
  label: ReactNode;
  description?: ReactNode;
};

export type CheckboxGroupFieldProps = {
  legend: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  options: CheckboxGroupOption[];
  className?: string;
  listClassName?: string;
  id?: string;
};

function CheckboxGroupField({
  legend,
  description,
  helperText,
  error,
  invalid = false,
  options,
  className,
  listClassName,
  id = "checkbox-group",
}: CheckboxGroupFieldProps) {
  const legendId = `${id}-legend`;
  const descriptionId = `${id}-description`;
  const helperId = `${id}-helper`;
  const errorId = `${id}-error`;
  const isInvalid = invalid || Boolean(error);

  return (
    <fieldset
      className={cn(checkboxGroupClassName, formFieldGroupClassName, className)}
      data-slot="checkbox-group-field"
      aria-invalid={isInvalid || undefined}
      aria-describedby={
        [description && descriptionId, helperText && helperId, error && errorId]
          .filter(Boolean)
          .join(" ") || undefined
      }
    >
      <legend id={legendId} className={checkboxGroupLegendClassName}>
        {legend}
      </legend>
      {description ? (
        <FieldDescription id={descriptionId}>{description}</FieldDescription>
      ) : null}
      <div
        role="group"
        aria-labelledby={legendId}
        className={cn(checkboxGroupListClassName, listClassName)}
      >
        {options.map((option) => {
          const {
            value,
            label: optionLabel,
            description: optionDescription,
            id: optionId,
            ...checkboxProps
          } = option;

          return (
            <CheckboxField
              key={value}
              id={optionId ?? `${id}-${value}`}
              label={optionLabel}
              description={optionDescription}
              invalid={isInvalid}
              {...checkboxProps}
            />
          );
        })}
      </div>
      {helperText ? <FieldDescription id={helperId}>{helperText}</FieldDescription> : null}
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </fieldset>
  );
}

export { CheckboxGroupField };
