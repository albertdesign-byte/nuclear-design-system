import type { Metadata } from "next";

import { BadgeDocsPage } from "@/components/docs/components/badge/badge-docs-page";

export const metadata: Metadata = {
  title: "Badge",
  description: "Medmo Design System — Badge component documentation.",
};

export default function BadgeDocsRoute() {
  return <BadgeDocsPage />;
}
