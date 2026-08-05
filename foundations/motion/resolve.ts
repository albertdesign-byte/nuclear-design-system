import { durationPrimitives, durationSemantics } from "./duration"
import { easingPrimitives, easingSemantics } from "./easing"
import { motionPresets, motionTransformTokens } from "./presets"
import type { MotionDurationRole, MotionEasingRole, MotionPresetRole } from "./types"

export function resolveDuration(role: MotionDurationRole) {
  const semantic = durationSemantics[role]
  const primitive = durationPrimitives[semantic.ms]
  return { ...semantic, ...primitive }
}

export function resolveEasing(role: MotionEasingRole) {
  const semantic = easingSemantics[role]
  const primitive = easingPrimitives[role]
  return { ...semantic, ...primitive }
}

export function resolvePreset(role: MotionPresetRole) {
  const preset = motionPresets[role]
  const easing = easingPrimitives[preset.easing]
  return {
    ...preset,
    easingValue: easing.value,
    cssVar: `--motion-${role}`,
    transitionVar: `--motion-${role}-transition`,
  }
}

export function resolveAllPresets() {
  return (Object.keys(motionPresets) as MotionPresetRole[]).map(resolvePreset)
}

export { motionTransformTokens }
