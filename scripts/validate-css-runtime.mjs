#!/usr/bin/env node
/**
 * Validates foundation CSS runtime:
 * - All var() references resolve to defined custom properties
 * - No duplicate property names within a single rule block
 * - Required public semantic variables exist in :root
 *
 * Usage: node scripts/validate-css-runtime.mjs
 */

import { readFileSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")

const IMPORT_ORDER = [
  "colors/colors.css",
  "typography/typography.css",
  "spacing/spacing.css",
  "breakpoints/breakpoints.css",
  "radius/radius.css",
  "shadows/shadows.css",
  "motion/motion.css",
  "opacity/opacity.css",
  "z-index/z-index.css",
  "iconography/iconography.css",
]

function readCss(relativePath) {
  return readFileSync(join(root, "foundations", relativePath), "utf8")
}

function extractDefinitions(css) {
  const defs = new Set()
  const re = /(--[\w-]+)\s*:/g
  let match
  while ((match = re.exec(css)) !== null) {
    defs.add(match[1])
  }
  return defs
}

function extractReferences(css) {
  const refs = new Set()
  const re = /var\(\s*(--[\w-]+)/g
  let match
  while ((match = re.exec(css)) !== null) {
    refs.add(match[1])
  }
  return refs
}

/** Duplicate custom properties within one { } block */
function duplicatesInBlock(blockContent, blockLabel) {
  const seen = new Set()
  const dups = []
  const re = /(--[\w-]+)\s*:/g
  let match
  while ((match = re.exec(blockContent)) !== null) {
    if (seen.has(match[1])) {
      dups.push({ block: blockLabel, name: match[1] })
    }
    seen.add(match[1])
  }
  return dups
}

const allCss = IMPORT_ORDER.map(readCss).join("\n")

const allDefined = extractDefinitions(allCss)
const allRefs = extractReferences(allCss)
const unresolved = [...allRefs].filter((ref) => !allDefined.has(ref))

// Check every rule block ( :root, .dark, @media blocks )
const blockPatterns = [
  { re: /:root\s*\{([\s\S]*?)\}/g, label: ":root" },
  { re: /\.dark\s*\{([\s\S]*?)\}/g, label: ".dark" },
  { re: /@media[^{]+\{([\s\S]*?)\n\}/g, label: "@media" },
]

const intraBlockDuplicates = []
for (const { re, label } of blockPatterns) {
  let i = 0
  for (const match of allCss.matchAll(re)) {
    i += 1
    intraBlockDuplicates.push(
      ...duplicatesInBlock(match[1], `${label}#${i}`)
    )
  }
}

const REQUIRED_PUBLIC = [
  "--color-background",
  "--color-text-primary",
  "--color-action-primary",
  "--text-body-size",
  "--space-inline-md",
  "--layout-page-padding",
  "--radius-lg",
  "--radius",
  "--shadow-md",
  "--motion-hover",
  "--opacity-subtle",
  "--z-modal",
  "--icon-xs",
  "--icon-sm",
  "--icon-md",
  "--icon-lg",
  "--icon-xl",
  "--icon-size",
  "--icon-stroke",
  "--focus-ring-width",
  "--color-focus-ring",
]

const missingPublic = REQUIRED_PUBLIC.filter((v) => !allDefined.has(v))

const darkCss = [...allCss.matchAll(/\.dark\s*\{([\s\S]*?)\}/g)]
  .map((m) => m[1])
  .join("\n")
const darkDefs = extractDefinitions(darkCss)
const DARK_OVERRIDES = ["--color-background", "--color-text-primary", "--shadow-layer-md"]
const missingDark = DARK_OVERRIDES.filter((v) => !darkDefs.has(v))

let exitCode = 0

console.log("=== Medmo CSS Runtime Validation ===\n")
console.log(`Foundation files: ${IMPORT_ORDER.length}`)
console.log(`Total unique definitions: ${allDefined.size}`)
console.log(`var() references: ${allRefs.size}`)

if (intraBlockDuplicates.length > 0) {
  exitCode = 1
  console.log("\n❌ Duplicate properties within a single rule block:")
  for (const { block, name } of intraBlockDuplicates) {
    console.log(`   [${block}] ${name}`)
  }
} else {
  console.log("\n✅ No duplicate properties within any single rule block")
}

if (unresolved.length > 0) {
  exitCode = 1
  console.log("\n❌ Unresolved var() references:")
  for (const ref of unresolved.sort()) {
    console.log(`   ${ref}`)
  }
} else {
  console.log("✅ All var() references resolve within foundation chain")
}

if (missingPublic.length > 0) {
  exitCode = 1
  console.log("\n❌ Missing required public variables:")
  for (const v of missingPublic) {
    console.log(`   ${v}`)
  }
} else {
  console.log("✅ Required public semantic variables present")
}

if (missingDark.length > 0) {
  exitCode = 1
  console.log("\n❌ Missing expected .dark overrides:")
  for (const v of missingDark) {
    console.log(`   ${v}`)
  }
} else {
  console.log("✅ Dark mode overrides present (colors + shadows)")
}

console.log("\nImport order (foundations/tokens/index.css):")
for (const f of IMPORT_ORDER) {
  console.log(`   → ${f}`)
}

console.log("\nRuntime entry: src/app/globals.css → foundations/tokens/index.css")

process.exit(exitCode)
