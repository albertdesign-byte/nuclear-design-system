"use client";

import { StageFlowBadge } from "@/components/stage-flow-badge";
import { ThemeToggle } from "@/components/theme-toggle";

export function StageFlowBadgePlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Stage Flow Badge Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="flex flex-col gap-6 rounded-lg border border-border bg-card p-6">
        <div>
          <h2 className="mb-3 text-sm font-semibold">PX_task pipeline</h2>
          <div className="flex flex-wrap gap-2">
            <StageFlowBadge variant="success">Requested</StageFlowBadge>
            <StageFlowBadge variant="success">MS1 Approved</StageFlowBadge>
            <StageFlowBadge variant="warning">Pending payer</StageFlowBadge>
            <StageFlowBadge variant="neutral" hideArrow>
              Scheduled
            </StageFlowBadge>
          </div>
        </div>

        <div>
          <h2 className="mb-3 text-sm font-semibold">Variants</h2>
          <div className="flex flex-wrap gap-2">
            <StageFlowBadge variant="default">Default</StageFlowBadge>
            <StageFlowBadge variant="success">Success</StageFlowBadge>
            <StageFlowBadge variant="warning">Warning</StageFlowBadge>
            <StageFlowBadge variant="neutral" hideArrow>
              Neutral
            </StageFlowBadge>
          </div>
        </div>
      </section>
    </div>
  );
}
