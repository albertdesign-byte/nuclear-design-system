import type { CSSProperties } from "react";

export const sonnerThemeStyle = {
  "--normal-bg": "var(--color-surface-floating)",
  "--normal-text": "var(--color-text-primary)",
  "--normal-border": "var(--color-border)",
  "--border-radius": "var(--radius-md)",
  "--success-bg": "var(--color-success-background)",
  "--success-text": "var(--color-success-text)",
  "--success-border": "var(--color-success-border)",
  "--info-bg": "var(--color-info-background)",
  "--info-text": "var(--color-info-text)",
  "--info-border": "var(--color-info-border)",
  "--warning-bg": "var(--color-warning-background)",
  "--warning-text": "var(--color-warning-text)",
  "--warning-border": "var(--color-warning-border)",
  "--error-bg": "var(--color-error-background)",
  "--error-text": "var(--color-error-text)",
  "--error-border": "var(--color-error-border)",
} as CSSProperties;

export const sonnerClassNames = {
  toast: "medmo-toast",
  title: "medmo-toast-title",
  description: "medmo-toast-description",
  actionButton: "medmo-toast-action",
  cancelButton: "medmo-toast-cancel",
  closeButton: "medmo-toast-close",
} as const;

export const sonnerRootClassName = "toaster group z-[var(--z-toast)]";
