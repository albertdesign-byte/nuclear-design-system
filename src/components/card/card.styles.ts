import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const cardVariants = cva(
  [
    componentFontFamilyClassName, "group/card @container/card flex min-w-0 flex-col rounded-[var(--radius-card)] bg-[var(--color-surface)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]",
    "ring-1 ring-[var(--color-border-subtle)]",
    "gap-[var(--card-spacing)] py-[var(--card-spacing)]",
    "has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 has-[>[data-slot=card-media]:first-child]:pt-0",
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
  "group/card-header grid min-w-0 auto-rows-min items-start gap-[var(--space-stack-xs)] rounded-t-[var(--radius-card)] px-[var(--card-spacing)] has-data-[slot=card-action]:grid-cols-[minmax(0,1fr)_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] @max-[20rem]/card:has-data-[slot=card-action]:grid-cols-1 [.border-b]:pb-[var(--card-spacing)]";

export const cardTitleClassName =
  "min-w-0 [overflow-wrap:anywhere] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)] text-[var(--color-text-primary)] group-data-[size=sm]/card:text-[length:var(--text-body-small-size)] group-data-[size=sm]/card:leading-[var(--text-body-small-line-height)]";

export const cardDescriptionClassName =
  "min-w-0 [overflow-wrap:anywhere] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]";

export const cardActionClassName =
  "col-start-2 row-span-2 row-start-1 flex max-w-full shrink-0 flex-wrap items-center justify-end gap-[var(--space-inline-xs)] self-start justify-self-end @max-[20rem]/card:col-start-1 @max-[20rem]/card:row-span-1 @max-[20rem]/card:row-start-auto @max-[20rem]/card:justify-start @max-[20rem]/card:justify-self-start";

export const cardContentClassName =
  "min-w-0 [overflow-wrap:anywhere] px-[var(--card-spacing)]";

export const cardMediaClassName =
  "relative min-w-0 overflow-hidden first:rounded-t-[var(--radius-card)] last:rounded-b-[var(--radius-card)]";

export const cardFooterClassName =
  "flex min-w-0 flex-wrap items-center gap-[var(--space-inline-sm)] rounded-b-[var(--radius-card)] border-t border-[var(--color-border-subtle)] bg-[var(--color-surface-muted)]/50 p-[var(--card-spacing)]";
