/**
 * Base primitives — absolute white and black.
 *
 * Why: Pure white (#FFFFFF) is required for card surfaces on neutral-50
 * backgrounds. Using neutral-50 for both page and cards would eliminate
 * visual hierarchy. These are not part of any scale.
 */

export const base = {
  white: {
    oklch: "100% 0 0",
    hex: "#FFFFFF",
    usage: "Card surfaces, floating panels, input backgrounds on light mode",
  },
  black: {
    oklch: "0% 0 0",
    hex: "#000000",
    usage: "Reserved — prefer neutral-950 for dark backgrounds",
  },
} as const
