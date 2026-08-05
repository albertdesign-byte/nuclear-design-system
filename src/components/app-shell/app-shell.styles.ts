export const appShellClassName = [
  "app-shell flex min-h-dvh w-full bg-[var(--color-background)] text-[var(--color-text-primary)]",
  "[--app-sidebar-width:var(--spacing-64)]",
  "[--app-header-height:var(--spacing-64)]",
  "overflow-hidden",
].join(" ");

export const appShellBodyClassName = "flex min-h-0 min-w-0 flex-1 flex-col";

export const appShellMainClassName =
  "min-h-0 flex-1 overflow-auto p-[var(--space-page)]";
