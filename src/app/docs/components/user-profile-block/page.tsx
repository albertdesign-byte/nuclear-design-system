import type { Metadata } from "next";

import { UserProfileBlockDocsPage } from "@/components/docs/components/user-profile-block/user-profile-block-docs-page";

export const metadata: Metadata = {
  title: "User Profile Block",
  description: "Medmo Design System — User Profile Block component documentation.",
};

export default function UserProfileBlockDocsRoute() {
  return <UserProfileBlockDocsPage />;
}
