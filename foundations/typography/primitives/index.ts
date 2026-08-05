export { fontFamily, fontFamilyCss } from "./family"
export { fontSize } from "./scale"
export { fontWeight } from "./weight"
export { lineHeight } from "./line-height"
export { letterSpacing } from "./letter-spacing"

import { fontFamily } from "./family"
import { fontSize } from "./scale"
import { fontWeight } from "./weight"
import { lineHeight } from "./line-height"
import { letterSpacing } from "./letter-spacing"

/** Primitive typography values — internal use only. Components must NOT import this. */
export const primitives = {
  fontFamily,
  fontSize,
  fontWeight,
  lineHeight,
  letterSpacing,
} as const
