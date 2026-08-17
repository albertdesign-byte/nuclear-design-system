"use client";

import type { ReactNode } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { cn } from "@/lib/utils";
import { formFieldGroupClassName } from "@/lib/form-field";

import { Checkbox } from "./checkbox";
import {
  checkboxControlClassName,
  checkboxFieldClassName,
  checkboxFieldContentClassName,
  checkboxFieldLabelClassName,
  checkboxFieldMessageInsetClassName,
} from "./checkbox.styles";
import type { CheckboxProps } from "./checkbox.types";

export type CheckboxFieldProps = Omit<CheckboxProps, "id"> & {
  id?: string;
  label: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  className?: string;
  contentClassName?: string;
  checkboxClassName?: string;
};

function CheckboxField({
  id,
  label,
  description,
  helperText,
  error,
  invalid = false,
  className,
  contentClassName,
  checkboxClassName,
  disabled,
  size = "lg",
  "aria-describedby": ariaDescribedBy,
  ...checkboxProps
}: CheckboxFieldProps) {
  const descriptionId = id ? `${id}-description` : undefined;
  const helperId = id ? `${id}-helper` : undefined;
  const errorId = id ? `${id}-error` : undefined;
  const isInvalid = invalid || Boolean(error);
  const hasDescription = Boolean(description);

  const describedBy = [
    ariaDescribedBy,
    description ? descriptionId : undefined,
    helperText ? helperId : undefined,
    error ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  const field = (
    <label
      htmlFor={id}
      className={cn(
        checkboxFieldClassName,
        hasDescription ? "items-start" : "items-center",
        className
      )}
      data-slot="checkbox-field"
    >
      <span
        className={cn(
          checkboxControlClassName,
          hasDescription &&
            "mt-[calc((var(--text-label-line-height)-var(--icon-lg))/2)]"
        )}
      >
        <Checkbox
          id={id}
          size={size}
          disabled={disabled}
          className={checkboxClassName}
          aria-invalid={isInvalid || undefined}
          aria-describedby={describedBy || undefined}
          {...checkboxProps}
        />
      </span>
      <span className={cn(checkboxFieldContentClassName, contentClassName)}>
        <span className={checkboxFieldLabelClassName({ invalid: isInvalid })}>
          {label}
        </span>
        {description ? (
          <FieldDescription id={descriptionId}>{description}</FieldDescription>
        ) : null}
      </span>
    </label>
  );

  if (!helperText && !error) {
    return field;
  }

  return (
    <div className={formFieldGroupClassName} data-slot="checkbox-field-group">
      {field}
      {helperText ? (
        <FieldDescription
          id={helperId}
          className={checkboxFieldMessageInsetClassName}
        >
          {helperText}
        </FieldDescription>
      ) : null}
      {error ? (
        <FieldError id={errorId} className={checkboxFieldMessageInsetClassName}>
          {error}
        </FieldError>
      ) : null}
    </div>
  );
}

export { CheckboxField };
