import type { Metadata } from "next";

import { AlertDocsPage } from "@/components/docs/components/alert/alert-docs-page";

export const metadata: Metadata = {
  title: "Alert",
  description: "Medmo Design System — Alert component documentation.",
};

export default function AlertDocsRoute() {
  return <AlertDocsPage />;
}
