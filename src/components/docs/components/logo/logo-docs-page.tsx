"use client";

import { MedmoLogo, MedmoLogoLockup } from "@/components/brand";
import {
  logoInstallationUiSnippet,
  logoLockupSnippet,
  logoRealScreenSnippet,
  logoUsageSnippet,
} from "@/components/docs/components/logo/logo-code-snippets";
import { LogoRealScreenPreview } from "@/components/docs/components/logo/logo-real-screen-preview";
import { logoTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const logoApiRows = [
  {
    prop: "className",
    type: "string",
    defaultValue: "undefined",
  },
];

const logoLockupApiRows = [
  {
    prop: "className",
    type: "string",
    defaultValue: "undefined",
  },
  {
    prop: "iconClassName",
    type: "string",
    defaultValue: "undefined",
  },
];

export function LogoDocsPage() {
  return (
    <DocsComponentPage
      title="Logo"
      description="Medmo brand mark and lockup used across application shells and documentation chrome."
      tocItems={logoTocItems}
      realScreen={{
        preview: <LogoRealScreenPreview />,
        code: logoRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={logoInstallationUiSnippet}>
              <MedmoLogoLockup />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/brand</DocsInlineCode>.
                Use <DocsInlineCode>MedmoLogo</DocsInlineCode> for the icon-only
                mark in compact spaces such as sidebars and favicons.
              </>
            }
          >
            <DocsPreview code={logoUsageSnippet}>
              <MedmoLogo className="size-8" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="lockup"
            title="Lockup"
            description={
              <>
                Use <DocsInlineCode>MedmoLogoLockup</DocsInlineCode> for the
                Patients application shell pattern: icon plus the{" "}
                <DocsInlineCode>medmo</DocsInlineCode> wordmark.
              </>
            }
          >
            <DocsPreview code={logoLockupSnippet}>
              <MedmoLogoLockup />
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              MedmoLogo
            </h3>
            <DocsApiTable rows={logoApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-md)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              MedmoLogoLockup
            </h3>
            <DocsApiTable rows={logoLockupApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
