/**
 * Shadow token contract — derived from semantic objects.
 */

import { shadowScaleTokens } from "./semantic/scale"
import type { ShadowScaleRole } from "./types"

export const shadowScaleRoles = Object.keys(
  shadowScaleTokens
) as ShadowScaleRole[]

export const semanticShadowTokens = shadowScaleRoles.map(
  (role) => `--shadow-${role}`
) as `--shadow-${ShadowScaleRole}`[]

export const allSemanticShadowTokens = [...semanticShadowTokens]

export const primitiveShadowPattern = "--shadow-layer-{role}" as const
