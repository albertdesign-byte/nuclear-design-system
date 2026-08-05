/**
 * Neutral scale — cool gray harmonized with primary (H ≈ 269°).
 *
 * Why cool gray: Pure warm grays clash with the navy brand.
 * A subtle blue tint (chroma 0.002–0.022) creates cohesion without
 * making neutrals feel "blue." Inspired by IBM Carbon's gray palette.
 *
 * Why this scale dominates the UI: 90%+ of Medmo's interface is neutral.
 * Text, backgrounds, borders, and surfaces all derive from here.
 * Low chroma at every step reduces visual fatigue over 8+ hour sessions.
 */

import type { ColorScale } from "../types"

export const neutral: ColorScale = {
  50: {
    oklch: "98.5% 0.002 268.7",
    hex: "#F9FAFB",
    usage: "Page background (light mode), subtle surface tint",
  },
  100: {
    oklch: "97% 0.004 268.7",
    hex: "#F4F5F8",
    usage: "Muted surfaces — sidebar, table stripes, code blocks",
  },
  200: {
    oklch: "93.5% 0.006 268.7",
    hex: "#E8E9EE",
    usage: "Hover states on list items, secondary surface hover",
  },
  300: {
    oklch: "88% 0.008 268.7",
    hex: "#D5D7DD",
    usage: "Subtle borders, dividers, separators",
  },
  400: {
    oklch: "78% 0.010 268.7",
    hex: "#B5B7BE",
    usage: "Default borders, input borders, disabled borders",
  },
  500: {
    oklch: "64% 0.012 268.7",
    hex: "#898C94",
    usage: "Placeholder text, muted icons, disabled text",
  },
  600: {
    oklch: "52% 0.014 268.7",
    hex: "#656971",
    usage: "Secondary text — labels, descriptions, metadata",
  },
  700: {
    oklch: "42% 0.016 268.7",
    hex: "#494D56",
    usage: "Supporting text, secondary headings",
  },
  800: {
    oklch: "34% 0.018 268.7",
    hex: "#343842",
    usage: "Primary body text, main headings",
  },
  900: {
    oklch: "27% 0.020 268.7",
    hex: "#222630",
    usage: "High-emphasis text, data values",
  },
  950: {
    oklch: "20% 0.022 268.7",
    hex: "#121620",
    usage: "Page background (dark mode), overlay base",
  },
}
