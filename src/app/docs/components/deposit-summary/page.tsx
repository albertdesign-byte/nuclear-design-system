import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { DepositSummaryDocsPage } from "@/components/docs/components/deposit-summary/deposit-summary-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/deposit-summary");

export default function DepositSummaryDocsRoute() {
  return <DepositSummaryDocsPage />;
}
