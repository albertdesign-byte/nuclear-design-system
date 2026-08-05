import { radiusScaleRoles } from "./contract"
import { radiusScale, radiusBase } from "./primitives/scale"
import { semanticRadius } from "./semantic"
import type { RadiusContextRole, RadiusPrimitiveStep, RadiusScaleRole } from "./types"

export function resolvePrimitiveRadius(step: RadiusPrimitiveStep) {
  return radiusScale[step]
}

export function resolveRadiusScale(role: RadiusScaleRole) {
  const token = semanticRadius.scale[role]
  const step = primitiveStepFromName(token.primitive)
  const primitive = radiusScale[step]
  return { ...token, ...primitive }
}

export function resolveRadiusContext(role: RadiusContextRole) {
  const token = semanticRadius.context[role]
  const scale = resolveRadiusScale(token.scale)
  return { ...token, px: scale.px, rem: scale.rem }
}

function primitiveStepFromName(name: string): RadiusPrimitiveStep {
  if (name === "radius-pill") return 9999
  return Number(name.replace("radius-", "")) as RadiusPrimitiveStep
}

export function resolveRadiusBase() {
  return {
    ...radiusBase,
    cssVar: "--radius",
    scaleRole: "lg" as RadiusScaleRole,
  }
}

export function resolveAllRadiusScale() {
  return radiusScaleRoles.map((role) => resolveRadiusScale(role))
}
