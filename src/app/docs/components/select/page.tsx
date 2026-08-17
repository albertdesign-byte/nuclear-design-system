import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { SelectDocsPage } from "@/components/docs/components/select/select-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/select");

export default function SelectDocsRoute() {
  return <SelectDocsPage />;
}
