import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DropzoneDocsPage } from "@/components/docs/components/dropzone/dropzone-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/dropzone");

export default function DropzoneDocsRoute() {
  return <DropzoneDocsPage />;
}
