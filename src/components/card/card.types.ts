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

export type CardHeaderProps = React.ComponentProps<"div">;
export type CardTitleProps = React.ComponentProps<"div">;
export type CardDescriptionProps = React.ComponentProps<"div">;
export type CardActionProps = React.ComponentProps<"div">;
export type CardContentProps = React.ComponentProps<"div">;
export type CardMediaProps = React.ComponentProps<"div">;
export type CardFooterProps = React.ComponentProps<"div">;
