import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { BadgeDocsPage } from "@/components/docs/components/badge/badge-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/badge");

export default function BadgeDocsRoute() {
  return <BadgeDocsPage />;
}
