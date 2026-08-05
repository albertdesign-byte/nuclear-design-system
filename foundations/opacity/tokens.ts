export { opacityScale, opacityPrimitiveSteps } from "./scale"
export { opacitySemantics, opacityPresets } from "./semantics"
export {
  resolvePrimitiveOpacity,
  resolveOpacitySemantic,
  resolveOpacityPreset,
  resolveAllOpacitySemantics,
} from "./resolve"
export {
  allSemanticOpacityTokens,
  semanticOpacityTokens,
  semanticOpacityPresetTokens,
  opacitySemanticRoles,
  opacityPresetRoles,
  rejectedOpacityIntents,
} from "./contract"
export type {
  OpacityPrimitiveStep,
  OpacitySemanticRole,
  OpacityPresetRole,
  OpacityPrimitive,
  OpacitySemanticToken,
  OpacityPreset,
} from "./types"
