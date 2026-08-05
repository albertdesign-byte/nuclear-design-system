import type { Metadata } from "next";

import { TextareaDocsPage } from "@/components/docs/components/textarea/textarea-docs-page";

export const metadata: Metadata = {
  title: "Textarea",
  description: "Medmo Design System — Textarea component documentation.",
};

export default function TextareaDocsRoute() {
  return <TextareaDocsPage />;
}
