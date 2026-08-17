import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DashboardPanelDocsPage } from "@/components/docs/components/dashboard-panel/dashboard-panel-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/dashboard-panel");

export default function DashboardPanelDocsRoute() {
  return <DashboardPanelDocsPage />;
}
