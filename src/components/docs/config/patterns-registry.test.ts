import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import { getDocumentedComponents } from "./components-registry";
import {
  getDocumentedPatterns,
  getPatternMetadata,
  getPatternNavCategories,
  getPatternNeighbors,
  getPatternRouteSlugs,
  getPatternSearchEntries,
  patternCategories,
  patternMatchesQuery,
  patternsRegistry,
} from "./patterns-registry";

const requiredKeys = [
  "title",
  "href",
  "description",
  "aliases",
  "keywords",
  "category",
  "relatedPatterns",
  "relatedComponents",
  "componentsUsed",
  "purpose",
  "whenToUse",
  "structure",
  "variations",
  "accessibility",
  "productExamples",
  "sections",
] as const;

const requiredSectionIds = [
  "purpose",
  "when-to-use",
  "structure",
  "components-used",
  "accessibility",
  "product-examples",
] as const;

const searchQueries = [
  { query: "continue", expected: ["Patients step"] },
  { query: "radio", expected: ["Exclusive choice"] },
  { query: "dropzone", expected: ["Document upload"] },
  { query: "worklist", expected: ["Worklist table"] },
  { query: "scan search", expected: ["Scan search"] },
] as const;

const root = process.cwd();

function listPatternStoryTitles() {
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
      const storyMatch = source.match(/title:\s*"(Patterns\/[^"]+)"/);
      const mdxMatch = source.match(/title="(Patterns\/[^"]+)"/);
      if (storyMatch) {
        titles.add(storyMatch[1]);
      }
      if (mdxMatch) {
        titles.add(mdxMatch[1]);
      }
    }
  }

  walk(join(root, "src/stories/patterns"));
  return titles;
}

const publishedPatternStories = [
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
] as const;

const approvedPatternTitles = [
  "Overview",
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
] as const;

describe("patterns registry", () => {
  const documented = getDocumentedPatterns();
  const documentedHrefs = documented.map((entry) => entry.href);
  const documentedSet = new Set(documentedHrefs);
  const documentedComponentHrefs = new Set(
    getDocumentedComponents().map((entry) => entry.href)
  );

  it("includes only the approved extracted patterns", () => {
    expect(patternsRegistry.map((entry) => entry.title)).toEqual([
      ...approvedPatternTitles,
    ]);
  });

  it("includes every required metadata field on each entry", () => {
    for (const entry of patternsRegistry) {
      for (const key of requiredKeys) {
        expect(entry[key], `${entry.title} missing ${key}`).toBeDefined();
      }

      expect(entry.title.length).toBeGreaterThan(0);
      expect(entry.description.length).toBeGreaterThan(0);
      expect(Array.isArray(entry.aliases)).toBe(true);
      expect(Array.isArray(entry.keywords)).toBe(true);
      expect(Array.isArray(entry.relatedPatterns)).toBe(true);
      expect(Array.isArray(entry.relatedComponents)).toBe(true);
      expect(Array.isArray(entry.sections)).toBe(true);

      if (entry.category === "Overview") {
        expect(entry.href).toBe("/docs/patterns");
      } else {
        expect(patternCategories).toContain(entry.category);
        expect(entry.purpose.length).toBeGreaterThan(0);
        expect(entry.whenToUse.length).toBeGreaterThan(0);
        expect(entry.structure.length).toBeGreaterThan(0);
        expect(entry.accessibility.length).toBeGreaterThan(0);
        expect(entry.productExamples.length).toBeGreaterThan(0);
        for (const sectionId of requiredSectionIds) {
          expect(
            entry.sections.some((section) => section.id === sectionId),
            `${entry.title} missing #${sectionId}`
          ).toBe(true);
        }
      }
    }
  });

  it("keeps documented hrefs unique and on the patterns route", () => {
    expect(new Set(documentedHrefs).size).toBe(documentedHrefs.length);

    for (const entry of patternsRegistry) {
      expect(entry.href.startsWith("/docs/patterns")).toBe(true);
    }
  });

  it("keeps previous/next sequential across documented entries", () => {
    expect(getPatternNeighbors(documented[0].href).previous).toBeUndefined();
    expect(getPatternNeighbors(documented.at(-1)!.href).next).toBeUndefined();

    for (const [index, entry] of documented.entries()) {
      const { previous, next } = getPatternNeighbors(entry.href);
      expect(previous?.href).toBe(documented[index - 1]?.href);
      expect(next?.href).toBe(documented[index + 1]?.href);
    }
  });

  it("generates search metadata that resolves canonical queries", () => {
    const searchEntries = getPatternSearchEntries();
    expect(searchEntries.length).toBeGreaterThan(documented.length);
    expect(searchEntries.every((item) => item.searchText.length > 0)).toBe(true);

    for (const { query, expected } of searchQueries) {
      const matches = documented.filter((entry) =>
        patternMatchesQuery(entry, query)
      );
      const titles = matches.map((entry) => entry.title);
      expect(matches.length, `no search hits for "${query}"`).toBeGreaterThan(0);
      for (const title of expected) {
        expect(titles, `"${query}" should include ${title}`).toContain(title);
      }
    }
  });

  it("derives sidebar categories from the registry", () => {
    const categories = getPatternNavCategories();
    expect(categories[0]?.id).toBe("patterns-overview");
    expect(categories.slice(1).map((category) => category.title)).toEqual([
      ...patternCategories,
    ]);
    expect(categories.some((category) => category.items.some((item) => item.comingSoon))).toBe(
      false
    );
  });

  it("derives route metadata from the registry", () => {
    const metadata = getPatternMetadata("/docs/patterns/patients-step");
    expect(metadata.title).toBe("Patients step");
    expect(String(metadata.description).length).toBeGreaterThan(0);
  });

  it("keeps documented routes in parity with the registry", () => {
    expect(existsSync(join(root, "src/app/docs/patterns/page.tsx"))).toBe(true);
    expect(
      existsSync(join(root, "src/app/docs/patterns/form-field-patterns/page.tsx"))
    ).toBe(true);
    expect(existsSync(join(root, "src/app/docs/patterns/[slug]/page.tsx"))).toBe(
      true
    );

    const slugs = getPatternRouteSlugs();
    const expectedSlugs = documented
      .filter(
        (entry) =>
          entry.href !== "/docs/patterns" &&
          entry.href !== "/docs/patterns/form-field-patterns"
      )
      .map((entry) => entry.href.replace("/docs/patterns/", ""));

    expect(slugs.sort()).toEqual([...expectedSlugs].sort());
  });

  it("points relatedPatterns and relatedComponents at documented hrefs", () => {
    for (const entry of patternsRegistry) {
      for (const related of entry.relatedPatterns) {
        expect(documentedSet.has(related), `${entry.title} → ${related}`).toBe(
          true
        );
      }

      for (const related of entry.relatedComponents) {
        expect(
          documentedComponentHrefs.has(related),
          `${entry.title} → ${related}`
        ).toBe(true);
      }
    }
  });

  it("links product examples to published Patients or MPF routes", () => {
    for (const entry of documented.filter((item) => item.category !== "Overview")) {
      for (const example of entry.productExamples) {
        expect(
          example.href.startsWith("/docs/userflow/patients/") ||
            example.href === "/docs/userflow/nuclear/dashboard",
          `${entry.title} example ${example.href}`
        ).toBe(true);
      }
    }
  });

  it("keeps docs title, registry title, and Storybook title identical", () => {
    const storyTitles = listPatternStoryTitles();

    for (const title of publishedPatternStories) {
      expect(storyTitles.has(title), `missing ${title}`).toBe(true);
    }

    for (const entry of patternsRegistry) {
      const expected = `Patterns/${entry.title}`;
      if (storyTitles.has(expected)) {
        expect(entry.storybook, `${entry.title} mapping`).toBe(expected);
      } else {
        expect(
          entry.storybook ?? "",
          `${entry.title} must not reference a missing story`
        ).toBe("");
      }
    }

    expect(storyTitles.has("Patterns/Search")).toBe(false);
    expect(storyTitles.has("Patterns/Feedback")).toBe(false);
    expect(storyTitles.has("Patterns/Empty State")).toBe(false);
  });
});
