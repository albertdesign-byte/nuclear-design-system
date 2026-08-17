/**
 * Font family primitives.
 *
 * Poppins — design system components only.
 * IBM Plex Sans Condensed — documentation, navigation, and default UI.
 */

export const fontFamily = {
  sans: {
    value: '"IBM Plex Sans Condensed", sans-serif',
    stack: ['"IBM Plex Sans Condensed"', "sans-serif"],
    usage: "Default UI — docs shell, navigation, prose",
  },
  component: {
    value: '"Poppins", sans-serif',
    stack: ['"Poppins"', "sans-serif"],
    usage: "Design system components only",
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
