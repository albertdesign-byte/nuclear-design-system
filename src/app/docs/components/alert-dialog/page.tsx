import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { AlertDialogDocsPage } from "@/components/docs/components/alert-dialog/alert-dialog-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/alert-dialog");

export default function AlertDialogDocsRoute() {
  return <AlertDialogDocsPage />;
}
