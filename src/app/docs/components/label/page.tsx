import type { Metadata } from "next";

import { LabelDocsPage } from "@/components/docs/components/label/label-docs-page";

export const metadata: Metadata = {
  title: "Label",
  description: "Medmo Design System — Label component documentation.",
};

export default function LabelDocsRoute() {
  return <LabelDocsPage />;
}
