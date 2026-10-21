import type { LucideIcon } from "lucide-react";

export type MenuNavChild = {
  label: string;
  href: string;
  active?: boolean;
  disabled?: boolean;
};

/** Leaf item: a navigation link. Requires href. Do not pass children. */
export type MenuNavLeafItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
  disabled?: boolean;
};

/** Parent group: expands and collapses only. Do not pass href. */
export type MenuNavGroupItem = {
  label: string;
  icon: LucideIcon;
  children: [MenuNavChild, ...MenuNavChild[]];
  /** Stable group id. Defaults to `label`. */
  id?: string;
  disabled?: boolean;
};

export type MenuNavItem = MenuNavLeafItem | MenuNavGroupItem;

export type MenuProps = {
  items: MenuNavItem[];
  className?: string;
  logoHref?: string;
  /** Controlled expanded state — icon + label visible. */
  expanded?: boolean;
  /** Uncontrolled initial expanded state. */
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
  /** Controlled ids of expanded parent groups. */
  openGroups?: string[];
  /** Uncontrolled initially expanded parent groups. */
  defaultOpenGroups?: string[];
  onOpenGroupsChange?: (openGroups: string[]) => void;
};

export type MenuNavLinkProps = {
  item: MenuNavLeafItem;
  expanded: boolean;
};
