/**
 * Context spacing — semantic tokens for specific UI contexts.
 *
 * Why context tokens: "16px" means nothing to a developer choosing padding
 * for a dialog vs a table cell. Context names encode intent and stay stable
 * when the primitive scale is tuned globally (or via Density modes).
 */

import type { ContextSpacingRole, SemanticSpacingToken } from "../types"

function context(
  primitive: SemanticSpacingToken["primitive"],
  purpose: string,
  usage: string,
  doNot: string
): SemanticSpacingToken {
  return { primitive, purpose, usage, doNot }
}

export const contextSpacing: Record<ContextSpacingRole, SemanticSpacingToken> = {
  page: context(
    "spacing-24",
    "Page inset padding",
    "Horizontal padding of main content area, mobile page margins, layout shell inset",
    "Card internal padding, table cells, inline gaps"
  ),

  section: context(
    "spacing-48",
    "Gap between major page sections",
    "PageHeader to content, content to pagination, settings category to category",
    "Form field gaps, card internal padding, inline spacing"
  ),

  card: context(
    "spacing-16",
    "Card internal padding",
    "Padding inside Card, Panel, StatCard — all sides unless overridden",
    "Page margins, gap between cards (use stack-md + grid gap), table cells"
  ),

  form: context(
    "spacing-16",
    "Gap between form fields in the same group",
    "Vertical gap between FormField items, input groups in one section",
    "Label to input (use stack-xs), form group breaks (use stack-xl)"
  ),

  table: context(
    "spacing-8",
    "Table cell padding",
    "TableHead and TableCell padding — optimized for dense clinical data rows",
    "Page padding, card padding, section gaps"
  ),

  dialog: context(
    "spacing-24",
    "Dialog and modal content padding",
    "DialogContent internal padding, modal body inset, drawer content padding",
    "Page padding (same value but different semantic intent), table cells"
  ),

  "form-label": context(
    "spacing-4",
    "Label to control gap",
    "Vertical gap between Label and Input/Select/Textarea",
    "Gap between separate form fields"
  ),

  "form-group": context(
    "spacing-32",
    "Gap between form sections",
    "Between fieldset groups, settings sections within a form",
    "Individual field gaps (use space-form)"
  ),

  "card-gap": context(
    "spacing-16",
    "Gap between cards in a grid",
    "Grid/flex gap when laying out multiple cards on a page",
    "Padding inside a single card (use space-card)"
  ),
}
