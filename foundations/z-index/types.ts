/**
 * Shared types for the Medmo z-index system.
 *
 * Z-index = interaction priority — NOT visual depth (see Shadows + Colors).
 * Seven semantic layers only. No z-9999. No arbitrary numbers in components.
 */

export type ZIndexLayer =
  | "base"
  | "sticky"
  | "dropdown"
  | "popover"
  | "tooltip"
  | "toast"
  | "modal"

export type ZIndexPrimitiveStep = 0 | 10 | 20 | 30 | 40 | 50 | 60

export interface ZIndexPrimitive {
  value: ZIndexPrimitiveStep
  usage: string
}

export interface ZIndexSemanticToken {
  primitive: `z-layer-${ZIndexPrimitiveStep}`
  value: ZIndexPrimitiveStep
  layer: ZIndexLayer
  interactionPriority: string
  usage: string
  doNot: string
}

/** Fixed stacking order — lower index = lower priority */
export const zIndexStackOrder: ZIndexLayer[] = [
  "base",
  "sticky",
  "dropdown",
  "popover",
  "tooltip",
  "toast",
  "modal",
]
