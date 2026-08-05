import type { Metadata } from "next";

import { SkeletonDocsPage } from "@/components/docs/components/skeleton/skeleton-docs-page";

export const metadata: Metadata = {
  title: "Skeleton",
  description: "Medmo Design System — Skeleton component documentation.",
};

export default function SkeletonDocsRoute() {
  return <SkeletonDocsPage />;
}
