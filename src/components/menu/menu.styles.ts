import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { inverseInteractiveDisabledClassName } from "@/lib/disabled-styles";

export const menuExpandedWidth = "12.5rem";

export const menuClassName = [
  componentFontFamilyClassName, "group/menu sticky top-0 z-[var(--z-sticky)] flex h-full min-h-0 self-stretch shrink-0 flex-col overflow-hidden",
  "w-[var(--menu-width,var(--spacing-64))]",
  "bg-[var(--color-action-primary)] py-[var(--space-stack-md)]",
  "gap-[var(--space-stack-md)]",
  "transition-[width] duration-200 ease-out",
  "data-expanded:items-stretch data-expanded:px-[var(--space-inline-xs)]",
  "items-center",
].join(" ");

export const menuLogoClassName = [
  componentFontFamilyClassName, "flex shrink-0 items-center justify-center p-[var(--space-inline-xs)]",
  "group-data-expanded/menu:self-start group-data-expanded/menu:px-[var(--space-inline-sm)]",
].join(" ");

export const menuNavClassName = [
  componentFontFamilyClassName, "flex w-full min-h-0 flex-1 flex-col gap-[var(--space-inline-xs)] overflow-y-auto",
  "items-center group-data-expanded/menu:items-stretch",
].join(" ");

export const menuNavItemClassName = [
  componentFontFamilyClassName, "inline-flex shrink-0 items-center rounded-[var(--radius-md)]",
  "text-[var(--color-action-primary-text)] transition-[var(--motion-hover)]",
  "hover:bg-[var(--color-action-primary-hover)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-action-primary-text)]/40",
  "data-active:bg-[var(--color-action-primary-active)] data-active:shadow-sm",
  inverseInteractiveDisabledClassName,
  "size-[var(--spacing-40)] justify-center",
  "group-data-expanded/menu:h-[var(--spacing-40)] group-data-expanded/menu:w-full",
  "group-data-expanded/menu:justify-start group-data-expanded/menu:gap-[var(--space-inline-sm)]",
  "group-data-expanded/menu:px-[var(--space-inline-sm)]",
].join(" ");

export const menuNavItemLabelClassName = [
  componentFontFamilyClassName, "hidden truncate text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)]",
  "group-data-expanded/menu:inline",
].join(" ");

export const menuNavGroupClassName = [
  componentFontFamilyClassName,
  "flex w-full flex-col gap-[var(--space-inline-xs)]",
  "items-center group-data-expanded/menu:items-stretch",
].join(" ");

export const menuNavGroupTriggerClassName = [
  menuNavItemClassName,
  "cursor-pointer border-0 bg-transparent",
].join(" ");

export const menuNavChildListClassName = [
  componentFontFamilyClassName,
  "m-0 flex w-full list-none flex-col gap-[var(--space-inline-xs)] p-0",
].join(" ");

export const menuNavChildClassName = [
  componentFontFamilyClassName,
  "inline-flex h-[var(--spacing-40)] w-full shrink-0 items-center truncate",
  "rounded-[var(--radius-md)] pl-[var(--spacing-28)] pr-[var(--space-inline-sm)]",
  "text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)]",
  "text-[var(--color-action-primary-text)] transition-[var(--motion-hover)]",
  "hover:bg-[var(--color-action-primary-hover)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)]",
  "focus-visible:ring-[var(--color-action-primary-text)]/40",
  "data-active:bg-[var(--color-action-primary-active)] data-active:shadow-sm",
  inverseInteractiveDisabledClassName,
].join(" ");

export const menuToggleClassName = [
  componentFontFamilyClassName, menuNavItemClassName,
  "cursor-pointer border-0 bg-transparent",
].join(" ");

export const menuFooterClassName = [
  componentFontFamilyClassName, "mt-auto flex w-full shrink-0 flex-col bg-[var(--color-action-primary)]",
  "items-center group-data-expanded/menu:items-stretch",
].join(" ");
