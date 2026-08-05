import type { Avatar as AvatarPrimitive } from "@base-ui/react/avatar";
import type { VariantProps } from "class-variance-authority";
import type * as React from "react";

import type {
  avatarBadgeVariants,
  avatarFallbackVariants,
  avatarGroupCountVariants,
  avatarVariants,
} from "./avatar.styles";

export type AvatarSize = "sm" | "md" | "lg";

export interface AvatarProps
  extends AvatarPrimitive.Root.Props,
    VariantProps<typeof avatarVariants> {
  /** Avatar diameter aligned with spacing tokens. @default "md" */
  size?: AvatarSize;
}

export interface AvatarImageProps extends AvatarPrimitive.Image.Props {}

export interface AvatarFallbackProps
  extends AvatarPrimitive.Fallback.Props,
    VariantProps<typeof avatarFallbackVariants> {
  size?: AvatarSize;
}

export interface AvatarBadgeProps
  extends React.ComponentProps<"span">,
    VariantProps<typeof avatarBadgeVariants> {
  size?: AvatarSize;
}

export interface AvatarGroupProps extends React.ComponentProps<"div"> {}

export interface AvatarGroupCountProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof avatarGroupCountVariants> {
  size?: AvatarSize;
}
