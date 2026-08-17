/**
 * CSS variable exports generated from canonical TypeScript token sources.
 *
 * Foundation CSS files remain the runtime stylesheet. They must mirror these
 * exports. Do not author independent values in CSS, Tailwind, Storybook, or
 * docs pages.
 */

import {
  colorCssAlpha,
  focusCssNames,
  semanticColorCssNames,
} from "../colors/css-variables"
import { focus } from "../colors/focus/tokens"
import { resolvePrimitive, toCssOklch } from "../colors/resolve"
import { darkSemantic, lightSemantic } from "../colors/semantic"
import type { PrimitiveReference } from "../colors/types"
import { radiusBase, radiusScale } from "../radius/primitives/scale"
import { radiusContextTokens } from "../radius/semantic/context"
import { radiusScaleTokens } from "../radius/semantic/scale"
import {
  shadowDefinitions,
  shadowDefinitionsDark,
} from "../shadows/primitives/definitions"
import { shadowScaleTokens } from "../shadows/semantic/scale"
import { semanticSpacing } from "../spacing/semantic"
import { spacingScale } from "../spacing/primitives/scale"
import { textTokenProperties } from "../typography/contract"
import { fontFamily } from "../typography/primitives/family"
import { letterSpacing } from "../typography/primitives/letter-spacing"
import { lineHeight } from "../typography/primitives/line-height"
import { fontSize } from "../typography/primitives/scale"
import { fontWeight } from "../typography/primitives/weight"
import { semanticTypography } from "../typography/semantic/roles"

export type CssVariableMap = Record<string, string>

function getByPath(source: unknown, path: string): { primitive: PrimitiveReference } {
  const value = path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key]
    }
    throw new Error(`Unknown color path: ${path}`)
  }, source)

  if (!value || typeof value !== "object" || !("primitive" in value)) {
    throw new Error(`Color path does not resolve to a token: ${path}`)
  }

  return value as { primitive: PrimitiveReference }
}

function colorValue(
  theme: typeof lightSemantic,
  cssName: keyof typeof semanticColorCssNames,
  mode: "light" | "dark"
) {
  const token = getByPath(theme, semanticColorCssNames[cssName])
  const resolved = resolvePrimitive(token.primitive)
  const alpha = colorCssAlpha[mode][cssName]
  if (alpha) {
    return `oklch(${resolved.oklch} / ${alpha})`
  }
  return toCssOklch(resolved.oklch)
}

function fontFamilyVar(role: "sans" | "component" | "mono") {
  return `var(--font-family-${role})`
}

export const spacingCssExports = {
  primitives: Object.fromEntries(
    Object.entries(spacingScale).map(([step, token]) => [
      `--spacing-${step}`,
      token.rem,
    ])
  ) as CssVariableMap,
  semantics: {
    ...Object.fromEntries(
      Object.entries(semanticSpacing.inline).map(([role, token]) => [
        `--space-inline-${role}`,
        `var(--${token.primitive})`,
      ])
    ),
    ...Object.fromEntries(
      Object.entries(semanticSpacing.stack).map(([role, token]) => [
        `--space-stack-${role}`,
        `var(--${token.primitive})`,
      ])
    ),
    ...Object.fromEntries(
      Object.entries(semanticSpacing.context).map(([role, token]) => [
        `--space-${role}`,
        `var(--${token.primitive})`,
      ])
    ),
  } as CssVariableMap,
}

export const typographyCssExports = {
  primitives: {
    "--font-family-sans": fontFamily.sans.value,
    "--font-family-component": fontFamily.component.value,
    "--font-family-mono": fontFamily.mono.value,
    ...Object.fromEntries(
      Object.entries(fontSize).map(([step, token]) => [
        `--font-size-${step}`,
        token.value,
      ])
    ),
    ...Object.fromEntries(
      Object.entries(fontWeight).map(([step, token]) => [
        `--font-weight-${step}`,
        token.value,
      ])
    ),
    ...Object.fromEntries(
      Object.entries(lineHeight).map(([step, token]) => [
        `--line-height-${step}`,
        token.value,
      ])
    ),
    ...Object.fromEntries(
      Object.entries(letterSpacing).map(([step, token]) => [
        `--letter-spacing-${step}`,
        token.value,
      ])
    ),
  } as CssVariableMap,
  semantics: Object.fromEntries(
    Object.values(semanticTypography).flatMap((token) => {
      const properties = textTokenProperties(token.role)
      return [
        [properties.fontFamily, fontFamilyVar(token.fontFamily)],
        [properties.fontSize, `var(--font-size-${token.fontSize})`],
        [properties.fontWeight, `var(--font-weight-${token.fontWeight})`],
        [properties.lineHeight, `var(--line-height-${token.lineHeight})`],
        [
          properties.letterSpacing,
          `var(--letter-spacing-${token.letterSpacing})`,
        ],
        [properties.textTransform, token.textTransform ?? "none"],
      ]
    })
  ) as CssVariableMap,
}

export const radiusCssExports = {
  primitives: {
    "--radius-0": radiusScale[0].rem,
    "--radius-4": radiusScale[4].rem,
    "--radius-6": radiusScale[6].rem,
    "--radius-8": radiusScale[8].rem,
    "--radius-12": radiusScale[12].rem,
    "--radius-16": radiusScale[16].rem,
    "--radius-pill": radiusScale[9999].rem,
  } as CssVariableMap,
  semantics: {
    ...Object.fromEntries(
      Object.entries(radiusScaleTokens).map(([role, token]) => [
        role === "none" ? "--radius-none" : `--radius-${role}`,
        `var(--${token.primitive})`,
      ])
    ),
    "--radius": `var(--${radiusBase.token})`,
    ...Object.fromEntries(
      Object.entries(radiusContextTokens).map(([role, token]) => [
        `--radius-${role}`,
        `var(--radius-${token.scale})`,
      ])
    ),
  } as CssVariableMap,
}

export const shadowCssExports = {
  primitives: Object.fromEntries(
    Object.entries(shadowDefinitions).map(([role, token]) => [
      `--shadow-layer-${role}`,
      token.value,
    ])
  ) as CssVariableMap,
  primitivesDark: Object.fromEntries(
    Object.entries(shadowDefinitionsDark).map(([role, token]) => [
      `--shadow-layer-${role}`,
      token.value,
    ])
  ) as CssVariableMap,
  semantics: Object.fromEntries(
    Object.keys(shadowScaleTokens).map((role) => [
      `--shadow-${role}`,
      `var(--shadow-layer-${role})`,
    ])
  ) as CssVariableMap,
}

export const colorCssExports = {
  light: {
    ...Object.fromEntries(
      Object.keys(semanticColorCssNames).map((cssName) => [
        cssName,
        colorValue(
          lightSemantic,
          cssName as keyof typeof semanticColorCssNames,
          "light"
        ),
      ])
    ),
    [Object.keys(focusCssNames)[0]!]: focus.ringWidth.value,
    [Object.keys(focusCssNames)[1]!]: focus.ringOffset.value,
  } as CssVariableMap,
  dark: Object.fromEntries(
    Object.keys(semanticColorCssNames).map((cssName) => [
      cssName,
      colorValue(
        darkSemantic,
        cssName as keyof typeof semanticColorCssNames,
        "dark"
      ),
    ])
  ) as CssVariableMap,
}

export const tokenCssExports = {
  colors: colorCssExports,
  spacing: spacingCssExports,
  typography: typographyCssExports,
  radius: radiusCssExports,
  shadows: shadowCssExports,
} as const

export function flattenTokenCssExports() {
  return {
    ...spacingCssExports.primitives,
    ...spacingCssExports.semantics,
    ...typographyCssExports.primitives,
    ...typographyCssExports.semantics,
    ...radiusCssExports.primitives,
    ...radiusCssExports.semantics,
    ...shadowCssExports.primitives,
    ...shadowCssExports.semantics,
    ...colorCssExports.light,
  } as CssVariableMap
}
