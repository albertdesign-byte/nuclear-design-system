import type { Metadata } from "next";

import { getTemplateMetadata } from "@/components/docs/config/templates-registry";
import { AppShellDocsPage } from "@/components/docs/components/app-shell/app-shell-docs-page";

export const metadata: Metadata = getTemplateMetadata("/docs/templates/app-shell");

export default function AppShellTemplateRoute() {
  return <AppShellDocsPage />;
}
