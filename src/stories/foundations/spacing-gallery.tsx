import {
  semanticSpacing,
  spacingPrimitiveSteps,
  spacingScale,
  tokenCssExports,
} from "@medmo/tokens/tooling";

import {
  DoDont,
  FoundationCell,
  FoundationRow,
  FoundationSection,
  FoundationTable,
} from "./foundation-frame";

const semanticGroups = [
  {
    name: "Inline",
    prefix: "space-inline",
    cssPrefix: "--space-inline",
    tokens: semanticSpacing.inline,
  },
  {
    name: "Stack",
    prefix: "space-stack",
    cssPrefix: "--space-stack",
    tokens: semanticSpacing.stack,
  },
  {
    name: "Context",
    prefix: "space",
    cssPrefix: "--space",
    tokens: semanticSpacing.context,
  },
] as const;

function getSpacingValue(primitive: string) {
  const step = Number(primitive.replace("spacing-", "")) as keyof typeof spacingScale;
  return spacingScale[step].px;
}

export function SpacingGallery() {
  return (
    <div>
      <FoundationSection id="grid-rhythm" title="4px grid and 8px rhythm">
        <div className="grid gap-[var(--space-card-gap)] md:grid-cols-2">
          <article className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-dialog)]">
            <div className="flex items-end gap-[var(--space-inline-xs)]">
              {([4, 8, 12, 16, 20, 24, 28, 32] as const).map((px) => (
                <span
                  key={px}
                  aria-hidden
                  className="w-1 bg-[var(--color-action-primary)]"
                  style={{ height: `${px}px` }}
                />
              ))}
            </div>
            <h3 className="mt-[var(--space-stack-md)] text-[length:var(--text-label-size)] font-semibold">
              4px base unit
            </h3>
            <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              {spacingScale[4].usage}
            </p>
          </article>
          <article className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-dialog)]">
            <div className="flex items-center gap-[var(--space-inline-xs)]">
              {([8, 16, 24, 32] as const).map((px) => (
                <span
                  key={px}
                  aria-hidden
                  className="h-8 bg-[var(--color-action-primary)]"
                  style={{ width: `${px}px` }}
                />
              ))}
            </div>
            <h3 className="mt-[var(--space-stack-md)] text-[length:var(--text-label-size)] font-semibold">
              8px component rhythm
            </h3>
            <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
              {spacingScale[8].usage}
            </p>
          </article>
        </div>
      </FoundationSection>

      <FoundationSection
        id="visual-preview"
        title="Visual preview"
        description="Semantic gaps rendered from the primitive each role references."
      >
        <div className="grid gap-[var(--space-card-gap)] md:grid-cols-3">
          {[
            {
              name: "Inline actions",
              token: "space-inline-sm",
              value: getSpacingValue(semanticSpacing.inline.sm.primitive),
              direction: "row" as const,
            },
            {
              name: "Form stack",
              token: "space-stack-md",
              value: getSpacingValue(semanticSpacing.stack.md.primitive),
              direction: "column" as const,
            },
            {
              name: "Section rhythm",
              token: "space-section",
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
              <p className="text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
                {example.token} · {example.value}px
              </p>
            </article>
          ))}
        </div>
      </FoundationSection>

      <FoundationSection
        id="primitive-scale"
        title="Primitive scale"
        description="Reference only. Product code uses the semantic tokens below."
      >
        <FoundationTable
          minWidthClassName="min-w-[42rem]"
          columns={["Token", "Value", "CSS", "Visual", "Intent"]}
        >
          {spacingPrimitiveSteps.map((step) => {
            const token = spacingScale[step];
            const cssName = `--spacing-${step}`;
            return (
              <FoundationRow key={step}>
                <FoundationCell>
                  <code>spacing-{step}</code>
                </FoundationCell>
                <FoundationCell>
                  {token.px}px · {token.rem}
                </FoundationCell>
                <FoundationCell>
                  <code>{cssName}</code>
                  <span className="mt-[var(--space-stack-xs)] block text-[var(--color-text-muted)]">
                    {tokenCssExports.spacing.primitives[cssName]}
                  </span>
                </FoundationCell>
                <FoundationCell>
                  <span
                    aria-hidden
                    className="block h-3 max-w-full rounded-full bg-[var(--color-action-primary)]"
                    style={{ width: `${token.px}px` }}
                  />
                </FoundationCell>
                <FoundationCell muted>{token.usage}</FoundationCell>
              </FoundationRow>
            );
          })}
        </FoundationTable>
      </FoundationSection>

      <FoundationSection id="token-table" title="Token table">
        <div className="space-y-[var(--space-stack-lg)]">
          {semanticGroups.map((group) => (
            <div key={group.name}>
              <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-label-size)] font-semibold">
                {group.name}
              </h3>
              <FoundationTable
                minWidthClassName="min-w-[48rem]"
                columns={["Token", "Primitive", "Value", "Use", "Avoid"]}
              >
                {Object.entries(group.tokens).map(([role, token]) => (
                    <FoundationRow key={role}>
                      <FoundationCell>
                        <code>
                          {group.cssPrefix}-{role}
                        </code>
                      </FoundationCell>
                      <FoundationCell>
                        <code>{token.primitive}</code>
                      </FoundationCell>
                      <FoundationCell>
                        {getSpacingValue(token.primitive)}px
                      </FoundationCell>
                      <FoundationCell muted>{token.usage}</FoundationCell>
                      <FoundationCell muted>{token.doNot}</FoundationCell>
                    </FoundationRow>
                ))}
              </FoundationTable>
            </div>
          ))}
        </div>
      </FoundationSection>

      <FoundationSection
        id="usage-guidance"
        title="Usage guidance"
        description="Components consume --space-* exclusively. Primitive --spacing-* names are an implementation detail."
      >
        <p className="text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-[var(--color-text-secondary)]">
          Semantic names encode intent. {semanticSpacing.context.card.usage}.{" "}
          {semanticSpacing.context.table.usage}.{" "}
          {semanticSpacing.context["button-icon-gap"].usage}.
        </p>
      </FoundationSection>

      <FoundationSection id="do-dont" title="Do / Don't">
        <DoDont
          doExample={
            <div
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: `${getSpacingValue(semanticSpacing.context.form.primitive)}px`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: `${getSpacingValue(semanticSpacing.context["form-label"].primitive)}px`,
                }}
              >
                <span className="text-[length:var(--text-label-size)] font-medium">
                  Date of birth
                </span>
                <span className="h-8 rounded-[var(--radius-input)] border border-[var(--color-border)] bg-[var(--color-surface)]" />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: `${getSpacingValue(semanticSpacing.context["form-label"].primitive)}px`,
                }}
              >
                <span className="text-[length:var(--text-label-size)] font-medium">
                  Insurance ID
                </span>
                <span className="h-8 rounded-[var(--radius-input)] border border-[var(--color-border)] bg-[var(--color-surface)]" />
              </div>
            </div>
          }
          doCaption={`${semanticSpacing.context["form-label"].usage}. ${semanticSpacing.context.form.usage}.`}
          dontExample={
            <div
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: `${spacingScale[2].px}px`,
              }}
            >
              <span className="text-[length:var(--text-label-size)] font-medium">
                Date of birth
              </span>
              <span className="h-8 rounded-[var(--radius-input)] border border-[var(--color-border)] bg-[var(--color-surface)]" />
              <span className="text-[length:var(--text-label-size)] font-medium">
                Insurance ID
              </span>
              <span className="h-8 rounded-[var(--radius-input)] border border-[var(--color-border)] bg-[var(--color-surface)]" />
            </div>
          }
          dontCaption={spacingScale[2].usage}
        />
      </FoundationSection>
    </div>
  );
}
