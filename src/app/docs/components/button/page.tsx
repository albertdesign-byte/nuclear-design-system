import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { ButtonDocsPage } from "@/components/docs/components/button/button-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/button");

export default function ButtonDocsRoute() {
  return <ButtonDocsPage />;
}
