import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { menuItemDisabledClassName } from "@/lib/disabled-styles";

export const dropdownMenuPositionerClassName = "isolate z-[var(--z-dropdown)] outline-none";

export const dropdownMenuContentClassName = [
  componentFontFamilyClassName, "pointer-events-auto z-[var(--z-dropdown)] max-h-[var(--available-height,16rem)] w-[var(--anchor-width)] min-w-32",
  "origin-[var(--transform-origin)] overflow-x-hidden overflow-y-auto rounded-[var(--radius-lg)]",
  "border border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)] p-[var(--space-inline-xs)]",
  "text-[var(--color-text-primary)] shadow-[var(--shadow-md)] ring-1 ring-[var(--color-border-subtle)]",
  "duration-[var(--motion-moderate)] ease-[var(--motion-ease-out)] outline-none",
  "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2",
  "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  "data-open:animate-in data-open:fade-in-0",
  "data-closed:animate-out data-closed:fade-out-0",
].join(" ");

export const dropdownMenuSubContentClassName = [
  componentFontFamilyClassName, "pointer-events-auto w-auto min-w-[6rem] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]",
  "bg-[var(--color-surface-floating)] p-[var(--space-inline-xs)] text-[var(--color-text-primary)]",
  "shadow-[var(--shadow-lg)] ring-1 ring-[var(--color-border-subtle)]",
  "duration-[var(--motion-moderate)] ease-[var(--motion-ease-out)]",
  "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  "data-open:animate-in data-open:fade-in-0",
  "data-closed:animate-out data-closed:fade-out-0",
].join(" ");

export const dropdownMenuLabelClassName = [
  componentFontFamilyClassName, "px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] font-medium text-[var(--color-text-muted)]",
  "data-inset:pl-[var(--spacing-28)]",
].join(" ");

export const dropdownMenuItemClassName = [
  componentFontFamilyClassName, "group/dropdown-menu-item relative flex cursor-default items-center gap-[var(--space-inline-sm)]",
  "rounded-[var(--radius-md)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] outline-hidden select-none",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "data-highlighted:bg-[var(--color-surface-hover)] data-highlighted:text-[var(--color-text-primary)]",
  "not-data-[variant=danger]:data-highlighted:**:text-[var(--color-text-primary)]",
  "data-inset:pl-[var(--spacing-28)] data-[variant=danger]:text-[var(--color-error-text)]",
  "data-[variant=danger]:data-highlighted:bg-[var(--color-error-background)] data-[variant=danger]:data-highlighted:text-[var(--color-error-text)]",
  menuItemDisabledClassName,
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  "data-[variant=danger]:*:[svg]:text-[var(--color-error-text)]",
].join(" ");

export const dropdownMenuSubTriggerClassName = [
  componentFontFamilyClassName, "flex cursor-default items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-md)]",
  "px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] outline-hidden select-none",
  "data-highlighted:bg-[var(--color-surface-hover)] data-highlighted:text-[var(--color-text-primary)]",
  "data-inset:pl-[var(--spacing-28)] data-popup-open:bg-[var(--color-surface-hover)] data-popup-open:text-[var(--color-text-primary)]",
  "data-open:bg-[var(--color-surface-hover)] data-open:text-[var(--color-text-primary)]",
  menuItemDisabledClassName,
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ");

export const dropdownMenuCheckboxItemClassName = [
  componentFontFamilyClassName, "relative flex cursor-default items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-md)]",
  "py-[var(--space-stack-xs)] pr-[var(--spacing-32)] pl-[var(--space-inline-sm)] outline-hidden select-none",
  "text-[length:var(--text-body-small-size)] data-highlighted:bg-[var(--color-surface-hover)] data-highlighted:text-[var(--color-text-primary)]",
  "data-highlighted:**:text-[var(--color-text-primary)] data-inset:pl-[var(--spacing-28)]",
  menuItemDisabledClassName,
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ");

export const dropdownMenuItemDescriptionClassName = [
  componentFontFamilyClassName,
  "block text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-muted)]",
  "group-data-[highlighted]/dropdown-menu-item:text-[var(--color-text-secondary)]",
  "group-data-[variant=danger]/dropdown-menu-item:text-[var(--color-error-text)]",
].join(" ");

export const dropdownMenuSeparatorClassName =
  "-mx-[var(--space-inline-xs)] my-[var(--space-stack-xs)] h-px bg-[var(--color-border)]";

export const dropdownMenuShortcutClassName = [
  componentFontFamilyClassName, "ml-auto text-[length:var(--text-caption-size)] tracking-widest text-[var(--color-text-muted)]",
  "group-data-[highlighted]/dropdown-menu-item:text-[var(--color-text-primary)]",
].join(" ");
