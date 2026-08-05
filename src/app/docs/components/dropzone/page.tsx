import type { Metadata } from "next";

import { DropzoneDocsPage } from "@/components/docs/components/dropzone/dropzone-docs-page";

export const metadata: Metadata = {
  title: "Dropzone",
  description: "Medmo Design System — Dropzone component documentation.",
};

export default function DropzoneDocsRoute() {
  return <DropzoneDocsPage />;
}
