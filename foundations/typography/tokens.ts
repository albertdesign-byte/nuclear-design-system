/**
 * Medmo Typography System — unified export.
 */

export { primitives } from "./primitives"
export { semanticTypography, semanticRoles } from "./semantic"
export { resolveSemanticTypography } from "./resolve"
export { semanticTypographyRoles, textTokenProperties, allSemanticTypographyTokens } from "./contract"
export { typographyA11yRules } from "./accessibility"
export type {
  FontSizeStep,
  FontWeightStep,
  LineHeightStep,
  LetterSpacingStep,
  SemanticTypographyRole,
  SemanticTypographyToken,
} from "./types"
