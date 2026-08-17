import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { AvatarDocsPage } from "@/components/docs/components/avatar/avatar-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/avatar");

export default function AvatarDocsRoute() {
  return <AvatarDocsPage />;
}
