"use client";

import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableHeader,
  DataTableRow,
  DataTableRowCountFooter,
} from "@/components/data-table";
import { tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { DocsTemplatePage } from "@/components/docs/templates/docs-template-page";
import { GlobalSearchBar } from "@/components/global-search-bar";
import {
  SearchResults,
  SearchResultsResults,
  SearchResultsSearch,
  SearchResultsToolbar,
} from "@/components/search-results";

const searchResultsUsageSnippet = tsxSnippet(`import { Button } from "@/components/button";
import { GlobalSearchBar } from "@/components/global-search-bar";
import {
  SearchResults,
  SearchResultsResults,
  SearchResultsSearch,
  SearchResultsToolbar,
} from "@/components/search-results";

<SearchResults>
  <SearchResultsToolbar>
    <h2>Search records</h2>
    <Button variant="outline">Create new</Button>
  </SearchResultsToolbar>
  <SearchResultsSearch>
    <GlobalSearchBar placeholder="Search everything" items={items} />
  </SearchResultsSearch>
  <SearchResultsResults>{results}</SearchResultsResults>
</SearchResults>`);

const searchResultsApiRows = [
  { prop: "children", type: "ReactNode", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "—" },
];

const previewItems = [
  { label: "Record 1001", value: "1001", group: "Records" },
  { label: "Record 1002", value: "1002", group: "Records" },
];

export function SearchResultsDocsPage() {
  return (
    <DocsTemplatePage>
      <DocsSection
        id="usage"
        title="Usage"
        description={
          <>
            Import from <DocsInlineCode>@/components/search-results</DocsInlineCode>.
            The layout owns the stacked regions: toolbar, search, and results.
            Products own copy, query logic, and the table or list in the results
            slot. Compose inside AppShell. Extracted from the MPF Scan Search
            tab — not a product-specific template.
          </>
        }
      >
        <DocsPreview code={searchResultsUsageSnippet}>
          <SearchResults>
            <SearchResultsToolbar>
              <h2 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
                Search records
              </h2>
              <Button variant="outline" className="shrink-0">
                Create new
              </Button>
            </SearchResultsToolbar>
            <SearchResultsSearch>
              <GlobalSearchBar
                placeholder="Search everything"
                items={previewItems}
                shortcutEnabled={false}
              />
            </SearchResultsSearch>
            <SearchResultsResults>
              <DataTable title="Search results">
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead columnId="id">ID</DataTableHead>
                    <DataTableHead columnId="name">Name</DataTableHead>
                    <DataTableHead columnId="status">Status</DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody>
                  <DataTableRow>
                    <DataTableCell columnId="id">1001</DataTableCell>
                    <DataTableCell columnId="name">Record one</DataTableCell>
                    <DataTableCell columnId="status">Open</DataTableCell>
                  </DataTableRow>
                </DataTableBody>
                <DataTableRowCountFooter count={1} />
              </DataTable>
            </SearchResultsResults>
          </SearchResults>
        </DocsPreview>
      </DocsSection>

      <DocsSection id="slots" title="Slots">
        <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-page)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
          <li>
            <DocsInlineCode>SearchResultsToolbar</DocsInlineCode> — title at the
            start, outline action at the end.
          </li>
          <li>
            <DocsInlineCode>SearchResultsSearch</DocsInlineCode> — search
            control. Pass <DocsInlineCode>GlobalSearchBar</DocsInlineCode> or
            another search field.
          </li>
          <li>
            <DocsInlineCode>SearchResultsResults</DocsInlineCode> — results
            region. Omit before a search; pass a worklist table after.
          </li>
        </ul>
      </DocsSection>

      <DocsSection
        id="example"
        title="Source screen"
        description="MPF Dashboard Scan Search is the extraction source. Domain copy and query logic stay on the product screen."
      >
        <Button render={<Link href="/docs/userflow/nuclear/dashboard" />}>
          Open MPF Dashboard
          <ArrowRightIcon />
        </Button>
      </DocsSection>

      <DocsSection id="api-reference" title="API Reference">
        <DocsApiTable rows={searchResultsApiRows} />
      </DocsSection>
    </DocsTemplatePage>
  );
}
