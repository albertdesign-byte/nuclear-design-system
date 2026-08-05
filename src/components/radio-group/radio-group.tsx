"use client";

import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/lib/utils";

import {
  radioGroupClassName,
  radioGroupIndicatorClassName,
  radioGroupIndicatorDotVariants,
  radioGroupItemVariants,
} from "./radio-group.styles";
import type { RadioGroupItemProps, RadioGroupProps } from "./radio-group.types";

function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive
      data-slot="radio-group"
      className={cn(radioGroupClassName, className)}
      {...props}
    />
  );
}

function RadioGroupItem({
  className,
  size = "md",
  disabled = false,
  ...props
}: RadioGroupItemProps) {
  return (
    <RadioPrimitive.Root
      data-slot="radio-group-item"
      data-size={size}
      disabled={disabled}
      className={cn(radioGroupItemVariants({ size }), className)}
      {...props}
    >
      <RadioPrimitive.Indicator
        data-slot="radio-group-indicator"
        className={radioGroupIndicatorClassName}
      >
        <span className={radioGroupIndicatorDotVariants({ size })} />
      </RadioPrimitive.Indicator>
    </RadioPrimitive.Root>
  );
}

export { RadioGroup, RadioGroupItem };
