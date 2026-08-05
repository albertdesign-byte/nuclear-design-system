"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import { GlobalSearchBar } from "@/components/global-search-bar";
import {
  globalSearchBarInstallationUiSnippet,
  globalSearchBarRealScreenSnippet,
  globalSearchBarUsageSnippet,
  globalSearchBarWithItemsSnippet,
} from "@/components/docs/components/global-search-bar/global-search-bar-code-snippets";
import { GlobalSearchBarRealScreenPreview } from "@/components/docs/components/global-search-bar/global-search-bar-real-screen-preview";
import { globalSearchBarTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const globalSearchBarApiRows = [
  { prop: "placeholder", type: "string", defaultValue: '"Search everything"' },
  { prop: "items", type: "GlobalSearchItem[]", defaultValue: "[]" },
  { prop: "onSelect", type: "(value: string) => void", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "—" },
];

export function GlobalSearchBarDocsPage() {
  return (
    <DocsComponentPage
      title="Global Search Bar"
      description="Application-wide search trigger using Input and CommandDialog. Opens with click or ⌘K."
      tocItems={globalSearchBarTocItems}
      realScreen={{
        preview: <GlobalSearchBarRealScreenPreview />,
        code: globalSearchBarRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/dashboard-panel" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Dashboard Panel
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/user-profile-block" />}
            className="gap-[var(--space-inline-sm)]"
          >
            User Profile Block
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={globalSearchBarInstallationUiSnippet}>
              <GlobalSearchBar placeholder="Search everything" />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/global-search-bar</DocsInlineCode>.
                The field opens a command palette dialog on click or{" "}
                <DocsInlineCode>⌘K</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={globalSearchBarUsageSnippet}>
              <GlobalSearchBar placeholder="Search everything" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="with-items"
            title="With Items"
            description="Pass grouped search results and handle selection with onSelect."
          >
            <DocsPreview code={globalSearchBarWithItemsSnippet}>
              <GlobalSearchBar
                placeholder="Search everything"
                items={[
                  { label: "SRID-1001 — Elena Morales", value: "1001", group: "Scans" },
                  { label: "My active scans", value: "scans", group: "Views" },
                ]}
              />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="full-example"
            title="Full Example"
            description="See Global Search Bar in the app header on the dashboard screen."
          >
            <Button render={<Link href="/examples/dashboard" />}>
              Open dashboard example
              <ArrowRightIcon />
            </Button>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={globalSearchBarApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
