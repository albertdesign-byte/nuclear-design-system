import type { Radio as RadioPrimitive } from "@base-ui/react/radio";
import type { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";
import type { VariantProps } from "class-variance-authority";

import type { radioGroupItemVariants } from "./radio-group.styles";

export type RadioGroupItemSize = "sm" | "md" | "lg";

export interface RadioGroupProps extends RadioGroupPrimitive.Props {}

export interface RadioGroupItemProps
  extends Omit<RadioPrimitive.Root.Props, "disabled">,
    VariantProps<typeof radioGroupItemVariants> {
  /** Control scale aligned with iconography tokens. @default "lg" */
  size?: RadioGroupItemSize;
  disabled?: boolean;
}
