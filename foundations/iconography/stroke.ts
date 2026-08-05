/**
 * Icon stroke — single value for entire product.
 *
 * Critical review: stroke-thin (1.5) rejected — thin stroke reads decorative
 * and reduces visibility in clinical scanning. One stroke = one decision.
 *
 * Lucide default is 2 — matches Medmo precision without hairline fragility.
 */

export const iconStroke = {
  width: 2,
  cssValue: "2",
  purpose: "Universal stroke width for all Lucide icons",
  usage: "Every icon — buttons, inputs, tables, empty states, headers",
  doNot: "Per-icon stroke overrides, stroke 1 or 1.5 for 'elegance', mixed libraries",
} as const
