/**
 * Warning scale — amber attention (ISO 3864 precaution).
 *
 * Why amber (H ≈ 73°): International standard for "caution/review needed."
 * Distinct from error (red) and success (green). In healthcare, warning
 * means "review this" — not urgent, not safe.
 *
 * Why not yellow: Pure yellow fails WCAG contrast on white backgrounds.
 * Amber at 700+ achieves 5.68:1 on warning-50 backgrounds.
 *
 * Anchor: warning-700 (#875806) for text, warning-50 for backgrounds.
 */

import type { ColorScale } from "../types"

export const warning: ColorScale = {
  50: {
    oklch: "97.5% 0.020 72",
    hex: "#FFF5E9",
    usage: "Warning banner/card backgrounds",
  },
  100: {
    oklch: "94.5% 0.040 72",
    hex: "#FEE9D0",
    usage: "Warning hover backgrounds",
  },
  200: {
    oklch: "90% 0.065 72",
    hex: "#FAD8AF",
    usage: "Warning borders (subtle)",
  },
  300: {
    oklch: "83% 0.085 72",
    hex: "#EABF8A",
    usage: "Warning border default",
  },
  400: {
    oklch: "74% 0.100 72",
    hex: "#D2A061",
    usage: "Warning icons on light backgrounds",
  },
  500: {
    oklch: "65% 0.108 72",
    hex: "#B8843D",
    usage: "Warning solid (secondary emphasis)",
  },
  600: {
    oklch: "57% 0.110 72",
    hex: "#9F6B1E",
    usage: "Warning button hover",
  },
  700: {
    oklch: "50% 0.105 72",
    hex: "#875806",
    usage: "Warning text, icons — primary warning communication",
  },
  800: {
    oklch: "44% 0.095 72",
    hex: "#724800",
    usage: "Warning text high emphasis",
  },
  900: {
    oklch: "38% 0.085 72",
    hex: "#5E3900",
    usage: "Warning text maximum contrast",
  },
  950: {
    oklch: "32% 0.075 72",
    hex: "#4A2B00",
    usage: "Darkest warning — dark mode text",
  },
}
