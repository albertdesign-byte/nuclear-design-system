import type { Metadata } from "next";

import { AlertDialogDocsPage } from "@/components/docs/components/alert-dialog/alert-dialog-docs-page";

export const metadata: Metadata = {
  title: "Alert Dialog",
  description: "Medmo Design System — Alert Dialog component documentation.",
};

export default function AlertDialogDocsRoute() {
  return <AlertDialogDocsPage />;
}
