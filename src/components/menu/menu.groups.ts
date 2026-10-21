import type {
  MenuNavGroupItem,
  MenuNavItem,
} from "./menu.types";

export function getMenuGroupId(item: Pick<MenuNavGroupItem, "id" | "label">) {
  return item.id ?? item.label;
}

export function getMenuSubmenuDomId(groupId: string) {
  const slug = groupId
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return `menu-submenu-${slug || "group"}`;
}

export function isMenuNavGroup(item: MenuNavItem): item is MenuNavGroupItem {
  return "children" in item && item.children.length > 0;
}

export function getActiveMenuGroupIds(items: MenuNavItem[]) {
  return items.filter(isMenuNavGroup).flatMap((item) =>
    item.children.some((child) => child.active) ? [getMenuGroupId(item)] : []
  );
}

export function mergeMenuOpenGroups(openGroups: string[], items: MenuNavItem[]) {
  const next = [...openGroups];

  for (const groupId of getActiveMenuGroupIds(items)) {
    if (!next.includes(groupId)) {
      next.push(groupId);
    }
  }

  return next;
}

export function toggleMenuOpenGroup(openGroups: string[], groupId: string) {
  return openGroups.includes(groupId)
    ? openGroups.filter((id) => id !== groupId)
    : [...openGroups, groupId];
}
