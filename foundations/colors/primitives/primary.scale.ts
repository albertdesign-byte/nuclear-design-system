/**
 * Primary scale — anchored at step 800 = #242F50 (Medmo brand).
 *
 * Why OKLCH: Perceptually uniform steps. Each step was hand-tuned,
 * not algorithmically generated, to maintain consistent visual weight
 * across the scale while preserving the brand hue (H ≈ 269°).
 *
 * Why anchor at 800: #242F50 is a deep navy (~31% lightness).
 * Placing it at 500 would misrepresent the brand as a mid-tone blue.
 * Step 800 is the solid action color for buttons, links, and active states.
 *
 * Why low chroma at light steps: Subtle brand backgrounds (50–200)
 * must not compete with content during long work sessions.
 */

import type { ColorScale } from "../types"

export const primary: ColorScale = {
  50: {
    oklch: "97.5% 0.008 268.7",
    hex: "#F4F7FC",
    usage: "Selected nav background, active tab tint, subtle brand highlight",
  },
  100: {
    oklch: "94.5% 0.014 268.7",
    hex: "#E9EDF7",
    usage: "Hover on selected items, secondary brand tint",
  },
  200: {
    oklch: "89.5% 0.022 268.7",
    hex: "#D6DCEC",
    usage: "Brand-tinted borders, focus area backgrounds",
  },
  300: {
    oklch: "82% 0.032 268.7",
    hex: "#BBC4DA",
    usage: "Decorative brand borders — use sparingly",
  },
  400: {
    oklch: "70% 0.042 268.7",
    hex: "#939EB9",
    usage: "Disabled brand elements, placeholder brand accents",
  },
  500: {
    oklch: "56% 0.052 268.7",
    hex: "#687494",
    usage: "Secondary brand text on light backgrounds — limited use",
  },
  600: {
    oklch: "44% 0.058 268.7",
    hex: "#455173",
    usage: "Link hover, secondary interactive states",
  },
  700: {
    oklch: "36% 0.061 268.7",
    hex: "#303B5D",
    usage: "Primary button hover, link default on white",
  },
  800: {
    oklch: "31.24% 0.0613 268.7",
    hex: "#242F50",
    usage: "Brand anchor — primary buttons, active nav, links, focus ring base",
  },
  900: {
    oklch: "26.5% 0.056 268.7",
    hex: "#1A2340",
    usage: "Primary button pressed/active state",
  },
  950: {
    oklch: "20.5% 0.048 268.7",
    hex: "#0E152D",
    usage: "Darkest brand tone — text on light brand backgrounds only",
  },
}
