import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { RadioGroupDocsPage } from "@/components/docs/components/radio-group/radio-group-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/radio-group");

export default function RadioGroupDocsRoute() {
  return <RadioGroupDocsPage />;
}
