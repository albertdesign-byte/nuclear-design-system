"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/radio-group";
import {
  radioGroupDisabledSnippet,
  radioGroupHorizontalSnippet,
  radioGroupInstallationUiSnippet,
  radioGroupInvalidSnippet,
  radioGroupRealScreenSnippet,
  radioGroupSizeSnippet,
  radioGroupUsageSnippet,
  radioGroupWithLabelSnippet,
} from "@/components/docs/components/radio-group/radio-group-code-snippets";
import { RadioGroupVisitDemo } from "@/components/docs/components/radio-group/radio-group-docs-examples";
import { RadioGroupRealScreenPreview } from "@/components/docs/components/radio-group/radio-group-real-screen-preview";
import { radioGroupTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const radioGroupApiRows = [
  {
    prop: "defaultValue",
    type: "string",
    defaultValue: "—",
  },
  {
    prop: "value",
    type: "string",
    defaultValue: "—",
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

const radioGroupItemApiRows = [
  {
    prop: "value",
    type: "string",
    defaultValue: "required",
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
  },
  {
    prop: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
];

export function RadioGroupDocsPage() {
  return (
    <DocsComponentPage
      title="Radio Group"
      description="A set of checkable buttons where no more than one can be checked at a time."
      tocItems={radioGroupTocItems}
      realScreen={{
        preview: <RadioGroupRealScreenPreview />,
        code: radioGroupRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/checkbox" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Checkbox
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/switch" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Switch
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={radioGroupInstallationUiSnippet}>
              <div className="flex w-full max-w-md flex-col gap-[var(--space-stack-md)]">
                <RadioGroupVisitDemo />
                <RadioGroup defaultValue="morning">
                  <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                    <RadioGroupItem value="morning" />
                    Mañana
                  </label>
                  <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                    <RadioGroupItem value="afternoon" />
                    Tarde
                  </label>
                </RadioGroup>
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import{" "}
                <DocsInlineCode>RadioGroup</DocsInlineCode> and{" "}
                <DocsInlineCode>RadioGroupItem</DocsInlineCode> from{" "}
                <DocsInlineCode>@/components/radio-group</DocsInlineCode>.
                Each item requires a unique <DocsInlineCode>value</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={radioGroupUsageSnippet}>
              <RadioGroupVisitDemo />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                Set <DocsInlineCode>size</DocsInlineCode> on each{" "}
                <DocsInlineCode>RadioGroupItem</DocsInlineCode> to match
                surrounding control density.
              </>
            }
          >
            <DocsPreview code={radioGroupSizeSnippet}>
              <RadioGroup
                defaultValue="md"
                className="flex items-center gap-[var(--space-inline-md)]"
              >
                <RadioGroupItem value="sm" size="sm" aria-label="Small" />
                <RadioGroupItem value="md" size="md" aria-label="Medium" />
                <RadioGroupItem value="lg" size="lg" aria-label="Large" />
              </RadioGroup>
            </DocsPreview>
          </DocsSection>

          <StateSection
            id="disabled"
            title="Disabled"
            code={radioGroupDisabledSnippet}
            preview={
              <RadioGroupVisitDemo disabled defaultValue="in-person" />
            }
          />

          <StateSection
            id="invalid"
            title="Invalid"
            description={
              <>
                Set <DocsInlineCode>aria-invalid</DocsInlineCode> on the group
                when validation fails.
              </>
            }
            code={radioGroupInvalidSnippet}
            preview={<RadioGroupVisitDemo invalid />}
          />

          <DocsSection id="with-label" title="With Label">
            <DocsPreview code={radioGroupWithLabelSnippet}>
              <fieldset className="grid gap-[var(--space-stack-sm)]">
                <legend className="text-[length:var(--text-body-small-size)] font-medium leading-[var(--text-body-small-line-height)]">
                  Canal de contacto preferido
                </legend>
                <RadioGroup defaultValue="phone">
                  <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                    <RadioGroupItem value="phone" id="contact-phone-docs" />
                    <span>Teléfono</span>
                  </label>
                  <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                    <RadioGroupItem value="email" id="contact-email-docs" />
                    <span>Email</span>
                  </label>
                </RadioGroup>
              </fieldset>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="horizontal"
            title="Horizontal"
            description="Use flex layout on the group for inline option sets."
          >
            <DocsPreview code={radioGroupHorizontalSnippet}>
              <RadioGroup
                defaultValue="daily"
                className="flex flex-row flex-wrap gap-[var(--space-inline-md)]"
              >
                <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  <RadioGroupItem value="daily" />
                  Diario
                </label>
                <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  <RadioGroupItem value="weekly" />
                  Semanal
                </label>
                <label className="flex items-center gap-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  <RadioGroupItem value="monthly" />
                  Mensual
                </label>
              </RadioGroup>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              RadioGroup
            </h3>
            <DocsApiTable rows={radioGroupApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              RadioGroupItem
            </h3>
            <DocsApiTable rows={radioGroupItemApiRows} />
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
