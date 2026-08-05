import type { Metadata } from "next";

import { SonnerDocsPage } from "@/components/docs/components/sonner/sonner-docs-page";

export const metadata: Metadata = {
  title: "Sonner",
  description: "Medmo Design System — Sonner toast component documentation.",
};

export default function SonnerDocsRoute() {
  return <SonnerDocsPage />;
}
