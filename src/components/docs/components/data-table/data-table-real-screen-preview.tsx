"use client";

import { useState } from "react";

import {
  DataTable,
  DataTableBody,
  DataTableCell,
  DataTableHead,
  DataTableHeader,
  DataTableLinkCell,
  DataTableMenuHead,
  DataTableRow,
  DataTableRowCountFooter,
} from "@/components/data-table";
import { DocsRealScreenExampleLink } from "@/components/docs/primitives/docs-real-screen-example-link";

const rows = [
  { srid: "SRID-1001", patient: "Elena Morales", agent: "Jose Nevado", stage: "Requested" },
  { srid: "SRID-1002", patient: "Carlos Ruiz", agent: "Jose Nevado", stage: "Qualified" },
  { srid: "SRID-1003", patient: "Ana Vega", agent: "Jose Nevado", stage: "Requested" },
];

export function DataTableRealScreenPreview() {
  const [sort, setSort] = useState<"asc" | "desc" | null>("asc");

  return (
    <div>
      <DataTable title="My active scans">
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
            <DataTableHead columnId="agent">Agent</DataTableHead>
            <DataTableHead columnId="stage">Stage</DataTableHead>
          </DataTableRow>
        </DataTableHeader>
        <DataTableBody>
          {rows.map((row) => (
            <DataTableRow key={row.srid}>
              <DataTableLinkCell columnId="srid" href="#">
                {row.srid}
              </DataTableLinkCell>
              <DataTableLinkCell columnId="patient" href="#">
                {row.patient}
              </DataTableLinkCell>
              <DataTableCell columnId="agent">{row.agent}</DataTableCell>
              <DataTableCell columnId="stage">{row.stage}</DataTableCell>
            </DataTableRow>
          ))}
        </DataTableBody>
        <DataTableRowCountFooter count={rows.length} />
      </DataTable>
      <DocsRealScreenExampleLink />
    </div>
  );
}
