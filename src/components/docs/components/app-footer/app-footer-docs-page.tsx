"use client";

import {
  ExternalLinkIcon,
  KeyboardIcon,
  LayoutTemplateIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { AppFooter } from "@/components/app-footer";
import {
  appFooterAccessibilitySnippet,
  appFooterCustomLinksSnippet,
  appFooterInstallationUiSnippet,
  appFooterLogoSnippet,
  appFooterNavigationSnippet,
  appFooterRealScreenSnippet,
  appFooterResponsiveSnippet,
  appFooterStatesSnippet,
  appFooterUsageSnippet,
} from "@/components/docs/components/app-footer/app-footer-code-snippets";
import {
  FooterGuidelineCard,
  FooterLinkStatesPreview,
  FooterResponsivePreview,
} from "@/components/docs/components/app-footer/app-footer-preview-blocks";
import { AppFooterRealScreenPreview } from "@/components/docs/components/app-footer/app-footer-real-screen-preview";
import { PatientsAppFooterPreview } from "@/components/docs/components/app-footer/patients-app-footer-preview";
import { appFooterTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
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
    defaultValue: "Privacy Policy, Contact Us",
  },
  {
    prop: "logoHref",
    type: "string",
    defaultValue: '"https://medmo.com/"',
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

const accessibilityItems = [
  {
    title: "Keyboard Navigation",
    description:
      "Tab follows the visual order: logo, About Medmo, Contact Us, Resources, then Support. Enter activates the focused link.",
  },
  {
    title: "Focus States",
    description:
      "Every interactive item uses the same high-contrast focus ring and offset on the primary background. Focus is never represented by color alone.",
  },
  {
    title: "Link Accessibility",
    description:
      "Visible labels identify each destination. Phone and email use native tel: and mailto: links, while the logo link has a descriptive accessible name.",
  },
  {
    title: "External Links",
    description:
      "Website links open in a new tab, use noopener noreferrer, and announce that behavior to assistive technology.",
  },
];

export function AppFooterDocsPage() {
  return (
    <DocsComponentPage
      title="App Footer"
      description="A responsive application footer that reinforces Medmo branding, groups essential navigation, and provides predictable keyboard and link behavior."
      tocItems={appFooterTocItems}
      realScreen={{
        preview: <AppFooterRealScreenPreview />,
        code: appFooterRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={appFooterInstallationUiSnippet}>
              <PatientsAppFooterPreview device="desktop" />
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/app-footer</DocsInlineCode>. Use the{" "}
                <DocsInlineCode>patients</DocsInlineCode> variant for Medmo
                patient experiences and place one Footer after the main content.
              </>
            }
          >
            <DocsPreview code={appFooterUsageSnippet}>
              <PatientsAppFooterPreview device="desktop" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="branding"
            title="Branding and Logo"
            description="The complete Medmo lockup uses a 48px icon and proportional wordmark for stronger visual presence. It remains aligned to the navigation grid and never stretches."
          >
            <DocsPreview code={appFooterLogoSnippet}>
              <PatientsAppFooterPreview device="desktop" />
            </DocsPreview>
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              The logo is a link to the official Medmo website. Its visible
              hover surface and high-contrast focus ring match the inverse
              Footer link contract.
            </p>
          </DocsSection>

          <DocsSection
            id="navigation"
            title="Footer Navigation"
            description="About Medmo, Contact Us, Resources, and Support use the same heading, divider, spacing, typography, and interaction treatment."
          >
            <DocsPreview code={appFooterNavigationSnippet}>
              <PatientsAppFooterPreview device="desktop" />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="interaction-states"
            title="Interaction States"
            description="Default, hover, focus, and active states are consistent across contact, informational, resource, support, and legal links."
          >
            <DocsPreview code={appFooterStatesSnippet}>
              <FooterLinkStatesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="responsive-behavior"
            title="Responsive Behavior"
            description="Mobile stacks the brand and groups. Tablet uses a two-column navigation grid. Desktop presents four navigation groups beside the brand block. Long labels wrap instead of overflowing."
          >
            <DocsPreview code={appFooterResponsiveSnippet}>
              <FooterResponsivePreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Footer navigation uses native links, a named navigation landmark, visible focus, and explicit external-link behavior."
          >
            <DocsPreview code={appFooterAccessibilitySnippet}>
              <div className="grid w-full gap-[var(--space-grid-gap)] sm:grid-cols-2">
                {accessibilityItems.map(({ title, description }) => (
                  <article
                    key={title}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
                  >
                    <h3 className="text-[length:var(--text-label-size)] font-semibold text-[var(--color-text-primary)]">
                      {title}
                    </h3>
                    <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
                      {description}
                    </p>
                  </article>
                ))}
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="footer-guidelines"
            title="Footer Guidelines"
            description="Use Footer as stable application-level navigation and support context, not as a container for primary workflows."
          >
            <div className="grid gap-[var(--space-grid-gap)] md:grid-cols-2">
              <FooterGuidelineCard
                title="When to use"
                description="Place Footer at the end of complete application pages or flows where Medmo identity, support, and policy access must remain available."
                correct="Use one Footer after main content."
                incorrect="Repeat Footer inside cards, dialogs, or partial views."
                icon={LayoutTemplateIcon}
              />
              <FooterGuidelineCard
                title="What to include"
                description="Include the approved brand lockup, current copyright, contact details, support, essential resources, and legal or privacy destinations."
                correct="Keep labels concise and destinations maintained."
                incorrect="Add duplicate, ambiguous, or ownerless links."
                icon={ShieldCheckIcon}
              />
              <FooterGuidelineCard
                title="What to avoid"
                description="Do not place primary tasks, patient data, urgent clinical alerts, dense navigation trees, promotional banners, or disabled links in Footer."
                correct="Keep clinical actions in the main workflow."
                incorrect="Use Footer as a catch-all navigation area."
                icon={KeyboardIcon}
              />
              <FooterGuidelineCard
                title="External destinations"
                description="External links must use safe new-tab behavior and communicate it to assistive technology. Phone and email retain native platform behavior."
                correct="Use clear destination labels and valid URLs."
                incorrect="Use placeholder # links or hide new-tab behavior."
                icon={ExternalLinkIcon}
              />
            </div>
          </DocsSection>

          <DocsSection
            id="default-variant"
            title="Default Variant"
            description="Use the compact default variant only for neutral shells that need copyright and a short legal link list."
          >
            <DocsPreview code={appFooterCustomLinksSnippet}>
              <AppFooter variant="default" device="desktop" className="w-full" />
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
