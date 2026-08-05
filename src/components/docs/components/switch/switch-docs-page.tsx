"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { Button } from "@/components/button";
import { Switch } from "@/components/switch";
import {
  switchCheckedSnippet,
  switchDisabledSnippet,
  switchInstallationUiSnippet,
  switchInvalidSnippet,
  switchRealScreenSnippet,
  switchSizeSnippet,
  switchUsageSnippet,
  switchWithLabelSnippet,
} from "@/components/docs/components/switch/switch-code-snippets";
import { SwitchRealScreenPreview } from "@/components/docs/components/switch/switch-real-screen-preview";
import { switchTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const switchApiRows = [
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
    prop: "defaultChecked",
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

export function SwitchDocsPage() {
  return (
    <DocsComponentPage
      title="Switch"
      description="A control that toggles between two states."
      tocItems={switchTocItems}
      realScreen={{
        preview: <SwitchRealScreenPreview />,
        code: switchRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/radio-group" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Radio Group
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/badge" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Badge
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={switchInstallationUiSnippet}>
              <div className="flex items-center gap-[var(--space-inline-md)]">
                <Switch defaultChecked aria-label="Enable reminders" />
                <Switch aria-label="Enable notifications" />
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Switch from{" "}
                <DocsInlineCode>@/components/switch</DocsInlineCode>.
                Standalone switches require an{" "}
                <DocsInlineCode>aria-label</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={switchUsageSnippet}>
              <Switch defaultChecked aria-label="Enable reminders" />
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
            <DocsPreview code={switchSizeSnippet}>
              <div className="flex items-center gap-[var(--space-inline-md)]">
                <Switch size="sm" defaultChecked aria-label="Small" />
                <Switch size="md" defaultChecked aria-label="Medium" />
                <Switch size="lg" defaultChecked aria-label="Large" />
              </div>
            </DocsPreview>
          </DocsSection>

          <StateSection
            id="checked"
            title="Checked"
            code={switchCheckedSnippet}
            preview={
              <div className="flex items-center gap-[var(--space-inline-md)]">
                <Switch aria-label="Off" />
                <Switch defaultChecked aria-label="On" />
              </div>
            }
          />

          <StateSection
            id="disabled"
            title="Disabled"
            code={switchDisabledSnippet}
            preview={
              <div className="flex items-center gap-[var(--space-inline-md)]">
                <Switch disabled aria-label="Disabled off" />
                <Switch disabled defaultChecked aria-label="Disabled on" />
              </div>
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
            code={switchInvalidSnippet}
            preview={<Switch aria-invalid aria-label="Invalid" />}
          />

          <DocsSection id="with-label" title="With Label">
            <DocsPreview code={switchWithLabelSnippet}>
              <div className="flex max-w-md items-center justify-between gap-[var(--space-inline-md)]">
                <label
                  htmlFor="lab-alerts-docs"
                  className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]"
                >
                  Alertas de resultados críticos
                </label>
                <Switch id="lab-alerts-docs" defaultChecked />
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Switch
            </h3>
            <DocsApiTable rows={switchApiRows} />
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
