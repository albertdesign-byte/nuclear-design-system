/**
 * Opacity primitives — internal percentage stops only.
 *
 * Why a small scale (5 stops): Opacity is a last resort — Colors owns most alpha.
 * Primitives exist for mapping semantics and future DS authoring — not for components.
 *
 * Why no 0–100 full scale: Encourages picking arbitrary values (opacity-37).
 * Components use semantic tokens or color tokens with baked alpha.
 */

import type { OpacityPrimitive, OpacityPrimitiveStep } from "./types"

function step(percent: OpacityPrimitiveStep, usage: string): OpacityPrimitive {
  return {
    percent,
    value: percent / 100,
    usage,
  }
}

export const opacityScale: Record<OpacityPrimitiveStep, OpacityPrimitive> = {
  20: step(20, "Subtle washes — invalid rings, feedback tints paired with color tokens"),
  60: step(60, "Reduced emphasis — decorative elements only"),
}

export const opacityPrimitiveSteps = [20, 60] as const
