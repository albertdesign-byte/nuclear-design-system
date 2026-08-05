import type { Select as SelectPrimitive } from "@base-ui/react/select";
import type { VariantProps } from "class-variance-authority";

import type { selectTriggerVariants } from "./select.styles";

export type SelectTriggerSize = "sm" | "md" | "lg";

export interface SelectTriggerProps
  extends SelectPrimitive.Trigger.Props,
    VariantProps<typeof selectTriggerVariants> {
  /** Trigger scale aligned with Input heights. @default "md" */
  size?: SelectTriggerSize;
  /** Stretch trigger to container width. @default true */
  fullWidth?: boolean;
}
