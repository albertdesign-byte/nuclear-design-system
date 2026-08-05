/**
 * Stack spacing — vertical gaps between elements in a column.
 *
 * Why vertical tokens: Clinical UIs stack information — patient header,
 * tabs, table, footer. Consistent vertical rhythm reduces scan fatigue.
 *
 * Use with: gap (flex-col/grid rows), padding-block, margin-block, row-gap.
 */

import type { SemanticSpacingToken, StackSpacingRole } from "../types"

function stack(
  primitive: SemanticSpacingToken["primitive"],
  purpose: string,
  usage: string,
  doNot: string
): SemanticSpacingToken {
  return { primitive, purpose, usage, doNot }
}

export const stackSpacing: Record<StackSpacingRole, SemanticSpacingToken> = {
  xs: stack(
    "spacing-4",
    "Minimal vertical gap",
    "Label to input, caption below field, metadata under title",
    "Between form fields, section breaks"
  ),
  sm: stack(
    "spacing-8",
    "Tight vertical stack — 8px rhythm",
    "Related list items, compact metadata lines, dense card content",
    "Page sections, dialog padding"
  ),
  md: stack(
    "spacing-16",
    "Default vertical gap between components",
    "Form fields in a group, card header to content, list item groups",
    "Major page sections (use space-section)"
  ),
  lg: stack(
    "spacing-24",
    "Comfortable vertical gap",
    "Between distinct card blocks, dialog header to body, panel sections",
    "Page-level section breaks (use space-section)"
  ),
  xl: stack(
    "spacing-32",
    "Large vertical gap",
    "Form group separation, settings category blocks, empty state to CTA",
    "Page padding (use space-page)"
  ),
}
