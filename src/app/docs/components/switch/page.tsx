import type { Metadata } from "next";

import { SwitchDocsPage } from "@/components/docs/components/switch/switch-docs-page";

export const metadata: Metadata = {
  title: "Switch",
  description: "Medmo Design System — Switch component documentation.",
};

export default function SwitchDocsRoute() {
  return <SwitchDocsPage />;
}
