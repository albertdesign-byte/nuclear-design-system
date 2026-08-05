import { cva } from "class-variance-authority";

export const avatarVariants = cva(
  [
    "group/avatar relative flex shrink-0 select-none rounded-[var(--radius-avatar)]",
    "after:absolute after:inset-0 after:rounded-[var(--radius-avatar)] after:border after:border-[var(--color-border)] after:mix-blend-darken dark:after:mix-blend-lighten",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "size-[var(--spacing-24)]",
        md: "size-[var(--spacing-32)]",
        lg: "size-[var(--spacing-40)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const avatarImageClassName =
  "aspect-square size-full rounded-[var(--radius-avatar)] object-cover";

export const avatarFallbackVariants = cva(
  [
    "flex size-full items-center justify-center rounded-[var(--radius-avatar)]",
    "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)]",
        md: "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
        lg: "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const avatarBadgeVariants = cva(
  [
    "absolute right-0 bottom-0 z-10 inline-flex items-center justify-center rounded-[var(--radius-full)]",
    "bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)] ring-2 ring-[var(--color-background)] select-none",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "size-[var(--spacing-8)] [&>svg]:hidden",
        md: "size-[var(--spacing-12)] [&>svg]:size-[var(--icon-sm)]",
        lg: "size-[var(--spacing-12)] [&>svg]:size-[var(--icon-sm)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export const avatarGroupClassName =
  "group/avatar-group flex -space-x-[var(--space-inline-sm)] *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-[var(--color-background)]";

export const avatarGroupCountVariants = cva(
  [
    "relative flex shrink-0 items-center justify-center rounded-[var(--radius-avatar)]",
    "bg-[var(--color-surface-muted)] text-[var(--color-text-muted)] ring-2 ring-[var(--color-background)]",
  ].join(" "),
  {
    variants: {
      size: {
        sm: "size-[var(--spacing-24)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] [&>svg]:size-[var(--icon-sm)]",
        md: "size-[var(--spacing-32)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] [&>svg]:size-[var(--icon-md)]",
        lg: "size-[var(--spacing-40)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] [&>svg]:size-[var(--icon-lg)]",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);
