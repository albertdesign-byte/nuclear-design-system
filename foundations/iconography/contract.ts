/**
 * Iconography token contract — registry of allowed public token names.
 *
 * Five sizes. One stroke. Lucide only. Gap spacing defers to Spacing foundation.
 */

import type { IconContextRole, IconSizeRole } from "./types"
import {
  iconColorRule,
  iconContextMappings,
  iconSizeSemantics,
  rejectedIconDecisions,
} from "./semantics"

export const iconSizeRoles = Object.keys(iconSizeSemantics) as IconSizeRole[]
export const iconContextRoles = Object.keys(iconContextMappings) as IconContextRole[]

export const semanticIconSizeTokens = iconSizeRoles.map(
  (r) => `--icon-${r}`
) as `--icon-${IconSizeRole}`[]

export const semanticIconTokens = [
  ...semanticIconSizeTokens,
  "--icon-size", // default → sm
  "--icon-stroke",
] as const

export const allSemanticIconTokens = [...semanticIconTokens]

/** Primitive pattern — FORBIDDEN in component code */
export const primitiveIconSizePattern = "--icon-size-{px}" as const

export { iconColorRule, rejectedIconDecisions }
