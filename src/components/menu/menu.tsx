"use client";

import { useState, type CSSProperties, type ReactElement } from "react";
import Link from "next/link";
import { ChevronDownIcon, PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react";

import { MedmoLogo, MedmoLogoLockup } from "@/components/brand";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { cn } from "@/lib/utils";

import {
  getActiveMenuGroupIds,
  getMenuGroupId,
  getMenuSubmenuDomId,
  isMenuNavGroup,
  mergeMenuOpenGroups,
  toggleMenuOpenGroup,
} from "./menu.groups";
import {
  menuClassName,
  menuExpandedWidth,
  menuLogoClassName,
  menuNavClassName,
  menuNavChildClassName,
  menuNavChildListClassName,
  menuNavGroupClassName,
  menuNavGroupTriggerClassName,
  menuNavItemClassName,
  menuNavItemLabelClassName,
  menuFooterClassName,
  menuToggleClassName,
} from "./menu.styles";
import type {
  MenuNavChild,
  MenuNavGroupItem,
  MenuNavLinkProps,
  MenuProps,
} from "./menu.types";

function withCollapsedTooltip(
  expanded: boolean,
  label: string,
  node: ReactElement
) {
  if (expanded) {
    return node;
  }

  return (
    <Tooltip>
      <TooltipTrigger render={node} />
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}

function MenuNavLink({ item, expanded }: MenuNavLinkProps) {
  const content = (
    <>
      <item.icon className="size-4 shrink-0" aria-hidden />
      <span className={menuNavItemLabelClassName}>{item.label}</span>
    </>
  );

  if (item.disabled) {
    return withCollapsedTooltip(
      expanded,
      item.label,
      <span
        aria-disabled="true"
        aria-label={item.label}
        className={menuNavItemClassName}
      >
        {content}
      </span>
    );
  }

  const link = (
    <Link
      href={item.href}
      aria-label={item.label}
      aria-current={item.active ? "page" : undefined}
      data-active={item.active ? "" : undefined}
      className={menuNavItemClassName}
    >
      {content}
    </Link>
  );

  return withCollapsedTooltip(expanded, item.label, link);
}

function MenuNavChildLink({ child }: { child: MenuNavChild }) {
  if (child.disabled) {
    return (
      <span aria-disabled="true" className={menuNavChildClassName}>
        {child.label}
      </span>
    );
  }

  return (
    <Link
      href={child.href}
      aria-current={child.active ? "page" : undefined}
      data-active={child.active ? "" : undefined}
      className={menuNavChildClassName}
    >
      {child.label}
    </Link>
  );
}

function MenuNavGroup({
  item,
  expanded,
  open,
  onToggle,
}: {
  item: MenuNavGroupItem;
  expanded: boolean;
  open: boolean;
  onToggle: () => void;
}) {
  const groupId = getMenuGroupId(item);
  const panelId = getMenuSubmenuDomId(groupId);

  const iconAndLabel = (
    <>
      <item.icon className="size-4 shrink-0" aria-hidden />
      <span className={menuNavItemLabelClassName}>{item.label}</span>
    </>
  );

  const header = withCollapsedTooltip(
    expanded,
    item.label,
    expanded ? (
      <button
        type="button"
        data-slot="menu-group-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={item.label}
        aria-disabled={item.disabled ? true : undefined}
        disabled={item.disabled}
        onClick={onToggle}
        className={menuNavGroupTriggerClassName}
      >
        {iconAndLabel}
        <ChevronDownIcon
          data-slot="menu-group-chevron"
          className={cn(
            "ml-auto size-4 shrink-0 transition-transform duration-[var(--motion-moderate)]",
            open && "rotate-180"
          )}
          aria-hidden
        />
      </button>
    ) : (
      <span aria-label={item.label} className={menuNavItemClassName}>
        {iconAndLabel}
      </span>
    )
  );

  return (
    <div data-slot="menu-group" className={menuNavGroupClassName}>
      {header}
      {expanded ? (
        <ul
          id={panelId}
          data-slot="menu-submenu"
          hidden={!open}
          className={menuNavChildListClassName}
        >
          {item.children.map((child) => (
            <li key={`${child.href}-${child.label}`}>
              <MenuNavChildLink child={child} />
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

function MenuToggle({
  expanded,
  onToggle,
}: {
  expanded: boolean;
  onToggle: () => void;
}) {
  const label = expanded ? "Collapse menu" : "Expand menu";

  const button = (
    <button
      type="button"
      aria-expanded={expanded}
      aria-label={label}
      onClick={onToggle}
      className={menuToggleClassName}
    >
      {expanded ? (
        <PanelLeftCloseIcon className="size-4 shrink-0" aria-hidden />
      ) : (
        <PanelLeftOpenIcon className="size-4 shrink-0" aria-hidden />
      )}
      <span className={menuNavItemLabelClassName}>
        {expanded ? "Collapse" : "Expand"}
      </span>
    </button>
  );

  return withCollapsedTooltip(expanded, label, button);
}

function Menu({
  items,
  className,
  logoHref = "/",
  expanded: expandedProp,
  defaultExpanded = false,
  onExpandedChange,
  openGroups: openGroupsProp,
  defaultOpenGroups,
  onOpenGroupsChange,
}: MenuProps) {
  const [expandedState, setExpandedState] = useState(defaultExpanded);
  const expanded = expandedProp ?? expandedState;

  const [openGroupsState, setOpenGroupsState] = useState(() =>
    mergeMenuOpenGroups(defaultOpenGroups ?? [], items)
  );
  const activeGroupKey = getActiveMenuGroupIds(items).join("\0");
  const [trackedActiveKey, setTrackedActiveKey] = useState(activeGroupKey);

  if (trackedActiveKey !== activeGroupKey) {
    setTrackedActiveKey(activeGroupKey);
    if (openGroupsProp === undefined) {
      setOpenGroupsState((current) =>
        mergeMenuOpenGroups(current, items)
      );
    }
  }

  const openGroups = openGroupsProp ?? openGroupsState;

  const setExpanded = (next: boolean) => {
    if (expandedProp === undefined) {
      setExpandedState(next);
    }
    onExpandedChange?.(next);
  };

  const setOpenGroups = (next: string[]) => {
    if (openGroupsProp === undefined) {
      setOpenGroupsState(next);
    }
    onOpenGroupsChange?.(next);
  };

  return (
    <aside
      data-slot="menu"
      data-expanded={expanded ? "" : undefined}
      className={cn(menuClassName, className)}
      style={
        {
          "--menu-width": expanded
            ? menuExpandedWidth
            : "var(--spacing-64)",
        } as CSSProperties
      }
    >
      <Link
        href={logoHref}
        aria-label="Medmo home"
        className={menuLogoClassName}
      >
        {expanded ? (
          <MedmoLogoLockup
            size="md"
            variant="inverse"
            iconClassName="size-[var(--spacing-32)]"
          />
        ) : (
          <MedmoLogo className="size-[var(--spacing-32)]" />
        )}
      </Link>

      <nav aria-label="Application" className={menuNavClassName}>
        {items.map((item) => {
          if (isMenuNavGroup(item)) {
            const groupId = getMenuGroupId(item);

            return (
              <MenuNavGroup
                key={groupId}
                item={item}
                expanded={expanded}
                open={openGroups.includes(groupId)}
                onToggle={() =>
                  setOpenGroups(toggleMenuOpenGroup(openGroups, groupId))
                }
              />
            );
          }

          return (
            <MenuNavLink
              key={`${item.href}-${item.label}`}
              item={item}
              expanded={expanded}
            />
          );
        })}
      </nav>

      <div className={menuFooterClassName}>
        <MenuToggle expanded={expanded} onToggle={() => setExpanded(!expanded)} />
      </div>
    </aside>
  );
}

export { Menu, MenuNavLink };
