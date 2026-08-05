import type { Switch as SwitchPrimitive } from "@base-ui/react/switch";
import type { VariantProps } from "class-variance-authority";

import type { switchVariants } from "./switch.styles";

export type SwitchSize = "sm" | "md" | "lg";

export interface SwitchProps
  extends Omit<SwitchPrimitive.Root.Props, "disabled">,
    VariantProps<typeof switchVariants> {
  /** Control scale derived from iconography tokens. @default "md" */
  size?: SwitchSize;
  disabled?: boolean;
}
