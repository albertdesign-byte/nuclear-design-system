import type { Metadata } from "next";

import { getFoundationEntry } from "@/components/docs/config/foundations-registry";
import { IconsDocsPage } from "@/components/docs/foundations/icons/icons-docs-page";

const foundation = getFoundationEntry("/docs/foundations/icons")!;
export const metadata: Metadata = {
  title: foundation.title,
  description: foundation.description,
};

export default function IconsFoundationRoute() {
  return <IconsDocsPage />;
}
