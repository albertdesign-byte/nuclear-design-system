"use client";

import type { ReactNode } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { Spinner } from "@/components/spinner";
import { cn } from "@/lib/utils";
import { formFieldGroupClassName } from "@/lib/form-field";

import { Input } from "./input";
import { InputGroup } from "./input-group";
import type { InputProps } from "./input.types";

export type InputFieldProps = Omit<InputProps, "id"> & {
  id?: string;
  label: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  required?: boolean;
  prefix?: ReactNode;
  suffix?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  loading?: boolean;
  className?: string;
  inputClassName?: string;
  groupClassName?: string;
};

function InputField({
  id,
  label,
  description,
  helperText,
  error,
  invalid = false,
  required = false,
  prefix,
  suffix,
  startIcon,
  endIcon,
  loading = false,
  className,
  inputClassName,
  groupClassName,
  disabled,
  "aria-describedby": ariaDescribedBy,
  ...inputProps
}: InputFieldProps) {
  const descriptionId = id ? `${id}-description` : undefined;
  const helperId = id ? `${id}-helper` : undefined;
  const errorId = id ? `${id}-error` : undefined;
  const isInvalid = invalid || Boolean(error);
  const isDisabled = disabled || loading;
  const hasGroup = Boolean(prefix || suffix || startIcon || endIcon || loading);

  const describedBy = [
    ariaDescribedBy,
    description ? descriptionId : undefined,
    helperText ? helperId : undefined,
    error ? errorId : undefined,
  ]
    .filter(Boolean)
    .join(" ");

  const sharedInputProps = {
    id,
    disabled: isDisabled,
    "aria-invalid": isInvalid || undefined,
    "aria-required": required || undefined,
    "aria-describedby": describedBy || undefined,
    "aria-busy": loading || undefined,
    className: inputClassName,
    ...inputProps,
  };

  const control = hasGroup ? (
    <InputGroup
      {...sharedInputProps}
      prefix={prefix}
      suffix={suffix}
      startIcon={startIcon}
      endIcon={
        loading ? (
          <Spinner size="sm" className="text-[var(--color-text-muted)]" />
        ) : (
          endIcon
        )
      }
      groupClassName={groupClassName}
    />
  ) : (
    <Input {...sharedInputProps} />
  );

  return (
    <div
      className={cn(formFieldGroupClassName, className)}
      data-slot="input-field"
    >
      <Label htmlFor={id} invalid={isInvalid}>
        {label}
        {required ? " *" : null}
      </Label>
      {description ? (
        <FieldDescription id={descriptionId}>{description}</FieldDescription>
      ) : null}
      {control}
      {helperText ? (
        <FieldDescription id={helperId}>{helperText}</FieldDescription>
      ) : null}
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </div>
  );
}

export { InputField };
