import { componentFontFamilyClassName } from "@/lib/component-font-family";

export const skeletonClassName = [
  componentFontFamilyClassName, "rounded-[var(--radius-md)] bg-[var(--color-surface-muted)]",
  "animate-pulse [animation-duration:var(--motion-skeleton-cycle)]",
].join(" ");
