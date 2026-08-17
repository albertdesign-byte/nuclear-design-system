import type { Metadata } from "next";

import {
  colorPrimitives,
  lightSemantic,
  resolvePrimitiveColor,
} from "@medmo/tokens/tooling";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
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

export default function ColorsFoundationRoute() {
  const primaryScale = Object.entries(colorPrimitives.primary);

  return (
    <DocsFoundationPage>
      <DocsSection
        id="primary-palette"
        title="Primary palette"
        description="The Medmo brand scale is anchored at Primary 800."
      >
          <div className="grid gap-[var(--space-grid-gap)] sm:grid-cols-2 lg:grid-cols-4">
            {primaryScale.map(([step, color]) => (
              <article
                key={step}
                className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)]"
              >
                <div
                  className="flex h-24 items-end p-[var(--space-stack-sm)]"
                  style={{ backgroundColor: color.hex }}
                >
                  <span
                    className="text-[length:var(--text-caption-size)] font-semibold"
                    style={{
                      color: Number(step) >= 500 ? "#FFFFFF" : "#343842",
                    }}
                  >
                    {step}
                  </span>
                </div>
                <div className="p-[var(--space-card)]">
                  <code className="text-[length:var(--text-caption-size)]">
                    {color.hex}
                  </code>
                  <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                    {color.usage}
                  </p>
                </div>
              </article>
            ))}
          </div>
      </DocsSection>

      <DocsSection
        id="semantic-colors"
        title="Semantic colors"
        description="Semantic roles encode intent and remain stable across themes."
      >
          <div className="grid gap-[var(--space-grid-gap)] sm:grid-cols-2">
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
          <div className="grid gap-[var(--space-grid-gap)] sm:grid-cols-2">
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
