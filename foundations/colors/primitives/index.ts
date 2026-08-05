export { base } from "./base"
export { primary } from "./primary.scale"
export { neutral } from "./neutral.scale"
export { success } from "./success.scale"
export { warning } from "./warning.scale"
export { error } from "./error.scale"
export { info } from "./info.scale"

import { base } from "./base"
import { primary } from "./primary.scale"
import { neutral } from "./neutral.scale"
import { success } from "./success.scale"
import { warning } from "./warning.scale"
import { error } from "./error.scale"
import { info } from "./info.scale"

/** All primitive palettes — for internal system use only. Components must NOT import this. */
export const primitives = {
  base,
  primary,
  neutral,
  success,
  warning,
  error,
  info,
} as const

export type PrimitivePalette = keyof typeof primitives
