export const tableContainerClassName = "relative w-full overflow-x-auto";

export const tableClassName =
  "w-full caption-bottom text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]";

export const tableHeaderClassName =
  "[&_tr]:border-b [&_tr]:border-[var(--color-border)]";

export const tableBodyClassName = "[&_tr:last-child]:border-0";

export const tableFooterClassName = [
  "border-t border-[var(--color-border)] bg-[var(--color-surface-muted)] font-medium",
  "[&>tr]:last:border-b-0",
].join(" ");

export const tableRowClassName = [
  "border-b border-[var(--color-border)] transition-[var(--motion-hover)]",
  "hover:bg-[var(--color-surface-hover)]",
  "has-aria-expanded:bg-[var(--color-surface-hover)]",
  "data-[state=selected]:bg-[var(--color-surface-muted)]",
].join(" ");

export const tableHeadClassName = [
  "h-10 px-[var(--space-table)] text-left align-middle font-medium whitespace-nowrap",
  "text-[var(--color-text-primary)]",
  "[&:has([role=checkbox])]:pr-0",
].join(" ");

export const tableCellClassName = [
  "p-[var(--space-table)] align-middle whitespace-nowrap",
  "[&:has([role=checkbox])]:pr-0",
].join(" ");

export const tableCaptionClassName =
  "mt-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]";
