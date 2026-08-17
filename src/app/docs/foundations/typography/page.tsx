import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { medmoResolve } from "@medmo/tokens";
import { semanticTypography } from "@medmo/tokens/tooling";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
import { DocsSection } from "@/components/docs/primitives/docs-section";

const foundation = getFoundationEntry("/docs/foundations/typography")!;
export const metadata: Metadata = {
  title: foundation.title,
  description: foundation.description,
};

const roleSamples: Record<keyof typeof semanticTypography, string> = {
  display: "Dashboard overview",
  h1: "Patient records",
  h2: "Contact information",
  h3: "Recent orders",
  title: "Blood panel results",
  "body-large": "Clinical summary requiring emphasis.",
  body: "Follow-up appointment scheduled for next Tuesday.",
  "body-small": "Optional field. Leave blank if not applicable.",
  label: "Date of birth",
  caption: "Last updated 3 minutes ago",
  overline: "Clinical records",
  code: "MRN-28491",
};

export default function TypographyFoundationRoute() {
  const roles = Object.values(semanticTypography).map((token) => ({
    ...token,
    resolved: medmoResolve.typography.role(token.role),
  }));

  return (
    <DocsFoundationPage>
      <DocsSection
        id="typography-strategy"
        title="Typography Strategy"
        description="Nuclear uses two typefaces on purpose. They are not interchangeable, and the split is not a mismatch to resolve."
      >
        <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
          <table className="w-full min-w-[40rem] border-collapse text-left text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
            <thead className="bg-[var(--color-surface-muted)]">
              <tr>
                <th className="p-[var(--space-table)] font-semibold">Typeface</th>
                <th className="p-[var(--space-table)] font-semibold">Role</th>
                <th className="p-[var(--space-table)] font-semibold">Use</th>
                <th className="p-[var(--space-table)] font-semibold">Do not use</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-[var(--color-border-subtle)] align-top">
                <td className="p-[var(--space-table)] font-medium">
                  IBM Plex Sans Condensed
                </td>
                <td className="p-[var(--space-table)]">
                  Design System documentation experience
                </td>
                <td className="p-[var(--space-table)]">
                  Navigation, sidebar, documentation content, guidelines,
                  educational material, and Design System chrome
                </td>
                <td className="p-[var(--space-table)]">
                  Components, product interfaces, real screens, and application UI
                </td>
              </tr>
              <tr className="border-t border-[var(--color-border-subtle)] align-top">
                <td className="p-[var(--space-table)] font-medium">Poppins</td>
                <td className="p-[var(--space-table)]">
                  Canonical product typeface
                </td>
                <td className="p-[var(--space-table)]">
                  Components, product interfaces, real screens, and application UI
                </td>
                <td className="p-[var(--space-table)]">
                  Design System documentation chrome, sidebar, and educational prose
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-[var(--space-stack-md)] max-w-[44rem] space-y-[var(--space-stack-sm)] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-[var(--color-text-secondary)]">
          <p>
            Documentation needs a condensed, information-dense reading face for
            long guidelines and navigation. Product UI needs a canonical
            application face that every component, real screen, and shipped
            interface shares. Those jobs are different, so the families stay
            separate.
          </p>
          <p>
            Semantic type roles consumed by components resolve to Poppins.
            Specimens in the type scale below show product roles in Poppins.
            IBM Plex Sans Condensed remains the face of this documentation site
            — including the page you are reading.
          </p>
        </div>

        <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
          <li>
            Do not specify IBM Plex Sans Condensed on components, product
            screens, or application UI.
          </li>
          <li>
            Do not replace documentation chrome, sidebar, or educational copy
            with Poppins.
          </li>
          <li>
            Do not mix both families inside a single component or a single
            product screen.
          </li>
          <li>
            Treat a screen that shows both as a documentation preview of a
            component (Poppins) sitting in docs chrome (IBM Plex) — not as a
            product pattern to copy.
          </li>
        </ul>
      </DocsSection>

      <DocsSection id="typeface" title="IBM Plex Sans Condensed">
          <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-dialog)]">
            <p className="text-[length:var(--text-h1-size)] font-semibold leading-[var(--text-h1-line-height)]">
              Clear clinical communication
            </p>
            <p className="mt-[var(--space-stack-sm)] max-w-[44rem] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-muted-foreground">
              IBM Plex Sans Condensed is the Design System documentation
              typeface. Its condensed proportions support dense navigation,
              guidelines, and educational material without reducing the
              functional text-size baseline. It is not the product UI family —
              that is Poppins.
            </p>
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-grid-gap)] sm:grid-cols-3">
              {[
                ["Regular", "400"],
                ["Medium", "500"],
                ["Semibold", "600"],
              ].map(([name, weight]) => (
                <div
                  key={weight}
                  className="rounded-[var(--radius-md)] bg-[var(--color-surface-muted)] p-[var(--space-card)]"
                >
                  <p
                    className="text-[length:var(--text-title-size)]"
                    style={{ fontWeight: Number(weight) }}
                  >
                    Aa 0123
                  </p>
                  <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-muted-foreground">
                    {name} · {weight}
                  </p>
                </div>
              ))}
            </div>
          </div>
      </DocsSection>

      <DocsSection
        id="type-scale"
        title="Complete type scale"
        description="Semantic roles consumed by components. These specimens render in Poppins, the canonical product typeface."
      >
          <div className="space-y-[var(--space-stack-sm)]">
            {roles.map(({ role, resolved }) => {
              const previewStyle: CSSProperties = {
                fontFamily: resolved.fontFamily,
                fontSize: resolved.fontSize,
                fontWeight: resolved.fontWeight,
                lineHeight: resolved.lineHeight,
                letterSpacing: resolved.letterSpacing,
                textTransform:
                  resolved.textTransform === "uppercase"
                    ? "uppercase"
                    : undefined,
              };

              return (
                <article
                  key={role}
                  className="grid gap-[var(--space-stack-md)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)] lg:grid-cols-[10rem_minmax(0,1fr)]"
                >
                  <div>
                    <code className="text-[length:var(--text-caption-size)]">
                      text-{role}
                    </code>
                    <dl className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                      <div>{resolved.fontSizePx}px</div>
                      <div>Weight {resolved.fontWeight}</div>
                      <div>Line height {resolved.lineHeight}</div>
                    </dl>
                  </div>
                  <div className="min-w-0">
                    <p className="break-words text-[var(--color-text-primary)]" style={previewStyle}>
                      {roleSamples[role]}
                    </p>
                    <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-muted-foreground">
                      {resolved.usage}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
      </DocsSection>

      <DocsSection
        id="weight-line-height-use-cases"
        title="Weight, line height, and use cases"
      >
          <div className="overflow-x-auto rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]">
            <table className="w-full min-w-[48rem] border-collapse text-left text-[length:var(--text-body-small-size)]">
              <thead className="bg-[var(--color-surface-muted)]">
                <tr>
                  <th className="p-[var(--space-table)] font-semibold">Role</th>
                  <th className="p-[var(--space-table)] font-semibold">Size</th>
                  <th className="p-[var(--space-table)] font-semibold">Weight</th>
                  <th className="p-[var(--space-table)] font-semibold">
                    Line height
                  </th>
                  <th className="p-[var(--space-table)] font-semibold">Use</th>
                </tr>
              </thead>
              <tbody>
                {roles.map(({ role, resolved }) => (
                  <tr
                    key={role}
                    className="border-t border-[var(--color-border-subtle)] align-top"
                  >
                    <td className="p-[var(--space-table)]">
                      <code>text-{role}</code>
                    </td>
                    <td className="p-[var(--space-table)]">
                      {resolved.fontSizePx}px
                    </td>
                    <td className="p-[var(--space-table)]">
                      {resolved.fontWeight}
                    </td>
                    <td className="p-[var(--space-table)]">
                      {resolved.lineHeight}
                    </td>
                    <td className="p-[var(--space-table)]">{resolved.usage}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
      </DocsSection>
    </DocsFoundationPage>
  );
}
