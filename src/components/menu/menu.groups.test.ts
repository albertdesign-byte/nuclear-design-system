import { describe, expect, it } from "vitest";
import type { LucideIcon } from "lucide-react";

import {
  getActiveMenuGroupIds,
  getMenuGroupId,
  getMenuSubmenuDomId,
  isMenuNavGroup,
  mergeMenuOpenGroups,
  toggleMenuOpenGroup,
} from "./menu.groups";
import type { MenuNavItem } from "./menu.types";

const Icon = (() => null) as unknown as LucideIcon;

const flatItems: MenuNavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Icon, active: true },
  { label: "Patients", href: "/patients", icon: Icon },
];

const expandableItems: MenuNavItem[] = [
  { label: "Dashboard", href: "/dashboard", icon: Icon },
  {
    label: "Patients",
    icon: Icon,
    children: [
      { label: "All patients", href: "/patients" },
      { label: "New referral", href: "/patients/new", active: true },
    ],
  },
  {
    id: "orders",
    label: "Orders",
    icon: Icon,
    children: [
      { label: "My orders", href: "/orders" },
      { label: "Active", href: "/orders/active" },
      { label: "Completed", href: "/orders/completed" },
    ],
  },
];

describe("Menu group helpers", () => {
  it("treats items without children as Default (flat) leaf links", () => {
    expect(flatItems.every((item) => !isMenuNavGroup(item))).toBe(true);
    expect(getActiveMenuGroupIds(flatItems)).toEqual([]);
  });

  it("identifies expandable parents and prefers an explicit group id", () => {
    expect(isMenuNavGroup(expandableItems[1]!)).toBe(true);
    expect(isMenuNavGroup(expandableItems[2]!)).toBe(true);
    expect(getMenuGroupId({ label: "Patients" })).toBe("Patients");
    expect(getMenuGroupId({ id: "orders", label: "Orders" })).toBe("orders");
  });

  it("opens the parent of an active nested item", () => {
    expect(getActiveMenuGroupIds(expandableItems)).toEqual(["Patients"]);
    expect(mergeMenuOpenGroups([], expandableItems)).toEqual(["Patients"]);
  });

  it("keeps multiple groups open when toggling another parent", () => {
    const open = mergeMenuOpenGroups(["Patients"], expandableItems);
    const next = toggleMenuOpenGroup(open, "orders");

    expect(next).toEqual(["Patients", "orders"]);
  });

  it("collapses only the toggled parent, including an active parent", () => {
    expect(toggleMenuOpenGroup(["Patients", "orders"], "Patients")).toEqual([
      "orders",
    ]);
  });

  it("does not re-open a collapsed active parent until the active set changes", () => {
    const collapsed = toggleMenuOpenGroup(["Patients"], "Patients");

    expect(collapsed).toEqual([]);
    expect(getActiveMenuGroupIds(expandableItems)).toEqual(["Patients"]);
  });

  it("builds a DOM id for aria-controls without spaces", () => {
    expect(getMenuSubmenuDomId("Patients")).toBe("menu-submenu-patients");
  });
});
