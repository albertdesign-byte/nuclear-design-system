import type { useRender } from "@base-ui/react/use-render";
import type { VariantProps } from "class-variance-authority";

import type { badgeVariants } from "./badge.styles";

export type BadgeVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps
  extends useRender.ComponentProps<"span">,
    VariantProps<typeof badgeVariants> {
  /** Visual style mapped to Medmo semantic color tokens. @default "default" */
  variant?: BadgeVariant;
  /** Control scale for density in tables and headers. @default "md" */
  size?: BadgeSize;
}
