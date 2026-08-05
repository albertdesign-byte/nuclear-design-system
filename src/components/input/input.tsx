"use client";

import { Input as InputPrimitive } from "@base-ui/react/input";

import { cn } from "@/lib/utils";

import { inputVariants } from "./input.styles";
import type { InputProps } from "./input.types";

function Input({
  className,
  size = "md",
  fullWidth = true,
  disabled = false,
  type = "text",
  ...props
}: InputProps) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      disabled={disabled}
      className={cn(
        inputVariants({ size }),
        fullWidth ? "w-full" : "w-auto",
        className
      )}
      {...props}
    />
  );
}

export { Input };
