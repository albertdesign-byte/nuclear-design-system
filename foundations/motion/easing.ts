/**
 * Easing primitives — three curves only.
 *
 * ease-out  → entries (elements appearing)
 * ease-in   → exits (elements leaving)
 * ease-in-out → in-place state changes (hover, toggle)
 *
 * No bounce, elastic, spring, or custom bezier beyond these three.
 */

import type { MotionEasingPrimitive, MotionEasingRole, MotionEasingSemantic } from "./types"

export const easingPrimitives: Record<MotionEasingRole, MotionEasingPrimitive> = {
  in: {
    value: "cubic-bezier(0.4, 0, 1, 1)",
    cssKeyword: "ease-in",
    usage: "Exits — dropdown close, toast dismiss, modal leave",
  },
  out: {
    value: "cubic-bezier(0, 0, 0.2, 1)",
    cssKeyword: "ease-out",
    usage: "Entries — dropdown open, modal enter, toast appear",
  },
  "in-out": {
    value: "cubic-bezier(0.4, 0, 0.2, 1)",
    cssKeyword: "ease-in-out",
    usage: "State changes in place — hover, focus, switch toggle",
  },
}

function semantic(
  role: MotionEasingRole,
  purpose: string,
  usage: string,
  doNot: string
): MotionEasingSemantic {
  return {
    primitive: `motion-ease-${role}`,
    role,
    purpose,
    usage,
    doNot,
  }
}

export const easingSemantics: Record<MotionEasingRole, MotionEasingSemantic> = {
  in: semantic(
    "in",
    "Accelerating exit",
    "Leave animations, dismiss, close",
    "Hover (use in-out), modal enter (use out)"
  ),
  out: semantic(
    "out",
    "Decelerating entry",
    "Enter animations, open, show",
    "Hover, accordion height (use in-out)"
  ),
  "in-out": semantic(
    "in-out",
    "Symmetric state change",
    "Hover transitions, focus, checked state",
    "Dramatic enter/exit — use in or out instead"
  ),
}
