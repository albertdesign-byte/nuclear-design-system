"use client";

import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { GlobalSearchBar } from "@/components/global-search-bar";
import { cn } from "@/lib/utils";

import {
  docsNavCategories,
} from "../config/navigation";
import {
  nuclearProductNavCategories,
  patientsProductNavCategories,
} from "../config/products-navigation";
import {
  nuclearUserflowNavCategories,
  patientsUserflowNavCategories,
} from "../config/userflow-navigation";

function filterSearchableCategories(
  categories: typeof docsNavCategories
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

const componentSearchCategories = filterSearchableCategories(docsNavCategories);
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
      case "userflow-nuclear":
        return nuclearUserflowSearchCategories;
      case "userflow-patients":
        return patientsUserflowSearchCategories;
      case "products-nuclear":
        return nuclearSearchCategories;
      case "products-patients":
        return patientsSearchCategories;
      default:
        return componentSearchCategories;
    }
  }, [scope]);

  const searchLabel = useMemo(() => {
    switch (scope) {
      case "userflow-nuclear":
        return "Search Nuclear user flows";
      case "userflow-patients":
        return "Search Patients user flows";
      case "products-nuclear":
        return "Search Nuclear components";
      case "products-patients":
        return "Search Patients components";
      default:
        return "Search components";
    }
  }, [scope]);

  const searchDescription = useMemo(() => {
    switch (scope) {
      case "userflow-nuclear":
        return "Find Nuclear user flow screens by name";
      case "userflow-patients":
        return "Find Patients user flow screens by name";
      case "products-nuclear":
        return "Find Nuclear product components linked to shared documentation";
      case "products-patients":
        return "Find Patients product components linked to shared documentation";
      default:
        return "Find documentation pages by component name or category";
    }
  }, [scope]);

  const emptyMessage = useMemo(() => {
    switch (scope) {
      case "userflow-nuclear":
        return "No Nuclear user flows found.";
      case "userflow-patients":
        return "No Patients user flows found.";
      case "products-nuclear":
        return "No Nuclear components found.";
      case "products-patients":
        return "No Patients components found.";
      default:
        return "No components found.";
    }
  }, [scope]);

  const items = useMemo(
    () =>
      searchableCategories.flatMap((category) =>
        category.items.map((item) => ({
          label: item.title,
          value: item.href,
          group: category.title,
        }))
      ),
    [searchableCategories]
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
