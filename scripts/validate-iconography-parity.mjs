#!/usr/bin/env node

import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
let failed = false;

function read(relativePath) {
  return readFileSync(join(root, relativePath), "utf8");
}

function pass(message) {
  console.log(`✓ ${message}`);
}

function fail(message) {
  failed = true;
  console.error(`✗ ${message}`);
}

function check(condition, message) {
  if (condition) pass(message);
  else fail(message);
}

function extractObjectBlock(source, declaration) {
  const match = source.match(
    new RegExp(
      `(?:export )?const ${declaration} = \\{([\\s\\S]*?)\\} as const`
    )
  );

  if (!match) {
    fail(`Could not parse ${declaration}`);
    return "";
  }

  return match[1];
}

const scale = read("foundations/iconography/scale.ts");
const semantics = read("foundations/iconography/semantics.ts");
const contract = read("foundations/iconography/contract.ts");
const tooling = read("foundations/tokens/public/tooling.ts");
const css = read("foundations/iconography/iconography.css");
const spacingCss = read("foundations/spacing/spacing.css");
const mdx = read("docs/design-system/foundations/icons.mdx");
const readme = read("foundations/iconography/README.md");
const blueprint = read("docs/design-system/blueprint.mdx");
const livePage = read(
  "src/components/docs/foundations/icons/icons-docs-page.tsx"
);
const livePreviews = read(
  "src/components/docs/foundations/icons/icons-preview-blocks.tsx"
);
const registry = read("src/components/docs/config/foundations-registry.ts");

const scaleEntries = [
  ...scale.matchAll(/^\s*(\d+):\s*size\((\d+),/gm),
].map(([, key, value]) => ({ key: Number(key), value: Number(value) }));

const roleBlock = extractObjectBlock(semantics, "iconSizeRolePrimitives");
const roleEntries = [
  ...roleBlock.matchAll(/^\s*(xs|sm|md|lg|xl):\s*(\d+),/gm),
].map(([, role, px]) => ({ role, px: Number(px) }));

const defaultRole =
  semantics.match(/iconDefaultSizeRole = "(xs|sm|md|lg|xl)"/)?.[1];
const libraryBlock = extractObjectBlock(semantics, "iconLibrary");
const libraryName = libraryBlock.match(/name:\s*"([^"]+)"/)?.[1];
const strokeBlock = extractObjectBlock(semantics, "iconStroke");
const strokeWidth = Number(strokeBlock.match(/width:\s*(\d+(?:\.\d+)?)/)?.[1]);
const contextGapTokens = [
  ...semantics.matchAll(
    /context\(\s*"(?:xs|sm|md|lg|xl)"\s*,\s*"([^"]+)"/g
  ),
]
  .map(([, token]) => token)
  .filter((token) => token !== "none");
const expectedMarker = `<!-- iconography-contract: sizes=${roleEntries
  .map(({ role }) => role)
  .join(",")};default=${defaultRole};library=${libraryName};stroke=${strokeWidth} -->`;

console.log("=== Iconography parity validation ===\n");

check(scaleEntries.length === 5, "scale.ts defines exactly five primitive sizes");
check(
  scaleEntries.every(({ key, value }) => key === value),
  "scale.ts primitive keys and values agree"
);
check(roleEntries.length === 5, "semantics.ts defines exactly five semantic roles");
check(
  roleEntries.every(({ px }) =>
    scaleEntries.some(({ value }) => value === px)
  ),
  "every semantic role resolves to scale.ts"
);
check(defaultRole === "sm", "semantic default is icon-sm");
check(libraryName === "Lucide", "semantic library is Lucide");
check(strokeWidth === 2, "semantic stroke is 2");

check(
  contract.includes("Object.keys(iconSizeSemantics)") &&
    contract.includes("Object.keys(iconContextMappings)"),
  "contract.ts derives roles from semantics.ts"
);
check(
  !/\[\s*"xs"\s*,\s*"sm"\s*,\s*"md"\s*,\s*"lg"\s*,\s*"xl"\s*\]/.test(
    contract
  ),
  "contract.ts contains no manual size-role array"
);
check(
  tooling.includes('from "../../iconography/semantics"') &&
    tooling.includes("iconDocumentation"),
  "tooling.ts exposes documentation data from semantics.ts"
);

check(mdx.includes(expectedMarker), "MDX contract marker matches semantics.ts");
check(
  readme.includes(expectedMarker),
  "README contract marker matches semantics.ts"
);
check(
  blueprint.includes(expectedMarker),
  "blueprint contract marker matches semantics.ts"
);
check(
  !mdx.includes("| `icon-xs` |") && !readme.includes("| `icon-xs` |"),
  "prose documentation contains no manual icon-size matrix"
);

check(
  livePage.includes("iconDocumentation") &&
    livePage.includes("Object.entries(iconDocumentation.contexts)"),
  "live usage table derives from semantic context data"
);
check(
  livePreviews.includes("Object.entries(iconDocumentation.sizes)"),
  "live size preview derives from semantic size data"
);
check(
  livePreviews.includes("iconDocumentation.catalog") &&
    registry.includes("iconDocumentation.catalog"),
  "live catalog and search metadata derive from semantic catalog data"
);
check(
  !livePreviews.includes("const iconSizes =") &&
    !livePreviews.includes("const healthcareIcons ="),
  "live docs contain no manual icon or size arrays"
);

const cssPrimitiveEntries = [
  ...css.matchAll(/--icon-size-(\d+):\s*([\d.]+)rem;/g),
].map(([, px, rem]) => ({ px: Number(px), rem: Number(rem) }));
check(
  cssPrimitiveEntries.length === scaleEntries.length &&
    cssPrimitiveEntries.every(({ px, rem }) =>
      scaleEntries.some(
        ({ value }) => value === px && value / 16 === rem
      )
    ),
  "CSS primitive values mirror scale.ts"
);
check(
  roleEntries.every(({ role, px }) =>
    css.includes(`--icon-${role}: var(--icon-size-${px});`)
  ),
  "CSS semantic variables mirror semantics.ts"
);
check(
  css.includes(`--icon-size: var(--icon-${defaultRole});`),
  "CSS default mirrors semantics.ts"
);
check(
  css.includes(`--icon-stroke: ${strokeWidth};`),
  "CSS stroke mirrors semantics.ts"
);
check(
  contextGapTokens.every((token) => spacingCss.includes(`--${token}:`)),
  "semantic icon gaps resolve to Spacing tokens"
);

console.log("");
if (failed) {
  console.error("Iconography parity validation failed.");
  process.exit(1);
}

console.log("Iconography sources and documentation are in parity.");
