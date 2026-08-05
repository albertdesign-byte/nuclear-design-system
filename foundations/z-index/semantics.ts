/**
 * Z-index semantic layers — the entire public API.
 *
 * Each layer = interaction priority, not visual elevation.
 * Visual depth: Colors surfaces + Shadows — not z-index values.
 */

import type { ZIndexLayer, ZIndexSemanticToken } from "./types"
import { layerToPrimitive } from "./scale"

function layer(
  name: ZIndexLayer,
  interactionPriority: string,
  usage: string,
  doNot: string
): ZIndexSemanticToken {
  const value = layerToPrimitive[name]
  return {
    primitive: `z-layer-${value}`,
    value,
    layer: name,
    interactionPriority,
    usage,
    doNot,
  }
}

export const zIndexLayers: Record<ZIndexLayer, ZIndexSemanticToken> = {
  base: layer(
    "base",
    "Default — no overlay competition",
    "Page content, cards, tables, form fields, inline UI",
    "Any floating menu, sticky header, modal — use the correct layer token"
  ),

  sticky: layer(
    "sticky",
    "Stays above scrolling content, below all portaled overlays",
    "Sticky table header, PageHeader sticky, sidebar shell, sticky filter bars",
    "Modals, dropdowns, tooltips — sticky never exceeds modal"
  ),

  dropdown: layer(
    "dropdown",
    "Menu/list surfaces — first floating interaction tier",
    "Select content, DropdownMenu, Combobox list, autocomplete menu",
    "Tooltips, modals — use higher layer; never z-9999 to 'fix' stacking"
  ),

  popover: layer(
    "popover",
    "Detached panel — above dropdown menus at page level",
    "Popover, filter panel portaled, DatePicker calendar panel, color picker",
    "Modals — use z-modal; do not merge with dropdown layer"
  ),

  tooltip: layer(
    "tooltip",
    "Contextual hint — above popover and dropdown",
    "Tooltip content — including tooltips inside popovers or dropdown triggers",
    "Modals, toasts — modal blocks interaction below it anyway"
  ),

  toast: layer(
    "toast",
    "Non-blocking notification — above tooltips, below modal",
    "Sonner toast stack, global notification bar",
    "Modal content — modal always wins; never raise toast above modal"
  ),

  modal: layer(
    "modal",
    "Blocking interaction — highest standard layer",
    "Dialog, AlertDialog, Sheet (modal mode), full-screen drawer with backdrop",
    "Arbitrary z-9999, new 'z-super-modal' from apps — extend DS instead"
  ),
}
