import type { Metadata } from "next";

import { ScrollAreaDocsPage } from "@/components/docs/components/scroll-area/scroll-area-docs-page";

export const metadata: Metadata = {
  title: "Scroll Area",
  description: "Medmo Design System — Scroll Area component documentation.",
};

export default function ScrollAreaDocsRoute() {
  return <ScrollAreaDocsPage />;
}
