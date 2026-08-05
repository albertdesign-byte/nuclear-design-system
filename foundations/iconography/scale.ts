/**
 * Icon size primitives — internal px values only.
 *
 * Why 24px base grid: Aligns with spacing rhythm (space-page 24px) and icon-xl.
 * All sizes derive from clinical UI needs — not arbitrary Tailwind size-* mapping.
 *
 * Why four sizes only: md covers 90% of cases. Fewer decisions = more consistency.
 * xs (12px) rejected — below comfortable scan size in dense clinical tables.
 *
 * Components consume semantic icon-sm/md/lg/xl — never --icon-size-16.
 */

import type { IconSizePrimitive, IconSizePrimitivePx } from "./types"
import { iconBaseGridPx } from "./types"

function size(
  px: IconSizePrimitivePx,
  gridAligned: boolean,
  usage: string
): IconSizePrimitive {
  return {
    px,
    rem: `${px / 16}rem`,
    gridAligned,
    usage,
  }
}

export const iconSizeScale: Record<IconSizePrimitivePx, IconSizePrimitive> = {
  14: size(14, false, "Compact — badges, xs buttons only"),
  16: size(16, false, "Default — buttons, inputs, table actions, inline labels"),
  20: size(20, false, "Standalone — empty states, section auxiliary icons"),
  24: size(24, true, "Grid base — page feature icons, empty state hero (rare)"),
}

export const iconSizePrimitivePx = [14, 16, 20, 24] as const

/** Default icon dimension — icon-md */
export const iconDefaultSizePx = 16 as const

/** Base grid reference */
export { iconBaseGridPx }
