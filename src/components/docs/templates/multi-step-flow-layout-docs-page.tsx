"use client";

import { MedmoLogoLockup } from "@/components/brand";
import { Button } from "@/components/button";
import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutHeader,
  MultiStepFlowLayoutLocale,
  MultiStepFlowLayoutMain,
  MultiStepFlowLayoutProgress,
} from "@/components/multi-step-flow-layout";
import { tsxSnippet } from "@/components/docs/primitives/docs-code-snippet";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { DocsTemplatePage } from "@/components/docs/templates/docs-template-page";

const multiStepFlowLayoutUsageSnippet = tsxSnippet(`import {
  MultiStepFlowLayout,
  MultiStepFlowLayoutCard,
  MultiStepFlowLayoutHeader,
  MultiStepFlowLayoutLocale,
  MultiStepFlowLayoutMain,
  MultiStepFlowLayoutProgress,
} from "@/components/multi-step-flow-layout";

<MultiStepFlowLayout>
  <MultiStepFlowLayoutHeader>
    <MedmoLogoLockup />
    <MultiStepFlowLayoutLocale showGlobe />
  </MultiStepFlowLayoutHeader>
  <MultiStepFlowLayoutProgress value={0.33} />
  <MultiStepFlowLayoutMain>
    <MultiStepFlowLayoutCard>
      <h2>Step title</h2>
      <p>Step content slot.</p>
    </MultiStepFlowLayoutCard>
  </MultiStepFlowLayoutMain>
</MultiStepFlowLayout>`);

const multiStepFlowLayoutApiRows = [
  { prop: "children", type: "ReactNode", defaultValue: "—" },
  { prop: "className", type: "string", defaultValue: "—" },
];

export function MultiStepFlowLayoutDocsPage() {
  return (
    <DocsTemplatePage>
      <DocsSection
        id="usage"
        title="Usage"
        description={
          <>
            Import from{" "}
            <DocsInlineCode>@/components/multi-step-flow-layout</DocsInlineCode>.
            The layout owns structure, progress navigation, header, content
            regions, and responsive behavior. Products own copy, validation,
            routing, business rules, and domain-specific fields. Reuse for
            Patient Intake, Provider Onboarding, Clinic Registration, Radiology
            Workflow, Insurance Enrollment, or any guided multi-step process.
          </>
        }
      >
        <DocsPreview code={multiStepFlowLayoutUsageSnippet}>
          <MultiStepFlowLayout className="min-h-[20rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
            <MultiStepFlowLayoutHeader>
              <MedmoLogoLockup />
              <MultiStepFlowLayoutLocale showGlobe />
            </MultiStepFlowLayoutHeader>
            <MultiStepFlowLayoutProgress value={0.33} />
            <MultiStepFlowLayoutMain>
              <MultiStepFlowLayoutCard>
                <h2 className="text-[length:var(--text-title-size)] font-semibold">
                  Step title
                </h2>
                <p className="text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                  Step content slot.
                </p>
                <Button size="sm">Continue</Button>
              </MultiStepFlowLayoutCard>
            </MultiStepFlowLayoutMain>
          </MultiStepFlowLayout>
        </DocsPreview>
      </DocsSection>

      <DocsSection id="slots" title="Slots">
        <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-page)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-muted-foreground">
          <li>
            <DocsInlineCode>MultiStepFlowLayoutHeader</DocsInlineCode> — brand
            at the start, locale at the end.
          </li>
          <li>
            <DocsInlineCode>MultiStepFlowLayoutLocale</DocsInlineCode> — locale
            control slot. Pass product language labels.
          </li>
          <li>
            <DocsInlineCode>MultiStepFlowLayoutProgress</DocsInlineCode> —
            desktop progress. Value is 0–1.
          </li>
          <li>
            <DocsInlineCode>MultiStepFlowLayoutMain</DocsInlineCode> /{" "}
            <DocsInlineCode>MultiStepFlowLayoutMainDesktop</DocsInlineCode> —
            step body column.
          </li>
          <li>
            <DocsInlineCode>MultiStepFlowLayoutCard</DocsInlineCode> /{" "}
            <DocsInlineCode>MultiStepFlowLayoutInputPanel</DocsInlineCode> —
            content surfaces inside the main slot.
          </li>
        </ul>
      </DocsSection>

      <DocsSection id="api-reference" title="API Reference">
        <DocsApiTable rows={multiStepFlowLayoutApiRows} />
      </DocsSection>
    </DocsTemplatePage>
  );
}
