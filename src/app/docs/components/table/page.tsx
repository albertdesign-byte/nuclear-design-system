import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { TableDocsPage } from "@/components/docs/components/table/table-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/table");

export default function TableDocsRoute() {
  return <TableDocsPage />;
}
