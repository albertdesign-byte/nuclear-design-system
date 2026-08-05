"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableHeader,
  DataTableLinkCell,
  DataTableRow,
  DataTableRowCountFooter,
} from "@/components/data-table";
import { DashboardPanel } from "@/components/dashboard-panel";
import {
  dashboardPanelInstallationUiSnippet,
  dashboardPanelRealScreenSnippet,
  dashboardPanelUsageSnippet,
  dashboardPanelWithContentSnippet,
} from "@/components/docs/components/dashboard-panel/dashboard-panel-code-snippets";
import { DashboardPanelRealScreenPreview } from "@/components/docs/components/dashboard-panel/dashboard-panel-real-screen-preview";
import { dashboardPanelTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const dashboardPanelApiRows = [
  { prop: "title", type: "string", defaultValue: "—" },
  { prop: "children", type: "ReactNode", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "—" },
];

export function DashboardPanelDocsPage() {
  return (
    <DocsComponentPage
      title="Dashboard Panel"
      description="Section panel with primary title and content slot. Evolves Card for dashboard modules."
      tocItems={dashboardPanelTocItems}
      realScreen={{
        preview: <DashboardPanelRealScreenPreview />,
        code: dashboardPanelRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/data-table" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Data Table
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/global-search-bar" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Global Search Bar
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dashboardPanelInstallationUiSnippet}>
              <div className="max-w-md">
                <DashboardPanel title="My active scans">
                  <p className="p-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]">
                    Panel content slot
                  </p>
                </DashboardPanel>
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/dashboard-panel</DocsInlineCode>.
                Pass any dashboard content as children — typically a{" "}
                <DocsInlineCode>DataTable</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={dashboardPanelUsageSnippet}>
              <div className="max-w-md">
                <DashboardPanel title="My open tasks">
                  <p className="p-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]">
                    Tasks content
                  </p>
                </DashboardPanel>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="with-content"
            title="With Content"
            description="Wrap operational tables inside the panel content area."
          >
            <DocsPreview code={dashboardPanelWithContentSnippet}>
              <div className="max-w-xl">
                <DashboardPanel title="My active scans">
                  <DataTable>
                    <DataTableHeader>
                      <DataTableRow>
                        <DataTableHead columnId="srid">SRID</DataTableHead>
                        <DataTableHead columnId="patient">Patient</DataTableHead>
                      </DataTableRow>
                    </DataTableHeader>
                    <DataTableBody>
                      <DataTableRow>
                        <DataTableLinkCell columnId="srid" href="#">SRID-1001</DataTableLinkCell>
                        <DataTableCell columnId="patient">Elena Morales</DataTableCell>
                      </DataTableRow>
                    </DataTableBody>
                    <DataTableRowCountFooter count={1} />
                  </DataTable>
                </DashboardPanel>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="full-example"
            title="Full Example"
            description="See dashboard panels in the grid layout on the full dashboard screen."
          >
            <Button render={<Link href="/examples/dashboard" />}>
              Open dashboard example
              <ArrowRightIcon />
            </Button>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={dashboardPanelApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
