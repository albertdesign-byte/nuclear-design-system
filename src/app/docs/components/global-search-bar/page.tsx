import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { GlobalSearchBarDocsPage } from "@/components/docs/components/global-search-bar/global-search-bar-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/global-search-bar");

export default function GlobalSearchBarDocsRoute() {
  return <GlobalSearchBarDocsPage />;
}
