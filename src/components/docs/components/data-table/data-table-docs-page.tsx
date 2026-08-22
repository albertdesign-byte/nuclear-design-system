"use client";

import { useState } from "react";

import { TextLink } from "@/components/text-link";

import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableFilterCell,
  DataTableFilterRow,
  DataTableHead,
  DataTableHeader,
  DataTableLinkCell,
  DataTableMenuHead,
  DataTableRow,
  DataTableRowCountFooter,
} from "@/components/data-table";
import { Input } from "@/components/input";
import {
  dataTableFilterRowSnippet,
  dataTableInstallationUiSnippet,
  dataTableLinkCellSnippet,
  dataTableMenuHeadSnippet,
  dataTablePlainHeadSnippet,
  dataTableRealScreenSnippet,
  dataTableResizableColumnsSnippet,
  dataTableRowCountFooterSnippet,
  dataTableUsageSnippet,
} from "@/components/docs/components/data-table/data-table-code-snippets";
import { DataTableRealScreenPreview } from "@/components/docs/components/data-table/data-table-real-screen-preview";
import { dataTableTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const dataTableApiRows = [
  { prop: "children", type: "ReactNode", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "—" },
];

const dataTableHeadApiRows = [
  { prop: "columnId", type: "string", defaultValue: "—" },
  { prop: "defaultWidth", type: "number", defaultValue: "equal share of 100%" },
  { prop: "resizable", type: "boolean", defaultValue: "true" },
];

const dataTableMenuHeadApiRows = [
  ...dataTableHeadApiRows,
  { prop: "sortDirection", type: '"asc" | "desc" | null', defaultValue: "null" },
  { prop: "onSortAsc", type: "() => void", defaultValue: "—" },
  { prop: "onSortDesc", type: "() => void", defaultValue: "—" },
  { prop: "onHide", type: "() => void", defaultValue: "—" },
];

export function DataTableDocsPage() {
  const [sort, setSort] = useState<"asc" | "desc" | null>(null);

  return (
    <DocsComponentPage
      title="Data Table"
      description="Composed table for operational dashboards — resizable columns, plain or menu headers, a column filter row, link cells, and row count footer."
      tocItems={dataTableTocItems}
      realScreen={{
        preview: <DataTableRealScreenPreview />,
        code: dataTableRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dataTableInstallationUiSnippet}>
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead columnId="srid">SRID</DataTableHead>
                    <DataTableHead columnId="patient">Patient</DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody>
                  <DataTableRow>
                    <DataTableLinkCell columnId="srid" href="#">
                      SRID-1001
                    </DataTableLinkCell>
                    <DataTableCell columnId="patient">Elena Morales</DataTableCell>
                  </DataTableRow>
                </DataTableBody>
                <DataTableRowCountFooter count={1} />
              </DataTable>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/data-table</DocsInlineCode>.
                Every column needs a stable <DocsInlineCode>columnId</DocsInlineCode> on
                the header and matching cells so resize and hide stay aligned.
              </>
            }
          >
            <DocsPreview code={dataTableUsageSnippet}>
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead columnId="srid">SRID</DataTableHead>
                    <DataTableHead columnId="patient">Patient</DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody>
                  <DataTableRow>
                    <DataTableLinkCell columnId="srid" href="#">
                      SRID-1001
                    </DataTableLinkCell>
                    <DataTableCell columnId="patient">Elena Morales</DataTableCell>
                  </DataTableRow>
                </DataTableBody>
                <DataTableRowCountFooter count={1} />
              </DataTable>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="plain-header"
            title="Plain Header"
            description="Use when sorting or column actions are not needed — label only, no chevron menu."
          >
            <DocsPreview code={dataTablePlainHeadSnippet}>
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead columnId="patient">Patient</DataTableHead>
                    <DataTableHead columnId="agent">Agent</DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody>
                  <DataTableRow>
                    <DataTableCell columnId="patient">Elena Morales</DataTableCell>
                    <DataTableCell columnId="agent">Jose Nevado</DataTableCell>
                  </DataTableRow>
                </DataTableBody>
              </DataTable>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="menu-header"
            title="Menu Header"
            description={
              <>
                Use <DocsInlineCode>DataTableMenuHead</DocsInlineCode> when the column
                supports sort or hide actions. The chevron opens Sort Ascending, Sort
                Descending, and Hide Column.
              </>
            }
          >
            <DocsPreview code={dataTableMenuHeadSnippet}>
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableMenuHead
                      columnId="srid"
                      sortDirection={sort}
                      onSortAsc={() => setSort("asc")}
                      onSortDesc={() => setSort("desc")}
                    >
                      SRID
                    </DataTableMenuHead>
                    <DataTableHead columnId="patient">Patient</DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody>
                  <DataTableRow>
                    <DataTableCell columnId="srid">SRID-1001</DataTableCell>
                    <DataTableCell columnId="patient">Elena Morales</DataTableCell>
                  </DataTableRow>
                </DataTableBody>
              </DataTable>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="resizable-columns"
            title="Resizable Columns"
            description="Drag the right edge of any header to resize against the next column. Widths always fill 100% of the table container."
          >
            <DocsPreview code={dataTableResizableColumnsSnippet}>
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead columnId="srid" defaultWidth={20}>
                      SRID
                    </DataTableHead>
                    <DataTableHead columnId="patient" defaultWidth={35}>
                      Patient
                    </DataTableHead>
                    <DataTableHead columnId="stage" defaultWidth={45}>
                      Stage
                    </DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody>
                  <DataTableRow>
                    <DataTableCell columnId="srid">SRID-1001</DataTableCell>
                    <DataTableCell columnId="patient">Elena Morales</DataTableCell>
                    <DataTableCell columnId="stage">Requested</DataTableCell>
                  </DataTableRow>
                  <DataTableRow>
                    <DataTableCell columnId="srid">SRID-1002</DataTableCell>
                    <DataTableCell columnId="patient">Carlos Ruiz</DataTableCell>
                    <DataTableCell columnId="stage">Qualified</DataTableCell>
                  </DataTableRow>
                </DataTableBody>
              </DataTable>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="link-cell" title="Link Cell">
            <DocsPreview code={dataTableLinkCellSnippet}>
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
            id="filter-row"
            title="Filter Row"
            description={
              <>
                Use <DocsInlineCode>DataTableFilterRow</DocsInlineCode> under the
                header labels.{" "}
                <DocsInlineCode>DataTableFilterCell</DocsInlineCode> binds to the
                same <DocsInlineCode>columnId</DocsInlineCode> so hide stays
                aligned, and it does not register a second column. Put Input or
                Select in the cell — this is not a FilterBar primitive.
              </>
            }
          >
            <DocsPreview code={dataTableFilterRowSnippet}>
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead columnId="srid">SRID</DataTableHead>
                    <DataTableHead columnId="patient">Patient</DataTableHead>
                  </DataTableRow>
                  <DataTableFilterRow>
                    <DataTableFilterCell columnId="srid">
                      <Input size="sm" aria-label="Filter SRID" />
                    </DataTableFilterCell>
                    <DataTableFilterCell columnId="patient">
                      <Input size="sm" aria-label="Filter Patient" />
                    </DataTableFilterCell>
                  </DataTableFilterRow>
                </DataTableHeader>
                <DataTableBody>
                  <DataTableRow>
                    <DataTableLinkCell columnId="srid" href="#">
                      SRID-1001
                    </DataTableLinkCell>
                    <DataTableCell columnId="patient">Elena Morales</DataTableCell>
                  </DataTableRow>
                </DataTableBody>
              </DataTable>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="row-count-footer" title="Row Count Footer">
            <DocsPreview code={dataTableRowCountFooterSnippet}>
              <DataTable>
                <DataTableHeader>
                  <DataTableRow>
                    <DataTableHead columnId="srid">SRID</DataTableHead>
                  </DataTableRow>
                </DataTableHeader>
                <DataTableBody />
                <DataTableRowCountFooter count={0} />
              </DataTable>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="full-example"
            title="Full Example"
            description="See Data Table composed inside dashboard panels on the full dashboard screen."
          >
            <TextLink href="/examples/dashboard">Open dashboard example</TextLink>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              DataTable
            </h3>
            <DocsApiTable rows={dataTableApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-md)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              DataTableHead
            </h3>
            <DocsApiTable rows={dataTableHeadApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-md)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              DataTableMenuHead
            </h3>
            <DocsApiTable rows={dataTableMenuHeadApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-md)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              DataTableFilterCell
            </h3>
            <DocsApiTable
              rows={[
                { prop: "columnId", type: "string", defaultValue: "—" },
                { prop: "children", type: "ReactNode", defaultValue: "—" },
                { prop: "className", type: "string", defaultValue: "—" },
              ]}
            />
          </DocsSection>
        </>
      }
    />
  );
}
