import { cva } from "class-variance-authority";

export const labelClassName = cva(
  [
    "flex items-center gap-[var(--space-inline-sm)]",
    "text-[length:var(--text-label-size)] leading-[var(--text-label-line-height)] tracking-[var(--text-label-letter-spacing)] font-medium",
    "select-none",
    "group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  ].join(" "),
  {
    variants: {
      invalid: {
        true: "text-[var(--color-error-text)]",
        false: "text-[var(--color-text-primary)]",
      },
    },
    defaultVariants: {
      invalid: false,
    },
  }
);
