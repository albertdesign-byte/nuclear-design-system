import {
  colorCssAlpha,
  colorPrimitives,
  darkSemantic,
  focusCssNames,
  focusTokens,
  lightSemantic,
  resolvePrimitiveColor,
  semanticColorCssNames,
  tokenCssExports,
} from "@medmo/tokens/tooling";

import {
  DoDont,
  FoundationCell,
  FoundationRow,
  FoundationSection,
  FoundationTable,
  ThemeFrame,
} from "./foundation-frame";

const paletteOrder = [
  "base",
  "primary",
  "neutral",
  "success",
  "warning",
  "error",
  "info",
] as const satisfies ReadonlyArray<keyof typeof colorPrimitives>;

const onLightSwatch = resolvePrimitiveColor("neutral-800").hex;
const onDarkSwatch = resolvePrimitiveColor("white").hex;

function getTokenByPath(
  source: typeof lightSemantic | typeof darkSemantic,
  path: string
) {
  const value = path.split(".").reduce<unknown>((current, key) => {
    if (current && typeof current === "object" && key in current) {
      return (current as Record<string, unknown>)[key];
    }
    throw new Error(`Unknown color path: ${path}`);
  }, source);

  if (
    !value ||
    typeof value !== "object" ||
    !("primitive" in value) ||
    !("usage" in value) ||
    !("doNot" in value) ||
    !("purpose" in value)
  ) {
    throw new Error(`Color path does not resolve to a token: ${path}`);
  }

  return value as {
    primitive: Parameters<typeof resolvePrimitiveColor>[0];
    purpose: string;
    usage: string;
    doNot: string;
  };
}

function swatchLabelColor(step: string) {
  if (step === "black" || Number(step) >= 500) {
    return onDarkSwatch;
  }
  return onLightSwatch;
}

const semanticEntries = (
  Object.entries(semanticColorCssNames) as Array<
    [keyof typeof semanticColorCssNames, string]
  >
).map(([cssName, path]) => {
  const light = getTokenByPath(lightSemantic, path);
  const dark = getTokenByPath(darkSemantic, path);
  return {
    cssName,
    path,
    light,
    dark,
    lightValue: tokenCssExports.colors.light[cssName],
    darkValue: tokenCssExports.colors.dark[cssName],
    lightHex: resolvePrimitiveColor(light.primitive).hex,
    darkHex: resolvePrimitiveColor(dark.primitive).hex,
    lightAlpha: colorCssAlpha.light[cssName],
    darkAlpha: colorCssAlpha.dark[cssName],
  };
});

const focusEntries = (
  Object.entries(focusCssNames) as Array<[keyof typeof focusCssNames, string]>
).map(([cssName, key]) => ({
  cssName,
  value: tokenCssExports.colors.light[cssName],
  purpose:
    key === "ringWidth"
      ? focusTokens.ringWidth.purpose
      : focusTokens.ringOffset.purpose,
}));

export function ColorsGallery() {
  return (
    <div>
      <FoundationSection
        id="visual-preview"
        title="Visual preview"
        description="Primitive palettes are documentation references. Components consume semantic CSS variables, which follow the active theme."
      >
        <div className="grid gap-[var(--space-card-gap)] md:grid-cols-2">
          <ThemeFrame mode="light" label="Light semantic surfaces">
            <SemanticSurfacePreview />
          </ThemeFrame>
          <ThemeFrame mode="dark" label="Dark semantic surfaces">
            <SemanticSurfacePreview />
          </ThemeFrame>
        </div>
      </FoundationSection>

      {paletteOrder.map((paletteName) => {
        const palette = colorPrimitives[paletteName];
        return (
          <FoundationSection
            key={paletteName}
            id={`palette-${paletteName}`}
            title={`${paletteName.charAt(0).toUpperCase()}${paletteName.slice(1)} palette`}
            description={
              paletteName === "primary"
                ? "The Medmo brand scale is anchored at Primary 800."
                : paletteName === "base"
                  ? "Absolute white and black. Prefer semantic surface tokens in product UI."
                  : undefined
            }
          >
            <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2 lg:grid-cols-4">
              {Object.entries(palette).map(([step, color]) => (
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
                      style={{ color: swatchLabelColor(step) }}
                    >
                      {paletteName === "base" ? step : `${paletteName}-${step}`}
                    </span>
                  </div>
                  <div className="p-[var(--space-card)]">
                    <code className="text-[length:var(--text-caption-size)]">
                      {color.hex}
                    </code>
                    <p className="mt-[var(--space-stack-xs)] break-all text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
                      oklch({color.oklch})
                    </p>
                    <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-secondary)]">
                      {color.usage}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </FoundationSection>
        );
      })}

      <FoundationSection
        id="semantic-preview"
        title="Semantic roles"
        description="Live swatches use CSS variables so they follow light and dark mode. Hex values come from the referenced primitives."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2">
          {semanticEntries.map((entry) => (
            <article
              key={entry.cssName}
              className="flex gap-[var(--space-inline-md)] rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]"
            >
              <span
                aria-hidden
                className="size-12 shrink-0 rounded-[var(--radius-md)] border border-[var(--color-border-subtle)]"
                style={{ backgroundColor: `var(${entry.cssName})` }}
              />
              <div className="min-w-0">
                <code className="text-[length:var(--text-caption-size)]">
                  {entry.cssName}
                </code>
                <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
                  {entry.light.primitive} · {entry.lightHex}
                </p>
                <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] leading-[var(--text-caption-line-height)] text-[var(--color-text-secondary)]">
                  {entry.light.usage}
                </p>
              </div>
            </article>
          ))}
        </div>
      </FoundationSection>

      <FoundationSection
        id="feedback-preview"
        title="Feedback"
        description="Success, warning, error, and info each expose background, border, text, and solid foreground tokens."
      >
        <div className="grid gap-[var(--space-card-gap)] sm:grid-cols-2">
          {(
            Object.entries(lightSemantic.feedback) as Array<
              [
                keyof typeof lightSemantic.feedback,
                (typeof lightSemantic.feedback)[keyof typeof lightSemantic.feedback],
              ]
            >
          ).map(([name, tokens]) => {
            const prefix = `--color-${name}`;
            return (
              <article
                key={name}
                className="rounded-[var(--radius-lg)] border p-[var(--space-card)]"
                style={{
                  backgroundColor: `var(${prefix}-background)`,
                  borderColor: `var(${prefix}-border)`,
                  color: `var(${prefix}-text)`,
                }}
              >
                <h3 className="text-[length:var(--text-label-size)] font-semibold">
                  {name.charAt(0).toUpperCase()}
                  {name.slice(1)}
                </h3>
                <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]">
                  {tokens.background.usage}
                </p>
                <code className="mt-[var(--space-stack-sm)] block text-[length:var(--text-caption-size)]">
                  {prefix}-background
                </code>
              </article>
            );
          })}
        </div>
      </FoundationSection>

      <FoundationSection
        id="token-table"
        title="Token table"
        description="Semantic CSS variables with light and dark resolved values from the canonical TypeScript sources."
      >
        <FoundationTable
          minWidthClassName="min-w-[64rem]"
          columns={[
            "Token",
            "Light primitive",
            "Light value",
            "Dark primitive",
            "Dark value",
            "Use",
          ]}
        >
          {semanticEntries.map((entry) => (
            <FoundationRow key={entry.cssName}>
              <FoundationCell>
                <code>{entry.cssName}</code>
              </FoundationCell>
              <FoundationCell>
                <code>{entry.light.primitive}</code>
              </FoundationCell>
              <FoundationCell muted>
                {entry.lightHex}
                {entry.lightAlpha ? ` / ${entry.lightAlpha}` : ""}
              </FoundationCell>
              <FoundationCell>
                <code>{entry.dark.primitive}</code>
              </FoundationCell>
              <FoundationCell muted>
                {entry.darkHex}
                {entry.darkAlpha ? ` / ${entry.darkAlpha}` : ""}
              </FoundationCell>
              <FoundationCell muted>{entry.light.usage}</FoundationCell>
            </FoundationRow>
          ))}
          {focusEntries.map((entry) => (
            <FoundationRow key={entry.cssName}>
              <FoundationCell>
                <code>{entry.cssName}</code>
              </FoundationCell>
              <FoundationCell muted>—</FoundationCell>
              <FoundationCell muted>{entry.value}</FoundationCell>
              <FoundationCell muted>—</FoundationCell>
              <FoundationCell muted>{entry.value}</FoundationCell>
              <FoundationCell muted>{entry.purpose}</FoundationCell>
            </FoundationRow>
          ))}
        </FoundationTable>
      </FoundationSection>

      <FoundationSection
        id="usage-guidance"
        title="Usage guidance"
        description="Color communicates meaning. Most of the interface stays on the neutral scale; chromatic color appears only when it encodes action or status."
      >
        <FoundationTable
          minWidthClassName="min-w-[48rem]"
          columns={["Token", "Use", "Avoid"]}
        >
          {semanticEntries.map((entry) => (
            <FoundationRow key={entry.cssName}>
              <FoundationCell>
                <code>{entry.cssName}</code>
              </FoundationCell>
              <FoundationCell muted>{entry.light.usage}</FoundationCell>
              <FoundationCell muted>{entry.light.doNot}</FoundationCell>
            </FoundationRow>
          ))}
        </FoundationTable>
      </FoundationSection>

      <FoundationSection id="do-dont" title="Do / Don't">
        <DoDont
          doExample={
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
              <p className="text-[length:var(--text-title-size)] font-medium text-[var(--color-text-primary)]">
                Patient records
              </p>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-text-secondary)]">
                Hierarchy comes from type and space. Color marks the action.
              </p>
              <span className="mt-[var(--space-stack-sm)] inline-flex rounded-[var(--radius-button)] bg-[var(--color-action-primary)] px-[var(--space-button-padding-md)] py-[var(--space-stack-xs)] text-[length:var(--text-label-size)] text-[var(--color-action-primary-text)]">
                Continue
              </span>
            </div>
          }
          doCaption="Use --color-text-primary for headings and --color-action-primary for the CTA."
          dontExample={
            <div className="rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-card)]">
              <p className="text-[length:var(--text-title-size)] font-medium text-[var(--color-action-primary)]">
                Patient records
              </p>
              <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-body-small-size)] text-[var(--color-info-foreground)]">
                Decorative brand and info color on reading text.
              </p>
              <span className="mt-[var(--space-stack-sm)] inline-flex rounded-[var(--radius-button)] bg-[var(--color-success-foreground)] px-[var(--space-button-padding-md)] py-[var(--space-stack-xs)] text-[length:var(--text-label-size)] text-[var(--color-action-primary-text)]">
                Continue
              </span>
            </div>
          }
          dontCaption={lightSemantic.text.primary.doNot}
        />
      </FoundationSection>
    </div>
  );
}

function SemanticSurfacePreview() {
  return (
    <div className="space-y-[var(--space-stack-sm)]">
      <div className="rounded-[var(--radius-lg)] bg-[var(--color-surface)] p-[var(--space-card)] ring-1 ring-[var(--color-border-subtle)]">
        <p className="text-[length:var(--text-label-size)] font-semibold">
          --color-surface
        </p>
        <p className="mt-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
          {lightSemantic.surface.surface.usage}
        </p>
        <div className="mt-[var(--space-stack-sm)] flex gap-[var(--space-inline-sm)]">
          <span className="rounded-[var(--radius-md)] bg-[var(--color-action-primary)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-action-primary-text)]">
            Primary
          </span>
          <span className="rounded-[var(--radius-md)] bg-[var(--color-surface-muted)] px-[var(--space-inline-sm)] py-[var(--space-stack-xs)] text-[length:var(--text-caption-size)] text-[var(--color-text-secondary)]">
            Muted
          </span>
        </div>
      </div>
      <p className="text-[length:var(--text-caption-size)] text-[var(--color-text-muted)]">
        Background · {lightSemantic.surface.background.primitive} /{" "}
        {darkSemantic.surface.background.primitive}
      </p>
    </div>
  );
}
