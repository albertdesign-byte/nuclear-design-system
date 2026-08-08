"use client";

import Link from "next/link";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpIcon,
  PlusIcon,
} from "lucide-react";

import { Button } from "@/components/button";
import {
  buttonAsLinkSnippet,
  buttonDangerSnippet,
  buttonFullWidthSnippet,
  buttonGhostSnippet,
  buttonGroupSnippet,
  buttonIconSnippet,
  buttonInstallationUiSnippet,
  buttonLoadingSnippet,
  buttonOutlineSnippet,
  buttonPrimarySnippet,
  buttonRealScreenSnippet,
  buttonSecondarySnippet,
  buttonSizeSnippet,
  buttonUsageSnippet,
  buttonWithIconSnippet,
} from "@/components/docs/components/button/button-code-snippets";
import { ButtonRealScreenPreview } from "@/components/docs/components/button/button-real-screen-preview";
import { buttonTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import type { CodeLine, ComponentCodeExample } from "@/components/docs/primitives/docs-preview";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const buttonApiRows = [
  {
    prop: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost"',
    defaultValue: '"primary"',
  },
  {
    prop: "intent",
    type: '"default" | "danger"',
    defaultValue: '"default"',
  },
  {
    prop: "size",
    type: '"sm" | "md" | "lg" | "xl" | "xxl" | "icon-sm" | "icon-md" | "icon-lg" | "icon-xl" | "icon-xxl"',
    defaultValue: '"md"',
  },
  {
    prop: "loading",
    type: "boolean",
    defaultValue: "false",
  },
  {
    prop: "fullWidth",
    type: "boolean",
    defaultValue: "false",
  },
  {
    prop: "disabled",
    type: "boolean",
    defaultValue: "false",
  },
];

export function ButtonDocsPage() {
  return (
    <DocsComponentPage
      title="Button"
      description="Displays a button or a component that looks like a button."
      tocItems={buttonTocItems}
      realScreen={{
        preview: <ButtonRealScreenPreview />,
        code: buttonRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            disabled
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Bubble
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/input" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Input
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={buttonInstallationUiSnippet}>
              <div className="flex flex-wrap items-center gap-[0.625rem]">
                <Button variant="outline">Button</Button>
                <Button variant="outline" size="icon-md" aria-label="Submit">
                  <ArrowUpIcon />
                </Button>
              </div>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import the Medmo Button from{" "}
                <DocsInlineCode>@/components/button</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={buttonUsageSnippet}>
              <Button>Save changes</Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="size"
            title="Size"
            description={
              <>
                Use the <DocsInlineCode>size</DocsInlineCode> prop to change the
                scale of the button.
              </>
            }
          >
            <DocsPreview code={buttonSizeSnippet}>
              <div className="flex flex-wrap items-end gap-[var(--space-inline-sm)]">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra large</Button>
                <Button size="xxl">2× large</Button>
              </div>
            </DocsPreview>
          </DocsSection>

          <VariantSection
            id="primary"
            title="Primary"
            code={buttonPrimarySnippet}
            preview={<Button>Primary</Button>}
          />

          <VariantSection
            id="outline"
            title="Outline"
            code={buttonOutlineSnippet}
            preview={<Button variant="outline">Outline</Button>}
          />

          <VariantSection
            id="secondary"
            title="Secondary"
            code={buttonSecondarySnippet}
            preview={<Button variant="secondary">Secondary</Button>}
          />

          <VariantSection
            id="ghost"
            title="Ghost"
            code={buttonGhostSnippet}
            preview={<Button variant="ghost">Ghost</Button>}
          />

          <VariantSection
            id="danger"
            title="Danger"
            code={buttonDangerSnippet}
            preview={
              <Button intent="danger" variant="outline">
                Delete
              </Button>
            }
          />

          <DocsSection id="icon" title="Icon">
            <DocsPreview code={buttonIconSnippet}>
              <Button size="icon-md" aria-label="Submit">
                <ArrowUpIcon />
              </Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="with-icon" title="With Icon">
            <DocsPreview code={buttonWithIconSnippet}>
              <Button>
                <PlusIcon />
                New patient
              </Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="loading" title="Loading">
            <DocsPreview code={buttonLoadingSnippet}>
              <Button loading loadingLabel="Saving…">
                Save
              </Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="full-width"
            title="Full Width"
            description={
              <>
                Use <DocsInlineCode>fullWidth</DocsInlineCode> for stacked actions
                in narrow layouts or sidebar panels.
              </>
            }
          >
            <DocsPreview code={buttonFullWidthSnippet}>
              <div className="w-full max-w-xs">
                <Button fullWidth>Save changes</Button>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="button-group"
            title="Button Group"
            description="Group related actions with consistent spacing. Prefer outline for cancel and primary for commit."
          >
            <DocsPreview code={buttonGroupSnippet}>
              <div className="flex flex-wrap gap-[var(--space-inline-sm)]">
                <Button variant="outline">Cancel</Button>
                <Button>Save changes</Button>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="as-link"
            title="As Link"
            description={
              <>
                Use <DocsInlineCode>render</DocsInlineCode> with Base UI for
                navigation-style actions when a native link is required.
              </>
            }
          >
            <DocsPreview code={buttonAsLinkSnippet}>
              <Button render={<Link href="/" />}>Home</Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Button
            </h3>
            <DocsApiTable rows={buttonApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}

function VariantSection({
  id,
  title,
  code,
  preview,
}: {
  id: string;
  title: string;
  code: CodeLine[] | ComponentCodeExample;
  preview: React.ReactNode;
}) {
  return (
    <DocsSection id={id} title={title}>
      <DocsPreview code={code}>{preview}</DocsPreview>
    </DocsSection>
  );
}
