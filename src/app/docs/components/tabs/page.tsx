import type { Metadata } from "next";

import { TabsDocsPage } from "@/components/docs/components/tabs/tabs-docs-page";

export const metadata: Metadata = {
  title: "Tabs",
  description: "Medmo Design System — Tabs component documentation.",
};

export default function TabsDocsRoute() {
  return <TabsDocsPage />;
}
