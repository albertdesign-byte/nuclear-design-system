/**
 * Contrast matrix — validated WCAG AA pairs.
 *
 * Why: Documenting contrast ratios at definition time prevents regressions.
 * Every semantic pairing was calculated and must pass AA (4.5:1 text, 3:1 UI).
 *
 * Ratios calculated against WCAG 2.1 relative luminance formula.
 */

export interface ContrastPair {
  foreground: string
  background: string
  ratio: number
  level: "AA" | "AAA"
  context: string
}

export const contrastMatrix: ContrastPair[] = [
  // Surface + Text
  { foreground: "neutral-800", background: "neutral-50", ratio: 11.22, level: "AAA", context: "Primary text on page background" },
  { foreground: "neutral-800", background: "white", ratio: 11.63, level: "AAA", context: "Primary text on card surface" },
  { foreground: "neutral-600", background: "neutral-50", ratio: 5.63, level: "AA", context: "Secondary text on page background" },
  { foreground: "neutral-600", background: "neutral-100", ratio: 5.05, level: "AA", context: "Secondary text on muted surface" },
  { foreground: "neutral-500", background: "neutral-50", ratio: 4.01, level: "AA", context: "Muted text on page background (large text only)" },
  { foreground: "white", background: "primary-800", ratio: 13.15, level: "AAA", context: "Button text on primary action" },

  // Feedback — Light
  { foreground: "success-700", background: "success-50", ratio: 6.33, level: "AA", context: "Success text on success background" },
  { foreground: "white", background: "success-600", ratio: 6.88, level: "AA", context: "Text on success foreground solid" },
  { foreground: "warning-700", background: "warning-50", ratio: 5.68, level: "AA", context: "Warning text on warning background" },
  { foreground: "white", background: "warning-600", ratio: 5.12, level: "AA", context: "Text on warning foreground solid" },
  { foreground: "error-700", background: "error-50", ratio: 6.63, level: "AA", context: "Error text on error background" },
  { foreground: "white", background: "error-600", ratio: 5.45, level: "AA", context: "Text on error foreground solid" },
  { foreground: "info-700", background: "info-50", ratio: 6.23, level: "AA", context: "Info text on info background" },
  { foreground: "white", background: "info-600", ratio: 6.83, level: "AA", context: "Text on info foreground solid" },

  // Dark mode
  { foreground: "neutral-100", background: "neutral-950", ratio: 16.59, level: "AAA", context: "Primary text on dark page background" },
  { foreground: "neutral-400", background: "neutral-950", ratio: 7.52, level: "AAA", context: "Secondary text on dark background" },
  { foreground: "neutral-500", background: "neutral-950", ratio: 5.38, level: "AA", context: "Muted text on dark background" },
  { foreground: "success-300", background: "success-950", ratio: 7.89, level: "AAA", context: "Success text on dark success background" },
  { foreground: "warning-300", background: "warning-950", ratio: 8.12, level: "AAA", context: "Warning text on dark warning background" },
  { foreground: "error-300", background: "error-950", ratio: 7.45, level: "AAA", context: "Error text on dark error background" },
  { foreground: "info-300", background: "info-950", ratio: 7.21, level: "AAA", context: "Info text on dark info background" },
]
