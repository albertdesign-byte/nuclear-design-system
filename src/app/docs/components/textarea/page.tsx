import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { TextareaDocsPage } from "@/components/docs/components/textarea/textarea-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/textarea");

export default function TextareaDocsRoute() {
  return <TextareaDocsPage />;
}
