export { inlineSpacing } from "./inline"
export { stackSpacing } from "./stack"
export { contextSpacing } from "./context"

import { inlineSpacing } from "./inline"
import { stackSpacing } from "./stack"
import { contextSpacing } from "./context"

export const semanticSpacing = {
  inline: inlineSpacing,
  stack: stackSpacing,
  context: contextSpacing,
} as const
