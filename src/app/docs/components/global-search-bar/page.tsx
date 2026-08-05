import type { Metadata } from "next";

import { GlobalSearchBarDocsPage } from "@/components/docs/components/global-search-bar/global-search-bar-docs-page";

export const metadata: Metadata = {
  title: "Global Search Bar",
  description: "Medmo Design System — Global Search Bar component documentation.",
};

export default function GlobalSearchBarDocsRoute() {
  return <GlobalSearchBarDocsPage />;
}
