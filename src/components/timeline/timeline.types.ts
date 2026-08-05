import type { ComponentProps, ReactNode } from "react";

import type {
  TimelineCardProps,
  TimelineCardTagItem,
} from "@/components/timeline-card";
import type { StageFlowBadgeVariant } from "@/components/stage-flow-badge";

export type TimelineEventCardStage = {
  label: string;
  variant?: StageFlowBadgeVariant;
};

/**
 * @deprecated Prefer `TimelineTimeMarker` + `TimelineCard`. See `@/components/timeline-card`.
 */
export interface TimelineEventCardProps
  extends Omit<TimelineCardProps, "icon"> {
  icon?: ReactNode;
  systemLabel?: ReactNode;
  stages?: TimelineEventCardStage[];
  tags?: TimelineCardTagItem[];
  time?: string;
  /** Used to align the time marker on the column rail. */
  column?: TimelineColumnId;
}

/** @deprecated Use `TimelineCardHeaderProps` from `@/components/timeline-card`. */
export type TimelineEventCardHeaderProps = ComponentProps<"div">;

/** @deprecated Use `TimelineCardContentProps` from `@/components/timeline-card`. */
export type TimelineEventCardContentProps = ComponentProps<"div">;

export type TimelineEventCardFooterProps = ComponentProps<"div">;

export type TimelineColumnId = "system-events" | "notes" | "communications";

export interface TimelineProps extends ComponentProps<"div"> {}

export interface TimelineHeaderProps extends ComponentProps<"div"> {}

export interface TimelineColumnHeaderProps extends ComponentProps<"div"> {
  column: TimelineColumnId;
}

export interface TimelineBodyProps extends ComponentProps<"div"> {
  maxHeight?: string;
}

export interface TimelineColumnProps extends ComponentProps<"div"> {
  column: TimelineColumnId;
}

export interface TimelineTimeMarkerProps extends ComponentProps<"div"> {
  time: string;
  /** Dot before time — system events rail. Time before dot — notes/comms rail. */
  align?: "start" | "end";
}

export interface TimelineEntryProps extends ComponentProps<"div"> {
  column: TimelineColumnId;
  time?: string;
  children: ReactNode;
}
