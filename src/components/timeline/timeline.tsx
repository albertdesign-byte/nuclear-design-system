"use client";

import {
  Children,
  isValidElement,
  type ComponentProps,
  type ReactElement,
  type ReactNode,
} from "react";

import { Badge } from "@/components/badge";
import { ScrollArea } from "@/components/scroll-area";
import { StageFlowBadge } from "@/components/stage-flow-badge";
import {
  TimelineCard,
  TimelineCardContent,
  TimelineCardHeader,
} from "@/components/timeline-card";
import { cn } from "@/lib/utils";

import {
  timelineColumnClassName,
  timelineColumnCommunicationsClassName,
  timelineColumnHeaderClassName,
  timelineColumnNotesClassName,
  timelineColumnSystemEventsClassName,
  timelineEntryCardClassName,
  timelineEntryClassName,
  timelineEntryMarkerClassName,
  timelineEntryMarkerCommunicationsClassName,
  timelineEntryMarkerNotesClassName,
  timelineEntryMarkerSystemEventsClassName,
  timelineEventCardFooterClassName,
  timelineEventCardSystemLabelClassName,
  timelineBodyClassName,
  timelineHeaderClassName,
  timelineHeaderRailSpacerClassName,
  timelineRailClassName,
  timelineRailLineClassName,
  timelineRootClassName,
  timelineTimeMarkerAlignEndClassName,
  timelineTimeMarkerAlignStartClassName,
  timelineTimeMarkerClassName,
  timelineTimeMarkerDotClassName,
  timelineTrackClassName,
} from "./timeline.styles";
import type {
  TimelineBodyProps,
  TimelineColumnHeaderProps,
  TimelineColumnId,
  TimelineColumnProps,
  TimelineEntryProps,
  TimelineEventCardContentProps,
  TimelineEventCardFooterProps,
  TimelineEventCardHeaderProps,
  TimelineEventCardProps,
  TimelineHeaderProps,
  TimelineProps,
  TimelineTimeMarkerProps,
} from "./timeline.types";

const timelineColumnTitles: Record<TimelineColumnId, string> = {
  "system-events": "System Events",
  notes: "Notes",
  communications: "Communications",
};

const timelineColumnClassNames: Record<TimelineColumnId, string> = {
  "system-events": timelineColumnSystemEventsClassName,
  notes: timelineColumnNotesClassName,
  communications: timelineColumnCommunicationsClassName,
};

const timelineMarkerAlignByColumn: Record<TimelineColumnId, "start" | "end"> = {
  "system-events": "start",
  notes: "end",
  communications: "end",
};

const timelineMarkerClassNames: Record<TimelineColumnId, string> = {
  "system-events": timelineEntryMarkerSystemEventsClassName,
  notes: timelineEntryMarkerNotesClassName,
  communications: timelineEntryMarkerCommunicationsClassName,
};

function isTimelineColumn(
  child: ReactNode
): child is ReactElement<TimelineColumnProps> {
  return (
    isValidElement(child) &&
    typeof child.type !== "string" &&
    (child.type as { displayName?: string }).displayName === "TimelineColumn"
  );
}

function Timeline({ className, ...props }: TimelineProps) {
  return (
    <div
      data-slot="timeline"
      className={cn(timelineRootClassName, className)}
      {...props}
    />
  );
}

function TimelineHeader({ className, children, ...props }: TimelineHeaderProps) {
  const headers = Children.toArray(children);

  return (
    <div
      data-slot="timeline-header"
      className={cn(timelineHeaderClassName, className)}
      {...props}
    >
      {headers[0]}
      <div className={timelineHeaderRailSpacerClassName} aria-hidden />
      {headers[1]}
      <div className={timelineHeaderRailSpacerClassName} aria-hidden />
      {headers[2]}
    </div>
  );
}

function TimelineColumnHeader({
  className,
  column,
  children,
  ...props
}: TimelineColumnHeaderProps) {
  return (
    <div
      data-slot="timeline-column-header"
      data-column={column}
      className={cn(timelineColumnHeaderClassName, className)}
      {...props}
    >
      {children ?? timelineColumnTitles[column]}
    </div>
  );
}

function TimelineRail() {
  return (
    <div data-slot="timeline-rail" className={timelineRailClassName} aria-hidden>
      <div className={timelineRailLineClassName} />
    </div>
  );
}

function TimelineBody({
  className,
  maxHeight = "24rem",
  children,
  ...props
}: TimelineBodyProps) {
  const columns = Children.toArray(children).filter(isTimelineColumn);

  return (
    <div
      data-slot="timeline-body"
      className={cn(timelineBodyClassName, className)}
      style={{ height: maxHeight }}
      {...props}
    >
      <ScrollArea className="h-full">
        <div data-slot="timeline-track" className={timelineTrackClassName}>
          {columns[0]}
          <TimelineRail />
          {columns[1]}
          <TimelineRail />
          {columns[2]}
        </div>
      </ScrollArea>
    </div>
  );
}

function TimelineColumn({
  className,
  column,
  children,
  ...props
}: TimelineColumnProps) {
  return (
    <div
      data-slot="timeline-column"
      data-column={column}
      className={cn(
        timelineColumnClassName,
        timelineColumnClassNames[column],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

TimelineColumn.displayName = "TimelineColumn";

function TimelineTimeMarker({
  className,
  time,
  align = "start",
  ...props
}: TimelineTimeMarkerProps) {
  return (
    <div
      data-slot="timeline-time-marker"
      className={cn(
        timelineTimeMarkerClassName,
        align === "end"
          ? timelineTimeMarkerAlignEndClassName
          : timelineTimeMarkerAlignStartClassName,
        className
      )}
      {...props}
    >
      {align === "end" ? (
        <>
          <span>{time}</span>
          <span className={timelineTimeMarkerDotClassName} aria-hidden />
        </>
      ) : (
        <>
          <span className={timelineTimeMarkerDotClassName} aria-hidden />
          <span>{time}</span>
        </>
      )}
    </div>
  );
}

function TimelineEntry({
  className,
  column,
  time,
  children,
  ...props
}: TimelineEntryProps) {
  const markerAlign = timelineMarkerAlignByColumn[column];

  if (column === "system-events") {
    return (
      <div
        data-slot="timeline-entry"
        data-column={column}
        className={cn(timelineEntryClassName, className)}
        {...props}
      >
        <div className={timelineEntryCardClassName}>{children}</div>
        {time ? (
          <div
            className={cn(
              timelineEntryMarkerClassName,
              timelineMarkerClassNames[column]
            )}
          >
            <TimelineTimeMarker time={time} align={markerAlign} />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div
      data-slot="timeline-entry"
      data-column={column}
      className={cn(timelineEntryClassName, className)}
      {...props}
    >
      {time ? (
        <div
          className={cn(
            timelineEntryMarkerClassName,
            timelineMarkerClassNames[column]
          )}
        >
          <TimelineTimeMarker time={time} align={markerAlign} />
        </div>
      ) : null}
      <div className={timelineEntryCardClassName}>{children}</div>
    </div>
  );
}

function resolveHeaderIcon(
  icon: ReactNode | undefined,
  systemLabel: ReactNode | undefined
) {
  if (!systemLabel && !icon) {
    return undefined;
  }

  return (
    <>
      {systemLabel ? (
        typeof systemLabel === "string" ? (
          <TimelineEventCardSystemBadge>{systemLabel}</TimelineEventCardSystemBadge>
        ) : (
          systemLabel
        )
      ) : null}
      {icon}
    </>
  );
}

/**
 * @deprecated Prefer `TimelineEntry` with `TimelineCard`.
 */
function TimelineEventCard({
  className,
  title,
  author,
  description,
  icon,
  systemLabel,
  stages,
  tags,
  priority,
  tone,
  time,
  column = "notes",
  children,
  ...props
}: TimelineEventCardProps) {
  const resolvedPriority =
    priority ??
    (typeof systemLabel === "string" && systemLabel.toLowerCase() === "high"
      ? "High"
      : undefined);

  const resolvedSystemLabel =
    typeof systemLabel === "string" && systemLabel.toLowerCase() === "high"
      ? undefined
      : systemLabel;

  const card = (
    <TimelineCard
      data-deprecated="timeline-event-card"
      title={title}
      author={author}
      description={description}
      icon={resolveHeaderIcon(icon, resolvedSystemLabel)}
      priority={resolvedPriority}
      tags={tags}
      tone={tone}
      {...props}
    >
      {stages?.length ? (
        <div className={timelineEventCardFooterClassName}>
          {stages.map((stage) => (
            <StageFlowBadge
              key={stage.label}
              variant={stage.variant ?? "success"}
            >
              {stage.label}
            </StageFlowBadge>
          ))}
        </div>
      ) : null}
      {children}
    </TimelineCard>
  );

  if (!time) {
    return (
      <div
        data-slot="timeline-event-card"
        className={cn("w-full", className)}
      >
        {card}
      </div>
    );
  }

  return (
    <TimelineEntry column={column} time={time} className={className}>
      {card}
    </TimelineEntry>
  );
}

/** @deprecated Use `TimelineCardHeader` from `@/components/timeline-card`. */
const TimelineEventCardHeader = TimelineCardHeader;

/** @deprecated Use `TimelineCardContent` from `@/components/timeline-card`. */
const TimelineEventCardContent = TimelineCardContent;

function TimelineEventCardFooter({
  className,
  ...props
}: TimelineEventCardFooterProps) {
  return (
    <div
      data-slot="timeline-event-card-footer"
      className={cn(timelineEventCardFooterClassName, className)}
      {...props}
    />
  );
}

function TimelineEventCardSystemBadge({
  className,
  ...props
}: ComponentProps<typeof Badge>) {
  return (
    <Badge
      variant="secondary"
      size="sm"
      className={cn(timelineEventCardSystemLabelClassName, className)}
      {...props}
    />
  );
}

export {
  Timeline,
  TimelineBody,
  TimelineColumn,
  TimelineColumnHeader,
  TimelineEntry,
  TimelineEventCard,
  TimelineEventCardContent,
  TimelineEventCardFooter,
  TimelineEventCardHeader,
  TimelineEventCardSystemBadge,
  TimelineHeader,
  TimelineRail,
  TimelineTimeMarker,
};

export {
  TimelineCard,
  TimelineCardContent,
  TimelineCardHeader,
  TimelineCardPriority,
  TimelineCardTag,
} from "@/components/timeline-card";
