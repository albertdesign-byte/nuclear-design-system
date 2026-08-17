import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { inverseInteractiveDisabledClassName } from "@/lib/disabled-styles";

export const appSidebarExpandedWidth = "12.5rem";

export const appSidebarClassName = [
  componentFontFamilyClassName, "group/app-sidebar flex min-h-0 self-stretch shrink-0 flex-col",
  "w-[var(--app-sidebar-width,var(--spacing-64))]",
  "bg-[var(--color-action-primary)] py-[var(--space-stack-md)]",
  "gap-[var(--space-stack-md)]",
  "transition-[width] duration-200 ease-out",
  "data-expanded:items-stretch data-expanded:px-[var(--space-inline-xs)]",
  "items-center",
].join(" ");

export const appSidebarLogoClassName = [
  componentFontFamilyClassName, "flex shrink-0 items-center justify-center p-[var(--space-inline-xs)]",
  "group-data-expanded/app-sidebar:self-start group-data-expanded/app-sidebar:px-[var(--space-inline-sm)]",
].join(" ");

export const appSidebarNavClassName = [
  componentFontFamilyClassName, "flex w-full min-h-0 flex-1 flex-col gap-[var(--space-inline-xs)] overflow-y-auto",
  "items-center group-data-expanded/app-sidebar:items-stretch",
].join(" ");

export const appSidebarNavItemClassName = [
  componentFontFamilyClassName, "inline-flex shrink-0 items-center rounded-[var(--radius-md)]",
  "text-[var(--color-action-primary-text)] transition-[var(--motion-hover)]",
  "hover:bg-[var(--color-action-primary-hover)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-action-primary-text)]/40",
  "data-active:bg-[var(--color-action-primary-active)] data-active:shadow-sm",
  inverseInteractiveDisabledClassName,
  "size-[var(--spacing-40)] justify-center",
  "group-data-expanded/app-sidebar:h-[var(--spacing-40)] group-data-expanded/app-sidebar:w-full",
  "group-data-expanded/app-sidebar:justify-start group-data-expanded/app-sidebar:gap-[var(--space-inline-sm)]",
  "group-data-expanded/app-sidebar:px-[var(--space-inline-sm)]",
].join(" ");

export const appSidebarNavItemLabelClassName = [
  componentFontFamilyClassName, "hidden truncate text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)]",
  "group-data-expanded/app-sidebar:inline",
].join(" ");

export const appSidebarToggleClassName = [
  componentFontFamilyClassName, appSidebarNavItemClassName,
  "cursor-pointer border-0 bg-transparent",
].join(" ");

export const appSidebarFooterClassName = [
  componentFontFamilyClassName, "mt-auto flex w-full shrink-0 flex-col",
  "items-center group-data-expanded/app-sidebar:items-stretch",
].join(" ");
