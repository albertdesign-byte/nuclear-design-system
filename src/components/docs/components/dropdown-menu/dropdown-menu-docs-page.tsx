"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, MoreHorizontalIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import {
  dropdownMenuDestructiveSnippet,
  dropdownMenuInstallationUiSnippet,
  dropdownMenuRealScreenSnippet,
  dropdownMenuUsageSnippet,
} from "@/components/docs/components/dropdown-menu/dropdown-menu-code-snippets";
import { DropdownMenuRealScreenPreview } from "@/components/docs/components/dropdown-menu/dropdown-menu-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const dropdownMenuTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "destructive", label: "Destructive" },
  { id: "api-reference", label: "API Reference" },
];

const dropdownMenuApiRows = [
  { prop: "variant", type: '"default" | "destructive"', defaultValue: '"default"' },
  { prop: "inset", type: "boolean", defaultValue: "false" },
  { prop: "align", type: '"start" | "center" | "end"', defaultValue: '"start"' },
];

export function DropdownMenuDocsPage() {
  return (
    <DocsComponentPage
      title="Dropdown Menu"
      description="Displays a menu of actions triggered by a button."
      tocItems={dropdownMenuTocItems}
      realScreen={{
        preview: <DropdownMenuRealScreenPreview />,
        code: dropdownMenuRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/popover" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Popover
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/alert" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Alert
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dropdownMenuInstallationUiSnippet}>
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
                  Actions
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Patient</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>View chart</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/dropdown-menu</DocsInlineCode>.
                Menus render at <DocsInlineCode>--z-dropdown</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={dropdownMenuUsageSnippet}>
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
                  <MoreHorizontalIcon />
                  Actions
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem>View chart</DropdownMenuItem>
                  <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="destructive"
            title="Destructive"
            description={
              <>
                Use <DocsInlineCode>variant="destructive"</DocsInlineCode> for
                irreversible patient actions.
              </>
            }
          >
            <DocsPreview code={dropdownMenuDestructiveSnippet}>
              <DropdownMenu>
                <DropdownMenuTrigger render={<Button variant="outline" size="sm" />}>
                  Actions
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem variant="destructive">
                    Archive patient
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              DropdownMenuItem
            </h3>
            <DocsApiTable rows={dropdownMenuApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
