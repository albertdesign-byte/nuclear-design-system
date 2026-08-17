import type { Metadata } from "next";

import { getPatternMetadata } from "@/components/docs/config/patterns-registry";
import { FormFieldPatternsDocsPage } from "@/components/docs/patterns/form-field-patterns/form-field-patterns-docs-page";

export const metadata: Metadata = getPatternMetadata(
  "/docs/patterns/form-field-patterns"
);

export default function FormFieldPatternsRoute() {
  return <FormFieldPatternsDocsPage />;
}
