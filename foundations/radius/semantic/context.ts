/**
 * Radius context tokens — map UI contexts to scale steps.
 *
 * Why context layer: "radius-lg" doesn't tell a developer whether to use it
 * on a checkbox (audit: was hardcoded 4px). Context names encode intent.
 */

import type { RadiusContextRole, RadiusContextToken } from "../types"

function context(
  scale: RadiusContextToken["scale"],
  purpose: string,
  usage: string,
  doNot: string
): RadiusContextToken {
  return { scale, purpose, usage, doNot }
}

export const radiusContextTokens: Record<RadiusContextRole, RadiusContextToken> =
  {
    checkbox: context(
      "sm",
      "Checkbox corner",
      "Checkbox root, small square toggles",
      "Cards, buttons, inputs"
    ),

    badge: context(
      "sm",
      "Badge corner",
      "Badge, Tag, compact status labels",
      "Large pills with avatar (use radius-full)"
    ),

    input: context(
      "lg",
      "Form control corner",
      "Input, Textarea, Select trigger — default size",
      "Checkbox (use radius-checkbox), modals"
    ),

    button: context(
      "lg",
      "Button corner",
      "Button all sizes except icon-circle variants",
      "Cards, table cells"
    ),

    card: context(
      "lg",
      "Card surface corner",
      "Card, Panel, StatCard container",
      "Inner nested elements — often radius-md or none"
    ),

    dialog: context(
      "xl",
      "Overlay surface corner",
      "Dialog, Sheet, Popover, Dropdown content",
      "Inline buttons, form fields inside dialog"
    ),

    avatar: context(
      "full",
      "Avatar corner",
      "Avatar, circular icon buttons, pill toggles",
      "Rectangular cards or inputs"
    ),
  }
