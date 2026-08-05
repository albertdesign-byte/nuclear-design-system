/**
 * Resolves a primitive reference to its OKLCH and hex values.
 *
 * Why: Semantic tokens store references like "neutral-800", not raw colors.
 * This utility is used by documentation tooling and contrast validation.
 * Components at runtime consume CSS variables — they never call this directly.
 */

import { base } from "./primitives/base"
import { primary } from "./primitives/primary.scale"
import { neutral } from "./primitives/neutral.scale"
import { success } from "./primitives/success.scale"
import { warning } from "./primitives/warning.scale"
import { error } from "./primitives/error.scale"
import { info } from "./primitives/info.scale"
import type { ColorStep, PrimitiveReference } from "./types"

const scales = {
  primary,
  neutral,
  success,
  warning,
  error,
  info,
} as const

type ScaleName = keyof typeof scales

export function resolvePrimitive(ref: PrimitiveReference): { oklch: string; hex: string } {
  if (ref === "white") return { oklch: base.white.oklch, hex: base.white.hex }
  if (ref === "black") return { oklch: base.black.oklch, hex: base.black.hex }

  const [scaleName, stepStr] = ref.split("-") as [ScaleName, string]
  const step = Number(stepStr) as ColorStep
  const scale = scales[scaleName]

  if (!scale || !scale[step]) {
    throw new Error(`Unknown primitive reference: ${ref}`)
  }

  return { oklch: scale[step].oklch, hex: scale[step].hex }
}

export function toCssOklch(oklch: string, alpha?: number): string {
  if (alpha !== undefined) {
    return `oklch(${oklch} / ${alpha})`
  }
  return `oklch(${oklch})`
}
