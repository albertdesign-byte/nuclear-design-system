import type { Metadata } from "next";

import { RadioGroupDocsPage } from "@/components/docs/components/radio-group/radio-group-docs-page";

export const metadata: Metadata = {
  title: "Radio Group",
  description: "Medmo Design System — Radio Group component documentation.",
};

export default function RadioGroupDocsRoute() {
  return <RadioGroupDocsPage />;
}
