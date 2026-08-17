import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { controlDisabledClassName } from "@/lib/disabled-styles";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";


const labelTypography =
  "text-[length:var(--text-label-size)] leading-[var(--text-label-line-height)] tracking-[var(--text-label-letter-spacing)] font-medium";

export const buttonVariants = cva(
  [
    componentFontFamilyClassName, "group/button inline-flex shrink-0 items-center justify-center rounded-[var(--radius-full)] border border-transparent",
    labelTypography,
    "whitespace-nowrap select-none outline-none",
    "transition-[var(--motion-hover)]",
    focusRing,
    controlDisabledClassName,
    "aria-expanded:bg-[var(--color-surface-active)]",
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0",
    "[&_svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        primary: "",
        secondary: "",
        outline: "",
        ghost: "border-transparent bg-transparent",
      },
      intent: {
        default: "",
        danger: "",
      },
      size: {
        sm: [
          "h-[var(--spacing-28)] min-h-[var(--spacing-28)] px-[var(--space-button-padding-sm)] gap-[var(--space-button-icon-gap)]",
          "[&_svg:not([class*='size-'])]:size-3.5",
        ].join(" "),
        md: [
          "h-[var(--spacing-32)] min-h-[var(--spacing-32)] px-[var(--space-button-padding-md)] gap-[var(--space-button-icon-gap)]",
        ].join(" "),
        lg: [
          "h-[var(--spacing-36)] min-h-[var(--spacing-36)] px-[var(--space-button-padding-lg)] gap-[var(--space-button-icon-gap)]",
        ].join(" "),
        xl: [
          "h-[var(--spacing-48)] min-h-[var(--spacing-48)] px-[var(--space-button-padding-xl)] gap-[var(--space-button-icon-gap)]",
          "text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)]",
          "[&_svg:not([class*='size-'])]:size-5",
        ].join(" "),
        xxl: [
          "h-[var(--spacing-56)] min-h-[var(--spacing-56)] px-[var(--space-button-padding-xxl)] gap-[var(--space-button-icon-gap)]",
          "text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)]",
          "[&_svg:not([class*='size-'])]:size-6",
        ].join(" "),
        "icon-sm": [
          "size-[var(--spacing-28)] p-0",
          "[&_svg:not([class*='size-'])]:size-3.5",
        ].join(" "),
        "icon-md": "size-[var(--spacing-32)] p-0",
        "icon-lg": "size-[var(--spacing-36)] p-0",
        "icon-xl": [
          "size-[var(--spacing-48)] p-0",
          "[&_svg:not([class*='size-'])]:size-5",
        ].join(" "),
        "icon-xxl": [
          "size-[var(--spacing-56)] p-0",
          "[&_svg:not([class*='size-'])]:size-6",
        ].join(" "),
      },
    },
    compoundVariants: [
      {
        variant: "primary",
        intent: "default",
        className: [
          "bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)]",
          "hover:bg-[var(--color-action-primary-hover)] active:bg-[var(--color-action-primary-active)]",
        ].join(" "),
      },
      {
        variant: "primary",
        intent: "danger",
        className: [
          "border-[var(--color-error-border)] bg-[var(--color-error-background)] text-[var(--color-error-text)]",
          "hover:border-[var(--color-error-foreground)] hover:text-[var(--color-error-foreground)]",
          "active:border-[var(--color-error-foreground)] active:bg-[var(--color-error-background)] active:text-[var(--color-error-foreground)]",
        ].join(" "),
      },
      {
        variant: "secondary",
        intent: "default",
        className: [
          "bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]",
          "border-[var(--color-border-subtle)]",
          "hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]",
          "active:bg-[var(--color-surface-active)]",
        ].join(" "),
      },
      {
        variant: "secondary",
        intent: "danger",
        className: [
          "bg-[var(--color-error-background)] text-[var(--color-error-text)]",
          "border-[var(--color-error-border)]",
          "hover:bg-[var(--color-error-background)] hover:text-[var(--color-error-foreground)]",
        ].join(" "),
      },
      {
        variant: "outline",
        intent: "default",
        className: [
          "border-[var(--color-border)] bg-[var(--color-background)] text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-surface-muted)] hover:border-[var(--color-border-strong)]",
          "active:bg-[var(--color-surface-active)]",
        ].join(" "),
      },
      {
        variant: "outline",
        intent: "danger",
        className: [
          "border-[var(--color-error-border)] bg-[var(--color-background)] text-[var(--color-error-text)]",
          "hover:bg-[var(--color-error-background)] hover:border-[var(--color-error-foreground)]",
        ].join(" "),
      },
      {
        variant: "ghost",
        intent: "default",
        className: [
          "text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text-primary)]",
          "active:bg-[var(--color-surface-active)]",
        ].join(" "),
      },
      {
        variant: "ghost",
        intent: "danger",
        className: [
          "text-[var(--color-error-text)]",
          "hover:bg-[var(--color-error-background)] hover:text-[var(--color-error-foreground)]",
        ].join(" "),
      },
    ],
    defaultVariants: {
      variant: "primary",
      intent: "default",
      size: "md",
    },
  }
);
