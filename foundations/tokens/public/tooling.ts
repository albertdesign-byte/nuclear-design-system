/**
 * DS authoring & validation exports — not for component runtime.
 *
 * Import via `@medmo/tokens/tooling` or `foundations/tokens/tooling`.
 */

export { primitives as colorPrimitives } from "../../colors/primitives"
export { resolvePrimitive as resolvePrimitiveColor, toCssOklch } from "../../colors/resolve"
export { contrastMatrix } from "../../colors/contrast-matrix"
export { lightSemantic, darkSemantic } from "../../colors/semantic"
export {
  semanticColorCssNames,
  allSemanticColorCssVariables,
  focusCssNames,
  colorCssAlpha,
} from "../../colors/css-variables"
export { focus as focusTokens, focusRingShadow } from "../../colors/focus/tokens"
export { radiusBase } from "../../radius/primitives/scale"
export { motionTransformTokens } from "../../motion/presets"
export { semanticTypography } from "../../typography/semantic"
export { semanticSpacing } from "../../spacing/semantic"
export { spacingScale, spacingPrimitiveSteps } from "../../spacing/primitives"
export { semanticBreakpoints } from "../../breakpoints/semantic"
export { semanticRadius } from "../../radius/semantic"
export { semanticShadows } from "../../shadows/semantic"
export { motionPresets } from "../../motion/presets"
export { opacitySemantics, opacityPresets } from "../../opacity/semantics"
export { zIndexLayers } from "../../z-index/semantics"
export {
  iconCatalog,
  iconContextMappings,
  iconDefaultSizeRole,
  iconDocumentation,
  iconLibrary,
  iconSizeSemantics,
  iconStroke,
} from "../../iconography/semantics"
export {
  tokenContractComment,
  tokenDocumentation,
  tokenFamilies,
} from "../registry"
export { tokenCssExports, flattenTokenCssExports } from "../css-export"
export { typographyA11yRules } from "../../typography/accessibility"
export { rejectedOpacityIntents } from "../../opacity/contract"
export { rejectedZIndexIntents } from "../../z-index/contract"
export { rejectedIconDecisions } from "../../iconography/contract"
