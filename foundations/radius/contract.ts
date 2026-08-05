/**
 * Radius token contract — registry of allowed semantic token names.
 */

import type { RadiusContextRole, RadiusScaleRole } from "./types"

export const radiusScaleRoles: RadiusScaleRole[] = [
  "none",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl",
  "full",
]

export const radiusContextRoles: RadiusContextRole[] = [
  "checkbox",
  "badge",
  "input",
  "button",
  "card",
  "dialog",
  "avatar",
]

/** CSS variable names — components consume scale OR context tokens */
export const semanticRadiusTokens = {
  scale: radiusScaleRoles.map((r) =>
    r === "none" ? "--radius-none" : `--radius-${r}`
  ),
  context: radiusContextRoles.map((r) => `--radius-${r}`),
  base: ["--radius"],
} as const

export const allSemanticRadiusTokens = [
  ...semanticRadiusTokens.base,
  ...semanticRadiusTokens.scale,
  ...semanticRadiusTokens.context,
]

/** Primitive names — FORBIDDEN in component code */
export const primitiveRadiusPattern = "--radius-{px}" as const
