/**
 * Light theme semantic color tokens.
 *
 * Why separate light/dark files: Same token NAME, different primitive VALUE.
 * Components always consume --color-text-primary; the theme decides the hex.
 * This mirrors Carbon's approach ($text-01 role never changes).
 *
 * Rule: Every value is a primitive reference string, never a raw color.
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
    background: token(bg, `${prefix} subtle background`, `${prefix} banners, badges, alert backgrounds`, "Primary button backgrounds, body text"),
    border: token(border, `${prefix} border`, `${prefix} alert borders, badge outlines, input invalid`, "Default UI borders"),
    text: token(text, `${prefix} text`, `${prefix} text on subtle backgrounds, icons, labels`, "Text on solid ${prefix} foreground — use foreground token"),
    foreground: token(foreground, `${prefix} solid background`, `${prefix} solid badges, icon circles — pair with white text`, "Large surface backgrounds"),
  }
}

export const lightSemantic = {
  surface: {
    background: token("neutral-50", "Page canvas", "Main app background", "Cards, inputs, floating panels"),
    surface: token("white", "Default container", "Cards, panels, modals content area", "Page background, floating elements"),
    surfaceRaised: token("white", "Nested container", "Card headers, nested panels, table headers on cards", "Page background, dropdowns"),
    surfaceFloating: token("white", "Floating container", "Dropdowns, popovers, select menus, tooltips", "Static cards, page sections"),
    surfaceMuted: token("neutral-100", "Muted container", "Sidebar, table stripes, secondary panels, code blocks", "Primary cards, floating elements"),
    surfaceHover: token("neutral-200", "Hover surface", "List item hover, table row hover", "Default resting state backgrounds"),
    surfaceActive: token("primary-50", "Active/selected surface", "Selected nav item, active tab background", "Error/success states"),
    overlay: token("neutral-950", "Modal backdrop base", "Dialog/drawer overlay — apply with opacity token", "Solid backgrounds"),
  },

  text: {
    primary: token("neutral-800", "Primary text", "Body text, headings, data values", "Disabled text, placeholder text"),
    secondary: token("neutral-600", "Secondary text", "Labels, descriptions, metadata, timestamps", "Primary headings, critical data"),
    muted: token("neutral-500", "Muted text", "Placeholders, hints, tertiary information", "Body text, form labels"),
    disabled: token("neutral-400", "Disabled text", "Disabled inputs, inactive menu items", "Active interactive text"),
    inverse: token("neutral-50", "Inverse text", "Text on dark backgrounds (primary buttons, dark surfaces)", "Text on light backgrounds"),
    link: token("primary-800", "Link text", "Text links, clickable inline text", "Button text, navigation labels"),
    linkHover: token("primary-700", "Link hover", "Link hover state", "Default link color, static text"),
  },

  border: {
    default: token("neutral-400", "Default border", "Input borders, card outlines, dividers", "Focus rings, semantic borders"),
    subtle: token("neutral-300", "Subtle border", "Separators, internal dividers, table row borders", "Input borders, emphasis borders"),
    strong: token("neutral-500", "Strong border", "Emphasized dividers, section separators", "Default input borders"),
  },

  action: {
    primary: token("primary-800", "Primary action background", "Primary buttons, key CTAs", "Backgrounds, text, borders"),
    primaryHover: token("primary-700", "Primary action hover", "Primary button hover state", "Default/resting state"),
    primaryActive: token("primary-900", "Primary action pressed", "Primary button active/pressed state", "Hover or default states"),
    primaryText: token("white", "Text on primary action", "Text/icons on primary buttons", "Text on light backgrounds"),
  },

  focus: {
    ring: token("primary-800", "Focus ring color", "All :focus-visible indicators — use at 50% opacity in CSS", "Static borders, decorative outlines"),
  },

  disabled: {
    background: token("neutral-100", "Disabled background", "Disabled inputs, inactive buttons background", "Active element backgrounds"),
    border: token("neutral-300", "Disabled border", "Disabled input borders", "Active borders"),
    text: token("neutral-400", "Disabled text", "Disabled labels and values", "Active text — use text-disabled token"),
  },

  feedback: {
    success: feedback("Success", "success-50", "success-300", "success-700", "success-600"),
    warning: feedback("Warning", "warning-50", "warning-300", "warning-700", "warning-600"),
    error: feedback("Error", "error-50", "error-300", "error-700", "error-600"),
    info: feedback("Info", "info-50", "info-300", "info-700", "info-600"),
  },
} as const

export type LightSemantic = typeof lightSemantic
