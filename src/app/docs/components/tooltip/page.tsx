import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { TooltipDocsPage } from "@/components/docs/components/tooltip/tooltip-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/tooltip");

export default function TooltipDocsRoute() {
  return <TooltipDocsPage />;
}
