/**
 * Container tokens — max-width caps for content regions.
 *
 * Why separate from breakpoints: A list page at Expanded viewport still uses
 * container-lg to prevent line lengths from breaking table scannability.
 * Containers answer "how wide should this content be" — breakpoints answer
 * "what layout mode is the viewport in".
 */

import type { ContainerRole, ContainerToken } from "../types"
import { containerMaxScale } from "../primitives/scale"

function container(
  role: ContainerRole,
  purpose: string,
  usage: string,
  doNot: string
): ContainerToken {
  const { px, rem } = containerMaxScale[role]
  return {
    primitive: `container-${role}-max`,
    maxPx: px,
    rem,
    purpose,
    usage,
    doNot,
  }
}

export const containerTokens: Record<ContainerRole, ContainerToken> = {
  xs: container(
    "xs",
    "Narrow focused content",
    "Modal forms, wizard steps, confirmation dialogs, narrow alert panels",
    "Full page layouts, data tables, dashboard grids"
  ),

  sm: container(
    "sm",
    "Single-column content",
    "Auth flows, simple registration forms, empty states, error pages",
    "Multi-column forms, tables with 4+ columns, sidebar layouts"
  ),

  md: container(
    "md",
    "Standard content column",
    "Settings sections, patient detail summaries, form layouts with 2 columns at md+",
    "Full-width clinical tables, dashboard stat grids"
  ),

  lg: container(
    "lg",
    "List and workspace width",
    "List pages with filters, clinical worklists, two-column detail + metadata",
    "Unconstrained dashboard width — use container-xl or layout-dashboard-width"
  ),

  xl: container(
    "xl",
    "Maximum application content width",
    "Dashboard main area cap, wide DataTable canvas, multi-panel clinical review",
    "Reading prose (use layout-reading-width), narrow modals (use container-xs)"
  ),
}
