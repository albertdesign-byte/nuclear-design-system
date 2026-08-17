import { medmoResolve } from "@medmo/tokens";
import { semanticShadows, tokenCssExports } from "@medmo/tokens/tooling";

import {
  DoDont,
  FoundationCell,
  FoundationRow,
  FoundationSection,
  FoundationTable,
  ThemeFrame,
} from "./foundation-frame";

const roles = Object.keys(semanticShadows.scale) as Array<
  keyof typeof semanticShadows.scale
>;

const shadows = roles.map((role) => ({
  role,
  ...medmoResolve.shadows.scale(role),
  lightValue: tokenCssExports.shadows.primitives[`--shadow-layer-${role}`],
  darkValue:
    role === "none"
      ? tokenCssExports.shadows.primitives["--shadow-layer-none"]
      : tokenCssExports.shadows.primitivesDark[`--shadow-layer-${role}`],
}));

export function ShadowsGallery() {
  return (
    <div>
      <FoundationSection
        id="visual-preview"
        title="Visual preview"
        description="XS through XL support progressively detached surfaces. None remains the default for most static UI. Use the Storybook theme toolbar to inspect dark mode; depth still comes from surface tokens first."
      >
        <div className="grid gap-[var(--space-card-gap)] md:grid-cols-2">
          <ThemeFrame mode="light" label="Light">
            <ShadowPreviewGrid />
          </ThemeFrame>
          <ThemeFrame mode="dark" label="Dark">
            <ShadowPreviewGrid />
          </ThemeFrame>
        </div>
      </FoundationSection>

      <FoundationSection id="application-examples" title="Application examples">
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
                  style={{ boxShadow: `var(--shadow-${shadow.role})` }}
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
                  <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-secondary)]">
                    Avoid: {shadow.doNot}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </FoundationSection>

      <FoundationSection
        id="token-table"
        title="Token table"
        description="Public API is shadow-none through shadow-xl. Primitive --shadow-layer-* values are the runtime source; components consume --shadow-*."
      >
        <FoundationTable
          minWidthClassName="min-w-[56rem]"
          columns={[
            "Token",
            "Light value",
            "Dark value",
            "Surface",
            "Use",
            "Avoid",
          ]}
        >
          {shadows.map((shadow) => (
            <FoundationRow key={shadow.role}>
              <FoundationCell>
                <code>--shadow-{shadow.role}</code>
              </FoundationCell>
              <FoundationCell muted>
                <code className="break-all">{shadow.lightValue}</code>
              </FoundationCell>
              <FoundationCell muted>
                <code className="break-all">{shadow.darkValue}</code>
              </FoundationCell>
              <FoundationCell muted>{shadow.surfaceGuidance}</FoundationCell>
              <FoundationCell muted>{shadow.usage}</FoundationCell>
              <FoundationCell muted>{shadow.doNot}</FoundationCell>
            </FoundationRow>
          ))}
        </FoundationTable>
      </FoundationSection>

      <FoundationSection
        id="usage-guidance"
        title="Usage guidance"
        description="Medmo does not expose elevation tokens. Depth is a surface-hierarchy rule; shadow only reinforces it."
      >
        <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-lg)] text-[length:var(--text-body-size)] leading-[var(--text-body-line-height)] text-[var(--color-text-secondary)]">
          <li>{semanticShadows.scale.none.usage}</li>
          <li>{semanticShadows.scale.sm.usage}</li>
          <li>{semanticShadows.scale.md.usage}</li>
          <li>{semanticShadows.scale.lg.usage}</li>
        </ul>
      </FoundationSection>

      <FoundationSection id="do-dont" title="Do / Don't">
        <DoDont
          doExample={
            <div
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
              style={{ boxShadow: "var(--shadow-none)" }}
            >
              <p className="text-[length:var(--text-label-size)] font-semibold">
                Orders
              </p>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
                Static card with ring, no shadow.
              </p>
            </div>
          }
          doCaption={semanticShadows.scale.none.usage}
          dontExample={
            <div
              className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
              style={{ boxShadow: "var(--shadow-xl)" }}
            >
              <p className="text-[length:var(--text-label-size)] font-semibold">
                Orders
              </p>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
                Maximum shadow on a resting table card.
              </p>
            </div>
          }
          dontCaption={semanticShadows.scale.xl.doNot}
        />
      </FoundationSection>
    </div>
  );
}

function ShadowPreviewGrid() {
  return (
    <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2">
      {shadows.map((shadow) => (
        <div
          key={shadow.role}
          className="flex min-h-28 flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
          style={{ boxShadow: `var(--shadow-${shadow.role})` }}
        >
          <p className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
            Shadow {shadow.role}
          </p>
          <code className="text-[length:var(--text-caption-size)]">
            --shadow-{shadow.role}
          </code>
        </div>
      ))}
    </div>
  );
}
