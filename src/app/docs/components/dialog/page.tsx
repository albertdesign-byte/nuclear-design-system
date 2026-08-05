import type { Metadata } from "next";

import { DialogDocsPage } from "@/components/docs/components/dialog/dialog-docs-page";

export const metadata: Metadata = {
  title: "Dialog",
  description: "Medmo Design System — Dialog component documentation.",
};

export default function DialogDocsRoute() {
  return <DialogDocsPage />;
}
