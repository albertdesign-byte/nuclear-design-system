import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { SpinnerDocsPage } from "@/components/docs/components/spinner/spinner-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/spinner");

export default function SpinnerDocsRoute() {
  return <SpinnerDocsPage />;
}
