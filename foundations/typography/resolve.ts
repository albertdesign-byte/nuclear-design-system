/**
 * Resolves semantic typography role to concrete CSS values.
 * For documentation tooling and validation — not for component runtime.
 */

import { fontFamily } from "./primitives/family"
import { fontSize } from "./primitives/scale"
import { fontWeight } from "./primitives/weight"
import { lineHeight } from "./primitives/line-height"
import { letterSpacing } from "./primitives/letter-spacing"
import { semanticTypography } from "./semantic/roles"
import type { SemanticTypographyRole } from "./types"

export function resolveSemanticTypography(role: SemanticTypographyRole) {
  const token = semanticTypography[role]
  return {
    role,
    fontFamily: token.fontFamily === "mono" ? fontFamily.mono.value : fontFamily.sans.value,
    fontSize: fontSize[token.fontSize].value,
    fontSizePx: fontSize[token.fontSize].px,
    fontWeight: fontWeight[token.fontWeight].value,
    lineHeight: lineHeight[token.lineHeight].value,
    letterSpacing: letterSpacing[token.letterSpacing].value,
    textTransform: token.textTransform ?? "none",
    purpose: token.purpose,
    usage: token.usage,
    doNot: token.doNot,
  }
}
