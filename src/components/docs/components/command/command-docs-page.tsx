"use client";

import Link from "next/link";

import {
  commandDialogSnippet,
  commandInstallationUiSnippet,
  commandRealScreenSnippet,
  commandUsageSnippet,
} from "@/components/docs/components/command/command-code-snippets";
import { CommandRealScreenPreview } from "@/components/docs/components/command/command-real-screen-preview";
import {
  CommandActionsPreview,
  SearchCommandAuditPreview,
} from "@/components/docs/components/global-search-bar/search-command-preview-blocks";
import { commandTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const commandApiRows = [
  { prop: "title", type: "string", defaultValue: '"Command Palette"' },
  { prop: "description", type: "string", defaultValue: '"Search for a command to run…"' },
  { prop: "showCloseButton", type: "boolean", defaultValue: "false" },
  { prop: "open", type: "boolean", defaultValue: "—" },
  { prop: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
];

export function CommandDocsPage() {
  return (
    <DocsComponentPage
      title="Command"
      description="Composable action and navigation palette for quick actions, shortcuts, and global navigation."
      tocItems={commandTocItems}
      realScreen={{
        preview: <CommandRealScreenPreview />,
        code: commandRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={commandInstallationUiSnippet}>
              <CommandActionsPreview />
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
              <CommandActionsPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="component-audit"
            title="Component Audit"
            description="Command shares searchable-list mechanics with Search, but executes a different user intent."
          >
            <SearchCommandAuditPreview />
          </DocsSection>

          <DocsSection
            id="decision"
            title="Decision"
            description="Scenario B applies: Search and Command remain separate."
          >
            <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              Command is the reusable primitive for actions and navigation. The
              official application Search component,{" "}
              <Link
                className="font-medium text-[var(--color-link)] underline underline-offset-3"
                href="/docs/components/global-search-bar"
              >
                Global Search Bar
              </Link>
              , composes these primitives for entity discovery. This shares behavior
              without making Search and Command interchangeable.
            </p>
          </DocsSection>

          <DocsSection
            id="command-use-cases"
            title="Command Use Cases"
            description="Commands should be verbs, destinations, or shortcut-enabled operations."
          >
            <DocsPreview code={commandUsageSnippet}>
              <CommandActionsPreview />
            </DocsPreview>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              <li><strong className="font-medium text-[var(--color-text-primary)]">Quick Actions:</strong> Create Patient and Upload Study.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Global Navigation:</strong> Open Settings and Navigate to Reports.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Keyboard Shortcuts:</strong> display shortcuts only when they are active and stable.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Command Palette:</strong> group actions by purpose and keep labels verb-led.</li>
            </ul>
          </DocsSection>

          <DocsSection
            id="search-vs-command"
            title="Search vs Command"
            description="Use Search to find a thing; use Command to do a thing."
          >
            <div className="space-y-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <p><strong className="font-medium text-[var(--color-text-primary)]">Search:</strong> patients, studies, users, facilities, and records whose result will be opened or selected.</p>
              <p><strong className="font-medium text-[var(--color-text-primary)]">Command:</strong> quick actions, global navigation, shortcuts, and expert workflows.</p>
              <p><strong className="font-medium text-[var(--color-text-primary)]">Neither:</strong> use a visible Button for one primary action, a Link for one destination, or Searchable Select for a form value.</p>
            </div>
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

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Command palettes must be fully operable without a pointer."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li><strong className="font-medium text-[var(--color-text-primary)]">Keyboard:</strong> Arrow keys move between commands, Enter runs the active command, and Escape closes a dialog palette.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Focus:</strong> CommandDialog focuses the input, traps focus while open, and restores it to the trigger.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Screen readers:</strong> provide a descriptive dialog title, grouped command labels, meaningful empty states, and text labels in addition to icons.</li>
            </ul>
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
