import type { Metadata } from "next";

import { StageFlowBadgeDocsPage } from "@/components/docs/components/stage-flow-badge/stage-flow-badge-docs-page";

export const metadata: Metadata = {
  title: "Stage Flow Badge",
  description: "Medmo Design System — Stage Flow Badge component documentation.",
};

export default function StageFlowBadgeDocsRoute() {
  return <StageFlowBadgeDocsPage />;
}
