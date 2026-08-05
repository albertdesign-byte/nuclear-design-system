import { cva } from "class-variance-authority";

const focusRing =
  "focus-visible:border-[var(--color-focus-ring)] focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]";

const labelTypography =
  "text-[length:var(--text-label-size)] leading-[var(--text-label-line-height)] tracking-[var(--text-label-letter-spacing)] font-medium";

export const badgeVariants = cva(
  [
    "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-[var(--space-inline-xs)] overflow-hidden border border-transparent whitespace-nowrap outline-none",
    "transition-[var(--motion-hover)]",
    focusRing,
    "aria-invalid:border-[var(--color-error-border)] aria-invalid:ring-[length:var(--focus-ring-width)] aria-invalid:ring-[var(--color-error-border)]/30",
    "has-data-[icon=inline-end]:pr-[var(--space-inline-sm)] has-data-[icon=inline-start]:pl-[var(--space-inline-sm)]",
    "[&>svg]:pointer-events-none",
  ].join(" "),
  {
    variants: {
      variant: {
        default: [
          "bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)]",
          "[a]:hover:bg-[var(--color-action-primary-hover)]",
        ].join(" "),
        secondary: [
          "bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)]",
          "[a]:hover:bg-[var(--color-surface-hover)] [a]:hover:text-[var(--color-text-primary)]",
        ].join(" "),
        destructive: [
          "bg-[var(--color-error-background)] text-[var(--color-error-text)]",
          "focus-visible:ring-[var(--color-error-border)]/30",
          "[a]:hover:bg-[var(--color-error-background)] [a]:hover:text-[var(--color-error-foreground)]",
        ].join(" "),
        outline: [
          "border-[var(--color-border)] bg-transparent text-[var(--color-text-primary)]",
          "[a]:hover:bg-[var(--color-surface-muted)] [a]:hover:text-[var(--color-text-secondary)]",
        ].join(" "),
        ghost: [
          "bg-transparent text-[var(--color-text-primary)]",
          "hover:bg-[var(--color-surface-muted)] hover:text-[var(--color-text-secondary)]",
        ].join(" "),
        link: [
          "bg-transparent text-[var(--color-text-link)] underline-offset-4",
          "hover:text-[var(--color-text-link-hover)] hover:underline",
        ].join(" "),
      },
      size: {
        sm: [
          "h-[var(--spacing-20)] px-[var(--space-inline-sm)] py-0",
          "rounded-[var(--radius-badge)]",
          "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] font-medium",
          "[&>svg:not([class*='size-'])]:size-3",
        ].join(" "),
        md: [
          "h-[var(--spacing-24)] px-[var(--space-inline-sm)] py-0",
          "rounded-[var(--radius-full)]",
          labelTypography,
          "[&>svg:not([class*='size-'])]:size-3",
        ].join(" "),
        lg: [
          "h-[var(--spacing-28)] px-[var(--space-inline-md)] py-0",
          "rounded-[var(--radius-full)]",
          labelTypography,
          "[&>svg:not([class*='size-'])]:size-3.5",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
