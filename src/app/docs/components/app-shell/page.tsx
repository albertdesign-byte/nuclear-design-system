import type { Metadata } from "next";

import { AppShellDocsPage } from "@/components/docs/components/app-shell/app-shell-docs-page";

export const metadata: Metadata = {
  title: "App Shell",
  description: "Medmo Design System — App Shell layout documentation.",
};

export default function AppShellDocsRoute() {
  return <AppShellDocsPage />;
}
