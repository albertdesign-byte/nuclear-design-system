"use client";

import { forwardRef } from "react";

import { cn } from "@/lib/utils";

import { textareaVariants } from "./textarea.styles";
import type { TextareaProps } from "./textarea.types";

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      size = "md",
      fullWidth = true,
      disabled = false,
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        disabled={disabled}
        className={cn(
          textareaVariants({ size }),
          fullWidth ? "w-full" : "w-auto",
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea };
