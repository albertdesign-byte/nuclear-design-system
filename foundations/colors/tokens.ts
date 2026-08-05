/**
 * Medmo Color System — unified export.
 *
 * Components consume CSS variables (--color-*).
 * This module is for documentation, validation, and tooling.
 */

export { primitives } from "./primitives"
export { lightSemantic, darkSemantic, surfaceArchitecture } from "./semantic"
export { focus, focusRingShadow } from "./focus/tokens"
export { resolvePrimitive, toCssOklch } from "./resolve"
export { contrastMatrix } from "./contrast-matrix"
export { semanticTokenContract, allSemanticTokens } from "./contract"
export type {
  ColorStep,
  ColorScale,
  ColorPrimitive,
  PrimitiveReference,
  SemanticColorToken,
  FocusTokens,
  FeedbackSemanticGroup,
} from "./types"
