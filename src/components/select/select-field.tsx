"use client";

import type { ReactNode } from "react";

import { FieldDescription } from "@/components/field-description";
import { FieldError } from "@/components/field-error";
import { Label } from "@/components/label";
import { cn } from "@/lib/utils";
import { formFieldGroupClassName } from "@/lib/form-field";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "./select";
import type { SelectTriggerSize } from "./select.types";

export type SelectFieldOption = {
  value: string;
  label: ReactNode;
  group?: string;
  disabled?: boolean;
};

export type SelectFieldProps = {
  id: string;
  label: ReactNode;
  options: SelectFieldOption[];
  placeholder?: ReactNode;
  description?: ReactNode;
  helperText?: ReactNode;
  validationMessage?: ReactNode;
  error?: ReactNode;
  invalid?: boolean;
  required?: boolean;
  disabled?: boolean;
  readOnly?: boolean;
  loading?: boolean;
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  size?: SelectTriggerSize;
  fullWidth?: boolean;
  className?: string;
  triggerClassName?: string;
};

function SelectField({
  id,
  label,
  options,
  placeholder = "Select an option",
  description,
  helperText,
  validationMessage,
  error,
  invalid = false,
  required = false,
  disabled = false,
  readOnly = false,
  loading = false,
  value,
  defaultValue,
  onValueChange,
  size = "md",
  fullWidth = true,
  className,
  triggerClassName,
}: SelectFieldProps) {
  const descriptionId = `${id}-description`;
  const helperId = `${id}-helper`;
  const validationId = `${id}-validation`;
  const errorId = `${id}-error`;
  const isInvalid = invalid || Boolean(error);
  const describedBy = [
    description && descriptionId,
    helperText && helperId,
    validationMessage && validationId,
    error && errorId,
  ]
    .filter(Boolean)
    .join(" ");

  const groups = Array.from(
    options.reduce((map, option) => {
      const group = option.group ?? "";
      const current = map.get(group) ?? [];
      current.push(option);
      map.set(group, current);
      return map;
    }, new Map<string, SelectFieldOption[]>())
  );

  return (
    <div className={cn(formFieldGroupClassName, "w-full", className)} data-slot="select-field">
      <Label htmlFor={id} invalid={isInvalid}>
        {label}
        {required ? " *" : null}
      </Label>
      {description ? (
        <FieldDescription id={descriptionId}>{description}</FieldDescription>
      ) : null}
      <Select
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
        disabled={disabled || loading}
        readOnly={readOnly}
        required={required}
      >
        <SelectTrigger
          id={id}
          size={size}
          fullWidth={fullWidth}
          loading={loading}
          className={triggerClassName}
          aria-invalid={isInvalid || undefined}
          aria-required={required || undefined}
          aria-busy={loading || undefined}
          aria-describedby={describedBy || undefined}
        >
          <SelectValue placeholder={loading ? "Loading options…" : placeholder} />
        </SelectTrigger>
        <SelectContent>
          {groups.map(([group, groupOptions], groupIndex) => (
            <SelectGroup key={group || "options"}>
              {group ? <SelectLabel>{group}</SelectLabel> : null}
              {groupOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))}
              {group && groupIndex < groups.length - 1 ? <SelectSeparator /> : null}
            </SelectGroup>
          ))}
        </SelectContent>
      </Select>
      {helperText ? (
        <FieldDescription id={helperId}>{helperText}</FieldDescription>
      ) : null}
      {validationMessage ? (
        <FieldDescription id={validationId}>{validationMessage}</FieldDescription>
      ) : null}
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </div>
  );
}

export { SelectField };
