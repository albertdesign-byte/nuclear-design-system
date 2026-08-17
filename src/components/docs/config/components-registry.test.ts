import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  componentCategories,
  componentMatchesQuery,
  componentsRegistry,
  getComponentEntry,
  getComponentMetadata,
  getComponentNavCategories,
  getComponentNeighbors,
  getComponentSearchEntries,
  getDocumentedComponents,
  hasPublishedStorybook,
} from "./components-registry";

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
] as const;

const searchQueries = [
  { query: "primary button", expected: ["Button"] },
  { query: "focus ring", expected: ["Button"] },
  { query: "dialog", expected: ["Dialog"] },
  { query: "form controls", expected: ["Button", "Input", "Checkbox"] },
  { query: "destructive", expected: ["Button", "Alert Dialog"] },
] as const;

const root = process.cwd();
const routesDir = join(root, "src/app/docs/components");

function listComponentStoryTitles() {
  const titles = new Set<string>();
  const componentsDir = join(root, "src/components");

  function walk(dir: string) {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }

      if (!entry.endsWith(".stories.tsx")) {
        continue;
      }

      const source = readFileSync(full, "utf8");
      const match = source.match(
        /title:\s*"((?:Components|Patterns)\/[^"]+)"/
      );
      if (match) {
        titles.add(match[1]);
      }
    }
  }

  walk(componentsDir);
  return titles;
}

function listComponentRoutes(dir = routesDir, files: string[] = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      listComponentRoutes(full, files);
      continue;
    }

    if (entry === "page.tsx") {
      const relative = dir
        .slice(routesDir.length)
        .replaceAll("\\", "/")
        .replace(/^\//, "");
      files.push(relative ? `/docs/components/${relative}` : "/docs/components");
    }
  }

  return files;
}

describe("components registry", () => {
  const documented = getDocumentedComponents();
  const documentedHrefs = documented.map((entry) => entry.href);

  it("includes every required metadata field on each entry", () => {
    for (const entry of componentsRegistry) {
      for (const key of requiredKeys) {
        expect(entry[key], `${entry.title} missing ${key}`).toBeDefined();
      }

      expect(entry.title.length).toBeGreaterThan(0);
      expect(entry.description.length).toBeGreaterThan(0);
      expect(["stable", "planned"]).toContain(entry.status);
      expect(Array.isArray(entry.aliases)).toBe(true);
      expect(Array.isArray(entry.keywords)).toBe(true);
      expect(Array.isArray(entry.tokens)).toBe(true);
      expect(Array.isArray(entry.accessibility)).toBe(true);
      expect(Array.isArray(entry.relatedComponents)).toBe(true);

      if (entry.category === "Overview") {
        expect(entry.href).toBe("/docs/components");
      } else {
        expect(componentCategories).toContain(entry.category);
      }
    }
  });

  it("keeps documented hrefs unique and planned hrefs non-routable", () => {
    expect(new Set(documentedHrefs).size).toBe(documentedHrefs.length);

    for (const entry of componentsRegistry) {
      if (entry.status === "planned") {
        expect(entry.href).toBe("#");
      } else {
        expect(entry.href.startsWith("/docs/components")).toBe(true);
      }
    }
  });

  it("keeps previous/next sequential across documented entries", () => {
    expect(getComponentNeighbors(documented[0].href).previous).toBeUndefined();
    expect(getComponentNeighbors(documented.at(-1)!.href).next).toBeUndefined();

    for (const [index, entry] of documented.entries()) {
      const { previous, next } = getComponentNeighbors(entry.href);
      expect(previous?.href).toBe(documented[index - 1]?.href);
      expect(next?.href).toBe(documented[index + 1]?.href);
    }
  });

  it("generates search metadata that resolves canonical queries", () => {
    const searchEntries = getComponentSearchEntries();
    expect(searchEntries).toHaveLength(documented.length);
    expect(searchEntries.every((item) => item.searchText.length > 0)).toBe(true);

    for (const { query, expected } of searchQueries) {
      const matches = documented.filter((entry) =>
        componentMatchesQuery(entry, query)
      );
      const titles = matches.map((entry) => entry.title);
      expect(matches.length, `no search hits for "${query}"`).toBeGreaterThan(0);
      for (const title of expected) {
        expect(titles, `"${query}" should include ${title}`).toContain(title);
      }
    }
  });

  it("derives sidebar categories from the registry", () => {
    const categories = getComponentNavCategories();
    expect(categories[0]?.id).toBe("components-overview");
    expect(categories.slice(1).map((category) => category.title)).toEqual([
      ...componentCategories,
    ]);
  });

  it("derives route metadata from the registry", () => {
    const metadata = getComponentMetadata("/docs/components/button");
    expect(metadata.title).toBe("Button");
    expect(String(metadata.description).length).toBeGreaterThan(0);
  });

  it("keeps documented routes in parity with the registry", () => {
    const routes = listComponentRoutes();
    expect(routes.sort()).toEqual([...documentedHrefs].sort());

    for (const href of documentedHrefs) {
      const relative =
        href === "/docs/components"
          ? "src/app/docs/components/page.tsx"
          : `src/app/docs/components/${href.replace("/docs/components/", "")}/page.tsx`;
      expect(existsSync(join(root, relative)), relative).toBe(true);
    }
  });

  it("points relatedComponents at documented hrefs", () => {
    const documentedSet = new Set(documentedHrefs);
    for (const entry of componentsRegistry) {
      for (const related of entry.relatedComponents) {
        expect(documentedSet.has(related), `${entry.title} → ${related}`).toBe(
          true
        );
      }
    }
  });

  it("keeps docs title, registry title, and Storybook title identical", () => {
    const storyTitles = listComponentStoryTitles();

    for (const entry of componentsRegistry) {
      const expected = `Components/${entry.title}`;
      const storyExists = storyTitles.has(expected);

      if (entry.category === "Overview" || entry.status === "planned") {
        expect(entry.storybook, `${entry.title} must not publish a story`).toBe(
          ""
        );
        continue;
      }

      if (storyExists) {
        expect(entry.storybook, `${entry.title} mapping`).toBe(expected);
      } else {
        expect(
          entry.storybook,
          `${entry.title} must not reference a missing story`
        ).toBe("");
      }

      if (hasPublishedStorybook(entry)) {
        expect(storyTitles.has(entry.storybook), `${entry.title} → missing ${entry.storybook}`).toBe(
          true
        );
        expect(entry.storybook.startsWith("Components/")).toBe(true);
      }
    }

    expect(getComponentEntry("/docs/components/date-range-picker")?.storybook).toBe(
      "Components/Date Range Picker"
    );
    expect(getComponentEntry("/docs/components/payment-form")?.storybook).toBe(
      "Components/Payment Form"
    );
    expect(getComponentEntry("/docs/components/deposit-summary")?.storybook).toBe(
      "Components/Deposit Summary"
    );
  });
});
