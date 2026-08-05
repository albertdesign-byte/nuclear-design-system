"use client";

import { cn } from "@/lib/utils";

import { labelClassName } from "./label.styles";
import type { LabelProps } from "./label.types";

function Label({ className, invalid = false, ...props }: LabelProps) {
  return (
    <label
      data-slot="label"
      data-invalid={invalid ? "" : undefined}
      className={cn(labelClassName({ invalid }), className)}
      {...props}
    />
  );
}

export { Label };
