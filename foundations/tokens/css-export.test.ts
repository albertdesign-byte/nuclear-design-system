import { readFileSync } from "node:fs";
import { join } from "node:path";

import { describe, expect, it } from "vitest";

import {
  colorCssExports,
  flattenTokenCssExports,
  radiusCssExports,
  shadowCssExports,
  spacingCssExports,
  tokenCssExports,
  typographyCssExports,
} from "./css-export";
import { tokenFamilies } from "./registry";

function read(relativePath: string) {
  return readFileSync(join(process.cwd(), relativePath), "utf8");
}

function normalizeCssValue(value: string) {
  return value
    .replace(/\s+/g, " ")
    .replace(/,\s+/g, ", ")
    .trim()
    .replace(/^0(?:rem|px)$/i, "0")
    .toLowerCase();
}

function extractBlock(css: string, selector: string) {
  const match = css.match(
    new RegExp(`${selector.replace(".", "\\.")}\\s*\\{([\\s\\S]*?)\\n\\}`)
  );
  return match?.[1] ?? "";
}

function extractCustomProperties(block: string) {
  const properties: Record<string, string> = {};
  const pattern = /(--[\w-]+)\s*:\s*([^;]+);/g;
  for (const match of block.matchAll(pattern)) {
    properties[match[1]] = normalizeCssValue(match[2]);
  }
  return properties;
}

function expectMapInCss(
  expected: Record<string, string>,
  actual: Record<string, string>,
  label: string
) {
  for (const [name, value] of Object.entries(expected)) {
    expect(actual[name], `${label} missing ${name}`).toBeDefined();
    expect(actual[name], `${label} ${name}`).toBe(normalizeCssValue(value));
  }
}

describe("token CSS exports", () => {
  const spacingCss = read("foundations/spacing/spacing.css");
  const typographyCss = read("foundations/typography/typography.css");
  const radiusCss = read("foundations/radius/radius.css");
  const shadowCss = read("foundations/shadows/shadows.css");
  const colorCss = read("foundations/colors/colors.css");
  const themeCss = read("src/app/theme.css");

  it("does not duplicate CSS variable names in the generated export", () => {
    const flattened = flattenTokenCssExports();
    expect(new Set(Object.keys(flattened)).size).toBe(
      Object.keys(flattened).length
    );
  });

  it("mirrors spacing CSS from the TypeScript scale", () => {
    const root = extractCustomProperties(extractBlock(spacingCss, ":root"));
    expectMapInCss(spacingCssExports.primitives, root, "spacing primitives");
    expectMapInCss(spacingCssExports.semantics, root, "spacing semantics");
  });

  it("mirrors typography CSS from the TypeScript scale", () => {
    const root = extractCustomProperties(extractBlock(typographyCss, ":root"));
    expectMapInCss(
      typographyCssExports.primitives,
      root,
      "typography primitives"
    );
    expectMapInCss(
      typographyCssExports.semantics,
      root,
      "typography semantics"
    );
  });

  it("mirrors radius CSS from the TypeScript scale", () => {
    const root = extractCustomProperties(extractBlock(radiusCss, ":root"));
    expectMapInCss(radiusCssExports.primitives, root, "radius primitives");
    expectMapInCss(radiusCssExports.semantics, root, "radius semantics");
  });

  it("mirrors shadow CSS from the TypeScript scale", () => {
    const root = extractCustomProperties(extractBlock(shadowCss, ":root"));
    const dark = extractCustomProperties(extractBlock(shadowCss, ".dark"));
    expectMapInCss(shadowCssExports.primitives, root, "shadow primitives");
    expectMapInCss(shadowCssExports.semantics, root, "shadow semantics");
    expectMapInCss(shadowCssExports.primitivesDark, dark, "shadow dark");
  });

  it("mirrors color CSS from semantic primitive references", () => {
    const root = extractCustomProperties(extractBlock(colorCss, ":root"));
    const dark = extractCustomProperties(extractBlock(colorCss, ".dark"));
    expectMapInCss(colorCssExports.light, root, "color light");
    expectMapInCss(colorCssExports.dark, dark, "color dark");
  });

  it("keeps the Tailwind theme bridge as aliases only for these families", () => {
    const forbidden = [
      /--color-background:\s*oklch\(/,
      /--radius-sm:\s*[\d.]+rem/,
      /--shadow-md:\s*0 /,
      /--font-sans:\s*"/,
      /--spacing-\d+:\s*[\d.]+rem/,
    ];

    for (const pattern of forbidden) {
      expect(pattern.test(themeCss), String(pattern)).toBe(false);
    }
  });

  it("exposes a family registry for docs, search, and Storybook", () => {
    expect(tokenFamilies.map((family) => family.id)).toEqual([
      "colors",
      "spacing",
      "typography",
      "radius",
      "shadows",
    ]);
    expect(tokenCssExports.colors.light["--color-action-primary"]).toContain(
      "oklch("
    );
  });
});
