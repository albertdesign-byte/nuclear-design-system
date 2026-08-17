import { medmoResolve } from "@medmo/tokens";
import { semanticRadius } from "@medmo/tokens/tooling";

import {
  DoDont,
  FoundationCell,
  FoundationRow,
  FoundationSection,
  FoundationTable,
} from "./foundation-frame";

const scale = Object.entries(semanticRadius.scale).map(([role, token]) => ({
  role,
  ...medmoResolve.radius.scale(role as keyof typeof semanticRadius.scale),
  ...token,
}));

const contexts = Object.entries(semanticRadius.context).map(([role, token]) => ({
  role,
  ...medmoResolve.radius.context(role as keyof typeof semanticRadius.context),
  ...token,
}));

const base = medmoResolve.radius.base();

export function RadiusGallery() {
  return (
    <div>
      <FoundationSection
        id="visual-preview"
        title="Visual preview"
        description={`${base.token} (${base.px}px) is the system default. Context tokens are preferred in components.`}
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-3">
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
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
                {token.px}px · {token.rem} · {token.purpose}
              </p>
            </article>
          ))}
        </div>
      </FoundationSection>

      <FoundationSection
        id="token-table"
        title="Token table"
        description="Scale steps plus context aliases. Context names encode intent so components do not pick a step by eye."
      >
        <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-label-size)] font-semibold">
          Scale
        </h3>
        <FoundationTable
          minWidthClassName="min-w-[48rem]"
          columns={["Token", "Primitive", "Value", "Use", "Avoid"]}
        >
          {scale.map((token) => (
            <FoundationRow key={token.role}>
              <FoundationCell>
                <code>radius-{token.role}</code>
              </FoundationCell>
              <FoundationCell>
                <code>{token.primitive}</code>
              </FoundationCell>
              <FoundationCell>
                {token.px}px · {token.rem}
              </FoundationCell>
              <FoundationCell muted>{token.usage}</FoundationCell>
              <FoundationCell muted>{token.doNot}</FoundationCell>
            </FoundationRow>
          ))}
          <FoundationRow>
            <FoundationCell>
              <code>{base.cssVar}</code>
            </FoundationCell>
            <FoundationCell>
              <code>{base.token}</code>
            </FoundationCell>
            <FoundationCell>
              {base.px}px · {base.rem}
            </FoundationCell>
            <FoundationCell muted>System default radius alias</FoundationCell>
            <FoundationCell muted>
              Prefer context tokens such as radius-button in components
            </FoundationCell>
          </FoundationRow>
        </FoundationTable>

        <h3 className="mb-[var(--space-stack-sm)] mt-[var(--space-stack-lg)] text-[length:var(--text-label-size)] font-semibold">
          Context
        </h3>
        <FoundationTable
          minWidthClassName="min-w-[44rem]"
          columns={["Token", "Scale", "Value", "Use", "Avoid"]}
        >
          {contexts.map((token) => (
            <FoundationRow key={token.role}>
              <FoundationCell>
                <code>radius-{token.role}</code>
              </FoundationCell>
              <FoundationCell>
                <code>radius-{token.scale}</code>
              </FoundationCell>
              <FoundationCell>{token.px}px</FoundationCell>
              <FoundationCell muted>{token.usage}</FoundationCell>
              <FoundationCell muted>{token.doNot}</FoundationCell>
            </FoundationRow>
          ))}
        </FoundationTable>
      </FoundationSection>

      <FoundationSection
        id="usage-guidance"
        title="Usage guidance"
        description="Everyday controls cap at radius-lg. radius-2xl is exceptional, not the default."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-3">
          {contexts.map((token) => (
            <article
              key={token.role}
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
            >
              <div
                aria-hidden
                className="h-12 bg-[var(--color-surface-muted)]"
                style={{ borderRadius: token.rem }}
              />
              <code className="mt-[var(--space-stack-sm)] block text-[length:var(--text-caption-size)]">
                --radius-{token.role}
              </code>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
                {token.purpose}
              </p>
            </article>
          ))}
        </div>
      </FoundationSection>

      <FoundationSection id="do-dont" title="Do / Don't">
        <DoDont
          doExample={
            <div className="flex items-center gap-[var(--space-inline-md)]">
              <span
                aria-hidden
                className="size-5 border border-[var(--color-border)] bg-[var(--color-surface)]"
                style={{
                  borderRadius: medmoResolve.radius.context("checkbox").rem,
                }}
              />
              <span className="text-[length:var(--text-label-size)]">
                Notify on results
              </span>
            </div>
          }
          doCaption={semanticRadius.context.checkbox.usage}
          dontExample={
            <div className="flex items-center gap-[var(--space-inline-md)]">
              <span
                aria-hidden
                className="size-5 border border-[var(--color-border)] bg-[var(--color-surface)]"
                style={{
                  borderRadius: medmoResolve.radius.scale("2xl").rem,
                }}
              />
              <span className="text-[length:var(--text-label-size)]">
                Notify on results
              </span>
            </div>
          }
          dontCaption={semanticRadius.scale["2xl"].doNot}
        />
      </FoundationSection>
    </div>
  );
}
