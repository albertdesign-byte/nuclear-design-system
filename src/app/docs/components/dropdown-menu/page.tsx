import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DropdownMenuDocsPage } from "@/components/docs/components/dropdown-menu/dropdown-menu-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/dropdown-menu");

export default function DropdownMenuDocsRoute() {
  return <DropdownMenuDocsPage />;
}
