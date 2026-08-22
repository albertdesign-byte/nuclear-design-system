"use client";

import { FieldError } from "@/components/field-error";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  labelDisabledSnippet,
  labelInstallationUiSnippet,
  labelInvalidSnippet,
  labelRealScreenSnippet,
  labelUsageSnippet,
} from "@/components/docs/components/label/label-code-snippets";
import { LabelRealScreenPreview } from "@/components/docs/components/label/label-real-screen-preview";
import { labelTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const labelApiRows = [
  { prop: "htmlFor", type: "string", defaultValue: "—" },
  { prop: "invalid", type: "boolean", defaultValue: "false" },
  { prop: "className", type: "string", defaultValue: "undefined" },
];

export function LabelDocsPage() {
  return (
    <DocsComponentPage
      title="Label"
      description="Supported primitive for visible field labels. Prefer a Field composite when one exists; use Label with controls that currently have no Field wrapper."
      tocItems={labelTocItems}
      realScreen={{
        preview: <LabelRealScreenPreview />,
        code: labelRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={labelInstallationUiSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-sm)]">
                <Label htmlFor="name">Patient name</Label>
                <Input id="name" placeholder="Enter full legal name" />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Label from{" "}
                <DocsInlineCode>@/components/label</DocsInlineCode>. Pair with{" "}
                <DocsInlineCode>htmlFor</DocsInlineCode> and matching control{" "}
                <DocsInlineCode>id</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={labelUsageSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-sm)]">
                <Label htmlFor="patient-name">Patient name</Label>
                <Input id="patient-name" placeholder="Enter full legal name" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="guidelines"
            title="Guidelines"
            description="Label sigue siendo un primitive soportado para controles que actualmente no tienen un Field composite correspondiente. Los componentes Field siguen siendo la API preferida siempre que exista uno."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                Prefer Field composites whenever a corresponding Field exists:{" "}
                <DocsInlineCode>InputField</DocsInlineCode>,{" "}
                <DocsInlineCode>SelectField</DocsInlineCode>,{" "}
                <DocsInlineCode>SearchableSelectField</DocsInlineCode>,{" "}
                <DocsInlineCode>MultiSelectField</DocsInlineCode>, and similar
                wrappers. See the{" "}
                <DocsInlineCode>Form Field Patterns</DocsInlineCode> guide for
                those recipes.
              </li>
              <li>
                Keep using <DocsInlineCode>Label</DocsInlineCode> with controls
                that have no Field composite today:{" "}
                <DocsInlineCode>DatePicker</DocsInlineCode>,{" "}
                <DocsInlineCode>Textarea</DocsInlineCode>,{" "}
                <DocsInlineCode>Switch</DocsInlineCode>,{" "}
                <DocsInlineCode>DayToggleGroup</DocsInlineCode>, and other
                legitimate product or userflow Label + control compositions.
              </li>
              <li>
                Using <DocsInlineCode>Label</DocsInlineCode> outside a Field is
                not an architectural problem and is not an open gap. Label stays
                public in code and exports.
              </li>
            </ul>
          </DocsSection>

          <DocsSection
            id="disabled"
            title="Disabled"
            description="Wrap disabled fields in a group with data-disabled for muted label styling."
          >
            <DocsPreview code={labelDisabledSnippet}>
              <div
                className="group flex w-full max-w-md flex-col gap-[var(--space-stack-sm)]"
                data-disabled="true"
              >
                <Label htmlFor="mrn">Medical record number</Label>
                <Input id="mrn" disabled defaultValue="MRN-48291" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="invalid"
            title="Invalid"
            description={
              <>
                Set <DocsInlineCode>invalid</DocsInlineCode> when the associated
                field has failed validation. Pair with{" "}
                <DocsInlineCode>FieldError</DocsInlineCode> and{" "}
                <DocsInlineCode>aria-invalid</DocsInlineCode> on the control.
              </>
            }
          >
            <DocsPreview code={labelInvalidSnippet}>
              <div className="flex w-full max-w-sm flex-col gap-[var(--space-stack-xs)]">
                <Label htmlFor="label-invalid-email" invalid>
                  Email
                </Label>
                <Input
                  id="label-invalid-email"
                  aria-invalid
                  aria-describedby="label-invalid-error"
                  defaultValue="not-an-email"
                />
                <FieldError id="label-invalid-error">
                  Enter a valid email address.
                </FieldError>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Label
            </h3>
            <DocsApiTable rows={labelApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
