import type { Metadata } from "next";

import type { DocsNavCategory } from "./navigation";

export type TemplateRegistryEntry = {
  title: string;
  href: string;
  description: string;
  aliases: string[];
  keywords: string[];
  storybook: string;
  relatedComponents: string[];
  comingSoon?: boolean;
};

export const templatesRegistry: TemplateRegistryEntry[] = [
  {
    title: "Overview",
    href: "/docs/templates",
    description:
      "Reusable, product-agnostic page and flow structures. Templates define slots, responsive layout, and orchestration. Products supply copy, validation, routing, and business logic.",
    aliases: ["template index", "page layouts"],
    keywords: ["layout", "slots", "page structure"],
    storybook: "Templates/Overview",
    relatedComponents: [],
  },
  {
    title: "AppShell",
    href: "/docs/templates/app-shell",
    description:
      "Operational application layout with sidebar, header, and main content slots. Compose App Sidebar, App Header, and page content. No product copy or routing.",
    aliases: ["application frame", "dashboard layout", "operational shell"],
    keywords: ["sidebar", "header", "main", "layout", "chrome"],
    storybook: "Templates/AppShell",
    relatedComponents: [
      "/docs/components/global-search-bar",
      "/docs/components/user-profile-block",
      "/docs/components/logo",
    ],
  },
  {
    title: "MultiStepFlowLayout",
    href: "/docs/templates/multi-step-flow-layout",
    description:
      "Generic multi-step workflow layout. Owns structure, progress navigation, header, content regions, and responsive behavior. Products own copy, validation, routing, business rules, and domain-specific fields.",
    aliases: [
      "intake shell",
      "patients shell",
      "multi-step flow",
      "wizard layout",
      "onboarding layout",
    ],
    keywords: [
      "multi-step",
      "progress",
      "header",
      "layout",
      "workflow",
      "guided",
    ],
    storybook: "Templates/MultiStepFlowLayout",
    relatedComponents: [
      "/docs/components/logo",
      "/docs/components/app-footer",
      "/docs/components/button",
    ],
  },
  {
    title: "SearchResults",
    href: "/docs/templates/search-results",
    description:
      "Search results layout with toolbar, search, and results slots. Compose inside AppShell. Nuclear owns structure. Products own copy, query logic, and the results table.",
    aliases: ["results page", "search layout", "list page"],
    keywords: ["search", "toolbar", "results", "worklist"],
    storybook: "Templates/SearchResults",
    relatedComponents: [
      "/docs/components/global-search-bar",
      "/docs/components/button",
      "/docs/components/data-table",
    ],
  },
  {
    title: "Detail View",
    href: "#",
    description:
      "Entity detail layout with header, tabs, and section slots. Not extracted: no product entity-detail screen exists yet.",
    aliases: ["detail page", "record view"],
    keywords: ["detail", "tabs", "entity"],
    storybook: "",
    relatedComponents: [],
    comingSoon: true,
  },
];

export function getTemplateEntry(href: string) {
  const normalized = href.replace(/\/$/, "") || "/";
  return templatesRegistry.find((item) => item.href === normalized);
}

export function getDocumentedTemplates() {
  return templatesRegistry.filter(
    (entry) => entry.href.startsWith("/docs/templates") && !entry.comingSoon
  );
}

export function getTemplateNeighbors(href: string) {
  const documented = getDocumentedTemplates();
  const index = documented.findIndex((item) => item.href === href);

  if (index === -1) {
    return {};
  }

  return {
    previous: documented[index - 1],
    next: documented[index + 1],
  };
}

export function getTemplateMetadata(href: string): Metadata {
  const entry = getTemplateEntry(href);
  return {
    title: entry?.title ?? "Templates",
    description: entry?.description,
  };
}

export function getTemplateNavCategory(): DocsNavCategory {
  return {
    id: "templates",
    title: "Templates",
    items: templatesRegistry.map(({ title, href, comingSoon }) => ({
      title,
      href,
      comingSoon,
    })),
  };
}

export function getTemplateSearchEntries() {
  return getDocumentedTemplates().flatMap((entry) => [
    {
      label: entry.title,
      value: entry.href,
      group: "Templates",
      searchText: [entry.description, ...entry.aliases, ...entry.keywords].join(
        " "
      ),
    },
  ]);
}
