/**
 * Error scale — clinical red, clear but not alarming.
 *
 * Why H ≈ 29° (red-orange): Immediately recognizable as danger/error
 * in healthcare. Slightly orange-tinted to differentiate from pure red
 * (#FF0000) which causes alarm fatigue in clinical environments.
 *
 * Why not neon red: Multiple error indicators on screen simultaneously
 * (validation + alerts + critical values) must not overwhelm the user.
 * Chroma is controlled — peak at ~0.18, not 0.25+.
 *
 * Anchor: error-700 (#AA2018) for text, error-50 for backgrounds.
 * Rule: Error is ALWAYS paired with icon + text, never color alone.
 */

import type { ColorScale } from "../types"

export const error: ColorScale = {
  50: {
    oklch: "97.5% 0.010 29",
    hex: "#FDF4F3",
    usage: "Error banner/card backgrounds, invalid field tint",
  },
  100: {
    oklch: "94.5% 0.025 29",
    hex: "#FDE7E3",
    usage: "Error hover backgrounds",
  },
  200: {
    oklch: "89% 0.050 29",
    hex: "#FACFC8",
    usage: "Error borders (subtle), invalid input border light",
  },
  300: {
    oklch: "82% 0.080 29",
    hex: "#F4B1A6",
    usage: "Error border default",
  },
  400: {
    oklch: "72% 0.120 29",
    hex: "#E68679",
    usage: "Error icons on light backgrounds",
  },
  500: {
    oklch: "62% 0.150 29",
    hex: "#D15D4F",
    usage: "Error solid (destructive button base)",
  },
  600: {
    oklch: "54% 0.165 29",
    hex: "#BB3D31",
    usage: "Destructive button hover",
  },
  700: {
    oklch: "48% 0.175 29",
    hex: "#AA2018",
    usage: "Error text, icons — primary error communication",
  },
  800: {
    oklch: "42% 0.170 29",
    hex: "#940403",
    usage: "Error text high emphasis",
  },
  900: {
    oklch: "36% 0.155 29",
    hex: "#7B0000",
    usage: "Error text maximum contrast",
  },
  950: {
    oklch: "30% 0.135 29",
    hex: "#610000",
    usage: "Darkest error — dark mode text",
  },
}
