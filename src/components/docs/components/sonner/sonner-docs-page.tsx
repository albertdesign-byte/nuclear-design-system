"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/button";
import {
  sonnerInstallationUiSnippet,
  sonnerLoadingSnippet,
  sonnerProviderSnippet,
  sonnerRealScreenSnippet,
  sonnerSuccessSnippet,
  sonnerUsageSnippet,
} from "@/components/docs/components/sonner/sonner-code-snippets";
import { SonnerRealScreenPreview } from "@/components/docs/components/sonner/sonner-real-screen-preview";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

export const sonnerTocItems = [
  { id: "installation", label: "Installation" },
  { id: "usage", label: "Usage" },
  { id: "success", label: "Success" },
  { id: "loading", label: "Loading" },
  { id: "provider", label: "Provider" },
  { id: "api-reference", label: "API Reference" },
];

const sonnerApiRows = [
  { prop: "theme", type: '"light" | "dark" | "system"', defaultValue: '"system"' },
  { prop: "position", type: "ToasterProps position", defaultValue: '"top-right"' },
  { prop: "richColors", type: "boolean", defaultValue: "false" },
  { prop: "closeButton", type: "boolean", defaultValue: "false" },
];

export function SonnerDocsPage() {
  return (
    <DocsComponentPage
      title="Sonner"
      description="Toast notifications with theme-aware Foundation tokens."
      tocItems={sonnerTocItems}
      realScreen={{
        preview: <SonnerRealScreenPreview />,
        code: sonnerRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/spinner" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Spinner
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/label" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Label
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={sonnerInstallationUiSnippet}>
              <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
                Mount once near the app root. AppProviders already includes a
                tokenized Toaster.
              </p>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Call <DocsInlineCode>toast()</DocsInlineCode> from{" "}
                <DocsInlineCode>sonner</DocsInlineCode> after mounting{" "}
                <DocsInlineCode>Toaster</DocsInlineCode> from{" "}
                <DocsInlineCode>@/components/sonner</DocsInlineCode>.
              </>
            }
          >
            <DocsPreview code={sonnerUsageSnippet}>
              <Button onClick={() => toast("Event created")}>Show toast</Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="success" title="Success">
            <DocsPreview code={sonnerSuccessSnippet}>
              <Button
                onClick={() =>
                  toast.success("Registro guardado", {
                    description:
                      "Los cambios del paciente se sincronizaron correctamente.",
                  })
                }
              >
                Success toast
              </Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="loading" title="Loading">
            <DocsPreview code={sonnerLoadingSnippet}>
              <Button
                onClick={() => {
                  const toastId = toast.loading("Guardando registro…");
                  window.setTimeout(() => {
                    toast.success("Registro guardado", { id: toastId });
                  }, 1200);
                }}
              >
                Loading toast
              </Button>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="provider" title="Provider">
            <DocsPreview code={sonnerProviderSnippet}>
              <p className="text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
                CSS variables map to Foundation surfaces, borders, and semantic
                status colors.
              </p>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              Toaster
            </h3>
            <DocsApiTable rows={sonnerApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
