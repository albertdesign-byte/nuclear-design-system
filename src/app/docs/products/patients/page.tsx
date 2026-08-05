import type { Metadata } from "next";

import { DocsProductOverview } from "@/components/docs/products/docs-product-overview";

export const metadata: Metadata = {
  title: "Patients",
};

export default function PatientsProductRoute() {
  return (
    <DocsProductOverview
      title="Patients"
      description="Component map for the Patients product, based on the Figma inventory. Available components link to the shared library."
    />
  );
}
