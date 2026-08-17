import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const fieldDescriptionClassName = [
  componentFontFamilyClassName,
  "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)]",
  "text-[var(--color-text-muted)]",
].join(" ");
