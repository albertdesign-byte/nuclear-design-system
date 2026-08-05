import type { DocsNavCategory } from "./navigation";
import { docsComponentCategories } from "./navigation";
import { toPatientsProductHref } from "./patients-component-routes";

/** Nuclear reuses the shared component library map without duplicating entries. */
export const nuclearProductNavCategories: DocsNavCategory[] = docsComponentCategories;

const patientsProductNavCategoriesBase: DocsNavCategory[] = [
  {
    id: "patients-application-shell",
    title: "Application Shell",
    items: [
      { title: "Header", href: "#", comingSoon: true },
      { title: "Footer", href: "/docs/components/app-footer" },
      { title: "Progress", href: "#", comingSoon: true },
      { title: "Logo", href: "/docs/components/logo" },
    ],
  },
  {
    id: "patients-inputs",
    title: "Inputs",
    items: [
      { title: "Input field", href: "/docs/components/input" },
      { title: "Payment Form", href: "/docs/components/payment-form" },
      { title: "Dropzone", href: "/docs/components/dropzone" },
      { title: "Card Name", href: "#", comingSoon: true },
    ],
  },
  {
    id: "patients-actions",
    title: "Actions",
    items: [
      { title: "Button", href: "/docs/components/button" },
      { title: "Secondary Button", href: "/docs/components/button#secondary" },
      { title: "Standalone Link", href: "/docs/components/text-link" },
    ],
  },
  {
    id: "patients-selection",
    title: "Selection",
    items: [
      { title: "Checkbox", href: "/docs/components/checkbox" },
      { title: "Radio Button", href: "/docs/components/radio-group" },
      { title: "Day Toggle Group", href: "/docs/components/day-toggle-group" },
      { title: "Chips", href: "/docs/components/chip" },
    ],
  },
  {
    id: "patients-overlay",
    title: "Overlay",
    items: [{ title: "Modal", href: "/docs/components/dialog" }],
  },
  {
    id: "patients-date-calendar",
    title: "Date / Calendar",
    items: [{ title: "Calendar Cell", href: "/docs/components/date-range-picker" }],
  },
  {
    id: "patients-feedback",
    title: "Feedback",
    items: [
      { title: "Alert", href: "/docs/components/alert" },
      { title: "Error", href: "/docs/components/field-error" },
    ],
  },
  {
    id: "patients-payment",
    title: "Payment",
    items: [{ title: "Deposit Summary", href: "/docs/components/deposit-summary" }],
  },
  {
    id: "patients-layout-docs",
    title: "Layout / Docs",
    items: [
      { title: "Section", href: "#", comingSoon: true },
      { title: "Section Header", href: "#", comingSoon: true },
      { title: "Divider", href: "/docs/components/separator" },
    ],
  },
  {
    id: "patients-media",
    title: "Media",
    items: [
      { title: "Icon", href: "#", comingSoon: true },
      { title: "Video", href: "#", comingSoon: true },
    ],
  },
];

export const patientsProductNavCategories: DocsNavCategory[] =
  patientsProductNavCategoriesBase.map((category) => ({
    ...category,
    items: category.items.map((item) => ({
      ...item,
      href: toPatientsProductHref(item.href),
    })),
  }));

export const nuclearProductNavDefaultOpenCategories = nuclearProductNavCategories.map(
  (category) => category.id
);

export const patientsProductNavDefaultOpenCategories = patientsProductNavCategories.map(
  (category) => category.id
);

export function getProductNavCategories(product: "nuclear" | "patients") {
  return product === "nuclear"
    ? nuclearProductNavCategories
    : patientsProductNavCategories;
}

export function getProductNavDefaultOpenCategories(product: "nuclear" | "patients") {
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
    id: "nuclear",
    title: "Nuclear",
    description: "Component map for scan workflows and operational tooling.",
    href: "/docs/products/nuclear",
  },
  {
    id: "patients",
    title: "Patients",
    description: "Component map for patient intake and registration flows.",
    href: "/docs/products/patients",
  },
];
