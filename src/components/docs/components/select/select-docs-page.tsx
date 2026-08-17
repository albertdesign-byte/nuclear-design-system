"use client";

import {
  asyncSelectSnippet,
  groupedSelectSnippet,
  multiSelectSnippet,
  searchableSelectSnippet,
  selectAccessibilitySnippet,
  selectDefaultSnippet,
  selectDisabledSnippet,
  selectErrorMessageSnippet,
  selectErrorSnippet,
  selectFullWidthSnippet,
  selectHelperTextSnippet,
  selectInstallationUiSnippet,
  selectLoadingSnippet,
  selectReadOnlySnippet,
  selectRealScreenSnippet,
  selectRequiredSnippet,
  selectSizeSnippet,
  selectUsageSnippet,
  selectValidationMessageSnippet,
} from "@/components/docs/components/select/select-code-snippets";
import {
  AsyncLoadingPreview,
  GroupedFacilitiesPreview,
  LargeDatasetPreview,
  MultiSelectRemovablePreview,
  MultiSelectStudiesPreview,
  MultiSelectTagsPreview,
  SearchableFacilitiesPreview,
  SearchablePatientsPreview,
  SearchableProvidersPreview,
  SearchableStudiesPreview,
  SelectDefaultPreview,
  SelectDisabledPreview,
  SelectErrorMessagePreview,
  SelectErrorPreview,
  SelectHelperTextPreview,
  SelectLoadingPreview,
  SelectReadOnlyPreview,
  SelectRequiredPreview,
  SelectValidationMessagePreview,
  patientStatusOptions,
} from "@/components/docs/components/select/select-preview-blocks";
import { SelectRealScreenPreview } from "@/components/docs/components/select/select-real-screen-preview";
import { selectTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { SelectField } from "@/components/select";

const selectApiRows = [
  { prop: "size", type: '"sm" | "md" | "lg" | "xl" | "xxl"', defaultValue: '"md"' },
  { prop: "fullWidth", type: "boolean", defaultValue: "true" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "readOnly", type: "boolean", defaultValue: "false" },
  { prop: "required", type: "boolean", defaultValue: "false" },
  { prop: "loading", type: "boolean", defaultValue: "false" },
];

const selectFieldApiRows = [
  { prop: "label", type: "ReactNode", defaultValue: "required" },
  { prop: "options", type: "SelectFieldOption[]", defaultValue: "required" },
  { prop: "placeholder", type: "ReactNode", defaultValue: '"Select an option"' },
  { prop: "helperText", type: "ReactNode", defaultValue: "—" },
  { prop: "validationMessage", type: "ReactNode", defaultValue: "—" },
  { prop: "error", type: "ReactNode", defaultValue: "—" },
  ...selectApiRows,
];

const searchableApiRows = [
  { prop: "label", type: "ReactNode", defaultValue: "required" },
  { prop: "options", type: "SearchableSelectOption[]", defaultValue: "required" },
  { prop: "value", type: "string | null", defaultValue: "—" },
  { prop: "loading", type: "boolean", defaultValue: "false" },
  { prop: "emptyMessage", type: "ReactNode", defaultValue: '"No results found."' },
];

const multiApiRows = [
  { prop: "label", type: "ReactNode", defaultValue: "required" },
  { prop: "options", type: "SearchableSelectOption[]", defaultValue: "required" },
  { prop: "value", type: "string[]", defaultValue: "[]" },
  { prop: "onValueChange", type: "(value: string[]) => void", defaultValue: "—" },
];

export function SelectDocsPage() {
  return (
    <DocsComponentPage
      title="Select"
      description="Single and multiple selection patterns for healthcare and enterprise forms. Every form example uses a visible label; placeholders only describe the unfilled state."
      tocItems={selectTocItems}
      realScreen={{
        preview: <SelectRealScreenPreview />,
        code: selectRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={selectInstallationUiSnippet}>
              <SelectDefaultPreview id="select-installation" />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Use <DocsInlineCode>SelectField</DocsInlineCode> for standard option lists,{" "}
                <DocsInlineCode>SearchableSelectField</DocsInlineCode> for filtered datasets, and{" "}
                <DocsInlineCode>MultiSelectField</DocsInlineCode> for multiple selections. A visible label is required in forms.
              </>
            }
          >
            <DocsPreview code={selectUsageSnippet}>
              <SelectDefaultPreview id="select-usage" />
            </DocsPreview>
          </DocsSection>

          <StateSection id="default" title="Default" code={selectDefaultSnippet} preview={<SelectDefaultPreview id="select-default" />} />
          <StateSection id="required" title="Required" description="The visible label and programmatic required state are applied together." code={selectRequiredSnippet} preview={<SelectRequiredPreview />} />
          <StateSection id="disabled" title="Disabled" code={selectDisabledSnippet} preview={<SelectDisabledPreview />} />
          <StateSection id="error" title="Error" code={selectErrorSnippet} preview={<SelectErrorPreview />} />
          <StateSection id="read-only" title="Read Only" description="Use read-only when a selected value must remain visible but cannot be changed." code={selectReadOnlySnippet} preview={<SelectReadOnlyPreview />} />
          <StateSection id="loading" title="Loading" description="Loading disables the trigger, replaces the chevron with a spinner, and exposes aria-busy." code={selectLoadingSnippet} preview={<SelectLoadingPreview />} />

          <DocsSection id="helper-text" title="Helper Text" description="Use neutral guidance before validation and FieldError after validation fails.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={selectHelperTextSnippet}>
                <SelectHelperTextPreview id="select-helper" />
              </DocsPreview>
              <DocsPreview code={selectValidationMessageSnippet}>
                <SelectValidationMessagePreview />
              </DocsPreview>
              <DocsPreview code={selectErrorMessageSnippet}>
                <SelectErrorMessagePreview />
              </DocsPreview>
            </div>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>Helper text — neutral context about downstream behavior.</li>
              <li>Validation message — constraints the user should understand before submission.</li>
              <li>Error message — actionable correction associated through <DocsInlineCode>aria-describedby</DocsInlineCode>.</li>
            </ul>
          </DocsSection>

          <DocsSection id="searchable-select" title="Searchable Select" description="Use filtering when users need to locate a known record in a directory.">
            <div className="grid gap-[var(--space-stack-lg)] lg:grid-cols-2">
              <DocsPreview code={searchableSelectSnippet}><SearchablePatientsPreview /></DocsPreview>
              <DocsPreview code={searchableSelectSnippet}><SearchableProvidersPreview /></DocsPreview>
              <DocsPreview code={searchableSelectSnippet}><SearchableFacilitiesPreview /></DocsPreview>
              <DocsPreview code={searchableSelectSnippet}><SearchableStudiesPreview /></DocsPreview>
            </div>
          </DocsSection>

          <DocsSection id="multi-select" title="Multi Select" description="Selected values appear as removable tags inside the field.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={multiSelectSnippet}><MultiSelectStudiesPreview /></DocsPreview>
              <DocsPreview code={multiSelectSnippet}><MultiSelectTagsPreview /></DocsPreview>
              <DocsPreview code={multiSelectSnippet}><MultiSelectRemovablePreview /></DocsPreview>
            </div>
          </DocsSection>

          <DocsSection id="grouped-options" title="Grouped Options" description="Use labeled groups when options belong to meaningful categories.">
            <DocsPreview code={groupedSelectSnippet}>
              <GroupedFacilitiesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="large-datasets" title="Large Datasets" description="Choose the interaction based on dataset size and selection behavior.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={searchableSelectSnippet}><LargeDatasetPreview /></DocsPreview>
              <DocsPreview code={asyncSelectSnippet}><AsyncLoadingPreview /></DocsPreview>
            </div>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li><strong className="font-medium text-[var(--color-text-primary)]">Searchable Select</strong> — more than 10 options or when users know a patient, provider, facility, or study name.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Multi Select</strong> — users need several values and must review or remove selections.</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Async Loading</strong> — remote directories, permission-filtered results, or datasets too large to load initially.</li>
            </ul>
          </DocsSection>

          <DocsSection id="size" title="Size" description="Select heights align with Input and Button sizes.">
            <DocsPreview code={selectSizeSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-md)]">
                <SelectField id="select-size-sm" label="Small" size="sm" options={patientStatusOptions} />
                <SelectField id="select-size-md" label="Medium" size="md" options={patientStatusOptions} />
                <SelectField id="select-size-lg" label="Large" size="lg" options={patientStatusOptions} />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="full-width" title="Full Width" description="Full width is enabled by default for form layouts.">
            <DocsPreview code={selectFullWidthSnippet}><SelectDefaultPreview id="select-full-width" /></DocsPreview>
          </DocsSection>

          <DocsSection id="guidelines" title="Select Guidelines" description="Choose the selection control that matches the number and visibility of options.">
            <div className="flex flex-col gap-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <Guideline title="When to use Select">
                <li>One value from a predefined list where showing every option would consume too much space.</li>
                <li>Patient status, insurance plan, study priority, or facility selection.</li>
              </Guideline>
              <Guideline title="Select vs Radio Button">
                <li>Select — more than 5 options or compact layouts.</li>
                <li>Radio Button — 2–5 mutually exclusive choices that benefit from immediate comparison.</li>
              </Guideline>
              <Guideline title="When to use Searchable Select">
                <li>Patient, provider, facility, and study directories with more than 10 options.</li>
                <li>Users know part of the name, MRN, specialty, or modality they need.</li>
              </Guideline>
              <Guideline title="When to use Multi Select">
                <li>Several options can be selected and the user needs to review or remove each value.</li>
                <li>Use Checkbox Group instead when the small option set should remain fully visible.</li>
              </Guideline>
              <Guideline title="Do / Don&apos;t">
                <li>Do provide a visible label and a specific empty-state placeholder.</li>
                <li>Do group facilities or plans when categories aid scanning.</li>
                <li>Don&apos;t use Select for free-form data entry — use Input.</li>
                <li>Don&apos;t load an unfiltered directory with hundreds of records — use async search.</li>
              </Guideline>
            </div>
          </DocsSection>

          <DocsSection id="accessibility" title="Accessibility" description="Select fields expose labels, keyboard navigation, status, and errors to assistive technology.">
            <DocsPreview code={selectAccessibilitySnippet}><SelectHelperTextPreview id="select-accessibility" /></DocsPreview>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>Every form select has a visible label associated with its trigger or search input.</li>
              <li>Tab focuses the control; Enter or Space opens a standard Select; arrow keys move through options; Escape closes the popup.</li>
              <li>Searchable Select supports typing, arrow-key navigation, Enter selection, and announced empty/loading states.</li>
              <li>Multi Select exposes removable chips; Backspace removes the previous selection when the search input is empty.</li>
              <li>Focus visible uses <DocsInlineCode>--color-focus-ring</DocsInlineCode> consistently with Input.</li>
              <li>Errors use <DocsInlineCode>aria-invalid</DocsInlineCode> and <DocsInlineCode>aria-describedby</DocsInlineCode>.</li>
            </ul>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">SelectTrigger</h3>
            <DocsApiTable rows={selectApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium">SelectField</h3>
            <DocsApiTable rows={selectFieldApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium">SearchableSelectField</h3>
            <DocsApiTable rows={searchableApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium">MultiSelectField</h3>
            <DocsApiTable rows={multiApiRows} />
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
