import { iconSizeScale, iconDefaultSizePx, iconBaseGridPx } from "./scale"
import { iconStroke } from "./stroke"
import { iconContextMappings, iconSizeSemantics } from "./semantics"
import type { IconContextRole, IconSizePrimitivePx, IconSizeRole } from "./types"

export function resolvePrimitiveIconSize(px: IconSizePrimitivePx) {
  return iconSizeScale[px]
}

export function resolveIconSize(role: IconSizeRole) {
  const semantic = iconSizeSemantics[role]
  const primitive = iconSizeScale[semantic.px]
  return {
    ...semantic,
    ...primitive,
    cssVar: `--icon-${role}`,
  }
}

export function resolveIconContext(role: IconContextRole) {
  const mapping = iconContextMappings[role]
  const size = resolveIconSize(mapping.size)
  return {
    ...mapping,
    sizeResolved: size,
    gapCssVar: mapping.gapSpacing === "none" ? null : `var(--${mapping.gapSpacing})`,
  }
}

export function resolveIconStroke() {
  return { ...iconStroke, cssVar: "--icon-stroke" as const }
}

export function resolveIconDefault() {
  return {
    px: iconDefaultSizePx,
    cssVar: "--icon-size",
    role: "md" as IconSizeRole,
    baseGridPx: iconBaseGridPx,
  }
}

export function resolveAllIconSizes() {
  return (["sm", "md", "lg", "xl"] as const).map(resolveIconSize)
}
