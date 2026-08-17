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
  componentsNavCategories,
  foundationsNavCategories,
  patternsNavCategories,
  templatesNavCategories,
  type DocsNavItem,
} from "../config/navigation";
import { resolveActiveNavHref } from "../config/navigation-active";
import { isNavItemNew } from "../config/new-component-badges";
import {
  getProductNavCategories,
  getProductNavDefaultOpenCategories,
  productsNavCategories,
  productsNavDefaultOpenCategories,
} from "../config/products-navigation";
import {
  getUserflowProductSlug,
} from "../config/userflow-navigation";
import { DocsSearch } from "./docs-search";

function NavLinks({ items }: { items: DocsNavItem[] }) {
  const pathname = usePathname();
  const activeHref = resolveActiveNavHref(pathname, items);

  return (
    <ul className="flex flex-col gap-[var(--spacing-4)] pb-[var(--space-stack-sm)] pl-[var(--space-inline-sm)]">
      {items.map((item) => {
        const isDisabled = item.comingSoon || item.href === "#";
        const isActive = !isDisabled && activeHref === item.href;

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
  const isFoundations = pathname.startsWith("/docs/foundations");
  const isPatterns = pathname.startsWith("/docs/patterns");
  const isTemplates = pathname.startsWith("/docs/templates");
  const isNuclear = pathname.startsWith("/docs/products/nuclear");
  const isPatients = pathname.startsWith("/docs/products/patients");
  const isProducts = pathname.startsWith("/docs/products");

  let navCategories = componentsNavCategories;
  let defaultOpenCategories = componentsNavCategories.map(
    (category) => category.id
  );
  let searchScope:
    | "components"
    | "foundations"
    | "patterns"
    | "templates"
    | "products"
    | "products-nuclear"
    | "products-patients" = "components";
  let ariaLabel = "Documentation";

  if (userflowProduct === "nuclear") {
    navCategories = getProductNavCategories("nuclear");
    defaultOpenCategories = getProductNavDefaultOpenCategories("nuclear");
    searchScope = "products-nuclear";
    ariaLabel = "MPF Portal product";
  } else if (userflowProduct === "patients") {
    navCategories = getProductNavCategories("patients");
    defaultOpenCategories = getProductNavDefaultOpenCategories("patients");
    searchScope = "products-patients";
    ariaLabel = "Patients product";
  } else if (isNuclear) {
    navCategories = getProductNavCategories("nuclear");
    defaultOpenCategories = getProductNavDefaultOpenCategories("nuclear");
    searchScope = "products-nuclear";
    ariaLabel = "MPF Portal product";
  } else if (isPatients) {
    navCategories = getProductNavCategories("patients");
    defaultOpenCategories = getProductNavDefaultOpenCategories("patients");
    searchScope = "products-patients";
    ariaLabel = "Patients product";
  } else if (isProducts) {
    navCategories = productsNavCategories;
    defaultOpenCategories = productsNavDefaultOpenCategories;
    searchScope = "products";
    ariaLabel = "Products";
  } else if (isFoundations) {
    navCategories = foundationsNavCategories;
    defaultOpenCategories = foundationsNavCategories.map(
      (category) => category.id
    );
    searchScope = "foundations";
    ariaLabel = "Foundations";
  } else if (isPatterns) {
    navCategories = patternsNavCategories;
    defaultOpenCategories = patternsNavCategories.map(
      (category) => category.id
    );
    searchScope = "patterns";
    ariaLabel = "Patterns";
  } else if (isTemplates) {
    navCategories = templatesNavCategories;
    defaultOpenCategories = templatesNavCategories.map(
      (category) => category.id
    );
    searchScope = "templates";
    ariaLabel = "Templates";
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
