"use client";

import { usePathname } from "next/navigation";

import { DocsUserflowPage } from "@/components/docs/userflow/docs-userflow-page";
import { DashboardScreen } from "@/components/examples/dashboard-screen";

export function UserflowDashboardPage() {
  const pathname = usePathname();

  return (
    <DocsUserflowPage>
      <DashboardScreen
        className="h-full min-h-0"
        dashboardHref={pathname}
      />
    </DocsUserflowPage>
  );
}
