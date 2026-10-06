"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

import { CommandShortcut } from "@/components/command";
import { GlobalSearchBar } from "@/components/global-search-bar";
import {
  globalSearchBarChromeTypographyClassName,
  globalSearchBarContainerClassName,
  globalSearchBarFilterInputClassName,
  globalSearchBarIconClassName,
  globalSearchBarShortcutClassName,
} from "@/components/global-search-bar/global-search-bar.styles";
import { inputVariants } from "@/components/input";
import { cn } from "@/lib/utils";

import {
  foundationsNavCategories,
  patternsNavCategories,
  templatesNavCategories,
  type DocsNavCategory,
  type DocsNavItem,
} from "../config/navigation";
import {
  componentMatchesQuery,
  getComponentEntry,
  getComponentSearchEntries,
} from "../config/components-registry";
import {
  getFoundationEntry,
  getFoundationSearchEntries,
} from "../config/foundations-registry";
import {
  getPatternEntry,
  getPatternSearchEntries,
  patternMatchesQuery,
} from "../config/patterns-registry";
import {
  getTemplateEntry,
  getTemplateSearchEntries,
} from "../config/templates-registry";
import {
  nuclearProductNavCategories,
  patientsProductNavCategories,
  productsNavCategories,
} from "../config/products-navigation";
import {
  nuclearUserflowNavCategories,
  patientsUserflowNavCategories,
} from "../config/userflow-navigation";

function filterSearchableCategories(
  categories: DocsNavCategory[]
) {
  return categories
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) => item.href !== "#" && !item.comingSoon
      ),
    }))
    .filter((category) => category.items.length > 0);
}

const foundationSearchCategories = filterSearchableCategories(
  foundationsNavCategories
);
const componentRegistrySearchItems = getComponentSearchEntries();
const foundationRegistrySearchItems = getFoundationSearchEntries();
const patternRegistrySearchItems = getPatternSearchEntries();
const templateRegistrySearchItems = getTemplateSearchEntries();
const patternSearchCategories = filterSearchableCategories(patternsNavCategories);
const templateSearchCategories = filterSearchableCategories(
  templatesNavCategories
);
const productSearchCategories = filterSearchableCategories(productsNavCategories);
const nuclearUserflowSearchCategories = filterSearchableCategories(
  nuclearUserflowNavCategories
);
const patientsUserflowSearchCategories = filterSearchableCategories(
  patientsUserflowNavCategories
);
const nuclearSearchCategories = filterSearchableCategories(
  nuclearProductNavCategories
);
const patientsSearchCategories = filterSearchableCategories(
  patientsProductNavCategories
);

export type DocsSearchScope =
  | "components"
  | "foundations"
  | "patterns"
  | "templates"
  | "products"
  | "userflow-nuclear"
  | "userflow-patients"
  | "products-nuclear"
  | "products-patients";

export function getDocsSearchEmptyMessage(scope: DocsSearchScope) {
  switch (scope) {
    case "foundations":
      return "No foundations found.";
    case "patterns":
      return "No patterns found.";
    case "templates":
      return "No templates found.";
    case "products":
      return "No products found.";
    case "userflow-nuclear":
      return "No MPF Portal user flows found.";
    case "userflow-patients":
      return "No Patients user flows found.";
    case "products-nuclear":
      return "No MPF Portal implementations found.";
    case "products-patients":
      return "No Patients implementations found.";
    default:
      return "No components found.";
  }
}

export function navItemMatchesQuery(
  item: DocsNavItem,
  query: string,
  scope: DocsSearchScope
) {
  const normalized = query.trim().toLowerCase();

  if (!normalized) {
    return true;
  }

  if (item.title.toLowerCase().includes(normalized)) {
    return true;
  }

  if (!item.href || item.href === "#" || item.comingSoon) {
    return false;
  }

  if (scope === "components") {
    const entry = getComponentEntry(item.href);
    return entry ? componentMatchesQuery(entry, normalized) : false;
  }

  if (scope === "foundations") {
    const entry = getFoundationEntry(item.href);
    if (!entry) {
      return false;
    }

    return [entry.title, entry.description, ...entry.aliases, ...entry.keywords]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  }

  if (scope === "patterns") {
    const entry = getPatternEntry(item.href);
    return entry ? patternMatchesQuery(entry, normalized) : false;
  }

  if (scope === "templates") {
    const entry = getTemplateEntry(item.href);
    if (!entry) {
      return false;
    }

    return [entry.title, entry.description, ...entry.aliases, ...entry.keywords]
      .join(" ")
      .toLowerCase()
      .includes(normalized);
  }

  return false;
}

export function filterDocsNavCategories(
  categories: DocsNavCategory[],
  query: string,
  scope: DocsSearchScope
) {
  if (!query.trim()) {
    return categories;
  }

  return categories
    .map((category) => ({
      ...category,
      items: category.items.filter((item) =>
        navItemMatchesQuery(item, query, scope)
      ),
    }))
    .filter((category) => category.items.length > 0);
}

type DocsSearchProps = {
  variant?: "sidebar" | "header";
  scope?: DocsSearchScope;
  query?: string;
  onQueryChange?: (query: string) => void;
};

export function DocsSearch({
  variant = "sidebar",
  scope = "components",
  query = "",
  onQueryChange,
}: DocsSearchProps) {
  const router = useRouter();

  const searchableCategories = useMemo(() => {
    switch (scope) {
      case "foundations":
        return foundationSearchCategories;
      case "patterns":
        return patternSearchCategories;
      case "templates":
        return templateSearchCategories;
      case "products":
        return productSearchCategories;
      case "userflow-nuclear":
        return nuclearUserflowSearchCategories;
      case "userflow-patients":
        return patientsUserflowSearchCategories;
      case "products-nuclear":
        return nuclearSearchCategories;
      case "products-patients":
        return patientsSearchCategories;
      case "components":
      default:
        return [];
    }
  }, [scope]);

  const searchLabel = useMemo(() => {
    switch (scope) {
      case "foundations":
        return "Search foundations";
      case "patterns":
        return "Search patterns";
      case "templates":
        return "Search templates";
      case "products":
        return "Search products";
      case "userflow-nuclear":
        return "Search MPF Portal user flows";
      case "userflow-patients":
        return "Search Patients user flows";
      case "products-nuclear":
        return "Search MPF Portal implementations";
      case "products-patients":
        return "Search Patients implementations";
      default:
        return "Search components";
    }
  }, [scope]);

  const searchDescription = useMemo(() => {
    switch (scope) {
      case "foundations":
        return "Find foundation documentation by name";
      case "patterns":
        return "Find reusable pattern documentation by name";
      case "templates":
        return "Find product-agnostic template documentation by name";
      case "products":
        return "Find Patients and MPF Portal implementations";
      case "userflow-nuclear":
        return "Find MPF Portal user flow screens by name";
      case "userflow-patients":
        return "Find Patients user flow screens by name";
      case "products-nuclear":
        return "Find MPF Portal operational implementations";
      case "products-patients":
        return "Find Patients product implementations";
      default:
        return "Find components by name, alias, category, token, or accessibility keyword";
    }
  }, [scope]);

  const emptyMessage = useMemo(() => getDocsSearchEmptyMessage(scope), [scope]);

  const items = useMemo(
    () => {
      if (scope === "foundations") {
        return foundationRegistrySearchItems;
      }

      if (scope === "components") {
        return componentRegistrySearchItems;
      }

      if (scope === "patterns") {
        return patternRegistrySearchItems;
      }

      if (scope === "templates") {
        return templateRegistrySearchItems;
      }

      return searchableCategories.flatMap((category) =>
        category.items.map((item) => ({
          label: item.title,
          value: item.href,
          group: category.title,
        }))
      );
    },
    [scope, searchableCategories]
  );

  if (variant === "sidebar") {
    return (
      <SidebarFilterInput
        query={query}
        onQueryChange={onQueryChange}
        placeholder={searchLabel}
        shortcutEnabled
      />
    );
  }

  return (
    <GlobalSearchBar
      placeholder={searchLabel}
      items={items}
      onSelect={(href) => router.push(href)}
      dialogTitle={searchLabel}
      dialogDescription={searchDescription}
      emptyMessage={emptyMessage}
      typography="chrome"
      className="max-w-[16rem]"
    />
  );
}

function SidebarFilterInput({
  query,
  onQueryChange,
  placeholder,
  shortcutEnabled,
}: {
  query: string;
  onQueryChange?: (query: string) => void;
  placeholder: string;
  shortcutEnabled: boolean;
}) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!shortcutEnabled) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [shortcutEnabled]);

  return (
    <div className={cn(globalSearchBarContainerClassName, "mb-[var(--space-stack-md)]")}>
      <SearchIcon className={globalSearchBarIconClassName} aria-hidden />
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={(event) => onQueryChange?.(event.target.value)}
        placeholder={placeholder}
        aria-label={placeholder}
        autoComplete="off"
        spellCheck={false}
        className={cn(
          inputVariants({ size: "sm" }),
          globalSearchBarFilterInputClassName,
          globalSearchBarChromeTypographyClassName
        )}
      />
      {shortcutEnabled ? (
        <CommandShortcut className={globalSearchBarShortcutClassName}>
          ⌘K
        </CommandShortcut>
      ) : null}
    </div>
  );
}
