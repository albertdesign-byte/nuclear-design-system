/**
 * Icon size semantics + context mappings.
 *
 * Context mappings document intent — they reference size roles, not new px values.
 * Icon-to-text gap uses Spacing tokens (space-inline-*) — not duplicated here.
 */

import type {
  IconCatalogEntry,
  IconContextMapping,
  IconContextRole,
  IconSizePrimitivePx,
  IconSizeRole,
  IconSizeSemantic,
} from "./types"
import { iconSizeScale } from "./scale"

const iconSizeRolePrimitives = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
} as const satisfies Record<IconSizeRole, IconSizePrimitivePx>

function iconSize(
  role: IconSizeRole,
  purpose: string,
  usage: string,
  doNot: string
): IconSizeSemantic {
  const px = iconSizeRolePrimitives[role]

  return {
    primitive: `icon-size-${px}`,
    px,
    purpose,
    usage,
    doNot,
  }
}

export const iconSizeSemantics: Record<IconSizeRole, IconSizeSemantic> = {
  xs: iconSize(
    "xs",
    "Extra compact icon",
    "Dense metadata, badge inline icon, compact table cells",
    "Default buttons, navigation, standalone empty states"
  ),

  sm: iconSize(
    "sm",
    "Default icon — standard for product",
    "Button default, Input prefix/suffix, navigation, tabs, menu items",
    "Hero empty states (use lg/xl), icon-only without aria-label"
  ),

  md: iconSize(
    "md",
    "Emphasis icon",
    "Primary button icon, section header auxiliary, stat card icon",
    "Inline in body text, dense table rows"
  ),

  lg: iconSize(
    "lg",
    "Standalone supporting icon",
    "Empty state illustration icon, feature callout — max one per section",
    "Repeated row icons, inline controls"
  ),

  xl: iconSize(
    "xl",
    "Feature focal icon (rare)",
    "Empty state primary icon, onboarding feature callout — max one per view",
    "Inline controls, navigation items, decoration"
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
    "sm",
    "space-button-icon-gap",
    "Icon + label in button",
    "Button with text — icon-sm + space-button-icon-gap (6px). Icon-only button: icon-sm, aria-label required",
    "Icon xl in standard button, icon without label and without aria-label"
  ),

  input: context(
    "sm",
    "space-inline-xs",
    "Icon inside or beside input",
    "Search prefix, password toggle, select chevron — icon-sm, tight gap space-inline-xs (4px)",
    "Icon replacing label, decorative icon inside clinical data fields"
  ),

  table: context(
    "sm",
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
    "sm",
    "space-inline-sm",
    "PageHeader action icon",
    "Icon in PageHeader action button — same as button context",
    "Large feature icons in header (use lg only if single focal element)"
  ),
}

export const iconDefaultSizeRole = "sm" as const satisfies IconSizeRole
export const iconDefaultSizePx = iconSizeSemantics[iconDefaultSizeRole].px

/** Official library — not swappable per component. */
export const iconLibrary = {
  name: "Lucide",
  package: "lucide-react",
  url: "https://lucide.dev",
} as const

/** One universal stroke for every Lucide icon. */
export const iconStroke = {
  width: 2,
  cssValue: "2",
  purpose: "Universal stroke width for all Lucide icons",
  usage: "Every icon — buttons, inputs, tables, empty states, headers",
  doNot: "Per-icon stroke overrides, stroke 1 or 1.5 for 'elegance', mixed libraries",
} as const

export const iconColorRule = "currentColor" as const

/**
 * Approved documentation catalog.
 * Names, labels, categories, aliases, and count originate here.
 */
export const iconCatalog = [
  {
    name: "UsersIcon",
    label: "Patients",
    category: "navigation",
    aliases: ["users", "patient list"],
  },
  {
    name: "FlaskConicalIcon",
    label: "Studies",
    category: "navigation",
    aliases: ["lab", "study"],
  },
  {
    name: "ClipboardListIcon",
    label: "Reports",
    category: "navigation",
    aliases: ["clipboard", "report list"],
  },
  {
    name: "UploadIcon",
    label: "Upload",
    category: "action",
    aliases: ["import", "send file"],
  },
  {
    name: "DownloadIcon",
    label: "Download",
    category: "action",
    aliases: ["export", "save file"],
  },
  {
    name: "SearchIcon",
    label: "Search",
    category: "action",
    aliases: ["find", "lookup"],
  },
  {
    name: "SettingsIcon",
    label: "Settings",
    category: "action",
    aliases: ["preferences", "configure"],
  },
  {
    name: "BellIcon",
    label: "Notifications",
    category: "status",
    aliases: ["alerts", "updates"],
  },
] as const satisfies readonly IconCatalogEntry[]

export const rejectedIconDecisions = [
  "stroke-thin (1.5) — decorative; single stroke-2 for all icons",
  "stroke-heavy (2.5+) — visual noise",
  "Heroicons, Font Awesome, custom SVG sets — Lucide only",
  "Hardcoded size-4, w-4 h-4 in components — use --icon-sm or --icon-md",
  "Icon without text replacing critical labels",
] as const

/** Stable data consumed by tooling and documentation. */
export const iconDocumentation = {
  library: iconLibrary,
  stroke: iconStroke,
  colorRule: iconColorRule,
  defaultSizeRole: iconDefaultSizeRole,
  defaultSizePx: iconDefaultSizePx,
  sizes: iconSizeSemantics,
  contexts: iconContextMappings,
  catalog: iconCatalog,
} as const

export { iconSizeScale }
