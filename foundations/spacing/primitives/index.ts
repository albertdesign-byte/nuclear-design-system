export { spacingScale, spacingPrimitiveSteps } from "./scale"

import { spacingScale } from "./scale"

/** Primitive spacing values — internal use only. Components must NOT import this. */
export const primitives = {
  spacing: spacingScale,
} as const
