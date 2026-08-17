import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const appHeaderClassName = [
  componentFontFamilyClassName, "flex h-[var(--app-header-height)] shrink-0 items-center gap-[var(--space-inline-md)]",
  "border-b border-[var(--color-border-subtle)] bg-[var(--color-surface)]",
  "px-[var(--space-page)]",
].join(" ");

export const appHeaderTitleClassName = [
  componentFontFamilyClassName, "shrink-0 text-[length:var(--text-title-size)] font-semibold uppercase",
  "leading-[var(--text-title-line-height)] tracking-[0.04em] text-[var(--color-text-primary)]",
].join(" ");

export const appHeaderCenterClassName = "flex min-w-0 flex-1 justify-center";

export const appHeaderActionsClassName =
  "ml-auto flex shrink-0 items-center gap-[var(--space-inline-sm)]";
