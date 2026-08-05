import type { Metadata } from "next";

import { DashboardPanelDocsPage } from "@/components/docs/components/dashboard-panel/dashboard-panel-docs-page";

export const metadata: Metadata = {
  title: "Dashboard Panel",
  description: "Medmo Design System — Dashboard Panel component documentation.",
};

export default function DashboardPanelDocsRoute() {
  return <DashboardPanelDocsPage />;
}
