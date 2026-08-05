"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { FieldError } from "@/components/field-error";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Label } from "@/components/label";
import {
  inputDisabledSnippet,
  inputFieldGroupSnippet,
  inputFileSnippet,
  inputFullWidthSnippet,
  inputInstallationUiSnippet,
  inputInvalidSnippet,
  inputPlaceholderSnippet,
  inputRealScreenSnippet,
  inputSizeSnippet,
  inputUsageSnippet,
} from "@/components/docs/components/input/input-code-snippets";
import { InputRealScreenPreview } from "@/components/docs/components/input/input-real-screen-preview";
import { inputTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const inputApiRows = [
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
  },
  {
    prop: "fullWidth",
    type: "boolean",
    defaultValue: "true",
  },
  {
    prop: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
  {
    prop: "placeholder",
    type: "string",
    defaultValue: "—",
  },
  {
    prop: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
  },
];

export function InputDocsPage() {
  return (
    <DocsComponentPage
      title="Input"
      description="Captures a single line of text from the user."
      tocItems={inputTocItems}
      realScreen={{
        preview: <InputRealScreenPreview />,
        code: inputRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/button" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Button
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/textarea" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Textarea
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={inputInstallationUiSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-inline-sm)]">
                <Input placeholder="Search patients…" />
                <Input defaultValue="Elena Morales" />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Input from{" "}
                <DocsInlineCode>@/components/input</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={inputUsageSnippet}>
              <Input placeholder="Patient name" className="max-w-xs" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                Use the <DocsInlineCode>size</DocsInlineCode> prop to align field
                height with adjacent buttons.
              </>
            }
          >
            <DocsPreview code={inputSizeSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-inline-sm)]">
                <Input size="sm" placeholder="Small" />
                <Input size="md" placeholder="Medium" />
                <Input size="lg" placeholder="Large" />
              </div>
            </DocsPreview>
          </DocsSection>

          <StateSection
            id="disabled"
            title="Disabled"
            code={inputDisabledSnippet}
            preview={<Input disabled placeholder="Disabled" className="max-w-xs" />}
          />

          <StateSection
            id="invalid"
            title="Invalid"
            description={
              <>
                Set <DocsInlineCode>aria-invalid</DocsInlineCode> when validation
                fails. Pair with an error message for screen readers.
              </>
            }
            code={inputInvalidSnippet}
            preview={
              <Input
                aria-invalid
                placeholder="Invalid value"
                className="max-w-xs"
              />
            }
          />

          <DocsSection
            id="field-group"
            title="Field Group"
            description={
              <>
                Pair <DocsInlineCode>Label</DocsInlineCode>,{" "}
                <DocsInlineCode>Input</DocsInlineCode>, and{" "}
                <DocsInlineCode>FieldError</DocsInlineCode> for validation
                feedback. Set <DocsInlineCode>invalid</DocsInlineCode> on the
                label and <DocsInlineCode>aria-invalid</DocsInlineCode> on the
                input when validation fails.
              </>
            }
          >
            <DocsPreview code={inputFieldGroupSnippet}>
              <div className="flex w-full max-w-sm flex-col gap-[var(--space-stack-xs)]">
                <Label htmlFor="input-field-group-email" invalid>
                  Email
                </Label>
                <Input
                  id="input-field-group-email"
                  aria-invalid
                  aria-describedby="input-field-group-error"
                  defaultValue="not-an-email"
                />
                <FieldError id="input-field-group-error">
                  Enter a valid email address.
                </FieldError>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="placeholder" title="Placeholder">
            <DocsPreview code={inputPlaceholderSnippet}>
              <Input
                placeholder="Search by MRN or patient name"
                className="max-w-sm"
              />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="full-width"
            title="Full Width"
            description={
              <>
                <DocsInlineCode>fullWidth</DocsInlineCode> is enabled by default.
                Use it in form layouts that span the container width.
              </>
            }
          >
            <DocsPreview code={inputFullWidthSnippet}>
              <div className="w-full max-w-md">
                <Input fullWidth placeholder="Full width field" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="file" title="File">
            <DocsPreview code={inputFileSnippet}>
              <Input type="file" className="max-w-xs" />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Input
            </h3>
            <DocsApiTable rows={inputApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function StateSection({
  id,
  title,
  code,
  preview,
  description,
}: {
  id: string;
  title: string;
  code: CodeLine[];
  preview: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <DocsSection id={id} title={title} description={description}>
      <DocsPreview code={code}>{preview}</DocsPreview>
    </DocsSection>
  );
}
