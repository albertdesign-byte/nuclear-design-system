import { exampleSnippet, tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";

const dashboardPanelImport = `import { DashboardPanel } from "@/components/dashboard-panel";`;

export const dashboardPanelInstallationUiSnippet = tsxSnippet(`${dashboardPanelImport}

export function Example() {
  return (
    <DashboardPanel title="My active scans">
      <p className="p-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-muted)]">
        Panel content slot
      </p>
    </DashboardPanel>
  );
}`);

export const dashboardPanelRealScreenSnippet = tsxSnippet(`${dashboardPanelImport}
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

export function Example() {
  return (
    <DashboardPanel title="My active scans">
      <DataTable>
        <DataTableHeader>
          <DataTableRow>
            <DataTableHead columnId="srid">SRID</DataTableHead>
            <DataTableHead columnId="patient">Patient</DataTableHead>
            <DataTableHead columnId="stage">Stage</DataTableHead>
          </DataTableRow>
        </DataTableHeader>
        <DataTableBody>
          <DataTableRow>
            <DataTableLinkCell columnId="srid" href="#">SRID-1001</DataTableLinkCell>
            <DataTableLinkCell columnId="patient" href="#">Elena Morales</DataTableLinkCell>
            <DataTableCell columnId="stage">Requested</DataTableCell>
          </DataTableRow>
        </DataTableBody>
        <DataTableRowCountFooter count={1} />
      </DataTable>
    </DashboardPanel>
  );
}`);

export const dashboardPanelUsageSnippet = exampleSnippet(
  `<DashboardPanel title="My active scans">
  {children}
</DashboardPanel>`,
  { imports: [dashboardPanelImport] }
);

export const dashboardPanelWithContentSnippet = exampleSnippet(
  `<DashboardPanel title="My exceptions">
  <DataTable>{/* table content */}</DataTable>
</DashboardPanel>`,
  {
    imports: [
      dashboardPanelImport,
      'import { DataTable } from "@/components/data-table";',
    ],
  }
);
