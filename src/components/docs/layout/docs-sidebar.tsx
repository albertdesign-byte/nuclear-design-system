"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

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
  productsNavCategories,
} from "../config/products-navigation";
import {
  getUserflowProductSlug,
} from "../config/userflow-navigation";
import {
  DocsSearch,
  filterDocsNavCategories,
  getDocsSearchEmptyMessage,
  type DocsSearchScope,
} from "./docs-search";
import { docsChromeFontClassName, docsNavLinkClassName } from "./docs-nav-styles";

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
                  docsNavLinkClassName(false),
                  "cursor-not-allowed opacity-50"
                )}
              >
                <span>{item.title}</span>
                {item.comingSoon ? (
                  <Badge
                    variant="secondary"
                    size="sm"
                    className={docsChromeFontClassName}
                  >
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
                docsNavLinkClassName(isActive)
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
  let searchScope: DocsSearchScope = "components";
  let ariaLabel = "Documentation";

  if (userflowProduct === "nuclear") {
    navCategories = getProductNavCategories("nuclear");
    searchScope = "products-nuclear";
    ariaLabel = "MPF Portal product";
  } else if (userflowProduct === "patients") {
    navCategories = getProductNavCategories("patients");
    searchScope = "products-patients";
    ariaLabel = "Patients product";
  } else if (isNuclear) {
    navCategories = getProductNavCategories("nuclear");
    searchScope = "products-nuclear";
    ariaLabel = "MPF Portal product";
  } else if (isPatients) {
    navCategories = getProductNavCategories("patients");
    searchScope = "products-patients";
    ariaLabel = "Patients product";
  } else if (isProducts) {
    navCategories = productsNavCategories;
    searchScope = "products";
    ariaLabel = "Products";
  } else if (isFoundations) {
    navCategories = foundationsNavCategories;
    searchScope = "foundations";
    ariaLabel = "Foundations";
  } else if (isPatterns) {
    navCategories = patternsNavCategories;
    searchScope = "patterns";
    ariaLabel = "Patterns";
  } else if (isTemplates) {
    navCategories = templatesNavCategories;
    searchScope = "templates";
    ariaLabel = "Templates";
  }

  const [query, setQuery] = useState("");
  const [openCategories, setOpenCategories] = useState(() =>
    navCategories.map((category) => category.id)
  );

  useEffect(() => {
    setQuery("");
    setOpenCategories(navCategories.map((category) => category.id));
  }, [searchScope]);

  const filteredCategories = useMemo(
    () => filterDocsNavCategories(navCategories, query, searchScope),
    [navCategories, query, searchScope]
  );

  useEffect(() => {
    if (!query.trim()) {
      setOpenCategories(navCategories.map((category) => category.id));
      return;
    }

    setOpenCategories(filteredCategories.map((category) => category.id));
  }, [query, searchScope]);

  return (
    <aside
      className={cn(
        "docs-sidebar sticky top-[var(--docs-header-height)] hidden h-[calc(100vh-var(--docs-header-height))]",
        "w-[var(--docs-sidebar-width)] shrink-0 self-start border-r border-[var(--docs-chrome-border)]",
        "bg-background lg:block"
      )}
    >
      <ScrollArea className="h-full">
        <nav
          aria-label={ariaLabel}
          className="px-[var(--space-inline-md)] py-[var(--space-page)]"
        >
          <DocsSearch
            scope={searchScope}
            query={query}
            onQueryChange={setQuery}
          />

          {query.trim() && filteredCategories.length === 0 ? (
            <p className="px-[var(--space-inline-sm)] text-[length:var(--text-body-small-size)] leading-[var(--text-body-small-line-height)] text-[var(--color-text-muted)]">
              {getDocsSearchEmptyMessage(searchScope)}
            </p>
          ) : (
            <Accordion
              multiple
              value={openCategories}
              onValueChange={(value) => setOpenCategories(value)}
              className="docs-nav-accordion gap-[var(--space-stack-md)]"
            >
              {filteredCategories.map((category) => (
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
          )}
        </nav>
      </ScrollArea>
    </aside>
  );
}
