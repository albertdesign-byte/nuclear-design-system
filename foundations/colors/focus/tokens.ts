/**
 * Focus tokens — unified focus indicators for all interactive elements.
 *
 * Why centralized: Inconsistent focus rings (ring-3 vs ring-[3px], different colors)
 * were found in the audit. Every component must consume these tokens.
 *
 * Why primary-based ring: Focus must be visible but aligned with brand.
 * Using primary-800 at 50% opacity balances visibility with calm aesthetics.
 *
 * Why 3px width: Matches existing shadcn base-nova convention (ring-3).
 * Provides sufficient visibility without looking heavy.
 *
 * Why 2px offset: Creates breathing room between element border and ring,
 * improving clarity on dense forms and data tables.
 */

import type { FocusTokens } from "../types"

export const focus: FocusTokens = {
  ringColor: {
    primitive: "primary-800",
    purpose: "Focus ring color for all interactive elements",
    usage: "Applied via box-shadow or outline on :focus-visible",
    doNot: "Do not use for decorative borders or static highlights",
  },
  ringWidth: {
    value: "3px",
    purpose: "Focus ring stroke width",
  },
  ringOffset: {
    value: "2px",
    purpose: "Gap between element edge and focus ring",
  },
}

/** CSS-ready focus ring shadow — references semantic token at runtime */
export const focusRingShadow = "0 0 0 var(--focus-ring-offset) var(--color-background), 0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--color-focus-ring)"
