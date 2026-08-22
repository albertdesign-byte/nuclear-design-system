"use client";

import {
  inputAccessibilitySnippet,
  inputDefaultSnippet,
  inputDisabledSnippet,
  inputEndIconSnippet,
  inputErrorMessageSnippet,
  inputErrorSnippet,
  inputFullWidthSnippet,
  inputHelperTextSnippet,
  inputInstallationUiSnippet,
  inputLoadingSnippet,
  inputPrefixSnippets,
  inputReadOnlySnippet,
  inputRealScreenSnippet,
  inputRequiredSnippet,
  inputSearchSnippet,
  inputSearchToolbarSnippet,
  inputSizeSnippet,
  inputStartIconSnippet,
  inputSuffixSnippets,
  inputUnitsSnippet,
  inputUsageSnippet,
  inputValidationTextSnippet,
} from "@/components/docs/components/input/input-code-snippets";
import {
  InputDefaultPreview,
  InputDisabledPreview,
  InputEndIconPreview,
  InputErrorMessagePreview,
  InputErrorPreview,
  InputHelperTextPreview,
  InputLoadingPreview,
  InputPrefixCurrencyPreview,
  InputPrefixIdPreview,
  InputPrefixMrnPreview,
  InputReadOnlyPreview,
  InputRequiredPreview,
  InputSearchPreview,
  InputSearchToolbarPreview,
  InputStartIconPreview,
  InputSuffixCmPreview,
  InputSuffixKgPreview,
  InputSuffixLbsPreview,
  InputSuffixPercentPreview,
  InputSuffixYearsPreview,
  InputUnitAgePreview,
  InputUnitHeightPreview,
  InputUnitPercentagePreview,
  InputUnitWeightPreview,
  InputValidationTextPreview,
} from "@/components/docs/components/input/input-preview-blocks";
import { InputRealScreenPreview } from "@/components/docs/components/input/input-real-screen-preview";
import { inputTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { InputField } from "@/components/input";

const inputApiRows = [
  { prop: "size", type: '"sm" | "md" | "lg" | "xl" | "xxl"', defaultValue: '"md"' },
  { prop: "fullWidth", type: "boolean", defaultValue: "true" },
  { prop: "disabled", type: "boolean", defaultValue: "false" },
  { prop: "readOnly", type: "boolean", defaultValue: "false" },
  { prop: "placeholder", type: "string", defaultValue: "—" },
  { prop: "aria-invalid", type: "boolean", defaultValue: "false" },
];

const inputFieldApiRows = [
  { prop: "label", type: "ReactNode", defaultValue: "required" },
  { prop: "description", type: "ReactNode", defaultValue: "—" },
  { prop: "helperText", type: "ReactNode", defaultValue: "—" },
  { prop: "error", type: "ReactNode", defaultValue: "—" },
  { prop: "required", type: "boolean", defaultValue: "false" },
  { prop: "loading", type: "boolean", defaultValue: "false" },
  { prop: "prefix", type: "ReactNode", defaultValue: "—" },
  { prop: "suffix", type: "ReactNode", defaultValue: "—" },
  { prop: "startIcon", type: "ReactNode", defaultValue: "—" },
  { prop: "endIcon", type: "ReactNode", defaultValue: "—" },
];

const inputGroupApiRows = [
  { prop: "prefix", type: "ReactNode", defaultValue: "—" },
  { prop: "suffix", type: "ReactNode", defaultValue: "—" },
  { prop: "startIcon", type: "ReactNode", defaultValue: "—" },
  { prop: "endIcon", type: "ReactNode", defaultValue: "—" },
  ...inputApiRows.map((row) => ({ ...row })),
];

export function InputDocsPage() {
  return (
    <DocsComponentPage
      title="Input"
      description="Captures a single line of text for clinical, administrative, and patient-facing flows. Use InputField for labeled fields and InputGroup for prefix, suffix, and icon patterns."
      tocItems={inputTocItems}
      realScreen={{
        preview: <InputRealScreenPreview />,
        code: inputRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={inputInstallationUiSnippet}>
              <InputDefaultPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import <DocsInlineCode>InputField</DocsInlineCode> for labeled form fields, or compose{" "}
                <DocsInlineCode>Input</DocsInlineCode> with <DocsInlineCode>Label</DocsInlineCode> manually.
                Use <DocsInlineCode>InputGroup</DocsInlineCode> for prefix, suffix, and icon addons.
              </>
            }
          >
            <DocsPreview code={inputUsageSnippet}>
              <InputDefaultPreview />
            </DocsPreview>
          </DocsSection>

          <StateSection id="default" title="Default" code={inputDefaultSnippet} preview={<InputDefaultPreview />} />
          <StateSection id="required" title="Required" description="Mark required fields in the label and set aria-required on the input." code={inputRequiredSnippet} preview={<InputRequiredPreview />} />
          <StateSection id="disabled" title="Disabled" code={inputDisabledSnippet} preview={<InputDisabledPreview />} />
          <StateSection id="error" title="Error" code={inputErrorSnippet} preview={<InputErrorPreview />} />
          <StateSection id="read-only" title="Read Only" description="Use readOnly for system-assigned values that should remain visible but not editable." code={inputReadOnlySnippet} preview={<InputReadOnlyPreview />} />
          <StateSection id="loading" title="Loading" description="Set loading on InputField to disable the control and show a spinner in the suffix slot." code={inputLoadingSnippet} preview={<InputLoadingPreview />} />

          <DocsSection id="with-icon" title="Input with Icon" description="Common Medmo search and scheduling patterns with leading or trailing icons.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={inputSearchSnippet}>
                <InputSearchPreview />
              </DocsPreview>
              <DocsPreview code={inputStartIconSnippet}>
                <InputStartIconPreview />
              </DocsPreview>
              <DocsPreview code={inputEndIconSnippet}>
                <InputEndIconPreview />
              </DocsPreview>
              <DocsPreview code={inputSearchToolbarSnippet}>
                <InputSearchToolbarPreview />
              </DocsPreview>
            </div>
          </DocsSection>

          <DocsSection
            id="prefix-suffix"
            title="Prefix & Suffix"
            description="Use prefix for identifiers and currency. Use suffix for clinical units and percentages."
          >
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={inputPrefixSnippets}>
                <div className="flex flex-col gap-[var(--space-stack-md)]">
                  <InputPrefixCurrencyPreview />
                  <InputPrefixIdPreview />
                  <InputPrefixMrnPreview />
                </div>
              </DocsPreview>
              <DocsPreview code={inputSuffixSnippets}>
                <div className="flex flex-col gap-[var(--space-stack-md)]">
                  <InputSuffixKgPreview />
                  <InputSuffixCmPreview />
                  <InputSuffixLbsPreview />
                  <InputSuffixYearsPreview />
                  <InputSuffixPercentPreview />
                </div>
              </DocsPreview>
            </div>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li><strong className="font-medium text-[var(--color-text-primary)]">Prefix ($, ID, MRN)</strong> — fixed context that is not part of the editable value (copay amount, patient identifier, record number).</li>
              <li><strong className="font-medium text-[var(--color-text-primary)]">Suffix (kg, cm, lbs, years, %)</strong> — unit of measure shown beside the numeric entry; keep the stored value unit-free when possible.</li>
            </ul>
          </DocsSection>

          <DocsSection id="units-input" title="Units Input" description="Clinical vitals and coverage fields with consistent suffix placement.">
            <DocsPreview code={inputUnitsSnippet}>
              <div className="flex flex-col gap-[var(--space-stack-md)]">
                <InputUnitWeightPreview />
                <InputUnitHeightPreview />
                <InputUnitAgePreview />
                <InputUnitPercentagePreview />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="helper-text" title="Helper Text" description="Visual hierarchy for guidance, validation hints, and errors.">
            <div className="flex flex-col gap-[var(--space-stack-lg)]">
              <DocsPreview code={inputHelperTextSnippet}>
                <InputHelperTextPreview />
              </DocsPreview>
              <DocsPreview code={inputValidationTextSnippet}>
                <InputValidationTextPreview />
              </DocsPreview>
              <DocsPreview code={inputErrorMessageSnippet}>
                <InputErrorMessagePreview />
              </DocsPreview>
            </div>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li><DocsInlineCode>FieldDescription</DocsInlineCode> — neutral helper text below the field.</li>
              <li>Validation text — also uses <DocsInlineCode>FieldDescription</DocsInlineCode> for format rules before submission.</li>
              <li><DocsInlineCode>FieldError</DocsInlineCode> — error message after failed validation; pairs with <DocsInlineCode>aria-invalid</DocsInlineCode>.</li>
            </ul>
          </DocsSection>

          <DocsSection id="size" title="Size">
            <DocsPreview code={inputSizeSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-md)]">
                <InputField id="input-size-sm" label="Small" size="sm" defaultValue="Small field" />
                <InputField id="input-size-md" label="Medium" size="md" defaultValue="Medium field" />
                <InputField id="input-size-lg" label="Large" size="lg" defaultValue="Large field" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="full-width" title="Full Width" description={<> <DocsInlineCode>fullWidth</DocsInlineCode> is enabled by default for form layouts.</>}>
            <DocsPreview code={inputFullWidthSnippet}>
              <InputDefaultPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="guidelines" title="Input Guidelines" description="When to use each text-entry pattern in Medmo healthcare and admin flows.">
            <div className="flex flex-col gap-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">When to use Input</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Single-line free text: patient name, referral ID, phone, email.</li>
                  <li>Numeric vitals with units via suffix: weight, height, age, coverage percentage.</li>
                  <li>Currency or identifier prefixes: copay ($), patient ID, MRN.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">Input vs Select</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Input — open-ended or numeric entry the user types (name, MRN, weight).</li>
                  <li>Select — choosing from a predefined list (patient status, insurance plan, modality).</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">Input vs Date Input</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Date Input / Date Picker — scheduling, DOB, and range selection with calendar validation.</li>
                  <li>Plain Input with calendar icon — avoid for dates; use Date Picker for accessible date parsing.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">Search Input</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Use <DocsInlineCode>InputGroup</DocsInlineCode> with a search icon for toolbars (MRN / patient lookup).</li>
                  <li>Pair labeled search fields with <DocsInlineCode>InputField</DocsInlineCode> in filter panels.</li>
                  <li>Do not use a bare placeholder as the only label in required form fields.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-[var(--color-text-primary)]">Do / Don&apos;t</h4>
                <ul className="mt-[var(--space-stack-xs)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)]">
                  <li>Do always provide a visible label for form fields.</li>
                  <li>Do use suffix units consistently across vitals screens (kg vs lbs by locale).</li>
                  <li>Don&apos;t build custom bordered wrappers — use <DocsInlineCode>InputGroup</DocsInlineCode>.</li>
                  <li>Don&apos;t use Input for long clinical notes — use Textarea.</li>
                  <li>Don&apos;t use Input for file upload — use <DocsInlineCode>Dropzone</DocsInlineCode> for click-to-select and drag and drop.</li>
                </ul>
              </div>
            </div>
          </DocsSection>

          <DocsSection id="accessibility" title="Accessibility" description="Medmo inputs meet WCAG label, keyboard, and error association requirements.">
            <DocsPreview code={inputAccessibilitySnippet}>
              <InputHelperTextPreview />
            </DocsPreview>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>Every form field needs a visible label — placeholders are format hints only.</li>
              <li><DocsInlineCode>InputField</DocsInlineCode> wires <DocsInlineCode>htmlFor</DocsInlineCode> / <DocsInlineCode>id</DocsInlineCode> and <DocsInlineCode>aria-describedby</DocsInlineCode> for helper and error text.</li>
              <li>Tab moves focus between fields; Enter submits the enclosing form.</li>
              <li>Focus ring uses <DocsInlineCode>--color-focus-ring</DocsInlineCode> tokens on the input or InputGroup container.</li>
              <li>Expose validation errors with <DocsInlineCode>FieldError</DocsInlineCode>, <DocsInlineCode>aria-invalid</DocsInlineCode>, and programmatic association.</li>
            </ul>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">Input</h3>
            <DocsApiTable rows={inputApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium">InputField</h3>
            <DocsApiTable rows={inputFieldApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium">InputGroup</h3>
            <DocsApiTable rows={inputGroupApiRows} />
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
