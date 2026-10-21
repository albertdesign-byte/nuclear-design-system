"use client";

import type { ReactNode } from "react";

import { TextLink } from "@/components/text-link";
import { Menu } from "@/components/menu";
import {
  menuAccessibilitySnippet,
  menuActiveNestedSnippet,
  menuCollapsedSnippet,
  menuDefaultSnippet,
  menuExpandableSnippet,
  menuInstallationUiSnippet,
  menuMultipleOpenSnippet,
  menuRealScreenSnippet,
  menuUsageSnippet,
} from "@/components/docs/components/menu/menu-code-snippets";
import {
  menuDefaultItems,
  menuExpandableActiveItems,
  menuExpandableItems,
} from "@/components/docs/components/menu/menu-preview-items";
import { MenuRealScreenPreview } from "@/components/docs/components/menu/menu-real-screen-preview";
import { menuTocItems } from "@/components/docs/config/navigation";
import { DocsApiTable } from "@/components/docs/primitives/docs-api-table";
import { DocsComponentPage } from "@/components/docs/primitives/docs-component-page";
import { DocsInlineCode } from "@/components/docs/primitives/docs-inline-code";
import { DocsPreview } from "@/components/docs/primitives/docs-preview";
import { DocsSection } from "@/components/docs/primitives/docs-section";

function MenuPreviewFrame({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-[28rem] overflow-hidden rounded-[var(--radius-card)] ring-1 ring-[var(--color-border-subtle)]">
      {children}
    </div>
  );
}

const menuApiRows = [
  { prop: "items", type: "MenuNavItem[]", defaultValue: "—" },
  { prop: "logoHref", type: "string", defaultValue: '"/"' },
  { prop: "expanded", type: "boolean", defaultValue: "—" },
  { prop: "defaultExpanded", type: "boolean", defaultValue: "false" },
  { prop: "onExpandedChange", type: "(expanded: boolean) => void", defaultValue: "—" },
  { prop: "openGroups", type: "string[]", defaultValue: "—" },
  { prop: "defaultOpenGroups", type: "string[]", defaultValue: "—" },
  {
    prop: "onOpenGroupsChange",
    type: "(openGroups: string[]) => void",
    defaultValue: "—",
  },
  { prop: "className", type: "string", defaultValue: "undefined" },
];

const menuNavLeafApiRows = [
  { prop: "label", type: "string", defaultValue: "—" },
  { prop: "href", type: "string", defaultValue: "—" },
  { prop: "icon", type: "LucideIcon", defaultValue: "—" },
  { prop: "active", type: "boolean", defaultValue: "—" },
  { prop: "disabled", type: "boolean", defaultValue: "—" },
];

const menuNavGroupApiRows = [
  { prop: "label", type: "string", defaultValue: "—" },
  { prop: "icon", type: "LucideIcon", defaultValue: "—" },
  { prop: "children", type: "MenuNavChild[]", defaultValue: "—" },
  { prop: "id", type: "string", defaultValue: "label" },
  { prop: "disabled", type: "boolean", defaultValue: "—" },
];

const menuNavChildApiRows = [
  { prop: "label", type: "string", defaultValue: "—" },
  { prop: "href", type: "string", defaultValue: "—" },
  { prop: "active", type: "boolean", defaultValue: "—" },
  { prop: "disabled", type: "boolean", defaultValue: "—" },
];

export function MenuDocsPage() {
  return (
    <DocsComponentPage
      title="Menu"
      description="Collapsible application navigation rail. Default is a flat list of links. Expandable adds one nested level."
      tocItems={menuTocItems}
      realScreen={{
        preview: <MenuRealScreenPreview />,
        code: menuRealScreenSnippet,
      }}
      uiDesign={
        <>
          <section id="installation" className="scroll-mt-24">
            <DocsPreview code={menuInstallationUiSnippet}>
              <MenuPreviewFrame>
                <Menu items={menuDefaultItems} logoHref="/" />
              </MenuPreviewFrame>
            </DocsPreview>
          </section>

          <DocsSection
            id="usage"
            title="Usage"
            description={
              <>
                Import from <DocsInlineCode>@/components/menu</DocsInlineCode>.
                Pass the rail into the App Shell{" "}
                <DocsInlineCode>sidebar</DocsInlineCode> slot. App Shell remains
                a template and does not own this API. See{" "}
                <TextLink href="/docs/templates/app-shell">App Shell</TextLink>.
              </>
            }
          >
            <DocsPreview code={menuUsageSnippet}>
              <MenuPreviewFrame>
                <Menu items={menuDefaultItems} logoHref="/" />
              </MenuPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="default"
            title="Default"
            description="Flat icon-plus-label links. Each leaf requires href and has no children. Clicking the item navigates. Collapse hides labels and shows icon tooltips."
          >
            <DocsPreview code={menuDefaultSnippet}>
              <MenuPreviewFrame>
                <Menu defaultExpanded items={menuDefaultItems} logoHref="/" />
              </MenuPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="expandable"
            title="Expandable"
            description={
              <>
                Parent items with <DocsInlineCode>children</DocsInlineCode> are
                expansion controls only. Clicking anywhere on the parent row —
                icon, label, or chevron — toggles the submenu. Parents do not
                navigate and do not take <DocsInlineCode>href</DocsInlineCode>.
                Nested children are the destinations. Nested items have no
                icons.
              </>
            }
          >
            <DocsPreview code={menuExpandableSnippet}>
              <MenuPreviewFrame>
                <Menu defaultExpanded items={menuExpandableItems} logoHref="/" />
              </MenuPreviewFrame>
            </DocsPreview>
            <ul className="mt-[var(--space-stack-md)] list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                <strong className="text-[var(--color-text-primary)]">Leaf</strong>{" "}
                — item without children. Navigation link.
              </li>
              <li>
                <strong className="text-[var(--color-text-primary)]">Parent</strong>{" "}
                — item with children. One button for the whole row; chevron is
                visual only. Example: Orders expands or collapses.
              </li>
              <li>
                <strong className="text-[var(--color-text-primary)]">Child</strong>{" "}
                — nested navigation link. Example: My orders, Active, Eliminated.
              </li>
            </ul>
          </DocsSection>

          <DocsSection
            id="multiple-open"
            title="Multiple open groups"
            description="More than one parent group can stay expanded at the same time. Toggling one group does not close the others."
          >
            <DocsPreview code={menuMultipleOpenSnippet}>
              <MenuPreviewFrame>
                <Menu
                  defaultExpanded
                  defaultOpenGroups={["Patients", "Orders"]}
                  items={menuExpandableItems}
                  logoHref="/"
                />
              </MenuPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="active-nested"
            title="Active nested item"
            description="An active nested item uses aria-current and opens its parent group on initialize. Users can still collapse that parent afterward."
          >
            <DocsPreview code={menuActiveNestedSnippet}>
              <MenuPreviewFrame>
                <Menu
                  defaultExpanded
                  items={menuExpandableActiveItems}
                  logoHref="/"
                />
              </MenuPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="collapsed"
            title="Collapsed"
            description="The collapsed rail shows icons and tooltips. Expandable nested items unmount and do not open a flyout. Collapse stays pinned at the bottom."
          >
            <DocsPreview code={menuCollapsedSnippet}>
              <div className="grid w-full gap-[var(--space-grid-gap)] md:grid-cols-2">
                <MenuPreviewFrame>
                  <Menu items={menuDefaultItems} logoHref="/" />
                </MenuPreviewFrame>
                <MenuPreviewFrame>
                  <Menu items={menuExpandableItems} logoHref="/" />
                </MenuPreviewFrame>
              </div>
            </DocsPreview>
          </DocsSection>

          <DocsSection
            id="menu-vs-dropdown"
            title="Menu vs Dropdown Menu"
            description="Use Menu for persistent application navigation. Use Dropdown Menu for overlay actions. Accordion is for in-page FAQ-style content, not app navigation."
          >
            <ul className="list-disc space-y-[var(--space-stack-xs)] pl-[var(--space-inline-md)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              <li>
                <strong className="text-[var(--color-text-primary)]">Menu</strong>{" "}
                — left rail, Default or Expandable, composed by App Shell.
              </li>
              <li>
                <strong className="text-[var(--color-text-primary)]">
                  Dropdown Menu
                </strong>{" "}
                — overlay commands such as overflow, row, and page actions. See{" "}
                <TextLink href="/docs/components/dropdown-menu">
                  Dropdown Menu
                </TextLink>
                .
              </li>
              <li>
                <strong className="text-[var(--color-text-primary)]">
                  Accordion
                </strong>{" "}
                — stacked in-page disclosures. See{" "}
                <TextLink href="/docs/components/accordion">Accordion</TextLink>.
              </li>
            </ul>
          </DocsSection>

          <DocsSection
            id="accessibility"
            title="Accessibility"
            description="The rail is an application landmark. Leaf and child links use aria-current when active. Each parent is a single button with aria-expanded and aria-controls. The chevron is decorative. Collapsed icons have accessible names and tooltips."
          >
            <DocsPreview code={menuAccessibilitySnippet}>
              <MenuPreviewFrame>
                <Menu
                  defaultExpanded
                  items={menuExpandableActiveItems}
                  logoHref="/"
                />
              </MenuPreviewFrame>
            </DocsPreview>
          </DocsSection>

          <DocsSection id="api-reference" title="API Reference">
            <h3 className="mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">
              Menu
            </h3>
            <DocsApiTable rows={menuApiRows} />
            <h3 className="mt-[var(--space-stack-lg)] mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">
              MenuNavItem
            </h3>
            <p className="mb-[var(--space-stack-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-secondary)]">
              Discriminated union of <DocsInlineCode>MenuNavLeafItem</DocsInlineCode>{" "}
              and <DocsInlineCode>MenuNavGroupItem</DocsInlineCode>.
            </p>
            <h3 className="mt-[var(--space-stack-lg)] mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">
              MenuNavLeafItem
            </h3>
            <DocsApiTable rows={menuNavLeafApiRows} />
            <h3 className="mt-[var(--space-stack-lg)] mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">
              MenuNavGroupItem
            </h3>
            <DocsApiTable rows={menuNavGroupApiRows} />
            <h3 className="mt-[var(--space-stack-lg)] mb-[var(--space-stack-sm)] text-[length:var(--text-title-size)] font-medium">
              MenuNavChild
            </h3>
            <DocsApiTable rows={menuNavChildApiRows} />
          </DocsSection>
        </>
      }
    />
  );
}
