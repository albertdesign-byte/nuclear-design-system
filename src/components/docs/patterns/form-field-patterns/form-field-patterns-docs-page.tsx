"use client";

import {
  formFieldCheckboxSnippet,
  formFieldGuidelinesSnippet,
  formFieldInputSnippet,
  formFieldRadioSnippet,
  formFieldSelectSnippet,
  formFieldValidationSnippet,
} from "@/components/docs/patterns/form-field-patterns/form-field-patterns-code-snippets";
import { DocsPatternContent } from "@/components/docs/patterns/docs-pattern-content";
import { DocsPatternPage } from "@/components/docs/patterns/docs-pattern-page";
import {
  CheckboxFieldPattern,
  CheckboxGroupPattern,
  InputFieldPattern,
  RadioFieldPattern,
  SelectFieldPattern,
} from "@/components/docs/shared/form-field-demos";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { formFieldGroupClassName } from "@/lib/form-field";

export function FormFieldPatternsDocsPage() {
  return (
    <DocsPatternPage>
      <DocsPatternContent href="/docs/patterns/form-field-patterns" />

      <DocsSection
        id="guidelines"
        title="Guidelines"
        description="Labels stay visible in every Medmo form. Placeholders supplement the field — they never replace the label."
      >
        <DocsPreview code={formFieldGuidelinesSnippet}>
          <InputFieldPattern variant="helper" />
        </DocsPreview>
        <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
          <li>
            Always render a visible <DocsInlineCode>Label</DocsInlineCode> above or
            beside the control.
          </li>
          <li>
            Use placeholders for format hints only — not as the primary field name.
          </li>
          <li>
            Pair invalid fields with <DocsInlineCode>FieldError</DocsInlineCode> and
            set <DocsInlineCode>aria-describedby</DocsInlineCode> for screen readers.
          </li>
          <li>
            Use <DocsInlineCode>FieldDescription</DocsInlineCode> for neutral helper
            copy below the field.
          </li>
          <li>
            Stack fields with <DocsInlineCode>formFieldGroupClassName</DocsInlineCode>{" "}
            (<DocsInlineCode>gap-[var(--space-stack-xs)]</DocsInlineCode>).
          </li>
        </ul>
      </DocsSection>

      <DocsSection
        id="input-label"
        title="Input + Label"
        description="Text fields always ship with a visible label and optional helper or error text."
      >
        <div className="flex flex-col gap-[var(--space-stack-md)]">
          <DocsPreview code={formFieldInputSnippet}>
            <InputFieldPattern />
          </DocsPreview>
          <DocsPreview code={formFieldValidationSnippet}>
            <InputFieldPattern variant="error" />
          </DocsPreview>
        </div>
      </DocsSection>

      <DocsSection
        id="select-label"
        title="Select + Label"
        description="Select triggers use the same field stack. Placeholders indicate unfilled state — not the field name."
      >
        <DocsPreview code={formFieldSelectSnippet}>
          <SelectFieldPattern />
        </DocsPreview>
      </DocsSection>

      <DocsSection
        id="checkbox-label"
        title="Checkbox + Label"
        description="Checkbox labels sit beside the control. Group headings use Label with aria-labelledby."
      >
        <div className="flex flex-col gap-[var(--space-stack-md)]">
          <DocsPreview code={formFieldCheckboxSnippet}>
            <CheckboxFieldPattern />
          </DocsPreview>
          <DocsPreview code={formFieldCheckboxSnippet}>
            <CheckboxGroupPattern />
          </DocsPreview>
        </div>
      </DocsSection>

      <DocsSection
        id="radio-label"
        title="Radio + Label"
        description="Radio groups use a group label plus individual option labels linked with htmlFor."
      >
        <DocsPreview code={formFieldRadioSnippet}>
          <RadioFieldPattern variant="description" />
        </DocsPreview>
      </DocsSection>

      <DocsSection
        id="spacing"
        title="Spacing"
        description="Use shared layout tokens so label, field, helper text, and validation messages align across products."
      >
        <div className={formFieldGroupClassName}>
          <InputFieldPattern variant="helper" />
        </div>
        <div className="mt-[var(--space-stack-md)] rounded-[var(--radius-md)] border border-[var(--docs-chrome-border)] bg-[var(--docs-code-bg)] p-[var(--space-inline-md)]">
          <p className="font-mono text-[0.8125rem] text-[var(--color-text-primary)]">
            formFieldGroupClassName → gap-[var(--space-stack-xs)]
          </p>
          <p className="mt-[var(--space-stack-xs)] font-mono text-[0.8125rem] text-[var(--color-text-primary)]">
            formOptionListClassName → gap-[var(--space-stack-sm)]
          </p>
        </div>
      </DocsSection>
    </DocsPatternPage>
  );
}
