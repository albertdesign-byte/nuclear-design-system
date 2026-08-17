"use client";

import { FieldError } from "@/components/field-error";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  fieldErrorFieldGroupSnippet,
  fieldErrorIconSnippet,
  fieldErrorInstallationUiSnippet,
  fieldErrorRealScreenSnippet,
  fieldErrorUsageSnippet,
} from "@/components/docs/components/field-error/field-error-code-snippets";
import { FieldErrorRealScreenPreview } from "@/components/docs/components/field-error/field-error-real-screen-preview";
import { fieldErrorTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const fieldErrorApiRows = [
  { prop: "showIcon", type: "boolean", defaultValue: "false" },
  { prop: "id", type: "string", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "undefined" },
];

export function FieldErrorDocsPage() {
  return (
    <DocsComponentPage
      title="Field Error"
      description="Inline validation message paired with Label and Input for accessible form fields."
      tocItems={fieldErrorTocItems}
      realScreen={{
        preview: <FieldErrorRealScreenPreview />,
        code: fieldErrorRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={fieldErrorInstallationUiSnippet}>
              <FieldError>Enter a valid email address.</FieldError>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/field-error</DocsInlineCode>.
                Link the message to the control with matching{" "}
                <DocsInlineCode>id</DocsInlineCode> and{" "}
                <DocsInlineCode>aria-describedby</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={fieldErrorUsageSnippet}>
              <FieldError>Enter a valid email address.</FieldError>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="field-group"
            title="Field Group"
            description={
              <>
                Combine <DocsInlineCode>Label</DocsInlineCode>,{" "}
                <DocsInlineCode>Input</DocsInlineCode>, and{" "}
                <DocsInlineCode>FieldError</DocsInlineCode>. Set{" "}
                <DocsInlineCode>invalid</DocsInlineCode> on the label and{" "}
                <DocsInlineCode>aria-invalid</DocsInlineCode> on the input when
                validation fails.
              </>
            }
          >
            <DocsPreview code={fieldErrorFieldGroupSnippet}>
              <div className="flex w-full max-w-sm flex-col gap-[var(--space-stack-xs)]">
                <Label htmlFor="field-error-doc-email" invalid>
                  Email
                </Label>
                <Input
                  id="field-error-doc-email"
                  aria-invalid
                  aria-describedby="field-error-doc-message"
                  defaultValue="not-an-email"
                />
                <FieldError id="field-error-doc-message">
                  Enter a valid email address.
                </FieldError>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="with-icon"
            title="With Icon"
            description="Use showIcon for file validation and other errors that benefit from a warning glyph."
          >
            <DocsPreview code={fieldErrorIconSnippet}>
              <FieldError showIcon id="field-error-icon-example">
                Use file in .pdf, .jpeg or .png
              </FieldError>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={fieldErrorApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
