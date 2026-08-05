/**
 * Inline spacing — horizontal gaps between elements in a row.
 *
 * Why separate from stack: Horizontal and vertical rhythm serve different
 * purposes. Mixing them causes inconsistent toolbars vs form layouts.
 *
 * Use with: gap (flex/grid), padding-inline, margin-inline, column-gap.
 */

import type { InlineSpacingRole, SemanticSpacingToken } from "../types"

function inline(
  primitive: SemanticSpacingToken["primitive"],
  purpose: string,
  usage: string,
  doNot: string
): SemanticSpacingToken {
  return { primitive, purpose, usage, doNot }
}

export const inlineSpacing: Record<InlineSpacingRole, SemanticSpacingToken> = {
  xs: inline(
    "spacing-4",
    "Tight horizontal gap",
    "Icon to text in compact controls, badge internal padding, checkbox to label",
    "Section margins, page padding, vertical stacks"
  ),
  sm: inline(
    "spacing-8",
    "Default horizontal gap — 8px rhythm",
    "Button icon+label gap, inline form fields, filter chip gaps, action groups",
    "Page layout, card padding, section breaks"
  ),
  md: inline(
    "spacing-12",
    "Comfortable horizontal gap",
    "Toolbar item separation, button groups, search bar actions",
    "Default button internal gap (use sm)"
  ),
  lg: inline(
    "spacing-16",
    "Wide horizontal gap",
    "Separated action clusters, page header actions, distinct inline groups",
    "Stack spacing, form field vertical gaps"
  ),
}
