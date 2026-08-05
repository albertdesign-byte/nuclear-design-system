import { spacingScale } from "./primitives/scale"
import { semanticSpacing } from "./semantic"
import type { ContextSpacingRole, InlineSpacingRole, StackSpacingRole } from "./types"

export function resolvePrimitiveSpacing(px: keyof typeof spacingScale) {
  return spacingScale[px]
}

export function resolveInlineSpacing(role: InlineSpacingRole) {
  const token = semanticSpacing.inline[role]
  const px = Number(token.primitive.replace("spacing-", "")) as keyof typeof spacingScale
  return { ...token, px, rem: spacingScale[px].rem }
}

export function resolveStackSpacing(role: StackSpacingRole) {
  const token = semanticSpacing.stack[role]
  const px = Number(token.primitive.replace("spacing-", "")) as keyof typeof spacingScale
  return { ...token, px, rem: spacingScale[px].rem }
}

export function resolveContextSpacing(role: ContextSpacingRole) {
  const token = semanticSpacing.context[role]
  const px = Number(token.primitive.replace("spacing-", "")) as keyof typeof spacingScale
  return { ...token, px, rem: spacingScale[px].rem }
}
