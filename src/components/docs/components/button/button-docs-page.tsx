"use client";

import { ArrowUpIcon } from "lucide-react";

import { Button } from "@/components/button";

import {
  buttonDangerSnippet,
  buttonDangerStatesSnippet,
  buttonFullWidthSnippet,
  buttonGroupSnippet,
  buttonHealthcareSnippet,
  buttonIconPatternsSnippet,
  buttonInstallationUiSnippet,
  buttonPaddingReviewSnippet,
  buttonRealScreenSnippet,
  buttonStatesSnippet,
  buttonUsageSnippet,
} from "@/components/docs/components/button/button-code-snippets";
import {
  ButtonGroupsPreview,
  ButtonGuidelineCard,
  ButtonIconPatternsPreview,
  ButtonPaddingComparisonPreview,
  ButtonStatesPreview,
  DangerButtonStatesPreview,
  HealthcareButtonExamplesPreview,
} from "@/components/docs/components/button/button-preview-blocks";
import { ButtonRealScreenPreview } from "@/components/docs/components/button/button-real-screen-preview";
import { buttonTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const buttonApiRows = [
  {
    prop: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost"',
    defaultValue: '"primary"',
  },
  {
    prop: "intent",
    type: '"default" | "danger"',
    defaultValue: '"default"',
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg" | "xl" | "xxl" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl" | "icon-xxl"',
    defaultValue: '"md"',
  },
  { prop: "loading", type: "boolean", defaultValue: "false" },
  { prop: "loadingLabel", type: "string", defaultValue: '"Loading"' },
  { prop: "fullWidth", type: "boolean", defaultValue: "false" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  {
    prop: "type",
    type: '"button" | "submit" | "reset"',
    defaultValue: '"button"',
  },
];

export function ButtonDocsPage() {
  return (
    <DocsComponentPage
      title="Button"
      description="The single Nuclear DS action standard for healthcare and enterprise workflows, including semantic danger actions, icons, groups, and async states."
      tocItems={buttonTocItems}
      realScreen={{
        preview: <ButtonRealScreenPreview />,
        code: buttonRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={buttonInstallationUiSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
                <Button variant="outline">Button</Button>
                <Button variant="outline" size="icon-xl" aria-label="Upload study">
                  <ArrowUpIcon />
                </Button>
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import Button from{" "}
                <DocsInlineCode>@/components/button</DocsInlineCode>. Se
                utiliza para acciones y renderiza un{" "}
                <DocsInlineCode>{"<button>"}</DocsInlineCode>. No se utiliza
                como Link ni para navegación. Para selección persistente, usa un
                control de toggle.
              </>
            }
          >
            <DocsPreview code={buttonUsageSnippet}>
              <Button>Save patient</Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="padding-review"
            title="Horizontal Padding Review"
            description="The former padding felt compressed after adopting the fully rounded silhouette. The proposed values are now the official scale: they preserve compact heights while restoring readable optical balance."
          >
            <DocsPreview code={buttonPaddingReviewSnippet}>
              <ButtonPaddingComparisonPreview />
            </DocsPreview>
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              Icon-only sizes remain square and use no horizontal padding. The
              text-button scale now uses 12, 12, 16, 20, and 24px from{" "}
              <DocsInlineCode>--space-button-padding-*</DocsInlineCode>.
            </p>
          </DocsSection>

          <DocsSection
            id="variants"
            title="Button Variants"
            description="Variant controls visual emphasis. Intent communicates whether the action is destructive."
          >
            <div className="flex flex-col items-start gap-[var(--space-stack-md)]">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button intent="danger">Danger</Button>
            </div>
          </DocsSection>

          <DocsSection
            id="danger"
            title="Danger Button"
            description="Danger uses a soft red background, red border, and red text. It communicates consequence without the alarm fatigue of a solid-red default."
          >
            <DocsPreview code={buttonDangerSnippet}>
              <div className="flex flex-col items-start gap-[var(--space-stack-sm)]">
                <Button intent="danger">Delete patient</Button>
                <Button intent="danger">Delete study</Button>
                <Button intent="danger">Remove user</Button>
                <Button intent="danger">Archive record</Button>
              </div>
            </DocsPreview>
            <div className="mt-[var(--space-stack-lg)]">
              <h4 className="mb-[var(--space-stack-sm)] font-medium text-[var(--color-text-primary)]">
                Danger states
              </h4>
              <DocsPreview code={buttonDangerStatesSnippet}>
                <DangerButtonStatesPreview />
              </DocsPreview>
            </div>
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <ButtonGuidelineCard title="Use Danger">
                <li>For deletion, access removal, and consequential archival.</li>
                <li>After the consequence is named clearly, normally in Alert Dialog.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Do not use Danger">
                <li>For cancel, back, close, or ordinary form validation.</li>
                <li>To make a non-destructive action look more important.</li>
              </ButtonGuidelineCard>
            </div>
          </DocsSection>

          <DocsSection
            id="icons"
            title="Button with Icon"
            description="The official icon-to-label gap is 6px for every text-button size. Use one leading or trailing icon; icon-only controls require an accessible name."
          >
            <DocsPreview code={buttonIconPatternsSnippet}>
              <ButtonIconPatternsPreview />
            </DocsPreview>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-lg)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              <li>Leading icon: action or object before the label.</li>
              <li>Trailing icon: direction, disclosure, or continuation after the label.</li>
              <li>Icon only: reserve for familiar actions and always provide <DocsInlineCode>aria-label</DocsInlineCode>.</li>
            </ul>
          </DocsSection>

          <DocsSection
            id="button-groups"
            title="Button Groups"
            description="Button Group is an official Button pattern, not a separate component. Keep related actions together and preserve hierarchy through order and emphasis."
          >
            <DocsPreview code={buttonGroupSnippet}>
              <ButtonGroupsPreview />
            </DocsPreview>
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <ButtonGuidelineCard title="Standard actions">
                <li>Order: Secondary first, Primary last.</li>
                <li>Example: Cancel, then Save.</li>
                <li>Use one primary action per group.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Destructive actions">
                <li>Order: Cancel first, Danger last.</li>
                <li>Example: Cancel, then Delete study.</li>
                <li>Do not pair a destructive action with another primary action.</li>
              </ButtonGuidelineCard>
            </div>
          </DocsSection>

          <DocsSection
            id="states"
            title="States"
            description="Every variant supports default, hover, focus, active, disabled, and loading. Focus is visible only for keyboard-style focus; loading disables repeat submission and announces progress."
          >
            <DocsPreview code={buttonStatesSnippet}>
              <ButtonStatesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="healthcare-examples"
            title="Healthcare Examples"
            description="Use explicit verb–object labels so clinical and administrative actions remain easy to scan."
          >
            <DocsPreview code={buttonHealthcareSnippet}>
              <HealthcareButtonExamplesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Button Guidelines"
            description="Choose the lowest emphasis that still communicates hierarchy and consequence."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <ButtonGuidelineCard title="Primary">
                <li>Use for the one main commit action: Save patient or Upload study.</li>
                <li>Correct: one Primary at the end of an action group.</li>
                <li>Incorrect: multiple filled Primary buttons competing in one region.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Secondary">
                <li>Use for a meaningful alternative that should remain visible.</li>
                <li>Correct: Back beside Continue.</li>
                <li>Incorrect: using Secondary for the only action on a page.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Ghost">
                <li>Use in toolbars, compact rows, and low-emphasis utility actions.</li>
                <li>Correct: View report in an action-rich header.</li>
                <li>Incorrect: Ghost for the primary submit action in a form.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Danger">
                <li>Use only for destructive or consequential actions.</li>
                <li>Correct: Delete study after explicit confirmation.</li>
                <li>Incorrect: red styling for Cancel or validation errors.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Acción, no navegación">
                <li>Button se utiliza para acciones y renderiza un <DocsInlineCode>{"<button>"}</DocsInlineCode>.</li>
                <li>No se utiliza como Link y no debe utilizarse para navegación.</li>
                <li>No existe un patrón “Button as Link” en este Design System.</li>
              </ButtonGuidelineCard>
            </div>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Button uses native button behavior by default and keeps state, focus, and naming available to assistive technology."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <ButtonGuidelineCard title="Keyboard Navigation">
                <li>Tab moves focus to the button; Enter or Space activates it.</li>
                <li>Disabled and loading buttons cannot be activated.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Focus Visible">
                <li>A tokenized focus ring appears for keyboard-style focus.</li>
                <li>Never remove the focus ring without an equivalent replacement.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Touch Targets">
                <li>Use xl (48px) or xxl (56px) for direct mobile touch actions.</li>
                <li>Compact sizes below 44px belong in dense desktop contexts or require a larger interactive container.</li>
              </ButtonGuidelineCard>
              <ButtonGuidelineCard title="Icon-only Buttons">
                <li>Provide a specific <DocsInlineCode>aria-label</DocsInlineCode>, such as “Upload study”.</li>
                <li>Do not rely on the icon shape, color, or tooltip as the accessible name.</li>
              </ButtonGuidelineCard>
            </div>
          </DocsSection>

          <DocsSection
            id="full-width"
            title="Full Width"
            description="Use fullWidth for stacked actions in narrow layouts and mobile panels."
          >
            <DocsPreview code={buttonFullWidthSnippet}>
              <div className="w-full max-w-xs">
                <Button fullWidth>Save patient</Button>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={buttonApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
