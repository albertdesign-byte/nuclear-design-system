import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { SwitchDocsPage } from "@/components/docs/components/switch/switch-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/switch");

export default function SwitchDocsRoute() {
  return <SwitchDocsPage />;
}
