import type { Metadata } from "next";

import { getTemplateMetadata } from "@/components/docs/config/templates-registry";
import { SearchResultsDocsPage } from "@/components/docs/templates/search-results-docs-page";

export const metadata: Metadata = getTemplateMetadata(
  "/docs/templates/search-results"
);

export default function SearchResultsTemplateRoute() {
  return <SearchResultsDocsPage />;
}
