import type { Metadata } from "next";

import { CheckboxDocsPage } from "@/components/docs/components/checkbox/checkbox-docs-page";

export const metadata: Metadata = {
  title: "Checkbox",
  description: "Medmo Design System — Checkbox component documentation.",
};

export default function CheckboxDocsRoute() {
  return <CheckboxDocsPage />;
}
