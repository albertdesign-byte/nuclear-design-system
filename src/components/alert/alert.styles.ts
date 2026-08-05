import { cva } from "class-variance-authority";

export const alertVariants = cva(
  [
    "group/alert relative grid w-full gap-[var(--space-stack-xs)] rounded-[var(--radius-lg)] border px-[var(--space-inline-sm)] py-[var(--space-stack-sm)] text-left",
    "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
    "has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-[var(--spacing-72)]",
    "has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-[var(--space-inline-sm)]",
    "*:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  ].join(" "),
  {
    variants: {
      variant: {
        default:
          "border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text-primary)]",
        destructive: [
          "border-[var(--color-error-border)] bg-[var(--color-error-background)] text-[var(--color-error-text)]",
          "*:data-[slot=alert-description]:text-[var(--color-error-text)]/90 *:[svg]:text-current",
        ].join(" "),
        success: [
          "border-[var(--color-success-border)] bg-[var(--color-success-background)] text-[var(--color-success-text)]",
          "*:data-[slot=alert-description]:text-[var(--color-success-text)]/90 *:[svg]:text-current",
        ].join(" "),
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const alertTitleClassName = [
  "font-medium group-has-[>svg]/alert:col-start-2",
  "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-[var(--color-text-primary)]",
].join(" ");

export const alertDescriptionClassName = [
  "text-[length:var(--text-body-small-size)] text-balance text-[var(--color-text-secondary)] md:text-pretty",
  "[&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-[var(--color-text-primary)]",
  "[&_p:not(:last-child)]:mb-[var(--space-stack-md)]",
].join(" ");

export const alertActionClassName = "absolute top-[var(--space-stack-sm)] right-[var(--space-inline-sm)]";
