import { cva } from "class-variance-authority";

export const cardVariants = cva(
  [
    "group/card flex flex-col overflow-hidden rounded-[var(--radius-card)] bg-[var(--color-surface)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]",
    "ring-1 ring-[var(--color-border-subtle)]",
    "gap-[var(--card-spacing)] py-[var(--card-spacing)]",
    "has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0",
    "*:[img:first-child]:rounded-t-[var(--radius-card)] *:[img:last-child]:rounded-b-[var(--radius-card)]",
  ].join(" "),
  {
    variants: {
      size: {
        default: "[--card-spacing:var(--space-card)] has-data-[slot=card-footer]:pb-0",
        sm: "[--card-spacing:var(--space-inline-md)] has-data-[slot=card-footer]:pb-0",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

export const cardHeaderClassName =
  "group/card-header @container/card-header grid auto-rows-min items-start gap-[var(--space-stack-xs)] rounded-t-[var(--radius-card)] px-[var(--card-spacing)] has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-[var(--card-spacing)]";

export const cardTitleClassName =
  "font-heading text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)] text-[var(--color-text-primary)] group-data-[size=sm]/card:text-[length:var(--text-body-small-size)] group-data-[size=sm]/card:leading-[var(--text-body-small-line-height)]";

export const cardDescriptionClassName =
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]";

export const cardActionClassName =
  "col-start-2 row-span-2 row-start-1 self-start justify-self-end";

export const cardContentClassName = "px-[var(--card-spacing)]";

export const cardFooterClassName =
  "flex items-center rounded-b-[var(--radius-card)] border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)]/50 p-[var(--card-spacing)]";
