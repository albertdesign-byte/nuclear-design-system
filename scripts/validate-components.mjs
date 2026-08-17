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
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, files);
    else files.push(full);
  }
  return files;
}

const registry = read("src/components/docs/config/components-registry.ts");
const navigation = read("src/components/docs/config/navigation.ts");
const search = read("src/components/docs/layout/docs-search.tsx");
const overview = read("src/app/docs/components/page.tsx");
const shell = read(
  "src/components/docs/components/docs-component-page.tsx"
);
const primitive = read(
  "src/components/docs/primitives/docs-component-page.tsx"
);

const documentedHrefs = [
  ...registry.matchAll(/href:\s*"(\/docs\/components[^"]*)"/g),
].map((match) => match[1]);
const uniqueDocumented = [...new Set(documentedHrefs)];

const routesDir = join(root, "src/app/docs/components");
const routeHrefs = walk(routesDir)
  .filter((file) => file.endsWith("/page.tsx") || file.endsWith("\\page.tsx"))
  .map((file) => {
    const relative = file
      .slice(routesDir.length)
      .replaceAll("\\", "/")
      .replace(/\/page\.tsx$/, "");
    return relative ? `/docs/components${relative}` : "/docs/components";
  })
  .sort();

console.log("=== Components validation ===\n");

check(
  navigation.includes("getComponentNavCategories()"),
  "sidebar navigation is derived from the components registry"
);
check(
  !navigation.includes('title: "Button", href: "/docs/components/button"'),
  "navigation.ts has no hardcoded component lists"
);
check(
  search.includes("getComponentSearchEntries()"),
  "component search metadata is generated from the registry"
);
check(
  overview.includes("DocsComponentPage") &&
    overview.includes("componentCategories") &&
    overview.includes("componentsRegistry"),
  "overview page is derived from the registry shell"
);
check(
  shell.includes("DocsPageHeader") &&
    shell.includes("getComponentNeighbors") &&
    shell.includes("Button") &&
    shell.includes("Link"),
  "DocsComponentPage uses existing primitives and registry neighbors"
);
check(
  primitive.includes("getComponentNeighbors") &&
    primitive.includes("Previous:") &&
    primitive.includes("Next:"),
  "component docs primitive paginates from the registry"
);

check(
  uniqueDocumented.length === documentedHrefs.length,
  "documented registry hrefs are unique"
);

const missingRoutes = uniqueDocumented.filter(
  (href) => !routeHrefs.includes(href)
);
const extraRoutes = routeHrefs.filter(
  (href) => !uniqueDocumented.includes(href)
);
check(
  missingRoutes.length === 0,
  missingRoutes.length === 0
    ? "every documented registry href has a route"
    : `registry hrefs missing routes: ${missingRoutes.join(", ")}`
);
check(
  extraRoutes.length === 0,
  extraRoutes.length === 0
    ? "every component route has a registry href"
    : `routes missing from registry: ${extraRoutes.join(", ")}`
);

const requiredKeys = [
  "title",
  "href",
  "description",
  "status",
  "aliases",
  "keywords",
  "figma",
  "storybook",
  "category",
  "tokens",
  "accessibility",
  "relatedComponents",
];
check(
  requiredKeys.every((key) => registry.includes(`${key}:`)),
  "registry declares required metadata fields"
);

const storyFiles = walk(join(root, "src/components")).filter((file) =>
  file.endsWith(".stories.tsx")
);
const storyTitles = new Set(
  storyFiles.flatMap((file) => {
    const match = readFileSync(file, "utf8").match(
      /title:\s*"((?:Components|Patterns)\/[^"]+)"/
    );
    return match ? [match[1]] : [];
  })
);
const registryArray = registry.slice(
  registry.indexOf("export const componentsRegistry"),
  registry.indexOf("export function getComponentEntry")
);
const registryEntries = [
  ...registryArray.matchAll(/title:\s*"([^"]+)"[\s\S]*?storybook:\s*"([^"]*)"/g),
];

let storybookHonesty = true;
for (const [, title, storybook] of registryEntries) {
  if (!storybook) {
    continue;
  }

  const expected = `Components/${title}`;
  if (storybook !== expected) {
    storybookHonesty = false;
    fail(`${title} storybook must equal ${expected}, got ${storybook}`);
  }
  if (!storyTitles.has(storybook)) {
    storybookHonesty = false;
    fail(`registry storybook title has no story file: ${storybook}`);
  }
  if (!storybook.startsWith("Components/")) {
    storybookHonesty = false;
    fail(`registry storybook title points at the wrong layer: ${storybook}`);
  }
}
if (storybookHonesty) {
  pass("registry storybook titles match docs titles and existing Components stories");
}

check(
  registry.includes('storybook: "Components/Date Range Picker"') &&
    !registry.includes('storybook: "Components/DatePicker"') &&
    !registry.includes('storybook: "Components/Date Picker"'),
  "Date Range Picker maps to its own stories, not Date Picker"
);
check(
  registry.includes('storybook: "Components/Payment Form"') &&
    registry.includes('storybook: "Components/Deposit Summary"'),
  "Payment Form and Deposit Summary are cataloged as Components stories"
);

for (const query of [
  "primary button",
  "focus ring",
  "dialog",
  "form controls",
  "destructive",
]) {
  check(
    registry.toLowerCase().includes(query),
    `search corpus includes "${query}"`
  );
}

const childRoutes = uniqueDocumented.filter(
  (href) => href !== "/docs/components"
);
let metadataParity = true;
for (const href of childRoutes) {
  const slug = href.replace("/docs/components/", "");
  const pagePath = join(routesDir, slug, "page.tsx");
  if (!existsSync(pagePath)) {
    metadataParity = false;
    fail(`missing route file for ${href}`);
    continue;
  }
  const source = readFileSync(pagePath, "utf8");
  if (!source.includes(`getComponentMetadata("${href}")`)) {
    metadataParity = false;
    fail(`${slug}/page.tsx does not use getComponentMetadata("${href}")`);
  }
}
if (metadataParity) {
  pass("component route metadata is generated from the registry");
}

check(
  overview.includes('getComponentEntry("/docs/components")'),
  "overview metadata is generated from the registry"
);

for (const category of [
  "Inputs",
  "Navigation",
  "Feedback",
  "Data Display",
  "Overlay",
  "Layout",
]) {
  check(
    registry.includes(`"${category}"`) && shell.length > 0,
    `registry supports category ${category}`
  );
}

console.log("");
if (failed) {
  console.error("Components validation failed.");
  process.exit(1);
}

console.log("Components registry architecture is valid.");
