/**
 * Typography token contract — derived from semantic roles.
 */

import { semanticTypography } from "./semantic/roles"
import type { SemanticTypographyRole } from "./types"

export const semanticTypographyRoles = Object.keys(
  semanticTypography
) as SemanticTypographyRole[]

export const TEXT_TOKEN_PREFIX = "text" as const

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

export const allSemanticTypographyTokens = semanticTypographyRoles.flatMap(
  (role) => Object.values(textTokenProperties(role))
)

export const primitiveTypographyNames = [
  "font-size-*",
  "font-weight-*",
  "line-height-*",
  "letter-spacing-*",
] as const
