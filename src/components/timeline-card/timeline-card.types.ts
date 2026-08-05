import type { ComponentProps, ReactNode } from "react";
import type { VariantProps } from "class-variance-authority";

import type { timelineCardHeaderVariants } from "./timeline-card.styles";

export type TimelineCardTagItem = {
  label: ReactNode;
  href?: string;
  onClick?: () => void;
};

export interface TimelineCardProps
  extends Omit<ComponentProps<"article">, "title"> {
  title: ReactNode;
  author?: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  priority?: ReactNode;
  tags?: TimelineCardTagItem[];
  tone?: VariantProps<typeof timelineCardHeaderVariants>["tone"];
}

export type TimelineCardHeaderProps = ComponentProps<"div"> &
  VariantProps<typeof timelineCardHeaderVariants>;

export type TimelineCardContentProps = ComponentProps<"div">;

export type TimelineCardTagProps = {
  className?: string;
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
};

export type TimelineCardPriorityProps = ComponentProps<"span">;
