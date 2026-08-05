/**
 * Shadow token contract — registry of allowed public token names.
 *
 * There is NO elevation-* or depth-* token layer. Depth is a design rule.
 */

import type { ShadowScaleRole } from "./types"

export const shadowScaleRoles: ShadowScaleRole[] = [
  "none",
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
]

/** Public CSS variables — components consume ONLY these */
export const semanticShadowTokens = shadowScaleRoles.map(
  (r) => `--shadow-${r}`
) as `--shadow-${ShadowScaleRole}`[]

export const allSemanticShadowTokens = [...semanticShadowTokens]

/** Primitive names — FORBIDDEN in component code */
export const primitiveShadowPattern = "--shadow-layer-{role}" as const
