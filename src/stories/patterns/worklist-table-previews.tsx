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
import { getActiveScansPreview } from "@/data/scan-requests";

const activeScans = getActiveScansPreview();

export function PopulatedWorklistTable() {
  const [sort, setSort] = useState<"asc" | "desc" | null>(null);

  return (
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
        {activeScans.map((row) => (
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
      <DataTableRowCountFooter count={activeScans.length} />
    </DataTable>
  );
}

function columnIdFromLabel(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}

export function EmptyWorklistTable({
  title,
  columns,
}: {
  title: string;
  columns: string[];
}) {
  return (
    <DataTable title={title}>
      <DataTableHeader>
        <DataTableRow>
          {columns.map((column) => (
            <DataTableHead key={column} columnId={columnIdFromLabel(column)}>
              {column}
            </DataTableHead>
          ))}
        </DataTableRow>
      </DataTableHeader>
      <DataTableBody />
      <DataTableRowCountFooter count={0} />
    </DataTable>
  );
}

export const exceptionsColumns = [
  "SRID",
  "Patient",
  "Exception Type",
  "Warning Level",
] as const;

export const openTasksColumns = [
  "SRID",
  "Patient",
  "Task ID",
  "Task Type",
  "Due Date",
  "Agent",
] as const;

export const reportsColumns = ["Report", "Patient", "Date", "Status"] as const;
