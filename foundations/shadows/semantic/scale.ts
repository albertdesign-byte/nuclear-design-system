/**
 * Shadow scale semantics — the only public shadow API.
 *
 * surfaceGuidance describes what kind of surface the shadow suggests when
 * a shadow is warranted. This is documentation intent — not a separate token layer.
 */

import type { ShadowScaleRole, ShadowScaleToken } from "../types"

function shadow(
  role: ShadowScaleRole,
  surfaceGuidance: string,
  purpose: string,
  usage: string,
  doNot: string
): ShadowScaleToken {
  return {
    primitive: `shadow-layer-${role}`,
    surfaceGuidance,
    purpose,
    usage,
    doNot,
  }
}

export const shadowScaleTokens: Record<ShadowScaleRole, ShadowScaleToken> = {
  none: shadow(
    "none",
    "Flat on page canvas (color-background) or color-surface without lift",
    "No shadow — default for most UI",
    "Tables, list rows, form fields, static cards with ring border, page sections",
    "Any case where shadow-xs would be the first shadow step — prefer ring-1 first"
  ),

  xs: shadow(
    "xs",
    "Interactive surface hover — subtle separation from parent",
    "Minimal lift for hover feedback",
    "Card hover, clickable StatCard hover, button group container hover",
    "Default resting state, modals, dropdowns at rest, permanent shadows on static content"
  ),

  sm: shadow(
    "sm",
    "color-surface-raised — resting container above background",
    "Resting raised surface when ring border is insufficient",
    "Cards without ring, dropdown trigger panels at rest, sidebar floating edge",
    "Modals, popovers (use md+), tables, default page content"
  ),

  md: shadow(
    "md",
    "color-surface-floating — detached panel above page",
    "Floating detached panels",
    "Popover content, Select dropdown, DropdownMenu, Tooltip container (with surface-floating bg)",
    "Static cards (use none/sm), dialog shells (use lg), table cells"
  ),

  lg: shadow(
    "lg",
    "Modal layer — dialog above overlay backdrop",
    "Modal and sheet content separation from dimmed backdrop",
    "Dialog content, Sheet panel, AlertDialog, drawer over overlay",
    "Inline cards, dropdowns (use md), hover states (use xs)"
  ),

  xl: shadow(
    "xl",
    "Maximum float — command surfaces over dense UI",
    "Highest shadow tier — rare",
    "Command palette, dialog on Wide viewports, full-screen overlay panels over dashboards",
    "Everyday components — if xl seems needed, review layout or z-index first"
  ),
}
