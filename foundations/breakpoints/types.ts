/**
 * Shared types for the Medmo breakpoint and layout system.
 *
 * Breakpoints define viewport behavior — not just min-widths.
 * Semantic names (Compact, Medium, …) are canonical; Tailwind aliases (sm, md, …)
 * exist for framework integration during Technical Setup.
 */

/** Canonical semantic breakpoint names */
export type BreakpointSemanticName =
  | "compact"
  | "medium"
  | "expanded"
  | "large"
  | "wide"

/** Tailwind v4 default aliases — integration layer only, not for component logic */
export type BreakpointTailwindAlias = "sm" | "md" | "lg" | "xl" | "2xl"

export interface BreakpointPrimitive {
  /** Min-width in pixels — mobile-first base applies below compact */
  px: number
  rem: string
  alias: BreakpointTailwindAlias
  usage: string
}

export interface BreakpointSemanticToken {
  primitive: `breakpoint-${BreakpointSemanticName}`
  alias: BreakpointTailwindAlias
  layoutBehavior: string
  usage: string
  doNot: string
}

export type ContainerRole = "xs" | "sm" | "md" | "lg" | "xl"

export interface ContainerToken {
  primitive: `container-${ContainerRole}-max`
  maxPx: number
  rem: string
  purpose: string
  usage: string
  doNot: string
}

export type LayoutRole =
  | "page-padding"
  | "content-width"
  | "reading-width"
  | "dashboard-width"

export interface LayoutToken {
  /** May reference container tokens or spacing primitives — responsive in CSS */
  cssValue: string
  purpose: string
  usage: string
  doNot: string
}

export type SemanticBreakpointCategory = "viewport" | "container" | "layout"
