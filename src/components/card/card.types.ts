import type { VariantProps } from "class-variance-authority";
import type * as React from "react";

import type { cardVariants } from "./card.styles";

export type CardSize = "default" | "sm";

export interface CardProps
  extends React.ComponentProps<"div">,
    VariantProps<typeof cardVariants> {
  /** Padding rhythm for card content. @default "default" */
  size?: CardSize;
}

export interface CardHeaderProps extends React.ComponentProps<"div"> {}
export interface CardTitleProps extends React.ComponentProps<"div"> {}
export interface CardDescriptionProps extends React.ComponentProps<"div"> {}
export interface CardActionProps extends React.ComponentProps<"div"> {}
export interface CardContentProps extends React.ComponentProps<"div"> {}
export interface CardFooterProps extends React.ComponentProps<"div"> {}
