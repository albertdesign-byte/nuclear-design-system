import { componentFontFamilyClassName } from "@/lib/component-font-family";

/** Panel width from Figma node 1:2133 (modales). Not a foundation token. */
export const sideModalPanelWidth = "520px";

export const sideModalOverlayClassName = [
  componentFontFamilyClassName,
  "fixed inset-0 isolate z-[var(--z-modal)] bg-[var(--color-overlay)]",
  "duration-200 supports-backdrop-filter:backdrop-blur-xs",
  "data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
].join(" ");

export const sideModalViewportClassName = [
  componentFontFamilyClassName,
  "fixed inset-0 z-[var(--z-modal)] flex justify-end pointer-events-none",
].join(" ");

export const sideModalContentClassName = [
  componentFontFamilyClassName,
  "relative flex h-dvh max-h-dvh pointer-events-auto flex-col overflow-hidden",
  "bg-[var(--color-surface)] text-[length:var(--text-body-small-size)]",
  "text-[var(--color-text-primary)] shadow-[var(--shadow-lg)]",
  "border-l border-[var(--color-border-subtle)] outline-none duration-200",
  "data-open:animate-in data-open:fade-in-0 data-open:slide-in-from-right",
  "data-closed:animate-out data-closed:fade-out-0 data-closed:slide-out-to-right",
].join(" ");

export const sideModalHeaderClassName = [
  componentFontFamilyClassName,
  "flex shrink-0 items-start justify-between gap-[var(--space-inline-md)]",
  "border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)]",
  "px-[var(--space-dialog)] py-[var(--space-dialog)]",
  "pr-[var(--spacing-48)]",
].join(" ");

export const sideModalHeaderCopyClassName =
  "flex min-w-0 flex-1 flex-col gap-[var(--space-stack-xs)]";

export const sideModalHeaderEndClassName =
  "flex shrink-0 items-center gap-[var(--space-inline-xs)]";

export const sideModalTitleClassName = [
  componentFontFamilyClassName,
  "text-[length:var(--text-h3-size)] font-semibold leading-[var(--text-h3-line-height)]",
  "text-[var(--color-text-primary)]",
].join(" ");

export const sideModalDescriptionClassName = [
  componentFontFamilyClassName,
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-text-secondary)]",
].join(" ");

export const sideModalBodyClassName = [
  componentFontFamilyClassName,
  "min-h-0 flex-1 overflow-y-auto overscroll-contain",
  "bg-[var(--color-surface-muted)] px-[var(--space-dialog)] py-[var(--space-stack-md)]",
].join(" ");

export const sideModalFooterClassName = [
  componentFontFamilyClassName,
  "flex shrink-0 flex-col-reverse gap-[var(--space-stack-sm)]",
  "border-t border-[var(--color-border)] bg-[var(--color-surface)]",
  "px-[var(--space-dialog)] py-[var(--space-dialog)]",
  "sm:flex-row sm:justify-end",
].join(" ");

export const sideModalCloseButtonClassName =
  "absolute top-[var(--space-dialog)] right-[var(--space-dialog)]";
