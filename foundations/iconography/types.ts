/**
 * Shared types for the Medmo iconography system.
 *
 * Lucide-only. Icons support comprehension — never replace text or decorate.
 * Default usage: 16px (icon-sm).
 */

export type IconSizePrimitivePx = 12 | 16 | 20 | 24 | 32

export type IconSizeRole = "xs" | "sm" | "md" | "lg" | "xl"

export type IconContextRole = "button" | "input" | "table" | "empty-state" | "header"

export interface IconSizePrimitive {
  px: IconSizePrimitivePx
  rem: string
  /** Aligns to 24px base grid when applicable */
  gridAligned: boolean
  usage: string
}

export interface IconSizeSemantic {
  primitive: `icon-size-${IconSizePrimitivePx}`
  px: IconSizePrimitivePx
  purpose: string
  usage: string
  doNot: string
}

export interface IconContextMapping {
  size: IconSizeRole
  gapSpacing:
    | "space-inline-xs"
    | "space-inline-sm"
    | "space-button-icon-gap"
    | "none"
  purpose: string
  usage: string
  doNot: string
}

export interface IconCatalogEntry {
  name: string
  label: string
  category: "navigation" | "action" | "status"
  aliases: readonly string[]
}
