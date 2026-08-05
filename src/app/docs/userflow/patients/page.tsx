import type { Metadata } from "next";

import { DocsUserflowOverview } from "@/components/docs/userflow/docs-userflow-overview";

export const metadata: Metadata = {
  title: "Patients",
};

export default function PatientsUserflowRoute() {
  return (
    <DocsUserflowOverview
      title="Patients"
      description="Patient intake and registration screens for the Patients product."
    />
  );
}
