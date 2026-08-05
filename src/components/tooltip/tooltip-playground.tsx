"use client";

import { CircleHelpIcon } from "lucide-react";

import { Button } from "@/components/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/tooltip";
import { ThemeToggle } from "@/components/theme-toggle";

export function TooltipPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Tooltip Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,280px)_1fr]">
        <aside className="flex flex-col gap-4 rounded-lg border border-border bg-card p-4 text-sm text-muted-foreground">
          Hover or focus the trigger to preview tokenized floating surfaces.
        </aside>

        <div className="flex flex-col gap-8">
          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Clinical term</h2>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Button variant="ghost" size="icon-md" aria-label="Explain HbA1c" />
                }
              >
                <CircleHelpIcon />
              </TooltipTrigger>
              <TooltipContent side="top">
                HbA1c mide el promedio de glucosa en sangre durante 2–3 meses.
              </TooltipContent>
            </Tooltip>
          </section>

          <section className="rounded-lg border border-border bg-card p-6">
            <h2 className="mb-4 text-sm font-semibold">Placement</h2>
            <div className="flex flex-wrap gap-4">
              {(["top", "right", "bottom", "left"] as const).map((side) => (
                <Tooltip key={side}>
                  <TooltipTrigger
                    render={
                      <Button variant="outline" size="sm">
                        {side}
                      </Button>
                    }
                  />
                  <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
                </Tooltip>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
