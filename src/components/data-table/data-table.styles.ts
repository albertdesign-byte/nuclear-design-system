import {
  dashboardPanelClassName,
  dashboardPanelContentClassName,
  dashboardPanelHeaderClassName,
} from "@/components/dashboard-panel/dashboard-panel";

export const dataTablePanelClassName = dashboardPanelClassName;

export const dataTablePanelHeaderClassName = dashboardPanelHeaderClassName;

export const dataTablePanelContentClassName = dashboardPanelContentClassName;

export const dataTablePanelToolbarClassName = [
  "flex flex-wrap items-center justify-between gap-[var(--space-stack-md)]",
  "border-b border-[var(--color-border-subtle)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)]",
].join(" ");

export const dataTableContainerClassName = "relative w-full overflow-x-auto";

export const dataTableClassName = [
  "w-full table-fixed caption-bottom",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
].join(" ");

export const dataTableHeadCellClassName = [
  "relative h-10 max-w-0 overflow-hidden p-0 align-bottom",
  "border-r border-[var(--color-border)] last:border-r-0",
  "bg-[var(--color-surface-muted)]",
].join(" ");

export const dataTableHeadContentClassName = [
  "flex h-10 min-w-0 items-center gap-[var(--space-inline-xs)]",
  "px-[var(--space-table)] text-left font-medium text-[var(--color-text-primary)]",
].join(" ");

export const dataTableHeadLabelClassName = "min-w-0 flex-1 truncate";

export const dataTableHeadMenuTriggerClassName = [
  "inline-flex size-6 shrink-0 items-center justify-center rounded-[var(--radius-sm)]",
  "text-[var(--color-text-muted)] transition-[var(--motion-hover)]",
  "hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
  "data-open:bg-[var(--color-surface-hover)] data-open:text-[var(--color-text-primary)]",
].join(" ");

export const dataTableResizeHandleClassName = [
  "absolute top-0 right-0 z-10 h-full w-3 translate-x-1/2",
  "cursor-col-resize touch-none select-none",
  "after:absolute after:inset-y-1 after:left-1/2 after:w-0.5 after:-translate-x-1/2 after:rounded-full",
  "after:bg-transparent hover:after:bg-[var(--color-border)]",
  "active:after:bg-[var(--color-action-primary)]",
].join(" ");

export const dataTableCellClassName = [
  "max-w-0 overflow-hidden text-ellipsis whitespace-nowrap",
].join(" ");

export const dataTableCellContentClassName = "block min-w-0 truncate";

export const dataTableMenuContentClassName = "min-w-[10.5rem] w-auto";

export const dataTableOperationalHeadCellClassName = [
  "bg-[var(--color-action-primary)]",
  "border-r border-[var(--color-action-primary-text)]/15 last:border-r-0",
].join(" ");

export const dataTableOperationalHeadContentClassName =
  "text-[var(--color-action-primary-text)]";

export const dataTableOperationalHeadMenuTriggerClassName = [
  "text-[var(--color-action-primary-text)]/75",
  "hover:bg-[var(--color-action-primary-hover)] hover:text-[var(--color-action-primary-text)]",
  "data-open:bg-[var(--color-action-primary-hover)] data-open:text-[var(--color-action-primary-text)]",
].join(" ");

export const dataTableOperationalBodyClassName = [
  "[&_[data-slot=table-row]:nth-child(odd)]:bg-[var(--color-surface)]",
  "[&_[data-slot=table-row]:nth-child(even)]:bg-[var(--color-info-background)]",
  "[&_[data-slot=table-row]:hover]:bg-[var(--color-surface-hover)]",
].join(" ");

export const dataTableOperationalResizeHandleClassName =
  "hover:after:bg-[var(--color-action-primary-text)]/30 active:after:bg-[var(--color-action-primary-text)]/50";
