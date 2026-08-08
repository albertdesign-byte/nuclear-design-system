import type { Button as ButtonPrimitive } from "@base-ui/react/button";
import type { VariantProps } from "class-variance-authority";

import type { buttonVariants } from "./button.styles";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonIntent = "default" | "danger";
export type ButtonSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "icon-sm"
  | "icon-md"
  | "icon-lg"
  | "icon-xl"
  | "icon-xxl";

export interface ButtonProps
  extends Omit<ButtonPrimitive.Props, "disabled">,
    VariantProps<typeof buttonVariants> {
  /** Semantic intent — affects color tokens, not layout. @default "default" */
  intent?: ButtonIntent;
  /** Async action in progress. Disables interaction and sets aria-busy. */
  loading?: boolean;
  /** Screen reader label while loading when visible text is insufficient. */
  loadingLabel?: string;
  /** Stretch to container width. */
  fullWidth?: boolean;
  disabled?: boolean;
}
