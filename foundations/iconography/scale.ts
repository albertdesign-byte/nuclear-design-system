/**
 * Icon size primitives — internal px values only.
 *
 * Components consume semantic icon-xs/sm/md/lg/xl — never --icon-size-16.
 */

import type { IconSizePrimitive, IconSizePrimitivePx } from "./types"

export const iconBaseGridPx = 24 as const

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
  12: size(12, false, "Compact — dense tables, badges, inline metadata"),
  16: size(16, false, "Default — buttons, inputs, navigation, inline labels"),
  20: size(20, false, "Emphasis — primary actions, section headers"),
  24: size(24, true, "Grid base — standalone supporting icons, empty states"),
  32: size(32, false, "Feature — empty state hero, onboarding focal (rare)"),
}

export const iconSizePrimitivePx = Object.freeze(
  Object.keys(iconSizeScale).map(Number)
) as readonly IconSizePrimitivePx[]
