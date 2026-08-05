/**
 * Medmo Design System — Public API
 *
 * ═══════════════════════════════════════════════════════════════════════════
 * SINGLE ENTRY POINT — applications and tooling import from here ONLY.
 * Do NOT import from foundations/colors, foundations/spacing, etc. directly.
 * ═══════════════════════════════════════════════════════════════════════════
 *
 * Extended registries: `@medmo/tokens/contracts`
 * Flat resolve helpers: `@medmo/tokens/resolve`
 * DS authoring / a11y: `@medmo/tokens/tooling`
 *
 * @packageDocumentation
 * @module @medmo/tokens
 * @version 1.0.0
 */

// ─── Contracts (core) ───────────────────────────────────────────────────────
export { medmoContracts, allPublicCssVariables } from "./public/contracts"

// ─── Resolve (namespaced — prefer over flat helpers) ──────────────────────
export { medmoResolve } from "./public/resolve"

// ─── Types ────────────────────────────────────────────────────────────────
export type * from "./public/types"

// ─── Essentials ───────────────────────────────────────────────────────────
export {
  tokenCreationPrinciple,
  surfaceArchitecture,
  focus,
  focusRingShadow,
  textTokenProperties,
  TEXT_TOKEN_PREFIX,
  narrowViewportBase,
  zIndexStackOrder,
  iconLibrary,
  iconBaseGridPx,
  iconStroke,
  iconColorRule,
  iconDefaultSizePx,
  CSS_ENTRY_PATH,
  TS_ENTRY_PATH,
} from "./public/constants"

// ─── Architecture metadata ────────────────────────────────────────────────
export {
  TOKEN_AGGREGATION_VERSION,
  tokenLayers,
  cssImportOrder,
  tokenPrefixGuide,
} from "./layers"
