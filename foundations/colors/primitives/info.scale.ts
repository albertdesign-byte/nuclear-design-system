/**
 * Info scale — clear blue, distinct from Primary brand navy.
 *
 * Why H ≈ 261° (not 269°): Primary brand is navy (#242F50, H ≈ 269°).
 * Info must be visually distinct to avoid confusing informational content
 * with branded UI elements. Info blue is brighter (L ≈ 48%) and more
 * saturated (C ≈ 0.19) than primary-800.
 *
 * Why separate from primary: If a tooltip, banner, or badge uses "brand color,"
 * users interpret it as a branded action, not neutral information.
 *
 * Anchor: info-700 (#1153C6) for text, info-600 (#2564D4) for foreground solids.
 */

import type { ColorScale } from "../types"

export const info: ColorScale = {
  50: {
    oklch: "97% 0.015 261",
    hex: "#EFF5FF",
    usage: "Info banner/card backgrounds",
  },
  100: {
    oklch: "93.5% 0.035 261",
    hex: "#DDEAFF",
    usage: "Info hover backgrounds",
  },
  200: {
    oklch: "88% 0.065 261",
    hex: "#C0D9FF",
    usage: "Info borders (subtle)",
  },
  300: {
    oklch: "80% 0.100 261",
    hex: "#99BFFF",
    usage: "Info border default",
  },
  400: {
    oklch: "70% 0.140 261",
    hex: "#6B9DF5",
    usage: "Info icons on light backgrounds",
  },
  500: {
    oklch: "60% 0.170 261",
    hex: "#417CE4",
    usage: "Info solid (secondary emphasis)",
  },
  600: {
    oklch: "53% 0.185 261",
    hex: "#2564D4",
    usage: "Info foreground solid — text/icons on this use white",
  },
  700: {
    oklch: "48% 0.190 261",
    hex: "#1153C6",
    usage: "Info text, icons — primary info communication",
  },
  800: {
    oklch: "42% 0.180 261",
    hex: "#0142AD",
    usage: "Info text high emphasis",
  },
  900: {
    oklch: "36% 0.165 261",
    hex: "#003291",
    usage: "Info text maximum contrast",
  },
  950: {
    oklch: "30% 0.145 261",
    hex: "#002374",
    usage: "Darkest info — dark mode text",
  },
}
