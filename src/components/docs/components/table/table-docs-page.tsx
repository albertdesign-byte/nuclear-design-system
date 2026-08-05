"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/table";
import {
  tableCaptionSnippet,
  tableFooterSnippet,
  tableInstallationUiSnippet,
  tableRealScreenSnippet,
  tableUsageSnippet,
} from "@/components/docs/components/table/table-code-snippets";
import { TableRealScreenPreview } from "@/components/docs/components/table/table-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

/** Sync with navigation.ts when Table is added to docs nav. */
export const tableTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "caption", label: "Caption" },
  { id: "footer", label: "Footer" },
  { id: "api-reference", label: "API Reference" },
];

const tableApiRows = [
  {
    prop: "className",
    type: "string",
    defaultValue: "—",
  },
];

export function TableDocsPage() {
  return (
    <DocsComponentPage
      title="Table"
      description="A responsive table for displaying structured data."
      tocItems={tableTocItems}
      realScreen={{
        preview: <TableRealScreenPreview />,
        code: tableRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/card" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Card
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/tabs" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Tabs
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={tableInstallationUiSnippet}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>MRN</TableHead>
                    <TableHead>Paciente</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>MRN-28491</TableCell>
                    <TableCell>Elena Morales</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Table primitives from{" "}
                <DocsInlineCode>@/components/table</DocsInlineCode>. Row hover,
                borders, and cell padding use{" "}
                <DocsInlineCode>--color-border</DocsInlineCode>,{" "}
                <DocsInlineCode>--color-surface-hover</DocsInlineCode>, and{" "}
                <DocsInlineCode>--space-table</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={tableUsageSnippet}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>MRN</TableHead>
                    <TableHead>Paciente</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>MRN-28491</TableCell>
                    <TableCell>Elena Morales</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="caption"
            title="Caption"
            description="Add context with TableCaption."
          >
            <DocsPreview code={tableCaptionSnippet}>
              <Table>
                <TableCaption>Pacientes registrados hoy</TableCaption>
                <TableHeader>
                  <TableRow>
                    <TableHead>MRN</TableHead>
                    <TableHead>Paciente</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>MRN-28491</TableCell>
                    <TableCell>Elena Morales</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="footer"
            title="Footer"
            description="Use TableFooter for summary rows."
          >
            <DocsPreview code={tableFooterSnippet}>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Concepto</TableHead>
                    <TableHead>Monto</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Consulta</TableCell>
                    <TableCell>$120</TableCell>
                  </TableRow>
                </TableBody>
                <TableFooter>
                  <TableRow>
                    <TableCell>Total</TableCell>
                    <TableCell>$120</TableCell>
                  </TableRow>
                </TableFooter>
              </Table>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Table primitives
            </h3>
            <DocsApiTable rows={tableApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
