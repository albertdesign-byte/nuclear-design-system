import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { StageFlowBadgeDocsPage } from "@/components/docs/components/stage-flow-badge/stage-flow-badge-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/stage-flow-badge");

export default function StageFlowBadgeDocsRoute() {
  return <StageFlowBadgeDocsPage />;
}
