/**
 * Layout tokens — responsive shell behavior for pages and templates.
 *
 * Why layout vs container: Layout tokens encode Medmo-specific page archetypes
 * (reading, dashboard, default content) and may change value across breakpoints
 * via CSS media queries in breakpoints.css.
 *
 * Cross-foundation: layout-page-padding references Spacing primitives until
 * Density (future) overrides semantic spacing globally.
 */

import type { LayoutRole, LayoutToken } from "../types"

function layout(
  cssValue: string,
  purpose: string,
  usage: string,
  doNot: string
): LayoutToken {
  return { cssValue, purpose, usage, doNot }
}

export const layoutTokens: Record<LayoutRole, LayoutToken> = {
  "page-padding": layout(
    "var(--spacing-16) → var(--spacing-24) at compact+",
    "Horizontal inset of the page shell",
    "Main content area padding-inline, mobile-first clinical apps, template page gutters",
    "Card internal padding (use space-card), table cell padding (use space-table)"
  ),

  "content-width": layout(
    "100% → min(100%, var(--container-lg)) at expanded+",
    "Default max width for page content regions",
    "Settings pages, detail pages, general list content wrapper",
    "Dashboard grids (use layout-dashboard-width), long-form prose (use layout-reading-width)"
  ),

  "reading-width": layout(
    "min(100%, 42rem)",
    "Optimal line length for long-form clinical text",
    "Clinical notes preview, consent text, help documentation, empty state descriptions",
    "Data tables, dashboard metrics, form field grids"
  ),

  "dashboard-width": layout(
    "100% → min(100%, var(--container-xl)) at expanded+",
    "Maximum width for dashboard and analytics layouts",
    "Coordinator dashboards, stat card grids, multi-widget clinical overview",
    "Focused forms, reading content, narrow modals"
  ),
}
