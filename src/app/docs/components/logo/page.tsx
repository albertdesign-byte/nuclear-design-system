import type { Metadata } from "next";

import { LogoDocsPage } from "@/components/docs/components/logo/logo-docs-page";

export const metadata: Metadata = {
  title: "Logo",
  description: "Medmo Design System — Logo component documentation.",
};

export default function LogoDocsRoute() {
  return <LogoDocsPage />;
}
