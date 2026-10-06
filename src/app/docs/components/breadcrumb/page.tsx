import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { BreadcrumbDocsPage } from "@/components/docs/components/breadcrumb/breadcrumb-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/breadcrumb");

export default function BreadcrumbDocsRoute() {
  return <BreadcrumbDocsPage />;
}
