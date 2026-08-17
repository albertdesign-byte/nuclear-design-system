import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { AppFooterDocsPage } from "@/components/docs/components/app-footer/app-footer-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/app-footer");

export default function AppFooterDocsRoute() {
  return <AppFooterDocsPage />;
}
