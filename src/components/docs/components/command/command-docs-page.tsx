"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon, UserIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/command";
import {
  commandDialogSnippet,
  commandInstallationUiSnippet,
  commandRealScreenSnippet,
  commandUsageSnippet,
} from "@/components/docs/components/command/command-code-snippets";
import { CommandRealScreenPreview } from "@/components/docs/components/command/command-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const commandTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "dialog", label: "Dialog" },
  { id: "api-reference", label: "API Reference" },
];

const commandApiRows = [
  { prop: "title", type: "string", defaultValue: '"Command Palette"' },
  { prop: "showCloseButton", type: "boolean", defaultValue: "false" },
  { prop: "open", type: "boolean", defaultValue: "—" },
];

export function CommandDocsPage() {
  return (
    <DocsComponentPage
      title="Command"
      description="Fast, composable command menu for search and actions."
      tocItems={commandTocItems}
      realScreen={{
        preview: <CommandRealScreenPreview />,
        code: commandRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/alert" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Alert
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/alert-dialog" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Alert Dialog
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={commandInstallationUiSnippet}>
              <Command className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-border)]">
                <CommandInput placeholder="Search…" />
                <CommandList>
                  <CommandEmpty>No results.</CommandEmpty>
                  <CommandGroup heading="Patients">
                    <CommandItem>
                      <UserIcon />
                      María González
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Built on <DocsInlineCode>cmdk</DocsInlineCode>. Import from{" "}
                <DocsInlineCode>@/components/command</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={commandUsageSnippet}>
              <Command className="max-w-md rounded-[var(--radius-lg)] border border-[var(--color-border)]">
                <CommandInput placeholder="Search patients…" />
                <CommandList>
                  <CommandEmpty>No results.</CommandEmpty>
                  <CommandGroup heading="Patients">
                    <CommandItem>María González</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="dialog"
            title="Dialog"
            description={
              <>
                Wrap in <DocsInlineCode>CommandDialog</DocsInlineCode> for a
                modal command palette using Medmo Dialog tokens.
              </>
            }
          >
            <DocsPreview code={commandDialogSnippet}>
              <CommandRealScreenPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              CommandDialog
            </h3>
            <DocsApiTable rows={commandApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
