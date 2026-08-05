export const dropdownMenuPositionerClassName = "isolate z-[var(--z-dropdown)] outline-none";

export const dropdownMenuContentClassName = [
  "pointer-events-auto z-[var(--z-dropdown)] max-h-[var(--available-height,16rem)] w-[var(--anchor-width)] min-w-32",
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
  "pointer-events-auto w-auto min-w-[6rem] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]",
  "bg-[var(--color-surface-floating)] p-[var(--space-inline-xs)] text-[var(--color-text-primary)]",
  "shadow-[var(--shadow-lg)] ring-1 ring-[var(--color-border-subtle)]",
  "duration-[var(--motion-moderate)] ease-[var(--motion-ease-out)]",
  "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2",
  "data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
  "data-open:animate-in data-open:fade-in-0",
  "data-closed:animate-out data-closed:fade-out-0",
].join(" ");

export const dropdownMenuLabelClassName = [
  "px-[var(--space-inline-sm)] py-[var(--space-stack-xs)]",
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] font-medium text-[var(--color-text-muted)]",
  "data-inset:pl-[var(--spacing-28)]",
].join(" ");

export const dropdownMenuItemClassName = [
  "group/dropdown-menu-item relative flex cursor-default items-center gap-[var(--space-inline-sm)]",
  "rounded-[var(--radius-md)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] outline-hidden select-none",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "focus:bg-[var(--color-surface-hover)] focus:text-[var(--color-text-primary)]",
  "not-data-[variant=destructive]:focus:**:text-[var(--color-text-primary)]",
  "data-inset:pl-[var(--spacing-28)] data-[variant=destructive]:text-[var(--color-error-text)]",
  "data-[variant=destructive]:focus:bg-[var(--color-error-background)] data-[variant=destructive]:focus:text-[var(--color-error-text)]",
  "data-disabled:pointer-events-none data-disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  "data-[variant=destructive]:*:[svg]:text-[var(--color-error-text)]",
].join(" ");

export const dropdownMenuSubTriggerClassName = [
  "flex cursor-default items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-md)]",
  "px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] outline-hidden select-none",
  "focus:bg-[var(--color-surface-hover)] focus:text-[var(--color-text-primary)]",
  "data-inset:pl-[var(--spacing-28)] data-popup-open:bg-[var(--color-surface-hover)] data-popup-open:text-[var(--color-text-primary)]",
  "data-open:bg-[var(--color-surface-hover)] data-open:text-[var(--color-text-primary)]",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ");

export const dropdownMenuCheckboxItemClassName = [
  "relative flex cursor-default items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-md)]",
  "py-[var(--space-stack-xs)] pr-[var(--spacing-32)] pl-[var(--space-inline-sm)] outline-hidden select-none",
  "text-[length:var(--text-body-small-size)] focus:bg-[var(--color-surface-hover)] focus:text-[var(--color-text-primary)]",
  "focus:**:text-[var(--color-text-primary)] data-inset:pl-[var(--spacing-28)]",
  "data-disabled:pointer-events-none data-disabled:opacity-50",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
].join(" ");

export const dropdownMenuSeparatorClassName =
  "-mx-[var(--space-inline-xs)] my-[var(--space-stack-xs)] h-px bg-[var(--color-border)]";

export const dropdownMenuShortcutClassName = [
  "ml-auto text-[length:var(--text-caption-size)] tracking-widest text-[var(--color-text-muted)]",
  "group-focus/dropdown-menu-item:text-[var(--color-text-primary)]",
].join(" ");
