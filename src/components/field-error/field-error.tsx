"use client";

import { AlertTriangleIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { fieldErrorClassName, fieldErrorWithIconClassName } from "./field-error.styles";
import type { FieldErrorProps } from "./field-error.types";

function FieldError({ className, showIcon = false, children, ...props }: FieldErrorProps) {
  return (
    <p
      data-slot="field-error"
      role="alert"
      className={cn(fieldErrorClassName, showIcon && fieldErrorWithIconClassName, className)}
      {...props}
    >
      {showIcon ? <AlertTriangleIcon aria-hidden className="size-3.5 shrink-0" /> : null}
      {children}
    </p>
  );
}

export { FieldError };
