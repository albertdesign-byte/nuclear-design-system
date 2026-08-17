import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { AccordionDocsPage } from "@/components/docs/components/accordion/accordion-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/accordion");

export default function AccordionDocsRoute() {
  return <AccordionDocsPage />;
}
