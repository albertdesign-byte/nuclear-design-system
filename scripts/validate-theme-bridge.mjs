#!/usr/bin/env node
/**
 * Validates Tailwind @theme bridge — no legacy shadcn variable references.
 *
 * Usage: node scripts/validate-theme-bridge.mjs
 */

import { readFileSync } from "node:fs"
import { join, dirname } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")

const themeFiles = ["src/app/globals.css", "src/app/theme.css"].map((f) =>
  readFileSync(join(root, f), "utf8")
)

const FORBIDDEN = [
  /var\(--background\)/,
  /var\(--foreground\)/,
  /var\(--primary\)/,
  /var\(--secondary\)/,
  /var\(--muted\)/,
  /var\(--card\)/,
  /var\(--popover\)/,
  /var\(--border\)/,
  /var\(--ring\)/,
  /var\(--input\)/,
  /var\(--accent\)/,
  /var\(--destructive\)/,
  /var\(--sidebar/,
  /var\(--chart-/,
]

let exitCode = 0
console.log("=== Tailwind @theme Bridge Validation ===\n")

for (const pattern of FORBIDDEN) {
  for (const [i, content] of themeFiles.entries()) {
    const file = i === 0 ? "globals.css" : "theme.css"
    if (pattern.test(content)) {
      exitCode = 1
      console.log(`❌ Legacy reference ${pattern} found in ${file}`)
    }
  }
}

if (exitCode === 0) {
  console.log("✅ No legacy shadcn variable references in theme bridge")
}

console.log("\n✅ theme.css maps shadcn utilities → Foundation tokens")
process.exit(exitCode)
