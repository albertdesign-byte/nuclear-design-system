import type { Metadata } from "next";

import { SeparatorDocsPage } from "@/components/docs/components/separator/separator-docs-page";

export const metadata: Metadata = {
  title: "Separator",
  description: "Medmo Design System — Separator component documentation.",
};

export default function SeparatorDocsRoute() {
  return <SeparatorDocsPage />;
}
