/**
 * Font family primitives.
 *
 * Why IBM Plex Sans Condensed: Official Medmo typeface. Condensed width
 * allows more clinical data per row without sacrificing readability —
 * critical for dense tables and long shifts.
 *
 * Why IBM Plex Mono for code: Same design language as sans. Used for
 * patient IDs, lab values, and monospace-aligned data columns.
 *
 * Font loading (next/font) lives in Technical Setup — not here.
 */

export const fontFamily = {
  sans: {
    value: '"IBM Plex Sans Condensed", sans-serif',
    stack: ['"IBM Plex Sans Condensed"', "sans-serif"],
    usage: "All UI text — headings, body, labels, captions",
  },
  mono: {
    value: '"IBM Plex Mono", monospace',
    stack: ['"IBM Plex Mono"', "monospace"],
    usage: "Code, patient IDs, lab values, monospace data columns",
  },
} as const

export const fontFamilyCss = {
  sans: "var(--font-family-sans)",
  mono: "var(--font-family-mono)",
} as const
