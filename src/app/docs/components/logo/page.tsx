import type { Metadata } from "next";

import { getComponentMetadata } from "@/components/docs/config/components-registry";

import { LogoDocsPage } from "@/components/docs/components/logo/logo-docs-page";

export const metadata: Metadata = getComponentMetadata("/docs/components/logo");

export default function LogoDocsRoute() {
  return <LogoDocsPage />;
}
