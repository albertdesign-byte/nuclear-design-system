import type { Metadata } from "next";

import { SpinnerDocsPage } from "@/components/docs/components/spinner/spinner-docs-page";

export const metadata: Metadata = {
  title: "Spinner",
  description: "Medmo Design System — Spinner component documentation.",
};

export default function SpinnerDocsRoute() {
  return <SpinnerDocsPage />;
}
