import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { SkeletonDocsPage } from "@/components/docs/components/skeleton/skeleton-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/skeleton");

export default function SkeletonDocsRoute() {
  return <SkeletonDocsPage />;
}
