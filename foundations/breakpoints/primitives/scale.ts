/**
 * Primitive breakpoint min-widths — implementation detail only.
 *
 * Why mobile-first base (< compact): Clinical staff use phones for quick lookups.
 * Base styles target narrow viewports; each breakpoint adds capability, not overrides core UX.
 *
 * Why these px values: Align with Tailwind v4 defaults (sm/md/lg/xl/2xl) so Technical
 * Setup maps 1:1 without translation tables. Semantic names remain canonical in Medmo docs.
 *
 * Why rem in CSS: Respects user font-size preferences; px documented for design tooling.
 *
 * Components NEVER reference primitives directly — use layout/container semantic tokens.
 */

import type { BreakpointPrimitive, BreakpointSemanticName } from "../types"

function step(
  px: number,
  alias: BreakpointPrimitive["alias"],
  usage: string
): BreakpointPrimitive {
  return {
    px,
    rem: `${px / 16}rem`,
    alias,
    usage,
  }
}

export const breakpointScale: Record<BreakpointSemanticName, BreakpointPrimitive> = {
  compact: step(
    640,
    "sm",
    "Large phones landscape, small tablets — stacked toolbars, single-column forms"
  ),
  medium: step(
    768,
    "md",
    "Tablets portrait — two-column forms, collapsible sidebar, filter drawers"
  ),
  expanded: step(
    1024,
    "lg",
    "Tablets landscape, small laptops — persistent sidebar, multi-column tables"
  ),
  large: step(
    1280,
    "xl",
    "Desktop — full dashboard grids, comfortable data table width"
  ),
  wide: step(
    1536,
    "2xl",
    "Large monitors — max content width enforced, dashboard uses full canvas"
  ),
}

export const breakpointSemanticNames = Object.keys(
  breakpointScale
) as BreakpointSemanticName[]

/** Container max-width primitives — internal px caps for semantic container tokens */
export const containerMaxScale = {
  xs: { px: 480, rem: "30rem" },
  sm: { px: 640, rem: "40rem" },
  md: { px: 768, rem: "48rem" },
  lg: { px: 1024, rem: "64rem" },
  xl: { px: 1280, rem: "80rem" },
} as const

export type ContainerMaxKey = keyof typeof containerMaxScale
