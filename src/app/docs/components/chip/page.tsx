import type { Metadata } from "next";

import { ChipDocsPage } from "@/components/docs/components/chip/chip-docs-page";

export const metadata: Metadata = {
  title: "Chip",
  description: "Medmo Design System — Chip component documentation.",
};

export default function ChipDocsRoute() {
  return <ChipDocsPage />;
}
