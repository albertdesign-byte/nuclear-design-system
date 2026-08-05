import type { ComponentProps } from "react";
import type { VariantProps } from "class-variance-authority";

import type { textareaVariants } from "./textarea.styles";

export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps
  extends Omit<ComponentProps<"textarea">, "disabled">,
    VariantProps<typeof textareaVariants> {
  /** Minimum field scale for multiline content. @default "md" */
  size?: TextareaSize;
  /** Stretch to container width. @default true */
  fullWidth?: boolean;
  disabled?: boolean;
}
