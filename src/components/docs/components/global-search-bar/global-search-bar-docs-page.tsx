"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import { GlobalSearchBar } from "@/components/global-search-bar";
import {
  globalSearchBarInstallationUiSnippet,
  globalSearchBarRealScreenSnippet,
  globalSearchBarUsageSnippet,
  globalSearchBarWithItemsSnippet,
  searchFacilitiesSnippet,
  searchPatientsSnippet,
  searchStudiesSnippet,
} from "@/components/docs/components/global-search-bar/global-search-bar-code-snippets";
import { GlobalSearchBarRealScreenPreview } from "@/components/docs/components/global-search-bar/global-search-bar-real-screen-preview";
import {
  SearchCommandAuditPreview,
  SearchFacilitiesPreview,
  SearchPatientsPreview,
  SearchStudiesPreview,
} from "@/components/docs/components/global-search-bar/search-command-preview-blocks";
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
  { prop: "onSearch", type: "(query: string) => void", defaultValue: "—" },
  { prop: "dialogTitle", type: "string", defaultValue: '"Search"' },
  { prop: "dialogDescription", type: "string", defaultValue: '"Search across the application"' },
  { prop: "emptyMessage", type: "string", defaultValue: '"No results found."' },
  { prop: "shortcutEnabled", type: "boolean", defaultValue: "true" },
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
            id="component-audit"
            title="Component Audit"
            description="Search and Command share filtering mechanics, but their user intent and output are different."
          >
            <SearchCommandAuditPreview />
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <AuditCard
                title="Search"
                items={[
                  "Finds patients, studies, facilities, users, or records.",
                  "Returns an entity or result that the user opens or selects.",
                  "Uses a search-specific trigger and result language.",
                ]}
              />
              <AuditCard
                title="Command"
                items={[
                  "Runs quick actions or navigates to application destinations.",
                  "Supports shortcuts and command-oriented grouping.",
                  "Uses Command Palette as an expert acceleration surface.",
                ]}
              />
            </div>
          </DocsSection>

          <DocsSection
            id="decision"
            title="Decision"
            description="Scenario B applies: maintain both components with separate responsibilities."
          >
            <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <DocsInlineCode>GlobalSearchBar</DocsInlineCode> is the official Search
              composite and is built from <DocsInlineCode>Command</DocsInlineCode>{" "}
              primitives. Composition avoids duplicated filtering and dialog behavior
              without merging two distinct user intents. For custom action palettes, use{" "}
              <Link className="font-medium text-[var(--color-link)] underline underline-offset-3" href="/docs/components/command">
                Command
              </Link>.
            </p>
          </DocsSection>

          <DocsSection
            id="search-examples"
            title="Search Examples"
            description="Use entity-specific labels, result groups, and empty messages."
          >
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={searchPatientsSnippet}><SearchPatientsPreview /></DocsPreview>
              <DocsPreview code={searchStudiesSnippet}><SearchStudiesPreview /></DocsPreview>
              <DocsPreview code={searchFacilitiesSnippet}><SearchFacilitiesPreview /></DocsPreview>
            </div>
          </DocsSection>

          <DocsSection
            id="search-vs-command"
            title="Search vs Command"
            description="Choose the component from the outcome the user expects."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-3">
              <GuidanceCard title="Use Search">
                Find patients, studies, users, facilities, and records. The expected
                outcome is a matching entity or destination.
              </GuidanceCard>
              <GuidanceCard title="Use Command">
                Run quick actions, navigate globally, expose keyboard shortcuts, or
                provide a command palette.
              </GuidanceCard>
              <GuidanceCard title="Use neither">
                Use a normal link for one known destination, a button for one visible
                action, or Searchable Select when choosing a value inside a form.
              </GuidanceCard>
            </div>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Search remains operable and understandable without a pointer."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li><strong className="font-medium text-[var(--color-text-primary)]">Keyboard:</strong> Enter, Space, or ⌘K/Ctrl+K opens Search; Arrow keys move through results; Enter selects; Escape closes.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Focus:</strong> the dialog traps focus, focuses the search input, and returns focus to the trigger when closed.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Screen readers:</strong> the trigger exposes dialog state, while the dialog has a title, description, grouped results, and an empty state.</li>
            </ul>
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

function AuditCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-inline-md)]">
      <h4 className="font-medium text-[var(--color-text-primary)]">{title}</h4>
      <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function GuidanceCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-inline-md)]">
      <h4 className="font-medium text-[var(--color-text-primary)]">{title}</h4>
      <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
        {children}
      </p>
    </div>
  );
}
