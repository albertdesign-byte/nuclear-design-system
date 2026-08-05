/**
 * Shared types for the Medmo motion system.
 *
 * Four durations. Three easings. Six presets. Nothing else in the public API.
 * Interaction rules (no bounce, no layout shift on hover) are design rules — not tokens.
 */

export type MotionDurationMs = 100 | 150 | 200 | 300

export type MotionDurationRole = "fast" | "moderate" | "default" | "slow"

export type MotionEasingRole = "in" | "out" | "in-out"

export type MotionPresetRole =
  | "hover"
  | "dropdown"
  | "modal"
  | "toast"
  | "accordion"
  | "skeleton"

export interface MotionDurationPrimitive {
  ms: MotionDurationMs
  usage: string
}

export interface MotionDurationSemantic {
  primitive: `motion-duration-${MotionDurationMs}`
  ms: MotionDurationMs
  purpose: string
  usage: string
  doNot: string
}

export interface MotionEasingPrimitive {
  /** cubic-bezier value */
  value: string
  cssKeyword: "ease-in" | "ease-out" | "ease-in-out"
  usage: string
}

export interface MotionEasingSemantic {
  primitive: `motion-ease-${MotionEasingRole}`
  role: MotionEasingRole
  purpose: string
  usage: string
  doNot: string
}

export interface MotionPreset {
  durationMs: MotionDurationMs | number
  easing: MotionEasingRole
  /** CSS transition property list or animation intent */
  properties: string[]
  /** Human-readable rules — Interaction Philosophy enforced here */
  rules: string[]
  purpose: string
  usage: string
  doNot: string
}
