/**
 * Primitive radius scale — implementation detail only.
 *
 * Why subtle scale (4–16px): Medmo interfaces are precise and professional.
 * Large radii read as consumer/playful — incompatible with clinical trust.
 *
 * Why 8px base (--radius-lg): Slightly tighter than legacy shadcn 10px;
 * aligns with checkbox audit finding (4px) and card/button harmony.
 *
 * Why radius-full as 9999px: Pill shape without layout bugs from 50%.
 *
 * Components NEVER reference primitives directly.
 */

import type { RadiusPrimitive, RadiusPrimitiveStep } from "../types"

function step(px: RadiusPrimitiveStep, usage: string): RadiusPrimitive {
  if (px === 9999) {
    return { px, rem: "9999px", usage }
  }
  return {
    px,
    rem: `${px / 16}rem`,
    usage,
  }
}

export const radiusScale: Record<RadiusPrimitiveStep, RadiusPrimitive> = {
  0: step(0, "Sharp corners — tables, dividers, full-bleed panels"),
  4: step(4, "Minimal round — checkbox, small badges"),
  6: step(6, "Subtle — compact buttons, inputs sm"),
  8: step(8, "Default — buttons, cards, inputs, tabs"),
  12: step(12, "Soft — large cards, modals, popovers"),
  16: step(16, "Generous — special containers, marketing-free emphasis panels"),
  9999: step(9999, "Pill — avatars, status pills, toggle track ends"),
}

export const radiusPrimitiveSteps = Object.keys(radiusScale).map(
  Number
) as RadiusPrimitiveStep[]

/** System default — maps to radius-lg (8px) */
export const radiusBase = {
  px: 8,
  rem: "0.5rem",
  token: "radius-lg" as const,
}
