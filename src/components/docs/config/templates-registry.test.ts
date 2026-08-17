import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { getDocumentedComponents } from "./components-registry";
import {
  getDocumentedTemplates,
  getTemplateEntry,
  getTemplateMetadata,
  getTemplateNavCategory,
  getTemplateNeighbors,
  getTemplateSearchEntries,
  templatesRegistry,
} from "./templates-registry";

const root = process.cwd();

function listTemplateStoryTitles() {
  const titles = new Set<string>();

  function walk(dir: string) {
    if (!existsSync(dir)) {
      return;
    }

    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) {
        walk(full);
        continue;
      }

      if (!entry.endsWith(".stories.tsx") && !entry.endsWith(".mdx")) {
        continue;
      }

      const source = readFileSync(full, "utf8");
      const storyMatch = source.match(/title:\s*"(Templates\/[^"]+)"/);
      const mdxMatch = source.match(/title="(Templates\/[^"]+)"/);
      if (storyMatch) {
        titles.add(storyMatch[1]);
      }
      if (mdxMatch) {
        titles.add(mdxMatch[1]);
      }
    }
  }

  walk(join(root, "src/components"));
  walk(join(root, "src/stories/templates"));
  return titles;
}

describe("templates registry", () => {
  const documented = getDocumentedTemplates();
  const documentedHrefs = documented.map((entry) => entry.href);
  const documentedComponentHrefs = new Set(
    getDocumentedComponents().map((entry) => entry.href)
  );

  it("publishes Overview, AppShell, MultiStepFlowLayout, and SearchResults", () => {
    expect(documented.map((entry) => entry.title)).toEqual([
      "Overview",
      "AppShell",
      "MultiStepFlowLayout",
      "SearchResults",
    ]);
  });

  it("does not classify MultiStepFlowLayout as a product", () => {
    const layout = getTemplateEntry("/docs/templates/multi-step-flow-layout");
    expect(layout?.title).toBe("MultiStepFlowLayout");
    expect(layout?.href.startsWith("/docs/products")).toBe(false);
    expect(layout?.href.startsWith("/docs/templates")).toBe(true);
  });

  it("keeps documented hrefs unique", () => {
    expect(new Set(documentedHrefs).size).toBe(documentedHrefs.length);
  });

  it("points relatedComponents at documented component hrefs", () => {
    for (const entry of documented) {
      for (const related of entry.relatedComponents) {
        expect(
          documentedComponentHrefs.has(related),
          `${entry.title} → ${related}`
        ).toBe(true);
      }
    }
  });

  it("has a route for every published template", () => {
    for (const href of documentedHrefs) {
      const relative =
        href === "/docs/templates"
          ? "src/app/docs/templates/page.tsx"
          : `src/app/docs/templates/${href.replace("/docs/templates/", "")}/page.tsx`;
      expect(existsSync(join(root, relative)), relative).toBe(true);
    }
  });

  it("derives navigation and search from the registry", () => {
    const nav = getTemplateNavCategory();
    expect(nav.items.map((item) => item.title)).toEqual(
      templatesRegistry.map((entry) => entry.title)
    );
    expect(getTemplateSearchEntries().map((item) => item.value)).toEqual(
      documentedHrefs
    );
  });

  it("keeps previous/next sequential across published entries", () => {
    const neighbors = getTemplateNeighbors("/docs/templates/app-shell");
    expect(neighbors.previous?.href).toBe("/docs/templates");
    expect(neighbors.next?.href).toBe("/docs/templates/multi-step-flow-layout");

    const searchResults = getTemplateNeighbors("/docs/templates/search-results");
    expect(searchResults.previous?.href).toBe(
      "/docs/templates/multi-step-flow-layout"
    );
    expect(searchResults.next).toBeUndefined();
  });

  it("does not publish Form Page", () => {
    expect(
      templatesRegistry.some((entry) => entry.title === "Form Page")
    ).toBe(false);
  });

  it("keeps Detail View coming soon until a product entity screen exists", () => {
    const detail = templatesRegistry.find((entry) => entry.title === "Detail View");
    expect(detail?.comingSoon).toBe(true);
    expect(detail?.href).toBe("#");
    expect(detail?.storybook).toBe("");
  });

  it("maps SearchResults to Templates/SearchResults", () => {
    expect(getTemplateEntry("/docs/templates/search-results")?.storybook).toBe(
      "Templates/SearchResults"
    );
  });

  it("generates metadata from the registry", () => {
    const metadata = getTemplateMetadata("/docs/templates/multi-step-flow-layout");
    expect(metadata.title).toBe("MultiStepFlowLayout");
    expect(String(metadata.description)).toContain("Generic multi-step workflow");
  });

  it("only references Storybook titles that exist", () => {
    const storyTitles = listTemplateStoryTitles();

    for (const entry of documented) {
      if (!entry.storybook) {
        continue;
      }

      expect(
        storyTitles.has(entry.storybook),
        `${entry.title} → missing ${entry.storybook}`
      ).toBe(true);
      expect(entry.storybook.startsWith("Templates/")).toBe(true);
    }
  });
});
