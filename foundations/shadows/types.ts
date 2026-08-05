/**
 * Shared types for the Medmo shadow system.
 *
 * Public API: shadow-none | shadow-xs | shadow-sm | shadow-md | shadow-lg | shadow-xl
 * Visual depth is primarily communicated via Colors surface hierarchy — not token names.
 */

export type ShadowScaleRole =
  | "none"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"

export interface ShadowPrimitive {
  /** Raw box-shadow value — internal only */
  value: string
  usage: string
}

export interface ShadowScaleToken {
  primitive: `shadow-layer-${ShadowScaleRole}`
  /** Design guidance — surface type this shadow suggests when shadow is needed */
  surfaceGuidance: string
  purpose: string
  usage: string
  doNot: string
}
