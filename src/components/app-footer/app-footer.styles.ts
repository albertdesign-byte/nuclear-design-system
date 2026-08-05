import { cva } from "class-variance-authority";

export const appFooterVariants = cva("", {
  variants: {
    variant: {
      default: [
        "flex shrink-0 flex-col items-center justify-end",
        "border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]",
        "text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)]",
        "text-[var(--color-text-muted)]",
      ].join(" "),
      patients: [
        "w-full shrink-0",
        "bg-[var(--color-action-primary)] text-[var(--color-action-primary-text)]",
        "px-[var(--space-page)] py-[var(--space-stack-lg)]",
        "pb-[calc(var(--space-stack-lg)+env(safe-area-inset-bottom,0px))]",
      ].join(" "),
    },
    device: {
      mobile: "",
      tablet: "",
      desktop: "",
    },
  },
  compoundVariants: [
    {
      variant: "default",
      device: "mobile",
      className: [
        "gap-[var(--space-stack-md)] pt-[var(--space-stack-lg)]",
        "pb-[calc(var(--space-page)+env(safe-area-inset-bottom,0px))] min-h-[12rem]",
      ].join(" "),
    },
    {
      variant: "default",
      device: "tablet",
      className: "gap-[var(--space-stack-sm)] py-[var(--space-stack-lg)]",
    },
    {
      variant: "default",
      device: "desktop",
      className: "gap-[var(--space-stack-sm)] py-[var(--space-stack-lg)]",
    },
    {
      variant: "patients",
      device: "mobile",
      className: "flex flex-col gap-[var(--space-stack-lg)]",
    },
    {
      variant: "patients",
      device: "tablet",
      className:
        "grid grid-cols-3 items-start gap-x-[var(--space-inline-xl)] gap-y-0",
    },
    {
      variant: "patients",
      device: "desktop",
      className:
        "grid grid-cols-3 items-start gap-x-[var(--space-inline-xl)] gap-y-0",
    },
  ],
  defaultVariants: {
    variant: "default",
    device: "desktop",
  },
});

export const appFooterLinksClassName = cva("", {
  variants: {
    device: {
      mobile: "flex flex-col items-center gap-[var(--space-stack-sm)]",
      tablet: "flex flex-wrap items-center justify-center gap-[var(--space-inline-sm)]",
      desktop:
        "flex flex-wrap items-center justify-center gap-x-[var(--space-inline-md)] gap-y-[var(--space-stack-xs)]",
    },
  },
  defaultVariants: {
    device: "desktop",
  },
});

export const appFooterCopyrightClassName =
  "text-center text-[var(--color-text-muted)]";

export const patientsFooterWordmarkClassName = [
  "text-[length:var(--text-heading-3-size)] font-semibold leading-none tracking-[0.02em]",
].join(" ");

export const patientsFooterMetaClassName = [
  "flex flex-col gap-[var(--space-stack-xs)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-action-primary-text)] opacity-90",
].join(" ");

export const patientsFooterSectionClassName =
  "flex flex-col gap-[var(--space-stack-sm)]";

export const patientsFooterSectionTitleClassName = [
  "text-[length:var(--text-label-size)] font-semibold leading-[var(--text-label-line-height)]",
].join(" ");

export const patientsFooterDividerClassName = [
  "h-px w-full border-0 border-b border-dotted",
  "border-[var(--color-info-foreground)] opacity-80",
].join(" ");

export const patientsFooterContactListClassName =
  "flex flex-col gap-[var(--space-stack-sm)]";

export const patientsFooterContactItemClassName = [
  "inline-flex items-center gap-[var(--space-inline-sm)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-action-primary-text)] transition-[var(--motion-hover)] hover:opacity-80",
].join(" ");

export const patientsFooterLinkClassName = [
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-action-primary-text)] underline-offset-[3px] transition-[var(--motion-hover)]",
  "hover:underline focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-action-primary-text)]",
].join(" ");
