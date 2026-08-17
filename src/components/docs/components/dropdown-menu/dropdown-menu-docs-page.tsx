"use client";

import Link from "next/link";
import {
  ListFilterIcon,
  MousePointerClickIcon,
  SearchIcon,
  SquareMenuIcon,
} from "lucide-react";

import {
  dropdownMenuAccessibilitySnippet,
  dropdownMenuContentSnippet,
  dropdownMenuDangerSnippet,
  dropdownMenuDescriptionsSnippet,
  dropdownMenuHealthcareSnippet,
  dropdownMenuInstallationUiSnippet,
  dropdownMenuRealScreenSnippet,
  dropdownMenuStatesSnippet,
  dropdownMenuUsageSnippet,
  dropdownMenuVariantsSnippet,
} from "@/components/docs/components/dropdown-menu/dropdown-menu-code-snippets";
import {
  DropdownContentPatternsPreview,
  DropdownDangerActionsPreview,
  DropdownGuidelineCard,
  DropdownHealthcareExamplesPreview,
  DropdownStatesPreview,
  DropdownVariantsPreview,
} from "@/components/docs/components/dropdown-menu/dropdown-menu-preview-blocks";
import { DropdownMenuRealScreenPreview } from "@/components/docs/components/dropdown-menu/dropdown-menu-real-screen-preview";
import { dropdownMenuTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import {
  DropdownMenu,
  DropdownMenuButton,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
} from "@/components/dropdown-menu";

const triggerApiRows = [
  { prop: "variant", type: "Button variant", defaultValue: '"outline"' },
  { prop: "size", type: "Button size", defaultValue: '"md"' },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  {
    prop: "aria-label",
    type: "string",
    defaultValue: "Required for DropdownMenuIconButton",
  },
];

const contentApiRows = [
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    defaultValue: '"start"',
  },
  {
    prop: "side",
    type: '"top" | "right" | "bottom" | "left"',
    defaultValue: '"bottom"',
  },
  { prop: "sideOffset", type: "number", defaultValue: "4" },
];

const itemApiRows = [
  {
    prop: "variant",
    type: '"default" | "danger"',
    defaultValue: '"default"',
  },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "inset", type: "boolean", defaultValue: "false" },
];

export function DropdownMenuDocsPage() {
  return (
    <DocsComponentPage
      title="Dropdown Menu"
      description="A compact menu of contextual actions with a consistent Chevron Down indicator, token-based states, and keyboard-complete behavior."
      tocItems={dropdownMenuTocItems}
      realScreen={{
        preview: <DropdownMenuRealScreenPreview />,
        code: dropdownMenuRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dropdownMenuInstallationUiSnippet}>
              <DropdownMenu>
                <DropdownMenuButton size="sm">Patient actions</DropdownMenuButton>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>Patient</DropdownMenuLabel>
                    <DropdownMenuItem>View chart</DropdownMenuItem>
                  </DropdownMenuGroup>
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
                <DocsInlineCode>@/components/dropdown-menu</DocsInlineCode>. Use{" "}
                <DocsInlineCode>DropdownMenuButton</DocsInlineCode> for labeled
                triggers and <DocsInlineCode>DropdownMenuIconButton</DocsInlineCode>{" "}
                for compact triggers. Both use the same official Chevron Down
                indicator.
              </>
            }
          >
            <DocsPreview code={dropdownMenuUsageSnippet}>
              <DropdownMenu>
                <DropdownMenuButton size="sm">Actions</DropdownMenuButton>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuItem>View chart</DropdownMenuItem>
                    <DropdownMenuItem>Schedule follow-up</DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </DocsPreview>
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              The trigger uses <DocsInlineCode>--space-button-icon-gap</DocsInlineCode>{" "}
              for the official 6px label-to-chevron spacing. The chevron rotates
              when the menu opens and is never hidden by the trigger.
            </p>
          </DocsSection>

          <DocsSection
            id="variants"
            title="Dropdown Variants"
            description="Canonical patterns for default, disabled, leading-icon, sectioned, and descriptive menus."
          >
            <DocsPreview code={dropdownMenuVariantsSnippet}>
              <DropdownVariantsPreview />
            </DocsPreview>
            <div className="mt-[var(--space-stack-md)]">
              <DocsPreview code={dropdownMenuDescriptionsSnippet}>
                <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                  Descriptions should clarify the result of an action, not repeat
                  its label.
                </p>
              </DocsPreview>
            </div>
          </DocsSection>

          <DocsSection
            id="states"
            title="Menu States"
            description="Closed, hover, focus, open, and disabled states use the current Button, focus-ring, surface, and motion tokens."
          >
            <DocsPreview code={dropdownMenuStatesSnippet}>
              <DropdownStatesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="menu-content"
            title="Menu Content"
            description="Choose the smallest structure that makes the actions easy to scan. Group related actions and keep danger actions last."
          >
            <DocsPreview code={dropdownMenuContentSnippet}>
              <DropdownContentPatternsPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="dangerous-actions"
            title="Dangerous Actions"
            description="Delete, Archive, and Remove use the shared soft Danger treatment. Separate them from routine actions and place them at the end."
          >
            <DocsPreview code={dropdownMenuDangerSnippet}>
              <div className="flex min-h-64 items-start justify-center">
                <DropdownDangerActionsPreview />
              </div>
            </DocsPreview>
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              A danger item identifies risk; it is not confirmation. Open an{" "}
              <Link
                href="/docs/components/alert-dialog"
                className="font-medium text-[var(--color-text-link)] underline underline-offset-4"
              >
                Alert Dialog
              </Link>{" "}
              before completing irreversible or high-impact actions.
            </p>
          </DocsSection>

          <DocsSection
            id="healthcare-examples"
            title="Healthcare Examples"
            description="Patient, study, report, and user-management actions use the same compact disclosure indicator and menu hierarchy."
          >
            <DocsPreview code={dropdownMenuHealthcareSnippet}>
              <DropdownHealthcareExamplesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Base UI provides roving focus, keyboard navigation, typeahead, screen-reader semantics, and focus restoration."
          >
            <DocsPreview code={dropdownMenuAccessibilitySnippet}>
              <div className="grid w-full gap-[var(--space-stack-md)] md:grid-cols-2">
                {[
                  [
                    "Keyboard Navigation",
                    "Enter, Space, or Arrow Down opens the menu. Arrow keys move through items; Home and End jump to the first or last item.",
                  ],
                  [
                    "Focus Management",
                    "Focus moves into the open menu and returns to the trigger after dismissal. Disabled items are announced but cannot be activated.",
                  ],
                  [
                    "Screen Reader Support",
                    "The trigger exposes expanded state and the popup uses menu and menuitem semantics. Icon-only triggers require a specific aria-label.",
                  ],
                  [
                    "Escape Key Behavior",
                    "Escape closes the current menu without running an action and restores focus to its trigger.",
                  ],
                ].map(([title, description]) => (
                  <article
                    key={title}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
                  >
                    <h3 className="text-[length:var(--text-label-size)] font-semibold text-[var(--color-text-primary)]">
                      {title}
                    </h3>
                    <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="dropdown-guidelines"
            title="Dropdown Menu Guidelines"
            description="Match the component to the user’s intent: actions, field selection, global search, or pointer-context actions."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <DropdownGuidelineCard
                title="Dropdown Menu"
                icon={SquareMenuIcon}
                description="Use for a short set of contextual actions on an object or area."
                correct="Patient Actions with View chart, Edit, and Archive."
                incorrect="Choosing a required insurance plan value in a form."
              />
              <DropdownGuidelineCard
                title="Select"
                icon={ListFilterIcon}
                description="Use for choosing one value that becomes part of form or filter state."
                correct="Select a study status or assigned radiologist."
                incorrect="Mix Edit, Download, and Delete in a Select."
              />
              <DropdownGuidelineCard
                title="Command Palette"
                icon={SearchIcon}
                description="Use for searchable, cross-application navigation and actions at scale."
                correct="Search patients, studies, reports, and app commands."
                incorrect="Use a command palette for three actions on one patient."
              />
              <DropdownGuidelineCard
                title="Context Menu"
                icon={MousePointerClickIcon}
                description="Use for secondary pointer-context actions opened from right click or long press."
                correct="Right-click a study thumbnail for contextual tools."
                incorrect="Make essential or touch-critical actions available only by right click."
              />
            </div>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <div className="grid gap-[var(--space-stack-lg)]">
              <div>
                <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                  DropdownMenuButton / DropdownMenuIconButton
                </h3>
                <DocsApiTable rows={triggerApiRows} />
              </div>
              <div>
                <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                  DropdownMenuContent
                </h3>
                <DocsApiTable rows={contentApiRows} />
              </div>
              <div>
                <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                  DropdownMenuItem
                </h3>
                <DocsApiTable rows={itemApiRows} />
              </div>
            </div>
          </DocsSection>
        </>
      }
    />
  );
}
