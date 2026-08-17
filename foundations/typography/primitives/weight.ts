/**
 * Font weight primitives — Poppins available weights.
 *
 * Why weight-based hierarchy: Medmo builds typographic hierarchy through
 * weight + size + spacing, NOT color. Weight is the primary differentiator
 * between label (500) and body (400), heading (600) and title (500).
 */

import type { TypographyPrimitive, FontWeightStep } from "../types"

export const fontWeight: Record<FontWeightStep, TypographyPrimitive & { numeric: number }> = {
  light: {
    value: "300",
    numeric: 300,
    usage: "Rare — decorative data only, never functional UI text",
  },
  regular: {
    value: "400",
    numeric: 400,
    usage: "Body text, descriptions, default reading weight",
  },
  medium: {
    value: "500",
    numeric: 500,
    usage: "Labels, titles, moderate emphasis",
  },
  semibold: {
    value: "600",
    numeric: 600,
    usage: "Headings H1–H3, display, data emphasis",
  },
  bold: {
    value: "700",
    numeric: 700,
    usage: "Critical data values — use sparingly, never for decoration",
  },
}
