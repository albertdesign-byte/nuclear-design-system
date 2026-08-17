import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { TextLinkDocsPage } from "@/components/docs/components/text-link/text-link-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/text-link");

export default function TextLinkDocsRoute() {
  return <TextLinkDocsPage />;
}
