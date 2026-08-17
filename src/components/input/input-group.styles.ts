import { cva } from "class-variance-authority";
import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const inputGroupClassName = [
  componentFontFamilyClassName,
  "flex w-full min-w-0 items-stretch overflow-hidden",
  "rounded-[var(--radius-input)] border border-[var(--color-border)] bg-[var(--color-background)]",
  "transition-[var(--motion-hover)]",
  "has-[[data-slot=input]:disabled]:cursor-not-allowed",
  "has-[[data-slot=input]:disabled]:border-[var(--color-disabled-border)]",
  "has-[[data-slot=input]:disabled]:bg-[var(--color-disabled-background)]",
  "has-[[data-slot=input]:focus-visible]:border-[var(--color-focus-ring)]",
  "has-[[data-slot=input]:focus-visible]:ring-[length:var(--focus-ring-width)]",
  "has-[[data-slot=input]:focus-visible]:ring-[var(--color-focus-ring)]",
  "has-[[data-slot=input]:focus-visible]:ring-offset-[length:var(--focus-ring-offset)]",
  "has-[[data-slot=input][aria-invalid=true]]:border-[var(--color-error-border)]",
  "has-[[data-slot=input][aria-invalid=true]]:ring-[length:var(--focus-ring-width)]",
  "has-[[data-slot=input][aria-invalid=true]]:ring-[var(--color-error-border)]/30",
  "has-[[data-slot=input][readonly]]:border-[var(--color-border)]",
  "has-[[data-slot=input][readonly]]:bg-[var(--color-surface-muted)]",
].join(" ");

export const inputGroupAddonVariants = cva(
  [
    componentFontFamilyClassName,
    "inline-flex shrink-0 items-center justify-center",
    "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
    "text-[var(--color-text-muted)]",
    "has-[[data-slot=input]:disabled]:text-[var(--color-disabled-text)]",
    "has-[[data-slot=input][readonly]]:text-[var(--color-text-muted)]",
  ].join(" "),
  {
    variants: {
      align: {
        start: [
          "border-r border-[var(--color-border)] bg-[var(--color-surface-muted)]",
          "px-[var(--space-inline-sm)]",
          "has-[[data-slot=input]:disabled]:border-[var(--color-disabled-border)]",
          "has-[[data-slot=input]:disabled]:bg-[var(--color-disabled-background)]",
        ].join(" "),
        end: [
          "border-l border-[var(--color-border)] bg-[var(--color-surface-muted)]",
          "px-[var(--space-inline-sm)]",
          "has-[[data-slot=input]:disabled]:border-[var(--color-disabled-border)]",
          "has-[[data-slot=input]:disabled]:bg-[var(--color-disabled-background)]",
        ].join(" "),
      },
      icon: {
        true: "border-0 bg-transparent px-[var(--space-inline-sm)] [&_svg]:size-[var(--icon-sm)]",
        false: "",
      },
    },
    defaultVariants: {
      align: "start",
      icon: false,
    },
  }
);

/** Input inside a group — border and focus ring live on the container. */
export const inputGroupInputClassName = [
  componentFontFamilyClassName,
  "min-w-0 flex-1 border-0 bg-transparent shadow-none outline-none",
  "rounded-none focus-visible:border-transparent focus-visible:ring-0",
  "disabled:bg-transparent",
  "read-only:bg-transparent",
].join(" ");

export const inputGroupTextAddonClassName =
  "font-medium tracking-[var(--text-label-letter-spacing)]";
