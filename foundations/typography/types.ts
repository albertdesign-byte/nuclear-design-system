/**
 * Shared types for the Medmo typography system.
 */

export type FontSizeStep =
  | "2xs"
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"

export type FontWeightStep =
  | "light"
  | "regular"
  | "medium"
  | "semibold"
  | "bold"

export type LineHeightStep = "tight" | "snug" | "normal" | "relaxed"

export type LetterSpacingStep = "tight" | "normal" | "wide" | "wider"

export interface TypographyPrimitive {
  value: string
  usage: string
}

export interface FontSizePrimitive extends TypographyPrimitive {
  px: number
}

export type SemanticTypographyRole =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "title"
  | "body-large"
  | "body"
  | "body-small"
  | "label"
  | "caption"
  | "overline"
  | "code"

export interface SemanticTypographyToken {
  role: SemanticTypographyRole
  fontFamily: "sans" | "mono"
  fontSize: FontSizeStep
  fontWeight: FontWeightStep
  lineHeight: LineHeightStep
  letterSpacing: LetterSpacingStep
  textTransform?: "uppercase"
  purpose: string
  usage: string
  doNot: string
}

export type PrimitiveReference =
  | `font-size-${FontSizeStep}`
  | `font-weight-${FontWeightStep}`
  | `line-height-${LineHeightStep}`
  | `letter-spacing-${LetterSpacingStep}`
  | "font-family-sans"
  | "font-family-mono"
