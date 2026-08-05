import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function DocsProductPage({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <main
      className={cn(
        "flex min-h-[calc(100vh-var(--docs-header-height))] min-w-0 flex-1 flex-col",
        "px-[var(--docs-page-padding-x)] py-[var(--space-page)]",
        className
      )}
    >
      {children}
    </main>
  );
}
