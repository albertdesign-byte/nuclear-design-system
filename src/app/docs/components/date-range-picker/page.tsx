import type { Metadata } from "next";

import { DateRangePickerDocsPage } from "@/components/docs/components/date-range-picker/date-range-picker-docs-page";

export const metadata: Metadata = {
  title: "Date Range Picker",
  description: "Medmo Design System — Date Range Picker component documentation.",
};

export default function DateRangePickerDocsRoute() {
  return <DateRangePickerDocsPage />;
}
