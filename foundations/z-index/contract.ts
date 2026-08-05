/**
 * Z-index token contract — registry of allowed public token names.
 *
 * Entire public API: 7 semantic layers. Nothing else without DS approval.
 */

import type { ZIndexLayer } from "./types"
import { zIndexStackOrder } from "./types"

export const zIndexLayerNames: ZIndexLayer[] = [...zIndexStackOrder]

/** Public CSS variables — components consume ONLY these */
export const semanticZIndexTokens = zIndexLayerNames.map(
  (layer) => `--z-${layer}`
) as `--z-${ZIndexLayer}`[]

export const allSemanticZIndexTokens = [...semanticZIndexTokens]

/** Primitive pattern — FORBIDDEN in component code */
export const primitiveZIndexPattern = "--z-layer-{step}" as const

/** Documented stacking rules — design rules, not extra tokens */
export const zIndexStackingRules = [
  "tooltip > popover > dropdown (sibling floating UI)",
  "modal > toast > tooltip (blocking vs non-blocking)",
  "sticky < dropdown (sticky never competes with portaled menus)",
  "sticky < modal (sticky headers dim under modal backdrop)",
  "Never create new levels from a component",
  "Never use numeric z-index in component code",
] as const

/** Rejected — do not add without Foundation review */
export const rejectedZIndexIntents = [
  "z-sidebar — use z-sticky for persistent nav shell",
  "z-drawer — use z-modal when modal, z-popover when non-blocking",
  "z-9999 / z-max — arms race anti-pattern",
  "z-dropdown-inside-popover — use z-popover or z-dropdown per nesting rules in docs",
] as const
