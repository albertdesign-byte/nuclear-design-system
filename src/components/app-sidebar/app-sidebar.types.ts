import type { LucideIcon } from "lucide-react";

export type AppSidebarNavItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  active?: boolean;
};

export type AppSidebarProps = {
  items: AppSidebarNavItem[];
  className?: string;
  logoHref?: string;
  /** Controlled expanded state — icon + label visible. */
  expanded?: boolean;
  /** Uncontrolled initial expanded state. */
  defaultExpanded?: boolean;
  onExpandedChange?: (expanded: boolean) => void;
};

export type AppSidebarNavLinkProps = {
  item: AppSidebarNavItem;
  expanded: boolean;
};
