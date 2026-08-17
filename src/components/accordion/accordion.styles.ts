import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { subtleInteractiveDisabledClassName } from "@/lib/disabled-styles";

export const accordionRootClassName = "flex w-full flex-col gap-[var(--space-stack-xs)]";

export const accordionItemClassName = [
  componentFontFamilyClassName, "overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]",
  "ring-1 ring-[var(--color-border-subtle)]",
].join(" ");

export const accordionHeaderClassName = "flex";

export const accordionTriggerClassName = [
  componentFontFamilyClassName, "flex flex-1 items-center justify-between gap-[var(--space-inline-sm)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)]",
  "text-left text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] font-medium text-[var(--color-text-primary)]",
  "transition-[var(--motion-hover)] outline-none",
  "hover:bg-[var(--color-surface-hover)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-inset",
  subtleInteractiveDisabledClassName,
  "[&[data-panel-open]_svg]:rotate-180",
  "[&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-[var(--color-text-muted)] [&_svg]:transition-transform [&_svg]:duration-[var(--motion-moderate)]",
].join(" ");

export const accordionPanelClassName = [
  componentFontFamilyClassName, "overflow-hidden text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]",
  "data-open:animate-accordion-down data-closed:animate-accordion-up",
].join(" ");

export const accordionPanelInnerClassName =
  "px-[var(--space-inline-md)] pb-[var(--space-inline-md)] pt-0";
