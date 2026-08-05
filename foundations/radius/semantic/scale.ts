/**
 * Radius scale semantics — named steps components consume.
 */

import type { RadiusScaleRole, RadiusScaleToken } from "../types"

function scale(
  primitive: RadiusScaleToken["primitive"],
  purpose: string,
  usage: string,
  doNot: string
): RadiusScaleToken {
  return { primitive, purpose, usage, doNot }
}

export const radiusScaleTokens: Record<RadiusScaleRole, RadiusScaleToken> = {
  none: scale(
    "radius-0",
    "No rounding",
    "Table outer border, full-bleed panels, nested flush containers",
    "Buttons, inputs, interactive controls"
  ),

  sm: scale(
    "radius-4",
    "Minimal corner",
    "Checkbox, small badges, compact chips",
    "Cards, modals, default buttons"
  ),

  md: scale(
    "radius-6",
    "Subtle corner",
    "Buttons xs/sm, compact inputs, nested tags",
    "Large surfaces, dialog shells"
  ),

  lg: scale(
    "radius-8",
    "Default corner — system base",
    "Buttons default, inputs, cards, tabs, selects",
    "Pills (use radius-full), checkboxes (use radius-sm)"
  ),

  xl: scale(
    "radius-12",
    "Soft corner",
    "Large cards, dialog content, popovers, dropdown panels",
    "Checkboxes, table cells"
  ),

  "2xl": scale(
    "radius-16",
    "Generous corner",
    "Special emphasis panels, empty state containers, feature highlights",
    "Everyday form controls — reads as decorative"
  ),

  full: scale(
    "radius-pill",
    "Pill / circle",
    "Avatars, status pills, toggle tracks, rounded badges",
    "Cards, dialogs, data tables"
  ),
}
