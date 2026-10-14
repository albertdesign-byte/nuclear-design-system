"use client";

import type { ReactNode } from "react";
import Link from "next/link";

import {
  sideModalControlledSnippet,
  sideModalCreateUserSnippet,
  sideModalInstallationUiSnippet,
  sideModalRealScreenSnippet,
  sideModalUsageSnippet,
} from "@/components/docs/components/side-modal/side-modal-code-snippets";
import {
  CreateNewUserSideModalPreview,
  SideModalBasicPreview,
  SideModalControlledPreview,
  SideModalLongContentPreview,
} from "@/components/docs/components/side-modal/side-modal-preview-blocks";
import { SideModalRealScreenPreview } from "@/components/docs/components/side-modal/side-modal-real-screen-preview";
import { sideModalTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const sideModalApiRows = [
  {
    prop: "open",
    type: "boolean",
    defaultValue: "—",
  },
  {
    prop: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "—",
  },
  {
    prop: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
  },
];

const sideModalContentApiRows = [
  {
    prop: "showCloseButton",
    type: "boolean",
    defaultValue: "true",
  },
  {
    prop: "className",
    type: "string",
    defaultValue: "undefined",
  },
];

const sideModalHeaderApiRows = [
  {
    prop: "end",
    type: "ReactNode",
    defaultValue: "undefined",
  },
];

export function SideModalDocsPage() {
  return (
    <DocsComponentPage
      title="Side Modal"
      description="Right-aligned modal panel for create and edit tasks. Header and footer stay in view while the body scrolls."
      tocItems={sideModalTocItems}
      realScreen={{
        preview: <SideModalRealScreenPreview />,
        code: sideModalRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={sideModalInstallationUiSnippet}>
              <SideModalBasicPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/side-modal</DocsInlineCode>. Use
                slots for header, scrollable body, and footer. Trigger is
                optional — control <DocsInlineCode>open</DocsInlineCode> from
                the page when needed.
              </>
            }
          >
            <DocsPreview code={sideModalUsageSnippet}>
              <SideModalBasicPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="when-to-use"
            title="When to use"
            description="Choose by workflow, not by visual similarity."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-3">
              <OverviewCard
                title="Side Modal"
                solves="Create or edit a record in a persistent page context."
                use="Long forms, user management, settings that need a 520px right panel."
                avoid="Short centered tasks, or a blocking yes/no confirmation."
              />
              <OverviewCard
                title="Dialog"
                solves="A focused task in a centered overlay."
                use="Short forms and edits that match the existing Dialog pattern."
                avoid="Tall scrolling forms that need a docked panel, or destructive confirm."
              />
              <OverviewCard
                title="Alert Dialog"
                solves="Pauses the workflow for a consequential decision."
                use="Delete, revoke, archive, or other irreversible confirmations."
                avoid="Forms, exploratory content, or multi-field editing."
              />
            </div>
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              Side Modal does not replace{" "}
              <Link
                className="font-medium text-[var(--color-text-link)] underline underline-offset-3"
                href="/docs/components/dialog"
              >
                Dialog
              </Link>{" "}
              or{" "}
              <Link
                className="font-medium text-[var(--color-text-link)] underline underline-offset-3"
                href="/docs/components/alert-dialog"
              >
                Alert Dialog
              </Link>
              .
            </p>
          </DocsSection>

          <DocsSection
            id="controlled"
            title="Controlled"
            description="Open and close from page state without a Trigger."
          >
            <DocsPreview code={sideModalControlledSnippet}>
              <SideModalControlledPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="scrolling"
            title="Scrolling body"
            description="Only SideModalBody scrolls. Header and footer stay pinned."
          >
            <DocsPreview code={sideModalUsageSnippet}>
              <SideModalLongContentPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="create-new-user"
            title="Create new user"
            description="Composition example from Figma. The form is not part of the Side Modal API — it reuses Card, InputField, SelectField, Switch, CheckboxField, and Button."
          >
            <DocsPreview code={sideModalCreateUserSnippet}>
              <CreateNewUserSideModalPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Guidelines"
            description="Width, overlay, and known limits."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Panel width is <DocsInlineCode>520px</DocsInlineCode> from Figma
                node <DocsInlineCode>1:2133</DocsInlineCode>, encapsulated as{" "}
                <DocsInlineCode>sideModalPanelWidth</DocsInlineCode>. There is
                no foundation width token. On small viewports the panel uses{" "}
                <DocsInlineCode>min(100%, 520px)</DocsInlineCode>.
              </li>
              <li>
                Overlay, focus trap, Escape, and scroll lock come from{" "}
                <DocsInlineCode>@base-ui/react/dialog</DocsInlineCode>. This is
                a separate compound from Dialog — Dialog stays centered.
              </li>
              <li>
                Select and Popover portal to the document so they are not
                clipped by the scrolling body. While the overlay is open they
                use <DocsInlineCode>--z-modal</DocsInlineCode> (nested floating
                UI rule) so they stack above the overlay. No new z-index token.
              </li>
              <li>
                <strong className="font-medium text-[var(--color-text-primary)]">
                  Expand is not implemented.
                </strong>{" "}
                Figma shows a control but no expanded state.{" "}
                <DocsInlineCode>SideModalHeader</DocsInlineCode> accepts an{" "}
                <DocsInlineCode>end</DocsInlineCode> slot for a future action
                without changing the rest of the API.
              </li>
              <li>
                Figma:{" "}
                <Link
                  className="font-medium text-[var(--color-text-link)] underline underline-offset-3"
                  href="https://www.figma.com/design/0mdT8ZGcIWs03rXrGDRoU4/modales?node-id=1-2133&t=vZj6GPYKsQ95Oys5-4"
                >
                  modales · node 1:2133
                </Link>
                .
              </li>
            </ul>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Side Modal follows the same modal contract as Dialog, with a right-docked popup."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                <strong className="font-medium text-[var(--color-text-primary)]">
                  Title and description:
                </strong>{" "}
                <DocsInlineCode>SideModalTitle</DocsInlineCode> and{" "}
                <DocsInlineCode>SideModalDescription</DocsInlineCode> wire{" "}
                <DocsInlineCode>aria-labelledby</DocsInlineCode> and{" "}
                <DocsInlineCode>aria-describedby</DocsInlineCode> on the popup.
              </li>
              <li>
                <strong className="font-medium text-[var(--color-text-primary)]">
                  Focus:
                </strong>{" "}
                trap while open; restore to the trigger or last focused control
                on close.
              </li>
              <li>
                <strong className="font-medium text-[var(--color-text-primary)]">
                  Keyboard:
                </strong>{" "}
                Tab cycles controls; Escape closes; overlay click dismisses.
              </li>
              <li>
                <strong className="font-medium text-[var(--color-text-primary)]">
                  Close:
                </strong>{" "}
                header button is named “Close” for assistive tech.
              </li>
            </ul>
          </DocsSection>

          <DocsSection id="best-practices" title="Best Practices">
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <PracticeCard correct title="Correct">
                Put long create/edit forms in Side Modal. Keep page chrome
                visible. Use Dialog for short centered tasks and Alert Dialog
                for irreversible confirmations.
              </PracticeCard>
              <PracticeCard title="Incorrect">
                Do not put Side Modal content into Dialog, bake product forms
                into the primitive API, or add an Expand control until the
                expanded state is specified.
              </PracticeCard>
            </div>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">
              SideModal
            </h3>
            <DocsApiTable rows={sideModalApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-md)] text-[length:var(--text-title-size)] font-medium">
              SideModalContent
            </h3>
            <DocsApiTable rows={sideModalContentApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-md)] text-[length:var(--text-title-size)] font-medium">
              SideModalHeader
            </h3>
            <DocsApiTable rows={sideModalHeaderApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function OverviewCard({
  title,
  solves,
  use,
  avoid,
}: {
  title: string;
  solves: string;
  use: string;
  avoid: string;
}) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-inline-md)]">
      <h4 className="font-semibold text-[var(--color-text-primary)]">{title}</h4>
      <dl className="mt-[var(--space-stack-sm)] space-y-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)]">
        <div>
          <dt className="font-medium text-[var(--color-text-primary)]">
            Problem solved
          </dt>
          <dd className="text-[var(--color-text-secondary)]">{solves}</dd>
        </div>
        <div>
          <dt className="font-medium text-[var(--color-text-primary)]">
            Use when
          </dt>
          <dd className="text-[var(--color-text-secondary)]">{use}</dd>
        </div>
        <div>
          <dt className="font-medium text-[var(--color-text-primary)]">
            Do not use when
          </dt>
          <dd className="text-[var(--color-text-secondary)]">{avoid}</dd>
        </div>
      </dl>
    </div>
  );
}

function PracticeCard({
  correct = false,
  title,
  children,
}: {
  correct?: boolean;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-[var(--radius-lg)] border p-[var(--space-inline-md)] ${
        correct
          ? "border-[var(--color-success-border)] bg-[var(--color-success-background)]"
          : "border-[var(--color-error-border)] bg-[var(--color-error-background)]"
      }`}
    >
      <h4 className="font-medium text-[var(--color-text-primary)]">{title}</h4>
      <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
        {children}
      </p>
    </div>
  );
}
