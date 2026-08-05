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
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

export function DashboardPanelRealScreenPreview() {
  return (
    <div className="max-w-xl">
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
            <DataTableRow>
              <DataTableLinkCell columnId="srid" href="#">SRID-1002</DataTableLinkCell>
              <DataTableLinkCell columnId="patient" href="#">Carlos Ruiz</DataTableLinkCell>
              <DataTableCell columnId="stage">Qualified</DataTableCell>
            </DataTableRow>
          </DataTableBody>
          <DataTableRowCountFooter count={2} />
        </DataTable>
      </DashboardPanel>
      <DocsRealScreenExampleLink />
    </div>
  );
}
