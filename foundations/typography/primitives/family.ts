/**
 * Font family primitives.
 *
 * Poppins — official Medmo typeface for design system components.
 * IBM Plex Sans Condensed — library documentation chrome only, not a Medmo product typeface.
 */

export const fontFamily = {
  sans: {
    value: '"IBM Plex Sans Condensed", sans-serif',
    stack: ['"IBM Plex Sans Condensed"', "sans-serif"],
    usage: "Library documentation chrome only — not a Medmo product typeface",
  },
  component: {
    value: '"Poppins", sans-serif',
    stack: ['"Poppins"', "sans-serif"],
    usage: "Official Medmo typeface for components, product UI, and application screens",
  },
  mono: {
    value: "var(--font-family-sans)",
    stack: ['"IBM Plex Sans Condensed"', "sans-serif"],
    usage: "Code in docs; component code inherits component font",
  },
} as const

export const fontFamilyCss = {
  sans: "var(--font-family-sans)",
  component: "var(--font-family-component)",
  mono: "var(--font-family-mono)",
} as const
