import type { Metadata } from "next";

import { TableDocsPage } from "@/components/docs/components/table/table-docs-page";

export const metadata: Metadata = {
  title: "Table",
  description: "Medmo Design System — Table component documentation.",
};

export default function TableDocsRoute() {
  return <TableDocsPage />;
}
