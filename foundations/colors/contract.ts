/**
 * Color token contract — registry of all allowed semantic token names.
 *
 * Names come from css-variables.ts so the contract cannot drift from the
 * CSS export map.
 */

import {
  allSemanticColorCssVariables,
  focusCssNames,
} from "./css-variables"

function toTokenName(cssVariable: string) {
  return cssVariable.replace(/^--/, "")
}

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

export const allSemanticTokens = [
  ...allSemanticColorCssVariables.map(toTokenName),
  ...Object.keys(focusCssNames).map(toTokenName),
] as const

export type SemanticTokenName = (typeof allSemanticTokens)[number]

export const primitiveNames = [
  "primary",
  "neutral",
  "success",
  "warning",
  "error",
  "info",
] as const
