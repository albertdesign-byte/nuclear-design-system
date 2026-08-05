/**
 * Typography accessibility validation rules.
 *
 * Why documented at foundation level: Size and line-height decisions
 * have direct WCAG and clinical safety implications.
 */

export interface TypographyA11yRule {
  rule: string
  requirement: string
  roles: string[]
  wcag?: string
}

export const typographyA11yRules: TypographyA11yRule[] = [
  {
    rule: "Minimum functional text size",
    requirement: "14px (sm) minimum for any interactive or clinical UI text",
    roles: ["label", "body-small", "code", "body", "body-large"],
    wcag: "Best practice for clinical interfaces",
  },
  {
    rule: "Body baseline",
    requirement: "16px (base) for primary reading content",
    roles: ["body"],
    wcag: "SC 1.4.4 Resize Text",
  },
  {
    rule: "Line height minimum",
    requirement: "1.5 minimum for body text blocks",
    roles: ["body", "body-small", "body-large", "label"],
    wcag: "SC 1.4.12 Text Spacing",
  },
  {
    rule: "Caption restriction",
    requirement: "12px (xs) only for non-critical metadata — never clinical values",
    roles: ["caption"],
    wcag: "Clinical safety — not WCAG minimum alone",
  },
  {
    rule: "Overline restriction",
    requirement: "11px (2xs) only for uppercase category labels — never readable content",
    roles: ["overline"],
  },
  {
    rule: "Hierarchy without color",
    requirement: "Heading levels must be distinguishable by size/weight alone (grayscale test)",
    roles: ["display", "h1", "h2", "h3", "title"],
  },
  {
    rule: "Weight contrast",
    requirement: "Minimum 100 weight difference between body (400) and labels (500)",
    roles: ["body", "label"],
  },
  {
    rule: "Monospace for data",
    requirement: "Numeric IDs and aligned data columns use code role for scan accuracy",
    roles: ["code"],
  },
]
