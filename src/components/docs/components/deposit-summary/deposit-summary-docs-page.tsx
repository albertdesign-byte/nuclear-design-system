"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { DepositSummary } from "@/components/deposit-summary";
import { Button } from "@/components/button";
import {
  depositSummaryInstallationUiSnippet,
  depositSummaryRealScreenSnippet,
  depositSummaryUsageSnippet,
} from "@/components/docs/components/deposit-summary/deposit-summary-code-snippets";
import { DepositSummaryRealScreenPreview } from "@/components/docs/components/deposit-summary/deposit-summary-real-screen-preview";
import { depositSummaryTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const previewItems = [
  {
    title: "Ultrasound Joint (Scan ID: 9181)",
    lines: [
      { label: "Total cost", amount: "$350.00" },
      { label: "Pay on appointment", amount: "$260.00" },
      { label: "Due now", amount: "$45.00", emphasis: true },
    ],
  },
  {
    title: "Ultrasound Joint (Scan ID: 9182)",
    lines: [
      { label: "Total cost", amount: "$350.00" },
      { label: "Pay on appointment", amount: "$260.00" },
      { label: "Due now", amount: "$45.00", emphasis: true },
    ],
  },
];

const depositSummaryApiRows = [
  { prop: "items", type: "DepositSummaryItem[]", defaultValue: "—" },
  { prop: "totalLabel", type: "string", defaultValue: '"Total due now"' },
  { prop: "totalAmount", type: "string", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "undefined" },
];

export function DepositSummaryDocsPage() {
  return (
    <DocsComponentPage
      title="Deposit Summary"
      description="Price breakdown card for deposit checkout — scan costs, due-now amounts, and totals."
      tocItems={depositSummaryTocItems}
      realScreen={{
        preview: <DepositSummaryRealScreenPreview />,
        code: depositSummaryRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/date-range-picker" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Date Range Picker
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/payment-form" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Payment Form
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={depositSummaryInstallationUiSnippet}>
              <DepositSummary items={previewItems} totalAmount="$90.00" />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/deposit-summary</DocsInlineCode>.
                Pass one or more scan items with line rows and a footer total.
              </>
            }
          >
            <DocsPreview code={depositSummaryUsageSnippet}>
              <DepositSummary items={previewItems} totalAmount="$90.00" />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={depositSummaryApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
