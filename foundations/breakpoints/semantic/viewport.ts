/**
 * Viewport breakpoint semantics — behavior and intent per viewport tier.
 *
 * Why semantic names over px: "Expanded" communicates layout capability;
 * "1024px" does not tell a developer when to show a persistent sidebar.
 */

import type { BreakpointSemanticName, BreakpointSemanticToken } from "../types"

function viewport(
  name: BreakpointSemanticName,
  alias: BreakpointSemanticToken["alias"],
  layoutBehavior: string,
  usage: string,
  doNot: string
): BreakpointSemanticToken {
  return {
    primitive: `breakpoint-${name}`,
    alias,
    layoutBehavior,
    usage,
    doNot,
  }
}

export const viewportBreakpoints: Record<
  BreakpointSemanticName,
  BreakpointSemanticToken
> = {
  compact: viewport(
    "compact",
    "sm",
    "Stacked navigation; full-width tables with horizontal scroll; single-column forms",
    "Minimum width for side-by-side toolbar actions; switch page padding to comfortable inset",
    "Persistent sidebar, multi-column form grids, fixed table column sets"
  ),

  medium: viewport(
    "medium",
    "md",
    "Two-column form layouts; sidebar as overlay/drawer; filter panels inline",
    "Settings pages with nav + content; split detail views on tablets",
    "Three-column dashboards, full DataTable without scroll on narrow columns"
  ),

  expanded: viewport(
    "expanded",
    "lg",
    "Persistent sidebar; multi-column tables; PageHeader with inline actions",
    "List pages, clinical dashboards with sidebar, two-column detail layouts",
    "Ultra-wide unconstrained content — use container tokens to cap width"
  ),

  large: viewport(
    "large",
    "xl",
    "Full dashboard grid; comfortable table column count; modal max-width lg",
    "Primary desktop clinical workflow; coordinator dashboards",
    "Layouts that stretch edge-to-edge on 1920px monitors without container-xl"
  ),

  wide: viewport(
    "wide",
    "2xl",
    "Max content width enforced; dashboard canvas uses layout-dashboard-width",
    "Large monitor workstations; multi-panel clinical review",
    "Arbitrary wider breakpoints — this is the system maximum tier"
  ),
}
