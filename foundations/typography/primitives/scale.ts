/**
 * Font size scale — primitive implementation detail.
 *
 * Why rem: Respects user browser font preferences (accessibility).
 * Base 16px — WCAG recommended minimum for clinical content.
 *
 * Why this scale: Modular-ish (not rigid 1.25) tuned for IBM Plex Sans
 * Condensed's narrower width. Condensed faces read smaller at equal px —
 * body stays at 16px, not 14px.
 *
 * Components NEVER reference these steps directly.
 */

import type { FontSizePrimitive, FontSizeStep } from "../types"

export const fontSize: Record<FontSizeStep, FontSizePrimitive> = {
  "2xs": {
    value: "0.6875rem",
    px: 11,
    usage: "Overline only — never for readable body content",
  },
  xs: {
    value: "0.75rem",
    px: 12,
    usage: "Captions, timestamps — non-critical secondary info",
  },
  sm: {
    value: "0.875rem",
    px: 14,
    usage: "Labels, body-small, code — minimum for functional UI text",
  },
  base: {
    value: "1rem",
    px: 16,
    usage: "Default body text — clinical content baseline",
  },
  lg: {
    value: "1.125rem",
    px: 18,
    usage: "Body large, titles — emphasized reading",
  },
  xl: {
    value: "1.25rem",
    px: 20,
    usage: "H3, subsection headings",
  },
  "2xl": {
    value: "1.5rem",
    px: 24,
    usage: "H2, section headings",
  },
  "3xl": {
    value: "1.875rem",
    px: 30,
    usage: "H1, page headings",
  },
  "4xl": {
    value: "2.25rem",
    px: 36,
    usage: "Display — rare, major page titles only",
  },
}
