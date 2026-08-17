"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
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
import { GlobalSearchBar } from "@/components/global-search-bar";
import { UserProfileBlock } from "@/components/user-profile-block";
import { getGlobalSearchItems } from "@/data/scan-requests";

import { screenParameters } from "../../../../.storybook/story-meta";
import { WorkspaceTabsPreview } from "../../patterns/workspace-tabs-preview";

const sidebarItems: AppSidebarNavItem[] = [
  { label: "Dashboard", href: "#", icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "#", icon: UsersIcon },
  { label: "Uploads", href: "#", icon: UploadIcon },
  { label: "Messages", href: "#", icon: MessageSquareIcon },
  { label: "Create", href: "#", icon: PlusIcon },
  { label: "Clinical", href: "#", icon: StethoscopeIcon },
  { label: "Orders", href: "#", icon: BriefcaseMedicalIcon },
  { label: "Sign out", href: "#", icon: LogOutIcon },
];

const searchItems = getGlobalSearchItems();

function OperationalDashboard() {
  const [activeTab, setActiveTab] = useState("my-info");
  const showHeaderSearch = activeTab !== "scan-search";

  return (
    <AppShell
      sidebar={<AppSidebar items={sidebarItems} logoHref="/" />}
      header={
        <AppHeader
          title="Dashboard"
          search={
            showHeaderSearch ? (
              <GlobalSearchBar items={searchItems} />
            ) : undefined
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
      <WorkspaceTabsPreview value={activeTab} onValueChange={setActiveTab} />
    </AppShell>
  );
}

const meta = {
  title: "Screens/Operational/Dashboard",
  tags: ["autodocs"],
  parameters: {
    ...screenParameters,
    docs: {
      ...screenParameters.docs,
      description: {
        component:
          "MPF Portal Dashboard assembled from existing Nuclear assets: AppShell, AppSidebar, AppHeader, Workspace tabs, DashboardGrid, and Worklist table. Header search is hidden on Scan Search so two search fields are not shown at once. Demo data is the existing scan-request fixture. Not a new template or pattern.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Dashboard: Story = {
  render: () => <OperationalDashboard />,
};
