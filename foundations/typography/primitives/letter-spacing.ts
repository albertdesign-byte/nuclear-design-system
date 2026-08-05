/**
 * Letter spacing primitives.
 *
 * Why tight tracking on headings: IBM Plex Sans Condensed is already narrow.
 * Slight negative tracking on large headings improves visual cohesion.
 *
 * Why wide tracking on overline: Uppercase labels at small sizes need
 * letter-spacing to maintain legibility (especially at 11px).
 */

import type { TypographyPrimitive, LetterSpacingStep } from "../types"

export const letterSpacing: Record<LetterSpacingStep, TypographyPrimitive> = {
  tight: {
    value: "-0.025em",
    usage: "Display, H1, H2 — large headings",
  },
  normal: {
    value: "0em",
    usage: "Body, labels, most UI text",
  },
  wide: {
    value: "0.025em",
    usage: "Overline, uppercase section labels",
  },
  wider: {
    value: "0.05em",
    usage: "Overline at 2xs — maximum spacing for tiny caps",
  },
}
