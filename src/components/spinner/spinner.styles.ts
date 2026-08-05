import { cva } from "class-variance-authority";

export const spinnerVariants = cva("animate-spin text-[var(--color-text-muted)]", {
  variants: {
    size: {
      sm: "size-[var(--icon-sm)]",
      md: "size-[var(--icon-md)]",
      lg: "size-[var(--icon-lg)]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
