"use client";

import { useMemo, useState } from "react";

import { Button } from "@/components/button";
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
import {
  getScanRequestSearchItems,
  searchScanRequests,
  type ScanRequest,
} from "@/data/scan-requests";
import { GlobalSearchBar } from "@/components/global-search-bar";

function ScanSearchResultsTable({ rows }: { rows: ScanRequest[] }) {
  const [dobSort, setDobSort] = useState<"asc" | "desc" | null>(null);

  const sortedRows = useMemo(() => {
    if (!dobSort) {
      return rows;
    }

    return [...rows].sort((left, right) => {
      const leftDate = new Date(left.dob).getTime();
      const rightDate = new Date(right.dob).getTime();
      return dobSort === "asc" ? leftDate - rightDate : rightDate - leftDate;
    });
  }, [dobSort, rows]);

  return (
    <>
      <DataTableHeader>
        <DataTableRow>
          <DataTableHead columnId="srid" defaultWidth={8}>
            SRID
          </DataTableHead>
          <DataTableHead columnId="patient-name" defaultWidth={18}>
            Patient Name
          </DataTableHead>
          <DataTableMenuHead
            columnId="dob"
            defaultWidth={10}
            sortDirection={dobSort}
            onSortAsc={() => setDobSort("asc")}
            onSortDesc={() => setDobSort("desc")}
          >
            DOB
          </DataTableMenuHead>
          <DataTableHead columnId="email" defaultWidth={18}>
            Email
          </DataTableHead>
          <DataTableHead columnId="phone" defaultWidth={10}>
            Phone
          </DataTableHead>
          <DataTableHead columnId="scan-type" defaultWidth={22}>
            Scan Type
          </DataTableHead>
          <DataTableHead columnId="stage" defaultWidth={8}>
            Stage
          </DataTableHead>
          <DataTableHead columnId="booking-info" defaultWidth={6} resizable={false}>
            Booking Info
          </DataTableHead>
        </DataTableRow>
      </DataTableHeader>
      <DataTableBody>
        {sortedRows.map((row) => (
          <DataTableRow key={row.srid}>
            <DataTableLinkCell columnId="srid" href="#">
              {row.srid}
            </DataTableLinkCell>
            <DataTableLinkCell
              columnId="patient-name"
              href="#"
              className="whitespace-normal align-top"
            >
              {row.patientName}
            </DataTableLinkCell>
            <DataTableCell columnId="dob">{row.dob}</DataTableCell>
            <DataTableCell columnId="email">{row.email}</DataTableCell>
            <DataTableCell columnId="phone">{row.phone}</DataTableCell>
            <DataTableCell columnId="scan-type" className="whitespace-normal align-top">
              {row.scanType}
            </DataTableCell>
            <DataTableCell columnId="stage">{row.stage}</DataTableCell>
            <DataTableCell columnId="booking-info">{row.bookingInfo}</DataTableCell>
          </DataTableRow>
        ))}
      </DataTableBody>
      <DataTableRowCountFooter count={sortedRows.length} />
    </>
  );
}

export function ScanSearchSection() {
  const [hasSearched, setHasSearched] = useState(false);
  const [submittedQuery, setSubmittedQuery] = useState("");

  const filteredRows = useMemo(
    () => searchScanRequests(submittedQuery),
    [submittedQuery]
  );

  function handleSearch(query: string) {
    setSubmittedQuery(query);
    setHasSearched(true);
  }

  function handleSelect(srid: string) {
    setSubmittedQuery(srid);
    setHasSearched(true);
  }

  return (
    <div className="flex flex-col gap-[var(--space-stack-md)]">
      <div className="flex flex-wrap items-center justify-between gap-[var(--space-stack-md)]">
        <h2 className="text-[length:var(--text-title-size)] font-semibold leading-[var(--text-title-line-height)] text-[var(--color-text-primary)]">
          Search scan requests
        </h2>
        <Button variant="outline" className="shrink-0">
          Create new scan request
        </Button>
      </div>

      <GlobalSearchBar
        placeholder="Search everything"
        items={getScanRequestSearchItems()}
        onSearch={handleSearch}
        onSelect={handleSelect}
        dialogTitle="Search scan requests"
        dialogDescription="Search scan requests by patient, SRID, scan type, or agent"
      />

      {hasSearched ? (
        <DataTable title="Search results">
          <ScanSearchResultsTable rows={filteredRows} />
        </DataTable>
      ) : null}
    </div>
  );
}
