"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import { Checkbox } from "@/components/checkbox";
import {
  checkboxCheckedSnippet,
  checkboxDisabledSnippet,
  checkboxIndeterminateSnippet,
  checkboxInstallationUiSnippet,
  checkboxInvalidSnippet,
  checkboxRealScreenSnippet,
  checkboxSizeSnippet,
  checkboxUsageSnippet,
  checkboxWithLabelSnippet,
} from "@/components/docs/components/checkbox/checkbox-code-snippets";
import { CheckboxRealScreenPreview } from "@/components/docs/components/checkbox/checkbox-real-screen-preview";
import { checkboxTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const checkboxApiRows = [
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
  },
  {
    prop: "checked",
    type: "boolean",
    defaultValue: "false",
  },
  {
    prop: "indeterminate",
    type: "boolean",
    defaultValue: "false",
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

export function CheckboxDocsPage() {
  return (
    <DocsComponentPage
      title="Checkbox"
      description="A control that allows the user to toggle between checked and not checked."
      tocItems={checkboxTocItems}
      realScreen={{
        preview: <CheckboxRealScreenPreview />,
        code: checkboxRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/select" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Select
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/radio-group" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Radio Group
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={checkboxInstallationUiSnippet}>
              <div className="flex items-center gap-[var(--space-inline-md)]">
                <Checkbox defaultChecked aria-label="Accept terms" />
                <Checkbox aria-label="Enable notifications" />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Checkbox from{" "}
                <DocsInlineCode>@/components/checkbox</DocsInlineCode>.
                Icon-only checkboxes require an{" "}
                <DocsInlineCode>aria-label</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={checkboxUsageSnippet}>
              <Checkbox defaultChecked aria-label="Accept terms" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                Use the <DocsInlineCode>size</DocsInlineCode> prop to match
                surrounding control density.
              </>
            }
          >
            <DocsPreview code={checkboxSizeSnippet}>
              <div className="flex items-center gap-[var(--space-inline-md)]">
                <Checkbox size="sm" defaultChecked aria-label="Small" />
                <Checkbox size="md" defaultChecked aria-label="Medium" />
                <Checkbox size="lg" defaultChecked aria-label="Large" />
              </div>
            </DocsPreview>
          </DocsSection>

          <StateSection
            id="checked"
            title="Checked"
            code={checkboxCheckedSnippet}
            preview={
              <div className="flex items-center gap-[var(--space-inline-md)]">
                <Checkbox aria-label="Unchecked" />
                <Checkbox defaultChecked aria-label="Checked" />
              </div>
            }
          />

          <StateSection
            id="indeterminate"
            title="Indeterminate"
            description="Use for parent checkboxes in grouped selections."
            code={checkboxIndeterminateSnippet}
            preview={<Checkbox indeterminate aria-label="Indeterminate" />}
          />

          <StateSection
            id="disabled"
            title="Disabled"
            code={checkboxDisabledSnippet}
            preview={
              <Checkbox disabled defaultChecked aria-label="Disabled" />
            }
          />

          <StateSection
            id="invalid"
            title="Invalid"
            description={
              <>
                Set <DocsInlineCode>aria-invalid</DocsInlineCode> when validation
                fails.
              </>
            }
            code={checkboxInvalidSnippet}
            preview={<Checkbox aria-invalid aria-label="Invalid" />}
          />

          <DocsSection id="with-label" title="With Label">
            <DocsPreview code={checkboxWithLabelSnippet}>
              <label className="flex max-w-md items-start gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                <Checkbox id="lab-results" defaultChecked />
                <span>
                  Compartir resultados de laboratorio con el equipo tratante
                </span>
              </label>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Checkbox
            </h3>
            <DocsApiTable rows={checkboxApiRows} />
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
