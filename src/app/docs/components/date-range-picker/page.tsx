import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DateRangePickerDocsPage } from "@/components/docs/components/date-range-picker/date-range-picker-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/date-range-picker");

export default function DateRangePickerDocsRoute() {
  return <DateRangePickerDocsPage />;
}
