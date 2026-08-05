export const timelineRootClassName = [
  "flex w-full flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-border-subtle)]",
  "bg-[var(--color-surface)] ring-1 ring-[var(--color-border-subtle)]",
  "[--timeline-rail-width:var(--spacing-48)]",
].join(" ");

export const timelineHeaderClassName = [
  "grid border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)]/60",
  "grid-cols-[minmax(0,1fr)_var(--timeline-rail-width)_minmax(0,1fr)_var(--timeline-rail-width)_minmax(0,1fr)]",
].join(" ");

export const timelineHeaderRailSpacerClassName = "hidden sm:block";

export const timelineColumnHeaderClassName = [
  "px-[var(--space-inline-md)] py-[var(--space-stack-sm)] text-center",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] font-medium",
  "text-[var(--color-text-secondary)]",
].join(" ");

export const timelineBodyClassName = "relative min-h-[12rem]";

export const timelineTrackClassName = [
  "flex min-h-full flex-col sm:flex-row",
].join(" ");

export const timelineColumnClassName = [
  "relative flex min-w-0 flex-1 flex-col gap-[var(--space-stack-lg)]",
  "p-[var(--space-inline-md)]",
].join(" ");

export const timelineColumnSystemEventsClassName = "sm:pr-[var(--space-inline-sm)]";

export const timelineColumnNotesClassName =
  "sm:px-[var(--space-inline-sm)]";

export const timelineColumnCommunicationsClassName =
  "sm:pl-[var(--space-inline-sm)]";

export const timelineRailClassName = [
  "relative hidden shrink-0 sm:block",
  "w-[var(--timeline-rail-width)]",
].join(" ");

export const timelineRailLineClassName = [
  "absolute inset-y-0 left-1/2 w-px -translate-x-1/2",
  "bg-[var(--color-border-strong)]",
].join(" ");

export const timelineEntryClassName = "flex w-full items-start";

export const timelineEntryCardClassName = "min-w-0 flex-1";

export const timelineEntryMarkerClassName = [
  "flex w-[var(--timeline-rail-width)] shrink-0 items-start pt-[var(--space-stack-xs)]",
].join(" ");

export const timelineEntryMarkerSystemEventsClassName = "justify-start sm:-mr-[var(--timeline-rail-width)]";

export const timelineEntryMarkerNotesClassName =
  "justify-end sm:-ml-[var(--timeline-rail-width)]";

export const timelineEntryMarkerCommunicationsClassName =
  "justify-end sm:-ml-[var(--timeline-rail-width)]";

export const timelineTimeMarkerClassName = [
  "flex items-center gap-[var(--space-inline-xs)] whitespace-nowrap",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]",
].join(" ");

export const timelineTimeMarkerAlignStartClassName = "justify-start";
export const timelineTimeMarkerAlignEndClassName = "justify-end";

export const timelineTimeMarkerDotClassName =
  "size-[0.5625rem] shrink-0 rounded-full bg-[var(--color-border-strong)]";

export const timelineEventCardSystemLabelClassName = [
  "inline-flex h-5 items-center rounded-[var(--radius-sm)] bg-[var(--color-info-background)] px-[var(--space-inline-xs)]",
  "text-[length:var(--text-caption-size)] font-medium text-[var(--color-info-text)]",
].join(" ");

export const timelineEventCardFooterClassName = [
  "flex flex-wrap gap-[var(--space-inline-xs)]",
].join(" ");
