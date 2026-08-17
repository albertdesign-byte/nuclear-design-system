import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const inputButtonGroupClassName = "flex w-full min-w-0 items-stretch";

export const inputButtonGroupInputClassName = [
  componentFontFamilyClassName, "rounded-r-none border-r-0",
  "focus-visible:relative focus-visible:z-[1]",
].join(" ");

export const inputButtonGroupButtonClassName = "shrink-0 rounded-l-none";
