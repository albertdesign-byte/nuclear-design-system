import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const fieldErrorClassName = [
  componentFontFamilyClassName, "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)]",
  "text-[var(--color-error-text)]",
].join(" ");

export const fieldErrorWithIconClassName =
  "inline-flex items-start gap-[var(--space-inline-xs)] [&_svg]:mt-0.5";
