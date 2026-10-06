import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { CalendarDocsPage } from "@/components/docs/components/calendar/calendar-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/calendar");

export default function CalendarDocsRoute() {
  return <CalendarDocsPage />;
}
