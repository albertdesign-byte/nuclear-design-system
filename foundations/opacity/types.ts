/**
 * Shared types for the Medmo opacity system.
 *
 * Minimal public API — most alpha is owned by Colors (overlay, focus, disabled).
 * Opacity tokens cover alpha modifiers NOT already in color tokens.
 */

export type OpacityPrimitiveStep = 20 | 60

export type OpacitySemanticRole = "subtle" | "muted"

export type OpacityPresetRole = "skeleton"

export interface OpacityPrimitive {
  value: number
  percent: OpacityPrimitiveStep
  usage: string
}

export interface OpacitySemanticToken {
  primitive: `opacity-${OpacityPrimitiveStep}`
  value: number
  purpose: string
  usage: string
  doNot: string
}

export interface OpacityPreset {
  /** Skeleton pulse range — only infinite opacity animation allowed (with motion-skeleton) */
  from: number
  to: number
  purpose: string
  usage: string
  doNot: string
}
