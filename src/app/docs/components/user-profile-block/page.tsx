import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { UserProfileBlockDocsPage } from "@/components/docs/components/user-profile-block/user-profile-block-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/user-profile-block");

export default function UserProfileBlockDocsRoute() {
  return <UserProfileBlockDocsPage />;
}
