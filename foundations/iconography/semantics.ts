/**
 * Icon size semantics + context mappings.
 *
 * Context mappings document intent — they reference size roles, not new px values.
 * Icon-to-text gap uses Spacing tokens (space-inline-*) — not duplicated here.
 */

import type { IconContextMapping, IconContextRole, IconSizeRole, IconSizeSemantic } from "./types"
import { iconSizeScale } from "./scale"

function iconSize(
  px: IconSizeSemantic["px"],
  purpose: string,
  usage: string,
  doNot: string
): IconSizeSemantic {
  return {
    primitive: `icon-size-${px}`,
    px,
    purpose,
    usage,
    doNot,
  }
}

export const iconSizeSemantics: Record<IconSizeRole, IconSizeSemantic> = {
  sm: iconSize(
    14,
    "Compact icon",
    "Badge inline icon, Button xs, dense toolbar when label present",
    "Default buttons, table primary actions, standalone empty states"
  ),

  md: iconSize(
    16,
    "Default icon — standard for product",
    "Button default/sm, Input prefix/suffix, table row actions, tabs, menu items",
    "Hero empty states (use lg/xl), badge-only without label"
  ),

  lg: iconSize(
    20,
    "Standalone supporting icon",
    "Empty state illustration icon, section header auxiliary, stat card icon",
    "Inline in body text, table cells with data"
  ),

  xl: iconSize(
    24,
    "Grid-base feature icon (rare)",
    "Empty state primary icon, onboarding feature callout — max one per view",
    "Inline controls, repeated row icons, decoration"
  ),
}

function context(
  size: IconSizeRole,
  gapSpacing: IconContextMapping["gapSpacing"],
  purpose: string,
  usage: string,
  doNot: string
): IconContextMapping {
  return { size, gapSpacing, purpose, usage, doNot }
}

/** Context = which size + which spacing gap — no new tokens */
export const iconContextMappings: Record<IconContextRole, IconContextMapping> = {
  button: context(
    "md",
    "space-inline-sm",
    "Icon + label in button",
    "Button with text — icon-md + space-inline-sm (8px). Icon-only button: icon-md, aria-label required",
    "Icon xl in standard button, icon without label and without aria-label"
  ),

  input: context(
    "md",
    "space-inline-xs",
    "Icon inside or beside input",
    "Search prefix, password toggle, select chevron — icon-md, tight gap space-inline-xs (4px)",
    "Icon replacing label, decorative icon inside clinical data fields"
  ),

  table: context(
    "md",
    "space-inline-xs",
    "Icon in table row action",
    "Sort indicator, row action, status icon paired with text in cell",
    "Icon-only status without text/color (a11y), xl icons in cells, decorative column icons"
  ),

  "empty-state": context(
    "lg",
    "none",
    "Empty state focal icon",
    "Single icon above title — icon-lg default, icon-xl only for primary empty view",
    "Multiple large icons, animated icons, illustration-style decoration"
  ),

  header: context(
    "md",
    "space-inline-sm",
    "PageHeader action icon",
    "Icon in PageHeader action button — same as button context",
    "Large feature icons in header (use xl only if single focal element)"
  ),
}

export { iconSizeScale }
