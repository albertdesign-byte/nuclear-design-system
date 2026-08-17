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

const registry = read("src/components/docs/config/templates-registry.ts");
const navigation = read("src/components/docs/config/navigation.ts");
const search = read("src/components/docs/layout/docs-search.tsx");
const overview = read("src/app/docs/templates/page.tsx");
const shell = read("src/components/docs/templates/docs-template-page.tsx");

const documentedHrefs = [
  ...registry.matchAll(/href:\s*"(\/docs\/templates[^"]*)"/g),
].map((match) => match[1]);
const uniqueDocumented = [...new Set(documentedHrefs)];

const routesDir = join(root, "src/app/docs/templates");
const routeHrefs = walk(routesDir)
  .filter((file) => file.endsWith("/page.tsx") || file.endsWith("\\page.tsx"))
  .map((file) => {
    const relative = file
      .slice(routesDir.length)
      .replaceAll("\\", "/")
      .replace(/\/page\.tsx$/, "");
    return relative ? `/docs/templates${relative}` : "/docs/templates";
  })
  .sort();

console.log("=== Templates validation ===\n");

check(
  navigation.includes("getTemplateNavCategory()"),
  "sidebar navigation is derived from the templates registry"
);
check(
  !navigation.includes('title: "Dashboard Layout"') &&
    !navigation.includes('title: "Multi-Step Flow"'),
  "navigation.ts has no hardcoded placeholder template list"
);
check(
  search.includes("getTemplateSearchEntries()"),
  "template search metadata is generated from the registry"
);
check(
  overview.includes("DocsTemplatePage") && overview.includes("templatesRegistry"),
  "overview page is derived from the registry"
);
check(
  shell.includes("DocsPageHeader") &&
    shell.includes("getTemplateNeighbors") &&
    shell.includes("Button") &&
    shell.includes("Link"),
  "DocsTemplatePage uses existing primitives and registry neighbors"
);
check(
  uniqueDocumented.length === documentedHrefs.length,
  "documented registry hrefs are unique"
);

const missingRoutes = uniqueDocumented.filter(
  (href) => !routeHrefs.includes(href)
);
check(
  missingRoutes.length === 0,
  missingRoutes.length === 0
    ? "every documented registry href has a route"
    : `registry hrefs missing routes: ${missingRoutes.join(", ")}`
);
check(
  routeHrefs.every((href) => uniqueDocumented.includes(href)),
  "every template route has a registry href"
);

check(
  registry.includes('title: "AppShell"') &&
    registry.includes('href: "/docs/templates/app-shell"') &&
    registry.includes('storybook: "Templates/AppShell"'),
  "AppShell is cataloged as a Template"
);
check(
  registry.includes('title: "MultiStepFlowLayout"') &&
    registry.includes('href: "/docs/templates/multi-step-flow-layout"') &&
    registry.includes('storybook: "Templates/MultiStepFlowLayout"'),
  "MultiStepFlowLayout is cataloged as a Template"
);
check(
  registry.includes('title: "SearchResults"') &&
    registry.includes('href: "/docs/templates/search-results"') &&
    registry.includes('storybook: "Templates/SearchResults"'),
  "SearchResults is cataloged as a Template"
);
check(
  !registry.includes('title: "Form Page"') &&
    !registry.includes('title: "FormPage"'),
  "Form Page is not a template — forms use MultiStepFlowLayout or Card + Form Field"
);
check(
  registry.includes('title: "Detail View"') &&
    /title:\s*"Detail View"[\s\S]*?comingSoon:\s*true/.test(registry),
  "Detail View stays coming soon until a product entity screen exists"
);
check(
  !registry.includes("/docs/products") &&
    !registry.includes("PatientsShell") &&
    !registry.includes('title: "IntakeShell"'),
  "MultiStepFlowLayout is not classified as a Product or named after a domain"
);

const storyFiles = [
  ...walk(join(root, "src/components")).filter((file) =>
    file.endsWith(".stories.tsx")
  ),
  ...walk(join(root, "src/stories/templates")).filter(
    (file) => file.endsWith(".mdx") || file.endsWith(".stories.tsx")
  ),
];
const storyTitles = new Set(
  storyFiles.flatMap((file) => {
    const source = readFileSync(file, "utf8");
    return [
      ...(source.match(/title:\s*"(Templates\/[^"]+)"/g) ?? []).map((match) =>
        match.replace(/title:\s*"/, "").replace(/"$/, "")
      ),
      ...(source.match(/title="(Templates\/[^"]+)"/g) ?? []).map((match) =>
        match.replace(/title="/, "").replace(/"$/, "")
      ),
    ];
  })
);

let storybookHonesty = true;
for (const title of [
  "Templates/Overview",
  "Templates/AppShell",
  "Templates/MultiStepFlowLayout",
  "Templates/SearchResults",
]) {
  if (!storyTitles.has(title)) {
    storybookHonesty = false;
    fail(`missing Storybook title: ${title}`);
  }
}
if (storybookHonesty) {
  pass("published templates have Templates/ Storybook titles");
}

for (const href of uniqueDocumented) {
  const slug = href.replace("/docs/templates/", "");
  const pagePath =
    href === "/docs/templates"
      ? join(routesDir, "page.tsx")
      : join(routesDir, slug, "page.tsx");
  if (!existsSync(pagePath)) {
    fail(`missing route file for ${href}`);
    continue;
  }
  const source = readFileSync(pagePath, "utf8");
  if (href === "/docs/templates") {
    check(
      source.includes('getTemplateEntry("/docs/templates")'),
      "overview metadata is generated from the registry"
    );
    continue;
  }
  check(
    source.includes(`getTemplateMetadata("${href}")`) ||
      source.includes(`getTemplateMetadata(\n  "${href}"`),
    `${slug}/page.tsx uses getTemplateMetadata("${href}")`
  );
}

console.log("");
if (failed) {
  console.error("Templates validation failed.");
  process.exit(1);
}

console.log("Templates registry architecture is valid.");
