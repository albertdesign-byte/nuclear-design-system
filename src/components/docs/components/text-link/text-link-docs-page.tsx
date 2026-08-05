"use client";

import Link from "next/link";
import { ArrowLeftIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  DataTable,
  DataTableBody,
  DataTableHead,
  DataTableHeader,
  DataTableLinkCell,
  DataTableRow,
} from "@/components/data-table";
import { TextLink } from "@/components/text-link";
import {
  textLinkInTableSnippet,
  textLinkInstallationUiSnippet,
  textLinkRealScreenSnippet,
  textLinkUsageSnippet,
} from "@/components/docs/components/text-link/text-link-code-snippets";
import { TextLinkRealScreenPreview } from "@/components/docs/components/text-link/text-link-real-screen-preview";
import { textLinkTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const textLinkApiRows = [
  { prop: "href", type: "string", defaultValue: "—" },
  { prop: "children", type: "ReactNode", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "—" },
];

export function TextLinkDocsPage() {
  return (
    <DocsComponentPage
      title="Text Link"
      description="Primary navigation link styled for inline use in tables, lists, and dashboard content."
      tocItems={textLinkTocItems}
      realScreen={{
        preview: <TextLinkRealScreenPreview />,
        code: textLinkRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/user-profile-block" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            User Profile Block
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={textLinkInstallationUiSnippet}>
              <TextLink href="#">SRID-1001</TextLink>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/text-link</DocsInlineCode>.
                Uses link tokens for hover and focus states.
              </>
            }
          >
            <DocsPreview code={textLinkUsageSnippet}>
              <TextLink href="#">SRID-1001</TextLink>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="in-table"
            title="In Table"
            description={
              <>
                Prefer <DocsInlineCode>DataTableLinkCell</DocsInlineCode> inside{" "}
                <DocsInlineCode>DataTable</DocsInlineCode> — it wraps{" "}
                <DocsInlineCode>TextLink</DocsInlineCode> in a table cell.
              </>
            }
          >
            <DocsPreview code={textLinkInTableSnippet}>
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead columnId="srid">SRID</DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody>
                  <DataTableRow>
                    <DataTableLinkCell columnId="srid" href="#">
                      SRID-1001
                    </DataTableLinkCell>
                  </DataTableRow>
                </DataTableBody>
              </DataTable>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="full-example"
            title="Full Example"
            description="See Text Link inside dashboard tables on the full dashboard screen."
          >
            <Button render={<Link href="/examples/dashboard" />}>
              Open dashboard example
            </Button>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={textLinkApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
