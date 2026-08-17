"use client";

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import {
  LayoutDashboardIcon,
  MessageSquareIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";
import { useState } from "react";

import { AppHeader } from "@/components/app-header";
import { AppShell } from "@/components/app-shell";
import { AppSidebar } from "@/components/app-sidebar";
import { GlobalSearchBar } from "@/components/global-search-bar";
import { UserProfileBlock } from "@/components/user-profile-block";

import { fullWidthParameters } from "../../../.storybook/story-meta";

import { WorkspaceTabsPreview } from "./workspace-tabs-preview";

const sidebarItems = [
  { label: "Dashboard", href: "#", icon: LayoutDashboardIcon, active: true },
  { label: "Patients", href: "#", icon: UsersIcon },
  { label: "Uploads", href: "#", icon: UploadIcon },
  { label: "Messages", href: "#", icon: MessageSquareIcon },
];

function OperationalAppChrome({
  defaultWorkspace,
}: {
  defaultWorkspace: "scan-search" | "my-reports";
}) {
  const [activeTab, setActiveTab] = useState<string>(defaultWorkspace);
  const showHeaderSearch = activeTab !== "scan-search";

  return (
    <AppShell
      sidebar={<AppSidebar items={sidebarItems} logoHref="/" />}
      header={
        <AppHeader
          title="Dashboard"
          search={
            showHeaderSearch ? (
              <GlobalSearchBar className="max-w-[16rem]" />
            ) : undefined
          }
          actions={<UserProfileBlock name="Elena Morales" />}
        />
      }
    >
      <WorkspaceTabsPreview value={activeTab} onValueChange={setActiveTab} />
    </AppShell>
  );
}

const meta = {
  title: "Patterns/Operational app chrome",
  tags: ["autodocs"],
  parameters: {
    ...fullWidthParameters,
    docs: {
      ...fullWidthParameters.docs,
      description: {
        component:
          "Persistent operational frame: AppShell, sidebar, page title, optional header search, and signed-in identity. Main is the Workspace tabs composition. Header search is hidden on Scan Search so two search fields are not shown at once. Representation of the assembly — not a production screen.",
      },
    },
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const ScanSearchWorkspace: Story = {
  render: () => <OperationalAppChrome defaultWorkspace="scan-search" />,
};

export const ReportsWorkspace: Story = {
  render: () => <OperationalAppChrome defaultWorkspace="my-reports" />,
};
