#!/usr/bin/env node
/**
 * Validates Technical Setup runtime wiring:
 * - layout.tsx: fonts, ThemeProvider, providers, suppressHydrationWarning
 * - globals.css: import order
 * - No legacy Geist font references
 */

import { readFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failed = false;

function pass(msg) {
  console.log(`✅ ${msg}`);
}

function fail(msg) {
  console.error(`❌ ${msg}`);
  failed = true;
}

function read(rel) {
  const path = join(root, rel);
  if (!existsSync(path)) {
    fail(`Missing file: ${rel}`);
    return "";
  }
  return readFileSync(path, "utf8");
}

console.log("=== Runtime Setup Validation ===\n");

const layout = read("src/app/layout.tsx");
const globals = read("src/app/globals.css");
const fonts = read("src/lib/fonts.ts");

const requiredFiles = [
  "src/components/providers/theme-provider.tsx",
  "src/components/providers/app-providers.tsx",
  "src/lib/fonts.ts",
  "src/app/theme.css",
];

for (const file of requiredFiles) {
  if (existsSync(join(root, file))) pass(`Found ${file}`);
  else fail(`Missing ${file}`);
}

if (layout.includes("Geist")) fail("layout.tsx still references Geist fonts");
else if (layout) pass("layout.tsx loads Poppins + IBM Plex Sans Condensed (no Geist)");

if (layout.includes("suppressHydrationWarning")) pass("layout.tsx has suppressHydrationWarning");
else fail("layout.tsx missing suppressHydrationWarning on <html>");

if (layout.includes("ThemeProvider")) pass("layout.tsx mounts ThemeProvider");
else fail("layout.tsx missing ThemeProvider");

if (layout.includes('attribute="class"')) pass("ThemeProvider uses class strategy");
else fail("ThemeProvider must use attribute=\"class\" for Foundation .dark");

if (layout.includes("AppProviders")) pass("layout.tsx mounts AppProviders");
else fail("layout.tsx missing AppProviders");

if (fonts.includes("Poppins")) pass("fonts.ts loads Poppins");
else fail("fonts.ts must load Poppins");

if (fonts.includes('variable: "--font-family-component"')) pass("Poppins wired to --font-family-component");
else fail("Poppins must use variable --font-family-component");

if (fonts.includes("IBM_Plex_Sans_Condensed")) pass("fonts.ts loads IBM Plex Sans Condensed");
else fail("fonts.ts must load IBM_Plex_Sans_Condensed");

if (fonts.includes('variable: "--font-family-sans"')) pass("IBM Plex wired to --font-family-sans");
else fail("IBM Plex must use variable --font-family-sans");

const foundationImport = '@import "../../foundations/tokens/index.css"';
const themeImport = '@import "./theme.css"';

if (globals.indexOf(foundationImport) === 0 || globals.includes(foundationImport)) {
  const foundationIdx = globals.indexOf(foundationImport);
  const tailwindIdx = globals.indexOf('@import "tailwindcss"');
  const themeIdx = globals.indexOf(themeImport);

  if (foundationIdx !== -1 && tailwindIdx !== -1 && foundationIdx < tailwindIdx) {
    pass("globals.css: Foundation loads before Tailwind");
  } else fail("globals.css: Foundation must load before Tailwind");

  if (themeIdx !== -1 && tailwindIdx !== -1 && themeIdx > tailwindIdx) {
    pass("globals.css: theme.css loads after Tailwind");
  } else fail("globals.css: theme.css must load after Tailwind/shadcn");
} else {
  fail("globals.css missing Foundation import");
}

console.log("");
if (failed) {
  console.error("Runtime validation failed.\n");
  process.exit(1);
}

console.log("Runtime setup is correctly wired.\n");
