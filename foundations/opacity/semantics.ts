/**
 * Opacity semantics + presets — entire public API (intentionally tiny).
 *
 * Rejected tokens (documented in rules.md, NOT implemented):
 * - opacity-disabled → use color-disabled-* (Colors)
 * - opacity-overlay → use color-overlay (Colors, alpha baked in)
 * - opacity-focus → use color-focus-ring (Colors, alpha baked in)
 * - opacity-hover → use color-surface-hover (Colors)
 */

import type { OpacityPreset, OpacitySemanticToken } from "./types"

function semantic(
  primitive: OpacitySemanticToken["primitive"],
  value: number,
  purpose: string,
  usage: string,
  doNot: string
): OpacitySemanticToken {
  return { primitive, value, purpose, usage, doNot }
}

export const opacitySemantics: Record<"subtle" | "muted", OpacitySemanticToken> =
  {
    subtle: semantic(
      "opacity-20",
      0.2,
      "Subtle alpha wash paired with semantic colors",
      "Invalid state ring (ring-destructive/20), subtle feedback backgrounds with color-error-border, icon tints",
      "Disabled states, body text, overlays, standalone opacity on containers"
    ),

    muted: semantic(
      "opacity-60",
      0.6,
      "Decorative reduced presence",
      "Inactive tab labels (with color-text-secondary), decorative icons (aria-hidden), non-essential chrome",
      "Clinical data text (use color-text-muted), disabled controls (use color-disabled-*)"
    ),
  }

/** Preset — skeleton from/to travel together; one preset, not two tokens */
export const opacityPresets: Record<"skeleton", OpacityPreset> = {
  skeleton: {
    from: 0.5,
    to: 1,
    purpose: "Skeleton loading pulse range",
    usage: "Skeleton component with motion-skeleton — only infinite opacity animation in Medmo",
    doNot: "Static UI, disabled states, text, shimmer gradients",
  },
}
