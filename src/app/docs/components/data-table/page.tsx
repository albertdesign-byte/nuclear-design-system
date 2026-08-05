import type { Metadata } from "next";

import { DataTableDocsPage } from "@/components/docs/components/data-table/data-table-docs-page";

export const metadata: Metadata = {
  title: "Data Table",
  description: "Medmo Design System — Data Table component documentation.",
};

export default function DataTableDocsRoute() {
  return <DataTableDocsPage />;
}
