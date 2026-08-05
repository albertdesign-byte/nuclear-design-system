/**
 * Shared types for the Medmo radius system.
 *
 * Subtle, discrete corners — aligned to Medmo brand (precise, not playful).
 * Base default: 8px (radius-lg).
 */

export type RadiusPrimitiveStep =
  | 0
  | 4
  | 6
  | 8
  | 12
  | 16
  | 9999

export interface RadiusPrimitive {
  px: number
  rem: string
  usage: string
}

export type RadiusScaleRole =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full"

export type RadiusPrimitiveName =
  | "radius-0"
  | "radius-4"
  | "radius-6"
  | "radius-8"
  | "radius-12"
  | "radius-16"
  | "radius-pill"

export interface RadiusScaleToken {
  primitive: RadiusPrimitiveName
  purpose: string
  usage: string
  doNot: string
}

export type RadiusContextRole =
  | "checkbox"
  | "badge"
  | "input"
  | "button"
  | "card"
  | "dialog"
  | "avatar"

export interface RadiusContextToken {
  scale: RadiusScaleRole
  purpose: string
  usage: string
  doNot: string
}
