import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { controlDisabledClassName, controlDisabledCheckedClassName } from "@/lib/disabled-styles";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";

/** Invisible 44×44px hit area — does not affect layout (absolute, centered on control). */
const touchTargetExpansion = [
  "after:pointer-events-none after:absolute after:left-1/2 after:top-1/2 after:z-0",
  "after:size-[var(--space-touch-target-min)] after:-translate-x-1/2 after:-translate-y-1/2",
  "after:content-['']",
].join(" ");

export const checkboxVariants = cva(
  [
    componentFontFamilyClassName,
    "relative z-[1] inline-flex shrink-0 items-center justify-center border border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-action-primary-text)] outline-none",
    "transition-[var(--motion-hover)]",
    focusRing,
    touchTargetExpansion,
    controlDisabledCheckedClassName,
    controlDisabledClassName,
    "hover:border-[var(--color-border)]",
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
    "data-checked:border-[var(--color-action-primary)] data-checked:bg-[var(--color-action-primary)] data-checked:text-[var(--color-action-primary-text)]",
    "data-checked:hover:border-[var(--color-action-primary)] data-checked:hover:bg-[var(--color-action-primary)]",
    "data-indeterminate:border-[var(--color-action-primary)] data-indeterminate:bg-[var(--color-action-primary)] data-indeterminate:text-[var(--color-action-primary-text)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "size-[var(--icon-sm)] rounded-[var(--radius-checkbox)] [&_svg:not([class*='size-'])]:size-3",
        md: "size-[var(--icon-md)] rounded-[var(--radius-checkbox)] [&_svg:not([class*='size-'])]:size-3.5",
        lg: "size-[var(--icon-lg)] rounded-[var(--radius-checkbox)] [&_svg:not([class*='size-'])]:size-4",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  }
);

export const checkboxIndicatorClassName =
  "grid place-content-center text-current [&>svg]:pointer-events-none";

/** Visual-only wrapper — sizes to the checkbox, not the touch target. */
export const checkboxControlClassName = [
  componentFontFamilyClassName,
  "relative inline-flex shrink-0 items-center justify-center self-center",
].join(" ");

/** @deprecated Use checkboxControlClassName */
export const checkboxTouchTargetClassName = checkboxControlClassName;

/** Visual gap between control and label text (6px). */
export const checkboxFieldGapClassName = "gap-[var(--spacing-6)]";

/** Clickable row — min touch height on the row, tight horizontal layout. */
export const checkboxFieldClassName = [
  componentFontFamilyClassName,
  "flex w-full min-h-[var(--space-touch-target-min)] cursor-pointer select-none",
  checkboxFieldGapClassName,
  "rounded-[var(--radius-md)]",
  "has-[:disabled]:cursor-not-allowed",
].join(" ");

/** Label + optional description beside the control. */
export const checkboxFieldContentClassName =
  "flex min-w-0 flex-1 flex-col gap-[var(--space-stack-xs)]";

/** Align helper/error with label column (24px control + 6px gap). */
export const checkboxFieldMessageInsetClassName =
  "pl-[calc(var(--icon-lg)+var(--spacing-6))]";

export const checkboxFieldLabelClassName = cva(
  [
    componentFontFamilyClassName,
    "text-[length:var(--text-label-size)] leading-[var(--text-label-line-height)] tracking-[var(--text-label-letter-spacing)] font-medium",
    "text-[var(--color-text-primary)]",
  ].join(" "),
  {
    variants: {
      invalid: {
        true: "text-[var(--color-error-text)]",
        false: "",
      },
    },
    defaultVariants: {
      invalid: false,
    },
  }
);

/** Vertical list of checkbox fields inside a group. */
export const checkboxGroupListClassName =
  "flex w-full flex-col gap-[var(--space-stack-sm)]";

/** Group heading above a checkbox list. */
export const checkboxGroupLegendClassName = [
  componentFontFamilyClassName,
  "text-[length:var(--text-label-size)] leading-[var(--text-label-line-height)] tracking-[var(--text-label-letter-spacing)] font-medium",
  "text-[var(--color-text-primary)]",
].join(" ");

export const checkboxGroupClassName = [
  componentFontFamilyClassName,
  "flex w-full flex-col gap-[var(--space-stack-xs)]",
].join(" ");
