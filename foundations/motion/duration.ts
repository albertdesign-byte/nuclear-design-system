/**
 * Duration primitives — internal ms values only.
 *
 * Why exactly four steps: Clinical UI needs predictable, immediate response.
 * More steps = more decisions without perceptual benefit.
 *
 * Components consume semantic roles (motion-fast) or presets (motion-hover).
 * Never raw ms values or motion-duration-* in component code.
 */

import type {
  MotionDurationMs,
  MotionDurationPrimitive,
  MotionDurationRole,
  MotionDurationSemantic,
} from "./types"

function duration(ms: MotionDurationMs, usage: string): MotionDurationPrimitive {
  return { ms, usage }
}

export const durationPrimitives: Record<MotionDurationMs, MotionDurationPrimitive> = {
  100: duration(100, "Hover, focus, instant feedback — must feel immediate"),
  150: duration(150, "Dropdown, toast — quick enter/exit with minimal travel"),
  200: duration(200, "Modal, default state change — standard transition"),
  300: duration(300, "Accordion height, slow structural change — maximum for UI"),
}

function semantic(
  ms: MotionDurationMs,
  purpose: string,
  usage: string,
  doNot: string
): MotionDurationSemantic {
  return {
    primitive: `motion-duration-${ms}`,
    ms,
    purpose,
    usage,
    doNot,
  }
}

export const durationSemantics: Record<MotionDurationRole, MotionDurationSemantic> = {
  fast: semantic(
    100,
    "Immediate feedback",
    "Hover color/opacity/shadow, focus ring transitions",
    "Modals, accordion height, skeleton cycle"
  ),
  moderate: semantic(
    150,
    "Quick overlay enter",
    "Dropdown, toast slide+fade enter/exit",
    "Modal (use default), page transitions"
  ),
  default: semantic(
    200,
    "Standard state change",
    "Modal fade+scale, toggle states, tab indicator",
    "Hover (use fast), skeleton (use preset)"
  ),
  slow: semantic(
    300,
    "Structural layout animation maximum",
    "Accordion height expand/collapse",
    "Anything feeling sluggish — 300ms is the hard cap for UI"
  ),
}

export const motionDurationMsValues = [100, 150, 200, 300] as const
