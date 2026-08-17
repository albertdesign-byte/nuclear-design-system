import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { AlertDocsPage } from "@/components/docs/components/alert/alert-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/alert");

export default function AlertDocsRoute() {
  return <AlertDocsPage />;
}
