import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { SeparatorDocsPage } from "@/components/docs/components/separator/separator-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/separator");

export default function SeparatorDocsRoute() {
  return <SeparatorDocsPage />;
}
