"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip";
import {
  tooltipInstallationUiSnippet,
  tooltipProviderSnippet,
  tooltipRealScreenSnippet,
  tooltipSideSnippet,
  tooltipUsageSnippet,
} from "@/components/docs/components/tooltip/tooltip-code-snippets";
import { TooltipRealScreenPreview } from "@/components/docs/components/tooltip/tooltip-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { CircleHelpIcon } from "lucide-react";

export const tooltipTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "side", label: "Side" },
  { id: "provider", label: "Provider" },
  { id: "api-reference", label: "API Reference" },
];

const tooltipApiRows = [
  { prop: "side", type: '"top" | "right" | "bottom" | "left"', defaultValue: '"top"' },
  { prop: "sideOffset", type: "number", defaultValue: "4" },
  { prop: "align", type: '"start" | "center" | "end"', defaultValue: '"center"' },
  { prop: "delay", type: "number", defaultValue: "0" },
];

export function TooltipDocsPage() {
  return (
    <DocsComponentPage
      title="Tooltip"
      description="Displays supplementary information on hover or focus."
      tocItems={tooltipTocItems}
      realScreen={{
        preview: <TooltipRealScreenPreview />,
        code: tooltipRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/dialog" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Dialog
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/scroll-area" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Scroll Area
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={tooltipInstallationUiSnippet}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="ghost" size="icon-md" aria-label="Help" />
                  }
                >
                  <CircleHelpIcon />
                </TooltipTrigger>
                <TooltipContent>Contextual help text.</TooltipContent>
              </Tooltip>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/tooltip</DocsInlineCode>. Wrap
                triggers with{" "}
                <DocsInlineCode>TooltipTrigger</DocsInlineCode> and provide
                content in{" "}
                <DocsInlineCode>TooltipContent</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={tooltipUsageSnippet}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="ghost" size="icon-md" aria-label="Help" />
                  }
                >
                  <CircleHelpIcon />
                </TooltipTrigger>
                <TooltipContent>Contextual help text.</TooltipContent>
              </Tooltip>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="side"
            title="Side"
            description={
              <>
                Control placement with the{" "}
                <DocsInlineCode>side</DocsInlineCode> prop on{" "}
                <DocsInlineCode>TooltipContent</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={tooltipSideSnippet}>
              <Tooltip>
                <TooltipTrigger
                  render={<Button variant="outline" size="sm">Bottom</Button>}
                />
                <TooltipContent side="bottom">Tooltip on bottom</TooltipContent>
              </Tooltip>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="provider"
            title="Provider"
            description={
              <>
                Use <DocsInlineCode>TooltipProvider</DocsInlineCode> to set
                global delay. AppProviders already mounts one at the root.
              </>
            }
          >
            <DocsPreview code={tooltipProviderSnippet}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="secondary" size="sm">
                      Tooltip trigger
                    </Button>
                  }
                />
                <TooltipContent>Provider sets global delay at the root.</TooltipContent>
              </Tooltip>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              TooltipContent
            </h3>
            <DocsApiTable rows={tooltipApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
