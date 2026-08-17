/**
 * Radius token contract — derived from semantic objects.
 */

import { radiusContextTokens } from "./semantic/context"
import { radiusScaleTokens } from "./semantic/scale"
import type { RadiusContextRole, RadiusScaleRole } from "./types"

export const radiusScaleRoles = Object.keys(
  radiusScaleTokens
) as RadiusScaleRole[]
export const radiusContextRoles = Object.keys(
  radiusContextTokens
) as RadiusContextRole[]

export const semanticRadiusTokens = {
  scale: radiusScaleRoles.map((role) =>
    role === "none" ? "--radius-none" : `--radius-${role}`
  ),
  context: radiusContextRoles.map((role) => `--radius-${role}`),
  base: ["--radius"],
} as const

export const allSemanticRadiusTokens = [
  ...semanticRadiusTokens.base,
  ...semanticRadiusTokens.scale,
  ...semanticRadiusTokens.context,
]

export const primitiveRadiusPattern = "--radius-{px}" as const
