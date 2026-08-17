import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { controlDisabledClassName, menuItemDisabledClassName } from "@/lib/disabled-styles";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";


export const selectTriggerVariants = cva(
  [
    componentFontFamilyClassName, "group/select-trigger flex items-center justify-between gap-[var(--space-inline-sm)] border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)] outline-none select-none whitespace-nowrap",
    "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
    "transition-[var(--motion-hover)]",
    focusRing,
    controlDisabledClassName,
    "data-readonly:cursor-default data-readonly:border-[var(--color-border)] data-readonly:bg-[var(--color-surface-muted)] data-readonly:focus-visible:ring-0",
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
  componentFontFamilyClassName, "relative isolate z-[var(--z-dropdown)] max-h-[var(--available-height,16rem)] w-[var(--anchor-width)] min-w-[9rem] overflow-x-hidden overflow-y-auto",
  "rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)] text-[var(--color-text-primary)] shadow-[var(--shadow-md)]",
  "origin-[var(--transform-origin)] transition-[var(--motion-dropdown)]",
  "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
  "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
  "data-[side=bottom]:slide-in-from-top-2 data-[side=top]:slide-in-from-bottom-2",
  "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2",
  "data-[align-trigger=true]:animate-none",
].join(" ");

export const selectItemClassName = [
  componentFontFamilyClassName, "relative flex w-full cursor-default items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-md)] py-[var(--space-stack-xs)] pr-[var(--spacing-32)] pl-[var(--space-inline-sm)] outline-none select-none",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "data-highlighted:bg-[var(--color-surface-hover)] data-highlighted:text-[var(--color-text-primary)]",
  "data-selected:font-medium",
  menuItemDisabledClassName,
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

export const searchableSelectInputGroupClassName = [
  componentFontFamilyClassName,
  "relative flex w-full min-w-0 items-center rounded-[var(--radius-input)] border border-[var(--color-border)] bg-[var(--color-background)]",
  "transition-[var(--motion-hover)]",
  "data-focused:border-[var(--color-focus-ring)] data-focused:ring-[length:var(--focus-ring-width)] data-focused:ring-[var(--color-focus-ring)] data-focused:ring-offset-[length:var(--focus-ring-offset)]",
  "data-invalid:border-[var(--color-error-border)] data-invalid:ring-[length:var(--focus-ring-width)] data-invalid:ring-[var(--color-error-border)]/30",
  "data-disabled:cursor-not-allowed data-disabled:border-[var(--color-disabled-border)] data-disabled:bg-[var(--color-disabled-background)]",
  "data-readonly:cursor-default data-readonly:bg-[var(--color-surface-muted)] data-readonly:ring-0",
].join(" ");

export const searchableSelectSearchIconClassName =
  "pointer-events-none absolute left-[var(--space-inline-sm)] z-[1] size-[var(--icon-sm)] text-[var(--color-text-muted)]";

export const searchableSelectInputClassName = [
  componentFontFamilyClassName,
  "h-[var(--spacing-32)] min-w-0 flex-1 border-0 bg-transparent px-[var(--space-inline-sm)] pl-[calc(var(--space-inline-sm)+var(--icon-sm)+var(--space-inline-xs))] pr-[var(--spacing-32)] outline-none",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]",
  "placeholder:text-[var(--color-text-muted)]",
  "disabled:cursor-not-allowed disabled:text-[var(--color-disabled-text)]",
].join(" ");

export const searchableSelectTriggerClassName = [
  componentFontFamilyClassName,
  "absolute right-[var(--space-inline-xs)] inline-flex size-6 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-muted)]",
  "hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
  "disabled:cursor-not-allowed disabled:text-[var(--color-disabled-text)]",
].join(" ");

export const searchableSelectPositionerClassName =
  "isolate z-[var(--z-dropdown)]";

export const searchableSelectPopupClassName = [
  selectContentClassName,
  "p-[var(--space-inline-xs)]",
].join(" ");

export const searchableSelectEmptyClassName =
  "px-[var(--space-inline-sm)] py-[var(--space-stack-md)] text-center text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]";

export const searchableSelectStatusClassName =
  "sr-only";

export const multiSelectInputGroupClassName = [
  searchableSelectInputGroupClassName,
  "min-h-[var(--spacing-32)] flex-wrap gap-[var(--space-inline-xs)] px-[var(--space-inline-xs)] py-[var(--spacing-2)]",
].join(" ");

export const multiSelectChipsClassName =
  "flex min-w-0 flex-1 flex-wrap items-center gap-[var(--space-inline-xs)]";

export const multiSelectInputClassName = [
  searchableSelectInputClassName,
  "h-6 min-w-[7rem] flex-1 px-[var(--space-inline-xs)] pl-[var(--space-inline-xs)] pr-[var(--spacing-28)]",
].join(" ");

export const multiSelectChipClassName = [
  componentFontFamilyClassName,
  "inline-flex h-6 max-w-full items-center gap-[var(--spacing-2)] rounded-full bg-[var(--color-surface-muted)] px-[var(--space-inline-sm)]",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-primary)]",
  "data-disabled:text-[var(--color-disabled-text)]",
].join(" ");

export const multiSelectChipRemoveClassName =
  "inline-flex size-4 items-center justify-center rounded-full text-[var(--color-text-muted)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)] focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]";
