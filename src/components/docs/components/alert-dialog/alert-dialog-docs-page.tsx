"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/alert-dialog";
import { Button } from "@/components/button";
import {
  alertDialogInstallationUiSnippet,
  alertDialogRealScreenSnippet,
  alertDialogUsageSnippet,
} from "@/components/docs/components/alert-dialog/alert-dialog-code-snippets";
import { AlertDialogRealScreenPreview } from "@/components/docs/components/alert-dialog/alert-dialog-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const alertDialogTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "api-reference", label: "API Reference" },
];

const alertDialogApiRows = [
  { prop: "open", type: "boolean", defaultValue: "—" },
  { prop: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
  { prop: "intent", type: '"default" | "danger"', defaultValue: '"default"' },
];

export function AlertDialogDocsPage() {
  return (
    <DocsComponentPage
      title="Alert Dialog"
      description="A modal dialog that interrupts the user with important content and expects a response."
      tocItems={alertDialogTocItems}
      realScreen={{
        preview: <AlertDialogRealScreenPreview />,
        code: alertDialogRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/command" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Command
          </Button>
          <Button variant="ghost" size="sm" disabled className="gap-[var(--space-inline-sm)]">
            Phase 5
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={alertDialogInstallationUiSnippet}>
              <AlertDialog>
                <AlertDialogTrigger render={<Button variant="outline" size="sm" />}>
                  Delete record
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                      This action cannot be undone.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Built on{" "}
                <DocsInlineCode>@base-ui/react/alert-dialog</DocsInlineCode>.
                Import from{" "}
                <DocsInlineCode>@/components/alert-dialog</DocsInlineCode>.
                Unlike Dialog, dismiss-on-outside-click is disabled by default.
              </>
            }
          >
            <DocsPreview code={alertDialogUsageSnippet}>
              <AlertDialogRealScreenPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              AlertDialogAction
            </h3>
            <DocsApiTable rows={alertDialogApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
