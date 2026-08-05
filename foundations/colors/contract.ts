/**
 * Color token contract — registry of all allowed semantic token names.
 *
 * Why: If a token name is not in this contract, it does not exist.
 * Prevents typo-driven inconsistencies and enables future lint rules.
 */

export const semanticTokenContract = {
  surface: [
    "color-background",
    "color-surface",
    "color-surface-raised",
    "color-surface-floating",
    "color-surface-muted",
    "color-surface-hover",
    "color-surface-active",
    "color-overlay",
  ],
  text: [
    "color-text-primary",
    "color-text-secondary",
    "color-text-muted",
    "color-text-disabled",
    "color-text-inverse",
    "color-text-link",
    "color-text-link-hover",
  ],
  border: [
    "color-border",
    "color-border-subtle",
    "color-border-strong",
  ],
  action: [
    "color-action-primary",
    "color-action-primary-hover",
    "color-action-primary-active",
    "color-action-primary-text",
  ],
  focus: [
    "color-focus-ring",
    "focus-ring-width",
    "focus-ring-offset",
  ],
  disabled: [
    "color-disabled-background",
    "color-disabled-border",
    "color-disabled-text",
  ],
  feedback: {
    success: [
      "color-success-background",
      "color-success-border",
      "color-success-text",
      "color-success-foreground",
    ],
    warning: [
      "color-warning-background",
      "color-warning-border",
      "color-warning-text",
      "color-warning-foreground",
    ],
    error: [
      "color-error-background",
      "color-error-border",
      "color-error-text",
      "color-error-foreground",
    ],
    info: [
      "color-info-background",
      "color-info-border",
      "color-info-text",
      "color-info-foreground",
    ],
  },
} as const

/** Flat list of all semantic color token names for validation */
export const allSemanticTokens = [
  ...semanticTokenContract.surface,
  ...semanticTokenContract.text,
  ...semanticTokenContract.border,
  ...semanticTokenContract.action,
  ...semanticTokenContract.focus,
  ...semanticTokenContract.disabled,
  ...semanticTokenContract.feedback.success,
  ...semanticTokenContract.feedback.warning,
  ...semanticTokenContract.feedback.error,
  ...semanticTokenContract.feedback.info,
] as const

export type SemanticTokenName = (typeof allSemanticTokens)[number]

/** Primitive palette names — FORBIDDEN in component code */
export const primitiveNames = [
  "primary", "neutral", "success", "warning", "error", "info",
] as const
