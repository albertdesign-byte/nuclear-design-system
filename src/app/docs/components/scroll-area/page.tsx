import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { ScrollAreaDocsPage } from "@/components/docs/components/scroll-area/scroll-area-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/scroll-area");

export default function ScrollAreaDocsRoute() {
  return <ScrollAreaDocsPage />;
}
