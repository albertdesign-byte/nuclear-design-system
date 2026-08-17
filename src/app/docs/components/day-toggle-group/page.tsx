import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DayToggleGroupDocsPage } from "@/components/docs/components/day-toggle-group/day-toggle-group-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/day-toggle-group");

export default function DayToggleGroupDocsRoute() {
  return <DayToggleGroupDocsPage />;
}
