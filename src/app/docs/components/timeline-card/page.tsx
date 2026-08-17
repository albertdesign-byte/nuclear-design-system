import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { TimelineCardDocsPage } from "@/components/docs/components/timeline-card/timeline-card-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/timeline-card");

export default function TimelineCardDocsRoute() {
  return <TimelineCardDocsPage />;
}
