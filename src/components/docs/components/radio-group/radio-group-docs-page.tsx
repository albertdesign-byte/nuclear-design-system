"use client";

import {
  radioGroupAccessibilitySnippet,
  radioGroupDefaultSnippet,
  radioGroupDisabledSnippet,
  radioGroupErrorSnippet,
  radioGroupHorizontalSnippet,
  radioGroupInstallationUiSnippet,
  radioGroupPreferencesSelectionSnippet,
  radioGroupRealScreenSnippet,
  radioGroupSelectedDisabledSnippet,
  radioGroupSelectedSnippet,
  radioGroupSettingsSelectionSnippet,
  radioGroupSimpleSelectionSnippet,
  radioGroupSizeSnippet,
  radioGroupUsageSnippet,
  radioGroupWithDescriptionSnippet,
  radioGroupWithLabelSnippet,
  radioGroupWithLongLabelSnippet,
} from "@/components/docs/components/radio-group/radio-group-code-snippets";
import {
  RadioDefaultPreview,
  RadioDisabledPreview,
  RadioErrorPreview,
  RadioHorizontalPreview,
  RadioPreferencesSelectionPreview,
  RadioSelectedDisabledPreview,
  RadioSelectedPreview,
  RadioSettingsSelectionPreview,
  RadioSimpleSelectionPreview,
  RadioWithDescriptionPreview,
  RadioWithLongLabelPreview,
} from "@/components/docs/components/radio-group/radio-preview-blocks";
import { RadioGroupRealScreenPreview } from "@/components/docs/components/radio-group/radio-group-real-screen-preview";
import { radioGroupTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { RadioField, RadioGroup } from "@/components/radio-group";

const radioGroupApiRows = [
  { prop: "defaultValue", type: "string", defaultValue: "—" },
  { prop: "value", type: "string", defaultValue: "—" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "aria-invalid", type: "boolean", defaultValue: "false" },
];

const radioGroupItemApiRows = [
  { prop: "value", type: "string", defaultValue: "required" },
  { prop: "size", type: '"sm" | "md" | "lg"', defaultValue: '"lg"' },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
];

const radioFieldApiRows = [
  { prop: "value", type: "string", defaultValue: "required" },
  { prop: "label", type: "ReactNode", defaultValue: "required" },
  { prop: "description", type: "ReactNode", defaultValue: "—" },
  { prop: "size", type: '"sm" | "md" | "lg"', defaultValue: '"lg"' },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "invalid", type: "boolean", defaultValue: "false" },
];

const radioGroupFieldApiRows = [
  { prop: "legend", type: "ReactNode", defaultValue: "required" },
  { prop: "options", type: "RadioGroupOption[]", defaultValue: "required" },
  { prop: "description", type: "ReactNode", defaultValue: "—" },
  { prop: "helperText", type: "ReactNode", defaultValue: "—" },
  { prop: "error", type: "ReactNode", defaultValue: "—" },
  { prop: "defaultValue", type: "string", defaultValue: "—" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
];

export function RadioGroupDocsPage() {
  return (
    <DocsComponentPage
      title="Radio Group"
      description="Single-select control for mutually exclusive options. Use RadioGroupField for labeled groups with a 44×44px touch target per option."
      tocItems={radioGroupTocItems}
      realScreen={{
        preview: <RadioGroupRealScreenPreview />,
        code: radioGroupRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={radioGroupInstallationUiSnippet}>
              <RadioDefaultPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import <DocsInlineCode>RadioGroupField</DocsInlineCode> for labeled option sets, or compose{" "}
                <DocsInlineCode>RadioGroup</DocsInlineCode> with <DocsInlineCode>RadioField</DocsInlineCode> for custom layouts.
              </>
            }
          >
            <DocsPreview code={radioGroupUsageSnippet}>
              <RadioDefaultPreview />
            </DocsPreview>
          </DocsSection>

          <StateSection id="default" title="Default" code={radioGroupDefaultSnippet} preview={<RadioDefaultPreview />} />
          <StateSection id="selected" title="Selected" code={radioGroupSelectedSnippet} preview={<RadioSelectedPreview />} />
          <StateSection id="disabled" title="Disabled" description="The entire group is non-interactive. Selected state remains visible." code={radioGroupDisabledSnippet} preview={<RadioDisabledPreview />} />
          <StateSection id="selected-disabled" title="Selected Disabled" description="Selected and disabled options show a muted fill and inner dot so both states are distinguishable." code={radioGroupSelectedDisabledSnippet} preview={<RadioSelectedDisabledPreview />} />
          <StateSection id="error" title="Error" code={radioGroupErrorSnippet} preview={<RadioErrorPreview />} />

          <StateSection id="with-label" title="With Label" code={radioGroupWithLabelSnippet} preview={<RadioDefaultPreview />} />
          <StateSection id="with-description" title="With Description" code={radioGroupWithDescriptionSnippet} preview={<RadioWithDescriptionPreview />} />
          <StateSection id="with-long-label" title="Long Label" code={radioGroupWithLongLabelSnippet} preview={<RadioWithLongLabelPreview />} />

          <DocsSection id="radio-group" title="Radio Group" description="Use RadioGroupField for related single-select options. Only one option can be selected at a time.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={radioGroupSimpleSelectionSnippet}>
                <RadioSimpleSelectionPreview />
              </DocsPreview>
              <DocsPreview code={radioGroupSettingsSelectionSnippet}>
                <RadioSettingsSelectionPreview />
              </DocsPreview>
              <DocsPreview code={radioGroupPreferencesSelectionSnippet}>
                <RadioPreferencesSelectionPreview />
              </DocsPreview>
            </div>
          </DocsSection>

          <DocsSection id="size" title="Size">
            <DocsPreview code={radioGroupSizeSnippet}>
              <RadioGroup defaultValue="lg">
                <RadioField value="sm" size="sm" label="Small" />
                <RadioField value="md" size="md" label="Medium" />
                <RadioField value="lg" size="lg" label="Large" />
              </RadioGroup>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="horizontal" title="Horizontal" description="Use flex layout on the group list for inline option sets.">
            <DocsPreview code={radioGroupHorizontalSnippet}>
              <RadioHorizontalPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Radio Button Guidelines"
            description="When to use radio buttons in Medmo clinical and patient-facing flows."
          >
            <div className="flex flex-col gap-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">When to use Radio Button</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Exactly one option from a short, visible set (visit type, contact channel, reminder frequency).</li>
                  <li>Settings where all choices should remain visible without opening a menu.</li>
                  <li>2–5 mutually exclusive options where comparing labels side-by-side helps decision-making.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">Radio Button vs Checkbox</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Radio Button — one selection only (visit type, appointment window).</li>
                  <li>Checkbox — zero, one, or many selections (notification channels, export filters).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">Radio Button vs Select</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Radio Button — 2–5 options that benefit from immediate visibility.</li>
                  <li>Select — longer lists, searchable data, or when space is limited (insurance plan, referring physician).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">Do / Don&apos;t</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Do use a group legend that describes the single decision being made.</li>
                  <li>Do pre-select a sensible default when one option is clearly recommended.</li>
                  <li>Don&apos;t use radio buttons for multi-select — use checkboxes instead.</li>
                  <li>Don&apos;t use radio buttons for long lists — use a select or combobox.</li>
                </ul>
              </div>
            </div>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Medmo radio buttons meet WCAG touch target and keyboard requirements."
          >
            <DocsPreview code={radioGroupAccessibilitySnippet}>
              <RadioWithDescriptionPreview />
            </DocsPreview>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Visual layout: 24×24px control + 6px gap + label. The 44×44px minimum
                touch target is met by the full label row and an invisible pseudo-element
                on the control — it does not add horizontal spacing.
              </li>
              <li>
                <DocsInlineCode>RadioField</DocsInlineCode> associates label copy via native{" "}
                <DocsInlineCode>label</DocsInlineCode> — clicking the label or control selects the option.
              </li>
              <li>Arrow keys move selection within a group; Tab moves focus between groups and fields.</li>
              <li>Focus ring uses <DocsInlineCode>--color-focus-ring</DocsInlineCode> tokens.</li>
              <li>Pair group descriptions and errors with <DocsInlineCode>aria-describedby</DocsInlineCode> on the fieldset.</li>
              <li>Minimum touch target: <DocsInlineCode>--space-touch-target-min</DocsInlineCode> (44px).</li>
            </ul>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              RadioGroup
            </h3>
            <DocsApiTable rows={radioGroupApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              RadioGroupItem
            </h3>
            <DocsApiTable rows={radioGroupItemApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              RadioField
            </h3>
            <DocsApiTable rows={radioFieldApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              RadioGroupField
            </h3>
            <DocsApiTable rows={radioGroupFieldApiRows} />
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
