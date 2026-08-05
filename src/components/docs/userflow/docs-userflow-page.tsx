import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function DocsUserflowPage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "flex min-h-[calc(100vh-var(--docs-header-height))] min-w-0 flex-1 flex-col overflow-hidden bg-[var(--color-background)]",
        className
      )}
    >
      {children}
    </main>
  );
}
