/**
 * Token layer architecture — documentation constant.
 *
 * Describes how Foundations relate. Does not add tokens.
 */

export const TOKEN_AGGREGATION_VERSION = "1.0.0" as const

export const tokenLayers = {
  principles: {
    location: "docs/design-system/principles/",
    role: "Philosophy — why before what",
    publicEntry: false,
  },
  foundations: {
    location: "foundations/{name}/",
    role: "Design decisions — framework-agnostic token definitions",
    publicEntry: false,
    note: "Do not import directly from apps — use foundations/tokens",
  },
  aggregation: {
    location: "foundations/tokens/",
    role: "Public API — single entry point for all consumers",
    publicEntry: true,
  },
  technicalSetup: {
    location: "src/app/globals.css, tailwind @theme",
    role: "Framework mapping — imports aggregation CSS, maps to utilities",
    publicEntry: false,
    status: "pending",
  },
  components: {
    location: "src/components/",
    role: "Primitives, composites, patterns — consume public CSS vars",
    publicEntry: false,
    status: "pending",
  },
} as const

/** CSS import order — mirrors index.css */
export const cssImportOrder = [
  "colors",
  "typography",
  "spacing",
  "breakpoints",
  "radius",
  "shadows",
  "motion",
  "opacity",
  "z-index",
  "iconography",
] as const

/**
 * Semantic token prefix registry — for lint rules and documentation.
 * Flat list lives in public/contracts.ts → allPublicCssVariables
 */
export const tokenPrefixGuide = {
  color: "--color-",
  focus: "--focus-",
  text: "--text-{role}-",
  space: "--space-",
  container: "--container-",
  layout: "--layout-",
  radius: "--radius-",
  shadow: "--shadow-",
  motion: "--motion-",
  opacity: "--opacity-",
  zIndex: "--z-",
  icon: "--icon-",
} as const
