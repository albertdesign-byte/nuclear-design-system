import type { Metadata } from "next";

import { TimelineDocsPage } from "@/components/docs/components/timeline/timeline-docs-page";

export const metadata: Metadata = {
  title: "Timeline",
  description: "Medmo Design System — Timeline component documentation.",
};

export default function TimelineDocsRoute() {
  return <TimelineDocsPage />;
}
