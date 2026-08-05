"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import { Textarea } from "@/components/textarea";
import {
  textareaDisabledSnippet,
  textareaFullWidthSnippet,
  textareaInstallationUiSnippet,
  textareaInvalidSnippet,
  textareaPlaceholderSnippet,
  textareaRealScreenSnippet,
  textareaSizeSnippet,
  textareaUsageSnippet,
} from "@/components/docs/components/textarea/textarea-code-snippets";
import { TextareaRealScreenPreview } from "@/components/docs/components/textarea/textarea-real-screen-preview";
import { textareaTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const textareaApiRows = [
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

export function TextareaDocsPage() {
  return (
    <DocsComponentPage
      title="Textarea"
      description="Captures multi-line text from the user."
      tocItems={textareaTocItems}
      realScreen={{
        preview: <TextareaRealScreenPreview />,
        code: textareaRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/input" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Input
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/select" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Select
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={textareaInstallationUiSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-inline-sm)]">
                <Textarea placeholder="Clinical notes…" />
                <Textarea defaultValue="Patient reports mild discomfort. No acute symptoms." />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Textarea from{" "}
                <DocsInlineCode>@/components/textarea</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={textareaUsageSnippet}>
              <Textarea placeholder="Clinical notes" className="max-w-md" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                Use the <DocsInlineCode>size</DocsInlineCode> prop to control
                minimum height and padding scale.
              </>
            }
          >
            <DocsPreview code={textareaSizeSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-inline-sm)]">
                <Textarea size="sm" placeholder="Small" />
                <Textarea size="md" placeholder="Medium" />
                <Textarea size="lg" placeholder="Large" />
              </div>
            </DocsPreview>
          </DocsSection>

          <StateSection
            id="disabled"
            title="Disabled"
            code={textareaDisabledSnippet}
            preview={
              <Textarea disabled placeholder="Disabled" className="max-w-md" />
            }
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
            code={textareaInvalidSnippet}
            preview={
              <Textarea
                aria-invalid
                placeholder="Invalid value"
                className="max-w-md"
              />
            }
          />

          <DocsSection id="placeholder" title="Placeholder">
            <DocsPreview code={textareaPlaceholderSnippet}>
              <Textarea
                placeholder="Describe symptoms, history, or follow-up plan"
                className="max-w-md"
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
            <DocsPreview code={textareaFullWidthSnippet}>
              <div className="w-full max-w-md">
                <Textarea fullWidth placeholder="Full width field" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Textarea
            </h3>
            <DocsApiTable rows={textareaApiRows} />
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
