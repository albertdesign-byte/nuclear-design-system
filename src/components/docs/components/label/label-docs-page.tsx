"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { FieldError } from "@/components/field-error";
import { Button } from "@/components/button";
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
      description="Renders an accessible label associated with a form control."
      tocItems={labelTocItems}
      realScreen={{
        preview: <LabelRealScreenPreview />,
        code: labelRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/sonner" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Sonner
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/popover" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Popover
            <ArrowRightIcon />
          </Button>
        </footer>
      }
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
