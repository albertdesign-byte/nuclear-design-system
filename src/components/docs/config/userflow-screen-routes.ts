import type { Metadata } from "next";
import type { ComponentType } from "react";

import { UserflowDashboardPage } from "@/components/docs/userflow/userflow-dashboard-page";
import { PatientsDateOfBirthScreenPage } from "@/components/docs/userflow/patients/patients-date-of-birth-screen-page";
import { PatientsWelcomeScreenPage } from "@/components/docs/userflow/patients/patients-welcome-screen-page";
import { PatientsDepositScreenPage } from "@/components/docs/userflow/patients/patients-deposit-screen-page";
import { PatientsInsuranceScreenPage } from "@/components/docs/userflow/patients/patients-insurance-screen-page";
import { PatientsInsuranceCardScreenPage } from "@/components/docs/userflow/patients/patients-insurance-card-screen-page";
import { PatientsShareResultsScreenPage } from "@/components/docs/userflow/patients/patients-share-results-screen-page";
import { PatientsHeightWeightScreenPage } from "@/components/docs/userflow/patients/patients-height-weight-screen-page";
import { PatientsPrescriptionScreenPage } from "@/components/docs/userflow/patients/patients-prescription-screen-page";
import { PatientsGeneralQuestionScreenPage } from "@/components/docs/userflow/patients/patients-general-question-screen-page";
import { PatientsHomeAddressScreenPage } from "@/components/docs/userflow/patients/patients-home-address-screen-page";
import { PatientsEmailScreenPage } from "@/components/docs/userflow/patients/patients-email-screen-page";
import { PatientsAvailabilityScreenPage } from "@/components/docs/userflow/patients/patients-availability-screen-page";
import { PatientsAvailabilityDetailsScreenPage } from "@/components/docs/userflow/patients/patients-availability-details-screen-page";
import { PatientsCovidScreenPage } from "@/components/docs/userflow/patients/patients-covid-screen-page";
import { PatientsAssistanceScreenPage } from "@/components/docs/userflow/patients/patients-assistance-screen-page";
import { PatientsAssistanceDetailsScreenPage } from "@/components/docs/userflow/patients/patients-assistance-details-screen-page";
import { PatientsMammogramScreenPage } from "@/components/docs/userflow/patients/patients-mammogram-screen-page";
import { PatientsMammogramDateScreenPage } from "@/components/docs/userflow/patients/patients-mammogram-date-screen-page";
import { PatientsMammogramLocationScreenPage } from "@/components/docs/userflow/patients/patients-mammogram-location-screen-page";

export type UserflowScreenRoute = {
  component: ComponentType;
  metadata: Metadata;
  product: "nuclear" | "patients";
  devicePreview?: boolean;
};

export const nuclearUserflowScreenRoutes: Record<string, UserflowScreenRoute> = {
  dashboard: {
    product: "nuclear",
    component: UserflowDashboardPage,
    metadata: {
      title: "Dashboard",
      description: "Medmo Design System — Nuclear dashboard user flow.",
    },
  },
};

export const patientsUserflowScreenRoutes: Record<string, UserflowScreenRoute> = {
  "date-of-birth": {
    product: "patients",
    devicePreview: true,
    component: PatientsDateOfBirthScreenPage,
    metadata: {
      title: "Date of Birth",
      description: "Medmo Design System — Patients date of birth intake screen.",
    },
  },
  welcome: {
    product: "patients",
    devicePreview: true,
    component: PatientsWelcomeScreenPage,
    metadata: {
      title: "Welcome",
      description: "Medmo Design System — Patients welcome and scheduling intro screen.",
    },
  },
  deposit: {
    product: "patients",
    devicePreview: true,
    component: PatientsDepositScreenPage,
    metadata: {
      title: "Deposit",
      description: "Medmo Design System — Patients deposit checkout screen.",
    },
  },
  insurance: {
    product: "patients",
    devicePreview: true,
    component: PatientsInsuranceScreenPage,
    metadata: {
      title: "Insurance",
      description: "Medmo Design System — Patients insurance details screen.",
    },
  },
  "insurance-card": {
    product: "patients",
    devicePreview: true,
    component: PatientsInsuranceCardScreenPage,
    metadata: {
      title: "Insurance Card",
      description: "Medmo Design System — Patients insurance card upload screen.",
    },
  },
  "share-results": {
    product: "patients",
    devicePreview: true,
    component: PatientsShareResultsScreenPage,
    metadata: {
      title: "Share Results",
      description: "Medmo Design System — Patients radiology results consent screen.",
    },
  },
  "height-weight": {
    product: "patients",
    devicePreview: true,
    component: PatientsHeightWeightScreenPage,
    metadata: {
      title: "Height and Weight",
      description: "Medmo Design System — Patients height and weight intake screen.",
    },
  },
  prescription: {
    product: "patients",
    devicePreview: true,
    component: PatientsPrescriptionScreenPage,
    metadata: {
      title: "Prescription",
      description: "Medmo Design System — Patients prescription upload screen.",
    },
  },
  "general-question": {
    product: "patients",
    devicePreview: true,
    component: PatientsGeneralQuestionScreenPage,
    metadata: {
      title: "General Question",
      description: "Medmo Design System — Patients dynamic general question screen.",
    },
  },
  "home-address": {
    product: "patients",
    devicePreview: true,
    component: PatientsHomeAddressScreenPage,
    metadata: {
      title: "Home Address",
      description: "Medmo Design System — Patients home address intake screen.",
    },
  },
  email: {
    product: "patients",
    devicePreview: true,
    component: PatientsEmailScreenPage,
    metadata: {
      title: "Email",
      description: "Medmo Design System — Patients optional email intake screen.",
    },
  },
  availability: {
    product: "patients",
    devicePreview: true,
    component: PatientsAvailabilityScreenPage,
    metadata: {
      title: "Availability",
      description: "Medmo Design System — Patients scheduling availability screen.",
    },
  },
  "availability-details": {
    product: "patients",
    devicePreview: true,
    component: PatientsAvailabilityDetailsScreenPage,
    metadata: {
      title: "Availability Details",
      description: "Medmo Design System — Patients optional availability details screen.",
    },
  },
  covid: {
    product: "patients",
    devicePreview: true,
    component: PatientsCovidScreenPage,
    metadata: {
      title: "COVID Screening",
      description: "Medmo Design System — Patients COVID-19 symptoms screening screen.",
    },
  },
  assistance: {
    product: "patients",
    devicePreview: true,
    component: PatientsAssistanceScreenPage,
    metadata: {
      title: "Assistance",
      description: "Medmo Design System — Patients visit assistance needs screen.",
    },
  },
  "assistance-details": {
    product: "patients",
    devicePreview: true,
    component: PatientsAssistanceDetailsScreenPage,
    metadata: {
      title: "Assistance Details",
      description: "Medmo Design System — Patients optional assistance details screen.",
    },
  },
  mammogram: {
    product: "patients",
    devicePreview: true,
    component: PatientsMammogramScreenPage,
    metadata: {
      title: "Mammogram",
      description: "Medmo Design System — Patients last mammogram intake screen.",
    },
  },
  "mammogram-date": {
    product: "patients",
    devicePreview: true,
    component: PatientsMammogramDateScreenPage,
    metadata: {
      title: "Mammogram Date",
      description: "Medmo Design System — Patients last mammogram date screen.",
    },
  },
  "mammogram-location": {
    product: "patients",
    devicePreview: true,
    component: PatientsMammogramLocationScreenPage,
    metadata: {
      title: "Mammogram Location",
      description: "Medmo Design System — Patients last mammogram location screen.",
    },
  },
};

export const userflowScreenRoutes: Record<string, UserflowScreenRoute> = {
  ...Object.fromEntries(
    Object.entries(nuclearUserflowScreenRoutes).map(([slug, route]) => [
      `nuclear/${slug}`,
      route,
    ])
  ),
  ...Object.fromEntries(
    Object.entries(patientsUserflowScreenRoutes).map(([slug, route]) => [
      `patients/${slug}`,
      route,
    ])
  ),
};

export const nuclearUserflowScreenSlugs = Object.keys(nuclearUserflowScreenRoutes);
export const patientsUserflowScreenSlugs = Object.keys(patientsUserflowScreenRoutes);

export function getUserflowRouteKey(product: "nuclear" | "patients", slug: string) {
  return `${product}/${slug}`;
}

export function getUserflowPatientsScreenSlug(pathname: string): string | null {
  const match = pathname.match(/^\/docs\/userflow\/patients\/([^/?#]+)/);
  return match?.[1] ?? null;
}

export function userflowSlugSupportsDevicePreview(slug: string | null) {
  if (!slug) {
    return false;
  }

  return patientsUserflowScreenRoutes[slug]?.devicePreview === true;
}
