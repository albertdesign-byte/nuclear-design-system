/**
 * Public resolve helpers — semantic resolution for docs, tooling, validation.
 *
 * Excludes resolvePrimitive* — internal implementation details.
 * STABLE: function signatures. May add helpers; avoid breaking renames.
 */

import {
  resolveInlineSpacing,
  resolveStackSpacing,
  resolveContextSpacing,
} from "../../spacing/resolve"
import { resolveSemanticTypography } from "../../typography/resolve"
import {
  resolveViewportBreakpoint,
  resolveContainerToken,
  resolveLayoutToken,
  resolveAllViewportBreakpoints,
} from "../../breakpoints/resolve"
import {
  resolveRadiusScale,
  resolveRadiusContext,
  resolveRadiusBase,
  resolveAllRadiusScale,
} from "../../radius/resolve"
import { resolveShadowScale, resolveAllShadowScale } from "../../shadows/resolve"
import { resolveDuration, resolveEasing, resolvePreset, resolveAllPresets } from "../../motion/resolve"
import {
  resolveOpacitySemantic,
  resolveOpacityPreset,
  resolveAllOpacitySemantics,
} from "../../opacity/resolve"
import { resolveZIndexLayer, resolveAllZIndexLayers, isAbove } from "../../z-index/resolve"
import {
  resolveIconSize,
  resolveIconContext,
  resolveIconStroke,
  resolveIconDefault,
  resolveAllIconSizes,
} from "../../iconography/resolve"

export {
  resolveInlineSpacing,
  resolveStackSpacing,
  resolveContextSpacing,
  resolveSemanticTypography,
  resolveViewportBreakpoint,
  resolveContainerToken,
  resolveLayoutToken,
  resolveAllViewportBreakpoints,
  resolveRadiusScale,
  resolveRadiusContext,
  resolveRadiusBase,
  resolveAllRadiusScale,
  resolveShadowScale,
  resolveAllShadowScale,
  resolveDuration,
  resolveEasing,
  resolvePreset,
  resolveAllPresets,
  resolveOpacitySemantic,
  resolveOpacityPreset,
  resolveAllOpacitySemantics,
  resolveZIndexLayer,
  resolveAllZIndexLayers,
  isAbove,
  resolveIconSize,
  resolveIconContext,
  resolveIconStroke,
  resolveIconDefault,
  resolveAllIconSizes,
}

/** Namespaced resolve API — alternative to flat imports */
export const medmoResolve = {
  spacing: {
    inline: resolveInlineSpacing,
    stack: resolveStackSpacing,
    context: resolveContextSpacing,
  },
  typography: {
    role: resolveSemanticTypography,
  },
  breakpoints: {
    viewport: resolveViewportBreakpoint,
    container: resolveContainerToken,
    layout: resolveLayoutToken,
    allViewports: resolveAllViewportBreakpoints,
  },
  radius: {
    scale: resolveRadiusScale,
    context: resolveRadiusContext,
    base: resolveRadiusBase,
    all: resolveAllRadiusScale,
  },
  shadows: {
    scale: resolveShadowScale,
    all: resolveAllShadowScale,
  },
  motion: {
    duration: resolveDuration,
    easing: resolveEasing,
    preset: resolvePreset,
    allPresets: resolveAllPresets,
  },
  opacity: {
    semantic: resolveOpacitySemantic,
    preset: resolveOpacityPreset,
    all: resolveAllOpacitySemantics,
  },
  zIndex: {
    layer: resolveZIndexLayer,
    all: resolveAllZIndexLayers,
    isAbove,
  },
  iconography: {
    size: resolveIconSize,
    context: resolveIconContext,
    stroke: resolveIconStroke,
    default: resolveIconDefault,
    allSizes: resolveAllIconSizes,
  },
} as const
