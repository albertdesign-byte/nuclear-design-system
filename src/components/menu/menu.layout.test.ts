import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

import { describe, expect, it } from "vitest";

const root = dirname(fileURLToPath(import.meta.url));
const source = readFileSync(join(root, "menu.tsx"), "utf8");
const types = readFileSync(join(root, "menu.types.ts"), "utf8");
const styles = readFileSync(join(root, "menu.styles.ts"), "utf8");
const stories = readFileSync(join(root, "menu.stories.tsx"), "utf8");
const exportsSource = readFileSync(join(root, "index.ts"), "utf8");
const docsSnippets = readFileSync(
  join(root, "../docs/components/menu/menu-code-snippets.ts"),
  "utf8"
);
const previewItems = readFileSync(
  join(root, "../docs/components/menu/menu-preview-items.ts"),
  "utf8"
);

describe("Menu Expandable configuration", () => {
  it("keeps Default flat items on the existing Link + tooltip path", () => {
    expect(source).toContain("function MenuNavLink");
    expect(source).toContain("aria-current={item.active ? \"page\" : undefined}");
    expect(source).toContain("TooltipContent side=\"right\"");
    expect(source).toContain("href={item.href}");
  });

  it("requires href on leaves and forbids href on parent groups", () => {
    expect(types).toContain("export type MenuNavLeafItem");
    expect(types).toContain("export type MenuNavGroupItem");
    expect(types).toContain("href: string");
    expect(types).not.toContain("href?: string");
    expect(types).toContain("children: [MenuNavChild, ...MenuNavChild[]]");
  });

  it("renders nested items without icons and with indent", () => {
    expect(source).toContain("data-slot=\"menu-submenu\"");
    expect(styles).toContain("pl-[var(--spacing-28)]");
    expect(source).not.toMatch(/submenu[\s\S]*<child\.icon/);
  });

  it("uses one parent-row button to expand and collapse, with no separate chevron action", () => {
    expect(source).toContain("data-slot=\"menu-group-trigger\"");
    expect(source).toContain("aria-expanded={open}");
    expect(source).toContain("aria-controls={panelId}");
    expect(source).toContain("aria-label={item.label}");
    expect(source).toContain("data-slot=\"menu-group-chevron\"");
    expect(source).not.toContain("menuNavGroupChevronClassName");
    expect(source).not.toContain("menuNavGroupLinkClassName");
    expect(source).not.toContain("chevronLabel");
    expect(source.match(/data-slot="menu-group-trigger"/g)?.length).toBe(1);
  });

  it("does not navigate from a parent group", () => {
    const groupFn = source.slice(
      source.indexOf("function MenuNavGroup"),
      source.indexOf("function MenuToggle")
    );

    expect(groupFn).toContain("onClick={onToggle}");
    expect(groupFn).not.toContain("href=");
    expect(source).toContain("href={item.href}");
    expect(source).toContain("href={child.href}");
  });

  it("hides nested items when the rail is collapsed and does not open a flyout", () => {
    expect(source).toMatch(/expanded[\s\S]*menu-submenu|isMenuNavGroup[\s\S]*expanded/);
    expect(source).not.toContain("DropdownMenu");
    expect(source).not.toContain("flyout");
  });

  it("lets users collapse a group after auto-open without merging on every read", () => {
    expect(source).toContain("if (trackedActiveKey !== activeGroupKey)");
    expect(source).toContain("const openGroups = openGroupsProp ?? openGroupsState;");
    expect(source).not.toContain("mergeMenuOpenGroups(openGroupsProp, items)");
  });

  it("supports disabled items on the inverse rail", () => {
    expect(types).toContain("disabled?: boolean");
    expect(source).toContain("aria-disabled");
  });

  it("documents Default, Expandable, Collapsed, multiple open groups, and an active nested item", () => {
    expect(stories).toContain('title: "Components/Menu"');
    expect(stories).toContain("export const Default");
    expect(stories).toContain("export const Expandable");
    expect(stories).toContain("export const Collapsed");
    expect(stories).toContain("export const ExpandableMultipleOpen");
    expect(stories).toContain("export const ExpandableActiveNested");
    expect(stories).toContain('label: "My orders"');
    expect(stories).not.toMatch(/label: "Orders",\s*href:/);
  });

  it("migrates parent destinations onto child items in docs examples", () => {
    expect(previewItems).toContain('label: "My orders"');
    expect(previewItems).not.toMatch(/label: "Orders",\s*href:/);
    expect(docsSnippets).toContain('label: "My orders"');
    expect(docsSnippets).not.toMatch(/label: "Orders",\s*href:/);
    expect(docsSnippets).not.toContain("Parents with href navigate");
  });

  it("exports Menu from the public component API", () => {
    expect(exportsSource).toContain("export { Menu, MenuNavLink }");
    expect(exportsSource).toContain("MenuNavItem");
    expect(exportsSource).toContain("MenuNavLeafItem");
    expect(exportsSource).toContain("MenuNavGroupItem");
    expect(exportsSource).toContain("MenuProps");
  });

  it("does not keep AppSidebar names in the renamed module", () => {
    expect(source).not.toContain("AppSidebar");
    expect(types).not.toContain("AppSidebar");
    expect(styles).not.toContain("app-sidebar");
    expect(stories).not.toContain("App Sidebar");
  });
});
