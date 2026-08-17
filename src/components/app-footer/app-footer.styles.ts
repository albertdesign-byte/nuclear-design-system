import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";

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
        "pb-[calc(var(--space-page)+env(safe-area-inset-bottom,0px))]",
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
        "grid grid-cols-[minmax(10rem,0.8fr)_minmax(0,2fr)] items-start gap-[var(--space-inline-xl)]",
    },
    {
      variant: "patients",
      device: "desktop",
      className:
        "grid grid-cols-[minmax(12rem,0.8fr)_minmax(0,2.2fr)] items-start gap-[var(--space-inline-xl)]",
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

export const appFooterLinkClassName = [
  componentFontFamilyClassName,
  "rounded-[var(--radius-sm)] px-[var(--space-inline-xs)] py-[var(--space-stack-xs)]",
  "text-[length:var(--text-caption-size)] font-normal leading-[var(--text-caption-line-height)]",
  "text-[var(--color-text-muted)] underline-offset-[3px] transition-[var(--motion-hover)]",
  "hover:text-[var(--color-text-link-hover)] hover:underline",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]",
  "active:text-[var(--color-text-link)] active:underline",
].join(" ");

export const patientsFooterBrandClassName =
  "flex min-w-0 flex-col gap-[var(--space-stack-md)]";

export const patientsFooterBrandLinkClassName = [
  "inline-flex w-fit rounded-[var(--radius-md)] p-[var(--space-inline-xs)]",
  "transition-[var(--motion-hover)] hover:bg-[var(--color-action-primary-hover)]",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)]",
  "focus-visible:ring-[var(--color-action-primary-text)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]",
  "focus-visible:ring-offset-[var(--color-action-primary)] active:bg-[var(--color-action-primary-active)]",
].join(" ");

export const patientsFooterMetaClassName = [
  componentFontFamilyClassName, "flex flex-col gap-[var(--space-stack-xs)]",
  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-action-primary-text)] opacity-90",
].join(" ");

export const patientsFooterNavigationClassName = cva(
  "grid min-w-0 items-start gap-x-[var(--space-inline-xl)] gap-y-[var(--space-stack-lg)]",
  {
    variants: {
      device: {
        mobile: "grid-cols-1",
        tablet: "grid-cols-2",
        desktop: "grid-cols-4",
      },
    },
    defaultVariants: {
      device: "desktop",
    },
  }
);

export const patientsFooterSectionClassName =
  "flex min-w-0 flex-col gap-[var(--space-stack-sm)]";

export const patientsFooterSectionTitleClassName = [
  componentFontFamilyClassName, "text-[length:var(--text-label-size)] font-semibold leading-[var(--text-label-line-height)]",
].join(" ");

export const patientsFooterDividerClassName = [
  componentFontFamilyClassName, "h-px w-full border-0 border-b border-dotted",
  "border-[var(--color-action-primary-text)] opacity-40",
].join(" ");

export const patientsFooterContactListClassName =
  "flex flex-col gap-[var(--space-stack-sm)]";

export const patientsFooterLinkClassName = [
  componentFontFamilyClassName,
  "inline-flex w-fit min-w-0 items-center gap-[var(--space-inline-sm)] rounded-[var(--radius-sm)]",
  "-mx-[var(--space-inline-xs)] px-[var(--space-inline-xs)] py-[var(--space-stack-xs)]",
  "[overflow-wrap:anywhere] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
  "text-[var(--color-action-primary-text)] underline-offset-[3px] transition-[var(--motion-hover)]",
  "hover:bg-[var(--color-action-primary-hover)] hover:underline",
  "focus-visible:outline-none focus-visible:ring-[length:var(--focus-ring-width)]",
  "focus-visible:ring-[var(--color-action-primary-text)] focus-visible:ring-offset-[length:var(--focus-ring-offset)]",
  "focus-visible:ring-offset-[var(--color-action-primary)] active:bg-[var(--color-action-primary-active)] active:underline",
].join(" ");
