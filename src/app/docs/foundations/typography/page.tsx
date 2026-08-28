import type { CSSProperties } from "react";
import type { Metadata } from "next";

import { medmoResolve } from "@medmo/tokens";
import { semanticTypography } from "@medmo/tokens/tooling";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { DocsFoundationPage } from "@/components/docs/foundations/docs-foundation-page";
import { DocsCopyToken } from "@/components/docs/primitives/docs-copy-token";
import { DocsSection } from "@/components/docs/primitives/docs-section";
import { componentFontFamilyClassName } from "@/lib/component-font-family";
import { cn } from "@/lib/utils";

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
        description="Poppins is the official Medmo typeface. Components, product screens, and application UI all use it."
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
                <td className="p-[var(--space-table)] font-medium">Poppins</td>
                <td className="p-[var(--space-table)]">
                  Official Medmo typeface
                </td>
                <td className="p-[var(--space-table)]">
                  Components, product interfaces, real screens, and application UI
                </td>
                <td className="p-[var(--space-table)]">
                  Do not replace it with a second product family or a platform default
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-[var(--space-stack-md)] max-w-[44rem] space-y-[var(--space-stack-sm)] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-[var(--color-text-secondary)]">
          <p>
            Semantic type roles consumed by components resolve to Poppins.
            Specimens in the type scale below show those roles in Poppins.
          </p>
        </div>

        <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
          <li>
            Use Poppins through semantic type roles, not ad-hoc font-family
            declarations on product UI.
          </li>
          <li>Do not introduce a second official product typeface.</li>
          <li>
            Build hierarchy with size, weight, and space — not by swapping
            families.
          </li>
        </ul>
      </DocsSection>

      <DocsSection id="typeface" title="Poppins">
          <div
            className={cn(
              componentFontFamilyClassName,
              "rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-dialog)]"
            )}
          >
            <p className="text-[length:var(--text-h1-size)] font-semibold leading-[var(--text-h1-line-height)]">
              Clear clinical communication
            </p>
            <p className="mt-[var(--space-stack-sm)] max-w-[44rem] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-muted-foreground">
              Poppins is the official Medmo typeface. Every component, product
              screen, and application interface uses it through semantic type
              roles.
            </p>
            <div className="mt-[var(--space-stack-md)] grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-4">
              {[
                ["Regular", "400"],
                ["Medium", "500"],
                ["Semibold", "600"],
                ["Bold", "700"],
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
        description="Semantic roles consumed by components. These specimens render in Poppins."
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
                    <DocsCopyToken value={`--text-${role}-size`} />
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
                      <DocsCopyToken value={`--text-${role}-size`} />
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
