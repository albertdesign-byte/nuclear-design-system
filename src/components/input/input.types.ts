import type { Input as InputPrimitive } from "@base-ui/react/input";
import type { VariantProps } from "class-variance-authority";

import type { inputVariants } from "./input.styles";

export type InputSize = "sm" | "md" | "lg" | "xl" | "xxl";

export interface InputProps
  extends Omit<InputPrimitive.Props, "disabled" | "size">,
    VariantProps<typeof inputVariants> {
  /** Scale aligned with Button heights for form rows. @default "md" */
  size?: InputSize;
  /** Stretch to container width. @default true */
  fullWidth?: boolean;
  disabled?: boolean;
}
