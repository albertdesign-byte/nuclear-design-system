import type { Metadata } from "next";

import {
  colorPrimitives,
  lightSemantic,
  resolvePrimitiveColor,
} from "@medmo/tokens/tooling";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { DocsColorSwatchCard } from "@/components/docs/foundations/docs-color-swatch-card";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
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

const PRIMARY_ANCHOR_STEP = "800";

export default function ColorsFoundationRoute() {
  const primaryAnchor = colorPrimitives.primary[800];
  const tones = Object.entries(colorPrimitives.primary).filter(
    ([step]) => step !== PRIMARY_ANCHOR_STEP
  );

  return (
    <DocsFoundationPage>
      <DocsSection
        id="primary"
        title="Primary"
        description="The Medmo brand scale is anchored at Primary 800."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-4">
          <DocsColorSwatchCard
            step={PRIMARY_ANCHOR_STEP}
            hex={primaryAnchor.hex}
            usage={primaryAnchor.usage}
          />
        </div>
      </DocsSection>

      <DocsSection
        id="tones"
        title="Tones"
        description="Supporting steps of the primary scale."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-4">
          {tones.map(([step, color]) => (
            <DocsColorSwatchCard
              key={step}
              step={step}
              hex={color.hex}
              usage={color.usage}
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
                    <code className="text-[length:var(--text-caption-size)] text-muted-foreground">
                      {variable}
                    </code>
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
                      <code>{variable}</code>
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
