#!/usr/bin/env node

import { existsSync, readFileSync } from "node:fs";
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

const families = [
  {
    id: "colors",
    title: "Colors",
    css: "foundations/colors/colors.css",
    docs: "docs/design-system/foundations/colors.mdx",
    live: "src/app/docs/foundations/colors/page.tsx",
    storybook: "src/stories/foundations/Colors.mdx",
    gallery: "src/stories/foundations/colors-gallery.tsx",
    canonical: "foundations/colors/css-variables.ts",
    toolingImport: "colorPrimitives",
  },
  {
    id: "spacing",
    title: "Spacing",
    css: "foundations/spacing/spacing.css",
    docs: "docs/design-system/foundations/spacing.mdx",
    live: "src/app/docs/foundations/spacing/page.tsx",
    storybook: "src/stories/foundations/Spacing.mdx",
    gallery: "src/stories/foundations/spacing-gallery.tsx",
    canonical: "foundations/spacing/primitives/scale.ts",
    toolingImport: "spacingScale",
  },
  {
    id: "typography",
    title: "Typography",
    css: "foundations/typography/typography.css",
    docs: "docs/design-system/foundations/typography.mdx",
    live: "src/app/docs/foundations/typography/page.tsx",
    storybook: "src/stories/foundations/Typography.mdx",
    gallery: "src/stories/foundations/typography-gallery.tsx",
    canonical: "foundations/typography/semantic/roles.ts",
    toolingImport: "semanticTypography",
  },
  {
    id: "radius",
    title: "Radius",
    css: "foundations/radius/radius.css",
    docs: "docs/design-system/foundations/radius.mdx",
    live: "src/app/docs/foundations/radius/page.tsx",
    storybook: "src/stories/foundations/Radius.mdx",
    gallery: "src/stories/foundations/radius-gallery.tsx",
    canonical: "foundations/radius/primitives/scale.ts",
    toolingImport: "semanticRadius",
  },
  {
    id: "shadows",
    title: "Shadows",
    css: "foundations/shadows/shadows.css",
    docs: "docs/design-system/foundations/shadows.mdx",
    live: "src/app/docs/foundations/shadows/page.tsx",
    storybook: "src/stories/foundations/Shadows.mdx",
    gallery: "src/stories/foundations/shadows-gallery.tsx",
    canonical: "foundations/shadows/primitives/definitions.ts",
    toolingImport: "semanticShadows",
  },
];

const registry = read("foundations/tokens/registry.ts");
const cssExport = read("foundations/tokens/css-export.ts");
const tooling = read("foundations/tokens/public/tooling.ts");
const foundationsRegistry = read(
  "src/components/docs/config/foundations-registry.ts"
);
const storybook = read("src/stories/foundations/Overview.mdx");
const theme = read("src/app/theme.css");

console.log("=== Token source-of-truth validation ===\n");

check(
  cssExport.includes("export const tokenCssExports") &&
    registry.includes("export const tokenDocumentation"),
  "canonical token CSS exports and family registry exist"
);
check(
  tooling.includes("tokenDocumentation") && tooling.includes("tokenCssExports"),
  "public tooling exposes token documentation and CSS exports"
);
check(
  foundationsRegistry.includes("tokenFamilies") &&
    foundationsRegistry.includes("tokenSearchKeywords"),
  "foundations search metadata is generated from the token registry"
);
check(
  theme.includes("aliases only") && !/oklch\(/.test(theme),
  "Tailwind theme bridge does not redefine color values"
);

check(
  storybook.includes("token-contract: family=colors,spacing,typography,radius,shadows"),
  "Storybook foundations overview binds to the token contract"
);
check(
  !storybook.includes("| `spacing-") && !storybook.includes("#242F50"),
  "Storybook foundations overview has no duplicate token value tables"
);

for (const family of families) {
  check(existsSync(join(root, family.css)), `${family.id} CSS runtime exists`);
  check(existsSync(join(root, family.canonical)), `${family.id} canonical TS exists`);
  check(existsSync(join(root, family.live)), `${family.id} live foundations page exists`);
  check(existsSync(join(root, family.storybook)), `${family.id} Storybook MDX page exists`);
  check(existsSync(join(root, family.gallery)), `${family.id} Storybook gallery exists`);

  const docs = read(family.docs);
  const live = read(family.live);
  const storybookPage = read(family.storybook);
  const gallery = read(family.gallery);

  check(
    docs.includes(`<!-- token-contract: family=${family.id} -->`),
    `${family.id} MDX contract marker matches the registry`
  );
  check(
    storybookPage.includes(`token-contract: family=${family.id}`) &&
      storybookPage.includes(`Foundations/${family.title}`),
    `${family.id} Storybook page binds to the token contract`
  );
  check(
    gallery.includes("@medmo/tokens/tooling") && gallery.includes(family.toolingImport),
    `${family.id} Storybook gallery derives from canonical tooling`
  );
  check(
    !gallery.includes("#242F50") && !gallery.includes("oklch(31.24%"),
    `${family.id} Storybook gallery has no independent token value tables`
  );
  check(
    registry.includes(`storybook: "Foundations/${family.title}"`),
    `${family.id} registry storybook title points at the family page`
  );
  check(
    live.includes("@medmo/tokens/tooling") && live.includes(family.toolingImport),
    `${family.id} live page derives from canonical tooling`
  );
  check(
    !live.includes("const tokenScale = [") &&
      !live.includes("#242F50") &&
      !live.includes("oklch(31.24%"),
    `${family.id} live page has no independent token value tables`
  );
}

check(
  !cssExport.includes("oklch(31.24%") &&
    !cssExport.includes("#242F50") &&
    !cssExport.includes("0.5rem"),
  "CSS export module does not hardcode token values"
);

console.log("");
if (failed) {
  console.error("Token validation failed.");
  process.exit(1);
}

console.log("Token sources, docs, CSS exports, and Storybook are in parity.");
