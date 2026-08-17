import type { CSSProperties } from "react";

import { medmoResolve } from "@medmo/tokens";
import {
  semanticTypography,
  tokenCssExports,
} from "@medmo/tokens/tooling";

import {
  DoDont,
  FoundationCell,
  FoundationRow,
  FoundationSection,
  FoundationTable,
} from "./foundation-frame";

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

const roles = Object.values(semanticTypography).map((token) => ({
  ...token,
  resolved: medmoResolve.typography.role(token.role),
}));

const familyPrimitives = [
  {
    token: "--font-family-sans",
    value: tokenCssExports.typography.primitives["--font-family-sans"],
    role: "Design System documentation experience",
    use: "Navigation, sidebar, documentation content, guidelines, educational material, and Design System chrome",
    doNot:
      "Components, product interfaces, real screens, and application UI",
  },
  {
    token: "--font-family-component",
    value: tokenCssExports.typography.primitives["--font-family-component"],
    role: "Canonical product typeface",
    use: "Components, product interfaces, real screens, and application UI",
    doNot:
      "Design System documentation chrome, sidebar, and educational prose",
  },
  {
    token: "--font-family-mono",
    value: tokenCssExports.typography.primitives["--font-family-mono"],
    role: "Code and identifiers",
    use: "Docs code samples; product code role inherits the component family unless a role specifies mono",
    doNot: "General UI text, headings, or prose paragraphs",
  },
] as const;

const weightPrimitives = Object.entries(tokenCssExports.typography.primitives)
  .filter(([name]) => name.startsWith("--font-weight-"))
  .map(([token, value]) => ({ token, value }));

export function TypographyGallery() {
  return (
    <div>
      <FoundationSection
        id="typography-strategy"
        title="Typography strategy"
        description="Nuclear uses two typefaces on purpose. They are not interchangeable, and the split is not a mismatch to resolve."
      >
        <FoundationTable
          minWidthClassName="min-w-[48rem]"
          columns={["Token", "Value", "Role", "Use", "Do not use"]}
        >
          {familyPrimitives.map((family) => (
            <FoundationRow key={family.token}>
              <FoundationCell>
                <code>{family.token}</code>
              </FoundationCell>
              <FoundationCell muted>{family.value}</FoundationCell>
              <FoundationCell>{family.role}</FoundationCell>
              <FoundationCell muted>{family.use}</FoundationCell>
              <FoundationCell muted>{family.doNot}</FoundationCell>
            </FoundationRow>
          ))}
        </FoundationTable>
      </FoundationSection>

      <FoundationSection
        id="visual-preview"
        title="Visual preview"
        description="Product specimens render in Poppins, the canonical component typeface."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-3">
          {weightPrimitives.map(({ token, value }) => (
            <div
              key={token}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
            >
              <p
                className="text-[length:var(--text-h2-size)] leading-[var(--text-h2-line-height)] text-[var(--color-text-primary)]"
                style={{
                  fontFamily: tokenCssExports.typography.primitives["--font-family-component"],
                  fontWeight: value,
                }}
              >
                Aa 0123
              </p>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
                {token} · {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[var(--space-stack-lg)] space-y-[var(--space-stack-sm)]">
          {roles.map(({ role, resolved }) => {
            const previewStyle: CSSProperties = {
              fontFamily: resolved.fontFamily,
              fontSize: resolved.fontSize,
              fontWeight: resolved.fontWeight,
              lineHeight: resolved.lineHeight,
              letterSpacing: resolved.letterSpacing,
              textTransform:
                resolved.textTransform === "uppercase" ? "uppercase" : undefined,
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
                  <dl className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-secondary)]">
                    <div>{resolved.fontSizePx}px</div>
                    <div>Weight {resolved.fontWeight}</div>
                    <div>Line height {resolved.lineHeight}</div>
                  </dl>
                </div>
                <div className="min-w-0">
                  <p
                    className="break-words text-[var(--color-text-primary)]"
                    style={previewStyle}
                  >
                    {roleSamples[role]}
                  </p>
                  <p className="mt-[var(--space-stack-sm)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-secondary)]">
                    {resolved.usage}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </FoundationSection>

      <FoundationSection
        id="token-table"
        title="Token table"
        description="Semantic roles consumed by components. Size, weight, and line height resolve from the TypeScript sources."
      >
        <FoundationTable
          minWidthClassName="min-w-[56rem]"
          columns={[
            "Role",
            "Size",
            "Weight",
            "Line height",
            "Letter spacing",
            "Family",
            "Use",
          ]}
        >
          {roles.map(({ role, resolved }) => (
            <FoundationRow key={role}>
              <FoundationCell>
                <code>text-{role}</code>
              </FoundationCell>
              <FoundationCell>
                {resolved.fontSizePx}px · {resolved.fontSize}
              </FoundationCell>
              <FoundationCell>{resolved.fontWeight}</FoundationCell>
              <FoundationCell>{resolved.lineHeight}</FoundationCell>
              <FoundationCell>{resolved.letterSpacing}</FoundationCell>
              <FoundationCell muted>{resolved.fontFamily}</FoundationCell>
              <FoundationCell muted>{resolved.usage}</FoundationCell>
            </FoundationRow>
          ))}
        </FoundationTable>
      </FoundationSection>

      <FoundationSection id="usage-guidance" title="Usage guidance">
        <FoundationTable
          minWidthClassName="min-w-[48rem]"
          columns={["Role", "Purpose", "Use", "Avoid"]}
        >
          {roles.map(({ role, resolved }) => (
            <FoundationRow key={role}>
              <FoundationCell>
                <code>text-{role}</code>
              </FoundationCell>
              <FoundationCell muted>{resolved.purpose}</FoundationCell>
              <FoundationCell muted>{resolved.usage}</FoundationCell>
              <FoundationCell muted>{resolved.doNot}</FoundationCell>
            </FoundationRow>
          ))}
        </FoundationTable>
      </FoundationSection>

      <FoundationSection id="do-dont" title="Do / Don't">
        <DoDont
          doExample={
            <p
              className="text-[var(--color-text-primary)]"
              style={{
                fontFamily: tokenCssExports.typography.primitives["--font-family-component"],
                fontSize: medmoResolve.typography.role("h1").fontSize,
                fontWeight: medmoResolve.typography.role("h1").fontWeight,
                lineHeight: medmoResolve.typography.role("h1").lineHeight,
              }}
            >
              Patient records
            </p>
          }
          doCaption="Product UI uses Poppins via --font-family-component and text-h1."
          dontExample={
            <p
              className="text-[var(--color-text-primary)]"
              style={{
                fontFamily: tokenCssExports.typography.primitives["--font-family-sans"],
                fontSize: medmoResolve.typography.role("h1").fontSize,
                fontWeight: medmoResolve.typography.role("h1").fontWeight,
                lineHeight: medmoResolve.typography.role("h1").lineHeight,
              }}
            >
              Patient records
            </p>
          }
          dontCaption="Do not use IBM Plex Sans Condensed for components or product screens."
        />
      </FoundationSection>
    </div>
  );
}
