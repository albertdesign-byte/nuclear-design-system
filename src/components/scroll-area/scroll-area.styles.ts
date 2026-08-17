import { componentFontFamilyClassName } from "@/lib/component-font-family";

const focusRing =
  "focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]/50 focus-visible:outline-1 focus-visible:outline-[var(--color-focus-ring)]";

export const scrollAreaRootClassName = "relative";

export const scrollAreaViewportClassName = [
  componentFontFamilyClassName, "size-full rounded-[inherit] outline-none transition-[var(--motion-hover)]",
  focusRing,
].join(" ");

export const scrollAreaScrollbarClassName = [
  componentFontFamilyClassName, "flex touch-none p-px select-none transition-[var(--motion-hover)]",
  "data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent",
  "data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
].join(" ");

export const scrollAreaThumbClassName =
  "relative flex-1 rounded-full bg-[var(--color-border)]";
