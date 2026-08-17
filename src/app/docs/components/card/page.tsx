import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { CardDocsPage } from "@/components/docs/components/card/card-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/card");

export default function CardDocsRoute() {
  return <CardDocsPage />;
}
