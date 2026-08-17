import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { SonnerDocsPage } from "@/components/docs/components/sonner/sonner-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/sonner");

export default function SonnerDocsRoute() {
  return <SonnerDocsPage />;
}
