/**
 * Typography token contract — allowed semantic role names.
 *
 * Components consume ONLY these roles via CSS variables (--text-{role}-*).
 */

import type { SemanticTypographyRole } from "./types"

export const semanticTypographyRoles: SemanticTypographyRole[] = [
  "display",
  "h1",
  "h2",
  "h3",
  "title",
  "body-large",
  "body",
  "body-small",
  "label",
  "caption",
  "overline",
  "code",
]

/** CSS variable prefix for semantic typography */
export const TEXT_TOKEN_PREFIX = "text" as const

/** Generates property names for a role: text-h1-size, text-h1-weight, etc. */
export function textTokenProperties(role: SemanticTypographyRole) {
  return {
    fontFamily: `--${TEXT_TOKEN_PREFIX}-${role}-font-family`,
    fontSize: `--${TEXT_TOKEN_PREFIX}-${role}-size`,
    fontWeight: `--${TEXT_TOKEN_PREFIX}-${role}-weight`,
    lineHeight: `--${TEXT_TOKEN_PREFIX}-${role}-line-height`,
    letterSpacing: `--${TEXT_TOKEN_PREFIX}-${role}-letter-spacing`,
    textTransform: `--${TEXT_TOKEN_PREFIX}-${role}-text-transform`,
  }
}

/** Flat list of all semantic typography CSS variables */
export const allSemanticTypographyTokens = semanticTypographyRoles.flatMap((role) => {
  const props = textTokenProperties(role)
  return Object.values(props)
})

/** Primitive names — FORBIDDEN in component code */
export const primitiveTypographyNames = [
  "font-size-*",
  "font-weight-*",
  "line-height-*",
  "letter-spacing-*",
] as const
