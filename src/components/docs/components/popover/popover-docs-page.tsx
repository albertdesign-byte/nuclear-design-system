"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, InfoIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Popover,
  PopoverContent,
  PopoverDescription,
  PopoverHeader,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/popover";
import {
  popoverInstallationUiSnippet,
  popoverRealScreenSnippet,
  popoverSideSnippet,
  popoverUsageSnippet,
} from "@/components/docs/components/popover/popover-code-snippets";
import { PopoverRealScreenPreview } from "@/components/docs/components/popover/popover-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const popoverTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "side", label: "Side" },
  { id: "api-reference", label: "API Reference" },
];

const popoverApiRows = [
  { prop: "side", type: '"top" | "right" | "bottom" | "left"', defaultValue: '"bottom"' },
  { prop: "align", type: '"start" | "center" | "end"', defaultValue: '"center"' },
  { prop: "sideOffset", type: "number", defaultValue: "4" },
  { prop: "open", type: "boolean", defaultValue: "—" },
];

export function PopoverDocsPage() {
  return (
    <DocsComponentPage
      title="Popover"
      description="Displays rich content in a portal, triggered by a button."
      tocItems={popoverTocItems}
      realScreen={{
        preview: <PopoverRealScreenPreview />,
        code: popoverRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/label" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Label
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/dropdown-menu" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Dropdown Menu
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={popoverInstallationUiSnippet}>
              <Popover>
                <PopoverTrigger render={<Button variant="outline" size="sm" />}>
                  Open popover
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverHeader>
                    <PopoverTitle>Title</PopoverTitle>
                    <PopoverDescription>
                      Supporting details appear here.
                    </PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/popover</DocsInlineCode>.
                Floating surfaces use <DocsInlineCode>--z-popover</DocsInlineCode>{" "}
                and <DocsInlineCode>--color-surface-floating</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={popoverUsageSnippet}>
              <Popover>
                <PopoverTrigger render={<Button variant="outline" size="sm" />}>
                  <InfoIcon />
                  Medication info
                </PopoverTrigger>
                <PopoverContent className="w-72">
                  <PopoverHeader>
                    <PopoverTitle>Lisinopril 10 mg</PopoverTitle>
                    <PopoverDescription>
                      Take once daily in the morning.
                    </PopoverDescription>
                  </PopoverHeader>
                </PopoverContent>
              </Popover>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="side"
            title="Side"
            description={
              <>
                Control placement with the <DocsInlineCode>side</DocsInlineCode>{" "}
                prop on <DocsInlineCode>PopoverContent</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={popoverSideSnippet}>
              <Popover>
                <PopoverTrigger render={<Button variant="outline" size="sm" />}>
                  Top
                </PopoverTrigger>
                <PopoverContent side="top">Content above trigger</PopoverContent>
              </Popover>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              PopoverContent
            </h3>
            <DocsApiTable rows={popoverApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
