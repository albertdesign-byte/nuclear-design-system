import type { Metadata } from "next";

import { DayToggleGroupDocsPage } from "@/components/docs/components/day-toggle-group/day-toggle-group-docs-page";

export const metadata: Metadata = {
  title: "Day Toggle Group",
  description: "Medmo Design System — Day Toggle Group component documentation.",
};

export default function DayToggleGroupDocsRoute() {
  return <DayToggleGroupDocsPage />;
}
