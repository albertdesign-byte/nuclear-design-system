import type { Metadata } from "next";

import { DocsUserflowOverview } from "@/components/docs/userflow/docs-userflow-overview";

export const metadata: Metadata = {
  title: "MPF Portal",
};

export default function NuclearUserflowRoute() {
  return (
    <DocsUserflowOverview
      title="MPF Portal"
      description="Operational user flows for scan coordination, dashboard tooling, and agent workflows."
    />
  );
}
