import type { Metadata } from "next";

import { DropdownMenuDocsPage } from "@/components/docs/components/dropdown-menu/dropdown-menu-docs-page";

export const metadata: Metadata = {
  title: "Dropdown Menu",
  description: "Medmo Design System — Dropdown Menu component documentation.",
};

export default function DropdownMenuDocsRoute() {
  return <DropdownMenuDocsPage />;
}
