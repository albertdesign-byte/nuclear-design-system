export { radiusScaleTokens } from "./scale"
export { radiusContextTokens } from "./context"

import { radiusScaleTokens } from "./scale"
import { radiusContextTokens } from "./context"

export const semanticRadius = {
  scale: radiusScaleTokens,
  context: radiusContextTokens,
} as const
