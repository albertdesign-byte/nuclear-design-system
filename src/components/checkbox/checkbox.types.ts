import type { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import type { VariantProps } from "class-variance-authority";

import type { checkboxVariants } from "./checkbox.styles";

export type CheckboxSize = "sm" | "md" | "lg";

export interface CheckboxProps
  extends Omit<CheckboxPrimitive.Root.Props, "disabled">,
    VariantProps<typeof checkboxVariants> {
  /** Control scale aligned with iconography tokens. @default "md" */
  size?: CheckboxSize;
  disabled?: boolean;
}
