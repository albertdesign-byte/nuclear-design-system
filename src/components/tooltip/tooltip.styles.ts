import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const tooltipPositionerClassName = "isolate z-[var(--z-tooltip)]";

export const tooltipContentClassName = [
  componentFontFamilyClassName, "relative z-[var(--z-tooltip)] inline-flex w-fit max-w-xs origin-(--transform-origin) items-center gap-[var(--space-inline-xs)]",
  "rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]",
  "bg-[var(--color-surface-floating)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-primary)]",
  "shadow-[var(--shadow-md)] transition-[var(--motion-dropdown)]",
  "has-data-[slot=kbd]:pr-[var(--space-inline-xs)]",
  "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2",
  "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  "**:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-[var(--z-tooltip)] **:data-[slot=kbd]:rounded-[var(--radius-sm)]",
  "data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95",
  "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
  "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
].join(" ");

export const tooltipArrowClassName = [
  componentFontFamilyClassName,
  "relative z-[var(--z-tooltip)] block h-[var(--spacing-6)] w-[var(--spacing-12)] overflow-clip",
  "data-[side=bottom]:top-[calc(var(--spacing-6)*-1)]",
  "data-[side=top]:bottom-[calc(var(--spacing-6)*-1)] data-[side=top]:rotate-180",
  "data-[side=left]:right-[calc((var(--spacing-12)-(var(--spacing-6)/2))*-1)] data-[side=left]:rotate-90",
  "data-[side=right]:left-[calc((var(--spacing-12)-(var(--spacing-6)/2))*-1)] data-[side=right]:-rotate-90",
  "data-[side=inline-start]:right-[calc((var(--spacing-12)-(var(--spacing-6)/2))*-1)] data-[side=inline-start]:rotate-90",
  "data-[side=inline-end]:left-[calc((var(--spacing-12)-(var(--spacing-6)/2))*-1)] data-[side=inline-end]:-rotate-90",
  "before:absolute before:bottom-0 before:left-1/2 before:size-[calc(var(--spacing-6)*1.41421356237)]",
  "before:border before:border-[var(--color-border-subtle)] before:bg-[var(--color-surface-floating)]",
  "before:content-[''] before:[transform:translate(-50%,50%)_rotate(45deg)]",
].join(" ");
