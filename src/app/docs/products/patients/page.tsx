import type { Metadata } from "next";

import { DocsProductOverview } from "@/components/docs/products/docs-product-overview";

export const metadata: Metadata = {
  title: "Patients",
};

export default function PatientsProductRoute() {
  return (
    <DocsProductOverview
      title="Patients"
      description="Patient intake, registration, payment, insurance, consent, scheduling, and screening implementations built from the shared Nuclear Design System."
    />
  );
}
