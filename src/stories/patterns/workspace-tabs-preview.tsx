"use client";

import { DashboardGrid, DashboardGridItem } from "@/components/dashboard-grid";
import { ScanSearchSection } from "@/components/examples/scan-search-section";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  tabsSegmentedContentClassName,
} from "@/components/tabs";

import {
  EmptyWorklistTable,
  exceptionsColumns,
  openTasksColumns,
  PopulatedWorklistTable,
  reportsColumns,
} from "./worklist-table-previews";

export function WorkspaceTabsPreview({
  defaultValue,
  value,
  onValueChange,
}: {
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
}) {
  return (
    <Tabs defaultValue={defaultValue} value={value} onValueChange={onValueChange}>
      <TabsList>
        <TabsTrigger value="my-info">My info</TabsTrigger>
        <TabsTrigger value="scan-search">Scan Search</TabsTrigger>
        <TabsTrigger value="my-reports">My Reports</TabsTrigger>
      </TabsList>

      <TabsContent value="my-info" className={tabsSegmentedContentClassName}>
        <DashboardGrid>
          <DashboardGridItem>
            <PopulatedWorklistTable />
          </DashboardGridItem>
          <DashboardGridItem>
            <EmptyWorklistTable
              title="My exceptions"
              columns={[...exceptionsColumns]}
            />
          </DashboardGridItem>
          <DashboardGridItem span="full">
            <EmptyWorklistTable
              title="My open tasks"
              columns={[...openTasksColumns]}
            />
          </DashboardGridItem>
        </DashboardGrid>
      </TabsContent>

      <TabsContent value="scan-search" className={tabsSegmentedContentClassName}>
        <ScanSearchSection />
      </TabsContent>

      <TabsContent value="my-reports" className={tabsSegmentedContentClassName}>
        <EmptyWorklistTable title="My Reports" columns={[...reportsColumns]} />
      </TabsContent>
    </Tabs>
  );
}
