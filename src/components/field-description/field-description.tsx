"use client";

import { cn } from "@/lib/utils";

import { fieldDescriptionClassName } from "./field-description.styles";
import type { FieldDescriptionProps } from "./field-description.types";

function FieldDescription({ className, ...props }: FieldDescriptionProps) {
  return (
    <p
      data-slot="field-description"
      className={cn(fieldDescriptionClassName, className)}
      {...props}
    />
  );
}

export { FieldDescription };
