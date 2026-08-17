import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { TabsDocsPage } from "@/components/docs/components/tabs/tabs-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/tabs");

export default function TabsDocsRoute() {
  return <TabsDocsPage />;
}
