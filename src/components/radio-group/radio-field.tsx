"use client";

import type { ReactNode } from "react";

import { FieldDescription } from "@/components/field-description";
import { cn } from "@/lib/utils";

import { RadioGroupItem } from "./radio-group";
import {
  radioControlClassName,
  radioFieldClassName,
  radioFieldContentClassName,
  radioFieldLabelClassName,
} from "./radio-group.styles";
import type { RadioGroupItemProps } from "./radio-group.types";

export type RadioFieldProps = RadioGroupItemProps & {
  label: ReactNode;
  description?: ReactNode;
  invalid?: boolean;
  className?: string;
  contentClassName?: string;
  itemClassName?: string;
};

function RadioField({
  label,
  description,
  invalid = false,
  className,
  contentClassName,
  itemClassName,
  disabled,
  size = "sm",
  "aria-describedby": ariaDescribedBy,
  ...itemProps
}: RadioFieldProps) {
  return (
    <label
      className={cn(radioFieldClassName, "items-start", className)}
      data-slot="radio-field"
    >
      <span className={radioControlClassName}>
        <RadioGroupItem
          size={size}
          disabled={disabled}
          className={itemClassName}
          aria-invalid={invalid || undefined}
          aria-describedby={ariaDescribedBy}
          {...itemProps}
        />
      </span>
      <span className={cn(radioFieldContentClassName, contentClassName)}>
        <span className={radioFieldLabelClassName({ invalid })}>{label}</span>
        {description ? (
          <FieldDescription>{description}</FieldDescription>
        ) : null}
      </span>
    </label>
  );
}

export { RadioField };
