"use client";

import Link from "next/link";
import { CheckIcon, XIcon } from "lucide-react";

import {
  alertDialogInstallationUiSnippet,
  alertDialogRealScreenSnippet,
  archiveRecordAlertDialogSnippet,
  deletePatientAlertDialogSnippet,
  deleteStudyAlertDialogSnippet,
  removeUserAccessAlertDialogSnippet,
} from "@/components/docs/components/alert-dialog/alert-dialog-code-snippets";
import { AlertDialogRealScreenPreview } from "@/components/docs/components/alert-dialog/alert-dialog-real-screen-preview";
import {
  ArchiveRecordAlertDialogPreview,
  DeletePatientAlertDialogPreview,
  DeleteStudyAlertDialogPreview,
  DialogComparisonTable,
  RemoveUserAccessAlertDialogPreview,
} from "@/components/docs/components/dialog/dialog-alert-preview-blocks";
import { alertDialogTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const alertDialogApiRows = [
  { prop: "open", type: "boolean", defaultValue: "—" },
  { prop: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
  { prop: "intent", type: '"default" | "danger"', defaultValue: '"default"' },
];

export function AlertDialogDocsPage() {
  return (
    <DocsComponentPage
      title="Alert Dialog"
      description="A blocking confirmation for destructive or consequential decisions."
      tocItems={alertDialogTocItems}
      realScreen={{ preview: <AlertDialogRealScreenPreview />, code: alertDialogRealScreenSnippet }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={alertDialogInstallationUiSnippet}>
              <DeletePatientAlertDialogPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="overview"
            title="Component Overview"
            description="Alert Dialog interrupts the workflow only when the user must explicitly confirm or cancel a consequential action."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <OverviewCard
                title="Alert Dialog"
                solves="Prevents accidental destructive or high-impact actions."
                use="Delete Patient, Delete Study, Remove User Access, Archive Record, or revoke access."
                avoid="Forms, uploads, editing, or content that needs more than confirm and cancel."
              />
              <OverviewCard
                title="Dialog"
                solves="Provides a temporary workspace for a focused task."
                use="Create, edit, upload, review, or complete multi-field work."
                avoid="Final destructive confirmation that requires explicit acknowledgment."
              />
            </div>
          </DocsSection>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/alert-dialog</DocsInlineCode>.
                Alert Dialog uses <DocsInlineCode>role=&quot;alertdialog&quot;</DocsInlineCode>,
                requires a response, and cannot be dismissed by clicking outside.
              </>
            }
          >
            <DocsPreview code={deletePatientAlertDialogSnippet}><DeletePatientAlertDialogPreview /></DocsPreview>
          </DocsSection>

          <DocsSection
            id="alert-dialog-examples"
            title="Alert Dialog Examples"
            description="Complete Medmo confirmation examples with specific consequences and explicit actions."
          >
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={deletePatientAlertDialogSnippet}><DeletePatientAlertDialogPreview /></DocsPreview>
              <DocsPreview code={deleteStudyAlertDialogSnippet}><DeleteStudyAlertDialogPreview /></DocsPreview>
              <DocsPreview code={removeUserAccessAlertDialogSnippet}><RemoveUserAccessAlertDialogPreview /></DocsPreview>
              <DocsPreview code={archiveRecordAlertDialogSnippet}><ArchiveRecordAlertDialogPreview /></DocsPreview>
            </div>
          </DocsSection>

          <DocsSection
            id="dialog-vs-alert-dialog"
            title="Dialog vs Alert Dialog"
            description="The distinction is behavioral: task completion versus explicit confirmation."
          >
            <DialogComparisonTable />
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              For complex forms and editable tasks, use{" "}
              <Link className="font-medium text-[var(--color-link)] underline underline-offset-3" href="/docs/components/dialog">
                Dialog
              </Link>.
            </p>
          </DocsSection>

          <DocsSection id="accessibility" title="Accessibility" description="Alert Dialog uses the stricter modal confirmation contract.">
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li><strong className="font-medium text-[var(--color-text-primary)]">Focus Trap:</strong> focus remains inside and returns to the trigger after close.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Keyboard:</strong> Tab and Shift+Tab move between Cancel and the confirmation action.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Escape:</strong> cancels and closes the dialog; clicking outside does not dismiss it.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Screen readers:</strong> <DocsInlineCode>role=&quot;alertdialog&quot;</DocsInlineCode>, title, and description announce the decision and consequences.</li>
            </ul>
          </DocsSection>

          <DocsSection id="best-practices" title="Best Practices">
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <PracticeCard correct title="Correct Usage">
                Use Alert Dialog immediately before deleting a patient, deleting a study, removing access, or archiving a record.
              </PracticeCard>
              <PracticeCard title="Incorrect Usage">
                Do not put Edit Patient, Create Patient, profile, or upload forms inside Alert Dialog.
              </PracticeCard>
            </div>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">AlertDialogAction</h3>
            <DocsApiTable rows={alertDialogApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function OverviewCard({ title, solves, use, avoid }: { title: string; solves: string; use: string; avoid: string }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-[var(--space-inline-md)]">
      <h4 className="font-semibold text-[var(--color-text-primary)]">{title}</h4>
      <dl className="mt-[var(--space-stack-sm)] space-y-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)]">
        <div><dt className="font-medium text-[var(--color-text-primary)]">Problem solved</dt><dd className="text-[var(--color-text-secondary)]">{solves}</dd></div>
        <div><dt className="font-medium text-[var(--color-text-primary)]">Use when</dt><dd className="text-[var(--color-text-secondary)]">{use}</dd></div>
        <div><dt className="font-medium text-[var(--color-text-primary)]">Do not use when</dt><dd className="text-[var(--color-text-secondary)]">{avoid}</dd></div>
      </dl>
    </div>
  );
}

function PracticeCard({ correct = false, title, children }: { correct?: boolean; title: string; children: React.ReactNode }) {
  const Icon = correct ? CheckIcon : XIcon;
  return (
    <div className={`rounded-[var(--radius-lg)] border p-[var(--space-inline-md)] ${correct ? "border-[var(--color-success-border)] bg-[var(--color-success-background)]" : "border-[var(--color-error-border)] bg-[var(--color-error-background)]"}`}>
      <div className="flex items-center gap-[var(--space-inline-sm)]">
        <Icon className="size-[var(--icon-sm)]" aria-hidden />
        <h4 className="font-medium text-[var(--color-text-primary)]">{title}</h4>
      </div>
      <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">{children}</p>
    </div>
  );
}
