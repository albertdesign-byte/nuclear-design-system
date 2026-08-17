"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { GlobalSearchBar } from "@/components/global-search-bar";
import { cn } from "@/lib/utils";

import {
  foundationsNavCategories,
  patternsNavCategories,
  templatesNavCategories,
  type DocsNavCategory,
} from "../config/navigation";
import { getComponentSearchEntries } from "../config/components-registry";
import { getFoundationSearchEntries } from "../config/foundations-registry";
import { getPatternSearchEntries } from "../config/patterns-registry";
import { getTemplateSearchEntries } from "../config/templates-registry";
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

type DocsSearchScope =
  | "components"
  | "foundations"
  | "patterns"
  | "templates"
  | "products"
  | "userflow-nuclear"
  | "userflow-patients"
  | "products-nuclear"
  | "products-patients";

type DocsSearchProps = {
  variant?: "sidebar" | "header";
  scope?: DocsSearchScope;
};

export function DocsSearch({
  variant = "sidebar",
  scope = "components",
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

  const emptyMessage = useMemo(() => {
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
  }, [scope]);

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

  return (
    <GlobalSearchBar
      placeholder={searchLabel}
      items={items}
      onSelect={(href) => router.push(href)}
      dialogTitle={searchLabel}
      dialogDescription={searchDescription}
      emptyMessage={emptyMessage}
      className={cn(variant === "header" ? "max-w-[16rem]" : "mb-[var(--space-stack-md)]")}
    />
  );
}
