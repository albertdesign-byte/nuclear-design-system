import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

import { getDocumentedComponents } from "../config/components-registry";

const root = process.cwd();
const layoutRoot = dirname(fileURLToPath(import.meta.url));
const tocSource = readFileSync(join(layoutRoot, "docs-table-of-contents.tsx"), "utf8");
const tocHelpers = readFileSync(join(layoutRoot, "docs-toc.ts"), "utf8");
const primitivePage = readFileSync(
  join(layoutRoot, "../primitives/docs-component-page.tsx"),
  "utf8"
);
const overviewPage = readFileSync(
  join(layoutRoot, "../components/docs-component-page.tsx"),
  "utf8"
);
const patternPage = readFileSync(
  join(layoutRoot, "../patterns/docs-pattern-page.tsx"),
  "utf8"
);
const templatePage = readFileSync(
  join(layoutRoot, "../templates/docs-template-page.tsx"),
  "utf8"
);
const previewTabs = readFileSync(
  join(layoutRoot, "../primitives/component-code-tabs.tsx"),
  "utf8"
);
const overviewRoute = readFileSync(
  join(root, "src/app/docs/components/page.tsx"),
  "utf8"
);
const shellCss = readFileSync(join(layoutRoot, "../docs-shell.css"), "utf8");

function walk(dir: string, files: string[] = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      walk(full, files);
      continue;
    }
    files.push(full);
  }
  return files;
}

describe("component documentation table of contents", () => {
  it("discovers headings from the rendered page instead of a hardcoded list", () => {
    expect(tocSource).toContain("collectDocsTocEntries");
    expect(tocSource).toContain("nestDocsTocItems");
    expect(tocSource).not.toMatch(/label:\s*"Overview"/);
    expect(tocSource).not.toContain("API Reference");
    expect(tocHelpers).toContain("section[id], h2, h3");
    expect(tocHelpers).toContain("[data-toc-exclude], article");
    expect(tocHelpers).toContain("sectionHasOwnTocHeading");
    expect(tocHelpers).toContain("if (!label)");
  });

  it("renders nested links, hash navigation, and sticky right-rail chrome", () => {
    expect(tocSource).toContain("On This Page");
    expect(tocSource).toContain("href={`#${item.id}`}");
    expect(tocSource).toContain("item.children");
    expect(tocSource).toContain("pl-[var(--space-inline-md)]");
    expect(tocSource).toContain("IntersectionObserver");
    expect(tocSource).toContain("hashchange");
    expect(tocSource).toContain("readHashId");
    expect(tocSource).toContain("scrollToDocsSection(item.id)");
    expect(tocSource).toContain('scrollToDocsSection(hashId, "auto")');
    expect(tocHelpers).toContain('prefersReducedMotion ? "auto" : "smooth"');
    expect(tocHelpers).toContain('scrollIntoView({ behavior, block: "start" })');
    expect(shellCss).toContain("scroll-behavior: smooth");
    expect(tocSource).toContain("aria-current={isActive ? \"location\" : undefined}");
    expect(tocSource).toContain("focus-visible:ring-[var(--color-focus-ring)]");
    expect(tocSource).toContain("w-[var(--docs-toc-width)]");
    expect(tocSource).toContain("docs-table-of-contents sticky top-[var(--docs-header-height)]");
    expect(tocSource).toContain("z-[var(--z-sticky)]");
    expect(tocSource).toContain("self-start");
    expect(tocSource).toContain("hidden");
    expect(tocSource).toContain("xl:block");
    expect(tocSource).toContain("overflow-y-auto");
    expect(shellCss).toContain("--docs-toc-width: 288px");
    expect(shellCss).toContain(".docs-toc-target");
  });

  it("integrates into both component documentation layouts automatically", () => {
    expect(primitivePage).toContain("DocsTableOfContents");
    expect(primitivePage).toContain("data-slot=\"docs-toc-source\"");
    expect(primitivePage).not.toContain("overflow-x-hidden");
    expect(primitivePage).toContain("overflow-x-auto");
    expect(overviewPage).toContain("DocsTableOfContents");
    expect(overviewPage).toContain("data-slot=\"docs-toc-source\"");
    expect(overviewPage).not.toContain("overflow-x-hidden");
    expect(overviewPage).toContain("overflow-x-auto");
    expect(overviewRoute).toContain("id={slugifyHeadingId(category)}");
    expect(previewTabs).toContain("data-toc-exclude");
  });

  it("is used by every registered component documentation page", () => {
    const documented = getDocumentedComponents();

    for (const entry of documented) {
      if (entry.href === "/docs/components") {
        expect(overviewPage).toContain("DocsTableOfContents");
        continue;
      }

      const slug = entry.href.replace("/docs/components/", "");
      const docsPage = join(
        root,
        "src/components/docs/components",
        slug,
        `${slug}-docs-page.tsx`
      );
      expect(existsSync(docsPage), docsPage).toBe(true);
      const source = readFileSync(docsPage, "utf8");
      expect(source, entry.title).toContain(
        'from "@/components/docs/primitives/docs-component-page"'
      );
      expect(source, entry.title).not.toContain("DocsPatternPage");
      expect(source, entry.title).not.toContain("DocsTemplatePage");
    }
  });

  it("does not appear on Pattern or Template documentation pages", () => {
    expect(patternPage).not.toContain("DocsTableOfContents");
    expect(templatePage).not.toContain("DocsTableOfContents");
    expect(patternPage).not.toContain("docs-toc-source");
    expect(templatePage).not.toContain("docs-toc-source");

    const patternDocs = walk(join(root, "src/components/docs/patterns")).filter(
      (file) => file.endsWith("-docs-page.tsx")
    );
    const templateDocs = walk(join(root, "src/components/docs/templates")).filter(
      (file) => file.endsWith("-docs-page.tsx")
    );
    const appShell = join(
      root,
      "src/components/docs/components/app-shell/app-shell-docs-page.tsx"
    );

    for (const file of [...patternDocs, ...templateDocs, appShell]) {
      const source = readFileSync(file, "utf8");
      expect(source, file).not.toContain("DocsTableOfContents");
    }
  });
});
