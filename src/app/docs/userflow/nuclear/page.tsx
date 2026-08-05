import type { Metadata } from "next";

import { DocsUserflowOverview } from "@/components/docs/userflow/docs-userflow-overview";

export const metadata: Metadata = {
  title: "Nuclear",
};

export default function NuclearUserflowRoute() {
  return (
    <DocsUserflowOverview
      title="Nuclear"
      description="Operational user flows for scan coordination, dashboard tooling, and agent workflows."
    />
  );
}
