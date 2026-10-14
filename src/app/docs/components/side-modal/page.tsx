import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { SideModalDocsPage } from "@/components/docs/components/side-modal/side-modal-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/side-modal");

export default function SideModalDocsRoute() {
  return <SideModalDocsPage />;
}
