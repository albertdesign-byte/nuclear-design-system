import type { Metadata } from "next";

import { TimelineCardDocsPage } from "@/components/docs/components/timeline-card/timeline-card-docs-page";

export const metadata: Metadata = {
  title: "Timeline Card",
  description: "Medmo Design System — Timeline Card component documentation.",
};

export default function TimelineCardDocsRoute() {
  return <TimelineCardDocsPage />;
}
