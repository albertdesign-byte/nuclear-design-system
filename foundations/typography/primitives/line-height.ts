/**
 * Line height primitives.
 *
 * Why generous line heights: Clinical interfaces contain dense text blocks
 * (notes, descriptions, lab reports). Tight line heights cause tracking
 * errors during long reading sessions.
 *
 * Body minimum: 1.5 (WCAG recommendation for readability).
 */

import type { TypographyPrimitive, LineHeightStep } from "../types"

export const lineHeight: Record<LineHeightStep, TypographyPrimitive & { numeric: number }> = {
  tight: {
    value: "1.25",
    numeric: 1.25,
    usage: "Display, H1 — large text needs less leading",
  },
  snug: {
    value: "1.375",
    numeric: 1.375,
    usage: "H2, H3, titles — headings with sublines",
  },
  normal: {
    value: "1.5",
    numeric: 1.5,
    usage: "Body, labels, captions — default reading",
  },
  relaxed: {
    value: "1.625",
    numeric: 1.625,
    usage: "Body large, long-form clinical notes",
  },
}
