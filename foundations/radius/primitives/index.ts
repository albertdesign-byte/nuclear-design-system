export { radiusScale, radiusPrimitiveSteps, radiusBase } from "./scale"

import { radiusScale } from "./scale"

/** Primitive radius values — internal use only. Components must NOT import this. */
export const primitives = {
  radius: radiusScale,
} as const
