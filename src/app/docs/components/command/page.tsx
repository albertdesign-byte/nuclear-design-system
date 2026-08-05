import type { Metadata } from "next";

import { CommandDocsPage } from "@/components/docs/components/command/command-docs-page";

export const metadata: Metadata = {
  title: "Command",
  description: "Medmo Design System — Command component documentation.",
};

export default function CommandDocsRoute() {
  return <CommandDocsPage />;
}
