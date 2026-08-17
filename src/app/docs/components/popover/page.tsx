import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { PopoverDocsPage } from "@/components/docs/components/popover/popover-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/popover");

export default function PopoverDocsRoute() {
  return <PopoverDocsPage />;
}
