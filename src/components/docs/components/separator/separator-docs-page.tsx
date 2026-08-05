"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import { Separator } from "@/components/separator";
import {
  separatorInstallationUiSnippet,
  separatorRealScreenSnippet,
  separatorUsageSnippet,
  separatorVerticalSnippet,
} from "@/components/docs/components/separator/separator-code-snippets";
import { SeparatorRealScreenPreview } from "@/components/docs/components/separator/separator-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const separatorTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "vertical", label: "Vertical" },
  { id: "api-reference", label: "API Reference" },
];

const separatorApiRows = [
  {
    prop: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
  },
];

export function SeparatorDocsPage() {
  return (
    <DocsComponentPage
      title="Separator"
      description="Visually divides content with a tokenized border color."
      tocItems={separatorTocItems}
      realScreen={{
        preview: <SeparatorRealScreenPreview />,
        code: separatorRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/scroll-area" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Scroll Area
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/skeleton" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Skeleton
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={separatorInstallationUiSnippet}>
              <div className="w-full max-w-sm space-y-[var(--space-stack-md)]">
                <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  Section A
                </p>
                <Separator />
                <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  Section B
                </p>
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/separator</DocsInlineCode>. Uses{" "}
                <DocsInlineCode>--color-border</DocsInlineCode> for the divider
                fill.
              </>
            }
          >
            <DocsPreview code={separatorUsageSnippet}>
              <div className="w-full max-w-sm space-y-[var(--space-stack-md)]">
                <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  Section A
                </p>
                <Separator />
                <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  Section B
                </p>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="vertical" title="Vertical">
            <DocsPreview code={separatorVerticalSnippet}>
              <div className="flex h-20 w-full max-w-sm items-stretch gap-[var(--space-inline-md)]">
                <div className="flex-1 rounded-[var(--radius-md)] bg-[var(--color-surface-muted)]" />
                <Separator orientation="vertical" />
                <div className="flex-1 rounded-[var(--radius-md)] bg-[var(--color-surface-muted)]" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Separator
            </h3>
            <DocsApiTable rows={separatorApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
