import type { DocsNavCategory } from "./navigation";

export const nuclearUserflowNavCategories: DocsNavCategory[] = [
  {
    id: "nuclear-user-flows",
    title: "User Flows",
    items: [{ title: "Dashboard", href: "/docs/userflow/nuclear/dashboard" }],
  },
];

const patientsUserflowNavCategoriesBase: DocsNavCategory[] = [
  {
    id: "patients-registration",
    title: "Registration",
    items: [
      { title: "Date of Birth", href: "/docs/userflow/patients/date-of-birth" },
      { title: "Welcome", href: "/docs/userflow/patients/welcome" },
      { title: "Home Address", href: "/docs/userflow/patients/home-address" },
      { title: "Email", href: "/docs/userflow/patients/email" },
      { title: "Contact Information", href: "#", comingSoon: true },
    ],
  },
  {
    id: "patients-payment",
    title: "Payment",
    items: [{ title: "Deposit", href: "/docs/userflow/patients/deposit" }],
  },
  {
    id: "patients-insurance",
    title: "Insurance",
    items: [
      { title: "Insurance Details", href: "/docs/userflow/patients/insurance" },
      { title: "Insurance Card", href: "/docs/userflow/patients/insurance-card" },
    ],
  },
  {
    id: "patients-consent",
    title: "Consent",
    items: [{ title: "Share Results", href: "/docs/userflow/patients/share-results" }],
  },
  {
    id: "patients-health",
    title: "Health",
    items: [
      { title: "Height and Weight", href: "/docs/userflow/patients/height-weight" },
      { title: "Prescription", href: "/docs/userflow/patients/prescription" },
      { title: "General Question", href: "/docs/userflow/patients/general-question" },
    ],
  },
  {
    id: "patients-scheduling",
    title: "Scheduling",
    items: [
      { title: "Availability", href: "/docs/userflow/patients/availability" },
      { title: "Availability Details", href: "/docs/userflow/patients/availability-details" },
    ],
  },
  {
    id: "patients-screening",
    title: "Screening",
    items: [
      { title: "COVID Screening", href: "/docs/userflow/patients/covid" },
      { title: "Assistance", href: "/docs/userflow/patients/assistance" },
      { title: "Assistance Details", href: "/docs/userflow/patients/assistance-details" },
    ],
  },
  {
    id: "patients-mammogram",
    title: "Mammogram",
    items: [
      { title: "Last Mammogram", href: "/docs/userflow/patients/mammogram" },
      { title: "Mammogram Date", href: "/docs/userflow/patients/mammogram-date" },
      { title: "Mammogram Location", href: "/docs/userflow/patients/mammogram-location" },
    ],
  },
  {
    id: "patients-confirmation",
    title: "Confirmation",
    items: [{ title: "Review & Submit", href: "#", comingSoon: true }],
  },
];

export const patientsUserflowNavCategories = patientsUserflowNavCategoriesBase;

export const nuclearUserflowNavDefaultOpenCategories =
  nuclearUserflowNavCategories.map((category) => category.id);

export const patientsUserflowNavDefaultOpenCategories =
  patientsUserflowNavCategories.map((category) => category.id);

export function getUserflowNavCategories(product: "nuclear" | "patients") {
  return product === "nuclear"
    ? nuclearUserflowNavCategories
    : patientsUserflowNavCategories;
}

export function getUserflowNavDefaultOpenCategories(product: "nuclear" | "patients") {
  return product === "nuclear"
    ? nuclearUserflowNavDefaultOpenCategories
    : patientsUserflowNavDefaultOpenCategories;
}

export type DocsUserflowNavEntry = {
  id: "nuclear" | "patients";
  title: string;
  description: string;
  href: string;
};

export const docsUserflowNavEntries: DocsUserflowNavEntry[] = [
  {
    id: "nuclear",
    title: "Nuclear",
    description: "Operational workflows for scan coordination and dashboard tooling.",
    href: "/docs/userflow/nuclear",
  },
  {
    id: "patients",
    title: "Patients",
    description: "Patient intake and registration screens for the Patients product.",
    href: "/docs/userflow/patients",
  },
];

export function getUserflowProductSlug(pathname: string): "nuclear" | "patients" | null {
  if (pathname.startsWith("/docs/userflow/nuclear")) {
    return "nuclear";
  }

  if (pathname.startsWith("/docs/userflow/patients")) {
    return "patients";
  }

  return null;
}

export function getUserflowScreenSlug(pathname: string): string | null {
  const match = pathname.match(/^\/docs\/userflow\/(?:nuclear|patients)\/([^/?#]+)/);
  return match?.[1] ?? null;
}
