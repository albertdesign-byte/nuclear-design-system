import type { Metadata } from "next";

import { SelectDocsPage } from "@/components/docs/components/select/select-docs-page";

export const metadata: Metadata = {
  title: "Select",
  description: "Medmo Design System — Select component documentation.",
};

export default function SelectDocsRoute() {
  return <SelectDocsPage />;
}
