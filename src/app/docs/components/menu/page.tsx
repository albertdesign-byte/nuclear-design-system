import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { MenuDocsPage } from "@/components/docs/components/menu/menu-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/menu");

export default function MenuDocsRoute() {
  return <MenuDocsPage />;
}
