export const popoverPositionerClassName = "isolate z-[var(--z-popover)]";

export const popoverContentClassName = [
  "z-[var(--z-popover)] flex w-72 origin-(--transform-origin) flex-col gap-[var(--space-stack-sm)]",
  "rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)] p-[var(--space-inline-sm)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]",
  "shadow-[var(--shadow-md)] ring-1 ring-[var(--color-border-subtle)] outline-hidden duration-100",
  "data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2",
  "data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
  "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
].join(" ");

export const popoverHeaderClassName =
  "flex flex-col gap-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)]";

export const popoverTitleClassName =
  "font-medium text-[var(--color-text-primary)]";

export const popoverDescriptionClassName =
  "text-[var(--color-text-secondary)]";
