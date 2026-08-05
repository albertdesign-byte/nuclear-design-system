"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionTrigger,
} from "@/components/accordion";
import { Badge } from "@/components/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

import {
  docsNavCategories,
  docsNavDefaultOpenCategories,
  type DocsNavItem,
} from "../config/navigation";
import { isNavItemNew } from "../config/new-component-badges";
import {
  getProductNavCategories,
  getProductNavDefaultOpenCategories,
} from "../config/products-navigation";
import {
  getUserflowNavCategories,
  getUserflowNavDefaultOpenCategories,
  getUserflowProductSlug,
} from "../config/userflow-navigation";
import { DocsSearch } from "./docs-search";

function isNavItemActive(pathname: string, href: string) {
  if (href === "#") {
    return false;
  }

  if (href.includes("#")) {
    return pathname === href.split("#")[0];
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`) ||
    pathname.startsWith(href)
  );
}

function NavLinks({ items }: { items: DocsNavItem[] }) {
  const pathname = usePathname();

  return (
    <ul className="flex flex-col gap-[var(--spacing-4)] pb-[var(--space-stack-sm)] pl-[var(--space-inline-sm)]">
      {items.map((item) => {
        const isDisabled = item.comingSoon || item.href === "#";
        const isActive = !isDisabled && isNavItemActive(pathname, item.href);

        if (isDisabled) {
          return (
            <li key={`${item.title}-${item.href}`}>
              <span
                aria-disabled="true"
                className={cn(
                  "flex h-[1.875rem] items-center justify-between rounded-[var(--radius-button)] px-[0.5625rem]",
                  "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
                  "cursor-not-allowed text-foreground opacity-50"
                )}
              >
                <span>{item.title}</span>
                {item.comingSoon ? (
                  <Badge variant="secondary" size="sm">
                    Coming Soon
                  </Badge>
                ) : item.badge ? (
                  <span
                    className="size-2 rounded-full bg-[var(--color-info-foreground)]"
                    aria-hidden
                  />
                ) : null}
              </span>
            </li>
          );
        }

        return (
          <li key={`${item.title}-${item.href}`}>
            <Link
              href={item.href}
              className={cn(
                "flex h-[1.875rem] items-center justify-between rounded-[var(--radius-button)] px-[0.5625rem]",
                "text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)]",
                isActive
                  ? "bg-[var(--docs-nav-active-bg)] font-medium text-foreground"
                  : "text-foreground hover:bg-[var(--color-surface-hover)]"
              )}
            >
              <span>{item.title}</span>
              {isNavItemNew(item.href) ? (
                <Badge variant="default" size="sm">
                  New
                </Badge>
              ) : item.badge ? (
                <span
                  className="size-2 rounded-full bg-[var(--color-info-foreground)]"
                  aria-hidden
                />
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export function DocsSidebar() {
  const pathname = usePathname();
  const userflowProduct = getUserflowProductSlug(pathname);
  const isUserflow = pathname.startsWith("/docs/userflow");
  const isNuclear = pathname.startsWith("/docs/products/nuclear");
  const isPatients = pathname.startsWith("/docs/products/patients");

  let navCategories = docsNavCategories;
  let defaultOpenCategories = docsNavDefaultOpenCategories;
  let searchScope:
    | "components"
    | "userflow-nuclear"
    | "userflow-patients"
    | "products-nuclear"
    | "products-patients" = "components";
  let ariaLabel = "Documentation";

  if (userflowProduct === "nuclear") {
    navCategories = getUserflowNavCategories("nuclear");
    defaultOpenCategories = getUserflowNavDefaultOpenCategories("nuclear");
    searchScope = "userflow-nuclear";
    ariaLabel = "Nuclear user flows";
  } else if (userflowProduct === "patients") {
    navCategories = getUserflowNavCategories("patients");
    defaultOpenCategories = getUserflowNavDefaultOpenCategories("patients");
    searchScope = "userflow-patients";
    ariaLabel = "Patients user flows";
  } else if (isNuclear) {
    navCategories = getProductNavCategories("nuclear");
    defaultOpenCategories = getProductNavDefaultOpenCategories("nuclear");
    searchScope = "products-nuclear";
    ariaLabel = "Nuclear product";
  } else if (isPatients) {
    navCategories = getProductNavCategories("patients");
    defaultOpenCategories = getProductNavDefaultOpenCategories("patients");
    searchScope = "products-patients";
    ariaLabel = "Patients product";
  }

  return (
    <aside
      className={cn(
        "sticky top-[var(--docs-header-height)] hidden h-[calc(100vh-var(--docs-header-height))]",
        "w-[var(--docs-sidebar-width)] shrink-0 self-start border-r border-[var(--docs-chrome-border)]",
        "bg-background lg:block"
      )}
    >
      <ScrollArea className="h-full">
        <nav
          aria-label={ariaLabel}
          className="px-[var(--space-inline-md)] py-[var(--space-page)]"
        >
          <DocsSearch scope={searchScope} />

          <Accordion
            multiple
            defaultValue={defaultOpenCategories}
            className="docs-nav-accordion gap-[var(--space-stack-md)]"
          >
            {navCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="docs-nav-accordion-item"
              >
                <AccordionHeader className="docs-nav-accordion-header">
                  <AccordionTrigger className="docs-nav-accordion-trigger">
                    {category.title}
                  </AccordionTrigger>
                </AccordionHeader>
                <AccordionContent className="docs-nav-accordion-content">
                  <NavLinks items={category.items} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </nav>
      </ScrollArea>
    </aside>
  );
}
