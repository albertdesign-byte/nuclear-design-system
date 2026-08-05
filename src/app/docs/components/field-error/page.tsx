import type { Metadata } from "next";

import { FieldErrorDocsPage } from "@/components/docs/components/field-error/field-error-docs-page";

export const metadata: Metadata = {
  title: "Field Error",
  description: "Medmo Design System — Field Error component documentation.",
};

export default function FieldErrorDocsRoute() {
  return <FieldErrorDocsPage />;
}
