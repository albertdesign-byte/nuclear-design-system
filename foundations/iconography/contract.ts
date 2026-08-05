/**
 * Iconography token contract — registry of allowed public token names.
 *
 * Four sizes. One stroke. Lucide only. Gap spacing defers to Spacing foundation.
 */

import type { IconContextRole, IconSizeRole } from "./types"

export const iconSizeRoles: IconSizeRole[] = ["sm", "md", "lg", "xl"]

export const iconContextRoles: IconContextRole[] = [
  "button",
  "input",
  "table",
  "empty-state",
  "header",
]

export const semanticIconSizeTokens = iconSizeRoles.map(
  (r) => `--icon-${r}`
) as `--icon-${IconSizeRole}`[]

export const semanticIconTokens = [
  ...semanticIconSizeTokens,
  "--icon-size", // default → md
  "--icon-stroke",
] as const

export const allSemanticIconTokens = [...semanticIconTokens]

/** Primitive pattern — FORBIDDEN in component code */
export const primitiveIconSizePattern = "--icon-size-{px}" as const

/** Rejected in critical review */
export const rejectedIconDecisions = [
  "icon-xs (12px) — too small for clinical scan; use icon-sm in compact UI",
  "stroke-thin (1.5) — decorative; single stroke-2 for all icons",
  "stroke-heavy (2.5+) — visual noise",
  "Heroicons, Font Awesome, custom SVG sets — Lucide only",
  "Hardcoded size-4, w-4 h-4 in components — use --icon-md",
  "Icon without text replacing critical labels",
] as const

/** Color rule — not a CSS variable; enforced in component SVG attrs */
export const iconColorRule = "currentColor" as const
