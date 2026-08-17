import type { Metadata } from "next";

import { medmoResolve } from "@medmo/tokens";
import { semanticShadows } from "@medmo/tokens/tooling";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const foundation = getFoundationEntry("/docs/foundations/shadows")!;
export const metadata: Metadata = {
  title: foundation.title,
  description: foundation.description,
};

export default function ShadowsFoundationRoute() {
  const roles = Object.keys(semanticShadows.scale) as Array<
    keyof typeof semanticShadows.scale
  >;
  const shadows = roles.map((role) => ({
    role,
    ...medmoResolve.shadows.scale(role),
  }));

  return (
    <DocsFoundationPage>
      <DocsSection
        id="shadow-scale"
        title="Shadow scale"
        description="XS through XL support progressively detached surfaces. None remains the default for most static UI."
      >
          <div className="grid gap-[var(--space-grid-gap)] sm:grid-cols-2 lg:grid-cols-3">
            {shadows.map((shadow) => (
              <article
                key={shadow.role}
                className="rounded-[var(--radius-lg)] bg-[var(--color-background)] p-[var(--space-dialog)]"
              >
                <div
                  className="flex min-h-36 flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
                  style={{ boxShadow: shadow.boxShadow }}
                >
                  <div>
                    <p className="text-[length:var(--text-caption-size)] uppercase tracking-wide text-muted-foreground">
                      Shadow {shadow.role}
                    </p>
                    <h3 className="mt-[var(--space-stack-xs)] text-[length:var(--text-label-size)] font-semibold">
                      {shadow.purpose}
                    </h3>
                  </div>
                  <code className="mt-[var(--space-stack-md)] break-all text-[length:var(--text-caption-size)] text-muted-foreground">
                    --shadow-{shadow.role}
                  </code>
                </div>
              </article>
            ))}
          </div>
      </DocsSection>

      <DocsSection id="application-examples" title="Application examples">
          <div className="space-y-[var(--space-stack-sm)]">
            {shadows
              .filter((shadow) => shadow.role !== "none")
              .map((shadow) => (
                <article
                  key={shadow.role}
                  className="grid gap-[var(--space-stack-md)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)] md:grid-cols-[9rem_minmax(0,1fr)]"
                >
                  <div
                    className="flex h-24 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface-floating)]"
                    style={{ boxShadow: shadow.boxShadow }}
                  >
                    <code className="text-[length:var(--text-caption-size)]">
                      shadow-{shadow.role}
                    </code>
                  </div>
                  <div>
                    <h3 className="text-[length:var(--text-label-size)] font-semibold">
                      {shadow.surfaceGuidance}
                    </h3>
                    <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                      {shadow.usage}
                    </p>
                    <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                      Avoid: {shadow.doNot}
                    </p>
                  </div>
                </article>
              ))}
          </div>
      </DocsSection>

      <DocsSection id="usage-guidelines" title="Usage guidelines">
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
            <table className="w-full min-w-[44rem] border-collapse text-left text-[length:var(--text-body-small-size)]">
              <thead className="bg-[var(--color-surface-muted)]">
                <tr>
                  <th className="p-[var(--space-table)] font-semibold">Token</th>
                  <th className="p-[var(--space-table)] font-semibold">
                    Surface
                  </th>
                  <th className="p-[var(--space-table)] font-semibold">Use</th>
                  <th className="p-[var(--space-table)] font-semibold">Avoid</th>
                </tr>
              </thead>
              <tbody>
                {shadows.map((shadow) => (
                  <tr
                    key={shadow.role}
                    className="border-t border-[var(--color-border-subtle)] align-top"
                  >
                    <td className="p-[var(--space-table)]">
                      <code>shadow-{shadow.role}</code>
                    </td>
                    <td className="p-[var(--space-table)]">
                      {shadow.surfaceGuidance}
                    </td>
                    <td className="p-[var(--space-table)]">{shadow.usage}</td>
                    <td className="p-[var(--space-table)]">{shadow.doNot}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </DocsSection>
    </DocsFoundationPage>
  );
}
