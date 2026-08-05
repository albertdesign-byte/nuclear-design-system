"use client";

import type { CSSProperties } from "react";
import Link from "next/link";
import { PanelLeftCloseIcon, PanelLeftOpenIcon } from "lucide-react";
import { useState } from "react";

import { MedmoLogo } from "@/components/brand";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/tooltip";
import { cn } from "@/lib/utils";

import {
  appSidebarClassName,
  appSidebarExpandedWidth,
  appSidebarLogoClassName,
  appSidebarNavClassName,
  appSidebarNavItemClassName,
  appSidebarNavItemLabelClassName,
  appSidebarFooterClassName,
  appSidebarToggleClassName,
} from "./app-sidebar.styles";
import type { AppSidebarNavItem, AppSidebarProps } from "./app-sidebar.types";

function AppSidebarNavLink({
  item,
  expanded,
}: {
  item: AppSidebarNavItem;
  expanded: boolean;
}) {
  const link = (
    <Link
      href={item.href}
      aria-label={item.label}
      aria-current={item.active ? "page" : undefined}
      data-active={item.active ? "" : undefined}
      className={appSidebarNavItemClassName}
    >
      <item.icon className="size-4 shrink-0" aria-hidden />
      <span className={appSidebarNavItemLabelClassName}>{item.label}</span>
    </Link>
  );

  if (expanded) {
    return link;
  }

  return (
    <Tooltip>
      <TooltipTrigger render={link} />
      <TooltipContent side="right">{item.label}</TooltipContent>
    </Tooltip>
  );
}

function AppSidebarToggle({
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
      className={appSidebarToggleClassName}
    >
      {expanded ? (
        <PanelLeftCloseIcon className="size-4 shrink-0" aria-hidden />
      ) : (
        <PanelLeftOpenIcon className="size-4 shrink-0" aria-hidden />
      )}
      <span className={appSidebarNavItemLabelClassName}>
        {expanded ? "Collapse" : "Expand"}
      </span>
    </button>
  );

  if (expanded) {
    return button;
  }

  return (
    <Tooltip>
      <TooltipTrigger render={button} />
      <TooltipContent side="right">{label}</TooltipContent>
    </Tooltip>
  );
}

function AppSidebar({
  items,
  className,
  logoHref = "/",
  expanded: expandedProp,
  defaultExpanded = false,
  onExpandedChange,
}: AppSidebarProps) {
  const [expandedState, setExpandedState] = useState(defaultExpanded);
  const expanded = expandedProp ?? expandedState;

  const setExpanded = (next: boolean) => {
    if (expandedProp === undefined) {
      setExpandedState(next);
    }
    onExpandedChange?.(next);
  };

  return (
    <aside
      data-slot="app-sidebar"
      data-expanded={expanded ? "" : undefined}
      className={cn(appSidebarClassName, className)}
      style={
        {
          "--app-sidebar-width": expanded
            ? appSidebarExpandedWidth
            : "var(--spacing-64)",
        } as CSSProperties
      }
    >
      <Link
        href={logoHref}
        aria-label="Medmo home"
        className={appSidebarLogoClassName}
      >
        <MedmoLogo className="size-[var(--spacing-32)]" />
      </Link>

      <nav aria-label="Application" className={appSidebarNavClassName}>
        {items.map((item) => (
          <AppSidebarNavLink
            key={`${item.href}-${item.label}`}
            item={item}
            expanded={expanded}
          />
        ))}
      </nav>

      <div className={appSidebarFooterClassName}>
        <AppSidebarToggle expanded={expanded} onToggle={() => setExpanded(!expanded)} />
      </div>
    </aside>
  );
}

export { AppSidebar, AppSidebarNavLink };
