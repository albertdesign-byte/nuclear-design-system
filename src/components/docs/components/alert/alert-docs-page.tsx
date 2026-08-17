"use client";

import {
  alertAccessibilitySnippet,
  alertBasicSnippet,
  alertDismissibleSnippet,
  alertErrorSnippet,
  alertInfoSnippet,
  alertInstallationUiSnippet,
  alertPersistentSnippet,
  alertRealScreenSnippet,
  alertSuccessSnippet,
  alertUsageSnippet,
  alertWarningSnippet,
  alertWithActionSnippet,
  alertWithDescriptionSnippet,
  alertWithIconSnippet,
  alertWithTitleSnippet,
} from "@/components/docs/components/alert/alert-code-snippets";
import {
  AlertAuditPreview,
  AlertErrorPreview,
  AlertInfoPreview,
  AlertSuccessPreview,
  AlertWarningPreview,
  AlertWithActionPreview,
  AlertWithDescriptionPreview,
  AlertWithIconPreview,
  AlertWithTitlePreview,
  BasicAlertPreview,
  DismissibleAlertPreview,
  PersistentAlertPreview,
  UnifiedAlertPreview,
} from "@/components/docs/components/alert/alert-preview-blocks";
import { AlertRealScreenPreview } from "@/components/docs/components/alert/alert-real-screen-preview";
import { alertTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const alertApiRows = [
  { prop: "variant", type: '"info" | "success" | "warning" | "error"', defaultValue: '"info"' },
  { prop: "dismissible", type: "boolean", defaultValue: "false" },
  { prop: "open", type: "boolean", defaultValue: "—" },
  { prop: "defaultOpen", type: "boolean", defaultValue: "true" },
  { prop: "onOpenChange", type: "(open: boolean) => void", defaultValue: "—" },
  { prop: "onDismiss", type: "() => void", defaultValue: "—" },
  { prop: "role", type: '"status" | "alert"', defaultValue: "By severity" },
];

export function AlertDocsPage() {
  return (
    <DocsComponentPage
      title="Alert"
      description="The single Medmo inline-feedback standard for Patient, Admin, and future products."
      tocItems={alertTocItems}
      realScreen={{
        preview: <AlertRealScreenPreview />,
        code: alertRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={alertInstallationUiSnippet}>
              <UnifiedAlertPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import every inline alert from <DocsInlineCode>@/components/alert</DocsInlineCode>.
                Product applications must not recreate status panels with local color, border, or spacing classes.
              </>
            }
          >
            <DocsPreview code={alertUsageSnippet}>
              <UnifiedAlertPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="audit" title="Alert Audit" description="The former Patient and Admin patterns used the same intent with different structure and behavior.">
            <AlertAuditPreview />
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <AuditFinding
                title="Current Patient Alert"
                items={[
                  "Modern, compact callout with icon-first scanning.",
                  "Semantic status colors, but informational copy was sometimes styled as success.",
                  "No shared dismissal or action pattern.",
                ]}
              />
              <AuditFinding
                title="Current Admin Alert"
                items={[
                  "Custom danger-zone panel duplicated error tokens and spacing.",
                  "Action placement and radius differed from Patient App.",
                  "No shared alert semantics, icon contract, or live-region behavior.",
                ]}
              />
            </div>
          </DocsSection>

          <DocsSection
            id="unified-alert"
            title="Unified Alert"
            description="The official Alert keeps the compact Patient App structure, adds a left severity accent, and standardizes icons, actions, dismissal, and screen-reader behavior."
          >
            <DocsPreview code={alertUsageSnippet}>
              <UnifiedAlertPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="variants" title="Alert Variants" description="Use the variant that matches the message—not the product surface.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={alertSuccessSnippet}><AlertSuccessPreview /></DocsPreview>
              <DocsPreview code={alertWarningSnippet}><AlertWarningPreview /></DocsPreview>
              <DocsPreview code={alertErrorSnippet}><AlertErrorPreview /></DocsPreview>
              <DocsPreview code={alertInfoSnippet}><AlertInfoPreview /></DocsPreview>
            </div>
          </DocsSection>

          <DocsSection id="patterns" title="Alert Patterns" description="Compose only the content needed for the message and its next action.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={alertBasicSnippet}><BasicAlertPreview /></DocsPreview>
              <DocsPreview code={alertWithIconSnippet}><AlertWithIconPreview /></DocsPreview>
              <DocsPreview code={alertWithTitleSnippet}><AlertWithTitlePreview /></DocsPreview>
              <DocsPreview code={alertWithDescriptionSnippet}><AlertWithDescriptionPreview /></DocsPreview>
              <DocsPreview code={alertDismissibleSnippet}><DismissibleAlertPreview /></DocsPreview>
              <DocsPreview code={alertWithActionSnippet}><AlertWithActionPreview /></DocsPreview>
            </div>
          </DocsSection>

          <DocsSection id="states" title="Alert States" description="Visibility is based on whether the message still helps the user act.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <div>
                <h4 className="mb-[var(--space-stack-xs)] font-medium text-[var(--color-text-primary)]">Default</h4>
                <DocsPreview code={alertInfoSnippet}><AlertInfoPreview /></DocsPreview>
              </div>
              <div>
                <h4 className="mb-[var(--space-stack-xs)] font-medium text-[var(--color-text-primary)]">Dismissed</h4>
                <DocsPreview code={alertDismissibleSnippet}><DismissibleAlertPreview /></DocsPreview>
                <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                  Dismissed alerts are removed from the DOM and can return only when the underlying event occurs again.
                </p>
              </div>
              <div>
                <h4 className="mb-[var(--space-stack-xs)] font-medium text-[var(--color-text-primary)]">Persistent</h4>
                <DocsPreview code={alertPersistentSnippet}><PersistentAlertPreview /></DocsPreview>
                <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                  Persistent alerts omit dismissal and remain until the blocking condition is resolved.
                </p>
              </div>
            </div>
          </DocsSection>

          <DocsSection id="healthcare-examples" title="Healthcare Examples" description="Canonical language for common patient-management and imaging workflows.">
            <div className="flex flex-col gap-[var(--space-stack-md)]">
              <AlertSuccessPreview />
              <AlertWarningPreview />
              <AlertErrorPreview />
              <AlertInfoPreview />
            </div>
          </DocsSection>

          <DocsSection id="guidelines" title="Alert Guidelines" description="Choose the feedback channel based on persistence, urgency, and scope.">
            <div className="flex flex-col gap-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <Guideline title="When to use Alerts">
                <li>Persistent page- or section-level information that remains relevant while the user works.</li>
                <li>Upload failures, missing patient data, workflow warnings, and new results.</li>
              </Guideline>
              <Guideline title="Alert vs Toast">
                <li>Alert — the message must remain visible or sits next to the affected workflow.</li>
                <li>Toast — short confirmation that does not block work, such as “Changes saved.”</li>
              </Guideline>
              <Guideline title="Alert vs Dialog">
                <li>Alert — communicates status and may offer a non-blocking action.</li>
                <li>Dialog — requires a decision before continuing, especially destructive confirmation.</li>
              </Guideline>
              <Guideline title="Alert vs Inline Validation">
                <li>Alert — summarizes a page-level or cross-field problem.</li>
                <li>Inline validation — explains how to fix one specific form field.</li>
              </Guideline>
              <Guideline title="Do / Don&apos;t">
                <li>Do state what happened and the next action in plain healthcare language.</li>
                <li>Do use one icon that reinforces, but does not replace, the text.</li>
                <li>Don&apos;t use success styling for neutral policy or informational content.</li>
                <li>Don&apos;t use Alert for irreversible confirmation—use Alert Dialog.</li>
              </Guideline>
            </div>
          </DocsSection>

          <DocsSection id="accessibility" title="Accessibility" description="The unified component provides semantic live regions and keyboard-operable controls.">
            <DocsPreview code={alertAccessibilitySnippet}><AlertWarningPreview /></DocsPreview>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li><strong className="font-medium text-[var(--color-text-primary)]">Screen readers:</strong> info and success use <DocsInlineCode>role=&quot;status&quot;</DocsInlineCode>; warning and error use <DocsInlineCode>role=&quot;alert&quot;</DocsInlineCode>.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Keyboard:</strong> dismiss and action buttons are reachable with Tab and expose visible focus.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Contrast:</strong> text, border, background, and focus colors come from semantic status tokens in light and dark themes.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Icons:</strong> <DocsInlineCode>AlertIcon</DocsInlineCode> marks decorative icons hidden from assistive technology; text always communicates the state.</li>
            </ul>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">Alert</h3>
            <DocsApiTable rows={alertApiRows} />
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              Compose with <DocsInlineCode>AlertIcon</DocsInlineCode>, <DocsInlineCode>AlertTitle</DocsInlineCode>,{" "}
              <DocsInlineCode>AlertDescription</DocsInlineCode>, and <DocsInlineCode>AlertAction</DocsInlineCode>.
              Legacy <DocsInlineCode>default</DocsInlineCode> and <DocsInlineCode>destructive</DocsInlineCode> aliases remain for compatibility.
            </p>
          </DocsSection>
        </>
      }
    />
  );
}

function AuditFinding({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-inline-md)]">
      <h4 className="font-medium text-[var(--color-text-primary)]">{title}</h4>
      <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

function Guideline({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="font-medium text-[var(--color-text-primary)]">{title}</h4>
      <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
        {children}
      </ul>
    </div>
  );
}
