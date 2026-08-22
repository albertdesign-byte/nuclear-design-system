import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DatePickerDocsPage } from "@/components/docs/components/date-picker/date-picker-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/date-picker");

export default function DatePickerDocsRoute() {
  return <DatePickerDocsPage />;
}
