import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { InputDocsPage } from "@/components/docs/components/input/input-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/input");

export default function InputDocsRoute() {
  return <InputDocsPage />;
}
