"use client";

import Link from "next/link";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";

import { AppFooter } from "@/components/app-footer";
import { Button } from "@/components/button";
import {
  appFooterCustomLinksSnippet,
  appFooterInstallationUiSnippet,
  appFooterMobileSnippet,
  appFooterRealScreenSnippet,
  appFooterTabletSnippet,
  appFooterUsageSnippet,
} from "@/components/docs/components/app-footer/app-footer-code-snippets";
import { AppFooterRealScreenPreview } from "@/components/docs/components/app-footer/app-footer-real-screen-preview";
import { PatientsAppFooterPreview } from "@/components/docs/components/app-footer/patients-app-footer-preview";
import { appFooterTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const appFooterApiRows = [
  {
    prop: "variant",
    type: '"default" | "patients"',
    defaultValue: '"default"',
  },
  {
    prop: "device",
    type: '"mobile" | "tablet" | "desktop"',
    defaultValue: '"desktop"',
  },
  {
    prop: "links",
    type: "AppFooterLink[]",
    defaultValue: "Privacy Policy, Terms of Service",
  },
  {
    prop: "copyright",
    type: "string",
    defaultValue: "Current year Medmo",
  },
  {
    prop: "className",
    type: "string",
    defaultValue: "undefined",
  },
];

export function AppFooterDocsPage() {
  return (
    <DocsComponentPage
      title="App Footer"
      description="Patients application shell footer with brand block, contact details, and legal links from the Figma Device variants."
      tocItems={appFooterTocItems}
      realScreen={{
        preview: <AppFooterRealScreenPreview />,
        code: appFooterRealScreenSnippet,
      }}
      footer={
        <footer className="flex items-center justify-between border-t border-[var(--docs-chrome-border)] pt-[var(--space-stack-md)]">
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/logo" />}
            className="gap-[var(--space-inline-sm)]"
          >
            <ArrowLeftIcon />
            Logo
          </Button>
          <Button
            variant="ghost"
            size="sm"
            render={<Link href="/docs/components/data-table" />}
            className="gap-[var(--space-inline-sm)]"
          >
            Data Table
            <ArrowRightIcon />
          </Button>
        </footer>
      }
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={appFooterInstallationUiSnippet}>
              <PatientsAppFooterPreview />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/app-footer</DocsInlineCode>.
                Use <DocsInlineCode>variant="patients"</DocsInlineCode> for the
                Patients intake footer shown in the product map.
              </>
            }
          >
            <DocsPreview code={appFooterUsageSnippet}>
              <PatientsAppFooterPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="mobile"
            title="Mobile"
            description="Default Patients footer layout with stacked sections and safe-area padding."
          >
            <DocsPreview code={appFooterMobileSnippet}>
              <PatientsAppFooterPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="tablet"
            title="Tablet"
            description="Same content block constrained for medium-width layouts."
          >
            <DocsPreview code={appFooterTabletSnippet}>
              <PatientsAppFooterPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="custom-links"
            title="Default Variant"
            description="Simple legal footer variant for layouts that only need policy links."
          >
            <DocsPreview code={appFooterCustomLinksSnippet}>
              <AppFooter variant="default" device="desktop" className="w-full max-w-sm" />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <DocsApiTable rows={appFooterApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
