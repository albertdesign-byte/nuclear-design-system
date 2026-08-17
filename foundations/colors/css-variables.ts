/**
 * Canonical CSS variable names for semantic color tokens.
 *
 * Names are the public runtime API. Values resolve from primitive references
 * in light.ts / dark.ts — this file does not restate OKLCH.
 */

export const semanticColorCssNames = {
  "--color-background": "surface.background",
  "--color-surface": "surface.surface",
  "--color-surface-raised": "surface.surfaceRaised",
  "--color-surface-floating": "surface.surfaceFloating",
  "--color-surface-muted": "surface.surfaceMuted",
  "--color-surface-hover": "surface.surfaceHover",
  "--color-surface-active": "surface.surfaceActive",
  "--color-overlay": "surface.overlay",
  "--color-text-primary": "text.primary",
  "--color-text-secondary": "text.secondary",
  "--color-text-muted": "text.muted",
  "--color-text-disabled": "text.disabled",
  "--color-text-inverse": "text.inverse",
  "--color-text-link": "text.link",
  "--color-text-link-hover": "text.linkHover",
  "--color-border": "border.default",
  "--color-border-subtle": "border.subtle",
  "--color-border-strong": "border.strong",
  "--color-action-primary": "action.primary",
  "--color-action-primary-hover": "action.primaryHover",
  "--color-action-primary-active": "action.primaryActive",
  "--color-action-primary-text": "action.primaryText",
  "--color-focus-ring": "focus.ring",
  "--color-disabled-background": "disabled.background",
  "--color-disabled-border": "disabled.border",
  "--color-disabled-text": "disabled.text",
  "--color-success-background": "feedback.success.background",
  "--color-success-border": "feedback.success.border",
  "--color-success-text": "feedback.success.text",
  "--color-success-foreground": "feedback.success.foreground",
  "--color-warning-background": "feedback.warning.background",
  "--color-warning-border": "feedback.warning.border",
  "--color-warning-text": "feedback.warning.text",
  "--color-warning-foreground": "feedback.warning.foreground",
  "--color-error-background": "feedback.error.background",
  "--color-error-border": "feedback.error.border",
  "--color-error-text": "feedback.error.text",
  "--color-error-foreground": "feedback.error.foreground",
  "--color-info-background": "feedback.info.background",
  "--color-info-border": "feedback.info.border",
  "--color-info-text": "feedback.info.text",
  "--color-info-foreground": "feedback.info.foreground",
} as const

export const focusCssNames = {
  "--focus-ring-width": "ringWidth",
  "--focus-ring-offset": "ringOffset",
} as const

/** Runtime alpha applied on top of the referenced primitive. */
export const colorCssAlpha: Record<
  "light" | "dark",
  Partial<Record<keyof typeof semanticColorCssNames, string>>
> = {
  light: {
    "--color-overlay": "40%",
    "--color-focus-ring": "50%",
  },
  dark: {
    "--color-overlay": "60%",
    "--color-focus-ring": "50%",
  },
}

export const allSemanticColorCssVariables = Object.keys(
  semanticColorCssNames
) as Array<keyof typeof semanticColorCssNames>
