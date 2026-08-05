/**
 * Shared types for the Medmo iconography system.
 *
 * Lucide-only. Icons support comprehension — never replace text or decorate.
 * Base grid: 24px (icon-xl). Default usage: 16px (icon-md).
 */

export type IconSizePrimitivePx = 14 | 16 | 20 | 24

export type IconSizeRole = "sm" | "md" | "lg" | "xl"

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
  gapSpacing: "space-inline-xs" | "space-inline-sm" | "none"
  purpose: string
  usage: string
  doNot: string
}

/** Official library — not swappable per component */
export const iconLibrary = {
  name: "Lucide",
  package: "lucide-react",
  url: "https://lucide.dev",
} as const

export const iconBaseGridPx = 24 as const
