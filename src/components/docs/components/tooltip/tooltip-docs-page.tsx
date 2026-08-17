"use client";

import { CircleHelpIcon } from "lucide-react";

import { Button } from "@/components/button";

import {
  tooltipAccessibilitySnippet,
  tooltipContentPatternsSnippet,
  tooltipHealthcareSnippet,
  tooltipInstallationUiSnippet,
  tooltipProviderSnippet,
  tooltipRealScreenSnippet,
  tooltipSideSnippet,
  tooltipTriggerTypesSnippet,
  tooltipUsageSnippet,
} from "@/components/docs/components/tooltip/tooltip-code-snippets";
import {
  HealthcareTooltipExamplesPreview,
  TooltipContentPatternsPreview,
  TooltipGuidelineCard,
  TooltipPlacementPreview,
  TooltipTriggerTypesPreview,
} from "@/components/docs/components/tooltip/tooltip-preview-blocks";
import { TooltipRealScreenPreview } from "@/components/docs/components/tooltip/tooltip-real-screen-preview";
import { tooltipTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip";

const tooltipContentApiRows = [
  {
    prop: "side",
    type: '"top" | "right" | "bottom" | "left" | "inline-start" | "inline-end"',
    defaultValue: '"top"',
  },
  { prop: "sideOffset", type: "number", defaultValue: "11" },
  {
    prop: "align",
    type: '"start" | "center" | "end"',
    defaultValue: '"center"',
  },
  { prop: "alignOffset", type: "number", defaultValue: "0" },
  { prop: "arrowPadding", type: "number", defaultValue: "8" },
  { prop: "collisionPadding", type: "number", defaultValue: "8" },
  {
    prop: "positionMethod",
    type: '"absolute" | "fixed"',
    defaultValue: '"absolute"',
  },
];

const tooltipProviderApiRows = [
  { prop: "delay", type: "number", defaultValue: "0" },
  { prop: "timeout", type: "number", defaultValue: "400" },
];

export function TooltipDocsPage() {
  return (
    <DocsComponentPage
      title="Tooltip"
      description="Supplementary, non-critical information shown on mouse hover or keyboard focus, with collision-safe positioning and a consistently visible arrow."
      tocItems={tooltipTocItems}
      realScreen={{
        preview: <TooltipRealScreenPreview />,
        code: tooltipRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={tooltipInstallationUiSnippet}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-xl"
                      aria-label="Patient ID help"
                    />
                  }
                >
                  <CircleHelpIcon />
                </TooltipTrigger>
                <TooltipContent>Internal patient identifier</TooltipContent>
              </Tooltip>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from{" "}
                <DocsInlineCode>@/components/tooltip</DocsInlineCode>. Tooltip
                content supplements a trigger that already has a visible or
                accessible label.
              </>
            }
          >
            <DocsPreview code={tooltipUsageSnippet}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-xl"
                      aria-label="Upload information"
                    />
                  }
                >
                  <CircleHelpIcon />
                </TooltipTrigger>
                <TooltipContent>Upload DICOM files</TooltipContent>
              </Tooltip>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="placement"
            title="Tooltip Positions"
            description="Top, bottom, left, and right share the same 11px anchor offset. The arrow uses Base UI positioning instead of manual transforms, so it remains visible and separated from the trigger after collision handling."
          >
            <DocsPreview code={tooltipSideSnippet}>
              <TooltipPlacementPreview />
            </DocsPreview>
            <p className="mt-[var(--space-stack-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              The preferred side can flip when space is constrained.{" "}
              <DocsInlineCode>arrowPadding</DocsInlineCode> keeps the arrow away
              from rounded corners, while{" "}
              <DocsInlineCode>collisionPadding</DocsInlineCode> prevents the
              floating surface from being cut by the viewport.
            </p>
          </DocsSection>

          <DocsSection
            id="trigger-types"
            title="Trigger Types"
            description="Tooltip works with focusable icon buttons, text links, buttons, and form elements. Keep the trigger semantic and operable without the tooltip."
          >
            <DocsPreview code={tooltipTriggerTypesSnippet}>
              <TooltipTriggerTypesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="content"
            title="Tooltip Content"
            description="Use concise text that clarifies a label, status, or unfamiliar term. Tooltip is not an interactive container."
          >
            <DocsPreview code={tooltipContentPatternsSnippet}>
              <TooltipContentPatternsPreview />
            </DocsPreview>
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-md)] lg:grid-cols-3">
              <TooltipGuidelineCard title="Simple Text">
                <li>One short label, such as “Patient ID”.</li>
                <li>Best for familiar icon-only actions.</li>
              </TooltipGuidelineCard>
              <TooltipGuidelineCard title="Short Description">
                <li>One sentence that explains a state or term.</li>
                <li>Keep the essential meaning in the interface.</li>
              </TooltipGuidelineCard>
              <TooltipGuidelineCard title="Help Content">
                <li>Use two short sentences at most.</li>
                <li>Move longer or interactive help to Popover or documentation.</li>
              </TooltipGuidelineCard>
            </div>
          </DocsSection>

          <DocsSection
            id="healthcare-examples"
            title="Healthcare Examples"
            description="Canonical supplementary help for patient, imaging, upload, and insurance workflows."
          >
            <DocsPreview code={tooltipHealthcareSnippet}>
              <HealthcareTooltipExamplesPreview />
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="Tooltip is visual supplementary help. The underlying control must remain understandable and usable when the tooltip is unavailable."
          >
            <DocsPreview code={tooltipAccessibilitySnippet}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      variant="ghost"
                      size="icon-xl"
                      aria-label="Insurance information"
                    />
                  }
                >
                  <CircleHelpIcon />
                </TooltipTrigger>
                <TooltipContent>Coverage was verified today.</TooltipContent>
              </Tooltip>
            </DocsPreview>
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <TooltipGuidelineCard title="Keyboard Navigation">
                <li>Tab moves focus to the trigger; Escape dismisses an open tooltip.</li>
                <li>Tooltip content does not receive focus or contain actions.</li>
              </TooltipGuidelineCard>
              <TooltipGuidelineCard title="Focus Behavior">
                <li>Keyboard focus opens the same content as mouse hover.</li>
                <li>Focus remains on the trigger when the tooltip opens.</li>
              </TooltipGuidelineCard>
              <TooltipGuidelineCard title="Screen Reader Support">
                <li>The trigger keeps its own accessible name; Tooltip is never its only screen-reader description.</li>
                <li>Icon-only triggers require an explicit <DocsInlineCode>aria-label</DocsInlineCode>; keep essential help visible or provide a persistent description.</li>
              </TooltipGuidelineCard>
              <TooltipGuidelineCard title="Hover vs Focus">
                <li>Never provide important information only on hover.</li>
                <li>Touch users may not receive hover content; keep critical copy visible.</li>
              </TooltipGuidelineCard>
            </div>
          </DocsSection>

          <DocsSection
            id="tooltip-guidelines"
            title="Tooltip Guidelines"
            description="Choose Tooltip only when brief supplementary information improves scanning without becoming required to complete the task."
          >
            <div className="grid gap-[var(--space-stack-md)] lg:grid-cols-2">
              <TooltipGuidelineCard title="When to use Tooltip">
                <li>Clarify an icon, abbreviation, secondary status, or unfamiliar healthcare term.</li>
                <li>Provide a short hint that is also available through keyboard focus.</li>
              </TooltipGuidelineCard>
              <TooltipGuidelineCard title="When not to use Tooltip">
                <li>Do not hide errors, consent, warnings, instructions, or required clinical information.</li>
                <li>Use Popover for interactive help and Alert or inline text for persistent information.</li>
              </TooltipGuidelineCard>
              <TooltipGuidelineCard title="Good practices">
                <li>Write concise, direct text and use sentence case.</li>
                <li>Keep the tooltip close to its trigger and let collision handling choose a safe side.</li>
                <li>Give icon-only triggers a standalone accessible name.</li>
              </TooltipGuidelineCard>
              <TooltipGuidelineCard title="Common mistakes">
                <li>Repeating the visible label without adding useful context.</li>
                <li>Adding links, buttons, forms, or long paragraphs inside Tooltip.</li>
                <li>Using hover-only content for touch or screen-reader-critical workflows.</li>
              </TooltipGuidelineCard>
            </div>
          </DocsSection>

          <DocsSection
            id="provider"
            title="Provider"
            description="AppProviders mounts TooltipProvider globally. Its zero-delay default supports dense enterprise interfaces while preserving grouped-tooltip behavior."
          >
            <DocsPreview code={tooltipProviderSnippet}>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button variant="secondary" size="sm">
                      Tooltip trigger
                    </Button>
                  }
                />
                <TooltipContent>
                  Provider sets global timing at the root.
                </TooltipContent>
              </Tooltip>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              TooltipContent
            </h3>
            <DocsApiTable rows={tooltipContentApiRows} />
            <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-title-size)] font-medium leading-[var(--text-title-line-height)]">
              TooltipProvider
            </h3>
            <DocsApiTable rows={tooltipProviderApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
