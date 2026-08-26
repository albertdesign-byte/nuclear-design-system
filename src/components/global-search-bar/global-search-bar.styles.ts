import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const globalSearchBarContainerClassName =
  "relative w-full max-w-[16rem] sm:max-w-[20rem]";

export const globalSearchBarIconClassName =
  "pointer-events-none absolute top-1/2 left-[var(--space-inline-sm)] z-10 size-4 -translate-y-1/2 text-[var(--color-text-muted)]";

export const globalSearchBarInputClassName = [
  "w-full cursor-pointer bg-[var(--color-surface-muted)] pl-[calc(var(--space-inline-sm)+1.25rem)] text-left",
  "pr-[calc(var(--space-inline-sm)+2.75rem)]",
  /* Arbitrary color so it is not merged away by text-[length:…] / Input primary. */
  "![color:var(--color-text-muted)]",
].join(" ");

/** Product surfaces — Poppins + input body scale. */
export const globalSearchBarComponentTypographyClassName =
  componentFontFamilyClassName;

/** Docs shell chrome — label scale, regular weight, placeholder tone. */
export const globalSearchBarChromeTypographyClassName = [
  "font-[family-name:var(--font-family-sans)]",
  "[font-size:var(--text-label-size)] font-normal leading-[var(--text-label-line-height)]",
].join(" ");

export const globalSearchBarShortcutClassName =
  "pointer-events-none absolute top-1/2 right-[var(--space-inline-sm)] -translate-y-1/2";
