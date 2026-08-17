import type { Metadata } from "next";

import { getTemplateMetadata } from "@/components/docs/config/templates-registry";
import { MultiStepFlowLayoutDocsPage } from "@/components/docs/templates/multi-step-flow-layout-docs-page";

export const metadata: Metadata = getTemplateMetadata(
  "/docs/templates/multi-step-flow-layout"
);

export default function MultiStepFlowLayoutTemplateRoute() {
  return <MultiStepFlowLayoutDocsPage />;
}
