import { cva } from "class-variance-authority";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";

const disabledStyles =
  "disabled:pointer-events-none disabled:cursor-not-allowed disabled:border-[var(--color-disabled-border)] disabled:bg-[var(--color-disabled-background)] disabled:text-[var(--color-disabled-text)] disabled:shadow-none";

export const selectTriggerVariants = cva(
  [
    "group/select-trigger flex items-center justify-between gap-[var(--space-inline-sm)] border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] outline-none select-none whitespace-nowrap",
    "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
    "transition-[var(--motion-hover)]",
    focusRing,
    disabledStyles,
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
    "data-placeholder:text-[var(--color-text-muted)]",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
    "*:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:min-w-0 *:data-[slot=select-value]:flex-1 *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-[var(--space-inline-sm)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-[var(--spacing-28)] rounded-[var(--radius-md)] px-[var(--space-inline-sm)]",
        md: "h-[var(--spacing-32)] rounded-[var(--radius-input)] px-[var(--space-inline-sm)]",
        lg: "h-[var(--spacing-36)] rounded-[var(--radius-input)] px-[var(--space-inline-md)]",
        xl: "h-[var(--spacing-48)] rounded-[var(--radius-input)] px-[var(--space-inline-md)]",
        xxl: "h-[var(--spacing-56)] rounded-[var(--radius-input)] px-[var(--space-inline-lg)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const selectContentClassName = [
  "relative isolate z-[var(--z-dropdown)] max-h-[var(--available-height,16rem)] w-[var(--anchor-width)] min-w-[9rem] overflow-x-hidden overflow-y-auto",
  "rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)] text-[var(--color-text-primary)] shadow-[var(--shadow-md)]",
  "origin-[var(--transform-origin)] transition-[var(--motion-dropdown)]",
  "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
  "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
  "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
  "data-[align-trigger=true]:animate-none",
].join(" ");

export const selectItemClassName = [
  "relative flex w-full cursor-default items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-md)] py-[var(--space-stack-xs)] pr-[var(--spacing-32)] pl-[var(--space-inline-sm)] outline-none select-none",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "data-highlighted:bg-[var(--color-surface-hover)] data-highlighted:text-[var(--color-text-primary)]",
  "data-selected:font-medium",
  "data-disabled:pointer-events-none data-disabled:text-[var(--color-disabled-text)]",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ");

export const selectLabelClassName =
  "px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]";

export const selectSeparatorClassName =
  "pointer-events-none -mx-[var(--space-inline-xs)] my-[var(--space-stack-xs)] h-px bg-[var(--color-border-subtle)]";

export const selectScrollButtonClassName =
  "z-10 flex w-full cursor-default items-center justify-center bg-[var(--color-surface-floating)] py-[var(--space-stack-xs)] [&_svg:not([class*='size-'])]:size-4";

export const selectGroupClassName = "scroll-my-1 p-[var(--space-inline-xs)]";

export const selectValueClassName = "flex min-w-0 flex-1 text-left";

export const selectIconClassName =
  "pointer-events-none text-[var(--color-text-muted)]";

export const selectItemIndicatorClassName =
  "pointer-events-none absolute right-[var(--space-inline-sm)] flex size-4 items-center justify-center";
