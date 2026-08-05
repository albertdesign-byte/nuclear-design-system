export { breakpointScale, breakpointSemanticNames, containerMaxScale } from "./scale"

import { breakpointScale, containerMaxScale } from "./scale"

/** Primitive breakpoint values — internal use only. Components must NOT import this. */
export const primitives = {
  breakpoint: breakpointScale,
  containerMax: containerMaxScale,
} as const
