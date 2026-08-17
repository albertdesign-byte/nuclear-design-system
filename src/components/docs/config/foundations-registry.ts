import { iconDocumentation, tokenFamilies } from "@medmo/tokens/tooling";

export type FoundationSection = {
  id: string;
  title: string;
  aliases: string[];
  keywords: string[];
};

export type FoundationRegistryEntry = {
  title: string;
  href: string;
  description: string;
  aliases: string[];
  keywords: string[];
  sections: FoundationSection[];
};

function tokenSearchKeywords(href: string) {
  const family = tokenFamilies.find((item: (typeof tokenFamilies)[number]) => item.href === href);
  return family ? [...family.cssVariables] : [];
}

export const foundationsRegistry: FoundationRegistryEntry[] = [
  {
    title: "Overview",
    href: "/docs/foundations",
    description:
      "Core design decisions and tokens shared by every Nuclear component and product.",
    aliases: ["foundation index", "design foundations"],
    keywords: ["design system", "tokens", "visual language", "accessibility"],
    sections: [],
  },
  {
    title: "Colors",
    href: "/docs/foundations/colors",
    description:
      "Medmo primary palette, semantic color roles, usage guidance, and visual examples.",
    aliases: ["color", "palette", "colour"],
    keywords: [
      "primary",
      "semantic colors",
      "feedback",
      "success",
      "warning",
      "error",
      "info",
      ...tokenSearchKeywords("/docs/foundations/colors"),
    ],
    sections: [
      {
        id: "primary-palette",
        title: "Primary palette",
        aliases: ["brand palette"],
        keywords: ["primary scale", "hex", "swatches"],
      },
      {
        id: "semantic-colors",
        title: "Semantic colors",
        aliases: ["color roles"],
        keywords: ["background", "surface", "text", "action", "border"],
      },
      {
        id: "feedback-examples",
        title: "Feedback examples",
        aliases: ["status colors"],
        keywords: ["success", "warning", "error", "info"],
      },
      {
        id: "usage-guidelines",
        title: "Usage guidelines",
        aliases: ["color rules"],
        keywords: ["use", "avoid", "do", "don't"],
      },
    ],
  },
  {
    title: "Typography",
    href: "/docs/foundations/typography",
    description:
      "Typography strategy for documentation versus product UI, the complete semantic type scale, weights, line heights, and usage guidance.",
    aliases: ["type", "type scale", "font"],
    keywords: [
      "IBM Plex Sans Condensed",
      "Poppins",
      "typography strategy",
      "documentation typeface",
      "product typeface",
      "font size",
      "font weight",
      "line height",
      "text roles",
      ...tokenSearchKeywords("/docs/foundations/typography"),
    ],
    sections: [
      {
        id: "typography-strategy",
        title: "Typography Strategy",
        aliases: ["dual typeface", "font strategy"],
        keywords: [
          "IBM Plex Sans Condensed",
          "Poppins",
          "documentation",
          "product UI",
          "components",
        ],
      },
      {
        id: "typeface",
        title: "IBM Plex Sans Condensed",
        aliases: ["font family", "typeface", "documentation typeface"],
        keywords: ["regular", "medium", "semibold", "docs chrome"],
      },
      {
        id: "type-scale",
        title: "Complete type scale",
        aliases: ["semantic typography roles"],
        keywords: ["display", "h1", "h2", "h3", "body", "label", "caption"],
      },
      {
        id: "weight-line-height-use-cases",
        title: "Weight, line height, and use cases",
        aliases: ["typography metrics"],
        keywords: ["weight", "line height", "usage"],
      },
    ],
  },
  {
    title: "Spacing",
    href: "/docs/foundations/spacing",
    description:
      "The Medmo 4px grid, 8px rhythm, primitive scale, semantic tokens, and visual spacing examples.",
    aliases: ["space", "layout spacing", "gap"],
    keywords: [
      "4px",
      "8px",
      "rhythm",
      "inline",
      "stack",
      "context",
      ...tokenSearchKeywords("/docs/foundations/spacing"),
    ],
    sections: [
      {
        id: "grid-rhythm",
        title: "4px grid and 8px rhythm",
        aliases: ["base grid"],
        keywords: ["4px", "8px", "layout grid"],
      },
      {
        id: "primitive-scale",
        title: "Primitive scale",
        aliases: ["spacing scale"],
        keywords: ["spacing primitives", "pixels", "rem"],
      },
      {
        id: "semantic-tokens",
        title: "Semantic tokens",
        aliases: ["spacing roles"],
        keywords: ["inline", "stack", "context", "card", "form", "table"],
      },
      {
        id: "examples",
        title: "Examples",
        aliases: ["spacing examples"],
        keywords: ["actions", "form stack", "section rhythm"],
      },
    ],
  },
  {
    title: "Radius",
    href: "/docs/foundations/radius",
    description:
      "Subtle corner radius scale, system default, and context tokens for controls and surfaces.",
    aliases: ["border radius", "corners", "rounded"],
    keywords: [
      "radius-lg",
      "radius-button",
      "radius-card",
      "pill",
      "8px",
      ...tokenSearchKeywords("/docs/foundations/radius"),
    ],
    sections: [
      {
        id: "radius-scale",
        title: "Radius scale",
        aliases: ["radius tokens"],
        keywords: ["none", "sm", "md", "lg", "xl", "2xl", "full"],
      },
      {
        id: "context-tokens",
        title: "Context tokens",
        aliases: ["radius context"],
        keywords: ["checkbox", "button", "input", "card", "dialog", "avatar"],
      },
    ],
  },
  {
    title: "Shadows",
    href: "/docs/foundations/shadows",
    description:
      "The Medmo shadow scale from XS through XL, with surface guidance and application examples.",
    aliases: ["shadow", "depth"],
    keywords: [
      "box shadow",
      "surface",
      "floating",
      "modal",
      "overlay",
      ...tokenSearchKeywords("/docs/foundations/shadows"),
    ],
    sections: [
      {
        id: "shadow-scale",
        title: "Shadow scale",
        aliases: ["shadow tokens"],
        keywords: ["none", "xs", "sm", "md", "lg", "xl"],
      },
      {
        id: "application-examples",
        title: "Application examples",
        aliases: ["shadow examples"],
        keywords: ["popover", "dialog", "command", "card"],
      },
      {
        id: "usage-guidelines",
        title: "Usage guidelines",
        aliases: ["shadow rules"],
        keywords: ["surface guidance", "use", "avoid"],
      },
    ],
  },
  {
    title: "Icons",
    href: "/docs/foundations/icons",
    description:
      "Iconography standards for Medmo, including library, sizes, color, accessibility, and healthcare UI patterns.",
    aliases: ["iconography", "icon"],
    keywords: [
      iconDocumentation.library.name,
      iconDocumentation.colorRule,
      `stroke ${iconDocumentation.stroke.width}`,
      ...Object.keys(iconDocumentation.sizes).map((role) => `icon-${role}`),
      ...iconDocumentation.catalog.flatMap(({ name, label, aliases }) => [
        name,
        label,
        ...aliases,
      ]),
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        aliases: ["icon overview"],
        keywords: ["comprehension", "clinical workflows"],
      },
      {
        id: "icon-library",
        title: "Icon library",
        aliases: ["Lucide library"],
        keywords: ["lucide-react", "imports"],
      },
      {
        id: "sizes",
        title: "Sizes",
        aliases: ["icon scale"],
        keywords: Object.keys(iconDocumentation.sizes).map(
          (role) => `icon-${role}`
        ),
      },
      {
        id: "usage-guidelines",
        title: "Usage guidelines",
        aliases: ["icon rules"],
        keywords: ["buttons", "inputs", "navigation", "alerts", "cards"],
      },
      {
        id: "color-usage",
        title: "Color usage",
        aliases: ["icon color"],
        keywords: ["currentColor", "semantic color"],
      },
      {
        id: "accessibility",
        title: "Accessibility",
        aliases: ["icon a11y"],
        keywords: ["aria-label", "aria-hidden", "accessible name"],
      },
      {
        id: "do-dont",
        title: "Do and don't",
        aliases: ["icon anti-patterns"],
        keywords: ["correct", "incorrect"],
      },
      {
        id: "developer-examples",
        title: "Developer examples",
        aliases: ["icon code examples"],
        keywords: ["React", "Button", "Input", "navigation"],
      },
    ],
  },
  {
    title: "Disabled State Guidelines",
    href: "/docs/foundations/disabled-state",
    description:
      "When to disable controls, shared tokens, accessibility guidance, and component patterns.",
    aliases: ["disabled state", "disabled controls"],
    keywords: [
      "disabled",
      "aria-disabled",
      "data-disabled",
      "inactive",
      "unavailable",
    ],
    sections: [
      {
        id: "overview",
        title: "Overview",
        aliases: ["disabled overview"],
        keywords: ["shared pattern", "interaction"],
      },
      {
        id: "native-disabled",
        title: "Native disabled",
        aliases: ["disabled attribute", "HTML disabled"],
        keywords: ["button", "input", "keyboard", "focus", "browser"],
      },
      {
        id: "aria-disabled",
        title: "aria-disabled",
        aliases: ["ARIA disabled"],
        keywords: ["link", "event guard", "focus", "screen reader"],
      },
      {
        id: "data-disabled",
        title: "data-disabled",
        aliases: ["disabled data attribute"],
        keywords: ["menu item", "Base UI", "composite widget"],
      },
      {
        id: "when-to-hide",
        title: "When to hide instead",
        aliases: ["hide unavailable actions"],
        keywords: ["permissions", "feature availability"],
      },
      {
        id: "ux-practices",
        title: "UX best practices",
        aliases: ["disabled UX"],
        keywords: ["helper text", "contrast", "validation"],
      },
      {
        id: "component-coverage",
        title: "Component coverage",
        aliases: ["disabled utilities"],
        keywords: ["shared classes", "Button", "Input", "Select"],
      },
      {
        id: "examples",
        title: "Examples",
        aliases: ["disabled examples"],
        keywords: ["do", "don't", "clinical UI"],
      },
    ],
  },
];

export function getFoundationEntry(href: string) {
  return foundationsRegistry.find((entry) => entry.href === href);
}

export function getFoundationNeighbors(href: string) {
  const index = foundationsRegistry.findIndex((entry) => entry.href === href);

  if (index === -1) {
    return {};
  }

  return {
    previous: foundationsRegistry[index - 1],
    next: foundationsRegistry[index + 1],
  };
}

export function getFoundationSearchEntries() {
  return foundationsRegistry.flatMap((entry) => {
    const pageSearchText = [
      entry.description,
      ...entry.aliases,
      ...entry.keywords,
    ].join(" ");

    return [
      {
        label: entry.title,
        value: entry.href,
        group: "Foundations",
        searchText: pageSearchText,
      },
      ...entry.sections.map((section) => ({
        label: `${entry.title}: ${section.title}`,
        value: `${entry.href}#${section.id}`,
        group: entry.title,
        searchText: [
          entry.description,
          ...entry.aliases,
          ...entry.keywords,
          ...section.aliases,
          ...section.keywords,
          section.id,
        ].join(" "),
      })),
    ];
  });
}
