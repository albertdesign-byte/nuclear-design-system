import { opacityScale } from "./scale"
import { opacityPresets, opacitySemantics } from "./semantics"
import type { OpacityPresetRole, OpacityPrimitiveStep, OpacitySemanticRole } from "./types"

export function resolvePrimitiveOpacity(step: OpacityPrimitiveStep) {
  return opacityScale[step]
}

export function resolveOpacitySemantic(role: OpacitySemanticRole) {
  const token = opacitySemantics[role]
  const step = Number(token.primitive.replace("opacity-", "")) as OpacityPrimitiveStep
  const primitive = opacityScale[step]
  return { ...token, ...primitive }
}

export function resolveOpacityPreset(role: OpacityPresetRole) {
  const preset = opacityPresets[role]
  return {
    ...preset,
    cssVars: {
      from: `--opacity-${role}-from`,
      to: `--opacity-${role}-to`,
    },
  }
}

export function resolveAllOpacitySemantics() {
  return (["subtle", "muted"] as const).map(resolveOpacitySemantic)
}
