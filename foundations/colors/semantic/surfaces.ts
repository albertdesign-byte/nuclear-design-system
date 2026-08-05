/**
 * Surface architecture — 5-level hierarchy for spatial UI composition.
 *
 * Why a surface hierarchy: Carbon and Material 3 demonstrate that depth
 * through tonal surfaces (not shadows) reduces cognitive load. Each level
 * has a defined role so designers and developers never guess which background
 * to use for cards, dropdowns, or modals.
 *
 * Hierarchy (bottom to top):
 *
 *   Background     → Page canvas. The lowest layer.
 *   Surface        → Content containers (cards, panels, sections).
 *   Surface Raised → Nested containers on top of Surface (card-in-card, table header).
 *   Surface Floating → Detached elements (dropdowns, popovers, tooltips container).
 *   Overlay        → Modal backdrop. Dims everything below.
 *
 * Light mode: Background is off-white, surfaces are pure white.
 * Dark mode: Each level steps lighter (950 → 900 → 800 → 700).
 *
 * Components must use semantic surface tokens, never primitive neutrals directly.
 */

export const surfaceArchitecture = {
  background: {
    level: 0,
    purpose: "Page canvas — the base layer of every screen",
    examples: ["App background", "Main content area behind cards"],
    doNot: ["Card backgrounds", "Input backgrounds", "Modal content"],
  },
  surface: {
    level: 1,
    purpose: "Default content container sitting on the page background",
    examples: ["Card", "Panel", "Table container", "Form section"],
    doNot: ["Page background", "Floating dropdowns"],
  },
  surfaceRaised: {
    level: 2,
    purpose: "Container nested inside another surface — creates depth without shadows",
    examples: ["Card header", "Nested panel", "Table header row", "Stat card group inner"],
    doNot: ["Top-level cards (use surface)", "Floating elements"],
  },
  surfaceFloating: {
    level: 3,
    purpose: "Detached elements that float above the page — highest opaque layer",
    examples: ["Dropdown menu", "Popover", "Tooltip container", "Select content", "Toast"],
    doNot: ["Static cards", "Page sections"],
  },
  overlay: {
    level: 4,
    purpose: "Semi-transparent backdrop that dims content below modals",
    examples: ["Dialog backdrop", "Drawer backdrop", "Full-screen loading overlay"],
    doNot: ["Solid backgrounds", "Card surfaces"],
  },
} as const

export type SurfaceLevel = keyof typeof surfaceArchitecture
