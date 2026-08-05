/**
 * Public contracts — aggregated semantic token registries.
 *
 * STABLE: Token names listed here are the public API surface.
 * Adding names is minor semver. Removing/rename is major semver.
 *
 * Does NOT include primitive patterns (--spacing-*, --z-layer-*, etc.)
 */

import { allSemanticTokens as colorTokenNames, semanticTokenContract } from "../../colors/contract"
import {
  allSemanticSpacingTokens,
  semanticSpacingTokens,
  inlineSpacingRoles,
  stackSpacingRoles,
  contextSpacingRoles,
} from "../../spacing/contract"
import {
  allSemanticBreakpointTokens,
  semanticBreakpointTokens,
  breakpointSemanticNames,
  breakpointTailwindAliases,
  tailwindToSemanticBreakpoint,
  containerRoles,
  layoutRoles,
} from "../../breakpoints/contract"
import {
  allSemanticRadiusTokens,
  semanticRadiusTokens,
  radiusScaleRoles,
  radiusContextRoles,
} from "../../radius/contract"
import {
  allSemanticShadowTokens,
  semanticShadowTokens,
  shadowScaleRoles,
} from "../../shadows/contract"
import {
  allSemanticMotionTokens,
  semanticMotionPresetTokens,
  semanticMotionDurationTokens,
  semanticMotionEasingTokens,
  motionPresetRoles,
  motionDurationRoles,
  motionEasingRoles,
} from "../../motion/contract"
import {
  allSemanticOpacityTokens,
  semanticOpacityTokens,
  opacitySemanticRoles,
  opacityPresetRoles,
} from "../../opacity/contract"
import {
  allSemanticZIndexTokens,
  semanticZIndexTokens,
  zIndexLayerNames,
  zIndexStackingRules,
} from "../../z-index/contract"
import {
  allSemanticIconTokens,
  semanticIconTokens,
  iconSizeRoles,
  iconContextRoles,
} from "../../iconography/contract"
import {
  allSemanticTypographyTokens,
  semanticTypographyRoles,
} from "../../typography/contract"

/** Normalize color token names to CSS variable format */
function toCssVar(name: string): string {
  return name.startsWith("--") ? name : `--${name}`
}

const colorCssVariables = colorTokenNames.map(toCssVar)

/** Flat registry of every public CSS custom property */
export const allPublicCssVariables = [
  ...colorCssVariables,
  ...allSemanticTypographyTokens,
  ...allSemanticSpacingTokens,
  ...allSemanticBreakpointTokens,
  ...allSemanticRadiusTokens,
  ...allSemanticShadowTokens,
  ...allSemanticMotionTokens,
  ...allSemanticOpacityTokens,
  ...allSemanticZIndexTokens,
  ...allSemanticIconTokens,
] as const

/** Grouped contracts — for tooling, validation, docs generation */
export const medmoContracts = {
  colors: {
    tokens: colorTokenNames,
    cssVariables: colorCssVariables,
    groups: semanticTokenContract,
  },
  typography: {
    roles: semanticTypographyRoles,
    cssVariables: allSemanticTypographyTokens,
  },
  spacing: {
    roles: { inline: inlineSpacingRoles, stack: stackSpacingRoles, context: contextSpacingRoles },
    cssVariables: allSemanticSpacingTokens,
    groups: semanticSpacingTokens,
  },
  breakpoints: {
    viewport: breakpointSemanticNames,
    tailwindAliases: breakpointTailwindAliases,
    tailwindToSemantic: tailwindToSemanticBreakpoint,
    containers: containerRoles,
    layout: layoutRoles,
    cssVariables: allSemanticBreakpointTokens,
    groups: semanticBreakpointTokens,
  },
  radius: {
    scale: radiusScaleRoles,
    context: radiusContextRoles,
    cssVariables: [...allSemanticRadiusTokens],
    groups: semanticRadiusTokens,
  },
  shadows: {
    scale: shadowScaleRoles,
    cssVariables: allSemanticShadowTokens,
    groups: semanticShadowTokens,
  },
  motion: {
    presets: motionPresetRoles,
    durations: motionDurationRoles,
    easings: motionEasingRoles,
    cssVariables: allSemanticMotionTokens,
    presetTokens: semanticMotionPresetTokens,
    durationTokens: semanticMotionDurationTokens,
    easingTokens: semanticMotionEasingTokens,
  },
  opacity: {
    semantic: opacitySemanticRoles,
    presets: opacityPresetRoles,
    cssVariables: allSemanticOpacityTokens,
    groups: semanticOpacityTokens,
  },
  zIndex: {
    layers: zIndexLayerNames,
    stackingRules: zIndexStackingRules,
    cssVariables: allSemanticZIndexTokens,
    groups: semanticZIndexTokens,
  },
  iconography: {
    sizes: iconSizeRoles,
    contexts: iconContextRoles,
    cssVariables: allSemanticIconTokens,
    groups: semanticIconTokens,
  },
} as const

// Re-export individual contracts for tree-shaking and typed access
export {
  semanticTokenContract,
  colorTokenNames as allColorTokenNames,
  allSemanticSpacingTokens,
  semanticSpacingTokens,
  allSemanticBreakpointTokens,
  semanticBreakpointTokens,
  allSemanticRadiusTokens,
  semanticRadiusTokens,
  allSemanticShadowTokens,
  semanticShadowTokens,
  allSemanticMotionTokens,
  allSemanticOpacityTokens,
  allSemanticZIndexTokens,
  semanticZIndexTokens,
  allSemanticIconTokens,
  allSemanticTypographyTokens,
  semanticTypographyRoles,
  breakpointTailwindAliases,
  tailwindToSemanticBreakpoint,
  zIndexStackingRules,
}
