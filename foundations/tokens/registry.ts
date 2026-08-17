/**
 * Token family registry — canonical sources for Colors, Spacing,
 * Typography, Shadows, and Radius.
 *
 * Documentation, search, foundations pages, and CSS exports derive from
 * the TypeScript sources listed here. CSS files are runtime mirrors.
 */

import { allSemanticColorCssVariables } from "../colors/css-variables"
import { allSemanticRadiusTokens } from "../radius/contract"
import { allSemanticShadowTokens } from "../shadows/contract"
import { allSemanticSpacingTokens } from "../spacing/contract"
import { allSemanticTypographyTokens } from "../typography/contract"
import { flattenTokenCssExports, tokenCssExports } from "./css-export"

export const tokenContractMarker = "token-contract" as const

export const tokenFamilies = [
  {
    id: "colors",
    title: "Colors",
    href: "/docs/foundations/colors",
    docsPath: "docs/design-system/foundations/colors.mdx",
    livePage: "src/app/docs/foundations/colors/page.tsx",
    cssPath: "foundations/colors/colors.css",
    storybook: "Foundations/Colors",
    canonical: [
      "foundations/colors/primitives",
      "foundations/colors/semantic/light.ts",
      "foundations/colors/semantic/dark.ts",
      "foundations/colors/focus/tokens.ts",
      "foundations/colors/css-variables.ts",
    ],
    cssVariables: [
      ...allSemanticColorCssVariables,
      "--focus-ring-width",
      "--focus-ring-offset",
    ],
  },
  {
    id: "spacing",
    title: "Spacing",
    href: "/docs/foundations/spacing",
    docsPath: "docs/design-system/foundations/spacing.mdx",
    livePage: "src/app/docs/foundations/spacing/page.tsx",
    cssPath: "foundations/spacing/spacing.css",
    storybook: "Foundations/Spacing",
    canonical: [
      "foundations/spacing/primitives/scale.ts",
      "foundations/spacing/semantic",
    ],
    cssVariables: [
      ...Object.keys(tokenCssExports.spacing.primitives),
      ...allSemanticSpacingTokens,
    ],
  },
  {
    id: "typography",
    title: "Typography",
    href: "/docs/foundations/typography",
    docsPath: "docs/design-system/foundations/typography.mdx",
    livePage: "src/app/docs/foundations/typography/page.tsx",
    cssPath: "foundations/typography/typography.css",
    storybook: "Foundations/Typography",
    canonical: [
      "foundations/typography/primitives",
      "foundations/typography/semantic/roles.ts",
    ],
    cssVariables: [
      ...Object.keys(tokenCssExports.typography.primitives),
      ...allSemanticTypographyTokens,
    ],
  },
  {
    id: "radius",
    title: "Radius",
    href: "/docs/foundations/radius",
    docsPath: "docs/design-system/foundations/radius.mdx",
    livePage: "src/app/docs/foundations/radius/page.tsx",
    cssPath: "foundations/radius/radius.css",
    storybook: "Foundations/Radius",
    canonical: [
      "foundations/radius/primitives/scale.ts",
      "foundations/radius/semantic",
    ],
    cssVariables: [
      ...Object.keys(tokenCssExports.radius.primitives),
      ...allSemanticRadiusTokens,
    ],
  },
  {
    id: "shadows",
    title: "Shadows",
    href: "/docs/foundations/shadows",
    docsPath: "docs/design-system/foundations/shadows.mdx",
    livePage: "src/app/docs/foundations/shadows/page.tsx",
    cssPath: "foundations/shadows/shadows.css",
    storybook: "Foundations/Shadows",
    canonical: [
      "foundations/shadows/primitives/definitions.ts",
      "foundations/shadows/semantic/scale.ts",
    ],
    cssVariables: [
      ...Object.keys(tokenCssExports.shadows.primitives),
      ...allSemanticShadowTokens,
    ],
  },
] as const

export type TokenFamilyId = (typeof tokenFamilies)[number]["id"]

export function tokenContractComment(family: TokenFamilyId) {
  return `<!-- ${tokenContractMarker}: family=${family} -->`
}

export const tokenDocumentation = {
  families: tokenFamilies,
  cssExports: tokenCssExports,
  cssVariables: flattenTokenCssExports(),
  searchTerms: tokenFamilies.flatMap((family) => [
    family.title.toLowerCase(),
    ...family.cssVariables,
  ]),
} as const
