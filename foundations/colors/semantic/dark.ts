/**
 * Dark theme semantic color tokens.
 *
 * Why inverted surface hierarchy: Dark mode surfaces step lighter (950 → 900 → 800),
 * not darker. This follows Material 3 and Carbon dark theme conventions.
 * Depth is communicated by lightness, not shadow.
 *
 * Why re-map text to lighter neutrals: neutral-800 text on neutral-950 bg
 * would fail contrast. Text uses 100–300 range in dark mode.
 *
 * Why feedback colors use lighter text steps: success-700 text on success-50 bg
 * fails in dark mode. Text shifts to 300–400 range; backgrounds to 950/900 tints.
 */

import type { FeedbackSemanticGroup, SemanticColorToken } from "../types"

function token(
  primitive: SemanticColorToken["primitive"],
  purpose: string,
  usage: string,
  doNot: string
): SemanticColorToken {
  return { primitive, purpose, usage, doNot }
}

function feedback(
  prefix: string,
  bg: SemanticColorToken["primitive"],
  border: SemanticColorToken["primitive"],
  text: SemanticColorToken["primitive"],
  foreground: SemanticColorToken["primitive"]
): FeedbackSemanticGroup {
  return {
    background: token(bg, `${prefix} subtle background (dark)`, `${prefix} banners, badges in dark mode`, "Primary surfaces"),
    border: token(border, `${prefix} border (dark)`, `${prefix} alert borders in dark mode`, "Default borders"),
    text: token(text, `${prefix} text (dark)`, `${prefix} text on dark subtle backgrounds`, "Text on solid foreground"),
    foreground: token(foreground, `${prefix} solid background (dark)`, `${prefix} solid badges in dark mode`, "Large surfaces"),
  }
}

export const darkSemantic = {
  surface: {
    background: token("neutral-950", "Page canvas (dark)", "Main app background in dark mode", "Cards, floating panels"),
    surface: token("neutral-900", "Default container (dark)", "Cards, panels in dark mode", "Page background"),
    surfaceRaised: token("neutral-800", "Nested container (dark)", "Card headers, nested panels in dark mode", "Page background"),
    surfaceFloating: token("neutral-800", "Floating container (dark)", "Dropdowns, popovers in dark mode", "Static cards"),
    surfaceMuted: token("neutral-900", "Muted container (dark)", "Sidebar, table stripes in dark mode", "Primary cards"),
    surfaceHover: token("neutral-800", "Hover surface (dark)", "List item hover in dark mode", "Resting backgrounds"),
    surfaceActive: token("primary-950", "Active/selected surface (dark)", "Selected nav in dark mode — subtle brand tint", "Error/success states"),
    overlay: token("neutral-950", "Modal backdrop base (dark)", "Dialog overlay in dark mode — apply with opacity", "Solid backgrounds"),
  },

  text: {
    primary: token("neutral-100", "Primary text (dark)", "Body text, headings in dark mode", "Muted or disabled text"),
    secondary: token("neutral-400", "Secondary text (dark)", "Labels, descriptions in dark mode", "Primary headings"),
    muted: token("neutral-500", "Muted text (dark)", "Placeholders, hints in dark mode", "Body text"),
    disabled: token("neutral-600", "Disabled text (dark)", "Disabled elements in dark mode", "Active text"),
    inverse: token("neutral-900", "Inverse text (dark)", "Text on light/primary surfaces in dark mode", "Text on dark surfaces"),
    link: token("primary-400", "Link text (dark)", "Links in dark mode — lighter for contrast on dark bg", "Button text"),
    linkHover: token("primary-300", "Link hover (dark)", "Link hover in dark mode", "Default link color"),
  },

  border: {
    default: token("neutral-700", "Default border (dark)", "Input borders in dark mode", "Focus rings"),
    subtle: token("neutral-800", "Subtle border (dark)", "Separators in dark mode", "Input borders"),
    strong: token("neutral-600", "Strong border (dark)", "Emphasized dividers in dark mode", "Default borders"),
  },

  action: {
    primary: token("primary-700", "Primary action (dark)", "Primary buttons in dark mode — slightly lighter for visibility", "Backgrounds"),
    primaryHover: token("primary-600", "Primary hover (dark)", "Primary button hover in dark mode", "Default state"),
    primaryActive: token("primary-800", "Primary pressed (dark)", "Primary button pressed in dark mode", "Hover state"),
    primaryText: token("white", "Text on primary (dark)", "Text on primary buttons in dark mode", "Light background text"),
  },

  focus: {
    ring: token("primary-400", "Focus ring (dark)", "Focus indicators in dark mode — lighter for visibility", "Static borders"),
  },

  disabled: {
    background: token("neutral-900", "Disabled background (dark)", "Disabled inputs in dark mode", "Active backgrounds"),
    border: token("neutral-800", "Disabled border (dark)", "Disabled borders in dark mode", "Active borders"),
    text: token("neutral-600", "Disabled text (dark)", "Disabled text in dark mode", "Active text"),
  },

  feedback: {
    success: feedback("Success", "success-950", "success-800", "success-300", "success-600"),
    warning: feedback("Warning", "warning-950", "warning-800", "warning-300", "warning-600"),
    error: feedback("Error", "error-950", "error-800", "error-300", "error-600"),
    info: feedback("Info", "info-950", "info-800", "info-300", "info-600"),
  },
} as const

export type DarkSemantic = typeof darkSemantic
