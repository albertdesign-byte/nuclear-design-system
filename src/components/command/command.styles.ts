export const commandClassName = [
  "flex size-full flex-col overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface-floating)] p-[var(--space-inline-xs)]",
  "text-[var(--color-text-primary)]",
].join(" ");

export const commandDialogContentClassName = [
  "top-1/3 translate-y-0 overflow-hidden rounded-[var(--radius-lg)] p-0 sm:max-w-lg",
].join(" ");

export const commandInputWrapperClassName =
  "flex items-center gap-[var(--space-inline-sm)] border-b border-[var(--color-border)] px-[var(--space-inline-md)]";

export const commandInputClassName = [
  "flex h-[var(--spacing-40)] w-full bg-transparent py-[var(--space-stack-sm)] outline-none",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-primary)]",
  "placeholder:text-[var(--color-text-muted)] disabled:cursor-not-allowed disabled:opacity-50",
].join(" ");

export const commandListClassName =
  "no-scrollbar max-h-72 scroll-py-1 overflow-x-hidden overflow-y-auto outline-none";

export const commandEmptyClassName = [
  "py-[var(--space-stack-lg)] text-center text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]",
].join(" ");

export const commandGroupClassName = [
  "overflow-hidden p-[var(--space-inline-xs)] text-[var(--color-text-primary)]",
  "**:[[cmdk-group-heading]]:px-[var(--space-inline-sm)] **:[[cmdk-group-heading]]:py-[var(--space-stack-xs)]",
  "**:[[cmdk-group-heading]]:text-[length:var(--text-caption-size)] **:[[cmdk-group-heading]]:font-medium",
  "**:[[cmdk-group-heading]]:text-[var(--color-text-muted)]",
].join(" ");

export const commandSeparatorClassName =
  "-mx-[var(--space-inline-xs)] h-px bg-[var(--color-border)]";

export const commandItemClassName = [
  "group/command-item relative flex cursor-default items-center gap-[var(--space-inline-sm)]",
  "rounded-[var(--radius-md)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] outline-hidden select-none",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50",
  "data-selected:bg-[var(--color-surface-hover)] data-selected:text-[var(--color-text-primary)]",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  "data-selected:*:[svg]:text-[var(--color-text-primary)]",
].join(" ");

export const commandShortcutClassName = [
  "ml-auto text-[length:var(--text-caption-size)] tracking-widest text-[var(--color-text-muted)]",
  "group-data-selected/command-item:text-[var(--color-text-primary)]",
].join(" ");
