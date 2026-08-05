import type { Metadata } from "next";

import { DocsProductOverview } from "@/components/docs/products/docs-product-overview";

export const metadata: Metadata = {
  title: "Nuclear",
};

export default function NuclearProductRoute() {
  return (
    <DocsProductOverview
      title="Nuclear"
      description="Component map for the Nuclear product. All entries link to the shared component library."
    />
  );
}
