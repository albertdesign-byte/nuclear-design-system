import type { Metadata } from "next";

import { medmoResolve } from "@medmo/tokens";
import { semanticRadius } from "@medmo/tokens/tooling";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const foundation = getFoundationEntry("/docs/foundations/radius")!;
export const metadata: Metadata = {
  title: foundation.title,
  description: foundation.description,
};

export default function RadiusFoundationRoute() {
  const scale = Object.entries(semanticRadius.scale).map(([role, token]) => ({
    role,
    ...medmoResolve.radius.scale(role as keyof typeof semanticRadius.scale),
    ...token,
  }));
  const contexts = Object.entries(semanticRadius.context).map(
    ([role, token]) => ({
      role,
      ...medmoResolve.radius.context(
        role as keyof typeof semanticRadius.context
      ),
      ...token,
    })
  );
  const base = medmoResolve.radius.base();

  return (
    <DocsFoundationPage>
      <DocsSection
        id="radius-scale"
        title="Radius scale"
        description={`${base.token} (${base.px}px) is the system default. Context tokens are preferred in components.`}
      >
        <div className="grid gap-[var(--space-grid-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {scale.map((token) => (
            <article
              key={token.role}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
            >
              <div
                aria-hidden
                className="h-16 bg-[var(--color-action-primary)]"
                style={{ borderRadius: token.rem }}
              />
              <h3 className="mt-[var(--space-stack-sm)] text-[length:var(--text-label-size)] font-semibold">
                radius-{token.role}
              </h3>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-muted-foreground">
                {token.px}px · {token.purpose}
              </p>
            </article>
          ))}
        </div>
      </DocsSection>

      <DocsSection
        id="context-tokens"
        title="Context tokens"
        description="Prefer intent names over choosing a scale step in component styles."
      >
        <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
          <table className="w-full min-w-[40rem] border-collapse text-left text-[length:var(--text-body-small-size)]">
            <thead className="bg-[var(--color-surface-muted)]">
              <tr>
                <th className="p-[var(--space-table)] font-semibold">Token</th>
                <th className="p-[var(--space-table)] font-semibold">Scale</th>
                <th className="p-[var(--space-table)] font-semibold">Use</th>
              </tr>
            </thead>
            <tbody>
              {contexts.map((token) => (
                <tr
                  key={token.role}
                  className="border-t border-[var(--color-border-subtle)] align-top"
                >
                  <td className="p-[var(--space-table)]">
                    <code>radius-{token.role}</code>
                  </td>
                  <td className="p-[var(--space-table)]">
                    <code>radius-{token.scale}</code>
                  </td>
                  <td className="p-[var(--space-table)]">{token.usage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocsSection>
    </DocsFoundationPage>
  );
}
