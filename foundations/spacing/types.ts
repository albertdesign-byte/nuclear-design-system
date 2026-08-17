/**
 * Shared types for the Medmo spacing system.
 *
 * Grid: 4px base unit. All values are multiples of 4 except spacing-2 (hairline).
 * Common component rhythm: 8px.
 */

export type SpacingPrimitiveStep =
  | 2
  | 4
  | 6
  | 8
  | 12
  | 16
  | 20
  | 24
  | 28
  | 32
  | 36
  | 40
  | 44
  | 48
  | 56
  | 64
  | 72
  | 80
  | 96

export interface SpacingPrimitive {
  px: SpacingPrimitiveStep
  rem: string
  usage: string
}

export type InlineSpacingRole = "xs" | "sm" | "md" | "lg"
export type StackSpacingRole = "xs" | "sm" | "md" | "lg" | "xl"

export type ContextSpacingRole =
  | "page"
  | "section"
  | "card"
  | "form"
  | "table"
  | "dialog"
  | "form-label"
  | "form-group"
  | "card-gap"
  | "button-icon-gap"
  | "button-padding-sm"
  | "button-padding-md"
  | "button-padding-lg"
  | "button-padding-xl"
  | "button-padding-xxl"
  | "touch-target-min"

export interface SemanticSpacingToken {
  primitive: `spacing-${SpacingPrimitiveStep}`
  purpose: string
  usage: string
  doNot: string
}

export type SemanticSpacingCategory = "inline" | "stack" | "context"
