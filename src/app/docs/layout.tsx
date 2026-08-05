import { DocsLayoutShell } from "@/components/docs/layout/docs-layout-shell";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <DocsLayoutShell>{children}</DocsLayoutShell>;
}
