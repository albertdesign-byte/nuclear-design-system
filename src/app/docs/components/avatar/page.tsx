import type { Metadata } from "next";

import { AvatarDocsPage } from "@/components/docs/components/avatar/avatar-docs-page";

export const metadata: Metadata = {
  title: "Avatar",
  description: "Medmo Design System — Avatar component documentation.",
};

export default function AvatarDocsRoute() {
  return <AvatarDocsPage />;
}
