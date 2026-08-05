/**
 * Breakpoint token contract — registry of allowed semantic token names.
 */

import type {
  BreakpointSemanticName,
  BreakpointTailwindAlias,
  ContainerRole,
  LayoutRole,
} from "./types"

export const breakpointSemanticNames: BreakpointSemanticName[] = [
  "compact",
  "medium",
  "expanded",
  "large",
  "wide",
]

/** Canonical semantic → Tailwind alias (integration layer only) */
export const breakpointTailwindAliases: Record<
  BreakpointSemanticName,
  BreakpointTailwindAlias
> = {
  compact: "sm",
  medium: "md",
  expanded: "lg",
  large: "xl",
  wide: "2xl",
}

/** Reverse lookup: Tailwind alias → semantic name */
export const tailwindToSemanticBreakpoint: Record<
  BreakpointTailwindAlias,
  BreakpointSemanticName
> = {
  sm: "compact",
  md: "medium",
  lg: "expanded",
  xl: "large",
  "2xl": "wide",
}

export const containerRoles: ContainerRole[] = ["xs", "sm", "md", "lg", "xl"]
export const layoutRoles: LayoutRole[] = [
  "page-padding",
  "content-width",
  "reading-width",
  "dashboard-width",
]

/** CSS variable names — components and templates consume ONLY these (+ layout/container) */
export const semanticBreakpointTokens = {
  container: containerRoles.map((r) => `--container-${r}`),
  layout: layoutRoles.map((r) => `--layout-${r}`),
} as const

export const allSemanticBreakpointTokens = [
  ...semanticBreakpointTokens.container,
  ...semanticBreakpointTokens.layout,
]

/**
 * Primitive names — FORBIDDEN in component code.
 * Breakpoint min-widths are for @media queries and documentation tooling only.
 */
export const primitiveBreakpointPattern = "--breakpoint-{semantic}" as const
export const primitiveContainerPattern = "--container-{role}-max" as const

/** Implicit base tier: viewports below compact (< 640px). Documented, not a CSS token. */
export const narrowViewportBase = {
  maxPx: 639,
  description: "Mobile base — stacked layouts, full-bleed tables with scroll",
} as const
