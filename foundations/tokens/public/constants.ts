/**
 * Public constants — essentials for runtime consumers.
 *
 * DS authoring metadata lives in `./tooling.ts` (via `@medmo/tokens/tooling`).
 */

export { tokenCreationPrinciple } from "../../token-principle"
export { surfaceArchitecture } from "../../colors/semantic/surfaces"
export { focus, focusRingShadow } from "../../colors/focus/tokens"
export { textTokenProperties, TEXT_TOKEN_PREFIX } from "../../typography/contract"
export { narrowViewportBase } from "../../breakpoints/contract"
export { zIndexStackOrder } from "../../z-index/types"
export { iconBaseGridPx } from "../../iconography/scale"
export {
  iconColorRule,
  iconDefaultSizePx,
  iconLibrary,
  iconStroke,
} from "../../iconography/semantics"

/** CSS runtime entry path — stable relative to repo root */
export const CSS_ENTRY_PATH = "foundations/tokens/index.css" as const

/** TypeScript public entry path */
export const TS_ENTRY_PATH = "foundations/tokens" as const
