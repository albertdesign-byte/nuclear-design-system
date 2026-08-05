import type { Metadata } from "next";

import { TooltipDocsPage } from "@/components/docs/components/tooltip/tooltip-docs-page";

export const metadata: Metadata = {
  title: "Tooltip",
  description: "Medmo Design System — Tooltip component documentation.",
};

export default function TooltipDocsRoute() {
  return <TooltipDocsPage />;
}
