"use client";

import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";

import { chipRemoveButtonClassName, chipVariants } from "./chip.styles";
import type { ChipProps } from "./chip.types";

function Chip({
  className,
  variant = "default",
  children,
  onRemove,
  removeLabel = "Remove",
  ...props
}: ChipProps) {
  return (
    <span
      data-slot="chip"
      data-variant={variant}
      className={cn(chipVariants({ variant }), className)}
      {...props}
    >
      <span className="min-w-0 truncate">{children}</span>
      {onRemove ? (
        <button
          type="button"
          data-slot="chip-remove"
          aria-label={removeLabel}
          className={chipRemoveButtonClassName}
          onClick={onRemove}
        >
          <XIcon className="size-3" aria-hidden />
        </button>
      ) : null}
    </span>
  );
}

export { Chip, chipVariants };
