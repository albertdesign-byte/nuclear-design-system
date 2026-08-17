import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { controlDisabledCheckedClassName, toggleDisabledClassName } from "@/lib/disabled-styles";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";


export const switchVariants = cva(
  [
    componentFontFamilyClassName, "group/switch peer relative inline-flex shrink-0 items-center rounded-full border border-transparent outline-none",
    "transition-[var(--motion-hover)]",
    focusRing,
    toggleDisabledClassName,
    controlDisabledCheckedClassName,
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
    "after:absolute after:-inset-x-3 after:-inset-y-2",
    "data-checked:bg-[var(--color-action-primary)]",
    "data-unchecked:bg-[var(--color-border-subtle)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "h-[calc(var(--icon-sm)+2px)] w-[calc(var(--icon-sm)*1.714)]",
        md: "h-[calc(var(--icon-md)+2.4px)] w-[calc(var(--icon-md)*2)]",
        lg: "h-[calc(var(--icon-lg)+2px)] w-[calc(var(--icon-lg)*2)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const switchThumbVariants = cva(
  [
    componentFontFamilyClassName, "pointer-events-none block rounded-full bg-[var(--color-surface)] ring-0",
    "transition-transform duration-[var(--motion-default)] ease-[var(--motion-ease-in-out)]",
    "group-data-[size=sm]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=md]/switch:data-checked:translate-x-[calc(100%-2px)] group-data-[size=lg]/switch:data-checked:translate-x-[calc(100%-2px)]",
    "group-data-[size=sm]/switch:data-unchecked:translate-x-0 group-data-[size=md]/switch:data-unchecked:translate-x-0 group-data-[size=lg]/switch:data-unchecked:translate-x-0",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "size-[calc(var(--icon-sm)-2px)]",
        md: "size-[var(--icon-md)]",
        lg: "size-[var(--icon-lg)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
