import type { Metadata } from "next";

import {
  colorPrimitives,
  lightSemantic,
  resolvePrimitiveColor,
} from "@medmo/tokens/tooling";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { DocsColorSwatchCard } from "@/components/docs/foundations/docs-color-swatch-card";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
import { DocsCopyToken } from "@/components/docs/primitives/docs-copy-token";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const foundation = getFoundationEntry("/docs/foundations/colors")!;
export const metadata: Metadata = {
  title: foundation.title,
  description: foundation.description,
};

const semanticExamples = [
  {
    name: "Background",
    variable: "--color-background",
    token: lightSemantic.surface.background,
  },
  {
    name: "Surface",
    variable: "--color-surface",
    token: lightSemantic.surface.surface,
  },
  {
    name: "Primary text",
    variable: "--color-text-primary",
    token: lightSemantic.text.primary,
  },
  {
    name: "Secondary text",
    variable: "--color-text-secondary",
    token: lightSemantic.text.secondary,
  },
  {
    name: "Primary action",
    variable: "--color-action-primary",
    token: lightSemantic.action.primary,
  },
  {
    name: "Default border",
    variable: "--color-border",
    token: lightSemantic.border.default,
  },
] as const;

const feedbackExamples = [
  { name: "Success", tokens: lightSemantic.feedback.success },
  { name: "Warning", tokens: lightSemantic.feedback.warning },
  { name: "Error", tokens: lightSemantic.feedback.error },
  { name: "Info", tokens: lightSemantic.feedback.info },
] as const;

const PRIMARY_STEPS = ["800", "700"] as const;
const SECONDARY_STEPS = ["500", "600"] as const;

function primaryTokenName(step: string) {
  return `primary-${step}`;
}

export default function ColorsFoundationRoute() {
  const primary = PRIMARY_STEPS.map((step) => ({
    step,
    color: colorPrimitives.primary[step],
  }));
  const secondary = SECONDARY_STEPS.map((step) => ({
    step,
    color: colorPrimitives.primary[step],
  }));
  const tones = Object.entries(colorPrimitives.primary).filter(
    ([step]) =>
      !PRIMARY_STEPS.includes(step as (typeof PRIMARY_STEPS)[number]) &&
      !SECONDARY_STEPS.includes(step as (typeof SECONDARY_STEPS)[number])
  );

  return (
    <DocsFoundationPage>
      <DocsSection
        id="primary"
        title="Primary"
        description="The Medmo brand action pair. 800 is the brand anchor; 700 is the hover and default-link companion. Components consume these through semantic action tokens."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-4">
          {primary.map(({ step, color }) => (
            <DocsColorSwatchCard
              key={step}
              step={step}
              hex={color.hex}
              usage={color.usage}
              token={primaryTokenName(step)}
            />
          ))}
        </div>
      </DocsSection>

      <DocsSection
        id="secondary"
        title="Secondary"
        description="Supporting brand text and secondary interactive states. Same hue as Primary — not a second brand color. Remaining tints stay in Tones."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-4">
          {secondary.map(({ step, color }) => (
            <DocsColorSwatchCard
              key={step}
              step={step}
              hex={color.hex}
              usage={color.usage}
              token={primaryTokenName(step)}
            />
          ))}
        </div>
      </DocsSection>

      <DocsSection
        id="tones"
        title="Tones"
        description="Remaining steps of the primary scale for tints, borders, and pressed surfaces. Do not delete these values — semantic tokens still resolve to them."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-4">
          {tones.map(([step, color]) => (
            <DocsColorSwatchCard
              key={step}
              step={step}
              hex={color.hex}
              usage={color.usage}
              token={primaryTokenName(step)}
            />
          ))}
        </div>
      </DocsSection>

      <DocsSection
        id="semantic-colors"
        title="Semantic colors"
        description="Semantic roles encode intent and remain stable across themes."
      >
          <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2">
            {semanticExamples.map(({ name, variable, token }) => {
              const color = resolvePrimitiveColor(token.primitive);
              return (
                <article
                  key={variable}
                  className="flex gap-[var(--space-inline-md)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
                >
                  <span
                    aria-hidden
                    className="size-12 shrink-0 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="min-w-0">
                    <h3 className="text-[length:var(--text-label-size)] font-semibold">
                      {name}
                    </h3>
                    <DocsCopyToken value={variable} />
                    <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                      {token.usage}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
      </DocsSection>

      <DocsSection id="feedback-examples" title="Feedback examples">
          <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2">
            {feedbackExamples.map(({ name, tokens }) => {
              const background = resolvePrimitiveColor(tokens.background.primitive);
              const border = resolvePrimitiveColor(tokens.border.primitive);
              const text = resolvePrimitiveColor(tokens.text.primitive);
              return (
                <article
                  key={name}
                  className="rounded-[var(--radius-lg)] border p-[var(--space-card)]"
                  style={{
                    backgroundColor: background.hex,
                    borderColor: border.hex,
                    color: text.hex,
                  }}
                >
                  <h3 className="text-[length:var(--text-label-size)] font-semibold">
                    {name}
                  </h3>
                  <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                    {tokens.background.usage}
                  </p>
                </article>
              );
            })}
          </div>
      </DocsSection>

      <DocsSection id="usage-guidelines" title="Usage guidelines">
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
            <table className="w-full min-w-[40rem] border-collapse text-left text-[length:var(--text-body-small-size)]">
              <thead className="bg-[var(--color-surface-muted)]">
                <tr>
                  <th className="p-[var(--space-table)] font-semibold">Token</th>
                  <th className="p-[var(--space-table)] font-semibold">Use</th>
                  <th className="p-[var(--space-table)] font-semibold">Avoid</th>
                </tr>
              </thead>
              <tbody>
                {semanticExamples.map(({ variable, token }) => (
                  <tr
                    key={variable}
                    className="border-t border-[var(--color-border-subtle)]"
                  >
                    <td className="p-[var(--space-table)]">
                      <DocsCopyToken value={variable} />
                    </td>
                    <td className="p-[var(--space-table)]">{token.usage}</td>
                    <td className="p-[var(--space-table)]">{token.doNot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </DocsSection>
    </DocsFoundationPage>
  );
}
