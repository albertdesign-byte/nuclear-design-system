import type { Metadata } from "next";

import { ButtonDocsPage } from "@/components/docs/components/button/button-docs-page";

export const metadata: Metadata = {
  title: "Button",
  description: "Medmo Design System — Button component documentation.",
};

export default function ButtonDocsRoute() {
  return <ButtonDocsPage />;
}
