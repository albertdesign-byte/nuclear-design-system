"use client";

import Link from "next/link";
import { MoonIcon, PanelLeftCloseIcon, PanelLeftOpenIcon, SunIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

import { Button } from "@/components/button";
import { MedmoLogo } from "@/components/brand";
import { Separator } from "@/components/separator";
import { cn } from "@/lib/utils";

import { DocsProductsNavDropdown } from "./docs-products-nav-dropdown";
import { DocsPatientsDeviceTabs } from "./docs-patients-device-tabs";
import { DocsSearch } from "./docs-search";
import {
  getUserflowPatientsScreenSlug,
  userflowSlugSupportsDevicePreview,
} from "../config/userflow-screen-routes";
import { useUserflowLayoutOptional } from "./userflow-layout-context";

const subscribeToHydration = () => () => {};

export function DocsHeader({
  showSearch = false,
}: {
  showSearch?: boolean;
}) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false
  );

  const isFoundations = pathname.startsWith("/docs/foundations");
  const isComponents =
    pathname.startsWith("/docs/components") || pathname === "/docs";
  const isPatterns = pathname.startsWith("/docs/patterns");
  const isTemplates = pathname.startsWith("/docs/templates");
  const isUserflow = pathname.startsWith("/docs/userflow");
  const userflowLayout = useUserflowLayoutOptional();
  const sidebarVisible = userflowLayout?.sidebarVisible ?? true;
  const toggleSidebarVisible = userflowLayout?.toggleSidebarVisible;
  const isUserflowExpanded = isUserflow && !sidebarVisible;
  const userflowPatientsSlug = getUserflowPatientsScreenSlug(pathname);
  const showUserflowDeviceTabs = userflowSlugSupportsDevicePreview(userflowPatientsSlug);

  const navLinkClassName = (active: boolean) =>
    cn(
      "inline-flex h-[var(--spacing-32)] items-center rounded-[var(--radius-button)] px-[0.625rem]",
      "text-[length:var(--text-label-size)] font-medium leading-[var(--text-label-line-height)]",
      active
        ? "bg-[var(--docs-nav-active-bg)] text-foreground"
        : "text-foreground hover:bg-[var(--color-surface-hover)]"
    );

  return (
    <header className="sticky top-0 z-[var(--z-sticky)] border-b border-[var(--docs-chrome-border)] bg-background px-[var(--docs-page-padding-x)]">
      <div
        className={cn(
          "relative flex h-[var(--docs-header-height)] w-full items-center gap-[var(--space-inline-md)]",
          !isUserflowExpanded && "mx-auto max-w-[90rem]"
        )}
      >
        <Link
          href="/"
          className={cn(
            "inline-flex shrink-0 items-center rounded-[var(--radius-md)]",
            "transition-[var(--motion-hover)] hover:opacity-90 focus-visible:outline-none",
            "focus-visible:ring-[length:var(--focus-ring-width)] focus-visible:ring-[var(--color-focus-ring)]"
          )}
          aria-label="Medmo Design System"
        >
          <MedmoLogo />
        </Link>

        <nav className="flex items-center gap-[var(--space-inline-xs)]">
          <Link
            href="/docs/foundations"
            className={navLinkClassName(isFoundations)}
          >
            Foundations
          </Link>
          <Link
            href="/docs/components"
            className={navLinkClassName(isComponents)}
          >
            Components
          </Link>
          <Link href="/docs/patterns" className={navLinkClassName(isPatterns)}>
            Patterns
          </Link>
          <Link href="/docs/templates" className={navLinkClassName(isTemplates)}>
            Templates
          </Link>
          <DocsProductsNavDropdown triggerClassName={navLinkClassName} />
        </nav>

        {showUserflowDeviceTabs ? (
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="pointer-events-auto">
              <DocsPatientsDeviceTabs />
            </div>
          </div>
        ) : null}

        <div className="ml-auto flex items-center gap-[var(--space-inline-sm)]">
          {showSearch ? (
            <>
              <DocsSearch variant="header" />
              <Separator orientation="vertical" className="h-[var(--spacing-16)]" />
            </>
          ) : null}
          {isUserflow && toggleSidebarVisible ? (
            <>
              <Button
                type="button"
                variant="ghost"
                size="icon-md"
                aria-label={sidebarVisible ? "Expandir" : "Contraer"}
                title={sidebarVisible ? "Expandir" : "Contraer"}
                onClick={toggleSidebarVisible}
              >
                {sidebarVisible ? (
                  <PanelLeftCloseIcon aria-hidden />
                ) : (
                  <PanelLeftOpenIcon aria-hidden />
                )}
              </Button>
              <Separator orientation="vertical" className="h-[var(--spacing-16)]" />
            </>
          ) : null}
          <Button
            type="button"
            variant="ghost"
            size="icon-md"
            aria-label="Toggle theme"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
          >
            {mounted && resolvedTheme === "dark" ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>
      </div>
    </header>
  );
}
