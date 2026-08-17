import type { Metadata } from "next";

import { DocsProductOverview } from "@/components/docs/products/docs-product-overview";

export const metadata: Metadata = {
  title: "MPF Portal",
};

export default function NuclearProductRoute() {
  return (
    <DocsProductOverview
      title="MPF Portal"
      description="Operational study coordination and dashboard implementations built from the shared Nuclear Design System."
    />
  );
}
