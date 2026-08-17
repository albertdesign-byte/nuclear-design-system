import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { CheckboxDocsPage } from "@/components/docs/components/checkbox/checkbox-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/checkbox");

export default function CheckboxDocsRoute() {
  return <CheckboxDocsPage />;
}
