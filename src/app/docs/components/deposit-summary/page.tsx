import type { Metadata } from "next";

import { DepositSummaryDocsPage } from "@/components/docs/components/deposit-summary/deposit-summary-docs-page";

export const metadata: Metadata = {
  title: "Deposit Summary",
  description: "Medmo Design System — Deposit Summary component documentation.",
};

export default function DepositSummaryDocsRoute() {
  return <DepositSummaryDocsPage />;
}
