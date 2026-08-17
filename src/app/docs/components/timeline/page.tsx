import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { TimelineDocsPage } from "@/components/docs/components/timeline/timeline-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/timeline");

export default function TimelineDocsRoute() {
  return <TimelineDocsPage />;
}
