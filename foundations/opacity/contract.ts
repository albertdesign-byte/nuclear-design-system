/**
 * Opacity token contract — registry of allowed public token names.
 *
 * Entire public API: 2 semantic + 1 preset (3 intents total).
 * This is intentional — Colors owns overlay, focus, disabled alpha.
 */

import type { OpacityPresetRole, OpacitySemanticRole } from "./types"

export const opacitySemanticRoles: OpacitySemanticRole[] = ["subtle", "muted"]

export const opacityPresetRoles: OpacityPresetRole[] = ["skeleton"]

export const semanticOpacityTokens = opacitySemanticRoles.map(
  (r) => `--opacity-${r}`
)

export const semanticOpacityPresetTokens = [
  "--opacity-skeleton-from",
  "--opacity-skeleton-to",
] as const

export const allSemanticOpacityTokens = [
  ...semanticOpacityTokens,
  ...semanticOpacityPresetTokens,
]

/** Primitive pattern — FORBIDDEN in component code */
export const primitiveOpacityPattern = "--opacity-{percent}" as const

/** Documented anti-patterns — these must NEVER become tokens */
export const rejectedOpacityIntents = [
  "opacity-disabled — use color-disabled-background, color-disabled-text",
  "opacity-overlay — use color-overlay",
  "opacity-focus — use color-focus-ring",
  "opacity-hover — use color-surface-hover",
  "opacity-50 on disabled — breaks contrast; audit anti-pattern",
] as const
