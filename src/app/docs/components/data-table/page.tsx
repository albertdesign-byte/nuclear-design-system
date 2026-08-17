import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DataTableDocsPage } from "@/components/docs/components/data-table/data-table-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/data-table");

export default function DataTableDocsRoute() {
  return <DataTableDocsPage />;
}
