import type { Metadata } from "next";

import { AppFooterDocsPage } from "@/components/docs/components/app-footer/app-footer-docs-page";

export const metadata: Metadata = {
  title: "App Footer",
  description: "Medmo Design System — App Footer component documentation.",
};

export default function AppFooterDocsRoute() {
  return <AppFooterDocsPage />;
}
