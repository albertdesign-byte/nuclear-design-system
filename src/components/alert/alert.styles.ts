import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const alertVariants = cva(
  [
    componentFontFamilyClassName,
    "group/alert relative grid w-full gap-[var(--space-stack-xs)] rounded-[var(--radius-lg)] border border-l-[var(--spacing-4)] px-[var(--space-inline-md)] py-[var(--space-stack-sm)] text-left",
    "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
    "has-data-[slot=alert-close]:pr-[var(--spacing-48)]",
    "has-data-[slot=alert-icon]:grid-cols-[auto_1fr] has-data-[slot=alert-icon]:gap-x-[var(--space-inline-sm)]",
    "has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-[var(--space-inline-sm)]",
    "*:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        info: [
          "border-[var(--color-info-border)] bg-[var(--color-info-background)] text-[var(--color-info-text)]",
          "*:data-[slot=alert-description]:text-[var(--color-info-text)]/90",
        ].join(" "),
        success: [
          "border-[var(--color-success-border)] bg-[var(--color-success-background)] text-[var(--color-success-text)]",
          "*:data-[slot=alert-description]:text-[var(--color-success-text)]/90",
        ].join(" "),
        warning: [
          "border-[var(--color-warning-border)] bg-[var(--color-warning-background)] text-[var(--color-warning-text)]",
          "*:data-[slot=alert-description]:text-[var(--color-warning-text)]/90",
        ].join(" "),
        error: [
          "border-[var(--color-error-border)] bg-[var(--color-error-background)] text-[var(--color-error-text)]",
          "*:data-[slot=alert-description]:text-[var(--color-error-text)]/90",
        ].join(" "),
        default: [
          "border-[var(--color-info-border)] bg-[var(--color-info-background)] text-[var(--color-info-text)]",
          "*:data-[slot=alert-description]:text-[var(--color-info-text)]/90",
        ].join(" "),
        destructive: [
          "border-[var(--color-error-border)] bg-[var(--color-error-background)] text-[var(--color-error-text)]",
          "*:data-[slot=alert-description]:text-[var(--color-error-text)]/90",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

export const alertTitleClassName = [
  componentFontFamilyClassName,
  "font-semibold group-has-data-[slot=alert-icon]/alert:col-start-2 group-has-[>svg]/alert:col-start-2",
  "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-[var(--color-text-primary)]",
].join(" ");

export const alertDescriptionClassName = [
  componentFontFamilyClassName,
  "text-[length:var(--text-body-small-size)] text-balance md:text-pretty",
  "group-has-data-[slot=alert-icon]/alert:col-start-2 group-has-[>svg]/alert:col-start-2",
  "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-[var(--color-text-primary)]",
  "[&_p:not(:last-child)]:mb-[var(--space-stack-md)]",
].join(" ");

export const alertIconClassName =
  "row-span-2 mt-[var(--spacing-2)] inline-flex size-[var(--icon-md)] shrink-0 items-center justify-center [&_svg]:size-[var(--icon-sm)]";

export const alertActionClassName = [
  "mt-[var(--space-stack-xs)] flex flex-wrap items-center gap-[var(--space-inline-sm)]",
  "group-has-data-[slot=alert-icon]/alert:col-start-2 group-has-[>svg]/alert:col-start-2",
].join(" ");

export const alertCloseClassName = [
  componentFontFamilyClassName,
  "absolute right-[var(--space-inline-sm)] top-[var(--space-stack-sm)] inline-flex size-7 items-center justify-center rounded-[var(--radius-sm)]",
  "text-current transition-[var(--motion-hover)] hover:bg-[color-mix(in_oklch,currentColor_10%,transparent)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
  "[&_svg]:size-[var(--icon-sm)]",
].join(" ");
