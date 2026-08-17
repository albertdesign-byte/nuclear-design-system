import type { Metadata } from "next";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { DisabledStateDocsPage } from "@/components/docs/foundations/disabled-state/disabled-state-docs-page";

const foundation = getFoundationEntry("/docs/foundations/disabled-state")!;
export const metadata: Metadata = {
  title: foundation.title,
  description: foundation.description,
};

export default function DisabledStateFoundationRoute() {
  return <DisabledStateDocsPage />;
}
