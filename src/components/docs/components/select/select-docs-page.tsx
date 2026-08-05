"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  selectDisabledSnippet,
  selectFullWidthSnippet,
  selectInstallationUiSnippet,
  selectInvalidSnippet,
  selectPlaceholderSnippet,
  selectRealScreenSnippet,
  selectSizeSnippet,
  selectUsageSnippet,
} from "@/components/docs/components/select/select-code-snippets";
import {
  SelectInsuranceDemo,
  SelectStatusDemo,
} from "@/components/docs/components/select/select-docs-examples";
import { SelectRealScreenPreview } from "@/components/docs/components/select/select-real-screen-preview";
import { selectTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const selectApiRows = [
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
    prop: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
  },
];

export function SelectDocsPage() {
  return (
    <DocsComponentPage
      title="Select"
      description="Displays a list of options for the user to pick from."
      tocItems={selectTocItems}
      realScreen={{
        preview: <SelectRealScreenPreview />,
        code: selectRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/textarea" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Textarea
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/checkbox" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Checkbox
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={selectInstallationUiSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-inline-sm)]">
                <SelectStatusDemo className="max-w-none" />
                <SelectInsuranceDemo className="max-w-none" />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Select primitives from{" "}
                <DocsInlineCode>@/components/select</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={selectUsageSnippet}>
              <SelectStatusDemo className="max-w-xs" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                Use the <DocsInlineCode>size</DocsInlineCode> prop on{" "}
                <DocsInlineCode>SelectTrigger</DocsInlineCode> to align with
                Input heights.
              </>
            }
          >
            <DocsPreview code={selectSizeSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-inline-sm)]">
                <SelectStatusDemo size="sm" className="max-w-none" />
                <SelectStatusDemo size="md" className="max-w-none" />
                <SelectStatusDemo size="lg" className="max-w-none" />
              </div>
            </DocsPreview>
          </DocsSection>

          <StateSection
            id="disabled"
            title="Disabled"
            code={selectDisabledSnippet}
            preview={
              <SelectStatusDemo disabled className="max-w-xs" />
            }
          />

          <StateSection
            id="invalid"
            title="Invalid"
            description={
              <>
                Set <DocsInlineCode>aria-invalid</DocsInlineCode> on{" "}
                <DocsInlineCode>SelectTrigger</DocsInlineCode> when validation
                fails.
              </>
            }
            code={selectInvalidSnippet}
            preview={
              <SelectStatusDemo
                invalid
                defaultValue=""
                placeholder="Invalid value"
                className="max-w-xs"
              />
            }
          />

          <DocsSection id="placeholder" title="Placeholder">
            <DocsPreview code={selectPlaceholderSnippet}>
              <SelectStatusDemo
                defaultValue=""
                placeholder="Select appointment type"
                className="max-w-xs"
              />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="full-width"
            title="Full Width"
            description={
              <>
                <DocsInlineCode>fullWidth</DocsInlineCode> is enabled by default
                on <DocsInlineCode>SelectTrigger</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={selectFullWidthSnippet}>
              <div className="w-full max-w-md">
                <SelectStatusDemo fullWidth className="max-w-none" />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              SelectTrigger
            </h3>
            <DocsApiTable rows={selectApiRows} />
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
