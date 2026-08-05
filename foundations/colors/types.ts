/**
 * Shared types for the Medmo color system.
 *
 * Why: A single type contract ensures every palette step carries
 * the metadata designers and developers need to use colors correctly.
 */

export type ColorStep =
  | 50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 950

export type ColorScale = Record<ColorStep, ColorPrimitive>

export interface ColorPrimitive {
  /** CSS oklch() components — canonical format for Tailwind v4 */
  oklch: string
  /** Hex reference for documentation and design tools */
  hex: string
  /** When and why to use this step */
  usage: string
}

export type PrimitiveReference = `${string}-${ColorStep}` | "white" | "black"

export interface SemanticColorToken {
  /** Reference to a primitive — never a raw hex value */
  primitive: PrimitiveReference
  /** Human-readable purpose */
  purpose: string
  /** Valid use cases */
  usage: string
  /** Explicit anti-patterns */
  doNot: string
}

export interface FocusTokens {
  ringColor: SemanticColorToken
  ringWidth: { value: string; purpose: string }
  ringOffset: { value: string; purpose: string }
}

export interface FeedbackSemanticGroup {
  background: SemanticColorToken
  border: SemanticColorToken
  text: SemanticColorToken
  foreground: SemanticColorToken
}
