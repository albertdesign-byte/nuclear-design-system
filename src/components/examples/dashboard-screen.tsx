"use client";

import {
  BriefcaseMedicalIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MessageSquareIcon,
  PlusIcon,
  StethoscopeIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";

import { AppHeader } from "@/components/app-header";
import { AppShell } from "@/components/app-shell";
import { AppSidebar, type AppSidebarNavItem } from "@/components/app-sidebar";
import { DashboardGrid, DashboardGridItem } from "@/components/dashboard-grid";
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
import { ScanSearchSection } from "@/components/examples/scan-search-section";
import { GlobalSearchBar } from "@/components/global-search-bar";
import { getActiveScansPreview, getGlobalSearchItems } from "@/data/scan-requests";
import { Tabs, TabsContent, TabsList, TabsTrigger, tabsSegmentedContentClassName } from "@/components/tabs";
import { UserProfileBlock } from "@/components/user-profile-block";
import { cn } from "@/lib/utils";

const sidebarItems = (
  dashboardHref: string
): AppSidebarNavItem[] => [
  { label: "Dashboard", href: dashboardHref, icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "#", icon: UsersIcon },
  { label: "Uploads", href: "#", icon: UploadIcon },
  { label: "Messages", href: "#", icon: MessageSquareIcon },
  { label: "Create", href: "#", icon: PlusIcon },
  { label: "Clinical", href: "#", icon: StethoscopeIcon },
  { label: "Orders", href: "#", icon: BriefcaseMedicalIcon },
  { label: "Sign out", href: "#", icon: LogOutIcon },
];

const searchItems = getGlobalSearchItems();

const activeScans = getActiveScansPreview();

function ActiveScansTable() {
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

function EmptyDataTable({
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

export function DashboardScreen({
  className,
  dashboardHref = "/examples/dashboard",
}: {
  className?: string;
  dashboardHref?: string;
}) {
  const [activeTab, setActiveTab] = useState("my-info");
  const showHeaderSearch = activeTab !== "scan-search";

  return (
    <AppShell
      className={cn("min-h-dvh", className)}
      sidebar={<AppSidebar items={sidebarItems(dashboardHref)} logoHref="/" />}
      header={
        <AppHeader
          title="Dashboard"
          search={
            showHeaderSearch ? <GlobalSearchBar items={searchItems} /> : undefined
          }
          actions={
            <UserProfileBlock
              name="Jose Nevado"
              subtitle="Care Points: 0"
              onSettingsClick={() => undefined}
            />
          }
        />
      }
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="my-info">My info</TabsTrigger>
          <TabsTrigger value="scan-search">Scan Search</TabsTrigger>
          <TabsTrigger value="my-reports">My Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="my-info" className={tabsSegmentedContentClassName}>
          <DashboardGrid>
            <DashboardGridItem>
              <ActiveScansTable />
            </DashboardGridItem>

            <DashboardGridItem>
              <EmptyDataTable
                title="My exceptions"
                columns={["SRID", "Patient", "Exception Type", "Warning Level"]}
              />
            </DashboardGridItem>

            <DashboardGridItem span="full">
              <EmptyDataTable
                title="My open tasks"
                columns={["SRID", "Patient", "Task ID", "Task Type", "Due Date", "Agent"]}
              />
            </DashboardGridItem>
          </DashboardGrid>
        </TabsContent>

        <TabsContent value="scan-search" className={tabsSegmentedContentClassName}>
          <ScanSearchSection />
        </TabsContent>

        <TabsContent value="my-reports" className={tabsSegmentedContentClassName}>
          <EmptyDataTable
            title="My Reports"
            columns={["Report", "Patient", "Date", "Status"]}
          />
        </TabsContent>
      </Tabs>
    </AppShell>
  );
}
