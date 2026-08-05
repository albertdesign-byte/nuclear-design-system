import { shadowScaleRoles } from "./contract"
import { shadowDefinitions } from "./primitives/definitions"
import { semanticShadows } from "./semantic"
import type { ShadowScaleRole } from "./types"

export function resolvePrimitiveShadow(role: ShadowScaleRole) {
  return shadowDefinitions[role]
}

export function resolveShadowScale(role: ShadowScaleRole) {
  const token = semanticShadows.scale[role]
  const primitive = shadowDefinitions[role]
  return { ...token, boxShadow: primitive.value }
}

export function resolveAllShadowScale() {
  return shadowScaleRoles.map((role) => resolveShadowScale(role))
}
