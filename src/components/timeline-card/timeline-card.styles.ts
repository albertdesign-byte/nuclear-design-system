import { cva } from "class-variance-authority";

export const timelineCardClassName = [
  "flex w-full flex-col overflow-hidden rounded-[var(--radius-sm)] border border-[var(--color-border-subtle)]",
  "bg-[var(--color-surface)] text-[var(--color-text-primary)] ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const timelineCardHeaderVariants = cva(
  [
    "flex min-h-[var(--spacing-40)] items-center justify-between gap-[var(--space-inline-sm)]",
    "px-[var(--space-inline-md)] py-[var(--space-stack-sm)]",
  ].join(" "),
  {
    variants: {
      tone: {
        default: "bg-[var(--color-surface-muted)]",
        priority: "bg-[var(--color-timeline-card-header-priority)]",
      },
    },
    defaultVariants: {
      tone: "default",
    },
  }
);

export const timelineCardHeaderMainClassName =
  "flex min-w-0 flex-1 items-center gap-[var(--space-inline-sm)]";

export const timelineCardPriorityClassName = [
  "inline-flex shrink-0 items-center rounded-[var(--radius-full)] border border-[var(--color-error-border)]",
  "bg-[var(--color-timeline-card-priority-badge)] px-[var(--space-inline-sm)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "font-normal text-[var(--color-error-text)]",
].join(" ");

export const timelineCardIconClassName =
  "flex size-4 shrink-0 items-center justify-center text-[var(--color-text-secondary)] [&_svg]:size-4";

export const timelineCardIconPriorityClassName =
  "text-[var(--color-error-foreground)]";

export const timelineCardTitleClassName = [
  "truncate text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "font-semibold text-[var(--color-text-secondary)]",
].join(" ");

export const timelineCardTitlePriorityClassName =
  "text-[var(--color-error-foreground)]";

export const timelineCardAuthorClassName = [
  "max-w-[9.25rem] shrink-0 truncate text-right",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)]",
  "text-[var(--color-text-muted)]",
].join(" ");

export const timelineCardContentClassName = [
  "flex flex-col gap-[var(--space-stack-sm)] p-[var(--space-inline-md)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-line-height)]",
  "text-[var(--color-text-primary)]",
].join(" ");

export const timelineCardDescriptionClassName =
  "text-[var(--color-text-primary)] [word-break:break-word]";

export const timelineCardTagsClassName =
  "flex flex-col items-start gap-[var(--space-stack-sm)]";

export const timelineCardTagClassName = [
  "inline-flex max-w-full items-center gap-[var(--space-inline-xs)] rounded-[var(--radius-full)]",
  "border border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)]",
  "px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)]",
  "font-normal text-[var(--color-text-primary)] transition-[var(--motion-hover)]",
  "hover:bg-[var(--color-surface-hover)] focus-visible:outline-none",
  "focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
  "[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-[var(--color-text-secondary)]",
].join(" ");

export const timelineCardTagLabelClassName = "min-w-0 truncate";
