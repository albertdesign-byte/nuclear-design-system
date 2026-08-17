import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type InteractionState = "Default" | "Hover" | "Focus" | "Active" | "Disabled";

export type { InteractionState };

const stateClassName: Record<InteractionState, string> = {
  Default: "",
  Hover: "sb-state-hover",
  Focus: "sb-state-focus",
  Active: "sb-state-active",
  Disabled: "sb-state-disabled",
};

export function InteractionStateGrid({
  children,
  disabled,
  className,
}: {
  children: (state: InteractionState) => ReactNode;
  disabled?: ReactNode;
  className?: string;
}) {
  const states: InteractionState[] = ["Default", "Hover", "Focus", "Active", "Disabled"];

  return (
    <div
      className={cn(
        "grid gap-[var(--space-stack-md)] sm:grid-cols-2 xl:grid-cols-5",
        className
      )}
    >
      {states.map((state) => (
        <div
          key={state}
          className="flex flex-col gap-[var(--space-stack-sm)] rounded-[var(--radius-md)] border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-[var(--space-inline-md)]"
        >
          <span className="text-[length:var(--text-caption-size)] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
            {state}
          </span>
          <div className={cn("flex min-h-12 items-center", stateClassName[state])}>
            {state === "Disabled" && disabled !== undefined ? disabled : children(state)}
          </div>
        </div>
      ))}
    </div>
  );
}
