import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dataTableImport = `import {
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
} from "@/components/data-table";`;

export const dataTableInstallationUiSnippet = tsxSnippet(`${dataTableImport}

export function Example() {
  return (
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
  );
}`);

export const dataTableRealScreenSnippet = tsxSnippet(`${dataTableImport}

export function Example() {
  return (
    <DataTable>
      <DataTableHeader>
        <DataTableRow>
          <DataTableMenuHead
            columnId="srid"
            sortDirection="asc"
            onSortAsc={() => undefined}
            onSortDesc={() => undefined}
          >
            SRID
          </DataTableMenuHead>
          <DataTableHead columnId="patient">Patient</DataTableHead>
          <DataTableHead columnId="agent">Agent</DataTableHead>
          <DataTableHead columnId="stage">Stage</DataTableHead>
        </DataTableRow>
      </DataTableHeader>
      <DataTableBody>
        <DataTableRow>
          <DataTableLinkCell columnId="srid" href="#">SRID-1001</DataTableLinkCell>
          <DataTableLinkCell columnId="patient" href="#">Elena Morales</DataTableLinkCell>
          <DataTableCell columnId="agent">Jose Nevado</DataTableCell>
          <DataTableCell columnId="stage">Requested</DataTableCell>
        </DataTableRow>
      </DataTableBody>
      <DataTableRowCountFooter count={1} />
    </DataTable>
  );
}`);

export const dataTableUsageSnippet = exampleSnippet(
  `<DataTable>
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
</DataTable>`,
  { imports: [dataTableImport] }
);

export const dataTablePlainHeadSnippet = exampleSnippet(
  `<DataTableHead columnId="patient">Patient</DataTableHead>`,
  { imports: [dataTableImport] }
);

export const dataTableMenuHeadSnippet = exampleSnippet(
  `<DataTableMenuHead
  columnId="srid"
  sortDirection={sortDirection}
  onSortAsc={() => setSortDirection("asc")}
  onSortDesc={() => setSortDirection("desc")}
  onHide={() => console.log("hide")}
>
  SRID
</DataTableMenuHead>`,
  { imports: [dataTableImport] }
);

export const dataTableLinkCellSnippet = exampleSnippet(
  `<DataTableLinkCell columnId="srid" href="/scans/1001">SRID-1001</DataTableLinkCell>`,
  { imports: [dataTableImport] }
);

export const dataTableRowCountFooterSnippet = exampleSnippet(
  `<DataTableRowCountFooter count={rows.length} label="total rows" />`,
  { imports: [dataTableImport] }
);

export const dataTableFilterRowSnippet = exampleSnippet(
  `<DataTableFilterRow>
  <DataTableFilterCell columnId="srid">
    <Input size="sm" aria-label="Filter SRID" />
  </DataTableFilterCell>
  <DataTableFilterCell columnId="patient">
    <Input size="sm" aria-label="Filter Patient" />
  </DataTableFilterCell>
</DataTableFilterRow>`,
  { imports: [dataTableImport] }
);

export const dataTableResizableColumnsSnippet = exampleSnippet(
  `<DataTable>
  <DataTableHeader>
    <DataTableRow>
      <DataTableHead columnId="srid" defaultWidth={20}>SRID</DataTableHead>
      <DataTableHead columnId="patient" defaultWidth={35}>Patient</DataTableHead>
      <DataTableHead columnId="stage" defaultWidth={45}>Stage</DataTableHead>
    </DataTableRow>
  </DataTableHeader>
  {/* Drag the right edge of each header to resize. */}
</DataTable>`,
  { imports: [dataTableImport] }
);
