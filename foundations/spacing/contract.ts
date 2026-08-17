/**
 * Spacing token contract — registry of allowed semantic token names.
 * Role lists are derived from the semantic objects, not restated by hand.
 */

import { contextSpacing } from "./semantic/context"
import { inlineSpacing } from "./semantic/inline"
import { stackSpacing } from "./semantic/stack"
import type {
  ContextSpacingRole,
  InlineSpacingRole,
  StackSpacingRole,
} from "./types"

export const inlineSpacingRoles = Object.keys(
  inlineSpacing
) as InlineSpacingRole[]
export const stackSpacingRoles = Object.keys(stackSpacing) as StackSpacingRole[]
export const contextSpacingRoles = Object.keys(
  contextSpacing
) as ContextSpacingRole[]

export const semanticSpacingTokens = {
  inline: inlineSpacingRoles.map((role) => `--space-inline-${role}`),
  stack: stackSpacingRoles.map((role) => `--space-stack-${role}`),
  context: contextSpacingRoles.map((role) => `--space-${role}`),
} as const

export const allSemanticSpacingTokens = [
  ...semanticSpacingTokens.inline,
  ...semanticSpacingTokens.stack,
  ...semanticSpacingTokens.context,
]

export const primitiveSpacingPattern = "--spacing-{px}" as const
