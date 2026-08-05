/**
 * Z-index primitives — internal numeric steps only.
 *
 * Why increments of 10 (0–60): Seven layers, small memorable range.
 * Room for ONE emergency insert between layers (e.g. 25) requires DS approval —
 * not ad-hoc z-9999 from components.
 *
 * Why not 100/1000/9999 scales: Encourages arbitrary overrides and arms races.
 *
 * Components NEVER reference z-layer-* or raw numbers.
 */

import type { ZIndexLayer, ZIndexPrimitive, ZIndexPrimitiveStep } from "./types"

function step(value: ZIndexPrimitiveStep, usage: string): ZIndexPrimitive {
  return { value, usage }
}

export const zIndexScale: Record<ZIndexPrimitiveStep, ZIndexPrimitive> = {
  0: step(0, "Default document flow — page content, cards, forms"),
  10: step(10, "In-page sticky — headers, columns, sidebar shell"),
  20: step(20, "Menu surfaces — Select, DropdownMenu, Combobox list"),
  30: step(30, "Detached panels — Popover, DatePicker panel, context panels"),
  40: step(40, "Contextual hints — Tooltip (always above popover/dropdown)"),
  50: step(50, "Notifications — Sonner toasts (below modal)"),
  60: step(60, "Blocking overlays — Dialog, Sheet, AlertDialog, drawer modal"),
}

export const zIndexPrimitiveSteps = [0, 10, 20, 30, 40, 50, 60] as const

/** Maps each semantic layer to its primitive step */
export const layerToPrimitive: Record<ZIndexLayer, ZIndexPrimitiveStep> = {
  base: 0,
  sticky: 10,
  dropdown: 20,
  popover: 30,
  tooltip: 40,
  toast: 50,
  modal: 60,
}
