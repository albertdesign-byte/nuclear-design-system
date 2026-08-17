"use client";

import {
  checkboxAccessibilitySnippet,
  checkboxCheckedSnippet,
  checkboxDefaultSnippet,
  checkboxDisabledSnippet,
  checkboxErrorSnippet,
  checkboxGroupMultipleSnippet,
  checkboxGroupPreferencesSnippet,
  checkboxGroupSettingsSnippet,
  checkboxIndeterminateSnippet,
  checkboxInstallationUiSnippet,
  checkboxRealScreenSnippet,
  checkboxSizeSnippet,
  checkboxUsageSnippet,
  checkboxWithDescriptionSnippet,
  checkboxWithHelperTextSnippet,
  checkboxWithLongLabelSnippet,
} from "@/components/docs/components/checkbox/checkbox-code-snippets";
import {
  CheckboxCheckedPreview,
  CheckboxDefaultPreview,
  CheckboxDisabledPreview,
  CheckboxErrorPreview,
  CheckboxIndeterminatePreview,
  CheckboxMultipleSelectionPreview,
  CheckboxPreferencesGroupPreview,
  CheckboxSettingsGroupPreview,
  CheckboxWithDescriptionPreview,
  CheckboxWithHelperTextPreview,
  CheckboxWithLongLabelPreview,
} from "@/components/docs/components/checkbox/checkbox-preview-blocks";
import { CheckboxRealScreenPreview } from "@/components/docs/components/checkbox/checkbox-real-screen-preview";
import { checkboxTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const checkboxApiRows = [
  { prop: "size", type: '"sm" | "md" | "lg"', defaultValue: '"md"' },
  { prop: "checked", type: "boolean", defaultValue: "false" },
  { prop: "indeterminate", type: "boolean", defaultValue: "false" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "aria-invalid", type: "boolean", defaultValue: "false" },
];

const checkboxFieldApiRows = [
  { prop: "label", type: "ReactNode", defaultValue: "required" },
  { prop: "description", type: "ReactNode", defaultValue: "—" },
  { prop: "helperText", type: "ReactNode", defaultValue: "—" },
  { prop: "error", type: "ReactNode", defaultValue: "—" },
  { prop: "invalid", type: "boolean", defaultValue: "false" },
];

export function CheckboxDocsPage() {
  return (
    <DocsComponentPage
      title="Checkbox"
      description="Accessible binary selection for consents, preferences, and multi-select settings. Use CheckboxField for labeled rows with 44×44px touch targets."
      tocItems={checkboxTocItems}
      realScreen={{
        preview: <CheckboxRealScreenPreview />,
        code: checkboxRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={checkboxInstallationUiSnippet}>
              <CheckboxDefaultPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Use <DocsInlineCode>CheckboxField</DocsInlineCode> for labeled options in forms.
                Use the primitive <DocsInlineCode>Checkbox</DocsInlineCode> only for icon-only controls with an{" "}
                <DocsInlineCode>aria-label</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={checkboxUsageSnippet}>
              <CheckboxDefaultPreview />
            </DocsPreview>
          </DocsSection>

          <StateSection id="default" title="Default" code={checkboxDefaultSnippet} preview={<CheckboxDefaultPreview />} />
          <StateSection id="checked" title="Checked" code={checkboxCheckedSnippet} preview={<CheckboxCheckedPreview />} />
          <StateSection id="disabled" title="Disabled" code={checkboxDisabledSnippet} preview={<CheckboxDisabledPreview />} />
          <StateSection id="error" title="Error" code={checkboxErrorSnippet} preview={<CheckboxErrorPreview />} />
          <StateSection id="indeterminate" title="Indeterminate" description="Use for parent checkboxes in grouped selections." code={checkboxIndeterminateSnippet} preview={<CheckboxIndeterminatePreview />} />

          <StateSection id="with-label" title="With Label" code={checkboxUsageSnippet} preview={<CheckboxDefaultPreview />} />
          <StateSection id="with-description" title="With Description" code={checkboxWithDescriptionSnippet} preview={<CheckboxWithDescriptionPreview />} />
          <StateSection id="with-long-label" title="Long Label" code={checkboxWithLongLabelSnippet} preview={<CheckboxWithLongLabelPreview />} />
          <StateSection id="with-helper-text" title="With Helper Text" code={checkboxWithHelperTextSnippet} preview={<CheckboxWithHelperTextPreview />} />

          <DocsSection id="checkbox-group" title="Checkbox Group" description="Use CheckboxGroupField for related multi-select options with consistent spacing.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={checkboxGroupMultipleSnippet}>
                <CheckboxMultipleSelectionPreview />
              </DocsPreview>
              <DocsPreview code={checkboxGroupSettingsSnippet}>
                <CheckboxSettingsGroupPreview />
              </DocsPreview>
              <DocsPreview code={checkboxGroupPreferencesSnippet}>
                <CheckboxPreferencesGroupPreview />
              </DocsPreview>
            </div>
          </DocsSection>

          <DocsSection id="size" title="Size">
            <DocsPreview code={checkboxSizeSnippet}>
              <CheckboxDefaultPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Checkbox Guidelines"
            description="When to use checkboxes in Medmo clinical and patient-facing flows."
          >
            <div className="flex flex-col gap-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">When to use Checkbox</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Independent options where more than one can be selected (modalities, notification channels).</li>
                  <li>Binary consent or authorization toggles in registration and clinical workflows.</li>
                  <li>Optional settings that do not require immediate action.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">Checkbox vs Radio Button</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Checkbox — zero, one, or many selections (notification preferences, export filters).</li>
                  <li>Radio Button — exactly one selection from a set (visit type, contact channel).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">When to use groups</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Group related options under a visible legend (portal settings, appointment preferences).</li>
                  <li>Use indeterminate state on a parent checkbox when some child options are selected.</li>
                </ul>
              </div>
            </div>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Medmo checkboxes meet WCAG touch target and keyboard requirements."
          >
            <DocsPreview code={checkboxAccessibilitySnippet}>
              <CheckboxWithDescriptionPreview />
            </DocsPreview>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Visual layout: 24×24px control + 6px gap + label. The 44×44px minimum
                touch target is met by the full label row and an invisible pseudo-element
                on the control — it does not add horizontal spacing.
              </li>
              <li>
                <DocsInlineCode>CheckboxField</DocsInlineCode> associates label copy via native{" "}
                <DocsInlineCode>label</DocsInlineCode> — clicking the label or control toggles the field.
              </li>
              <li>Space toggles the focused checkbox; Tab moves focus between fields.</li>
              <li>Focus ring uses <DocsInlineCode>--color-focus-ring</DocsInlineCode> tokens.</li>
              <li>Pair descriptions and errors with <DocsInlineCode>aria-describedby</DocsInlineCode>.</li>
              <li>Minimum touch target: <DocsInlineCode>--space-touch-target-min</DocsInlineCode> (44px).</li>
            </ul>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">Checkbox</h3>
            <DocsApiTable rows={checkboxApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium">CheckboxField</h3>
            <DocsApiTable rows={checkboxFieldApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function StateSection({ id, title, code, preview, description }: { id: string; title: string; code: CodeLine[]; preview: React.ReactNode; description?: React.ReactNode }) {
  return (
    <DocsSection id={id} title={title} description={description}>
      <DocsPreview code={code}>{preview}</DocsPreview>
    </DocsSection>
  );
}
