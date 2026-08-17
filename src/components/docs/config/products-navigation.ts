import type { DocsNavCategory } from "./navigation";
import {
  nuclearUserflowNavCategories,
  patientsUserflowNavCategories,
} from "./userflow-navigation";

const nuclearProductOverviewCategory: DocsNavCategory = {
  id: "mpf-portal-overview",
  title: "MPF Portal",
  items: [{ title: "Overview", href: "/docs/products/nuclear" }],
};

const patientsProductOverviewCategory: DocsNavCategory = {
  id: "patients-overview",
  title: "Patients",
  items: [{ title: "Overview", href: "/docs/products/patients" }],
};

/**
 * Product navigation presents real implementations only. Existing userflow
 * routes remain canonical during Navigation First and are reused here.
 */
export const nuclearProductNavCategories: DocsNavCategory[] = [
  nuclearProductOverviewCategory,
  ...nuclearUserflowNavCategories,
];

export const patientsProductNavCategories: DocsNavCategory[] = [
  patientsProductOverviewCategory,
  ...patientsUserflowNavCategories,
];

export const nuclearProductNavDefaultOpenCategories =
  nuclearProductNavCategories.map((category) => category.id);

export const patientsProductNavDefaultOpenCategories =
  patientsProductNavCategories.map((category) => category.id);

export function getProductNavCategories(product: "nuclear" | "patients") {
  return product === "nuclear"
    ? nuclearProductNavCategories
    : patientsProductNavCategories;
}

export function getProductNavDefaultOpenCategories(
  product: "nuclear" | "patients"
) {
  return product === "nuclear"
    ? nuclearProductNavDefaultOpenCategories
    : patientsProductNavDefaultOpenCategories;
}

export type DocsProductNavEntry = {
  id: "nuclear" | "patients";
  title: string;
  description: string;
  href: string;
};

export const docsProductNavEntries: DocsProductNavEntry[] = [
  {
    id: "patients",
    title: "Patients",
    description: "Patient intake and registration implementations.",
    href: "/docs/products/patients",
  },
  {
    id: "nuclear",
    title: "MPF Portal",
    description: "Operational study coordination and dashboard implementations.",
    href: "/docs/products/nuclear",
  },
];

export const productsNavCategories: DocsNavCategory[] = [
  {
    id: "products",
    title: "Products",
    items: [
      { title: "Overview", href: "/docs/products" },
      ...docsProductNavEntries.map((product) => ({
        title: product.title,
        href: product.href,
      })),
    ],
  },
];

export const productsNavDefaultOpenCategories = ["products"];
