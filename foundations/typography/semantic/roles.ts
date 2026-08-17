/**
 * Semantic typography tokens — the ONLY typography layer components consume.
 *
 * Why roles not sizes: A component uses `text-h2`, not `font-size-2xl`.
 * If we tighten the scale globally, every heading updates — zero component changes.
 *
 * Why these 12 roles: Covers every typographic need in a clinical enterprise app
 * without overlapping responsibilities. Each role has one job.
 */

import type { SemanticTypographyToken } from "../types"

function role(
  token: Omit<SemanticTypographyToken, "role"> & { role: SemanticTypographyToken["role"] }
): SemanticTypographyToken {
  return token
}

export const semanticTypography: Record<
  SemanticTypographyToken["role"],
  SemanticTypographyToken
> = {
  display: role({
    role: "display",
    fontFamily: "component",
    fontSize: "4xl",
    fontWeight: "semibold",
    lineHeight: "tight",
    letterSpacing: "tight",
    purpose: "Major page title — highest typographic level",
    usage: "Dashboard welcome, module landing titles — max 1 per page",
    doNot: "Card titles, section headers, body text, repeated use",
  }),

  h1: role({
    role: "h1",
    fontFamily: "component",
    fontSize: "3xl",
    fontWeight: "semibold",
    lineHeight: "tight",
    letterSpacing: "tight",
    purpose: "Primary page heading",
    usage: "PageHeader title, main screen heading",
    doNot: "Nested headings, card titles, labels",
  }),

  h2: role({
    role: "h2",
    fontFamily: "component",
    fontSize: "2xl",
    fontWeight: "semibold",
    lineHeight: "snug",
    letterSpacing: "tight",
    purpose: "Section heading within a page",
    usage: "Form sections, tab panel titles, settings groups",
    doNot: "Page title (use h1), inline emphasis",
  }),

  h3: role({
    role: "h3",
    fontFamily: "component",
    fontSize: "xl",
    fontWeight: "semibold",
    lineHeight: "snug",
    letterSpacing: "normal",
    purpose: "Subsection heading",
    usage: "Card group headers, nested panel titles, table section labels",
    doNot: "Primary navigation, form field labels",
  }),

  title: role({
    role: "title",
    fontFamily: "component",
    fontSize: "lg",
    fontWeight: "medium",
    lineHeight: "snug",
    letterSpacing: "normal",
    purpose: "Component-level title — smaller than headings",
    usage: "CardTitle, DialogTitle, list item primary text, stat labels",
    doNot: "Page headings (use h1–h3), body paragraphs",
  }),

  "body-large": role({
    role: "body-large",
    fontFamily: "component",
    fontSize: "lg",
    fontWeight: "regular",
    lineHeight: "relaxed",
    letterSpacing: "normal",
    purpose: "Emphasized body content",
    usage: "Intro paragraphs, clinical summaries, featured descriptions",
    doNot: "Default UI text (use body), headings",
  }),

  body: role({
    role: "body",
    fontFamily: "component",
    fontSize: "base",
    fontWeight: "regular",
    lineHeight: "normal",
    letterSpacing: "normal",
    purpose: "Default reading text — clinical content baseline",
    usage: "Paragraphs, descriptions, table cell text, general UI copy",
    doNot: "Headings, labels, captions for critical data",
  }),

  "body-small": role({
    role: "body-small",
    fontFamily: "component",
    fontSize: "sm",
    fontWeight: "regular",
    lineHeight: "normal",
    letterSpacing: "normal",
    purpose: "Secondary body content at minimum functional size",
    usage: "Helper text, secondary descriptions, compact table cells",
    doNot: "Primary clinical data, legal text, critical instructions",
  }),

  label: role({
    role: "label",
    fontFamily: "component",
    fontSize: "sm",
    fontWeight: "medium",
    lineHeight: "normal",
    letterSpacing: "normal",
    purpose: "Form and UI control labels",
    usage: "Input labels, checkbox labels, select labels, field identifiers",
    doNot: "Body paragraphs, headings, placeholder text styling",
  }),

  caption: role({
    role: "caption",
    fontFamily: "component",
    fontSize: "xs",
    fontWeight: "regular",
    lineHeight: "normal",
    letterSpacing: "normal",
    purpose: "Tertiary supporting text",
    usage: "Timestamps, metadata, image captions, non-critical annotations",
    doNot: "Clinical values, dosages, patient identifiers, form labels",
  }),

  overline: role({
    role: "overline",
    fontFamily: "component",
    fontSize: "2xs",
    fontWeight: "medium",
    lineHeight: "normal",
    letterSpacing: "wider",
    textTransform: "uppercase",
    purpose: "Section category labels above headings",
    usage: "Category label above h1/h2 ('PATIENTS', 'SETTINGS')",
    doNot: "Body text, form labels, readable sentences",
  }),

  code: role({
    role: "code",
    fontFamily: "mono",
    fontSize: "sm",
    fontWeight: "regular",
    lineHeight: "normal",
    letterSpacing: "normal",
    purpose: "Monospace data and code",
    usage: "Patient IDs, order numbers, lab values, inline code, JSON snippets",
    doNot: "General UI text, headings, prose paragraphs",
  }),
}

export const semanticRoles = Object.keys(semanticTypography) as SemanticTypographyToken["role"][]
