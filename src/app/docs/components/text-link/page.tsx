import type { Metadata } from "next";

import { TextLinkDocsPage } from "@/components/docs/components/text-link/text-link-docs-page";

export const metadata: Metadata = {
  title: "Text Link",
  description: "Medmo Design System — Text Link component documentation.",
};

export default function TextLinkDocsRoute() {
  return <TextLinkDocsPage />;
}
