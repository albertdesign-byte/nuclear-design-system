import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const globalSearchBarContainerClassName =
  "relative w-full max-w-[16rem] sm:max-w-[20rem]";

export const globalSearchBarIconClassName =
  "pointer-events-none absolute top-1/2 left-[var(--space-inline-sm)] z-10 size-4 -translate-y-1/2 text-[var(--color-text-muted)]";

export const globalSearchBarInputClassName = [
  componentFontFamilyClassName,
  "w-full cursor-pointer bg-[var(--color-surface-muted)] pl-[calc(var(--space-inline-sm)+1.25rem)] text-left text-[var(--color-text-muted)]",
  "pr-[calc(var(--space-inline-sm)+2.75rem)]",
].join(" ");

export const globalSearchBarShortcutClassName =
  "pointer-events-none absolute top-1/2 right-[var(--space-inline-sm)] -translate-y-1/2";
