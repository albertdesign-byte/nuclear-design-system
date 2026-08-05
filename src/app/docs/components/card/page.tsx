import type { Metadata } from "next";

import { CardDocsPage } from "@/components/docs/components/card/card-docs-page";

export const metadata: Metadata = {
  title: "Card",
  description: "Medmo Design System — Card component documentation.",
};

export default function CardDocsRoute() {
  return <CardDocsPage />;
}
