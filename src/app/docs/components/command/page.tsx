import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { CommandDocsPage } from "@/components/docs/components/command/command-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/command");

export default function CommandDocsRoute() {
  return <CommandDocsPage />;
}
