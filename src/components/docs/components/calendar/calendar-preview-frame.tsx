import type { ReactNode } from "react";

export function CalendarPreviewFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className={[
        "w-fit rounded-[var(--radius-lg)] border border-[var(--color-border-subtle)]",
        "bg-[var(--color-surface-floating)] shadow-[var(--shadow-md)] ring-1 ring-[var(--color-border-subtle)]",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
