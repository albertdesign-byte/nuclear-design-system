import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { ChipDocsPage } from "@/components/docs/components/chip/chip-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/chip");

export default function ChipDocsRoute() {
  return <ChipDocsPage />;
}
