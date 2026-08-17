#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
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

function walk(dir, files = []) {
  if (!existsSync(dir)) {
    return files;
  }

  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const registry = read("src/components/docs/config/patterns-registry.ts");
const navigation = read("src/components/docs/config/navigation.ts");
const search = read("src/components/docs/layout/docs-search.tsx");
const overview = read("src/app/docs/patterns/page.tsx");
const shell = read("src/components/docs/patterns/docs-pattern-page.tsx");
const content = read("src/components/docs/patterns/docs-pattern-content.tsx");
const slugRoute = read("src/app/docs/patterns/[slug]/page.tsx");

const approvedTitles = [
  "Patients intake chrome",
  "Patients step",
  "Form field",
  "Exclusive choice",
  "Multi-select choice",
  "Optional skip",
  "Follow-up details",
  "Document upload",
  "Conditional reveal",
  "In-step notice",
  "Operational app chrome",
  "Workspace tabs",
  "Worklist table",
  "Scan search",
];

console.log("=== Patterns validation ===\n");

check(
  navigation.includes("getPatternNavCategories()"),
  "sidebar navigation is derived from the patterns registry"
);
check(
  !navigation.includes('title: "Empty States"') &&
    !navigation.includes("Search & Command") &&
    !navigation.includes("Form Field Patterns"),
  "navigation.ts has no leftover placeholder pattern list"
);
check(
  search.includes("getPatternSearchEntries()"),
  "pattern search metadata is generated from the registry"
);
check(
  overview.includes("DocsPatternPage") &&
    overview.includes("patternCategories") &&
    overview.includes("patternsRegistry"),
  "overview page is derived from the registry shell"
);
check(
  shell.includes("DocsPageHeader") &&
    shell.includes("getPatternNeighbors") &&
    shell.includes("Button") &&
    shell.includes("Link"),
  "DocsPatternPage uses existing primitives and registry neighbors"
);
check(
  content.includes('id="purpose"') &&
    content.includes('id="when-to-use"') &&
    content.includes('id="structure"') &&
    content.includes('id="components-used"') &&
    content.includes('id="accessibility"') &&
    content.includes('id="product-examples"'),
  "pattern docs render the required documentation sections"
);
check(
  slugRoute.includes("getPatternRouteSlugs()") &&
    slugRoute.includes("PatternDocsRoute"),
  "pattern slug routes are generated from the registry"
);
check(
  existsSync(join(root, "src/app/docs/patterns/form-field-patterns/page.tsx")),
  "form field keeps its existing documentation route"
);

for (const title of approvedTitles) {
  check(registry.includes(`title: "${title}"`), `registry includes ${title}`);
}

check(
  !registry.includes('title: "Command palette"') &&
    !registry.includes('title: "Empty States"') &&
    !registry.includes('title: "Breadcrumb"'),
  "registry does not invent unextracted patterns"
);

const storybookMain = read(".storybook/main.ts");
check(
  storybookMain.includes("../src/stories/**/*.stories.@(ts|tsx)"),
  "Storybook includes src/stories CSF files"
);

const storyFiles = walk(join(root, "src/stories/patterns")).filter(
  (file) => file.endsWith(".stories.tsx") || file.endsWith(".mdx")
);
const storyTitles = new Set(
  storyFiles.flatMap((file) => {
    const source = readFileSync(file, "utf8");
    return [
      ...(source.match(/title:\s*"(Patterns\/[^"]+)"/g) ?? []).map((match) =>
        match.replace(/title:\s*"/, "").replace(/"$/, "")
      ),
      ...(source.match(/title="(Patterns\/[^"]+)"/g) ?? []).map((match) =>
        match.replace(/title="/, "").replace(/"$/, "")
      ),
    ];
  })
);

const publishedStories = [
  "Patterns/Overview",
  "Patterns/Form field",
  "Patterns/Worklist table",
  "Patterns/Scan search",
  "Patterns/Workspace tabs",
  "Patterns/Operational app chrome",
  "Patterns/Patients step",
  "Patterns/Exclusive choice",
  "Patterns/Multi-select choice",
  "Patterns/In-step notice",
  "Patterns/Conditional reveal",
  "Patterns/Optional skip",
  "Patterns/Follow-up details",
  "Patterns/Document upload",
  "Patterns/Patients intake chrome",
];

let storybookHonesty = true;
for (const title of publishedStories) {
  if (!storyTitles.has(title)) {
    storybookHonesty = false;
    fail(`missing Storybook title: ${title}`);
  }
  if (!registry.includes(`storybook: "${title}"`)) {
    storybookHonesty = false;
    fail(`registry missing storybook: "${title}"`);
  }
}
if (storybookHonesty) {
  pass("published pattern recipes have Patterns/ Storybook titles");
}

check(
  !storyTitles.has("Patterns/Search") &&
    !storyTitles.has("Patterns/Feedback") &&
    !storyTitles.has("Patterns/Empty State"),
  "does not invent generic Search, Feedback, or Empty State stories"
);

console.log("");
if (failed) {
  console.error("Patterns validation failed.");
  process.exit(1);
}

console.log("Patterns registry, navigation, and documentation routes are valid.");
