"use client";

import {
  Layers3Icon,
  Maximize2Icon,
  Rows3Icon,
  ScanLineIcon,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/card";
import {
  cardAccessibilitySnippet,
  cardFlexibilitySnippet,
  cardHealthcareSnippet,
  cardInstallationUiSnippet,
  cardRealScreenSnippet,
  cardResponsiveSnippet,
  cardUsageSnippet,
  cardVariantsSnippet,
} from "@/components/docs/components/card/card-code-snippets";
import {
  CardContentFlexibilityPreview,
  CardGuidelineCard,
  CardResponsivePreview,
  CardVariantsPreview,
  HealthcareCardExamplesPreview,
} from "@/components/docs/components/card/card-preview-blocks";
import { CardRealScreenPreview } from "@/components/docs/components/card/card-real-screen-preview";
import { cardTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const cardApiRows = [
  {
    prop: "size",
    type: '"default" | "sm"',
    defaultValue: '"default"',
  },
  {
    prop: "className",
    type: "string",
    defaultValue: "undefined",
  },
  {
    prop: "role / aria-*",
    type: "HTML attributes",
    defaultValue: "undefined",
  },
];

const cardSlotApiRows = [
  {
    prop: "CardHeader",
    type: "Header composition",
    defaultValue: "Title, Description, Action",
  },
  {
    prop: "CardTitle",
    type: "Title styling slot",
    defaultValue: "Wrap an h2–h6",
  },
  {
    prop: "CardDescription",
    type: "Supporting text",
    defaultValue: "Fully wrapping",
  },
  {
    prop: "CardAction",
    type: "Badge or compact controls",
    defaultValue: "Responsive",
  },
  {
    prop: "CardMedia",
    type: "Image or visual media",
    defaultValue: "Responsive width",
  },
  {
    prop: "CardContent",
    type: "Main content",
    defaultValue: "Content-driven height",
  },
  {
    prop: "CardFooter",
    type: "Actions or secondary content",
    defaultValue: "Wrapping flex layout",
  },
];

const auditResults = [
  {
    title: "Overflow",
    description:
      "The root no longer clips dynamic content or floating actions. Media clips within CardMedia.",
  },
  {
    title: "Height",
    description:
      "Card remains content-driven. No fixed height or default max-height is applied.",
  },
  {
    title: "Long content",
    description:
      "Titles, descriptions, body content, and long identifiers wrap without truncation.",
  },
  {
    title: "Actions",
    description:
      "Header actions stack in narrow Cards and footer controls wrap instead of overflowing.",
  },
];

export function CardDocsPage() {
  return (
    <DocsComponentPage
      title="Card"
      description="A responsive, content-driven surface for related information and actions. Card grows with dynamic content and never truncates by default."
      tocItems={cardTocItems}
      realScreen={{
        preview: <CardRealScreenPreview />,
        code: cardRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={cardInstallationUiSnippet}>
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>
                    <h3>Patient summary</h3>
                  </CardTitle>
                  <CardDescription>Last updated 2 hours ago</CardDescription>
                </CardHeader>
                <CardContent>Vital signs within normal ranges.</CardContent>
              </Card>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import compound parts from{" "}
                <DocsInlineCode>@/components/card</DocsInlineCode>. Compose only
                the regions the content needs; Card has no required fixed height.
              </>
            }
          >
            <DocsPreview code={cardUsageSnippet}>
              <Card className="w-full max-w-sm">
                <CardHeader>
                  <CardTitle>
                    <h3>Patient summary</h3>
                  </CardTitle>
                  <CardDescription>Last updated 2 hours ago</CardDescription>
                </CardHeader>
                <CardContent>Vital signs within normal ranges.</CardContent>
              </Card>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="audit"
            title="Card Audit"
            description="The audit covered every core Card slot, existing documentation example, Storybook story, and runtime usage."
          >
            <div className="grid gap-[var(--space-stack-md)] sm:grid-cols-2">
              {auditResults.map(({ title, description }) => (
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
          </DocsSection>

          <DocsSection
            id="variants"
            title="Card Variants"
            description="Basic, Header, Footer, Actions, Image, and Empty State are composition patterns built from the same responsive primitive."
          >
            <DocsPreview code={cardVariantsSnippet}>
              <CardVariantsPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="content-flexibility"
            title="Content Flexibility"
            description="Long titles, descriptions, multiple buttons, runtime lists, and unbroken identifiers remain visible. Card expands vertically with content."
          >
            <DocsPreview code={cardFlexibilitySnippet}>
              <CardContentFlexibilityPreview />
            </DocsPreview>
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              Do not apply <DocsInlineCode>truncate</DocsInlineCode>,{" "}
              <DocsInlineCode>line-clamp</DocsInlineCode>, or a fixed height to
              clinical content unless the complete value remains available by an
              equivalent accessible interaction.
            </p>
          </DocsSection>

          <DocsSection
            id="responsive-behavior"
            title="Responsive Behavior"
            description="Card responds to its own available width as well as the page grid. Header actions stack below text in narrow containers and footer actions wrap."
          >
            <DocsPreview code={cardResponsiveSnippet}>
              <CardResponsivePreview />
            </DocsPreview>
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-md)] sm:grid-cols-3">
              {[
                ["Mobile", "One column, full width, wrapped actions."],
                ["Tablet", "One or two columns based on content density."],
                ["Desktop", "Up to three columns with --space-card-gap."],
              ].map(([title, description]) => (
                <div key={title}>
                  <h3 className="text-[length:var(--text-label-size)] font-semibold">
                    {title}
                  </h3>
                  <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </DocsSection>

          <DocsSection
            id="healthcare-examples"
            title="Healthcare Examples"
            description="Canonical Patient Summary, Study, Report, and Provider Cards use full text and explicit actions."
          >
            <DocsPreview code={cardHealthcareSnippet}>
              <HealthcareCardExamplesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Card is a visual grouping primitive. Add semantic structure according to the surrounding page and the importance of its content."
          >
            <DocsPreview code={cardAccessibilitySnippet}>
              <div className="grid w-full gap-[var(--space-stack-md)] md:grid-cols-3">
                {[
                  [
                    "Semantic Structure",
                    "Use article for independently distributable content, or role=region with aria-labelledby for an important named section.",
                  ],
                  [
                    "Heading Hierarchy",
                    "Place an h2–h6 inside CardTitle and choose its level from the page outline, not from the Card’s visual size.",
                  ],
                  [
                    "Interactive Elements",
                    "Keep each Button or Link independently focusable. Do not make the entire Card clickable when it also contains nested actions.",
                  ],
                ].map(([title, description]) => (
                  <article
                    key={title}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
                  >
                    <h3 className="text-[length:var(--text-label-size)] font-semibold">
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
            id="card-guidelines"
            title="Card Guidelines"
            description="Use Cards to group related information with a clear purpose, not as a default wrapper for every section."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <CardGuidelineCard
                title="When to use Cards"
                icon={Layers3Icon}
                description="Use for a self-contained patient, study, report, provider, or dashboard summary."
                correct="Group one study’s status, metadata, and actions."
                incorrect="Wrap every paragraph or form field in a separate Card."
              />
              <CardGuidelineCard
                title="When not to use Cards"
                icon={Rows3Icon}
                description="Use plain sections, lists, or tables when content is continuous, repetitive, or primarily comparative."
                correct="Use Table for scanning many patients by the same fields."
                incorrect="Render a dense table as dozens of disconnected Cards on desktop."
              />
              <CardGuidelineCard
                title="Content practices"
                icon={Maximize2Icon}
                description="Keep one clear topic, preserve complete values, and prioritize the most relevant action."
                correct="Allow long localized or clinical text to wrap."
                incorrect="Clip identifiers, findings, warnings, or required actions."
              />
              <CardGuidelineCard
                title="Recommended density"
                icon={ScanLineIcon}
                description="Use default spacing for standard workflows and size=sm only for compact dashboard summaries."
                correct="Use two or three concise metadata groups per Card."
                incorrect="Place a full workflow, long form, or unrelated sections in one Card."
              />
            </div>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <div className="grid gap-[var(--space-stack-lg)]">
              <div>
                <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                  Card
                </h3>
                <DocsApiTable rows={cardApiRows} />
              </div>
              <div>
                <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
                  Composition slots
                </h3>
                <DocsApiTable rows={cardSlotApiRows} />
              </div>
            </div>
          </DocsSection>
        </>
      }
    />
  );
}
