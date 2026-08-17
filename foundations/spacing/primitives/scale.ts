/**
 * Primitive spacing scale — implementation detail only.
 *
 * Why 4px base: Aligns to pixel grid, works with half-rem at 16px root,
 * and matches IBM Carbon / enterprise DS conventions.
 *
 * Why 8px rhythm for components: Most UI gaps (button padding, input padding,
 * list gaps) land on 8px multiples — predictable vertical rhythm in dense clinical UIs.
 *
 * Why intermediate steps (12, 20, 28…): Precision without breaking the grid.
 * Used when 8px is too tight and 16px too loose.
 *
 * Why optical steps: 2px is reserved for hairlines and focus offsets. 6px is
 * reserved for the approved Button icon-to-label relationship.
 *
 * Components NEVER reference these directly.
 */

import type { SpacingPrimitive, SpacingPrimitiveStep } from "../types"

function step(px: SpacingPrimitiveStep, usage: string): SpacingPrimitive {
  return {
    px,
    rem: `${px / 16}rem`,
    usage,
  }
}

export const spacingScale: Record<SpacingPrimitiveStep, SpacingPrimitive> = {
  2: step(2, "Hairline only — focus offset, optical tweaks. NOT for component gaps."),
  4: step(4, "Minimum layout unit — label gaps, tight inline spacing"),
  6: step(6, "Optical exception — Button icon-to-label gap"),
  8: step(8, "Primary component rhythm — button padding, input padding, inline sm"),
  12: step(12, "Intermediate — toolbar gaps, comfortable inline md"),
  16: step(16, "Default stack md, card padding, form field gaps"),
  20: step(20, "Intermediate — compact section internal padding"),
  24: step(24, "Page padding, dialog padding, stack lg"),
  28: step(28, "Intermediate — rare, optical balance in mixed-density rows"),
  32: step(32, "Section internal gaps, form group separation"),
  36: step(36, "Intermediate — between 32 and 40"),
  40: step(40, "Large internal blocks, spacious card sections"),
  44: step(44, "Minimum touch target — WCAG 2.5.5 interactive area"),
  48: step(48, "Section spacing — between major page regions"),
  56: step(56, "Intermediate — large layout blocks"),
  64: step(64, "Major section breaks, page vertical sections"),
  72: step(72, "Intermediate — hero spacing, empty states"),
  80: step(80, "Large page margins on wide viewports"),
  96: step(96, "Maximum layout spacing — page top/bottom breathing room"),
}

export const spacingPrimitiveSteps = Object.keys(spacingScale).map(
  Number
) as SpacingPrimitiveStep[]
