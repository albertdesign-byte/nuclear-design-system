import { cva } from "class-variance-authority";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)] focus-visible:outline-none";

export const tabsRootClassName =
  "group/tabs flex gap-[var(--space-inline-sm)] data-horizontal:flex-col";

export const tabsListVariants = cva(
  [
    "group/tabs-list inline-flex w-fit items-center justify-center rounded-[var(--radius-md)] p-[3px]",
    "text-[var(--color-text-secondary)]",
    "group-data-horizontal/tabs:h-8 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col",
    "data-[variant=line]:rounded-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "gap-[var(--spacing-4)] bg-[var(--color-surface-muted)] p-[var(--spacing-4)]",
          "group-data-horizontal/tabs:h-auto group-data-horizontal/tabs:min-h-[var(--spacing-36)]",
        ].join(" "),
        line: "gap-[var(--space-inline-xs)] bg-transparent",
        folder: [
          "inline-flex w-fit items-stretch gap-0 rounded-none p-0",
          "border-b border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)]",
          "group-data-horizontal/tabs:h-auto",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const tabsTriggerClassName = [
  "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center",
  "gap-[var(--space-inline-sm)] rounded-[var(--radius-sm)] border border-transparent",
  "px-[var(--space-inline-sm)] py-[var(--space-inline-xs)]",
  "text-[length:var(--text-label-size)] font-medium whitespace-nowrap",
  "text-[var(--color-text-secondary)] transition-[var(--motion-hover)]",
  focusRing,
  "group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start",
  "hover:text-[var(--color-text-primary)]",
  "disabled:pointer-events-none disabled:opacity-50",
  "aria-disabled:pointer-events-none aria-disabled:opacity-50",
  "has-data-[icon=inline-end]:pr-[var(--space-inline-xs)] has-data-[icon=inline-start]:pl-[var(--space-inline-xs)]",
  "group-data-[variant=default]/tabs-list:h-[var(--spacing-28)] group-data-[variant=default]/tabs-list:flex-none group-data-[variant=default]/tabs-list:rounded-[var(--radius-sm)] group-data-[variant=default]/tabs-list:px-[var(--space-inline-md)] group-data-[variant=default]/tabs-list:font-normal group-data-[variant=default]/tabs-list:data-active:bg-[var(--color-surface)] group-data-[variant=default]/tabs-list:data-active:font-semibold group-data-[variant=default]/tabs-list:data-active:text-[var(--color-text-primary)] group-data-[variant=default]/tabs-list:data-active:shadow-[var(--shadow-sm)]",
  "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent group-data-[variant=line]/tabs-list:data-active:shadow-none group-data-[variant=line]/tabs-list:data-active:text-[var(--color-text-primary)]",
  "after:absolute after:bg-[var(--color-text-primary)] after:opacity-0 after:transition-opacity",
  "group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5",
  "group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5",
  "group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
  "group-data-[variant=folder]/tabs-list:h-auto group-data-[variant=folder]/tabs-list:flex-none group-data-[variant=folder]/tabs-list:rounded-none group-data-[variant=folder]/tabs-list:border-0 group-data-[variant=folder]/tabs-list:border-r group-data-[variant=folder]/tabs-list:border-[var(--color-border-subtle)] group-data-[variant=folder]/tabs-list:bg-[var(--color-surface-muted)] group-data-[variant=folder]/tabs-list:text-[var(--color-text-primary)] group-data-[variant=folder]/tabs-list:px-[var(--space-inline-md)] group-data-[variant=folder]/tabs-list:py-[var(--space-stack-sm)] group-data-[variant=folder]/tabs-list:last:border-r-0 group-data-[variant=folder]/tabs-list:hover:text-[var(--color-text-primary)] group-data-[variant=folder]/tabs-list:data-active:relative group-data-[variant=folder]/tabs-list:data-active:z-[1] group-data-[variant=folder]/tabs-list:data-active:-mb-px group-data-[variant=folder]/tabs-list:data-active:border group-data-[variant=folder]/tabs-list:data-active:border-b-[var(--color-surface)] group-data-[variant=folder]/tabs-list:data-active:border-[var(--color-border-subtle)] group-data-[variant=folder]/tabs-list:data-active:bg-[var(--color-surface)] group-data-[variant=folder]/tabs-list:data-active:shadow-none group-data-[variant=folder]/tabs-list:after:hidden",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ");

export const tabsFolderContentClassName = [
  "rounded-none border border-t-0 border-[var(--color-border-subtle)]",
  "bg-[var(--color-surface)] p-[var(--space-page)]",
].join(" ");

/** Spacing for content below segmented (default) tabs. */
export const tabsSegmentedContentClassName =
  "mt-[var(--space-stack-sm)] outline-none";

export const tabsContentClassName =
  "flex-1 text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] outline-none";
