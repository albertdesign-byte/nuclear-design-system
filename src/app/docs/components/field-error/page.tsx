import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { FieldErrorDocsPage } from "@/components/docs/components/field-error/field-error-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/field-error");

export default function FieldErrorDocsRoute() {
  return <FieldErrorDocsPage />;
}
