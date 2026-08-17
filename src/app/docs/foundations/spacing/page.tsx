import type { Metadata } from "next";

import {
  semanticSpacing,
  spacingPrimitiveSteps,
  spacingScale,
} from "@medmo/tokens/tooling";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const foundation = getFoundationEntry("/docs/foundations/spacing")!;
export const metadata: Metadata = {
  title: foundation.title,
  description: foundation.description,
};

const semanticGroups = [
  {
    name: "Inline",
    prefix: "space-inline",
    tokens: semanticSpacing.inline,
  },
  {
    name: "Stack",
    prefix: "space-stack",
    tokens: semanticSpacing.stack,
  },
  {
    name: "Context",
    prefix: "space",
    tokens: semanticSpacing.context,
  },
] as const;

function getSpacingValue(primitive: `spacing-${number}`) {
  const step = Number(primitive.replace("spacing-", ""));
  return spacingScale[step as keyof typeof spacingScale].px;
}

export default function SpacingFoundationRoute() {
  return (
    <DocsFoundationPage>
      <DocsSection id="grid-rhythm" title="4px grid and 8px rhythm">
          <div className="grid gap-[var(--space-grid-gap)] md:grid-cols-2">
            <article className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-dialog)]">
              <div className="flex items-end gap-1">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((unit) => (
                  <span
                    key={unit}
                    aria-hidden
                    className="w-1 bg-[var(--color-action-primary)]"
                    style={{ height: `${unit * 4}px` }}
                  />
                ))}
              </div>
              <h3 className="mt-[var(--space-stack-md)] text-[length:var(--text-label-size)] font-semibold">
                4px base unit
              </h3>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-muted-foreground">
                Layout values align to a consistent pixel grid.
              </p>
            </article>
            <article className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-dialog)]">
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4].map((unit) => (
                  <span
                    key={unit}
                    aria-hidden
                    className="h-8 bg-[var(--color-action-primary)]"
                    style={{ width: `${unit * 8}px` }}
                  />
                ))}
              </div>
              <h3 className="mt-[var(--space-stack-md)] text-[length:var(--text-label-size)] font-semibold">
                8px component rhythm
              </h3>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-muted-foreground">
                Most component gaps and padding use multiples of 8px.
              </p>
            </article>
          </div>
      </DocsSection>

      <DocsSection
        id="primitive-scale"
        title="Primitive scale"
        description="Reference only. Product code uses the semantic tokens below."
      >
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
            <table className="w-full min-w-[42rem] border-collapse text-left text-[length:var(--text-body-small-size)]">
              <thead className="bg-[var(--color-surface-muted)]">
                <tr>
                  <th className="p-[var(--space-table)] font-semibold">Token</th>
                  <th className="p-[var(--space-table)] font-semibold">Value</th>
                  <th className="p-[var(--space-table)] font-semibold">Visual</th>
                  <th className="p-[var(--space-table)] font-semibold">Intent</th>
                </tr>
              </thead>
              <tbody>
                {spacingPrimitiveSteps.map((step) => {
                  const token = spacingScale[step];
                  return (
                    <tr
                      key={step}
                      className="border-t border-[var(--color-border-subtle)]"
                    >
                      <td className="p-[var(--space-table)]">
                        <code>spacing-{step}</code>
                      </td>
                      <td className="p-[var(--space-table)]">{token.px}px</td>
                      <td className="p-[var(--space-table)]">
                        <span
                          aria-hidden
                          className="block h-3 rounded-full bg-[var(--color-action-primary)]"
                          style={{ width: `${token.px}px` }}
                        />
                      </td>
                      <td className="p-[var(--space-table)] text-muted-foreground">
                        {token.usage}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
      </DocsSection>

      <DocsSection id="semantic-tokens" title="Semantic tokens">
          <div className="space-y-[var(--space-stack-lg)]">
            {semanticGroups.map((group) => (
              <div key={group.name}>
                <h3 className="text-[length:var(--text-label-size)] font-semibold">
                  {group.name}
                </h3>
                <div className="mt-[var(--space-stack-sm)] overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
                  <table className="w-full min-w-[44rem] border-collapse text-left text-[length:var(--text-body-small-size)]">
                    <thead className="bg-[var(--color-surface-muted)]">
                      <tr>
                        <th className="p-[var(--space-table)] font-semibold">
                          Token
                        </th>
                        <th className="p-[var(--space-table)] font-semibold">
                          Value
                        </th>
                        <th className="p-[var(--space-table)] font-semibold">
                          Use
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(group.tokens).map(([role, token]) => (
                        <tr
                          key={role}
                          className="border-t border-[var(--color-border-subtle)] align-top"
                        >
                          <td className="p-[var(--space-table)]">
                            <code>
                              {group.prefix}-{role}
                            </code>
                          </td>
                          <td className="p-[var(--space-table)]">
                            {getSpacingValue(token.primitive)}px
                          </td>
                          <td className="p-[var(--space-table)]">
                            {token.usage}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
      </DocsSection>

      <DocsSection id="examples" title="Examples">
          <div className="grid gap-[var(--space-grid-gap)] md:grid-cols-3">
            {[
              {
                name: "Inline actions",
                value: getSpacingValue(semanticSpacing.inline.sm.primitive),
                direction: "row" as const,
              },
              {
                name: "Form stack",
                value: getSpacingValue(semanticSpacing.stack.md.primitive),
                direction: "column" as const,
              },
              {
                name: "Section rhythm",
                value: getSpacingValue(semanticSpacing.context.section.primitive),
                direction: "column" as const,
              },
            ].map((example) => (
              <article
                key={example.name}
                className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
              >
                <div
                  className="flex min-h-24"
                  style={{
                    flexDirection: example.direction,
                    gap: `${example.value}px`,
                  }}
                >
                  <span className="h-8 flex-1 rounded-[var(--radius-sm)] bg-[var(--color-surface-muted)]" />
                  <span className="h-8 flex-1 rounded-[var(--radius-sm)] bg-[var(--color-action-primary)]" />
                </div>
                <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-label-size)] font-semibold">
                  {example.name}
                </p>
                <p className="text-[length:var(--text-caption-size)] text-muted-foreground">
                  {example.value}px
                </p>
              </article>
            ))}
          </div>
      </DocsSection>
    </DocsFoundationPage>
  );
}
