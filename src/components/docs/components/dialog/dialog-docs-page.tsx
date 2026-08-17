"use client";

import Link from "next/link";
import { CheckIcon, XIcon } from "lucide-react";

import {
  createPatientDialogSnippet,
  dialogInstallationUiSnippet,
  dialogRealScreenSnippet,
  editPatientDialogSnippet,
  editProfileDialogSnippet,
  uploadStudyDialogSnippet,
} from "@/components/docs/components/dialog/dialog-code-snippets";
import {
  CreatePatientDialogPreview,
  DialogComparisonTable,
  EditPatientDialogPreview,
  EditProfileDialogPreview,
  UploadStudyDialogPreview,
} from "@/components/docs/components/dialog/dialog-alert-preview-blocks";
import { DialogRealScreenPreview } from "@/components/docs/components/dialog/dialog-real-screen-preview";
import { dialogTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const dialogApiRows = [
  { prop: "showCloseButton", type: "boolean", defaultValue: "true" },
  { prop: "open", type: "boolean", defaultValue: "—" },
  { prop: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
];

export function DialogDocsPage() {
  return (
    <DocsComponentPage
      title="Dialog"
      description="A modal workspace for focused tasks, forms, and editable content."
      tocItems={dialogTocItems}
      realScreen={{ preview: <DialogRealScreenPreview />, code: dialogRealScreenSnippet }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={dialogInstallationUiSnippet}>
              <CreatePatientDialogPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="overview"
            title="Component Overview"
            description="Dialog gives users a temporary workspace. Alert Dialog pauses the workflow for an explicit, consequential decision."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <OverviewCard
                title="Dialog"
                solves="Completes a focused task without leaving the current page."
                use="Editing or creating records, profile changes, uploads, and multi-field forms."
                avoid="Final destructive confirmation or a simple informational message."
              />
              <OverviewCard
                title="Alert Dialog"
                solves="Confirms a high-impact action before it occurs."
                use="Delete, remove access, archive, revoke, or other consequential choices."
                avoid="Complex forms, exploratory tasks, or multi-step content."
              />
            </div>
          </DocsSection>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/dialog</DocsInlineCode>.
                Dialog supports form controls and multiple inputs. It may close with
                Escape or an explicit close action.
              </>
            }
          >
            <DocsPreview code={editPatientDialogSnippet}><EditPatientDialogPreview /></DocsPreview>
          </DocsSection>

          <DocsSection
            id="dialog-examples"
            title="Dialog Examples"
            description="Complete Medmo task examples with editable content and clear save/cancel actions."
          >
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={editPatientDialogSnippet}><EditPatientDialogPreview /></DocsPreview>
              <DocsPreview code={createPatientDialogSnippet}><CreatePatientDialogPreview /></DocsPreview>
              <DocsPreview code={editProfileDialogSnippet}><EditProfileDialogPreview /></DocsPreview>
              <DocsPreview code={uploadStudyDialogSnippet}><UploadStudyDialogPreview /></DocsPreview>
            </div>
          </DocsSection>

          <DocsSection
            id="dialog-vs-alert-dialog"
            title="Dialog vs Alert Dialog"
            description="Choose by workflow responsibility, not by visual appearance."
          >
            <DialogComparisonTable />
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              For destructive confirmation, use{" "}
              <Link className="font-medium text-[var(--color-link)] underline underline-offset-3" href="/docs/components/alert-dialog">
                Alert Dialog
              </Link>.
            </p>
          </DocsSection>

          <DocsSection id="accessibility" title="Accessibility" description="Dialog follows the modal interaction contract for focused tasks.">
            <AccessibilityList alertDialog={false} />
          </DocsSection>

          <DocsSection id="best-practices" title="Best Practices">
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <PracticeCard correct title="Correct Usage">
                Use Dialog for Edit Patient, Create Patient, Edit Profile, or Upload Study forms.
              </PracticeCard>
              <PracticeCard title="Incorrect Usage">
                Do not use Dialog for deleting a patient or confirming another irreversible action.
              </PracticeCard>
            </div>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">DialogContent</h3>
            <DocsApiTable rows={dialogApiRows} />
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

export function AccessibilityList({ alertDialog }: { alertDialog: boolean }) {
  return (
    <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
      <li><strong className="font-medium text-[var(--color-text-primary)]">Focus Trap:</strong> focus remains inside the modal and returns to the trigger after close.</li>
      <li><strong className="font-medium text-[var(--color-text-primary)]">Keyboard:</strong> Tab and Shift+Tab move through interactive controls.</li>
      <li><strong className="font-medium text-[var(--color-text-primary)]">Escape:</strong> {alertDialog ? "cancels and closes Alert Dialog; clicking outside does not dismiss it." : "closes Dialog and discards unsubmitted changes."}</li>
      <li><strong className="font-medium text-[var(--color-text-primary)]">Screen readers:</strong> every modal requires a specific title and useful description.</li>
    </ul>
  );
}

export function PracticeCard({ correct = false, title, children }: { correct?: boolean; title: string; children: React.ReactNode }) {
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
