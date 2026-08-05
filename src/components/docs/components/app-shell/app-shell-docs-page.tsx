"use client";

import Link from "next/link";
import {
  BriefcaseMedicalIcon,
  ArrowRightIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  MessageSquareIcon,
  PlusIcon,
  StethoscopeIcon,
  UploadIcon,
  UsersIcon,
} from "lucide-react";

import { Button } from "@/components/button";
import { AppShellRealScreenPreview } from "@/components/docs/components/app-shell/app-shell-real-screen-preview";
import {
  appShellInstallationUiSnippet,
  appShellRealScreenSnippet,
  appShellUsageSnippet,
  appSidebarSnippet,
} from "@/components/docs/components/app-shell/app-shell-code-snippets";
import { appShellTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { AppSidebar } from "@/components/app-sidebar";

const appShellApiRows = [
  { prop: "sidebar", type: "ReactNode", defaultValue: "—" },
  { prop: "header", type: "ReactNode", defaultValue: "—" },
  { prop: "children", type: "ReactNode", defaultValue: "—" },
];

export function AppShellDocsPage() {
  return (
    <DocsComponentPage
      title="App Shell"
      description="Product layout shell with primary sidebar rail, app header, and main content slot."
      tocItems={appShellTocItems}
      realScreen={{
        preview: (
          <div className="flex h-[24rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
            <AppShellRealScreenPreview />
          </div>
        ),
        code: appShellRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={appShellInstallationUiSnippet}>
              <div className="flex h-[12rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
                <AppShellRealScreenPreview />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Compose from{" "}
                <DocsInlineCode>@/components/app-shell</DocsInlineCode>,{" "}
                <DocsInlineCode>app-sidebar</DocsInlineCode>, and{" "}
                <DocsInlineCode>app-header</DocsInlineCode>. Uses Nuclear primary
                tokens — not legacy product red.
              </>
            }
          >
            <DocsPreview code={appShellUsageSnippet}>
              <div className="flex h-[10rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
                <AppShellRealScreenPreview />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="sidebar" title="App Sidebar">
            <DocsPreview code={appSidebarSnippet}>
              <div className="flex h-[28rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
                <AppSidebar
                  items={[
                    {
                      label: "Dashboard",
                      href: "#",
                      icon: LayoutDashboardIcon,
                      active: true,
                    },
                    { label: "Patients", href: "#", icon: UsersIcon },
                    { label: "Uploads", href: "#", icon: UploadIcon },
                    { label: "Messages", href: "#", icon: MessageSquareIcon },
                    { label: "Create", href: "#", icon: PlusIcon },
                    { label: "Clinical", href: "#", icon: StethoscopeIcon },
                    { label: "Orders", href: "#", icon: BriefcaseMedicalIcon },
                    { label: "Sign out", href: "#", icon: LogOutIcon },
                  ]}
                />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="example"
            title="Dashboard Example"
            description="Full dashboard replication using App Shell, Data Table, Dashboard Panel, and Folder Tabs."
          >
            <Button render={<Link href="/examples/dashboard" />}>
              Open dashboard example
              <ArrowRightIcon />
            </Button>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={appShellApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
