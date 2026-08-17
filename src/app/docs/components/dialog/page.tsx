import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DialogDocsPage } from "@/components/docs/components/dialog/dialog-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/dialog");

export default function DialogDocsRoute() {
  return <DialogDocsPage />;
}
