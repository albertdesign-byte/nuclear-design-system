import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { LabelDocsPage } from "@/components/docs/components/label/label-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/label");

export default function LabelDocsRoute() {
  return <LabelDocsPage />;
}
