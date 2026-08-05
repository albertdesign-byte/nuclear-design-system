/**
 * Primitive box-shadow definitions — implementation detail only.
 *
 * Why extremely subtle opacities (4–10%): Medmo depth comes from surface tones
 * (Colors) and borders (ring-1). Shadows reinforce separation only when needed.
 *
 * Why no "elevation" primitive layer: Depth is a design rule documented in
 * shadows.mdx — the public API is shadow-* tokens only.
 *
 * Components NEVER reference shadow-layer-* directly.
 */

import type { ShadowPrimitive, ShadowScaleRole } from "../types"

function layer(value: string, usage: string): ShadowPrimitive {
  return { value, usage }
}

export const shadowDefinitions: Record<ShadowScaleRole, ShadowPrimitive> = {
  none: layer("none", "Default — flat surfaces on page canvas"),

  xs: layer(
    "0 1px 2px 0 rgb(18 22 32 / 4%)",
    "Subtle lift — hover feedback on interactive surfaces"
  ),

  sm: layer(
    "0 1px 3px 0 rgb(18 22 32 / 6%), 0 1px 2px -1px rgb(18 22 32 / 4%)",
    "Resting raised surfaces — cards when ring alone is insufficient"
  ),

  md: layer(
    "0 4px 6px -1px rgb(18 22 32 / 6%), 0 2px 4px -2px rgb(18 22 32 / 4%)",
    "Floating panels — popovers, select menus, detached dropdowns"
  ),

  lg: layer(
    "0 8px 16px -4px rgb(18 22 32 / 8%), 0 4px 6px -4px rgb(18 22 32 / 4%)",
    "Modal dialogs, sheets — highest standard interactive overlay"
  ),

  xl: layer(
    "0 16px 32px -8px rgb(18 22 32 / 10%), 0 8px 16px -8px rgb(18 22 32 / 6%)",
    "Rare maximum separation — dialog on wide viewports, command palette"
  ),
}

export const shadowScaleRoles = Object.keys(
  shadowDefinitions
) as ShadowScaleRole[]

/** Dark mode — reduced opacity; depth relies more on surface hierarchy */
export const shadowDefinitionsDark: Record<
  Exclude<ShadowScaleRole, "none">,
  ShadowPrimitive
> = {
  xs: layer(
    "0 1px 2px 0 rgb(0 0 0 / 20%)",
    "Dark mode hover lift — subtle"
  ),
  sm: layer(
    "0 1px 3px 0 rgb(0 0 0 / 24%), 0 1px 2px -1px rgb(0 0 0 / 16%)",
    "Dark mode card shadow — reduced vs light"
  ),
  md: layer(
    "0 4px 6px -1px rgb(0 0 0 / 28%), 0 2px 4px -2px rgb(0 0 0 / 18%)",
    "Dark mode floating panels"
  ),
  lg: layer(
    "0 8px 16px -4px rgb(0 0 0 / 32%), 0 4px 6px -4px rgb(0 0 0 / 20%)",
    "Dark mode dialogs"
  ),
  xl: layer(
    "0 16px 32px -8px rgb(0 0 0 / 36%), 0 8px 16px -8px rgb(0 0 0 / 24%)",
    "Dark mode maximum float"
  ),
}
