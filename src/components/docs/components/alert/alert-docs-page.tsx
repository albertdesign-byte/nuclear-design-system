"use client";

import Link from "next/link";
import { AlertTriangleIcon, ArrowLeftIcon, ArrowRightIcon, InfoIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/alert";
import { Button } from "@/components/button";
import {
  alertDestructiveSnippet,
  alertInstallationUiSnippet,
  alertRealScreenSnippet,
  alertSuccessSnippet,
  alertUsageSnippet,
} from "@/components/docs/components/alert/alert-code-snippets";
import { AlertRealScreenPreview } from "@/components/docs/components/alert/alert-real-screen-preview";
import { alertTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const alertApiRows = [
  { prop: "variant", type: '"default" | "destructive" | "success"', defaultValue: '"default"' },
  { prop: "role", type: "string", defaultValue: '"alert"' },
];

export function AlertDocsPage() {
  return (
    <DocsComponentPage
      title="Alert"
      description="Displays a callout for user attention."
      tocItems={alertTocItems}
      realScreen={{
        preview: <AlertRealScreenPreview />,
        code: alertRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/dropdown-menu" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Dropdown Menu
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/command" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Command
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={alertInstallationUiSnippet}>
              <Alert className="max-w-md">
                <AlertTitle>Follow-up scheduled</AlertTitle>
                <AlertDescription>
                  Cardiology consult confirmed for Monday at 09:00.
                </AlertDescription>
              </Alert>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/alert</DocsInlineCode>.
                Use for lab results, scheduling updates, and clinical warnings.
              </>
            }
          >
            <DocsPreview code={alertUsageSnippet}>
              <Alert className="max-w-md">
                <AlertTitle>Follow-up scheduled</AlertTitle>
                <AlertDescription>
                  Cardiology consult confirmed for Monday at 09:00.
                </AlertDescription>
              </Alert>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="destructive"
            title="Destructive"
            description="Highlight critical lab values and urgent clinical actions."
          >
            <DocsPreview code={alertDestructiveSnippet}>
              <Alert variant="destructive" className="max-w-md">
                <AlertTriangleIcon />
                <AlertTitle>Potassium critically high — 6.8 mEq/L</AlertTitle>
                <AlertDescription>
                  Notify attending physician immediately.
                </AlertDescription>
              </Alert>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="success"
            title="Success"
            description="Reassuring policy copy and non-critical confirmations in patient checkout flows."
          >
            <DocsPreview code={alertSuccessSnippet}>
              <Alert variant="success" className="max-w-md">
                <InfoIcon />
                <AlertTitle>Cancelation policy.</AlertTitle>
                <AlertDescription>
                  Cancel at least 24 hours before your appointment for a full refund.
                </AlertDescription>
              </Alert>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Alert
            </h3>
            <DocsApiTable rows={alertApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
