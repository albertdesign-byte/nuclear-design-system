import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const separatorClassName = [
  componentFontFamilyClassName, "shrink-0 bg-[var(--color-border)]",
  "data-horizontal:h-px data-horizontal:w-full",
  "data-vertical:w-px data-vertical:self-stretch",
].join(" ");
