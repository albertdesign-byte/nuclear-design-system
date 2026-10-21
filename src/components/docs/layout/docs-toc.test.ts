import { describe, expect, it } from "vitest";

import {
  flattenDocsTocItems,
  labelFromHeadingId,
  nestDocsTocItems,
  pickActiveSectionId,
  resolveDocsScrollBehavior,
  slugifyHeadingId,
  uniqueHeadingId,
  type DocsTocEntry,
} from "./docs-toc";

describe("docs table of contents helpers", () => {
  it("slugifies headings into stable ids and falls back for empty labels", () => {
    expect(slugifyHeadingId("API Reference")).toBe("api-reference");
    expect(slugifyHeadingId("Hover / dragging")).toBe("hover-dragging");
    expect(slugifyHeadingId("   ")).toBe("section");
    expect(slugifyHeadingId("")).toBe("section");
  });

  it("labels untitled sections from their ids", () => {
    expect(labelFromHeadingId("installation")).toBe("Installation");
    expect(labelFromHeadingId("api-reference")).toBe("API Reference");
    expect(labelFromHeadingId("real-screen")).toBe("Real Screen");
  });

  it("prevents duplicate heading ids", () => {
    const used = new Set<string>();
    expect(uniqueHeadingId("usage", used)).toBe("usage");
    expect(uniqueHeadingId("usage", used)).toBe("usage-2");
    expect(uniqueHeadingId("Usage", used)).toBe("usage-3");
    expect(uniqueHeadingId("", used)).toBe("section");
    expect(uniqueHeadingId("???", used)).toBe("section-2");
  });

  it("nests h3 entries under the preceding h2 and keeps flat pages valid", () => {
    const nested = nestDocsTocItems([
      { id: "overview", label: "Overview", level: 2 },
      { id: "variants", label: "Variants", level: 2 },
      { id: "primary", label: "Primary", level: 3 },
      { id: "secondary", label: "Secondary", level: 3 },
      { id: "states", label: "States", level: 2 },
      { id: "hover", label: "Hover", level: 3 },
      { id: "api-reference", label: "API Reference", level: 2 },
    ] satisfies DocsTocEntry[]);

    expect(nested).toEqual([
      { id: "overview", label: "Overview" },
      {
        id: "variants",
        label: "Variants",
        children: [
          { id: "primary", label: "Primary" },
          { id: "secondary", label: "Secondary" },
        ],
      },
      {
        id: "states",
        label: "States",
        children: [{ id: "hover", label: "Hover" }],
      },
      { id: "api-reference", label: "API Reference" },
    ]);

    expect(
      nestDocsTocItems([{ id: "usage", label: "Usage", level: 2 }])
    ).toEqual([{ id: "usage", label: "Usage" }]);
  });

  it("promotes orphan nested headings instead of dropping them", () => {
    expect(
      nestDocsTocItems([{ id: "primary", label: "Primary", level: 3 }])
    ).toEqual([{ id: "primary", label: "Primary" }]);
  });

  it("flattens nested items for observers and hash matching", () => {
    expect(
      flattenDocsTocItems([
        {
          id: "states",
          label: "States",
          children: [{ id: "empty", label: "Empty" }],
        },
      ]).map((item) => item.id)
    ).toEqual(["states", "empty"]);
  });

  it("picks the topmost intersecting section and ignores empty intersections", () => {
    expect(
      pickActiveSectionId([
        { id: "overview", top: 120, isIntersecting: true },
        { id: "variants", top: 40, isIntersecting: true },
        { id: "states", top: 8, isIntersecting: false },
      ])
    ).toBe("variants");

    expect(
      pickActiveSectionId([{ id: "overview", top: 400, isIntersecting: false }])
    ).toBeNull();
  });

  it("uses smooth in-page scrolling unless the user prefers reduced motion", () => {
    expect(resolveDocsScrollBehavior(false)).toBe("smooth");
    expect(resolveDocsScrollBehavior(true)).toBe("auto");
  });
});
