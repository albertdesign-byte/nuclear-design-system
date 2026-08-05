import type { Metadata } from "next";

import { InputDocsPage } from "@/components/docs/components/input/input-docs-page";

export const metadata: Metadata = {
  title: "Input",
  description: "Medmo Design System — Input component documentation.",
};

export default function InputDocsRoute() {
  return <InputDocsPage />;
}
