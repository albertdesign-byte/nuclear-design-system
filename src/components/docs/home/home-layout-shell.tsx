import "../docs-shell.css";

import { DocsHeader } from "../layout/docs-header";

export function HomeLayoutShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="docs-shell flex min-h-full flex-col bg-background text-foreground">
      <DocsHeader showSearch />
      <div className="flex flex-1 flex-col">{children}</div>
    </div>
  );
}
