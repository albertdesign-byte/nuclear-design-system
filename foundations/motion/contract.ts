/**
 * Motion token contract — registry of allowed public token names.
 */

import type { MotionDurationRole, MotionEasingRole, MotionPresetRole } from "./types"

export const motionDurationRoles: MotionDurationRole[] = [
  "fast",
  "moderate",
  "default",
  "slow",
]

export const motionEasingRoles: MotionEasingRole[] = ["in", "out", "in-out"]

export const motionPresetRoles: MotionPresetRole[] = [
  "hover",
  "dropdown",
  "modal",
  "toast",
  "accordion",
  "skeleton",
]

/** Primary API — presets */
export const semanticMotionPresetTokens = motionPresetRoles.map(
  (r) => `--motion-${r}`
)

/** Secondary API — duration/easing when composing new DS patterns (not app code) */
export const semanticMotionDurationTokens = motionDurationRoles.map(
  (r) => `--motion-${r}`
)

export const semanticMotionEasingTokens = motionEasingRoles.map(
  (r) => `--motion-ease-${r}`
)

/** Full transition shorthand tokens derived from presets */
export const semanticMotionTransitionTokens = motionPresetRoles.map(
  (r) => `--motion-${r}-transition`
)

export const allSemanticMotionTokens = [
  ...semanticMotionPresetTokens,
  ...semanticMotionTransitionTokens,
  ...semanticMotionDurationTokens,
  ...semanticMotionEasingTokens,
  "--motion-dropdown-offset",
  "--motion-modal-scale-from",
  "--motion-skeleton-cycle",
]

/** Primitive patterns — FORBIDDEN in component code */
export const primitiveDurationPattern = "--motion-duration-{ms}" as const
export const primitiveEasingPattern = "--motion-ease-raw-{role}" as const
