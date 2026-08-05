/**
 * Success scale — clinical green, desaturated.
 *
 * Why H ≈ 162° (teal-green): Reads as "normal/safe/complete" in healthcare
 * contexts (vital signs in range, completed orders). More calm than pure green (120°).
 *
 * Why desaturated: Dashboards with dozens of status chips must not feel
 * like a traffic light. Chroma peaks at ~0.08, vs. ~0.20 in typical UI greens.
 *
 * Anchor: success-700 (#28654A) for text/icons, success-50 for backgrounds.
 */

import type { ColorScale } from "../types"

export const success: ColorScale = {
  50: {
    oklch: "97% 0.015 162",
    hex: "#EDF8F2",
    usage: "Success banner/card backgrounds, subtle status highlight",
  },
  100: {
    oklch: "93.5% 0.028 162",
    hex: "#DAF0E4",
    usage: "Success hover backgrounds",
  },
  200: {
    oklch: "88% 0.045 162",
    hex: "#BEE1CE",
    usage: "Success borders (subtle), badge backgrounds",
  },
  300: {
    oklch: "80% 0.060 162",
    hex: "#9CCAB2",
    usage: "Success border default",
  },
  400: {
    oklch: "70% 0.072 162",
    hex: "#75AD91",
    usage: "Success icons on light backgrounds",
  },
  500: {
    oklch: "60% 0.078 162",
    hex: "#528F72",
    usage: "Success solid (secondary emphasis)",
  },
  600: {
    oklch: "52% 0.080 162",
    hex: "#39775B",
    usage: "Success button hover",
  },
  700: {
    oklch: "46% 0.078 162",
    hex: "#28654A",
    usage: "Success text, icons, badge text — primary success communication",
  },
  800: {
    oklch: "40% 0.072 162",
    hex: "#1B543C",
    usage: "Success text on light success backgrounds (high emphasis)",
  },
  900: {
    oklch: "34% 0.065 162",
    hex: "#0F422D",
    usage: "Success text maximum contrast",
  },
  950: {
    oklch: "28% 0.055 162",
    hex: "#073120",
    usage: "Darkest success — dark mode text",
  },
}
