import type { Metadata } from "next";

import { AccordionDocsPage } from "@/components/docs/components/accordion/accordion-docs-page";

export const metadata: Metadata = {
  title: "Accordion",
  description: "Medmo Design System — Accordion component documentation.",
};

export default function AccordionDocsRoute() {
  return <AccordionDocsPage />;
}
