export const dialogOverlayClassName = [
  "fixed inset-0 isolate z-[var(--z-modal)] bg-[var(--color-overlay)]",
  "duration-100 supports-backdrop-filter:backdrop-blur-xs",
  "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
].join(" ");

export const dialogViewportClassName = [
  "fixed inset-0 z-[var(--z-modal)] flex items-center justify-center",
  "p-[var(--space-inline-md)] pointer-events-none",
].join(" ");

export const dialogContentClassName = [
  "relative z-[var(--z-modal)] grid w-full max-w-[calc(100%-2rem)]",
  "pointer-events-auto gap-[var(--space-stack-md)]",
  "rounded-[var(--radius-card)] bg-[var(--color-surface)] p-[var(--space-dialog)]",
  "text-[length:var(--text-body-small-size)] text-[var(--color-text-primary)]",
  "ring-1 ring-[var(--color-border-subtle)] duration-100 outline-none sm:max-w-sm",
  "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95",
  "data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
].join(" ");

export const dialogHeaderClassName =
  "flex flex-col gap-[var(--space-stack-sm)]";

export const dialogFooterClassName = [
  "-mx-[var(--space-dialog)] -mb-[var(--space-dialog)] flex flex-col-reverse",
  "gap-[var(--space-stack-sm)] rounded-b-[var(--radius-card)] border-t border-[var(--color-border)]",
  "bg-[var(--color-surface-muted)] p-[var(--space-dialog)] sm:flex-row sm:justify-end",
].join(" ");

export const dialogTitleClassName =
  "font-heading text-[length:var(--text-title-size)] leading-[var(--text-title-line-height)] font-medium text-[var(--color-text-primary)]";

export const dialogDescriptionClassName = [
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-text-secondary)]",
  "*:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-[var(--color-text-primary)]",
].join(" ");
