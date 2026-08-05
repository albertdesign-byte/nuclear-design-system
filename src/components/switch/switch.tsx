"use client";

import { Switch as SwitchPrimitive } from "@base-ui/react/switch";

import { cn } from "@/lib/utils";

import { switchThumbVariants, switchVariants } from "./switch.styles";
import type { SwitchProps } from "./switch.types";

function Switch({
  className,
  size = "md",
  disabled = false,
  ...props
}: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      data-size={size}
      disabled={disabled}
      className={cn(switchVariants({ size }), className)}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className={switchThumbVariants({ size })}
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
