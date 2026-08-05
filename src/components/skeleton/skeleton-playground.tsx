"use client";

import { Skeleton } from "@/components/skeleton";
import { ThemeToggle } from "@/components/theme-toggle";

export function SkeletonPlayground() {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-8 p-8">
      <header className="flex flex-col gap-2 border-b border-border pb-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Component Library
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Skeleton Playground
          </h1>
        </div>
        <ThemeToggle />
      </header>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Patient card loading</h2>
        <div className="flex max-w-sm items-start gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="flex flex-1 flex-col gap-2">
            <Skeleton className="h-4 w-3/5" />
            <Skeleton className="h-3 w-4/5" />
            <Skeleton className="h-3 w-2/5" />
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-sm font-semibold">Form fields</h2>
        <div className="flex max-w-sm flex-col gap-3">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-10 w-full" />
          <Skeleton className="h-3 w-32" />
          <Skeleton className="h-10 w-full" />
        </div>
      </section>
    </div>
  );
}
