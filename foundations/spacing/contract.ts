/**
 * Spacing token contract — registry of allowed semantic token names.
 */

import type { ContextSpacingRole, InlineSpacingRole, StackSpacingRole } from "./types"

export const inlineSpacingRoles: InlineSpacingRole[] = ["xs", "sm", "md", "lg"]
export const stackSpacingRoles: StackSpacingRole[] = ["xs", "sm", "md", "lg", "xl"]
export const contextSpacingRoles: ContextSpacingRole[] = [
  "page",
  "section",
  "card",
  "form",
  "table",
  "dialog",
  "form-label",
  "form-group",
  "card-gap",
]

/** Primitive names — FORBIDDEN in component code */
export const semanticSpacingTokens = {
  inline: inlineSpacingRoles.map((r) => `--space-inline-${r}`),
  stack: stackSpacingRoles.map((r) => `--space-stack-${r}`),
  context: contextSpacingRoles.map((r) => `--space-${r}`),
} as const

export const allSemanticSpacingTokens = [
  ...semanticSpacingTokens.inline,
  ...semanticSpacingTokens.stack,
  ...semanticSpacingTokens.context,
]

/** Primitive names — FORBIDDEN in component code */
export const primitiveSpacingPattern = "--spacing-{px}" as const
