import type { Metadata } from "next";

import { PopoverDocsPage } from "@/components/docs/components/popover/popover-docs-page";

export const metadata: Metadata = {
  title: "Popover",
  description: "Medmo Design System — Popover component documentation.",
};

export default function PopoverDocsRoute() {
  return <PopoverDocsPage />;
}
