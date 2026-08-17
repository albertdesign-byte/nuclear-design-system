"use client";

import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import { Input } from "./input";
import {
  inputGroupAddonVariants,
  inputGroupClassName,
  inputGroupInputClassName,
  inputGroupTextAddonClassName,
} from "./input-group.styles";
import type { InputProps } from "./input.types";

export type InputGroupProps = InputProps & {
  prefix?: ReactNode;
  suffix?: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  groupClassName?: string;
  addonClassName?: string;
};

function InputGroup({
  prefix,
  suffix,
  startIcon,
  endIcon,
  groupClassName,
  addonClassName,
  className,
  ...inputProps
}: InputGroupProps) {
  const startAddon = startIcon ?? prefix;
  const endAddon = endIcon ?? suffix;
  const startIsIcon = Boolean(startIcon);
  const endIsIcon = Boolean(endIcon);

  return (
    <div
      data-slot="input-group"
      className={cn(inputGroupClassName, groupClassName)}
    >
      {startAddon ? (
        <span
          className={cn(
            inputGroupAddonVariants({ align: "start", icon: startIsIcon }),
            !startIsIcon && inputGroupTextAddonClassName,
            addonClassName
          )}
        >
          {startAddon}
        </span>
      ) : null}
      <Input
        className={cn(inputGroupInputClassName, className)}
        {...inputProps}
      />
      {endAddon ? (
        <span
          className={cn(
            inputGroupAddonVariants({ align: "end", icon: endIsIcon }),
            !endIsIcon && inputGroupTextAddonClassName,
            addonClassName
          )}
        >
          {endAddon}
        </span>
      ) : null}
    </div>
  );
}

export { InputGroup };
